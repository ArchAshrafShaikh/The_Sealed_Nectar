/* Voice and sound.
   - Recordings (the parent's voice, and the child's retelling) are kept in this browser's IndexedDB.
   - Narration plays a recording if there is one, otherwise the device voice, otherwise reports "none".
   - Small sounds and the background (wind by day, crickets by night) are made in the browser. No music. */
(function () {
  const SN = (window.SN = window.SN || {});
  const A = (SN.audio = {});

  /* ---------- storage ---------- */
  let dbp = null;
  const mem = new Map(); // used if IndexedDB is unavailable
  function db() {
    if (dbp) return dbp;
    dbp = new Promise((res) => {
      try {
        const r = indexedDB.open("sealed-nectar", 1);
        r.onupgradeneeded = () => r.result.createObjectStore("rec");
        r.onsuccess = () => res(r.result);
        r.onerror = () => res(null);
      } catch (e) { res(null); }
    });
    return dbp;
  }
  async function tx(mode, fn) {
    const d = await db();
    if (!d) { const q = fn(null); return q && q.result; }
    return new Promise((res, rej) => {
      const t = d.transaction("rec", mode), s = t.objectStore("rec");
      const q = fn(s);
      t.oncomplete = () => res(q && q.result);
      t.onerror = () => rej(t.error);
    });
  }
  A.get = (k) => tx("readonly", (s) => (s ? s.get(k) : { result: mem.get(k) }));
  A.put = (k, v) => tx("readwrite", (s) => (s ? s.put(v, k) : (mem.set(k, v), null)));
  A.del = (k) => tx("readwrite", (s) => (s ? s.delete(k) : (mem.delete(k), null)));
  A.keys = () => tx("readonly", (s) => (s ? s.getAllKeys() : { result: [...mem.keys()] })).then((k) => k || []);

  /* ---------- recording ---------- */
  let rec = null;
  A.canRecord = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  A.recording = () => !!rec;
  A.startRec = async function () {
    if (rec) return;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream);
    const chunks = [];
    mr.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    rec = { mr, stream, chunks, t0: Date.now() };
    mr.start();
  };
  A.stopRec = function (key) {
    return new Promise((res) => {
      if (!rec) return res(null);
      const r = rec; rec = null;
      r.mr.onstop = async () => {
        r.stream.getTracks().forEach((t) => t.stop());
        const v = { blob: new Blob(r.chunks, { type: r.mr.mimeType || "audio/webm" }), dur: (Date.now() - r.t0) / 1000 };
        if (key) await A.put(key, v);
        res(v);
      };
      r.mr.stop();
    });
  };

  /* ---------- device voice ---------- */
  const synth = window.speechSynthesis || null;
  let voices = [];
  function loadVoices() { try { voices = synth ? synth.getVoices() : []; } catch (e) { voices = []; } }
  loadVoices();
  if (synth && synth.addEventListener) synth.addEventListener("voiceschanged", loadVoices);
  const voiceFor = (lang) => voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(lang)) || null;
  A.canSpeak = (lang) => !!voiceFor(lang);

  /* ---------- narration ---------- */
  let cur = null; // what is playing now
  const words = (text) => text.split(/\s+/).filter(Boolean);
  // Which word is being said at fraction f of the way through (by letter count).
  function wordAt(ws, f) {
    const total = ws.reduce((n, w) => n + w.length + 1, 0);
    let acc = 0;
    for (let i = 0; i < ws.length; i++) { acc += ws[i].length + 1; if (acc / total >= f) return i; }
    return ws.length - 1;
  }

  A.stop = function () {
    if (!cur) return;
    const c = cur; cur = null;
    if (c.el) { c.el.pause(); URL.revokeObjectURL(c.el.src); }
    if (c.tts) { try { synth.cancel(); } catch (e) {} }
  };
  A.pause = function () { if (cur && cur.el) cur.el.pause(); else if (cur && cur.tts) synth.pause(); if (cur) cur.paused = true; };
  A.resume = function () { if (cur && cur.el) cur.el.play().catch(() => {}); else if (cur && cur.tts) synth.resume(); if (cur) cur.paused = false; };
  A.playing = () => !!cur && !cur.paused;
  A.active = () => !!cur;

  /* Tell `text`. key = recording to look for. onword(i) as each word is reached. onend(how): "rec" | "tts" | "none". */
  A.say = async function ({ key, text, lang, onword, onend, ttsOnly }) {
    A.stop();
    const ws = words(text || "");
    const mine = (cur = { paused: false });
    const done = (how) => { if (cur === mine) { cur = null; onend && onend(how); } };
    let r = null;
    if (key && !ttsOnly) { try { r = await A.get(key); } catch (e) {} }
    if (cur !== mine) return;
    if (r && r.blob) {
      const el = new Audio(URL.createObjectURL(r.blob));
      mine.el = el;
      el.ontimeupdate = () => onword && onword(wordAt(ws, Math.min(1, el.currentTime / (r.dur || el.duration || 1))));
      el.onended = () => { URL.revokeObjectURL(el.src); done("rec"); };
      el.onerror = () => done("none");
      el.play().catch(() => done("none"));
      return "rec";
    }
    const v = voiceFor(lang);
    if (synth && v) {
      mine.tts = true;
      // Speak sentence by sentence: long single utterances get cut off in some browsers.
      const parts = text.match(/[^.!?۔]+[.!?۔]*\s*/g) || [text];
      let base = 0, left = parts.length;
      parts.forEach((part) => {
        const u = new SpeechSynthesisUtterance(part.trim());
        const start = base; base += words(part).length;
        u.voice = v; u.lang = v.lang; u.rate = 0.85; u.pitch = 1.05;
        u.onboundary = (e) => { if (cur === mine && onword && e.name !== "sentence") onword(start + words(part.slice(0, e.charIndex + 1)).length - 1); };
        u.onend = u.onerror = () => { if (--left === 0) done("tts"); };
        synth.speak(u);
      });
      return "tts";
    }
    done("none");
    return "none";
  };

  /* ---------- small sounds ---------- */
  let ctx = null, amb = null, soundOn = true;
  A.setSound = (on) => { soundOn = on; if (!on) A.ambient(false); };
  function ac() {
    if (!ctx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function tone(f, dur, o = {}) {
    const c = ac(); if (!c) return;
    const t = c.currentTime + (o.at || 0), osc = c.createOscillator(), g = c.createGain();
    osc.type = o.type || "sine"; osc.frequency.setValueAtTime(f, t);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(o.vol || 0.15, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(c.destination); osc.start(t); osc.stop(t + dur + 0.05);
  }
  function noiseBuf(c, secs) {
    const b = c.createBuffer(1, c.sampleRate * secs, c.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  function hiss(dur, freq, o = {}) {
    const c = ac(); if (!c) return;
    const t = c.currentTime + (o.at || 0), src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    src.buffer = noiseBuf(c, dur); f.type = "bandpass"; f.frequency.setValueAtTime(freq, t);
    if (o.to) f.frequency.exponentialRampToValueAtTime(o.to, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(o.vol || 0.12, t + dur * 0.3); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(c.destination); src.start(t);
  }
  const SFX = {
    pop: () => tone(520, 0.12, { to: 780 }),
    chime: () => { tone(784, 0.5, { vol: 0.12 }); tone(1175, 0.6, { vol: 0.08, at: 0.08 }); },
    twinkle: () => [1319, 1568, 2093, 1760].forEach((f, i) => tone(f, 0.3, { vol: 0.07, at: i * 0.09 })),
    thud: () => { tone(110, 0.35, { to: 50, vol: 0.3 }); hiss(0.25, 200, { vol: 0.1 }); },
    chirp: () => [0, 0.16, 0.34, 0.6].forEach((at, i) => tone(2200 + i * 200, 0.1, { to: 3200, vol: 0.07, at })),
    steps: () => [0, 0.25, 0.5, 0.75].forEach((at) => hiss(0.12, 300, { vol: 0.12, at })),
    rustle: () => hiss(0.7, 1800, { to: 3500, vol: 0.07 }),
    whoosh: () => hiss(0.8, 500, { to: 1600, vol: 0.09 }),
    creak: () => tone(180, 0.5, { to: 320, type: "triangle", vol: 0.09 }),
    baa: () => { tone(430, 0.5, { to: 380, type: "sawtooth", vol: 0.05 }); tone(440, 0.5, { to: 370, type: "square", vol: 0.02 }); },
    no: () => { tone(300, 0.15, { vol: 0.1 }); tone(240, 0.2, { vol: 0.1, at: 0.16 }); },
    done: () => [659, 784, 988, 1319].forEach((f, i) => tone(f, 0.5, { vol: 0.1, at: i * 0.16 }))
  };
  A.sfx = (name) => { if (soundOn && SFX[name]) { try { SFX[name](); } catch (e) {} } };

  // Background: soft wind by day, crickets by night.
  A.ambient = function (on, night) {
    if (amb) { try { amb.stop(); } catch (e) {} amb = null; }
    if (!on || !soundOn) return;
    const c = ac(); if (!c) return;
    const g = c.createGain(); g.gain.value = 0; g.connect(c.destination);
    g.gain.linearRampToValueAtTime(night ? 0.018 : 0.03, c.currentTime + 2);
    const nodes = [];
    if (night) {
      const osc = c.createOscillator(), trem = c.createOscillator(), tg = c.createGain(), og = c.createGain();
      osc.frequency.value = 4300; trem.type = "square"; trem.frequency.value = 22; tg.gain.value = 0.5; og.gain.value = 0.5;
      trem.connect(tg).connect(og.gain); osc.connect(og).connect(g); osc.start(); trem.start(); nodes.push(osc, trem);
    } else {
      const src = c.createBufferSource(), f = c.createBiquadFilter(), lfo = c.createOscillator(), lg = c.createGain();
      src.buffer = noiseBuf(c, 4); src.loop = true; f.type = "lowpass"; f.frequency.value = 420;
      lfo.frequency.value = 0.12; lg.gain.value = 180; lfo.connect(lg).connect(f.frequency);
      src.connect(f).connect(g); src.start(); lfo.start(); nodes.push(src, lfo);
    }
    amb = { stop() { g.gain.linearRampToValueAtTime(0, c.currentTime + 0.6); setTimeout(() => nodes.forEach((n) => { try { n.stop(); } catch (e) {} }), 700); } };
  };

  /* ---------- back up and restore recordings ---------- */
  const toB64 = (blob) => new Promise((res) => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(blob); });
  A.exportAll = async function () {
    const out = {};
    for (const k of await A.keys()) { const v = await A.get(k); if (v && v.blob) out[k] = { dur: v.dur, data: await toB64(v.blob) }; }
    return new Blob([JSON.stringify({ app: "sealed-nectar-stories", v: 1, rec: out })], { type: "application/json" });
  };
  A.importAll = async function (file) {
    const j = JSON.parse(await file.text());
    if (!j || j.app !== "sealed-nectar-stories" || !j.rec) throw new Error("Not a recordings backup file");
    let n = 0;
    for (const k of Object.keys(j.rec)) {
      const blob = await (await fetch(j.rec[k].data)).blob();
      await A.put(k, { blob, dur: j.rec[k].dur }); n++;
    }
    return n;
  };
})();
