// Polvere di stelle sullo sfondo: deriva lenta, scintillio, le stelle si scostano dal mouse e vicino al puntatore
// si accendono e si collegano; un clic manda un'onda leggera. Dietro le colonne di testo le stelle si attenuano.
// Cambiando pagina il cielo (stelle, onde, puntatore) passa alla pagina nuova attraverso la sessionStorage della scheda:
// continua da dove era invece di ripartire da capo.
// Si ferma solo con l'interruttore «Animazioni ridotte» del sito (classe meno-moto su <html>).
// Lo script sta subito dopo il canvas, non in fondo: le stelle ci sono già nel primo fotogramma anche nelle pagine lunghe.
(() => {
  const html = document.documentElement;
  // arrivo da un'altra pagina con la dissolvenza (view transition): html.arrivo dice a CSS e sito.js di saltare le entrate
  window.addEventListener('pagereveal', e => { if (e.viewTransition) html.classList.add('arrivo'); });
  const tela = document.getElementById('stelle');
  if (!tela) return;
  const ctx = tela.getContext('2d', { alpha: false });
  const fermo = () => html.classList.contains('meno-moto');
  const STATO = 'sfondo:stelle';                       // chiave dello stato passato da una pagina all'altra

  let L = 0, A = 0, dpr = 1, stelle = [], onde = [], fasce = [], fasceVere = false, conta = 0;
  let px = -1e4, py = -1e4, tx = -1e4, ty = -1e4, dentro = false, vicinanza = 0, tipo = '';
  let ultimoScroll = window.scrollY, prima = performance.now(), anim = 0, salvatoAlle = 0, tornata = false;

  function nuova() {
    const z = Math.pow(Math.random(), 1.8);            // profondità: tante lontane, poche vicine
    return {
      x: Math.random() * L, y: Math.random() * A, z,
      r: 0.4 + z * 1.3 + (Math.random() < 0.04 ? 0.8 : 0),
      a: 0.3 + z * 0.62,
      fase: Math.random() * 6.283, vel: 0.5 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.018 * (0.35 + z), vy: (Math.random() - 0.5) * 0.018 * (0.35 + z) - 0.006,
      ox: 0, oy: 0, ux: 0, uy: 0,
    };
  }

  // colonne di testo (appunti, regole): lì le stelle restano più tenui per non disturbare la lettura.
  // Finché la pagina si carica e le colonne non ci sono ancora valgono quelle della pagina precedente (fasceVere = false).
  function misuraFasce() {
    const trovate = Array.from(document.querySelectorAll('.testo')).map(e => { const r = e.getBoundingClientRect(); return [r.left - 28, r.right + 28]; }).filter(([a, b]) => b - a > 200);
    if (trovate.length || document.readyState !== 'loading') { fasce = trovate; fasceVere = true; }
  }
  const attenua = x => { for (const [a, b] of fasce) if (x > a && x < b) return 0.32; return 1; };
  const quante = () => Math.round(Math.min(600, Math.max(170, (L * A) / 4200)));

  function dimensiona() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    L = window.innerWidth; A = window.innerHeight;
    tela.width = Math.round(L * dpr); tela.height = Math.round(A * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = quante();
    if (stelle.length > n) stelle.length = n;
    while (stelle.length < n) stelle.push(nuova());
    for (const s of stelle) { if (s.x > L) s.x = Math.random() * L; if (s.y > A) s.y = Math.random() * A; }
    misuraFasce();
    if (fermo()) vuoto();
  }
  // animazioni ridotte: solo lo sfondo nero, senza stelle
  function vuoto() { ctx.globalAlpha = 1; ctx.fillStyle = '#000'; ctx.fillRect(0, 0, L, A); }

  // Alone del puntatore, disegnato una volta sola in un'immagine con un leggero rumore (dithering). Il profilo è quello
  // di sempre (0.07 al centro, in linea retta fino a zero a 240 px) fino a 170 px, poi si spegne del tutto entro 200 px.
  // La coda tagliata sta sotto il 2% di luminosità: su un OLED con le impostazioni normali si confonde col nero, ma sugli
  // schermi che schiariscono i neri (luminosità o gamma alzate nel driver della scheda video, molti LCD) diventava visibile
  // e l'alone sembrava più grande e fatto ad anelli. Così resta dappertutto come su un OLED.
  const ALONE = 200;
  let aloneImg = null;
  function preparaAlone(colore) {
    const lato = ALONE * 2, c = document.createElement('canvas');
    c.width = c.height = lato;
    const g = c.getContext('2d'), img = g.createImageData(lato, lato), d = img.data, [r0, g0, b0] = colore.split(',').map(Number);
    for (let y = 0; y < lato; y++) for (let x = 0; x < lato; x++) {
      const r = Math.hypot(x + 0.5 - ALONE, y + 0.5 - ALONE);
      if (r >= ALONE) continue;
      const t = Math.max(0, (r - 170) / 30), a = 0.07 * (1 - r / 240) * (1 - t * t * (3 - 2 * t));
      const i = (y * lato + x) * 4;
      d[i] = r0; d[i + 1] = g0; d[i + 2] = b0;
      d[i + 3] = Math.max(0, Math.round(a * 255 + (Math.random() - 0.5) * 2));   // ±1 livello a caso: niente anelli
    }
    g.putImageData(img, 0, 0);
    return c;
  }

  function disegna(dt, dScroll) {
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, L, A);

    px += (tx - px) * 0.16; py += (ty - py) * 0.16;
    vicinanza += ((dentro ? 1 : 0) - vicinanza) * 0.06;

    if (vicinanza > 0.01) {                               // leggero alone rosso attorno al puntatore
      if (!aloneImg) aloneImg = preparaAlone('215, 38, 63');
      ctx.globalAlpha = vicinanza;
      ctx.drawImage(aloneImg, px - ALONE, py - ALONE, ALONE * 2, ALONE * 2);
      ctx.globalAlpha = 1;
    }

    const R = 150, R2 = R * R, vicine = [];
    for (const s of stelle) {
      if (dt) {
        s.x += s.vx * dt; s.y += s.vy * dt - dScroll * (0.06 + s.z * 0.26);
        if (s.x < -10) s.x += L + 20; else if (s.x > L + 10) s.x -= L + 20;
        if (s.y < -10) s.y += A + 20; else if (s.y > A + 10) s.y -= A + 20;
      }
      const dx = s.x + s.ox - px, dy = s.y + s.oy - py, d2 = dx * dx + dy * dy;
      let luce = 0;
      if (dt && vicinanza > 0.05 && d2 < R2 && d2 > 0.5) {
        const d = Math.sqrt(d2), f = (1 - d / R) * (1 - d / R) * 1.4 * (0.35 + s.z) * vicinanza;
        s.ux += (dx / d) * f; s.uy += (dy / d) * f;
        luce = (1 - d / R) * vicinanza;
      }
      for (const o of onde) {                              // onda del clic
        const ex = s.x + s.ox - o.x, ey = s.y + s.oy - o.y, e = Math.sqrt(ex * ex + ey * ey) || 1;
        const diff = Math.abs(e - o.r);
        if (diff < 36) { const f = (1 - diff / 36) * 1.6 * o.forza * (0.4 + s.z); s.ux += (ex / e) * f; s.uy += (ey / e) * f; luce = Math.max(luce, (1 - diff / 36) * o.forza * 0.8); }
      }
      if (dt) {
        s.ux -= s.ox * 0.018; s.uy -= s.oy * 0.018;         // molla: torna al suo posto
        s.ux *= 0.87; s.uy *= 0.87;
        s.ox += s.ux; s.oy += s.uy;
        s.fase += s.vel * dt * 0.001;
      }
      const x = s.x + s.ox, y = s.y + s.oy;
      const brillio = 0.7 + 0.3 * Math.sin(s.fase);
      ctx.globalAlpha = Math.min(1, (s.a * brillio + luce * 0.55) * (fasce.length ? attenua(x) : 1));
      ctx.fillStyle = '#fbfaf6';
      const r = s.r * (1 + luce * 0.6);
      if (r < 0.9) ctx.fillRect(x - r, y - r, r * 2, r * 2);
      else { ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill(); }
      if (luce > 0.3 && vicine.length < 45) vicine.push(x, y, luce);
    }

    if (vicine.length > 5) {                               // costellazione attorno al puntatore
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = '#fbfaf6';
      for (let i = 0; i < vicine.length; i += 3) {
        for (let j = i + 3; j < vicine.length; j += 3) {
          const dx = vicine[i] - vicine[j], dy = vicine[i + 1] - vicine[j + 1], d2 = dx * dx + dy * dy;
          if (d2 < 6400) {
            ctx.globalAlpha = (1 - d2 / 6400) * Math.min(vicine[i + 2], vicine[j + 2]) * 0.4;
            ctx.beginPath(); ctx.moveTo(vicine[i], vicine[i + 1]); ctx.lineTo(vicine[j], vicine[j + 1]); ctx.stroke();
          }
        }
      }
    }

    for (let k = onde.length - 1; k >= 0; k--) {
      const o = onde[k];
      if (dt) { o.r += dt * 0.5; o.forza *= Math.pow(0.9955, dt); }
      ctx.globalAlpha = Math.max(0, o.forza) * 0.18;
      ctx.strokeStyle = '#fbfaf6';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, 6.2832); ctx.stroke();
      if (o.forza < 0.03 || o.r > Math.max(L, A)) onde.splice(k, 1);
    }
    ctx.globalAlpha = 1;
  }

  function ciclo(ora) {
    if (fermo()) { vuoto(); anim = 0; return; }   // animazioni ridotte scelte mentre la pagina si caricava
    if (!fasceVere && ++conta % 8 === 0) misuraFasce();
    const dt = Math.max(0, Math.min(48, ora - prima)); prima = ora;
    const sy = window.scrollY, dScroll = sy - ultimoScroll; ultimoScroll = sy;
    disegna(dt, Math.max(-60, Math.min(60, dScroll)));
    anim = requestAnimationFrame(ciclo);
  }
  function avvia() {
    cancelAnimationFrame(anim);
    if (fermo()) { vuoto(); return; }
    disegna(0, 0);                                   // subito lo stato attuale, senza aspettare il primo fotogramma
    if (document.hidden) return;
    prima = performance.now(); anim = requestAnimationFrame(ciclo);
  }

  /* ---------- passaggio da una pagina all'altra ---------- */
  // Lo stato lo scrive solo questo script, ma la sessionStorage è di tutta l'origine: ogni valore letto è controllato
  // (numeri finiti, dentro limiti ragionevoli) e le liste hanno un tetto; se qualcosa non torna si riparte da capo.
  const num = (v, a, b) => typeof v === 'number' && Number.isFinite(v) && v >= a && v <= b;
  const tondo = (v, k) => Math.round(v * k) / k;
  function salvaStato() {
    if (fermo() || !L) return;
    const stato = {
      v: 1, t: Date.now(), L, A,
      p: dentro && tipo !== 'touch' ? [tondo(px, 10), tondo(py, 10), tondo(vicinanza, 1e3)] : null,
      f: fasce.slice(0, 6).map(([a, b]) => [tondo(a, 10), tondo(b, 10)]),
      s: stelle.flatMap(s => [tondo(s.x, 10), tondo(s.y, 10), tondo(s.z, 1e4), tondo(s.r, 1e3), tondo(s.a, 1e3), tondo(s.fase % (Math.PI * 2), 1e3),
        tondo(s.vel, 1e3), tondo(s.vx, 1e5), tondo(s.vy, 1e5), tondo(s.ox, 100), tondo(s.oy, 100), tondo(s.ux, 1e3), tondo(s.uy, 1e3)]),
      o: onde.map(o => [tondo(o.x, 10), tondo(o.y, 10), tondo(o.r, 10), tondo(o.forza, 1e4)]),
    };
    salvatoAlle = stato.t;
    try { sessionStorage.setItem(STATO, JSON.stringify(stato)); } catch { /* memoria della scheda non disponibile */ }
  }
  function riprendi(dopo = 0) {   // dopo: si accetta solo uno stato più recente di questo istante
    let s = null;
    try { s = JSON.parse(sessionStorage.getItem(STATO)); } catch { return false; }
    const eta = s ? Date.now() - s.t : NaN;
    if (!s || s.v !== 1 || !num(s.t, dopo + 1, 1e14) || !num(eta, 0, 5000) || !num(s.L, 1, 1e5) || !num(s.A, 1, 1e5) || !Array.isArray(s.s) || !s.s.length
      || s.s.length % 13 || s.s.length > 13 * 600 || !Array.isArray(s.o) || s.o.length > 3) return false;
    const kx = L / s.L, ky = A / s.A, cielo = [], nuoveOnde = [];
    for (let i = 0; i < s.s.length; i += 13) {
      const [x, y, z, r, a, fase, vel, vx, vy, ox, oy, ux, uy] = s.s.slice(i, i + 13);
      if (!num(x, -20, s.L + 20) || !num(y, -20, s.A + 20) || !num(z, 0, 1) || !num(r, 0, 3) || !num(a, 0, 1) || !num(fase, -7, 7) || !num(vel, 0, 3)
        || !num(vx, -0.05, 0.05) || !num(vy, -0.05, 0.05) || !num(ox, -300, 300) || !num(oy, -300, 300) || !num(ux, -100, 100) || !num(uy, -100, 100)) return false;
      cielo.push({ x: x * kx, y: y * ky, z, r, a, fase, vel, vx, vy, ox, oy, ux, uy });
    }
    for (const o of s.o) {
      if (!Array.isArray(o) || o.length !== 4 || !num(o[0], -50, s.L + 50) || !num(o[1], -50, s.A + 50) || !num(o[2], 0, 1e5) || !num(o[3], 0, 1)) return false;
      nuoveOnde.push({ x: o[0] * kx, y: o[1] * ky, r: o[2], forza: o[3] });
    }
    const n = quante();
    if (cielo.length > n) cielo.length = n;
    while (cielo.length < n) cielo.push(nuova());
    stelle = cielo; onde = nuoveOnde;
    if (Array.isArray(s.p) && s.p.length === 3 && num(s.p[0], -50, s.L + 50) && num(s.p[1], -50, s.A + 50) && num(s.p[2], 0, 1)) {
      px = tx = s.p[0] * kx; py = ty = s.p[1] * ky; vicinanza = s.p[2]; dentro = true; tipo = 'mouse';
    }
    if (!fasceVere && Array.isArray(s.f) && s.f.length <= 6 && s.f.every(q => Array.isArray(q) && q.length === 2 && num(q[0], -1e4, 1e5) && num(q[1], -1e4, 1e5))) {
      fasce = s.f.map(([a, b]) => [a * kx, b * kx]);
    }
    // avanti di quanto è durato il cambio di pagina (al massimo un secondo): la deriva continua senza salti
    const el = Math.min(1000, eta);
    for (const q of stelle) {
      q.x += q.vx * el; q.y += q.vy * el; q.fase += q.vel * el * 0.001;
      if (q.x < -10) q.x += L + 20; else if (q.x > L + 10) q.x -= L + 20;
      if (q.y < -10) q.y += A + 20; else if (q.y > A + 10) q.y -= A + 20;
    }
    for (const o of onde) { o.r += el * 0.5; o.forza *= Math.pow(0.9955, el); }
    return true;
  }

  window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; tipo = e.pointerType; if (!dentro) { px = tx; py = ty; } dentro = true; }, { passive: true });
  window.addEventListener('pointerdown', e => { if (!fermo()) onde.push({ x: e.clientX, y: e.clientY, r: 0, forza: 1 }); if (onde.length > 3) onde.shift(); }, { passive: true });
  document.addEventListener('pointerleave', () => { dentro = false; });
  window.addEventListener('blur', () => { dentro = false; });
  let timer = 0;
  window.addEventListener('resize', () => { clearTimeout(timer); timer = setTimeout(dimensiona, 120); });
  document.addEventListener('DOMContentLoaded', misuraFasce);
  window.addEventListener('load', misuraFasce);
  document.addEventListener('visibilitychange', avvia);
  document.addEventListener('ofa:moto', avvia);
  window.addEventListener('pagehide', salvaStato);
  // con Indietro/Avanti la pagina torna dalla cache del browser: lo stato della pagina appena lasciata diventa leggibile
  // solo al primo fotogramma, quindi si riprende a «pagereveal» (se il browser non lo conosce, subito)
  window.addEventListener('pageshow', e => { if (!e.persisted) return; if ('onpagereveal' in window) tornata = true; else if (riprendi(salvatoAlle)) avvia(); });
  // un link con àncora fa scorrere la pagina nuova mentre si apre: quello scorrimento non deve spostare le stelle
  window.addEventListener('pagereveal', () => { ultimoScroll = window.scrollY; if (tornata) { tornata = false; if (riprendi(salvatoAlle)) avvia(); } });
  dimensiona();
  riprendi();
  avvia();
})();
