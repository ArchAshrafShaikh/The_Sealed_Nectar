/* The app: his story path and story player, and the grown-ups' area. */
(function () {
  const SN = window.SN, A = SN.audio;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- saved choices (kept in this browser) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem("sn." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("sn." + k, JSON.stringify(v)); } catch (e) {} }
  };
  const st = {
    lang: store.get("lang", "en"),          // language he hears
    theme: store.get("theme", "auto"),      // auto | light | dark
    unlocked: store.get("unlocked", 1),     // how many stories are open to him
    heard: store.get("heard", []),          // ids of stories he has finished
    readAlong: store.get("readAlong", false),
    retell: store.get("retell", false),
    sound: store.get("sound", true)
  };
  const save = (k, v) => { st[k] = v; store.set(k, v); };
  function applyTheme() {
    if (st.theme === "auto") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = st.theme;
  }
  const darkNow = () => st.theme === "dark" || (st.theme === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
  applyTheme();
  A.setSound(st.sound);

  /* ---------- his guide, the little bird ---------- */
  const guide = $("guide");
  guide.innerHTML = SN.guideSvg;
  let guideRest = { x: 20, y: 20 };
  function guideTo(x, y, flip) {
    const w = guide.offsetWidth || 80;
    x = Math.max(4, Math.min(innerWidth - w - 4, x)); y = Math.max(4, Math.min(innerHeight - w - 4, y));
    guide.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    guide.classList.toggle("flip", !!flip);
  }
  function guideDo(cls, ms) { guide.classList.remove("nod", "shake", "point"); void guide.offsetWidth; guide.classList.add(cls); setTimeout(() => guide.classList.remove(cls), ms); }
  // Drift to something worth touching. stay = wait there until he touches it.
  function guidePoint(el, stay) {
    const h = el.querySelector(".hit") || el, r = h.getBoundingClientRect(), w = guide.offsetWidth || 48;
    guideTo(r.left + r.width / 2 - w / 2, r.top + r.height * 0.3 - w / 2);
    guide.classList.toggle("calling", !!stay);
    if (!stay) { guideDo("point", 1600); setTimeout(() => guideTo(guideRest.x, guideRest.y), 2600); }
  }

  /* ---------- screens ---------- */
  function show(view) {
    $("home").hidden = view !== "home";
    $("story").hidden = view !== "story";
    $("kid").hidden = view === "parent";
    $("parent").hidden = view !== "parent";
    document.body.style.overflow = view === "parent" ? "auto" : "hidden";
  }

  /* ---------- the story path ---------- */
  const tiles = $("tiles");
  const nextIndex = () => { const i = SN.stories.findIndex((s, n) => n < st.unlocked && !st.heard.includes(s.id)); return i; };
  function renderHome() {
    $("homebg").innerHTML = SN.homeScene();
    const nx = nextIndex();
    tiles.innerHTML = SN.stories.map((s, n) => {
      const cls = n >= st.unlocked ? "locked" : st.heard.includes(s.id) ? "heard" : n === nx ? "next" : "";
      const ttl = st.readAlong ? `<span class="ttl" ${st.lang === "ur" ? 'dir="rtl"' : ""}>${esc(s.title[st.lang])}</span>` : "";
      return `<button type="button" class="tile ${cls}" data-n="${n}" aria-label="${esc(s.title.en)}${n >= st.unlocked ? " (not open yet)" : ""}"><span class="disc"><svg viewBox="0 0 48 48" aria-hidden="true">${SN.icons[s.icon]}</svg></span>${ttl}</button>`;
    }).join("");
    layoutHome();
  }
  function layoutHome() {
    if ($("home").hidden) return;
    const W = innerWidth, H = innerHeight, n = SN.stories.length;
    const cols = W / H > 1.15 ? 6 : W > 560 ? 4 : 3, rows = Math.ceil(n / cols);
    const top = H * 0.14, usable = H * 0.8;
    const size = Math.max(72, Math.min((W / cols) * 0.56, (usable / rows) * 0.5, 170));
    tiles.style.setProperty("--tile", size + "px");
    const pts = [];
    [...tiles.children].forEach((el, i) => {
      const row = Math.floor(i / cols), c = i % cols, col = row % 2 ? cols - 1 - c : c;
      const x = W * (0.09 + (0.82 * (col + 0.5)) / cols), y = top + (usable * (row + 0.5)) / rows + (col % 2 ? 1 : -1) * usable * 0.045;
      el.style.left = x + "px"; el.style.top = y + "px"; pts.push([x, y]);
    });
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i]; d += ` Q${a[0] + (b[0] - a[0]) / 2} ${a[1] + (i % 2 ? -1 : 1) * 26} ${b[0]} ${b[1]}`; }
    $("trailpath").setAttribute("d", d);
    const nx = nextIndex(), at = pts[nx >= 0 ? nx : 0], gw = guide.offsetWidth || 80;
    guideRest = { x: at[0] - size / 2 - gw * 0.2, y: at[1] - size / 2 - gw * 0.2 };
    guide.classList.remove("calling"); guideTo(guideRest.x, guideRest.y);
  }
  tiles.addEventListener("click", (e) => {
    const t = e.target.closest(".tile"); if (!t) return;
    const n = +t.dataset.n;
    if (n >= st.unlocked) {
      A.sfx("no"); guideDo("shake", 500);
      t.classList.remove("shake"); void t.offsetWidth; t.classList.add("shake");
      return;
    }
    A.sfx("pop"); startStory(n);
  });
  addEventListener("resize", () => { layoutHome(); if (cur) restGuideInStory(); });

  /* ---------- the story player ---------- */
  const stage = $("stage"), wordsEl = $("words");
  const ONESHOT = { pulse: 950, fly: 3450, sway: 1650, flutter: 1450, drift: 3050, walk: 2050, plod: 2750, trot: 2050, hop: 1050, twinkle: 1500, tip: 1850 };
  const TURN = { sit: 1900, fly: 2600, pulse: 1200, shine: 3200 }; // how long the answer plays before the page turns
  const PLAY = "M7 4v16l13-8z", PAUSE = "M6 4h4v16H6zM14 4h4v16h-4z";
  let cur = null; // { n, i, how, t1, t2 }

  const story = () => SN.stories[cur.n];
  const setIcon = (playing) => $("playicon").setAttribute("d", playing ? PAUSE : PLAY);
  function clearTimers() { if (cur) { clearTimeout(cur.t1); clearInterval(cur.t2); } }
  function halt() { clearTimers(); A.stop(); setIcon(false); if (typeof stopFilm === "function") stopFilm(); }
  function restGuideInStory() {
    const r = $("stagewrap").getBoundingClientRect(), w = guide.offsetWidth || 80;
    guideRest = { x: r.left + r.width * 0.5 - w / 2, y: r.top + r.height * 0.12 };
    guide.classList.remove("calling"); guideTo(guideRest.x, guideRest.y);
  }

  function startStory(n) {
    cur = { n, i: 0, opening: true };
    show("story");
    $("end").hidden = true; $("story").classList.remove("ended");
    renderScene();
    restGuideInStory();
    setIcon(true);
    // Every story opens the same way.
    A.say({ key: "open:" + st.lang, text: SN.ritual.open[st.lang], lang: st.lang, onend: () => { if (cur && cur.opening) { cur.opening = false; tell(); } } });
  }

  function renderScene() {
    const sc = SN.art[story().id][cur.i]();
    stage.innerHTML = sc.svg;
    stage.style.animation = "none"; void stage.offsetWidth; stage.style.animation = "";
    $("norec").hidden = true; $("bNext").classList.remove("ask"); cur.leaving = false;
    restGuideInStory();
    $("dots").innerHTML = story().scenes.map((_, k) => `<i class="${k === cur.i ? "on" : ""}"></i>`).join("");
    const night = sc.mood === "night" || (sc.mood === "" && darkNow());
    if (cur.night !== night) { cur.night = night; A.ambient(true, night); }
    const text = story().scenes[cur.i][st.lang];
    wordsEl.hidden = !st.readAlong;
    $("stagewrap").classList.toggle("haswords", st.readAlong);
    wordsEl.dir = st.lang === "ur" ? "rtl" : "ltr";
    wordsEl.innerHTML = text.split(/\s+/).map((w) => `<span>${esc(w)}</span>`).join(" ");
  }
  function markWord(i) {
    const sp = wordsEl.children;
    for (let k = 0; k < sp.length; k++) { sp[k].classList.toggle("said", k < i); sp[k].classList.toggle("now", k === i); }
  }

  /* Each picture plays like a short film in step with the voice: the camera drifts, and each thing
     in the picture does its action at its moment in the telling. */
  let tl = null;
  function stopFilm() { if (tl) { clearInterval(tl.id); tl = null; } }
  function setFilmLength(secs) {
    if (!tl) return;
    tl.D = Math.max(4, secs);
    const svg = stage.querySelector("svg"); if (svg) svg.style.setProperty("--dur", tl.D + "s");
  }
  function startFilm(secs) {
    stopFilm();
    const taps = [...stage.querySelectorAll(".tap")], plan = ((SN.cues[story().id] || [])[cur.i]) || {}, seen = {};
    const cues = taps.map((t, k) => {
      const name = t.dataset.name, nth = (seen[name] = (seen[name] || 0) + 1) - 1;
      const at = plan[name] !== undefined ? Math.min(0.95, plan[name] + nth * 0.12) : 0.2 + (0.65 * (k + 0.5)) / taps.length;
      return { t, at, fired: false };
    });
    tl = { el: 0, last: performance.now(), cues, paused: false, D: secs };
    setFilmLength(secs);
    const svg = stage.querySelector("svg"); if (svg) svg.classList.add("run");
    $("stagewrap").classList.remove("paused");
    tl.id = setInterval(() => {
      const now = performance.now(), dt = (now - tl.last) / 1000; tl.last = now;
      if (tl.paused || document.hidden) return;
      tl.el += dt;
      for (const c of tl.cues) if (!c.fired && tl.el >= c.at * tl.D) { c.fired = true; if (!c.t.classList.contains("done") && !c.t.dataset.next) act(c.t, false); }
      if (tl.el > tl.D + 1) stopFilm();
    }, 100);
  }
  function pauseFilm(p) { if (tl) tl.paused = p; $("stagewrap").classList.toggle("paused", p); }

  function tell() {
    clearTimers();
    setIcon(true);
    const text = story().scenes[cur.i][st.lang];
    startFilm(text.split(/\s+/).length * 0.42 + 1.5);
    A.say({
      key: `${story().id}:${cur.i}:${st.lang}`, text, lang: st.lang, onword: markWord,
      onstart: (how, dur) => { if (dur) setFilmLength(dur); },
      onend: (how) => {
        cur.how = how; setIcon(false); markWord(999);
        $("norec").hidden = how !== "none";
        // Without a voice, give him time to look before the question is put.
        cur.t1 = setTimeout(ask, how === "none" ? Math.max(3000, ((tl ? tl.D - tl.el : 0) + 0.5) * 1000) : 400);
      }
    });
  }
  // The telling has ended on a question. Show what he can touch to find out, and wait for him.
  function ask() {
    if (!cur) return;
    const svg = stage.querySelector("svg"); if (svg) svg.classList.add("asked");
    const portal = stage.querySelector(".portal");
    if (portal) { guidePoint(portal, true); A.sfx("twinkle"); }
    else $("bNext").classList.add("ask");
    // If he is still wondering after a while, call him again.
    cur.t2 = setInterval(() => { if (!A.active()) { A.sfx("twinkle"); guideDo("point", 1600); } }, 9000);
  }
  function advance() {
    if (cur.i < story().scenes.length - 1) { cur.i++; renderScene(); tell(); }
    else finish();
  }
  function finish() {
    halt();
    const s = story();
    if (!st.heard.includes(s.id)) save("heard", [...st.heard, s.id]);
    // Every story closes the same way.
    A.say({ key: "close:" + st.lang, text: SN.ritual.close[st.lang], lang: st.lang, onend: () => {} });
    A.ambient(false); cur.night = null;
    $("end").hidden = false; wordsEl.hidden = true; $("story").classList.add("ended");
    A.sfx("done"); guide.classList.remove("calling"); guideTo(-200, -200);
    $("eMic").hidden = !(st.retell && A.canRecord());
    $("eHear").hidden = true;
    if (st.retell) A.get("retell:" + s.id).then((v) => { if (cur) $("eHear").hidden = !(v && v.blob); });
  }
  function goHome() {
    if (A.recording()) A.stopRec(null);
    halt(); A.ambient(false); cur = null;
    show("home"); renderHome();
  }

  // Taps on things in the picture. pointerdown, so a second finger or a resting palm doesn't block it.
  // Make one thing in the picture do its action. byChild = he tapped it; otherwise the film played it.
  function act(t, byChild) {
    const fx = t.dataset.fx;
    if (ONESHOT[fx]) {
      t.classList.remove("go"); void t.getBoundingClientRect(); t.classList.add("go");
      clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("go"), ONESHOT[fx]);
    } else if (byChild) t.classList.toggle("go");
    else t.classList.add("go");
    A.sfx(t.dataset.snd);
    if (byChild) { t.classList.add("done"); guideDo("nod", 500); }
    // The thing that answers the question: it does its action, then the page turns.
    if (byChild && t.dataset.next && cur && !cur.leaving) {
      cur.leaving = true; t.classList.add("go"); guide.classList.remove("calling");
      clearTimers(); A.stop(); setIcon(false);
      cur.t1 = setTimeout(advance, TURN[fx] || 1400);
    }
  }
  stage.addEventListener("pointerdown", (e) => {
    const t = e.target.closest(".tap"); if (!t) return;
    e.preventDefault();
    act(t, true);
  });
  $("stagewrap").addEventListener("contextmenu", (e) => e.preventDefault());

  $("bPlay").onclick = () => {
    if (!cur || !$("end").hidden) return;
    if (A.active()) { if (A.playing()) { A.pause(); pauseFilm(true); setIcon(false); } else { A.resume(); pauseFilm(false); setIcon(true); } }
    else { cur.opening = false; tell(); }
  };
  $("bNext").onclick = () => { if (!cur || !$("end").hidden) return; halt(); A.sfx("pop"); if (cur.opening) { cur.opening = false; tell(); } else advance(); };
  $("bBack").onclick = () => {
    if (!cur) return;
    halt(); A.sfx("pop"); cur.opening = false;
    if (!$("end").hidden) { $("end").hidden = true; renderScene(); tell(); return; }
    if (cur.i > 0) cur.i--;
    renderScene(); tell();
  };
  $("bHome").onclick = goHome;
  $("eHome").onclick = goHome;
  $("eAgain").onclick = () => { const n = cur.n; halt(); startStory(n); };
  $("eMic").onclick = async () => {
    const b = $("eMic");
    if (A.recording()) {
      await A.stopRec("retell:" + story().id);
      b.classList.remove("rec"); $("eHear").hidden = false; A.sfx("done");
    } else {
      A.stop();
      try { await A.startRec(); b.classList.add("rec"); } catch (e) { A.sfx("no"); guideDo("shake", 500); }
    }
  };
  $("eHear").onclick = () => { if (!A.recording()) A.say({ key: "retell:" + story().id, text: "", lang: st.lang }); };

  /* ---------- the grown-ups' gate: hold for three seconds ---------- */
  const gate = $("gate");
  let gateT = null;
  const gateStart = () => { if (gateT) return; gate.classList.add("holding"); gateT = setTimeout(() => { gateEnd(); openParent(); }, 3000); };
  const gateEnd = () => { clearTimeout(gateT); gateT = null; gate.classList.remove("holding"); };
  gate.addEventListener("pointerdown", (e) => { e.preventDefault(); gateStart(); });
  ["pointerup", "pointerleave", "pointercancel", "blur"].forEach((ev) => gate.addEventListener(ev, gateEnd));
  gate.addEventListener("keydown", (e) => { if ((e.key === "Enter" || e.key === " ") && !e.repeat) gateStart(); });
  gate.addEventListener("keyup", gateEnd);
  gate.addEventListener("contextmenu", (e) => e.preventDefault());

  /* ---------- grown-ups' area ---------- */
  const P = $("parent");
  const ui = { tab: "record", story: 0, lang: st.lang, show: "both" };
  const LANGS = { en: "English", ur: "Urdu" };
  const storyOpts = (sel) => SN.stories.map((s, n) => `<option value="${n}" ${n === sel ? "selected" : ""}>${n + 1}. ${esc(s.title.en)}</option>`).join("");

  function openParent() {
    if (A.recording()) A.stopRec(null);
    halt(); A.ambient(false); cur = null;
    show("parent"); renderParent();
    scrollTo(0, 0);
  }
  function renderParent() {
    const tabs = [["record", "Record your voice"], ["read", "Read aloud"], ["settings", "Settings"]];
    P.innerHTML = `<div class="pwrap">
      <div class="phead"><h1>For grown-ups</h1><button class="btn pri" id="pDone" type="button">Back to his screen</button></div>
      <div class="tabs" role="tablist">${tabs.map(([k, l]) => `<button type="button" role="tab" data-tab="${k}" aria-selected="${ui.tab === k}">${l}</button>`).join("")}</div>
      <div class="panel" id="pPanel" role="tabpanel"></div></div>`;
    $("pDone").onclick = () => { if (A.recording()) A.stopRec(null); A.stop(); show("home"); renderHome(); };
    P.querySelectorAll("[data-tab]").forEach((b) => (b.onclick = () => { if (A.recording()) A.stopRec(null); A.stop(); ui.tab = b.dataset.tab; renderParent(); }));
    ({ record: renderRecord, read: renderRead, settings: renderSettings })[ui.tab]();
  }

  // --- Record ---
  function recParts() {
    const s = SN.stories[ui.story], L = ui.lang;
    return [
      { key: "open:" + L, label: "Opening, used for every story", text: SN.ritual.open[L] },
      ...s.scenes.map((sc, i) => ({ key: `${s.id}:${i}:${L}`, label: `Picture ${i + 1} of ${s.scenes.length}`, text: sc[L] })),
      { key: "close:" + L, label: "Closing, used for every story", text: SN.ritual.close[L] }
    ];
  }
  async function renderRecord() {
    const panel = $("pPanel"), parts = recParts();
    const have = await Promise.all(parts.map((p) => A.get(p.key).catch(() => null)));
    if (ui.tab !== "record") return;
    const done = have.filter((v) => v && v.blob).length;
    panel.innerHTML = `
      <p>Record each part once, in your own voice. He hears your recording every time he opens the story. Where there is no recording yet, the device's built-in voice is used if it has one for that language.</p>
      <div class="frow">
        <label class="field">Story<select id="rStory">${storyOpts(ui.story)}</select></label>
        <label class="field">Language<select id="rLang">${Object.keys(LANGS).map((k) => `<option value="${k}" ${k === ui.lang ? "selected" : ""}>${LANGS[k]}</option>`).join("")}</select></label>
      </div>
      <p class="hint">${done} of ${parts.length} parts recorded for this story in ${LANGS[ui.lang]}. Read slowly and warmly; about 20 seconds per picture is right.${ui.lang === "ur" ? " Please read the Urdu through once before recording and change any wording that does not sound right to you." : ""}</p>
      <p class="msg bad" id="rMsg" role="status">${A.canRecord() ? "" : "This browser cannot record. Open the site in Safari or Chrome over https."}</p>
      <ul class="reclist">${parts.map((p, i) => {
        const v = have[i], ok = v && v.blob;
        return `<li data-i="${i}">
          <div><span class="lbl">${p.label}</span><p class="txt ${ui.lang === "ur" ? "ur" : ""}">${esc(p.text)}</p></div>
          <div class="acts"><button class="btn" type="button" data-act="rec" ${A.canRecord() ? "" : "disabled"}>${ok ? "Record again" : "Record"}</button><button class="btn" type="button" data-act="play" ${ok ? "" : "disabled"}>Listen</button><button class="btn warn" type="button" data-act="del" ${ok ? "" : "disabled"}>Delete</button></div>
          <div class="stat ${ok ? "ok" : ""}">${ok ? `Recorded, ${Math.round(v.dur)} seconds` : "Not recorded yet"}</div></li>`;
      }).join("")}</ul>`;
    $("rStory").onchange = (e) => { ui.story = +e.target.value; renderRecord(); };
    $("rLang").onchange = (e) => { ui.lang = e.target.value; renderRecord(); };
    panel.querySelector(".reclist").onclick = async (e) => {
      const b = e.target.closest("[data-act]"); if (!b) return;
      const part = parts[+b.closest("li").dataset.i], act = b.dataset.act;
      if (act === "rec") {
        if (A.recording()) {
          if (!b.classList.contains("recording")) return; // another part is recording
          await A.stopRec(part.key); renderRecord();
        } else {
          A.stop();
          try { await A.startRec(); b.classList.add("recording"); b.textContent = "Stop"; b.closest("li").querySelector(".stat").textContent = "Recording now. Press Stop when you finish."; }
          catch (err) { $("rMsg").textContent = "The microphone is blocked. Allow microphone access for this site, then try again."; }
        }
      } else if (act === "play" && !A.recording()) A.say({ key: part.key, text: part.text, lang: ui.lang });
      else if (act === "del" && !A.recording()) { await A.del(part.key); renderRecord(); }
    };
  }

  // --- Read aloud ---
  function renderRead() {
    const s = SN.stories[ui.story], en = ui.show !== "ur", ur = ui.show !== "en";
    $("pPanel").innerHTML = `
      <p>For the nights you tell it yourself. Read it, or better, tell it in your own words.</p>
      <div class="frow">
        <label class="field">Story<select id="dStory">${storyOpts(ui.story)}</select></label>
        <div class="seg" role="group" aria-label="Language shown">${[["en", "English"], ["ur", "Urdu"], ["both", "Both"]].map(([k, l]) => `<button type="button" data-show="${k}" aria-pressed="${ui.show === k}">${l}</button>`).join("")}</div>
      </div>
      <div class="read">
        ${en ? `<h3>${esc(s.title.en)}</h3>` : ""}${ur ? `<h3 class="ur">${esc(s.title.ur)}</h3>` : ""}
        ${s.scenes.map((sc) => `<div class="sc">${en ? `<p>${esc(sc.en)}</p>` : ""}${ur ? `<p class="ur">${esc(sc.ur)}</p>` : ""}</div>`).join("")}
        <h4>Ask him</h4>
        <div class="sc">${en ? `<ul>${s.ask.en.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>` : ""}${ur ? `<ul class="ur">${s.ask.ur.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>` : ""}</div>
        <h4>This week we practise</h4>
        <div class="sc">${en ? `<p>${esc(s.habit.en)}</p>` : ""}${ur ? `<p class="ur">${esc(s.habit.ur)}</p>` : ""}</div>
        <h4>In The Sealed Nectar</h4>
        <p>${esc(s.book)}</p>
      </div>`;
    $("dStory").onchange = (e) => { ui.story = +e.target.value; renderRead(); };
    P.querySelectorAll("[data-show]").forEach((b) => (b.onclick = () => { ui.show = b.dataset.show; renderRead(); }));
  }

  // --- Settings ---
  function renderSettings() {
    const seg = (name, val, opts) => `<div class="seg" role="group">${opts.map(([k, l]) => `<button type="button" data-set="${name}" data-val="${k}" aria-pressed="${val === k}">${l}</button>`).join("")}</div>`;
    const sw = (name, on, label) => `<button type="button" class="switch" role="switch" aria-checked="${on}" data-sw="${name}" aria-label="${label}"></button>`;
    $("pPanel").innerHTML = `
      <div>
        <div class="set"><div><b>Language he hears</b><span class="hint">Device voice on this tablet: English ${A.canSpeak("en") ? "available" : "not available"}, Urdu ${A.canSpeak("ur") ? "available" : "not available"}. Your recordings always work.</span></div>${seg("lang", st.lang, [["en", "English"], ["ur", "Urdu"]])}</div>
        <div class="set"><div><b>Stories open to him</b><span class="hint">Open one new story a week. The rest stay greyed out on his path.</span></div><div class="step"><button type="button" data-step="-1" aria-label="One fewer">−</button><span>${st.unlocked} of ${SN.stories.length}</span><button type="button" data-step="1" aria-label="One more">+</button></div></div>
        <div class="set"><div><b>Day or night look</b><span class="hint">Night is dimmer, for bedtime. Auto follows the tablet.</span></div>${seg("theme", st.theme, [["auto", "Auto"], ["light", "Day"], ["dark", "Night"]])}</div>
        <div class="set"><div><b>Sounds</b><span class="hint">Soft tap sounds, wind by day and crickets at night. There is no music.</span></div>${sw("sound", st.sound, "Sounds")}</div>
        <div class="set"><div><b>Read-along words</b><span class="hint">For about age 6 and up. Shows the words and lights each one as it is said, and puts story names on his path.</span></div>${sw("readAlong", st.readAlong, "Read-along words")}</div>
        <div class="set"><div><b>Tell it back</b><span class="hint">For about age 6 and up. At the end of a story he can record himself telling it, and play it to you.</span></div>${sw("retell", st.retell, "Tell it back")}</div>
        <div class="set"><div><b>Back up your recordings</b><span class="hint">Recordings live only in this browser on this tablet. Clearing browser data removes them, so save a backup file after recording.</span></div><div class="frow"><button class="btn" type="button" id="xExport">Save backup file</button><label class="btn" for="xImport">Restore from file</label><input type="file" id="xImport" accept="application/json,.json" hidden></div></div>
        <div class="set"><div><b>His progress</b><span class="hint">He has finished ${st.heard.length} of ${SN.stories.length} stories.</span></div><button class="btn warn" type="button" id="xReset">Reset progress</button></div>
      </div>
      <p class="msg" id="sMsg" role="status"></p>`;
    P.querySelectorAll("[data-set]").forEach((b) => (b.onclick = () => { save(b.dataset.set, b.dataset.val); applyTheme(); if (b.dataset.set === "lang") ui.lang = st.lang; renderSettings(); }));
    P.querySelectorAll("[data-sw]").forEach((b) => (b.onclick = () => { save(b.dataset.sw, !st[b.dataset.sw]); A.setSound(st.sound); renderSettings(); }));
    P.querySelectorAll("[data-step]").forEach((b) => (b.onclick = () => { save("unlocked", Math.max(1, Math.min(SN.stories.length, st.unlocked + +b.dataset.step))); renderSettings(); }));
    const msg = (t, bad) => { const m = $("sMsg"); m.textContent = t; m.classList.toggle("bad", !!bad); };
    $("xExport").onclick = async () => {
      msg("Preparing the backup…");
      const blob = await A.exportAll(), a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = "sealed-nectar-recordings.json";
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 5000);
      msg("Backup saved to your downloads.");
    };
    $("xImport").onchange = async (e) => {
      const f = e.target.files[0]; if (!f) return;
      try { const n = await A.importAll(f); msg(`Restored ${n} recordings.`); } catch (err) { msg("That file is not a recordings backup.", true); }
    };
    let armed = false;
    $("xReset").onclick = (e) => {
      if (!armed) { armed = true; e.target.textContent = "Press again to reset"; return; }
      save("heard", []); renderSettings();
    };
  }

  /* ---------- start ---------- */
  show("home");
  renderHome();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutHome);
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { if ($("home").hidden === false) renderHome(); });
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(() => {});
  SN.debug = { st, save, startStory, openParent, renderHome }; // handy from the console
})();
