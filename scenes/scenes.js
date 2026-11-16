/* Pictures. Every scene is built from a backdrop plus a few props; some props answer to a tap.
   Rule for all drawings here: places, animals and objects only. No person is ever drawn.
   Canvas is 1000 x 625. Props are drawn with their feet at (0,0) and placed with x, y, scale. */
(function () {
  const SN = (window.SN = window.SN || {});
  const INK = "#1b1b22", GOLD = "#e2b23c", LIT = "#ffd76a";

  /* ---------- helpers ---------- */
  // A tappable prop. fx = what it does (see styles.css), snd = sound it makes.
  const T = (name, fx, snd, x, y, s, inner, hit) =>
    `<g class="tap" data-name="${name}" data-fx="${fx}" data-snd="${snd}" transform="translate(${x} ${y}) scale(${s})"><g class="in"><g class="wig"><g class="fx">${inner}</g></g></g><rect class="hit" x="${hit[0]}" y="${hit[1]}" width="${hit[2]}" height="${hit[3]}" rx="24"/></g>`;
  // A prop that just sits there.
  const P = (x, y, s, inner, cls) => `<g ${cls ? `class="${cls}" ` : ""}transform="translate(${x} ${y}) scale(${s})">${inner}</g>`;
  const glow = (cx, cy, r) => `<circle class="glow" cx="${cx}" cy="${cy}" r="${r}" fill="url(#gl)"/>`;

  /* ---------- prop drawings ---------- */
  const A = {};
  A.kaaba = `${glow(0, -60, 150)}<rect x="-58" y="-124" width="116" height="124" fill="${INK}" stroke="${GOLD}" stroke-width="2"/><rect x="-58" y="-100" width="116" height="14" fill="${GOLD}"/><path d="M-58 -78h116" stroke="${GOLD}" stroke-width="1.5" stroke-dasharray="5 6"/><rect x="14" y="-56" width="26" height="56" rx="2" fill="${GOLD}"/><rect x="19" y="-50" width="16" height="50" fill="#9a7418"/>`;
  A.palm = `<g class="a-palm"><path d="M-4 0 Q4 -50 -3 -96 L7 -96 Q13 -50 7 0Z" fill="var(--trunk)"/><g fill="var(--leaf)"><path d="M2 -96 Q-40 -120 -68 -92 Q-36 -104 2 -90Z"/><path d="M2 -96 Q44 -120 72 -92 Q40 -104 2 -90Z"/><path d="M2 -96 Q-28 -140 -58 -130 Q-28 -124 2 -90Z"/><path d="M2 -96 Q32 -140 62 -130 Q32 -124 2 -90Z"/><path d="M2 -96 Q-4 -144 14 -150 Q8 -124 4 -90Z" fill="var(--leaf2)"/></g><circle cx="-3" cy="-90" r="5" fill="var(--sil)"/><circle cx="8" cy="-88" r="5" fill="var(--sil)"/></g>`;
  const house = (w, h, wins) => {
    const dx = -w / 2 + 20;
    let s = `<rect x="${-w / 2}" y="${-h}" width="${w}" height="${h}" rx="3" fill="var(--wall)"/><rect x="${-w / 2 - 5}" y="${-h - 7}" width="${w + 10}" height="10" rx="3" fill="var(--wall2)"/><rect x="${-w / 2 + w * 0.62}" y="${-h - 16}" width="${w * 0.3}" height="10" rx="2" fill="var(--wall2)"/><path d="M${dx - 10} 0v-30h20v30Z" fill="var(--sil)"/>`;
    for (let i = 0; i < wins; i++) {
      const x = -w / 2 + 44 + ((w - 60) / Math.max(1, wins)) * (i + 0.5);
      s += `${glow(x, -h + 26, 40)}<rect class="win" x="${x - 9}" y="${-h + 16}" width="18" height="18" rx="2"/>`;
    }
    return s;
  };
  A.eleph = `<g transform="translate(-310 -405)"><ellipse class="shadow" cx="330" cy="408" rx="160" ry="11"/><g class="elegs"><path d="M250 318 L245 394 Q244 406 256 406 L286 406 Q296 406 294 394 L290 318Z" fill="var(--sil)"/><path d="M392 318 L387 394 Q386 406 398 406 L426 406 Q436 406 434 394 L430 318Z" fill="var(--sil)"/><path d="M206 318 L201 394 Q200 406 212 406 L246 406 Q256 406 254 394 L250 318Z" fill="var(--sil2)"/><path d="M352 318 L347 394 Q346 406 358 406 L390 406 Q400 406 398 394 L394 318Z" fill="var(--sil2)"/></g><g class="ebody"><path d="M196 262 q-24 22 -20 70 q0 10 6 16" stroke="var(--sil)" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M186 310 Q178 232 262 212 Q346 196 404 222 Q446 242 444 304 Q442 362 398 374 L232 374 Q190 362 186 310Z" fill="var(--sil2)"/><path d="M214 250 Q262 216 340 216 Q300 240 232 262Z" fill="var(--sil3)" opacity=".7"/><path d="M392 226 Q434 196 470 226 Q494 250 484 292 Q470 322 432 318 Q396 312 390 270Z" fill="var(--sil2)"/><path d="M462 262 Q502 300 494 352 Q488 396 462 404 Q448 406 450 394 Q470 372 466 340 Q462 312 438 300Z" fill="var(--sil2)"/><path d="M444 300 q26 22 46 4 q-18 30 -50 12Z" fill="var(--pale)"/><path d="M372 226 Q336 236 342 288 Q348 330 388 322 Q414 304 408 256 Q400 226 372 226Z" fill="var(--sil)"/><circle cx="446" cy="252" r="4.500" fill="var(--pale)"/><path d="M244 226 Q292 206 344 214 L334 266 Q292 258 254 272Z" fill="#8f2f3a"/><path d="M244 226 Q292 206 344 214" stroke="${GOLD}" stroke-width="5" fill="none"/><path d="M254 272 Q292 258 334 266" stroke="${GOLD}" stroke-width="3" fill="none"/></g></g>`;
  const bird1 = (x, y, s) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 0q10-14 20 0q10-14 20 0" fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>`;
  A.birds = `${bird1(-150, 10, 1.5)}${bird1(-70, -30, 1.2)}${bird1(-10, 40, 1.6)}${bird1(70, -10, 1.3)}${bird1(-110, 70, 1.1)}${bird1(110, 60, 1.4)}${bird1(20, -60, 1)}${bird1(150, 0, 1.1)}`;

  // Four-legged animal facing right.
  function quad(o) {
    const { c, d, rx = 60, ry = 34, L = 46, lw = 13, nx = 30, ny = 40, nw = 18, hr = 16, hump = 0, ear = "s", wool = 0, horn = 0, load = 0 } = o;
    const by = -(L + ry * 0.85), hx = rx * 0.78 + nx, hy = by - ny;
    let s = `<ellipse class="shadow" cx="0" cy="2" rx="${rx}" ry="8"/>`;
    s += [-rx * 0.62, -rx * 0.3, rx * 0.28, rx * 0.6].map((x, i) => `<rect class="leg ${i % 2 ? "lb" : "la"}" x="${x - lw / 2}" y="${-L - 6}" width="${lw}" height="${L + 6}" rx="${lw / 2}" fill="${d}"/>`).join("");
    s += `<g class="bod"><path d="M${-rx + 4} ${by} q-16 10 -12 34" stroke="${d}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    if (hump) s += `<ellipse cx="${-rx * 0.1}" cy="${by - ry * 0.8}" rx="${rx * 0.42}" ry="${ry * 0.75}" fill="${c}"/>`;
    s += `<path d="M${rx * 0.7} ${by} L${hx} ${hy}" stroke="${c}" stroke-width="${nw}" stroke-linecap="round"/><ellipse cx="0" cy="${by}" rx="${rx}" ry="${ry}" fill="${c}"/>`;
    if (wool) for (let i = 0; i < 9; i++) { const a = (i / 9) * 6.283; s += `<circle cx="${Math.round(Math.cos(a) * rx * 0.8)}" cy="${Math.round(by + Math.sin(a) * ry * 0.8)}" r="${ry * 0.5}" fill="${c}"/>`; }
    if (load) s += `<rect x="${-rx * 0.5}" y="${by - ry * (hump ? 1.9 : 1.3)}" width="${rx * 0.8}" height="${ry * 0.9}" rx="8" fill="#8f2f3a"/><rect x="${-rx * 0.5}" y="${by - ry * (hump ? 1.55 : 0.95)}" width="${rx * 0.8}" height="5" fill="${GOLD}"/>`;
    if (ear === "l") s += `<ellipse cx="${hx - 4}" cy="${hy - hr * 1.5}" rx="5" ry="${hr}" fill="${d}" transform="rotate(-12 ${hx - 4} ${hy - hr})"/><ellipse cx="${hx + 8}" cy="${hy - hr * 1.5}" rx="5" ry="${hr}" fill="${c}" transform="rotate(10 ${hx + 8} ${hy - hr})"/>`;
    else s += `<ellipse cx="${hx - 2}" cy="${hy - hr * 0.7}" rx="6" ry="9" fill="${d}"/>`;
    if (horn) s += `<path d="M${hx} ${hy - hr} q-10 -16 -22 -12" stroke="var(--sil)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    s += `<ellipse cx="${hx + hr * 0.5}" cy="${hy}" rx="${hr * 1.25}" ry="${hr}" fill="${wool ? d : c}"/><circle cx="${hx + hr * 0.7}" cy="${hy - 3}" r="3" fill="var(--pale)" opacity=".8"/></g>`;
    return s;
  }
  A.camel = quad({ c: "var(--sil2)", d: "var(--sil)", rx: 70, ry: 34, L: 70, lw: 12, nx: 34, ny: 70, nw: 16, hr: 14, hump: 1 });
  A.camelL = quad({ c: "var(--sil2)", d: "var(--sil)", rx: 70, ry: 34, L: 70, lw: 12, nx: 34, ny: 70, nw: 16, hr: 14, hump: 1, load: 1 });
  A.donkeyThin = quad({ c: "var(--sil2)", d: "var(--sil)", rx: 50, ry: 20, L: 44, lw: 9, nx: 22, ny: 26, nw: 13, hr: 13, ear: "l" });
  A.donkey = quad({ c: "var(--sil2)", d: "var(--sil)", rx: 52, ry: 28, L: 44, lw: 11, nx: 24, ny: 34, nw: 15, hr: 13, ear: "l" });
  A.sheep = quad({ c: "var(--pale)", d: "var(--sil)", rx: 40, ry: 26, L: 26, lw: 8, nx: 14, ny: 12, nw: 12, hr: 11, wool: 1 });
  A.goat = quad({ c: "var(--pale)", d: "var(--sil2)", rx: 40, ry: 24, L: 34, lw: 8, nx: 16, ny: 20, nw: 11, hr: 11, horn: 1 });

  A.tent = `${glow(0, -40, 110)}<path d="M-110 0 L0 -120 L110 0Z" fill="var(--tent)"/><path d="M-66 0 L0 -120 L-22 0Z" fill="var(--tent2)"/><path d="M66 0 L0 -120 L22 0Z" fill="var(--tent2)"/><path class="flap" d="M-22 0 L0 -70 L22 0Z" fill="var(--sil)"/><path d="M0 -120v-18" stroke="var(--trunk)" stroke-width="4"/><path class="a-flag" d="M0 -138l22 8-22 6Z" fill="#8f2f3a"/>`;
  A.orb = `${glow(0, 0, 170)}<circle r="78" fill="var(--orb)" opacity=".14"/><circle r="60" fill="var(--orb)" opacity=".28"/><circle r="44" fill="var(--orb)"/><circle class="crater" cx="-14" cy="-10" r="9"/><circle class="crater" cx="16" cy="12" r="6"/><circle class="crater" cx="6" cy="-20" r="4"/>`;
  A.star = `<g class="rays" stroke="${LIT}" stroke-width="6" stroke-linecap="round">${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line y1="-62" y2="-92" transform="rotate(${a})"/>`).join("")}</g>${glow(0, 0, 120)}<path class="core" d="M0-48 13-15 48-15 20 7 31 43 0 22-31 43-20 7-48-15-13-15Z" fill="${LIT}"/>`;
  A.stars = [[-160, -30, 9], [-80, 30, 7], [0, -40, 11], [90, 20, 8], [160, -20, 10], [-30, 50, 6], [120, 70, 6]].map(p => `<path class="tw2" transform="translate(${p[0]} ${p[1]})" d="M0-${p[2] * 2} ${p[2] * 0.5}-${p[2] * 0.5} ${p[2] * 2} 0 ${p[2] * 0.5} ${p[2] * 0.5} 0 ${p[2] * 2}-${p[2] * 0.5} ${p[2] * 0.5}-${p[2] * 2} 0-${p[2] * 0.5}-${p[2] * 0.5}Z" fill="${LIT}"/>`).join("");
  A.cloud = `<g fill="var(--cloud)"><ellipse cx="0" cy="0" rx="110" ry="9"/><ellipse cx="40" cy="-12" rx="70" ry="8"/><ellipse cx="-50" cy="10" rx="60" ry="6"/></g>`;
  A.dust = `<g fill="var(--h1)"><ellipse class="puff" cx="-30" cy="-14" rx="46" ry="22"/><ellipse class="puff" cx="24" cy="-26" rx="54" ry="28"/><ellipse class="puff" cx="70" cy="-10" rx="40" ry="18"/><ellipse class="puff" cx="10" cy="-52" rx="36" ry="20"/></g>`;
  A.bird = `<ellipse class="shadow" cx="0" cy="1" rx="18" ry="3"/><path d="M-4 0v-8M5 0v-8" stroke="var(--sil)" stroke-width="2"/><g class="bod"><path d="M-14 -16 L-30 -24 L-28 -12Z" fill="var(--sil)"/><ellipse cx="0" cy="-16" rx="16" ry="11" fill="var(--sil2)"/><ellipse cx="3" cy="-12" rx="10" ry="6" fill="var(--pale)" opacity=".8"/><circle cx="14" cy="-24" r="8" fill="var(--sil2)"/><path d="M21 -25 l9 2 -9 3Z" fill="${GOLD}"/><circle cx="16" cy="-26" r="1.600" fill="var(--pale)"/><path d="M-10 -18 q8 -8 16 0 q-8 6 -16 0Z" fill="var(--sil)"/></g>`;
  const masjid = (() => {
    let m = `${glow(0, -50, 200)}<rect x="-170" y="-96" width="340" height="96" rx="3" fill="var(--wall)"/>`;
    for (let i = 0; i < 4; i++) { const x = -128 + i * 86; m += `<path class="win" d="M${x - 22} 0 V-52 a22 22 0 0 1 44 0 V0Z"/>`; }
    for (let i = 0; i < 5; i++) { const x = -170 + i * 85; m += `<rect x="${x - 6}" y="-104" width="12" height="104" rx="4" fill="var(--sil)"/>`; }
    m += `<path d="M-186 -98 ${Array.from({ length: 19 }, (_, i) => `l10 -${10 + (i % 3) * 5} l10 ${10 + (i % 3) * 5}`).join(" ")} v8 h-380Z" fill="var(--leaf)"/><rect x="-184" y="-102" width="368" height="8" rx="3" fill="var(--wall2)"/>`;
    return m;
  })();
  const tentS = (x, s2) => `<g transform="translate(${x} 0) scale(${s2})"><path d="M-40 0 L0 -46 L40 0Z" fill="var(--sil2)"/><path d="M-8 0 L0 -26 L8 0Z" fill="var(--sil)"/><path d="M0 -46v-22" stroke="var(--sil)" stroke-width="3"/><path class="a-flag" d="M0 -68l20 6-20 6Z" fill="#8f2f3a"/></g>`;
  const spear = (x, h) => `<path d="M${x} 0V${-h}" stroke="var(--sil)" stroke-width="3"/><path d="M${x - 4} ${-h} L${x} ${-h - 14} L${x + 4} ${-h}Z" fill="var(--sil)"/>`;
  A.camp = tentS(-220, 1) + tentS(-120, 1.3) + tentS(0, 1.1) + tentS(110, 1.4) + tentS(230, 1) + [-270, -175, -160, -60, -45, 55, 70, 170, 185, 280].map((x, i) => spear(x, 50 + (i % 3) * 12)).join("");
  A.specks = [[-120, 10, 0.7], [-60, -30, 0.5], [-10, 20, 0.8], [50, -10, 0.6], [-90, 50, 0.5], [90, 40, 0.7], [20, -50, 0.5], [130, 0, 0.6], [-150, -30, 0.5], [0, 60, 0.6], [70, -50, 0.5]].map(q => bird1(q[0], q[1], q[2])).join("");
  A.starname = A.star + `<text class="callig" text-anchor="middle" font-size="100" y="190">محمد</text>`;
  // An oil lamp on a low stand: a wide dish with a flame, so it can only read as a lamp.
  A.lamp = `${glow(0, -48, 95)}<path d="M-20 0 L-12 -20 H12 L20 0Z" fill="var(--sil)"/><path d="M-34 -24 Q0 -6 34 -24 Q40 -32 26 -32 H-26 Q-40 -32 -34 -24Z" fill="var(--sil2)"/><path d="M26 -32 q16 -4 20 6 q-12 -2 -18 4Z" fill="var(--sil2)"/><path class="win" d="M0 -32 Q-11 -46 0 -66 Q11 -46 0 -32Z"/>`;
  A.cave = `${glow(0, -40, 150)}<path d="M-60 0 Q-66 -92 0 -96 Q66 -92 60 0Z" fill="#17141d"/><path class="win" d="M-40 0 Q-44 -66 0 -70 Q44 -66 40 0Z"/>`;
  A.stall = `<rect x="-88" y="-120" width="8" height="120" fill="var(--trunk)"/><rect x="80" y="-120" width="8" height="120" fill="var(--trunk)"/><g class="awn"><path d="M-104 -118h208l-16 -34h-176Z" fill="#8f2f3a"/><path d="M-62 -118l8 -34h36l-4 34Z M18 -118l-4 -34h36l8 34Z" fill="var(--pale)"/><path d="M-104 -118q13 16 26 0q13 16 26 0q13 16 26 0q13 16 26 0q13 16 26 0q13 16 26 0q13 16 26 0q13 16 26 0" fill="#8f2f3a"/></g><rect x="-96" y="-48" width="192" height="12" rx="4" fill="var(--sil)"/><path d="M-70 -48 q-4 -30 14 -30 q18 0 14 30Z" fill="var(--sil2)"/><path d="M-22 -48 q-4 -24 12 -24 q16 0 12 24Z" fill="var(--sil3)"/><rect x="20" y="-62" width="50" height="14" rx="7" fill="#2f5d7a"/><rect x="26" y="-74" width="40" height="12" rx="6" fill="#e2b23c"/>`;
  A.scale = `<rect x="-5" y="-130" width="10" height="130" rx="4" fill="var(--sil)"/><path d="M-34 0h68l-8 -12h-52Z" fill="var(--sil)"/><g class="beam"><rect x="-84" y="-134" width="168" height="8" rx="4" fill="${GOLD}"/><path d="M-78 -128 L-100 -70 M-78 -128 L-56 -70 M78 -128 L56 -70 M78 -128 L100 -70" stroke="var(--sil)" stroke-width="2.5"/><path d="M-106 -70h56q-4 22 -28 22q-24 0 -28 -22Z M50 -70h56q-4 22 -28 22q-24 0 -28 -22Z" fill="${GOLD}"/><circle cx="-78" cy="-76" r="9" fill="var(--sil2)"/><circle cx="78" cy="-76" r="9" fill="var(--sil2)"/></g><circle cy="-130" r="9" fill="${GOLD}"/>`;
  A.chest = `${glow(0, -50, 100)}<rect x="-56" y="-50" width="112" height="50" rx="6" fill="var(--sil)"/><rect x="-56" y="-30" width="112" height="6" fill="${GOLD}"/><g class="lid"><path d="M-58 -50 q0 -30 58 -30 q58 0 58 30Z" fill="var(--sil2)"/><path d="M-58 -52h116" stroke="${GOLD}" stroke-width="5"/></g><rect x="-8" y="-40" width="16" height="18" rx="4" fill="${GOLD}"/>`;
  A.cloth = `<ellipse class="shadow" cx="0" cy="6" rx="130" ry="14"/><g class="up"><path d="M-130 -10 q130 34 260 0 l-22 -40 q-108 22 -216 0Z" fill="var(--pale)"/><path d="M-122 -14 q122 30 244 0" stroke="#8f2f3a" stroke-width="5" fill="none"/><ellipse cx="0" cy="-36" rx="34" ry="24" fill="#c9ccd6"/><ellipse cx="0" cy="-36" rx="22" ry="15" fill="${INK}"/><g fill="var(--sil)"><circle cx="-128" cy="-12" r="7"/><circle cx="128" cy="-12" r="7"/><circle cx="-108" cy="-50" r="7"/><circle cx="108" cy="-50" r="7"/></g></g>`;
  A.bstone = `${glow(0, -26, 80)}<ellipse cx="0" cy="-24" rx="36" ry="26" fill="#c9ccd6"/><ellipse cx="0" cy="-24" rx="24" ry="17" fill="${INK}"/>`;
  A.mat = `<path d="M-90 0 L-70 -34 H70 L90 0Z" fill="#8f2f3a"/><path d="M-80 -8 L-66 -28 H66 L80 -8Z" fill="none" stroke="${GOLD}" stroke-width="3"/><path d="M-90 0v8M-70 0v8M-50 0v8M-30 0v8M-10 0v8M10 0v8M30 0v8M50 0v8M70 0v8M90 0v8" stroke="var(--pale)" stroke-width="3"/>`;
  A.basket = `<path d="M-30 0 q-10 -34 0 -40 h60 q10 6 0 40Z" fill="var(--sil2)"/><path d="M-34 -40h68" stroke="var(--sil)" stroke-width="6" stroke-linecap="round"/><path d="M-24 -28h48M-28 -14h56" stroke="var(--sil)" stroke-width="3"/><path d="M-22 -40 q22 -40 44 0" fill="none" stroke="var(--sil)" stroke-width="5"/><path d="M52 0 q-14 -30 4 -52 q18 22 4 52Z" fill="var(--sil)"/><rect x="52" y="-60" width="10" height="10" rx="3" fill="var(--sil)"/>`;
  A.grass = `<g class="sprout" fill="var(--leaf)">${[-90, -60, -30, 0, 30, 60, 90].map((x, i) => `<path d="M${x} 0 q-10 -${26 + (i % 3) * 8} -2 -${40 + (i % 3) * 8} q8 ${20} 6 ${40 + (i % 3) * 8}Z"/><path d="M${x + 10} 0 q10 -${20 + (i % 2) * 10} 14 -${30 + (i % 2) * 10} q-2 16 -8 ${30 + (i % 2) * 10}Z" fill="var(--leaf2)"/>`).join("")}</g><path d="M-110 0h220" stroke="var(--sand2)" stroke-width="4" stroke-linecap="round"/>`;
  const wall = (shown) => {
    let s = "";
    for (let r = 0; r < 6; r++) {
      const y = -22 * (r + 1);
      let row = "";
      for (let c = 0; c < 5; c++) row += `<rect x="${-75 + c * 30 + (r % 2 ? -8 : 0)}" y="${y}" width="${28}" height="20" rx="3" fill="${(r + c) % 2 ? "var(--wall2)" : "var(--wall)"}"/>`;
      s += r < shown ? row : `<g class="row" style="transition-delay:${(r - shown) * 0.35}s">${row}</g>`;
    }
    return s;
  };
  A.gate = `${glow(0, -80, 150)}<path d="M-90 0 V-150 Q0 -230 90 -150 V0 H56 V-140 Q0 -190 -56 -140 V0Z" fill="var(--wall2)"/><path d="M-90 0 V-150 Q0 -230 90 -150" fill="none" stroke="var(--trunk)" stroke-width="5"/><path class="win" d="M-56 0 V-140 Q0 -190 56 -140 V0Z"/>`;
  A.hall = `${glow(0, -40, 110)}<rect x="-120" y="-130" width="240" height="130" rx="6" fill="var(--wall)"/><rect x="-128" y="-140" width="256" height="14" rx="5" fill="var(--wall2)"/><rect x="60" y="-196" width="50" height="60" rx="4" fill="var(--wall)"/><path d="M56 -196 h58 l-29 -26Z" fill="var(--wall2)"/><rect class="win" x="77" y="-180" width="16" height="24" rx="8"/><rect class="win" x="-96" y="-104" width="18" height="28" rx="9"/><rect class="win" x="-56" y="-104" width="18" height="28" rx="9"/><path class="win" d="M-22 0 V-62 a22 22 0 0 1 44 0 V0Z"/><path class="leaf" d="M-22 0 V-62 a22 22 0 0 1 44 0 V0Z" fill="var(--sil)"/>`;
  const callig = (txt, size) => `${glow(0, -size * 0.35, size * 1.5)}<text class="callig" text-anchor="middle" font-size="${size}" y="0">${txt}</text>`;

  /* ---------- tappable props, with their names and sounds ---------- */
  const t = {
    kaaba: (x, y, s) => T("kaaba", "pulse", "chime", x, y, s, A.kaaba, [-80, -145, 160, 165]),
    palm: (x, y, s) => T("palm", "sway", "rustle", x, y, s, A.palm, [-75, -160, 150, 170]),
    house: (x, y, s, w = 110, h = 90, n = 1) => T("house", "light", "chime", x, y, s, house(w, h, n), [-w / 2 - 15, -h - 25, w + 30, h + 35]),
    eleph: (x, y, s) => T("elephant", "sit", "thud", x, y, s, A.eleph, [-150, -200, 330, 220]),
    birds: (x, y, s) => T("birds", "fly", "chirp", x, y, s, A.birds, [-190, -90, 400, 190]),
    camel: (x, y, s, load) => T("camel", "walk", "steps", x, y, s, load ? A.camelL : A.camel, [-90, -220, 220, 235]),
    donkey: (x, y, s, fx, thin) => T("donkey", fx, "steps", x, y, s, thin ? A.donkeyThin : A.donkey, [-70, -140, 170, 155]),
    sheep: (x, y, s, fx = "hop") => T("sheep", fx, "baa", x, y, s, A.sheep, [-60, -90, 140, 105]),
    goat: (x, y, s) => T("goat", "hop", "baa", x, y, s, A.goat, [-60, -110, 140, 125]),
    tent: (x, y, s) => T("tent", "light", "chime", x, y, s, A.tent, [-115, -145, 230, 155]),
    orb: (x, y, s, fx = "pulse") => T("orb", fx, "chime", x, y, s, A.orb, [-65, -65, 130, 130]),
    star: (x, y, s) => T("star", "shine", "twinkle", x, y, s, A.star, [-80, -80, 160, 160]),
    stars: (x, y, s) => T("stars", "twinkle", "twinkle", x, y, s, A.stars, [-190, -70, 380, 160]),
    cloud: (x, y, s) => T("cloud", "drift", "whoosh", x, y, s, A.cloud, [-90, -65, 195, 100]),
    lamp: (x, y, s) => T("lamp", "light", "chime", x, y, s, A.lamp, [-40, -100, 80, 110]),
    cave: (x, y, s, fx = "light") => T("cave", fx, "chime", x, y, s, A.cave, [-80, -115, 160, 125]),
    stall: (x, y, s) => T("stall", "flutter", "rustle", x, y, s, A.stall, [-110, -160, 220, 165]),
    scale: (x, y, s) => T("scale", "tip", "chime", x, y, s, A.scale, [-115, -150, 230, 160]),
    chest: (x, y, s) => T("chest", "open", "creak", x, y, s, A.chest, [-75, -100, 150, 110]),
    cloth: (x, y, s) => T("cloth", "lift", "whoosh", x, y, s, A.cloth, [-145, -80, 290, 105]),
    bstone: (x, y, s) => T("stone", "pulse", "chime", x, y, s, A.bstone, [-55, -65, 110, 75]),
    mat: (x, y, s) => T("mat", "pulse", "pop", x, y, s, A.mat, [-100, -50, 200, 65]),
    basket: (x, y, s) => T("basket", "hop", "pop", x, y, s, A.basket, [-50, -90, 125, 100]),
    grass: (x, y, s) => T("grass", "grow", "rustle", x, y, s, A.grass, [-120, -70, 240, 85]),
    wall: (x, y, s, shown) => T("wall", "grow", "thud", x, y, s, wall(shown), [-95, -145, 190, 155]),
    gate: (x, y, s) => T("gate", "light", "creak", x, y, s, A.gate, [-100, -215, 200, 225]),
    hall: (x, y, s) => T("door", "open", "creak", x, y, s, A.hall, [-135, -225, 270, 235]),
    name: (x, y, s, txt) => T("name", "name", "twinkle", x, y, s, callig(txt, 150), [-230, -180, 460, 240]),
    bird: (x, y, s) => T("bird", "hop", "chirp", x, y, s, A.bird, [-40, -45, 80, 55]),
    masjid: (x, y, s) => T("mosque", "light", "chime", x, y, s, masjid, [-190, -130, 380, 140]),
    dust: (x, y, s) => T("dust", "pulse", "whoosh", x, y, s, A.dust, [-90, -90, 200, 100]),
    shadow: (x, y, s) => T("shadow", "pulse", "thud", x, y, s, A.eleph, [-150, -200, 330, 220]),
    specks: (x, y, s) => T("specks", "fly", "chirp", x, y, s, A.specks, [-190, -90, 380, 180]),
    starname: (x, y, s) => T("starname", "shine", "twinkle", x, y, s, A.starname, [-110, -110, 220, 240])
  };
  // N(...) marks the thing that answers the slide's question: touching it turns the page.
  // veil = it stays hidden until the question has been asked.
  const N = (tap, veil) => tap.replace('class="tap"', `class="tap portal${veil ? " veil" : ""}"`).replace(" data-fx=", ' data-next="1" data-fx=');
  const p = {
    kaaba: (x, y, s) => P(x, y, s, A.kaaba),
    palm: (x, y, s) => P(x, y, s, A.palm),
    house: (x, y, s, w = 110, h = 90, n = 1, lit) => P(x, y, s, house(w, h, n), lit ? "on" : ""),
    eleph: (x, y, s, sit) => P(x, y, s, A.eleph, sit ? "sat" : ""),
    tent: (x, y, s) => P(x, y, s, A.tent),
    orb: (x, y, s) => P(x, y, s, A.orb),
    sheep: (x, y, s) => P(x, y, s, A.sheep),
    camel: (x, y, s, load) => P(x, y, s, load ? A.camelL : A.camel),
    wall: (x, y, s, shown) => P(x, y, s, wall(shown)),
    stall: (x, y, s) => P(x, y, s, A.stall),
    cave: (x, y, s, lit) => P(x, y, s, A.cave, lit ? "on" : ""),
    hall: (x, y, s) => P(x, y, s, A.hall),
    camp: (x, y, s) => P(x, y, s, A.camp),
    masjid: (x, y, s, lit) => P(x, y, s, masjid, lit ? "on" : "")
  };

  /* ---------- backdrops ----------
     Each backdrop is three layers (far, middle, near). The camera moves them at different speeds,
     which gives the picture depth. Layers are drawn wider than the frame so the edges never show. */
  const defs = `<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--sky1)"/><stop offset=".62" stop-color="var(--sky2)"/><stop offset=".86" stop-color="var(--sky3)"/></linearGradient><linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--sand)"/><stop offset="1" stop-color="var(--sand2)"/></linearGradient><radialGradient id="gl"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".95"/><stop offset=".5" stop-color="#ffe9a8" stop-opacity=".35"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient></defs>`;
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  let skyStars = ""; for (let i = 0; i < 70; i++) skyStars += `<circle class="tw" cx="${Math.round(rnd() * 1160 - 80)}" cy="${Math.round(rnd() * 330)}" r="${(0.8 + rnd() * 2).toFixed(1)}"/>`;
  let motes = ""; for (let i = 0; i < 14; i++) motes += `<circle class="mote" cx="${Math.round(rnd() * 1000)}" cy="${Math.round(380 + rnd() * 230)}" r="${(1.5 + rnd() * 2.5).toFixed(1)}" style="animation-delay:-${(rnd() * 12).toFixed(1)}s"/>`;
  const sky = `<rect x="-120" y="-40" width="1240" height="700" fill="url(#sk)"/><g class="skystars"><ellipse cx="500" cy="170" rx="700" ry="80" transform="rotate(-16 500 170)" fill="#9fb0ff" opacity=".1"/>${skyStars}</g><g class="skyclouds"><g class="cl1">${P(200, 150, 1.4, A.cloud)}</g><g class="cl2">${P(780, 230, 1, A.cloud)}</g><g class="cl1">${P(560, 90, 0.8, A.cloud)}</g></g>`;
  const ripples = [[60, 548, 240], [380, 566, 300], [700, 552, 260], [200, 596, 340], [640, 604, 280]].map(q => `<path d="M${q[0]} ${q[1]} q${q[2] / 2} -10 ${q[2]} 0" stroke="var(--sand2)" stroke-width="3" fill="none" opacity=".6" stroke-linecap="round"/>`).join("");
  const ground = (d) => `<path d="${d}" fill="url(#gr)"/>${ripples}`;
  const B = {
    valley: [
      `<path d="M-100 390 L-20 350 L60 365 L130 300 L190 330 L260 250 L330 310 L400 270 L470 200 L540 280 L610 240 L680 300 L760 230 L840 290 L910 250 L1000 320 L1100 290 V660 H-100Z" fill="var(--h1)"/>`,
      `<path d="M-100 450 L0 430 L90 390 L170 420 L250 350 L340 410 L430 360 L520 430 L600 380 L690 330 L780 400 L870 360 L1000 430 L1100 400 V660 H-100Z" fill="var(--h2)"/>`,
      `<path d="M-100 480 Q20 440 240 472 T480 462 T720 476 T1100 455 V660 H-100Z" fill="var(--h3)"/>` + ground("M-100 508 Q500 482 1100 508 V660 H-100Z")
    ],
    dunes: [
      `<path d="M-100 400 Q50 350 300 392 T600 372 T1100 380 V660 H-100Z" fill="var(--h1)"/>`,
      `<path d="M-100 450 Q250 380 500 442 T1100 420 V660 H-100Z" fill="var(--h2)"/>`,
      `<path d="M-100 478 Q200 440 420 474 T860 460 T1100 470 V660 H-100Z" fill="var(--h3)"/>` + ground("M-100 505 Q300 468 620 504 T1100 492 V660 H-100Z")
    ],
    hills: [
      `<path d="M-100 420 L40 330 L170 270 L250 330 L330 300 L420 350 L520 250 L610 320 L700 290 L780 340 L860 280 L960 340 L1100 300 V660 H-100Z" fill="var(--h1)"/>`,
      `<path d="M-100 460 Q220 360 460 450 T1100 430 V660 H-100Z" fill="var(--grass2)"/>`,
      `<path d="M-100 512 Q320 452 640 506 T1100 496 V660 H-100Z" fill="var(--grass)"/>`
    ],
    mount: [
      `<path d="M-100 460 L40 400 L160 330 L260 400 L360 370 L460 420 L1100 420 V660 H-100Z" fill="var(--h1)"/>`,
      `<path d="M-100 500 L120 440 L300 470 L700 460 L900 430 L1100 470 V660 H-100Z" fill="var(--h2)"/>`,
      `<path d="M230 580 L360 400 L420 330 L470 250 L520 150 Q560 100 610 150 L660 240 L720 300 L790 400 L960 580Z" fill="var(--h3)"/><path d="M520 150 Q560 100 610 150 L660 240 L600 330 L640 430 L560 580 L230 580 L360 400 L420 330 L470 250Z" fill="var(--h2)" opacity=".55"/><path d="M420 540 q60 -70 30 -130 q70 -40 60 -110" stroke="var(--sand)" stroke-width="7" fill="none" stroke-linecap="round" stroke-dasharray="3 20" opacity=".7"/>` + ground("M-100 548 Q500 512 1100 548 V660 H-100Z")
    ]
  };
  // Each drawing gets its own gradient ids, so a night scene never borrows another scene's day sky.
  let uid = 0;
  const SKY = /data-name="(orb|stars|star|cloud|birds|specks)"/;
  const S = (mood, back, ...parts) => {
    const u = ++uid, b = B[back];
    const up = parts.filter((x) => SKY.test(x.slice(0, 90))).join(""), land = parts.filter((x) => !SKY.test(x.slice(0, 90))).join("");
    let body = defs + `<g class="cam cam${u % 4}">${sky}<g class="L0">${up}</g><g class="L1">${b[0]}</g><g class="L2">${b[1]}</g><g class="L3">${b[2]}${land}</g><g class="motes">${motes}</g></g>`;
    for (const id of ["sk", "gl", "gr"]) body = body.split(`id="${id}"`).join(`id="${id}${u}"`).split(`url(#${id})`).join(`url(#${id}${u})`);
    return { mood, svg: `<svg viewBox="0 0 1000 625" preserveAspectRatio="xMidYMid slice" class="scene ${mood}" aria-hidden="true">${body}</svg>` };
  };
  const town = (x, y) => p.house(x, y, 1, 90, 70) + p.house(x + 95, y + 14, 1, 70, 54) + p.house(x - 80, y + 18, 1, 64, 48);

  /* ---------- the scenes, story by story ---------- */
  /* Every slide has exactly one N(...): the thing that answers the slide's question. Keep it between
     x 130 and 870 so it is inside the part of the picture a tablet shows. */
  SN.art = {
    bird: [
      () => S("", "valley", t.orb(760, 200, 0.9), p.house(330, 512, 1.4, 120, 96, 1), t.palm(180, 548, 1.1), N(t.bird(600, 562, 2.2))),
      () => S("dusk", "valley", N(t.house(480, 518, 1.6, 130, 100, 1)), t.palm(200, 548, 1.2), t.bird(720, 564, 1.7), t.orb(770, 230, 0.9)),
      () => S("dusk", "valley", p.house(260, 512, 1.4, 120, 96, 1, 1), N(t.mat(560, 562, 1.5)), t.lamp(790, 560, 1.2), t.bird(420, 566, 1.5))
    ],
    camelcry: [
      () => S("", "dunes", t.orb(220, 200, 0.9), t.palm(290, 522, 1.1), N(t.palm(520, 548, 1.7)), t.palm(760, 528, 1.2)),
      () => S("", "dunes", t.palm(210, 532, 1.3), t.palm(810, 532, 1.3), N(t.camel(500, 562, 1.2)), t.cloud(600, 140, 1)),
      () => S("", "dunes", p.camel(380, 562, 1.2), t.palm(180, 532, 1.3), N(t.grass(700, 578, 1.2)), t.orb(760, 200, 0.9))
    ],
    prayer: [
      () => S("dusk", "valley", N(t.masjid(500, 522, 1.25)), t.palm(180, 548, 1.2), t.palm(830, 548, 1.2), t.orb(760, 210, 0.8)),
      () => S("night", "valley", p.masjid(420, 522, 1.15, 1), N(t.lamp(770, 562, 1.5)), t.stars(420, 110, 1), t.palm(160, 548, 1.1)),
      () => S("night", "valley", p.masjid(480, 522, 1.15, 1), t.palm(170, 548, 1.1), t.lamp(820, 562, 1.2), N(t.stars(500, 120, 1.3)))
    ],
    elephant: [
      () => S("", "valley", t.orb(800, 250, 1), town(250, 478), p.house(700, 486, 1, 84, 60), t.kaaba(500, 505, 1.2), t.palm(110, 545, 1.1), t.palm(900, 548, 1.2), N(t.dust(230, 400, 1.1), 1)),
      () => S("dusk", "dunes", t.orb(160, 270, 1), p.camp(360, 506, 1), t.palm(60, 540, 1), t.cloud(600, 150, 1), N(t.shadow(720, 552, 0.8), 1)),
      () => S("", "dunes", t.orb(140, 240, 0.9), p.kaaba(900, 462, 0.4), p.camp(110, 478, 0.5), t.palm(800, 520, 0.8), N(t.eleph(420, 556, 1.1))),
      () => S("dusk", "dunes", p.kaaba(900, 462, 0.4), p.camp(110, 478, 0.5), p.eleph(420, 556, 1.1, 1), t.palm(800, 520, 0.8), N(t.specks(300, 150, 1), 1)),
      () => S("dusk", "valley", p.eleph(150, 528, 0.5, 1), t.birds(330, 150, 1.2), t.birds(700, 230, 0.8), t.palm(930, 545, 1), N(t.kaaba(760, 505, 1))),
      () => S("night", "valley", town(240, 478), p.kaaba(520, 505, 1.2), t.house(770, 500, 1.2, 96, 76, 1), t.palm(160, 548, 1.1), N(t.starname(500, 150, 0.8)))
    ],
    birth: [
      () => S("night", "valley", t.orb(760, 130, 0.9), p.kaaba(800, 482, 0.6), N(t.house(430, 518, 1.5, 120, 96, 1)), t.palm(190, 548, 1.2)),
      () => S("dawn", "valley", N(t.orb(700, 400, 1.1, "rise")), p.house(400, 518, 1.5, 120, 96, 1, 1), t.birds(300, 150, 0.8), t.palm(180, 548, 1.2)),
      () => S("", "valley", N(t.kaaba(500, 508, 1.4)), t.birds(280, 150, 0.8), t.palm(170, 548, 1.1), t.palm(830, 548, 1.2)),
      () => S("night", "valley", N(t.name(500, 300, 1, "محمد")), t.stars(500, 90, 1), p.house(220, 508, 1, 110, 90, 1, 1), p.kaaba(800, 498, 0.7)),
      () => S("", "valley", N(t.orb(260, 180, 1)), t.kaaba(540, 508, 1.2), town(790, 480), t.palm(150, 548, 1.1), t.cloud(620, 130, 1))
    ],
    halimah: [
      () => S("", "dunes", t.orb(780, 180, 1), N(t.tent(300, 508, 1)), p.tent(540, 480, 0.6), t.camel(720, 550, 0.9), t.palm(170, 532, 1)),
      () => S("", "dunes", N(t.donkey(360, 552, 1.5, "plod", 1)), t.camel(700, 548, 0.9), p.kaaba(170, 470, 0.4), t.cloud(520, 130, 1)),
      () => S("", "dunes", N(t.donkey(360, 552, 1.5, "trot")), t.camel(700, 548, 0.9), t.palm(840, 528, 1), t.orb(230, 170, 0.9)),
      () => S("dusk", "dunes", p.tent(230, 498, 0.9), N(t.goat(450, 558, 1.3)), t.goat(650, 544, 1.1), t.grass(800, 574, 0.9), t.orb(780, 200, 0.9)),
      () => S("night", "dunes", t.tent(300, 518, 1.1), N(t.stars(520, 120, 1.2)), t.orb(790, 130, 0.8), p.sheep(640, 558, 1), t.palm(840, 538, 1))
    ],
    family: [
      () => S("", "valley", N(t.house(420, 518, 1.5, 120, 96, 1)), p.kaaba(780, 482, 0.6), t.palm(190, 548, 1.2), t.orb(770, 150, 0.9)),
      () => S("dusk", "dunes", N(t.camel(440, 552, 1.1, 1)), t.palm(790, 528, 1.1), t.cloud(320, 130, 1), t.orb(740, 220, 0.9)),
      () => S("dusk", "valley", t.camel(270, 554, 0.9), N(t.kaaba(650, 508, 0.9)), t.palm(840, 548, 1.1), t.stars(400, 100, 0.9)),
      () => S("", "valley", p.kaaba(600, 488, 1.4), N(t.mat(350, 555, 1.3)), t.palm(160, 548, 1.1), t.birds(740, 150, 0.7)),
      () => S("dusk", "valley", N(t.house(500, 528, 1.5, 200, 110, 3)), p.house(200, 508, 1, 90, 70), t.palm(820, 548, 1.2)),
      () => S("night", "valley", t.stars(450, 110, 1.2), N(t.orb(760, 140, 0.9)), p.house(320, 518, 1.3, 120, 96, 1, 1), p.kaaba(620, 498, 0.8), t.palm(160, 548, 1.1))
    ],
    shepherd: [
      () => S("", "hills", t.orb(770, 150, 1), town(220, 450), N(t.sheep(470, 560, 1.4)), t.sheep(700, 548, 1.1)),
      () => S("", "hills", t.sheep(280, 558, 1.3), p.sheep(440, 568, 1.2), N(t.sheep(780, 478, 0.9, "wander")), t.cloud(500, 130, 1)),
      () => S("", "hills", t.sheep(320, 560, 1.4), t.sheep(560, 552, 1.2), N(t.palm(780, 532, 1.3)), t.birds(450, 150, 0.7)),
      () => S("night", "hills", N(t.stars(480, 120, 1.3)), t.orb(780, 130, 0.9), p.sheep(320, 568, 1.2), p.sheep(450, 575, 1.1), t.sheep(610, 568, 1.2)),
      () => S("dawn", "hills", N(t.orb(720, 390, 1.1, "rise")), t.sheep(340, 560, 1.4), t.sheep(560, 555, 1.2), t.palm(170, 538, 1.1))
    ],
    amin: [
      () => S("", "valley", N(t.orb(740, 180, 1)), town(240, 480), t.house(520, 518, 1.3, 120, 96, 1), p.kaaba(790, 490, 0.7)),
      () => S("", "valley", t.stall(300, 548, 1.2), N(t.scale(660, 552, 1.2)), p.house(850, 490, 1, 84, 60)),
      () => S("night", "valley", N(t.name(500, 310, 1, "الأمين")), t.stars(500, 90, 1), p.kaaba(800, 498, 0.7), p.house(210, 508, 1, 100, 80, 1, 1)),
      () => S("", "valley", N(t.chest(500, 558, 1.7)), p.house(220, 498, 1.1, 110, 90), t.lamp(740, 558, 1.2), t.palm(850, 548, 1)),
      () => S("dusk", "valley", N(t.hall(500, 538, 1.2)), t.lamp(220, 558, 1.2), t.palm(820, 548, 1.2))
    ],
    syria: [
      () => S("", "valley", town(210, 470), N(t.camel(480, 558, 1, 1)), t.camel(720, 550, 0.9, 1), t.orb(770, 150, 0.9)),
      () => S("night", "dunes", N(t.stars(470, 120, 1.2)), t.camel(340, 558, 1, 1), p.tent(680, 508, 0.9), t.lamp(820, 558, 1.1)),
      () => S("", "valley", N(t.hall(600, 528, 1.2)), t.camel(250, 558, 0.9, 1), t.palm(840, 548, 1.1)),
      () => S("", "valley", p.hall(660, 528, 1.1), t.cloud(380, 140, 1.2), N(t.palm(340, 552, 1.5)), t.birds(680, 130, 0.6)),
      () => S("dusk", "dunes", N(t.camel(400, 558, 1.1)), p.kaaba(820, 468, 0.5), t.palm(700, 508, 0.8), t.orb(230, 200, 0.9))
    ],
    khadijah: [
      () => S("", "valley", t.stall(290, 548, 1.2), N(t.house(660, 528, 1.4, 150, 110, 2)), t.palm(850, 548, 1)),
      () => S("", "dunes", N(t.camel(330, 558, 1, 1)), t.camel(600, 550, 0.9, 1), t.palm(820, 528, 1.1), t.orb(760, 160, 0.9)),
      () => S("", "valley", N(t.scale(500, 558, 1.4)), p.stall(210, 528, 1), t.stall(790, 538, 1)),
      () => S("dusk", "valley", N(t.camel(320, 558, 1, 1)), t.house(690, 528, 1.4, 150, 110, 2), t.palm(510, 548, 1)),
      () => S("night", "valley", t.house(500, 528, 1.5, 170, 110, 2), N(t.lamp(260, 558, 1.2)), t.lamp(740, 558, 1.2), t.orb(780, 130, 0.8), t.stars(380, 110, 1))
    ],
    stone: [
      () => S("", "valley", N(t.wall(500, 528, 1.7, 2)), t.palm(170, 548, 1.1), town(790, 480), t.orb(230, 170, 0.9)),
      () => S("", "valley", p.wall(450, 528, 1.7, 6), N(t.bstone(720, 568, 1.4)), t.palm(170, 548, 1.1)),
      () => S("", "valley", N(t.gate(500, 548, 1.4)), p.wall(190, 508, 0.9, 6), t.palm(820, 548, 1.2)),
      () => S("dawn", "valley", N(t.gate(500, 548, 1.4)), t.birds(260, 140, 0.7), t.palm(820, 548, 1.2), t.orb(760, 340, 0.9, "rise")),
      () => S("", "valley", p.wall(760, 508, 1.3, 6), N(t.cloth(430, 568, 1.4)), t.palm(160, 538, 1))
    ],
    hira: [
      () => S("", "valley", t.orb(760, 160, 1), town(240, 480), N(t.kaaba(540, 508, 1.1)), t.palm(830, 548, 1.1)),
      () => S("", "mount", N(t.cave(585, 250, 0.55, "pulse")), t.cloud(250, 140, 1), t.palm(170, 558, 1.1)),
      () => S("night", "mount", p.cave(585, 250, 0.55), N(t.basket(280, 578, 1.3)), t.lamp(430, 578, 1.2), t.orb(200, 130, 0.8)),
      () => S("night", "mount", p.cave(585, 250, 0.55), N(t.stars(260, 130, 1.1)), t.orb(790, 130, 0.9), t.palm(170, 558, 1.1)),
      () => S("dawn", "mount", p.cave(585, 250, 0.55), N(t.orb(250, 400, 1.1, "rise")), t.birds(300, 160, 0.7))
    ],
    read: [
      () => S("night", "mount", N(t.cave(585, 250, 0.7)), t.stars(260, 130, 1), t.orb(800, 120, 0.7)),
      () => S("night", "mount", p.cave(585, 250, 0.7, 1), t.stars(260, 130, 1), N(t.star(770, 140, 0.7))),
      () => S("night", "mount", p.cave(585, 250, 0.5, 1), N(t.name(330, 330, 0.9, "اقْرَأْ")), t.stars(780, 110, 0.8)),
      () => S("night", "valley", N(t.house(450, 528, 1.6, 130, 100, 1)), t.lamp(720, 560, 1.2), t.stars(320, 110, 1), p.kaaba(820, 480, 0.5)),
      () => S("dawn", "valley", p.house(340, 528, 1.5, 130, 100, 1, 1), N(t.orb(700, 385, 1.1, "rise")), t.kaaba(820, 508, 0.8), t.palm(160, 548, 1.1))
    ],
    first: [
      () => S("night", "valley", N(t.house(500, 528, 1.6, 130, 100, 1)), t.stars(320, 110, 1), p.kaaba(810, 490, 0.6)),
      () => S("night", "valley", p.house(270, 518, 1.2, 130, 100, 1, 1), N(t.lamp(540, 560, 1.4)), t.stars(700, 110, 1)),
      () => S("night", "valley", p.house(220, 508, 1.1, 120, 96, 1, 1), N(t.lamp(440, 560, 1.3)), t.lamp(640, 560, 1.3), t.stars(740, 110, 0.9)),
      () => S("night", "valley", p.house(190, 498, 1, 110, 90, 1, 1), N(t.house(420, 522, 1.2, 120, 96, 1)), t.house(640, 518, 1.1, 110, 90, 1), t.house(820, 508, 1, 100, 84, 1)),
      () => S("night", "valley", t.house(180, 508, 0.9, 110, 90, 1), t.house(330, 532, 1.1, 120, 96, 2), t.house(520, 518, 1, 110, 90, 1), t.house(700, 535, 1.1, 130, 96, 2), t.house(850, 512, 0.9, 100, 84, 1), N(t.stars(500, 100, 1.2)))
    ]
  };

  SN.homeScene = () => S("night", "dunes", p.palm(70, 600, 1.3), p.palm(945, 590, 1.1), p.tent(880, 470, 0.45), p.kaaba(120, 470, 0.4)).svg;

  /* When, during the voice-over, each thing in a picture plays by itself (0 = start, 1 = end).
     One entry per picture. Anything not listed is spread evenly through the telling. */
  SN.cues = {
    elephant: [{ orb: 0.08, kaaba: 0.3, palm: 0.6 }, { orb: 0.1, palm: 0.3, cloud: 0.6 }, { orb: 0.15, palm: 0.5 }, { palm: 0.4 }, { birds: 0.05, palm: 0.6 }, { house: 0.75, palm: 0.3 }]
  };

  /* What each tappable thing is called, for the "can you find..." prompt. */
  SN.names = {
    kaaba: ["the Ka'bah", "کعبہ"], palm: ["the palm tree", "کھجور کا درخت"], house: ["the house", "گھر"], elephant: ["the elephant", "ہاتھی"],
    birds: ["the birds", "پرندے"], camel: ["the camel", "اونٹ"], donkey: ["the donkey", "گدھا"], sheep: ["the sheep", "بھیڑ"], goat: ["the goat", "بکری"],
    tent: ["the tent", "خیمہ"], orb: ["the light in the sky", "آسمان کی روشنی"], star: ["the big star", "بڑا ستارہ"], stars: ["the stars", "ستارے"],
    cloud: ["the cloud", "بادل"], lamp: ["the lamp", "چراغ"], cave: ["the cave", "غار"], stall: ["the market stall", "دکان"], scale: ["the scales", "ترازو"],
    chest: ["the box", "صندوق"], cloth: ["the cloth", "چادر"], stone: ["the Black Stone", "حجرِ اسود"], mat: ["the mat", "بچھونا"], basket: ["the basket", "ٹوکری"],
    bird: ["the little bird", "ننھی چڑیا"], mosque: ["the mosque", "مسجد"],
    starname: ["the star", "ستارہ"], dust: ["the dust", "گرد"], shadow: ["the big shape", "بڑی سی چیز"], specks: ["the dots in the sky", "آسمان کے نقطے"],
    grass: ["the grass", "گھاس"], wall: ["the wall", "دیوار"], gate: ["the gate", "دروازہ"], door: ["the door", "دروازہ"], name: ["the shining name", "چمکتا ہوا نام"]
  };
  SN.findPrompt = (name, lang) => {
    const n = SN.names[name]; if (!n) return "";
    return lang === "ur" ? `${n[1]} کہاں ہے؟ اسے چھو کر دیکھو!` : `Can you find ${n[0]}? Give it a tap!`;
  };

  /* ---------- small pictures for the story path ---------- */
  SN.icons = {
    bird: '<ellipse cx="22" cy="28" rx="13" ry="9" fill="#c98a5a"/><circle cx="33" cy="20" r="7" fill="#c98a5a"/><path d="M39 19l7 2-7 3Z" fill="#e2b23c"/><path d="M10 27l-8-5 2 9Z" fill="#8a5a3a"/><circle cx="35" cy="18" r="1.500" fill="#1b1b22"/><path d="M19 37v6M26 37v6" stroke="#8a5a3a" stroke-width="2"/>',
    tear: '<ellipse cx="20" cy="28" rx="13" ry="7" fill="#d9a566"/><circle cx="20" cy="20" r="6" fill="#d9a566"/><path d="M31 27 37 12" stroke="#d9a566" stroke-width="5" stroke-linecap="round"/><circle cx="39" cy="11" r="4" fill="#d9a566"/><rect x="10" y="32" width="3" height="11" fill="#b98346"/><rect x="27" y="32" width="3" height="11" fill="#b98346"/><path d="M42 17q3 5 0 7q-3-2 0-7Z" fill="#6fb3e0"/>',
    masjid: '<rect x="6" y="20" width="36" height="22" rx="2" fill="#c9a36f"/><path d="M4 20l4-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5Z" fill="#2f7d5b"/><path d="M19 42V32a5 5 0 0 1 10 0v10Z" fill="#ffd76a"/><rect x="5" y="20" width="3" height="22" fill="#8a5a2b"/><rect x="40" y="20" width="3" height="22" fill="#8a5a2b"/>',
    eleph: '<ellipse cx="22" cy="28" rx="14" ry="10" fill="#959db0"/><circle cx="34" cy="22" r="8" fill="#959db0"/><path d="M40 24q5 8 1 15" stroke="#959db0" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="12" y="34" width="5" height="9" rx="2" fill="#7d8598"/><rect x="26" y="34" width="5" height="9" rx="2" fill="#7d8598"/><circle cx="36" cy="20" r="1.5" fill="#1b1b22"/>',
    moon: '<path d="M30 8a16 16 0 1 0 10 28a13 13 0 1 1-10-28z" fill="#f0a22e"/><circle cx="36" cy="14" r="2.5" fill="#f0a22e"/>',
    tent: '<path d="M6 40 24 10 42 40Z" fill="#c9793f"/><path d="M19 40 24 26 29 40Z" fill="#3a2a22"/><path d="M24 10v-5l6 2.500-6 2.500" fill="#b8473d"/>',
    palm: '<rect x="22" y="18" width="4" height="24" rx="2" fill="#8a5a2b"/><ellipse cx="15" cy="17" rx="11" ry="4" fill="#2f7d5b" transform="rotate(-20 15 17)"/><ellipse cx="33" cy="17" rx="11" ry="4" fill="#2f7d5b" transform="rotate(20 33 17)"/><ellipse cx="24" cy="11" rx="4" ry="9" fill="#3f9a78"/>',
    sheep: '<ellipse cx="21" cy="26" rx="14" ry="10" fill="#f6f1e6" stroke="#b9b2a6" stroke-width="1.5"/><circle cx="36" cy="22" r="6" fill="#3a3440"/><rect x="13" y="34" width="3" height="8" fill="#3a3440"/><rect x="26" y="34" width="3" height="8" fill="#3a3440"/>',
    key: '<circle cx="15" cy="24" r="8" fill="none" stroke="#e2b23c" stroke-width="5"/><path d="M23 24h20M36 24v8M42 24v6" stroke="#e2b23c" stroke-width="5" stroke-linecap="round"/>',
    camel: '<ellipse cx="20" cy="28" rx="13" ry="7" fill="#d9a566"/><circle cx="20" cy="20" r="6" fill="#d9a566"/><path d="M31 27 37 12" stroke="#d9a566" stroke-width="5" stroke-linecap="round"/><circle cx="39" cy="11" r="4" fill="#d9a566"/><rect x="10" y="32" width="3" height="11" fill="#b98346"/><rect x="27" y="32" width="3" height="11" fill="#b98346"/>',
    coins: '<path d="M24 8v24" stroke="#8a5a2b" stroke-width="3"/><path d="M8 14h32" stroke="#e2b23c" stroke-width="4" stroke-linecap="round"/><path d="M4 26h14q-1 7-7 7t-7-7ZM30 26h14q-1 7-7 7t-7-7Z" fill="#e2b23c"/><path d="M16 40h16" stroke="#8a5a2b" stroke-width="4" stroke-linecap="round"/>',
    stone: '<ellipse cx="24" cy="24" rx="16" ry="13" fill="#c9ccd6"/><ellipse cx="24" cy="24" rx="9" ry="7" fill="#1b1b22"/>',
    cave: '<path d="M4 42 16 14 26 26 34 10 44 42Z" fill="#c08a5c"/><path d="M18 42a7 9 0 0 1 14 0Z" fill="#1b1b22"/>',
    light: '<path d="M24 3v8M9 9l5 6M39 9l-5 6" stroke="#f0a22e" stroke-width="4" stroke-linecap="round"/><path d="M8 22q8-4 16 0v20q-8-4-16 0ZM40 22q-8-4-16 0v20q8-4 16 0Z" fill="#f6f1e6" stroke="#b9b2a6" stroke-width="1.5"/>',
    stars: '<rect x="14" y="20" width="20" height="22" rx="3" fill="#c9a36f"/><rect x="20" y="26" width="8" height="10" rx="4" fill="#ffd76a"/><path d="M10 12l1.500 3 3 1.500-3 1.500-1.500 3-1.500-3-3-1.500 3-1.500ZM38 8l1.500 3 3 1.500-3 1.500-1.500 3-1.500-3-3-1.500 3-1.500ZM24 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1Z" fill="#f0a22e"/>'
  };

  /* ---------- his guide: a small light that drifts to whatever is worth touching ---------- */
  SN.guideSvg = `<span class="spark"></span>`;
})();
