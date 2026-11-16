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
  const tentS = (x, s2) => `<g transform="translate(${x} 0) scale(${s2})"><path d="M-40 0 L0 -46 L40 0Z" fill="var(--sil2)"/><path d="M-8 0 L0 -26 L8 0Z" fill="var(--sil)"/><path d="M0 -46v-22" stroke="var(--sil)" stroke-width="3"/><path class="a-flag" d="M0 -68l20 6-20 6Z" fill="#8f2f3a"/></g>`;
  const spear = (x, h) => `<path d="M${x} 0V${-h}" stroke="var(--sil)" stroke-width="3"/><path d="M${x - 4} ${-h} L${x} ${-h - 14} L${x + 4} ${-h}Z" fill="var(--sil)"/>`;
  A.camp = tentS(-220, 1) + tentS(-120, 1.3) + tentS(0, 1.1) + tentS(110, 1.4) + tentS(230, 1) + [-270, -175, -160, -60, -45, 55, 70, 170, 185, 280].map((x, i) => spear(x, 50 + (i % 3) * 12)).join("");
  A.specks = [[-120, 10, 0.7], [-60, -30, 0.5], [-10, 20, 0.8], [50, -10, 0.6], [-90, 50, 0.5], [90, 40, 0.7], [20, -50, 0.5], [130, 0, 0.6], [-150, -30, 0.5], [0, 60, 0.6], [70, -50, 0.5]].map(q => bird1(q[0], q[1], q[2])).join("");
  A.starname = A.star + `<text class="callig" text-anchor="middle" font-size="100" y="190">محمد</text>`;
  A.lamp = `${glow(0, -34, 90)}<path d="M-16 0h32l-4 -10h-24Z" fill="var(--sil)"/><rect class="win" x="-14" y="-52" width="28" height="42" rx="6"/><path d="M-18 -52h36l-8 -14h-20Z" fill="var(--sil)"/><path d="M0 -66v-12" stroke="var(--sil)" stroke-width="4"/><circle cy="-82" r="6" fill="none" stroke="var(--sil)" stroke-width="3"/>`;
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
    camp: (x, y, s) => P(x, y, s, A.camp)
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
  const SKY = /data-name="(orb|stars|star|cloud|birds|name|specks)"/;
  const S = (mood, back, ...parts) => {
    const u = ++uid, b = B[back];
    const up = parts.filter((x) => SKY.test(x.slice(0, 90))).join(""), land = parts.filter((x) => !SKY.test(x.slice(0, 90))).join("");
    let body = defs + `<g class="cam cam${u % 4}">${sky}<g class="L0">${up}</g><g class="L1">${b[0]}</g><g class="L2">${b[1]}</g><g class="L3">${b[2]}${land}</g><g class="motes">${motes}</g></g>`;
    for (const id of ["sk", "gl", "gr"]) body = body.split(`id="${id}"`).join(`id="${id}${u}"`).split(`url(#${id})`).join(`url(#${id}${u})`);
    return { mood, svg: `<svg viewBox="0 0 1000 625" preserveAspectRatio="xMidYMid slice" class="scene ${mood}" aria-hidden="true">${body}</svg>` };
  };
  const town = (x, y) => p.house(x, y, 1, 90, 70) + p.house(x + 95, y + 14, 1, 70, 54) + p.house(x - 80, y + 18, 1, 64, 48);

  /* ---------- the scenes, story by story ---------- */
  SN.art = {
    elephant: [
      () => S("", "valley", t.orb(800, 250, 1), town(250, 478), p.house(700, 486, 1, 84, 60), t.kaaba(500, 505, 1.2), t.palm(110, 545, 1.1), t.palm(900, 548, 1.2), N(t.dust(230, 400, 1.1), 1)),
      () => S("dusk", "dunes", t.orb(160, 270, 1), p.camp(360, 506, 1), t.palm(60, 540, 1), t.cloud(600, 150, 1), N(t.shadow(720, 552, 0.8), 1)),
      () => S("", "dunes", t.orb(140, 240, 0.9), p.kaaba(900, 462, 0.4), p.camp(110, 478, 0.5), t.palm(800, 520, 0.8), N(t.eleph(420, 556, 1.1))),
      () => S("dusk", "dunes", p.kaaba(900, 462, 0.4), p.camp(110, 478, 0.5), p.eleph(420, 556, 1.1, 1), t.palm(800, 520, 0.8), N(t.specks(300, 150, 1), 1)),
      () => S("dusk", "valley", p.eleph(150, 528, 0.5, 1), t.birds(330, 150, 1.2), t.birds(700, 230, 0.8), t.palm(930, 545, 1), N(t.kaaba(760, 505, 1))),
      () => S("night", "valley", town(240, 478), p.kaaba(520, 505, 1.2), t.house(770, 500, 1.2, 96, 76, 1), t.palm(160, 548, 1.1), N(t.starname(500, 150, 0.8)))
    ],
    birth: [
      () => S("night", "valley", t.orb(830, 110, 0.9), p.kaaba(820, 470, 0.6), t.house(420, 510, 1.5, 120, 96, 1), t.palm(160, 540, 1.2)),
      () => S("dawn", "valley", t.orb(760, 400, 1.1, "rise"), p.house(420, 510, 1.5, 120, 96, 1, 1), t.birds(300, 150, 0.8), t.palm(160, 540, 1.2)),
      () => S("", "valley", t.kaaba(500, 500, 1.4), t.birds(250, 140, 0.8), t.palm(120, 540, 1.1), t.palm(900, 545, 1.2)),
      () => S("night", "valley", t.name(500, 300, 1, "محمد"), t.stars(500, 90, 1), p.house(180, 500, 1, 110, 90, 1, 1), p.kaaba(840, 490, 0.7)),
      () => S("", "valley", t.orb(170, 110, 1), t.kaaba(520, 500, 1.2), town(820, 470), t.palm(110, 540, 1.1), t.cloud(600, 130, 1))
    ],
    halimah: [
      () => S("", "dunes", t.orb(840, 100, 1), t.tent(250, 500, 1), p.tent(520, 470, 0.6), t.camel(720, 540, 0.9), t.palm(930, 520, 1)),
      () => S("", "dunes", t.donkey(330, 545, 1.5, "plod", 1), t.camel(730, 540, 0.9), p.kaaba(120, 440, 0.45), t.cloud(500, 120, 1)),
      () => S("", "dunes", t.donkey(330, 545, 1.5, "trot"), t.camel(730, 540, 0.9), t.palm(930, 520, 1), t.orb(150, 100, 0.9)),
      () => S("dusk", "dunes", p.tent(200, 490, 0.9), t.goat(430, 550, 1.3), t.goat(640, 535, 1.1), t.grass(820, 560, 1), t.orb(850, 150, 0.9)),
      () => S("night", "dunes", t.tent(280, 510, 1.1), t.stars(520, 110, 1.2), t.orb(860, 110, 0.8), p.sheep(640, 550, 1), t.palm(900, 530, 1))
    ],
    family: [
      () => S("", "valley", t.house(400, 510, 1.5, 120, 96, 1), p.kaaba(820, 470, 0.6), t.palm(160, 540, 1.2), t.orb(840, 100, 0.9)),
      () => S("dusk", "dunes", t.camel(420, 545, 1.1), t.palm(820, 520, 1.1), t.cloud(300, 120, 1), t.orb(800, 180, 0.9)),
      () => S("", "valley", p.kaaba(560, 480, 1.4), t.mat(330, 545, 1.3), t.palm(110, 540, 1.1), t.birds(760, 140, 0.7)),
      () => S("dusk", "valley", t.house(480, 520, 1.5, 200, 110, 3), p.house(160, 500, 1, 90, 70), t.palm(860, 540, 1.2), p.kaaba(880, 440, 0.4)),
      () => S("night", "valley", t.stars(480, 110, 1.2), t.orb(850, 110, 0.9), p.house(300, 510, 1.3, 120, 96, 1, 1), p.kaaba(760, 490, 0.8), t.palm(110, 540, 1.1))
    ],
    shepherd: [
      () => S("", "hills", t.orb(840, 100, 1), town(180, 440), t.sheep(450, 555, 1.4), t.sheep(700, 540, 1.1)),
      () => S("", "hills", t.sheep(260, 550, 1.3), p.sheep(430, 560, 1.2), t.sheep(830, 470, 0.9, "wander"), t.cloud(500, 120, 1)),
      () => S("", "hills", t.sheep(300, 555, 1.4), t.sheep(560, 545, 1.2), t.palm(860, 520, 1.2), t.birds(450, 140, 0.7)),
      () => S("night", "hills", t.stars(480, 110, 1.3), t.orb(850, 110, 0.9), p.sheep(300, 560, 1.2), p.sheep(440, 570, 1.1), t.sheep(610, 560, 1.2)),
      () => S("dawn", "hills", t.orb(780, 380, 1.1, "rise"), t.sheep(330, 555, 1.4), t.sheep(560, 548, 1.2), t.palm(110, 530, 1.1))
    ],
    amin: [
      () => S("", "valley", t.orb(830, 100, 1), town(200, 470), t.house(560, 510, 1.3, 120, 96, 1), p.kaaba(850, 480, 0.7), t.palm(940, 545, 1)),
      () => S("", "valley", t.stall(280, 540, 1.2), t.scale(680, 545, 1.2), p.house(900, 480, 1, 84, 60)),
      () => S("night", "valley", t.name(500, 310, 1, "الأمين"), t.stars(500, 90, 1), p.kaaba(850, 490, 0.7), p.house(160, 500, 1, 100, 80, 1, 1)),
      () => S("", "valley", t.chest(480, 550, 1.7), p.house(180, 490, 1.1, 110, 90), t.lamp(760, 550, 1.2), t.palm(920, 545, 1)),
      () => S("dusk", "valley", t.hall(480, 530, 1.2), t.lamp(190, 550, 1.2), t.palm(860, 545, 1.2))
    ],
    syria: [
      () => S("", "valley", town(170, 460), t.camel(470, 550, 1, 1), t.camel(740, 545, 0.9, 1), t.orb(850, 100, 0.9)),
      () => S("night", "dunes", t.stars(450, 110, 1.2), t.camel(330, 550, 1, 1), p.tent(700, 500, 0.9), t.lamp(860, 550, 1.1)),
      () => S("", "valley", t.hall(600, 520, 1.2), t.camel(220, 550, 0.9, 1), t.palm(900, 540, 1.1)),
      () => S("", "valley", p.hall(680, 520, 1.1), t.cloud(360, 130, 1.2), t.palm(330, 545, 1.5), t.birds(700, 120, 0.6)),
      () => S("dusk", "dunes", t.camel(360, 550, 1.1), p.kaaba(880, 440, 0.5), t.palm(770, 500, 0.8), t.orb(160, 150, 0.9))
    ],
    khadijah: [
      () => S("", "valley", t.stall(300, 540, 1.2), t.house(700, 520, 1.4, 150, 110, 2), t.palm(930, 545, 1)),
      () => S("", "dunes", t.camel(300, 550, 1, 1), t.camel(600, 545, 0.9, 1), t.palm(880, 520, 1.1), t.orb(840, 100, 0.9)),
      () => S("", "valley", t.scale(480, 550, 1.4), p.stall(180, 520, 1), t.stall(820, 530, 1)),
      () => S("dusk", "valley", t.camel(300, 550, 1, 1), t.house(720, 520, 1.4, 150, 110, 2), t.palm(520, 540, 1)),
      () => S("night", "valley", t.house(480, 520, 1.5, 170, 110, 2), t.lamp(240, 550, 1.2), t.lamp(740, 550, 1.2), t.orb(850, 110, 0.8), t.stars(380, 100, 1))
    ],
    stone: [
      () => S("", "valley", t.wall(500, 520, 1.7, 2), t.palm(120, 540, 1.1), town(840, 470), t.orb(160, 100, 0.9)),
      () => S("", "valley", p.wall(480, 520, 1.7, 6), t.bstone(760, 560, 1.4), t.palm(120, 540, 1.1)),
      () => S("", "valley", t.gate(500, 540, 1.4), p.wall(140, 500, 0.9, 6), t.palm(880, 545, 1.2)),
      () => S("dawn", "valley", t.gate(500, 540, 1.4), t.birds(220, 130, 0.7), t.palm(880, 545, 1.2), t.orb(830, 330, 0.9, "rise")),
      () => S("", "valley", p.wall(790, 500, 1.3, 6), t.cloth(420, 560, 1.4), t.palm(110, 530, 1))
    ],
    hira: [
      () => S("", "valley", t.orb(830, 100, 1), town(200, 470), t.kaaba(540, 500, 1.1), t.palm(920, 545, 1.1)),
      () => S("", "mount", t.cave(585, 250, 0.55, "pulse"), t.cloud(200, 130, 1), t.palm(120, 550, 1.1)),
      () => S("night", "mount", p.cave(585, 250, 0.55), t.basket(250, 570, 1.3), t.lamp(420, 570, 1.2), t.orb(140, 110, 0.8)),
      () => S("night", "mount", p.cave(585, 250, 0.55), t.stars(250, 120, 1.1), t.orb(860, 110, 0.9), t.palm(120, 550, 1.1)),
      () => S("dawn", "mount", p.cave(585, 250, 0.55), t.orb(160, 400, 1.1, "rise"), t.birds(260, 150, 0.7))
    ],
    read: [
      () => S("night", "mount", t.cave(585, 250, 0.7), t.stars(230, 120, 1), t.orb(880, 100, 0.7)),
      () => S("night", "mount", p.cave(585, 250, 0.7, 1), t.stars(230, 120, 1), t.star(820, 120, 0.7)),
      () => S("night", "mount", p.cave(585, 250, 0.5, 1), t.name(330, 330, 0.9, "اقْرَأْ"), t.stars(800, 100, 0.8)),
      () => S("night", "valley", t.house(450, 520, 1.6, 130, 100, 1), t.lamp(720, 555, 1.2), t.stars(300, 100, 1), p.kaaba(880, 470, 0.5)),
      () => S("dawn", "valley", p.house(330, 520, 1.5, 130, 100, 1, 1), t.orb(760, 380, 1.1, "rise"), t.kaaba(820, 500, 0.8), t.palm(110, 540, 1.1))
    ],
    first: [
      () => S("night", "valley", t.house(500, 520, 1.6, 130, 100, 1), t.stars(300, 100, 1), p.kaaba(860, 480, 0.6)),
      () => S("night", "valley", p.house(250, 510, 1.2, 130, 100, 1, 1), t.lamp(520, 555, 1.4), t.stars(700, 100, 1)),
      () => S("night", "valley", p.house(180, 500, 1.1, 120, 96, 1, 1), t.lamp(420, 555, 1.3), t.lamp(640, 555, 1.3), t.stars(760, 100, 0.9)),
      () => S("night", "valley", p.house(140, 490, 1, 110, 90, 1, 1), t.house(400, 515, 1.2, 120, 96, 1), t.house(650, 510, 1.1, 110, 90, 1), t.house(870, 500, 1, 100, 84, 1)),
      () => S("night", "valley", t.house(120, 500, 0.9, 110, 90, 1), t.house(300, 525, 1.1, 120, 96, 2), t.house(520, 510, 1, 110, 90, 1), t.house(710, 528, 1.1, 130, 96, 2), t.house(900, 505, 0.9, 100, 84, 1), t.stars(500, 90, 1.2))
    ]
  };

  SN.homeScene = () => S("night", "dunes", p.palm(70, 600, 1.3), p.palm(945, 590, 1.1), p.tent(880, 470, 0.45), p.kaaba(120, 470, 0.4)).svg;

  /* When, during the voice-over, each thing in a picture plays by itself (0 = start, 1 = end).
     One entry per picture. Anything not listed is spread evenly through the telling. */
  SN.cues = {
    elephant: [{ orb: 0.08, kaaba: 0.3, palm: 0.6 }, { orb: 0.1, palm: 0.3, cloud: 0.6 }, { orb: 0.15, palm: 0.5 }, { palm: 0.4 }, { birds: 0.05, palm: 0.6 }, { house: 0.75, palm: 0.3 }],
    birth: [{ house: 0.75, orb: 0.1 }, { orb: 0.15, birds: 0.6 }, { birds: 0.15, kaaba: 0.6 }, { stars: 0.15, name: 0.5 }, { kaaba: 0.3, orb: 0.75 }],
    halimah: [{ tent: 0.3, camel: 0.7 }, { donkey: 0.3, camel: 0.5 }, { camel: 0.3, donkey: 0.55 }, { goat: 0.5, grass: 0.8 }, { stars: 0.5, tent: 0.8 }],
    family: [{ house: 0.6 }, { camel: 0.3, cloud: 0.7 }, { mat: 0.55, birds: 0.2 }, { house: 0.6 }, { stars: 0.3, orb: 0.6 }],
    shepherd: [{ sheep: 0.6 }, { sheep: 0.45 }, { sheep: 0.3 }, { stars: 0.5, sheep: 0.2 }, { orb: 0.2, sheep: 0.6 }],
    amin: [{ house: 0.5 }, { stall: 0.2, scale: 0.6 }, { stars: 0.2, name: 0.55 }, { chest: 0.45, lamp: 0.8 }, { door: 0.7, lamp: 0.3 }],
    syria: [{ camel: 0.5 }, { camel: 0.2, stars: 0.75, lamp: 0.6 }, { camel: 0.15, door: 0.8 }, { cloud: 0.3, palm: 0.6 }, { camel: 0.25 }],
    khadijah: [{ stall: 0.5, house: 0.2 }, { camel: 0.5 }, { scale: 0.25, stall: 0.7 }, { camel: 0.15, house: 0.5 }, { house: 0.4, lamp: 0.65 }],
    stone: [{ wall: 0.55 }, { stone: 0.55 }, { gate: 0.7 }, { orb: 0.05, gate: 0.2 }, { cloth: 0.5 }],
    hira: [{ kaaba: 0.6 }, { cave: 0.7, cloud: 0.2 }, { basket: 0.2, lamp: 0.45 }, { stars: 0.4, orb: 0.7 }, { orb: 0.2, birds: 0.6 }],
    read: [{ stars: 0.2, cave: 0.7 }, { stars: 0.5, star: 0.75 }, { name: 0.45, stars: 0.8 }, { house: 0.75, lamp: 0.85 }, { orb: 0.6, kaaba: 0.85 }],
    first: [{ house: 0.75 }, { lamp: 0.4 }, { lamp: 0.25 }, { house: 0.35 }, { house: 0.25, stars: 0.85 }]
  };

  /* What each tappable thing is called, for the "can you find..." prompt. */
  SN.names = {
    kaaba: ["the Ka'bah", "کعبہ"], palm: ["the palm tree", "کھجور کا درخت"], house: ["the house", "گھر"], elephant: ["the elephant", "ہاتھی"],
    birds: ["the birds", "پرندے"], camel: ["the camel", "اونٹ"], donkey: ["the donkey", "گدھا"], sheep: ["the sheep", "بھیڑ"], goat: ["the goat", "بکری"],
    tent: ["the tent", "خیمہ"], orb: ["the light in the sky", "آسمان کی روشنی"], star: ["the big star", "بڑا ستارہ"], stars: ["the stars", "ستارے"],
    cloud: ["the cloud", "بادل"], lamp: ["the lamp", "چراغ"], cave: ["the cave", "غار"], stall: ["the market stall", "دکان"], scale: ["the scales", "ترازو"],
    chest: ["the box", "صندوق"], cloth: ["the cloth", "چادر"], stone: ["the Black Stone", "حجرِ اسود"], mat: ["the mat", "بچھونا"], basket: ["the basket", "ٹوکری"],
    starname: ["the star", "ستارہ"], dust: ["the dust", "گرد"], shadow: ["the big shape", "بڑی سی چیز"], specks: ["the dots in the sky", "آسمان کے نقطے"],
    grass: ["the grass", "گھاس"], wall: ["the wall", "دیوار"], gate: ["the gate", "دروازہ"], door: ["the door", "دروازہ"], name: ["the shining name", "چمکتا ہوا نام"]
  };
  SN.findPrompt = (name, lang) => {
    const n = SN.names[name]; if (!n) return "";
    return lang === "ur" ? `${n[1]} کہاں ہے؟ اسے چھو کر دیکھو!` : `Can you find ${n[0]}? Give it a tap!`;
  };

  /* ---------- small pictures for the story path ---------- */
  SN.icons = {
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
