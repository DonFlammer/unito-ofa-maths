// Memoria dei progressi: anonimi in localStorage, profilo aperto nella sola sessione della scheda.
// Gli archivi cifrati dei profili vengono gestiti da studio.js. Nessun codice di accesso viene salvato.
(() => {
  'use strict';
  if (window.self !== window.top) {
    document.documentElement.style.setProperty('display', 'none', 'important');
    return; // mitigazione client: GitHub Pages non consente frame-ancestors negli header HTTP
  }
  const PROFILO = k => /^ofa:(prog|check|diag|sim-|piano)/.test(k) || /-checklist$/.test(k) || k === 'studio:lezioni';
  const SESSIONE = 'studio:sessione:v2';
  let locale, sessione;
  try { locale = localStorage; sessione = sessionStorage; } catch { return; }
  const pulisciSessione = () => {
    const keys = [];
    for (let i = 0; i < sessione.length; i++) { const k = sessione.key(i); if (k && PROFILO(k)) keys.push(k); }
    keys.forEach(k => sessione.removeItem(k)); sessione.removeItem(SESSIONE);
  };
  function aperta() {
    const raw = sessione.getItem(SESSIONE);
    if (!raw) return false;
    try {
      const s = JSON.parse(raw);
      if (s && /^[a-z0-9]{3,20}$/.test(s.id) && /^[A-Za-z0-9_-]{43}$/.test(s.chiave)
        && Number.isFinite(s.scade) && s.scade > Date.now() && s.scade <= Date.now() + 31 * 60000) return true;
    } catch { /* sessione non valida */ }
    pulisciSessione(); return false;
  }
  const origine = k => PROFILO(String(k)) && aperta() ? sessione : locale;
  const keys = () => {
    const out = [], attiva = aperta();
    for (let i = 0; i < locale.length; i++) { const k = locale.key(i); if (k && (!attiva || !PROFILO(k))) out.push(k); }
    if (attiva) for (let i = 0; i < sessione.length; i++) { const k = sessione.key(i); if (k && PROFILO(k)) out.push(k); }
    return out;
  };
  window.StudioStorage = Object.freeze({
    getItem: k => origine(k).getItem(k), setItem: (k, v) => origine(k).setItem(k, v),
    removeItem: k => origine(k).removeItem(k), key: i => keys()[i] ?? null,
    get length() { return keys().length; }
  });
  aperta();
})();
