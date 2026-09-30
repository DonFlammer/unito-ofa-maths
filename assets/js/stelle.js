// Polvere di stelle sullo sfondo: deriva lenta, scintillio, le stelle si scostano dal mouse e vicino al puntatore
// si accendono e si collegano; un clic manda un'onda leggera. Dietro le colonne di testo le stelle si attenuano.
// Si ferma solo con l'interruttore «Animazioni ridotte» del sito (classe meno-moto su <html>).
(() => {
  const tela = document.getElementById('stelle');
  if (!tela) return;
  const ctx = tela.getContext('2d', { alpha: false });
  const fermo = () => document.documentElement.classList.contains('meno-moto');

  let L = 0, A = 0, dpr = 1, stelle = [], onde = [], fasce = [];
  let px = -1e4, py = -1e4, tx = -1e4, ty = -1e4, dentro = false, vicinanza = 0;
  let ultimoScroll = window.scrollY, prima = performance.now(), anim = 0;

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

  // colonne di testo (appunti, regole): lì le stelle restano più tenui per non disturbare la lettura
  function misuraFasce() {
    fasce = Array.from(document.querySelectorAll('.testo')).map(e => { const r = e.getBoundingClientRect(); return [r.left - 28, r.right + 28]; }).filter(([a, b]) => b - a > 200);
  }
  const attenua = x => { for (const [a, b] of fasce) if (x > a && x < b) return 0.32; return 1; };

  function dimensiona() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    L = window.innerWidth; A = window.innerHeight;
    tela.width = Math.round(L * dpr); tela.height = Math.round(A * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(600, Math.max(170, (L * A) / 4200)));
    if (stelle.length > n) stelle.length = n;
    while (stelle.length < n) stelle.push(nuova());
    for (const s of stelle) { if (s.x > L) s.x = Math.random() * L; if (s.y > A) s.y = Math.random() * A; }
    misuraFasce();
    if (fermo()) vuoto();
  }
  // animazioni ridotte: solo lo sfondo nero, senza stelle
  function vuoto() { ctx.globalAlpha = 1; ctx.fillStyle = '#000'; ctx.fillRect(0, 0, L, A); }

  function disegna(dt, dScroll) {
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, L, A);

    px += (tx - px) * 0.16; py += (ty - py) * 0.16;
    vicinanza += ((dentro ? 1 : 0) - vicinanza) * 0.06;

    if (vicinanza > 0.01) {                               // leggero alone rosso attorno al puntatore
      const g = ctx.createRadialGradient(px, py, 0, px, py, 240);
      g.addColorStop(0, `rgba(215,38,63,${0.07 * vicinanza})`);
      g.addColorStop(1, 'rgba(215,38,63,0)');
      ctx.fillStyle = g;
      ctx.fillRect(px - 240, py - 240, 480, 480);
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
    const dt = Math.min(48, ora - prima); prima = ora;
    const sy = window.scrollY, dScroll = sy - ultimoScroll; ultimoScroll = sy;
    disegna(dt, Math.max(-60, Math.min(60, dScroll)));
    anim = requestAnimationFrame(ciclo);
  }
  function avvia() { cancelAnimationFrame(anim); if (fermo()) { vuoto(); return; } if (document.hidden) { disegna(0, 0); return; } prima = performance.now(); anim = requestAnimationFrame(ciclo); }

  window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; if (!dentro) { px = tx; py = ty; } dentro = true; }, { passive: true });
  window.addEventListener('pointerdown', e => { if (!fermo()) onde.push({ x: e.clientX, y: e.clientY, r: 0, forza: 1 }); if (onde.length > 3) onde.shift(); }, { passive: true });
  document.addEventListener('pointerleave', () => { dentro = false; });
  window.addEventListener('blur', () => { dentro = false; });
  let timer = 0;
  window.addEventListener('resize', () => { clearTimeout(timer); timer = setTimeout(dimensiona, 120); });
  window.addEventListener('load', misuraFasce);
  document.addEventListener('visibilitychange', avvia);
  document.addEventListener('ofa:moto', avvia);
  dimensiona();
  avvia();
})();
