// Polvere di stelle sullo sfondo: deriva lenta, scintillio, un alone rosso attorno al puntatore, le stelle si scostano
// dal mouse e vicino al puntatore si accendono e si collegano; un clic manda un'onda leggera. Dietro le colonne di testo
// le stelle si attenuano.
// Cambiando pagina il cielo (stelle, onde, puntatore) passa alla pagina nuova attraverso la sessionStorage della scheda:
// continua da dove era invece di ripartire da capo.
// Si ferma con l'interruttore «Animazioni ridotte» del sito (classe meno-moto su <html>), con la scheda nascosta e con la
// finestra in secondo piano; riparte da dove era quando la finestra torna attiva.
// Lo script sta subito dopo il canvas, non in fondo: le stelle ci sono già nel primo fotogramma anche nelle pagine lunghe.
//
// Consumi. Ogni fotogramma costa al computer quasi lo stesso, che cambi un puntino o tutto lo schermo: conta soprattutto
// quanti fotogrammi si disegnano al secondo, non quanto è grande il disegno. Per questo il cielo non segue lo schermo
// (60, 120 o 144 volte al secondo) ma va a ritmi suoi:
// - a riposo, quando ci sono solo la deriva (pochi pixel al secondo) e lo scintillio, RITMO_CALMO volte al secondo;
// - mentre il puntatore si muove, durante un'onda e finché le stelle scostate non tornano ferme, RITMO_VIVO.
// Il cielo non si sposta con lo scorrimento della pagina (dal 01/10/2026; prima le stelle scorrevano un poco, le più
// vicine di più). La pagina scorre nel compositore a ogni aggiornamento dello schermo, il cielo si disegnava al massimo
// 60 volte al secondo: sugli schermi a 120 o 144 Hz le stelle in movimento sembravano sdoppiarsi. Fermo, mentre la
// pagina scorre non ha bisogno di nulla.
// La spinta del puntatore, la molla che riporta le stelle al loro posto e le onde avanzano a passi fissi di 1/60 di
// secondo: il movimento è identico a ogni ritmo e su ogni schermo. Il canvas ha la risoluzione dei pixel CSS
// (devicePixelRatio 1): su uno schermo ad alta densità ingrandirlo costa poco e le stelle, puntini sfumati, restano uguali.
// Nessun oggetto nuovo a ogni fotogramma e nessuna lettura della disposizione della pagina mentre si disegna.
(() => {
  const html = document.documentElement;
  // arrivo da un'altra pagina con la dissolvenza (view transition): html.arrivo dice a CSS e sito.js di saltare le entrate
  window.addEventListener('pagereveal', e => { if (e.viewTransition) html.classList.add('arrivo'); });
  const tela = document.getElementById('stelle');
  if (!tela) return;
  const ctx = tela.getContext('2d', { alpha: false });
  const fermo = () => html.classList.contains('meno-moto');
  const STATO = 'sfondo:stelle';                       // chiave dello stato passato da una pagina all'altra
  // fotogrammi al secondo a riposo e con qualcosa in movimento; a riposo 30 come lo sfondo degli appunti (a 10 le stelle
  // più vicine e veloci si muovevano a scatti visibili)
  const RITMO_CALMO = 30, RITMO_VIVO = 30;
  const PASSO = 1000 / 60;                             // passo della fisica del puntatore e delle onde, in ms
  const R = 150, R2 = R * R;                           // raggio d'azione del puntatore

  let L = 0, A = 0, stelle = [], onde = [], fasce = [], fasceVere = false;
  let px = -1e4, py = -1e4, tx = -1e4, ty = -1e4, dentro = false, vicinanza = 0, tipo = '';
  let salvatoAlle = 0, tornata = false;
  // tempo: ultimo disegno, avanzo della fisica a passi fissi, ultimo movimento del puntatore
  let prima = 0, resto = 0, mossoAlle = -1e9, attivo = false;
  // prossimo fotogramma: timer o richiesta di fotogramma in attesa, e quando è previsto
  let timer = 0, richiesta = 0, previsto = 0;
  const vicine = new Float64Array(45);                 // stelle accese attorno al puntatore: x, y, luce (al massimo 15)

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
  // Si misurano una volta, a pagina analizzata (e a ogni ridimensionamento): finché la pagina si carica valgono quelle
  // della pagina precedente (fasceVere = false). Misurarle durante il caricamento costringerebbe il browser a ricalcolare
  // la disposizione di una pagina ancora a metà, e nelle pagine lunghe costa centinaia di millisecondi.
  function misuraFasce() {
    const trovate = Array.from(document.querySelectorAll('.testo')).map(e => { const r = e.getBoundingClientRect(); return [r.left - 28, r.right + 28]; }).filter(([a, b]) => b - a > 200);
    fasce = trovate; fasceVere = true;
  }
  const attenua = x => { for (let i = 0; i < fasce.length; i++) if (x > fasce[i][0] && x < fasce[i][1]) return 0.32; return 1; };
  const quante = () => Math.round(Math.min(600, Math.max(170, (L * A) / 4200)));

  function dimensiona() {
    L = window.innerWidth; A = window.innerHeight;
    tela.width = L; tela.height = A;                   // un pixel del canvas per pixel CSS
    const n = quante();
    if (stelle.length > n) stelle.length = n;
    while (stelle.length < n) stelle.push(nuova());
    for (const s of stelle) { if (s.x > L) s.x = Math.random() * L; if (s.y > A) s.y = Math.random() * A; }
  }
  // animazioni ridotte: solo lo sfondo nero, senza stelle
  function vuoto() { ctx.globalAlpha = 1; ctx.fillStyle = '#000'; ctx.fillRect(0, 0, L, A); }

  // deriva e scintillio: dipendono solo dal tempo, si calcolano in un colpo per tutto l'intervallo
  function deriva(dt) {
    for (const s of stelle) {
      s.x += s.vx * dt; s.y += s.vy * dt;
      if (s.x < -10) s.x += L + 20; else if (s.x > L + 10) s.x -= L + 20;
      if (s.y < -10) s.y += A + 20; else if (s.y > A + 10) s.y -= A + 20;
      s.fase += s.vel * dt * 0.001;
    }
  }

  // un passo di 1/60 di secondo di puntatore, spinte e molla (come un fotogramma a 60 Hz della versione di prima)
  function passo() {
    px += (tx - px) * 0.16; py += (ty - py) * 0.16;
    vicinanza += ((dentro ? 1 : 0) - vicinanza) * 0.06;
    const spinge = vicinanza > 0.05, conOnde = onde.length > 0;
    for (const s of stelle) {
      const qx = s.x + s.ox, qy = s.y + s.oy;
      const ferma = s.ox === 0 && s.oy === 0 && s.ux === 0 && s.uy === 0;
      if (ferma && !conOnde && (!spinge || Math.abs(qx - px) >= R || Math.abs(qy - py) >= R)) continue;   // niente da fare
      if (spinge) {
        const dx = qx - px, dy = qy - py, d2 = dx * dx + dy * dy;
        if (d2 < R2 && d2 > 0.5) {
          const d = Math.sqrt(d2), f = (1 - d / R) * (1 - d / R) * 1.4 * (0.35 + s.z) * vicinanza;
          s.ux += (dx / d) * f; s.uy += (dy / d) * f;
        }
      }
      for (const o of onde) {                              // onda del clic
        const ex = qx - o.x, ey = qy - o.y, e = Math.sqrt(ex * ex + ey * ey) || 1;
        const diff = Math.abs(e - o.r);
        if (diff < 36) { const f = (1 - diff / 36) * 1.6 * o.forza * (0.4 + s.z); s.ux += (ex / e) * f; s.uy += (ey / e) * f; }
      }
      s.ux -= s.ox * 0.018; s.uy -= s.oy * 0.018;         // molla: torna al suo posto
      s.ux *= 0.87; s.uy *= 0.87;
      s.ox += s.ux; s.oy += s.uy;
      // ferma del tutto: niente conti inutili nei passi seguenti
      if (Math.abs(s.ox) < 0.01 && Math.abs(s.oy) < 0.01 && Math.abs(s.ux) < 0.005 && Math.abs(s.uy) < 0.005) s.ox = s.oy = s.ux = s.uy = 0;
    }
    for (let k = onde.length - 1; k >= 0; k--) {
      const o = onde[k];
      o.r += PASSO * 0.5; o.forza *= Math.pow(0.9955, PASSO);
      if (o.forza < 0.03 || o.r > Math.max(L, A)) onde.splice(k, 1);
    }
  }

  /* ---------- alone del puntatore ---------- */
  // L'alone rosso di prima: 0.07 di opacità al centro, in linea retta fino a zero a 240 px, spento del tutto tra 170 e
  // 200 px; segue il puntatore con un leggero ritardo (px, py) e compare e sparisce piano (vicinanza). Perché si veda
  // uguale su OLED, IPS, HDR e con la luminosità alta:
  // - rumore senza scarto (dithering) contro gli anelli: ogni pixel prende il livello intero sotto o sopra il valore vero,
  //   con la probabilità giusta, e dove il valore è zero resta zero. Il rumore di prima (±1 livello a caso) accendeva
  //   anche un pixel su quattro di quelli che dovevano essere neri, fino al bordo dei 200 px: un disco grande con l'orlo
  //   netto, invisibile su un OLED e ben visibile sugli schermi che schiariscono i neri. Il rumore si applica al livello
  //   che si vedrà, poi si sceglie l'opacità che dà proprio quel livello: arrotondando i colori il browser darebbe lo
  //   stesso livello a due opacità vicine, e il passaggio fra l'una e l'altra resterebbe piatto, a bande;
  // - la coda più tenue, sotto i 3 livelli su 255, che su molti OLED non si vede, sfuma fino a zero in 30 px: sugli schermi
  //   che schiariscono i quasi neri (curva sRGB, HDR, luminosità alta) allargava l'alone. La sfumatura va sulla distanza,
  //   non sul livello: anche dove l'alone scende ripido il bordo resta morbido;
  // - con Windows in HDR il browser trasforma i colori con la curva sRGB, che schiarisce molto i quasi neri rispetto alla
  //   gamma 2.2 di uno schermo normale (3/255 escono circa 15 volte più luminosi): in HDR i livelli si riscrivono perché
  //   la luce emessa sia quella di uno schermo normale.
  // L'immagine si prepara una volta, appena finito il primo fotogramma in cui serve (qualche millesimo di secondo: il primo
  // fotogramma di una pagina non deve aspettarla), e si copia a pixel interi, senza ricampionarla.
  const ALONE = 200, ROSSO = [215, 38, 63];
  const hdr = window.matchMedia ? window.matchMedia('(dynamic-range: high)') : null;
  const dopo = window.requestIdleCallback ? f => requestIdleCallback(f, { timeout: 150 }) : f => setTimeout(f, 30);
  let alone = null, aloneInAttesa = false;
  function preparaAlone() {
    const luce22 = v => Math.pow(v / 255, 2.2);
    const livelloSrgb = y => 255 * (y <= 0.0031308 ? 12.92 * y : 1.055 * Math.pow(y, 1 / 2.4) - 0.055);
    const inHdr = !!(hdr && hdr.matches), picco = Math.max(...ROSSO);   // sul nero si vede il canale più acceso
    const liscio = t => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));
    const prima = r => (r >= ALONE ? 0 : 0.07 * picco * (1 - r / 240) * (1 - liscio((r - 170) / 30)));   // livello su uno schermo normale
    let r3 = 0;                                                         // dove scende sotto i 3 livelli
    while (r3 < ALONE && prima(r3) >= 3) r3 += 0.25;
    // raggio dell'immagine (oltre, tutto spento) e livello da mostrare per distanza al quadrato
    const m = Math.ceil(Math.min(ALONE, r3 + 15)), m2 = m * m, lato = 2 * m + 1, quadro = new Float32Array(m2 + 1);
    for (let q = 0; q <= m2; q++) {
      const r = Math.sqrt(q), w = prima(r) * (1 - liscio((r - r3 + 15) / 30));
      quadro[q] = w > 0 ? (inHdr ? livelloSrgb(luce22(w)) : w) : 0;
    }
    const tela = document.createElement('canvas');
    tela.width = tela.height = lato;
    const g = tela.getContext('2d'), img = g.createImageData(lato, lato), d = img.data, opacita = 255 / picco;
    for (let dy = -m; dy <= m; dy++) {
      const w = Math.floor(Math.sqrt(m2 - dy * dy)), ay = 0.00583715 * (dy + 4096);
      for (let dx = -w, i = ((dy + m) * lato + m - w) * 4; dx <= w; dx++, i += 4) {
        const v = quadro[dx * dx + dy * dy];
        if (!v) continue;
        // soglia del rumore: rumore a gradiente intercalato, fisso attorno al centro e ben sparso (niente grumi)
        const a = 0.06711056 * (dx + 4096) + ay, b = 52.9829189 * (a - Math.floor(a));
        const liv = Math.floor(v + b - Math.floor(b));
        if (!liv) continue;
        d[i] = ROSSO[0]; d[i + 1] = ROSSO[1]; d[i + 2] = ROSSO[2]; d[i + 3] = Math.min(255, Math.round(liv * opacita));
      }
    }
    g.putImageData(img, 0, 0);
    return tela;
  }

  function disegna() {
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, L, A);
    if (vicinanza > 0.01 && alone) {
      const m = (alone.width - 1) / 2;
      ctx.globalAlpha = vicinanza > 0.99 ? 1 : vicinanza;   // a piena intensità l'immagine si copia com'è
      ctx.drawImage(alone, Math.round(px) - m, Math.round(py) - m);
      ctx.globalAlpha = 1;
    } else if (vicinanza > 0.01 && !aloneInAttesa) {
      aloneInAttesa = true;
      dopo(() => { aloneInAttesa = false; if (!alone) alone = preparaAlone(); sveglia(0); });
    }
    ctx.fillStyle = '#fbfaf6';
    const spinge = vicinanza > 0.05;
    let nv = 0, veloci = false;
    for (const s of stelle) {
      const x = s.x + s.ox, y = s.y + s.oy;
      let luce = 0;
      if (spinge) {
        const dx = x - px, dy = y - py, d2 = dx * dx + dy * dy;
        if (d2 < R2 && d2 > 0.5) luce = (1 - Math.sqrt(d2) / R) * vicinanza;
      }
      for (const o of onde) {
        const ex = x - o.x, ey = y - o.y, diff = Math.abs(Math.sqrt(ex * ex + ey * ey) - o.r);
        if (diff < 36) luce = Math.max(luce, (1 - diff / 36) * o.forza * 0.8);
      }
      if (!veloci && (Math.abs(s.ux) > 0.25 || Math.abs(s.uy) > 0.25)) veloci = true;   // più veloce della deriva (15 px al secondo)
      const brillio = 0.7 + 0.3 * Math.sin(s.fase);
      ctx.globalAlpha = Math.min(1, (s.a * brillio + luce * 0.55) * (fasce.length ? attenua(x) : 1));
      const r = s.r * (1 + luce * 0.6);
      if (r < 0.9) ctx.fillRect(x - r, y - r, r * 2, r * 2);
      else { ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill(); }
      if (luce > 0.3 && nv < 45) { vicine[nv] = x; vicine[nv + 1] = y; vicine[nv + 2] = luce; nv += 3; }
    }

    if (nv > 5) {                                          // costellazione attorno al puntatore
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = '#fbfaf6';
      for (let i = 0; i < nv; i += 3) {
        for (let j = i + 3; j < nv; j += 3) {
          const dx = vicine[i] - vicine[j], dy = vicine[i + 1] - vicine[j + 1], d2 = dx * dx + dy * dy;
          if (d2 < 6400) {
            ctx.globalAlpha = (1 - d2 / 6400) * Math.min(vicine[i + 2], vicine[j + 2]) * 0.4;
            ctx.beginPath(); ctx.moveTo(vicine[i], vicine[i + 1]); ctx.lineTo(vicine[j], vicine[j + 1]); ctx.stroke();
          }
        }
      }
    }

    for (const o of onde) {
      ctx.globalAlpha = Math.max(0, o.forza) * 0.18;
      ctx.strokeStyle = '#fbfaf6';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, 6.2832); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    // qualcosa si muove più in fretta della deriva: il prossimo fotogramma arriva prima
    attivo = veloci || onde.length > 0 || Math.abs(tx - px) > 0.5 || Math.abs(ty - py) > 0.5 || Math.abs((dentro ? 1 : 0) - vicinanza) > 0.02;
  }

  /* ---------- ritmo dei fotogrammi ---------- */
  const inPausa = () => fermo() || document.hidden || !document.hasFocus();
  function annulla() {
    clearTimeout(timer); cancelAnimationFrame(richiesta);
    timer = richiesta = 0;
  }
  // prossimo fotogramma non più tardi di «quando» (tempo di performance.now()): un timer fino a poco prima, poi la
  // richiesta di fotogramma del browser, così il disegno cade insieme a un aggiornamento dello schermo
  function pianifica(quando) {
    if ((timer || richiesta) && previsto <= quando + 1) return;     // ce n'è già uno previsto prima
    annulla();
    previsto = quando;
    const manca = quando - performance.now();
    if (manca <= 10) richiesta = requestAnimationFrame(fotogramma);
    else timer = setTimeout(() => { timer = 0; richiesta = requestAnimationFrame(fotogramma); }, manca - 8);
  }
  function fotogramma(ora) {
    richiesta = 0;
    if (inPausa()) { if (fermo()) vuoto(); return; }
    const dt = Math.max(0, Math.min(250, ora - prima)); prima = ora;
    deriva(dt);
    resto += dt;
    const passi = Math.min(8, Math.floor(resto / PASSO));
    resto = passi === 8 ? 0 : resto - passi * PASSO;
    for (let k = 0; k < passi; k++) passo();
    disegna();
    pianifica(ora + 1000 / (attivo || ora - mossoAlle < 200 ? RITMO_VIVO : RITMO_CALMO));
  }
  // disegna subito lo stato attuale e riparte (dopo una pausa riprende da dove era, senza salti)
  function avvia() {
    annulla();
    if (fermo()) { vuoto(); return; }
    if (document.hidden) return;
    disegna();                                       // subito lo stato attuale, senza aspettare il primo fotogramma
    if (!document.hasFocus()) return;
    prima = performance.now(); resto = 0;
    // il primo fotogramma al prossimo aggiornamento dello schermo, non dopo un timer: una richiesta di fotogramma in
    // attesa fa anche mostrare prima la pagina nuova mentre si carica (misurato: circa 60 ms dal clic invece di 230)
    pianifica(prima);
  }
  // qualcosa è cambiato (puntatore, clic): il prossimo fotogramma entro «ms»
  function sveglia(ms) {
    if (!richiesta && !timer && inPausa()) return;   // in pausa: ci pensa avvia() alla ripresa
    pianifica(Math.max(prima + ms, performance.now()));
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
    deriva(el);
    for (const o of onde) { o.r += el * 0.5; o.forza *= Math.pow(0.9955, el); }
    return true;
  }

  window.addEventListener('pointermove', e => {
    tx = e.clientX; ty = e.clientY; tipo = e.pointerType; if (!dentro) { px = tx; py = ty; } dentro = true;
    mossoAlle = performance.now(); sveglia(1000 / RITMO_VIVO);
  }, { passive: true });
  window.addEventListener('pointerdown', e => {
    if (fermo()) return;
    onde.push({ x: e.clientX, y: e.clientY, r: 0, forza: 1 }); if (onde.length > 3) onde.shift();
    sveglia(0);
  }, { passive: true });
  document.addEventListener('pointerleave', () => { dentro = false; sveglia(1000 / RITMO_VIVO); });
  // finestra in secondo piano: il cielo si ferma; torna attiva: riparte da dove era
  window.addEventListener('blur', () => { dentro = false; annulla(); });
  window.addEventListener('focus', avvia);
  let attesaMisura = 0;
  window.addEventListener('resize', () => { clearTimeout(attesaMisura); attesaMisura = setTimeout(() => { dimensiona(); misuraFasce(); avvia(); }, 120); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', misuraFasce, { once: true }); else misuraFasce();
  document.addEventListener('visibilitychange', avvia);
  document.addEventListener('ofa:moto', avvia);
  if (hdr && hdr.addEventListener) hdr.addEventListener('change', () => { alone = null; avvia(); });   // HDR acceso o spento
  window.addEventListener('pagehide', salvaStato);
  // con Indietro/Avanti la pagina torna dalla cache del browser: lo stato della pagina appena lasciata diventa leggibile
  // solo al primo fotogramma, quindi si riprende a «pagereveal» (se il browser non lo conosce, subito)
  window.addEventListener('pageshow', e => { if (!e.persisted) return; if ('onpagereveal' in window) tornata = true; else if (riprendi(salvatoAlle)) avvia(); });
  window.addEventListener('pagereveal', () => { if (tornata) { tornata = false; if (riprendi(salvatoAlle)) avvia(); } });
  dimensiona();
  riprendi();
  avvia();
})();
