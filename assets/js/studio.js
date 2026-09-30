// «Il mio avanzamento»: un profilo semplicissimo (nome utente + codice, niente password) per tenere traccia dei progressi
// negli appunti e nella guida all'OFA, in italiano e in inglese. Non c'è nessun server: tutto resta nella memoria di questo
// browser, che i quattro siti condividono perché stanno allo stesso indirizzo (donflammer.github.io). Per cambiare dispositivo
// si usa il codice di trasferimento. Lo stesso file serve tutti e quattro i siti (lingua da <html lang>).
(() => {
  'use strict';
  const root = document.documentElement;
  const EN = (root.lang || '').startsWith('en');
  const t = (it, en) => (EN ? en : it);
  let LS = null;
  try { const k = '__studio__'; localStorage.setItem(k, k); localStorage.removeItem(k); LS = localStorage; } catch { return; }   // memoria non disponibile: niente login
  const leggi = (k, d = null) => { try { const v = LS.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } };
  const scrivi = (k, v) => { try { LS.setItem(k, JSON.stringify(v)); } catch { /* memoria piena o bloccata */ } };
  const togli = k => { try { LS.removeItem(k); } catch { /* niente */ } };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const oggi = () => new Date().toISOString().slice(0, 10);

  /* ---------- progressi: quali chiavi appartengono al profilo (tema e animazioni restano del browser) ---------- */
  const DI_PROFILO = k => /^ofa:(prog|check|diag|sim-|piano)/.test(k) || /-checklist$/.test(k) || k === 'studio:lezioni';
  const chiavi = () => { const out = []; for (let i = 0; i < LS.length; i++) { const k = LS.key(i); if (k && DI_PROFILO(k)) out.push(k); } return out; };
  const fotografa = () => pulisciTutto(Object.fromEntries(chiavi().map(k => [k, leggi(k)])));
  const svuota = () => chiavi().forEach(togli);
  const ripristina = dati => { svuota(); for (const [k, v] of Object.entries(pulisciTutto(dati))) scrivi(k, v); };

  /* ---------- controllo dei dati: i progressi possono arrivare da un codice di trasferimento incollato da altri, o da
     qualunque pagina dello stesso indirizzo. Si tiene solo ciò che ha la forma attesa (numeri, date, elenchi di voci),
     così niente di quello che è salvato può finire nella pagina come HTML o bloccare gli script dei siti ---------- */
  const PROIBITE = new Set(['__proto__', 'constructor', 'prototype']);
  const DATA = /^\d{4}-\d{2}-\d{2}$/;
  const intero = (x, max) => Number.isInteger(x) && x >= 0 && x <= max;
  const stringa = (x, max) => typeof x === 'string' && x.length <= max;
  const oggetto = x => !!x && typeof x === 'object' && !Array.isArray(x);
  const coppia = (v, max) => Array.isArray(v) && v.length === 2 && intero(v[0], max) && intero(v[1], max) && v[0] <= v[1];
  // indirizzo di una lezione: solo pagine di questi siti (stesso indirizzo), mai javascript: né altri siti
  function urlLezione(u) {
    if (!stringa(u, 600)) return '';
    try {
      const x = new URL(u, location.href);
      if (x.protocol === 'https:' || x.protocol === 'http:') return x.origin === location.origin ? x.href : '';
      return x.protocol === 'file:' && location.protocol === 'file:' ? x.href : '';
    } catch { return ''; }
  }
  function pulisci(k, v) {
    if (typeof k !== 'string' || PROIBITE.has(k) || !DI_PROFILO(k)) return undefined;
    if (/^ofa:prog:[1-8]$/.test(k)) return coppia(v, 999) ? [v[0], v[1]] : undefined;
    if (/^ofa:check:[\w.-]{1,60}$/.test(k)) return Array.isArray(v) && v.length <= 999 && v.every(x => intero(x, 998)) ? [...new Set(v)] : undefined;
    if (/^ofa:sim-\d{1,2}$/.test(k)) return typeof v === 'number' && v >= 0 && v <= 10 ? v : undefined;
    if (k === 'ofa:diag') {
      if (!oggetto(v) || !oggetto(v.risultati)) return undefined;
      const risultati = {};
      for (const [m, r] of Object.entries(v.risultati)) if (/^M[1-8]$/.test(m) && coppia(r, 99)) risultati[m] = [r[0], r[1]];
      return { data: stringa(v.data, 10) && DATA.test(v.data) ? v.data : '', risultati };
    }
    if (k === 'ofa:piano') {
      if (!oggetto(v)) return undefined;
      return { esame: stringa(v.esame, 10) && (v.esame === 'altra' || DATA.test(v.esame)) ? v.esame : '',
        data: stringa(v.data, 10) && DATA.test(v.data) ? v.data : '', ore: intero(v.ore, 40) && v.ore >= 1 ? v.ore : 7 };
    }
    if (k === 'ofa:piano:fatti') return Array.isArray(v) ? [...new Set(v.filter(x => stringa(x, 24) && /^[a-z0-9~]+$/.test(x)))].slice(0, 999) : undefined;
    if (/^[A-Za-z0-9-]{1,60}-checklist$/.test(k)) {
      if (!oggetto(v)) return undefined;
      const out = {};
      for (const [id, x] of Object.entries(v).slice(0, 999)) if (!PROIBITE.has(id) && /^[A-Za-z0-9_-]{1,40}$/.test(id) && typeof x === 'boolean') out[id] = x;
      return out;
    }
    if (k === 'studio:lezioni') {
      if (!oggetto(v)) return undefined;
      const out = {};
      for (const [chiave, voce] of Object.entries(v).slice(0, 999)) {
        if (!/^[A-Za-z0-9-]{1,60}-checklist$/.test(chiave) || !oggetto(voce) || !intero(voce.totale, 999)) continue;
        const pulita = { totale: voce.totale };
        for (const l of ['it', 'en']) {
          const pag = voce[l], url = oggetto(pag) ? urlLezione(pag.url) : '';
          if (url && stringa(pag.titolo, 200) && (pag.corso === undefined || stringa(pag.corso, 120))) pulita[l] = { titolo: pag.titolo, corso: pag.corso || '', url };
        }
        if (pulita.it || pulita.en) out[chiave] = pulita;
      }
      return out;
    }
    return undefined;
  }
  const pulisciTutto = d => { const out = {}; if (oggetto(d)) for (const [k, v] of Object.entries(d)) { const x = pulisci(k, v); if (x !== undefined) out[k] = x; } return out; };
  const dato = (k, d) => { const v = pulisci(k, leggi(k)); return v === undefined ? d : v; };
  // unione di due stati, per non perdere progressi fatti senza profilo o su un altro dispositivo
  function unisciValore(k, a, b) {
    if (a === null || a === undefined) return b;
    if (b === null || b === undefined) return a;
    if (/^ofa:prog:/.test(k) && Array.isArray(a) && Array.isArray(b)) return a[0] >= b[0] ? a : b;
    if (Array.isArray(a) && Array.isArray(b)) return [...new Set([...a, ...b])];
    if (typeof a === 'number' && typeof b === 'number') return Math.max(a, b);
    if (k === 'ofa:diag') return String(a.data || '') >= String(b.data || '') ? a : b;          // test d'ingresso: il più recente
    if (typeof a === 'object' && typeof b === 'object') {
      const out = { ...a };
      for (const [kk, vv] of Object.entries(b)) out[kk] = typeof vv === 'boolean' ? (out[kk] === true || vv) : (out[kk] ?? vv);
      return out;
    }
    return b;
  }
  const unisci = (a, b) => { const out = pulisciTutto(a); for (const [k, v] of Object.entries(pulisciTutto(b))) out[k] = unisciValore(k, out[k], v); return pulisciTutto(out); };

  /* ---------- profili ---------- */
  const PROFILI = 'studio:profili', ATTIVO = 'studio:attivo';
  const VALIDO_NOME = /^[A-Za-z0-9]{3,20}$/, VALIDO_CODICE = /^[A-Za-z0-9]{4,12}$/, ESA = /^[0-9a-f]{32,64}$/;
  // profili salvati: solo voci ben formate (nome valido e uguale alla chiave, sale e impronta esadecimali)
  function profili() {
    const p = leggi(PROFILI, {}), out = {};
    if (oggetto(p)) for (const [id, v] of Object.entries(p)) {
      if (!oggetto(v) || !stringa(v.nome, 20) || !VALIDO_NOME.test(v.nome) || v.nome.toLowerCase() !== id
        || !stringa(v.sale, 64) || !ESA.test(v.sale) || !stringa(v.impronta, 64) || !ESA.test(v.impronta)) continue;
      out[id] = { nome: v.nome, sale: v.sale, impronta: v.impronta, creato: stringa(v.creato, 10) && DATA.test(v.creato) ? v.creato : '',
        aggiornato: stringa(v.aggiornato, 10) && DATA.test(v.aggiornato) ? v.aggiornato : '', dati: pulisciTutto(v.dati) };
    }
    return out;
  }
  const salvaProfili = p => scrivi(PROFILI, p);
  const attivo = () => { const id = leggi(ATTIVO), p = profili(); return typeof id === 'string' && Object.hasOwn(p, id) ? { id, ...p[id] } : null; };
  // impronta del codice: PBKDF2-SHA-256 con un sale casuale per profilo (WebCrypto). Il codice non si salva in chiaro e non si
  // ricava in fretta dal codice di trasferimento; resta comunque un codice, non una password: i progressi sono leggibili in questo browser
  const ITERAZIONI = 300000;
  const esa = buf => Array.from(new Uint8Array(buf), b => b.toString(16).padStart(2, '0')).join('');
  const nuovoSale = () => esa(crypto.getRandomValues(new Uint8Array(16)));
  async function impronta(nome, codice, sale) {
    const cod = new TextEncoder();
    const chiave = await crypto.subtle.importKey('raw', cod.encode(codice.toLowerCase()), 'PBKDF2', false, ['deriveBits']);
    return esa(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: cod.encode(`${sale}:${nome.toLowerCase()}`), iterations: ITERAZIONI }, chiave, 256));
  }
  function salva() { const a = attivo(); if (!a) return; const p = profili(); p[a.id].dati = fotografa(); p[a.id].aggiornato = oggi(); salvaProfili(p); }
  function esci() { salva(); svuota(); togli(ATTIVO); }
  const ERR = {
    nome: t('Il nome utente deve avere da 3 a 20 caratteri, solo lettere e numeri (niente spazi o simboli).', 'The username must have 3 to 20 characters, letters and numbers only (no spaces or symbols).'),
    codice: t('Il codice deve avere da 4 a 12 caratteri, solo lettere e numeri (niente spazi o simboli).', 'The code must have 4 to 12 characters, letters and numbers only (no spaces or symbols).'),
    esiste: t('Questo nome utente esiste già: scegline un altro, oppure accedi con il suo codice.', 'This username already exists: choose another one, or sign in with its code.'),
    manca: t('In questo browser non c\'è un profilo con questo nome utente: controlla come l\'hai scritto, oppure crealo.', 'There is no profile with this username in this browser: check the spelling, or create it.'),
    sbagliato: t('Il codice non è giusto.', 'The code is not right.'),
    trasferimento: t('Il codice di trasferimento non è valido: copialo per intero.', 'The transfer code is not valid: copy all of it.'),
    corrisponde: t('Il codice del profilo non corrisponde.', 'The profile code does not match.'),
    altro: t('In questo browser c\'è già un altro profilo con questo nome utente.', 'This browser already has another profile with this username.'),
  };
  // controlli immediati (senza calcolare l'impronta): formato, nome già usato o inesistente
  function controlla(azione, nome, codice) {
    if (!VALIDO_NOME.test(nome)) return ERR.nome;
    if (!VALIDO_CODICE.test(codice)) return ERR.codice;
    const c = Object.hasOwn(profili(), nome.toLowerCase());
    if (azione === 'crea' && c) return ERR.esiste;
    if (azione === 'accedi' && !c) return ERR.manca;
    return '';
  }
  async function accedi(nome, codice) {
    const e = controlla('accedi', nome, codice); if (e) return e;
    const id = nome.toLowerCase(), p = profili();
    if (await impronta(nome, codice, p[id].sale) !== p[id].impronta) return ERR.sbagliato;
    const prima = attivo();
    if (prima && prima.id === id) return '';
    if (prima) esci();
    const senzaProfilo = fotografa();                 // progressi fatti senza profilo: passano al profilo
    ripristina(unisci(profili()[id]?.dati, senzaProfilo));
    scrivi(ATTIVO, id); salva();
    return '';
  }
  async function crea(nome, codice) {
    const e = controlla('crea', nome, codice); if (e) return e;
    const id = nome.toLowerCase(), sale = nuovoSale(), imp = await impronta(nome, codice, sale);
    if (Object.hasOwn(profili(), id)) return ERR.esiste;          // creato nel frattempo in un'altra scheda
    if (attivo()) esci();
    const q = profili();
    q[id] = { nome, sale, impronta: imp, creato: oggi(), dati: {} };
    salvaProfili(q);
    scrivi(ATTIVO, id); salva();                       // i progressi già fatti in questo browser diventano del nuovo profilo
    return '';
  }
  function elimina() { const a = attivo(); if (!a) return; const p = profili(); delete p[a.id]; salvaProfili(p); svuota(); togli(ATTIVO); }
  const b64 = { da: s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
    a: s => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/')))) };
  const MAX_TRASFERIMENTO = 200000;                    // caratteri: un profilo vero ne usa pochi kB
  function codiceTrasferimento() { salva(); const a = attivo(); return a ? 'STUDIO1.' + b64.da(JSON.stringify({ n: a.nome, s: a.sale, i: a.impronta, c: a.creato, d: a.dati })) : ''; }
  async function importa(testo, codice) {
    const s = String(testo).replace(/\s+/g, '');
    if (!s || s.length > MAX_TRASFERIMENTO) return ERR.trasferimento;
    let o = null;
    try { o = JSON.parse(b64.a(s.replace(/^STUDIO1\./, ''))); } catch { o = null; }
    if (!oggetto(o) || !stringa(o.n, 20) || !VALIDO_NOME.test(o.n) || !stringa(o.s, 64) || !ESA.test(o.s) || !stringa(o.i, 64) || !ESA.test(o.i) || !oggetto(o.d)) return ERR.trasferimento;
    if (!VALIDO_CODICE.test(codice) || await impronta(o.n, codice, o.s) !== o.i) return ERR.corrisponde;
    const id = o.n.toLowerCase(), p = profili();
    // stesso nome già in questo browser: si uniscono i progressi solo se il codice vale anche per quel profilo
    if (Object.hasOwn(p, id) && await impronta(o.n, codice, p[id].sale) !== p[id].impronta) return ERR.altro;
    const senzaProfilo = attivo() ? {} : fotografa();
    if (attivo()) esci();
    const q = profili();
    const dati = unisci(unisci(q[id]?.dati, o.d), senzaProfilo);
    q[id] = q[id] ? { ...q[id], dati } : { nome: o.n, sale: o.s, impronta: o.i, creato: stringa(o.c, 10) && DATA.test(o.c) ? o.c : oggi(), dati };
    salvaProfili(q);
    ripristina(dati); scrivi(ATTIVO, id); salva();
    return '';
  }

  /* ---------- lezioni degli appunti: ogni pagina con una checklist si registra, per il riepilogo ---------- */
  const lista = document.querySelector('.checklist[data-chiave]');
  if (lista) {
    const reg = dato('studio:lezioni', {});
    const voce = reg[lista.dataset.chiave] || {};
    const corso = document.querySelectorAll('.crumbs a')[1]?.textContent.trim() || '';
    voce.totale = lista.querySelectorAll('input[type="checkbox"]').length;
    voce[EN ? 'en' : 'it'] = { titolo: document.title, corso, url: location.href.split('#')[0] };
    reg[lista.dataset.chiave] = voce;
    scrivi('studio:lezioni', reg);
  }

  /* ---------- riepilogo dei progressi ---------- */
  const OFA = EN
    ? { base: 'https://donflammer.github.io/unito-ofa-maths/', nome: 'Maths OFA', dir: 'modules/', test: 'entry-test.html', sim: 'mock-tests.html', piano: 'plan.html',
      moduli: ['01-language-sets-numbers', '02-polynomials', '03-equations-inequalities', '04-rational-radical-absolute-value', '05-analytic-geometry', '06-functions', '07-exponentials-logarithms', '08-trigonometry'],
      titoli: ['Language, sets, logic and numbers', 'Polynomials and factorisation', 'First- and second-degree equations and inequalities', 'Rational, radical and absolute value', 'Analytic geometry', 'Functions', 'Exponentials and logarithms', 'Trigonometry'] }
    : { base: 'https://donflammer.github.io/unito-ofa-matematica/', nome: 'OFA di matematica', dir: 'moduli/', test: 'test-ingresso.html', sim: 'simulazioni.html', piano: 'piano.html',
      moduli: ['01-linguaggio-numeri', '02-polinomi', '03-equazioni-disequazioni', '04-fratte-irrazionali-modulo', '05-geometria-analitica', '06-funzioni', '07-esponenziali-logaritmi', '08-trigonometria'],
      titoli: ['Linguaggio, insiemi, logica e numeri', 'Polinomi e scomposizione', 'Equazioni e disequazioni di 1° e 2° grado', 'Fratte, irrazionali e valore assoluto', 'Geometria analitica', 'Funzioni', 'Esponenziali e logaritmi', 'Trigonometria'] };
  const barra = (f, tot) => `<span class="studio-barra" aria-hidden="true"><i style="--p:${tot ? (f / tot).toFixed(3) : 0}"></i></span>`;
  function riepilogo() {
    const moduli = OFA.moduli.map((m, k) => {
      const [f, tot] = dato(`ofa:prog:${k + 1}`, [0, 0]);
      return `<li><a href="${OFA.base}${OFA.dir}${m}.html">${k + 1} · ${esc(OFA.titoli[k])}</a>${barra(f, tot)}<span class="studio-num">${tot ? `${f}/${tot}` : '—'}</span></li>`;
    }).join('');
    const diag = dato('ofa:diag', null);
    let test = `<a href="${OFA.base}${OFA.test}">${t('Non ancora fatto', 'Not taken yet')}</a>`;
    if (diag && Object.keys(diag.risultati).length) {
      const r = Object.entries(diag.risultati), g = r.reduce((a, [, v]) => a + v[0], 0), tot = r.reduce((a, [, v]) => a + v[1], 0);
      const deboli = r.filter(([, v]) => v[1] && v[0] / v[1] < 2 / 3 - 1e-9).map(([m]) => m.replace('M', '')).sort();
      test = `${g}/${tot} ${t('il', 'on')} ${esc(diag.data || '')}${deboli.length ? ` · ${t('da riprendere', 'to review')}: ${t('moduli', 'modules')} ${deboli.join(', ')}` : ''} · <a href="${OFA.base}${OFA.test}">${t('rifallo', 'take it again')}</a>`;
    }
    const sims = Array.from({ length: 8 }, (_, k) => dato(`ofa:sim-${k + 1}`, null)).map((v, k) => `<a class="studio-chip${v === null ? '' : v >= 6 ? ' ok' : ' no'}" href="${OFA.base}${OFA.sim}#sim-${k + 1}">${k + 1}: ${v === null ? '—' : `${v}/10`}</a>`).join('');
    const fatti = dato('ofa:piano:fatti', []).length;
    const reg = dato('studio:lezioni', {});
    const lezioni = Object.entries(reg).map(([k, v]) => {
      const pag = v[EN ? 'en' : 'it'] || v.it || v.en; if (!pag) return '';
      const fatte = Object.values(dato(k, {})).filter(Boolean).length;
      return `<li><a href="${esc(pag.url)}">${esc(pag.corso ? pag.corso + ' · ' : '')}${esc(pag.titolo)}</a>${barra(fatte, v.totale)}<span class="studio-num">${fatte}/${v.totale}</span></li>`;
    }).join('');
    return `<section><h3>${OFA.nome}</h3><ul class="studio-righe">${moduli}</ul>
<p><b>${t("Test d'ingresso", 'Entry test')}</b> ${test}</p>
<p><b>${t('Simulazioni', 'Mock tests')}</b> <span class="studio-chips">${sims}</span></p>
<p><b>${t('Piano di studio', 'Study plan')}</b> ${fatti ? `${fatti} ${t(fatti === 1 ? 'attività spuntata' : 'attività spuntate', fatti === 1 ? 'task ticked' : 'tasks ticked')}` : t('nessuna attività spuntata', 'no tasks ticked')} · <a href="${OFA.base}${OFA.piano}">${t('apri il piano', 'open the plan')}</a></p></section>
<section><h3>${t('Appunti del primo anno', 'First-year notes')}</h3>${lezioni ? `<ul class="studio-righe">${lezioni}</ul>` : `<p class="studio-nota">${t('Nessuna checklist ancora: apri una lezione e spunta le voci che sai fare.', 'No checklists yet: open a lesson and tick what you can do.')}</p>`}</section>`;
  }

  /* ---------- finestra ---------- */
  const AVVISO = t('<strong>Serve solo a tenere traccia dei tuoi progressi.</strong> Non inserire dati sensibili: niente nome e cognome, email, numero di matricola o password che usi altrove. Scegli un nome utente di fantasia e un codice facile da ricordare.',
    '<strong>This only keeps track of your progress.</strong> Do not enter sensitive data: no real name, email, student ID or passwords you use elsewhere. Pick a made-up username and a code that is easy to remember.');
  const NOTA = t('Il profilo resta in questo browser (non c\'è nessun server) e vale per tutti i siti: appunti e guida all\'OFA, in italiano e in inglese. Su un altro dispositivo lo porti con il codice di trasferimento.',
    'The profile stays in this browser (there is no server) and works on all the sites: the notes and the OFA guide, in Italian and in English. You can move it to another device with the transfer code.');
  const finestra = document.createElement('dialog');
  finestra.className = 'studio'; finestra.id = 'studio';
  finestra.setAttribute('aria-labelledby', 'studio-titolo');
  document.body.appendChild(finestra);

  function disegna(errore = '') {
    const a = attivo();
    if (!a) {
      const altri = Object.values(profili()).map(p => `<button type="button" class="studio-chip" data-nome="${esc(p.nome)}">${esc(p.nome)}</button>`).join('');
      finestra.innerHTML = `<button type="button" class="studio-chiudi" aria-label="${t('Chiudi', 'Close')}">×</button>
<h2 id="studio-titolo">${t('Il mio avanzamento', 'My progress')}</h2>
<p class="studio-avviso">${AVVISO}</p>
<form class="studio-form" novalidate>
<label>${t('Nome utente', 'Username')} <small>${t('solo lettere e numeri, da 3 a 20', 'letters and numbers only, 3 to 20')}</small><input name="nome" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="20" inputmode="latin" pattern="[A-Za-z0-9]{3,20}" required></label>
<label>${t('Codice', 'Code')} <small>${t('solo lettere e numeri, da 4 a 12: ti serve per rientrare', 'letters and numbers only, 4 to 12: you need it to sign in again')}</small><input name="codice" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="12" pattern="[A-Za-z0-9]{4,12}" required></label>
<p class="studio-errore" role="alert">${esc(errore)}</p>
<div class="studio-azioni"><button type="submit" class="studio-primario" value="accedi">${t('Accedi', 'Sign in')}</button><button type="submit" value="crea">${t('Crea profilo', 'Create profile')}</button></div>
</form>
${altri ? `<p class="studio-nota">${t('Profili in questo browser', 'Profiles in this browser')}: <span class="studio-chips">${altri}</span></p>` : ''}
<p class="studio-nota">${NOTA}</p>
<details class="studio-importa"><summary>${t('Importa un profilo da un altro dispositivo', 'Import a profile from another device')}</summary>
<form class="studio-form" data-importa novalidate><label>${t('Codice di trasferimento', 'Transfer code')}<textarea name="testo" rows="3" spellcheck="false"></textarea></label>
<label>${t('Codice del profilo', 'Profile code')}<input name="codice" autocomplete="off" maxlength="12"></label>
<div class="studio-azioni"><button type="submit" value="importa">${t('Importa', 'Import')}</button></div></form></details>`;
    } else {
      finestra.innerHTML = `<button type="button" class="studio-chiudi" aria-label="${t('Chiudi', 'Close')}">×</button>
<div class="studio-testa"><span class="studio-iniziale" aria-hidden="true">${esc(a.nome[0].toUpperCase())}</span><div><h2 id="studio-titolo">${t('Ciao', 'Hi')}, ${esc(a.nome)}</h2><p class="studio-nota">${t('Profilo creato il', 'Profile created on')} ${esc(a.creato)} · ${t('resta in questo browser', 'stays in this browser')}</p></div></div>
${riepilogo()}
<p class="studio-errore" role="alert">${esc(errore)}</p>
<div class="studio-azioni"><button type="button" data-azione="trasferisci">${t('Codice di trasferimento', 'Transfer code')}</button><button type="button" data-azione="esci">${t('Esci', 'Sign out')}</button><button type="button" class="studio-link" data-azione="elimina">${t('Elimina il profilo', 'Delete the profile')}</button></div>
<div class="studio-trasferimento" hidden><p class="studio-nota">${t('Sull\'altro dispositivo apri «Accedi» → «Importa un profilo», incolla questo codice e scrivi il codice del profilo. Contiene i tuoi progressi, non dati personali.', 'On the other device open “Sign in” → “Import a profile”, paste this code and type your profile code. It contains your progress, no personal data.')}</p><textarea readonly rows="3"></textarea><button type="button" data-azione="copia">${t('Copia', 'Copy')}</button></div>
<p class="studio-nota">${t('Serve solo a tenere traccia dei progressi: non inserire dati sensibili.', 'It only keeps track of your progress: do not enter sensitive data.')}</p>`;
    }
  }
  const dopo = () => { finestra.close(); location.reload(); };
  finestra.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) { if (e.target === finestra) finestra.close(); return; }
    if (b.classList.contains('studio-chiudi')) { finestra.close(); return; }
    if (b.dataset.nome) { const i = finestra.querySelector('input[name="nome"]'); i.value = b.dataset.nome; finestra.querySelector('input[name="codice"]').focus(); return; }
    const azione = b.dataset.azione;
    if (azione === 'esci') { esci(); dopo(); }
    else if (azione === 'elimina') { if (confirm(t('Eliminare il profilo e i suoi progressi da questo browser? Non si può annullare.', 'Delete the profile and its progress from this browser? This cannot be undone.'))) { elimina(); dopo(); } }
    else if (azione === 'trasferisci') { const box = finestra.querySelector('.studio-trasferimento'); box.hidden = false; box.querySelector('textarea').value = codiceTrasferimento(); box.querySelector('textarea').select(); }
    else if (azione === 'copia') { const ta = finestra.querySelector('.studio-trasferimento textarea'); ta.select(); const fatto = () => { b.textContent = t('Copiato', 'Copied'); }; const vecchio = () => { try { if (document.execCommand('copy')) fatto(); } catch { /* resta selezionato: si copia a mano */ } };
      if (navigator.clipboard?.writeText) navigator.clipboard.writeText(ta.value).then(fatto, vecchio); else vecchio(); }
  });
  const mostraErrore = err => { const p = finestra.querySelector('.studio-errore'); if (p) p.textContent = err; else disegna(err); };
  let occupato = false;
  finestra.addEventListener('submit', async e => {
    e.preventDefault();
    if (occupato) return;
    const f = e.target, valore = e.submitter?.value === 'crea' ? 'crea' : 'accedi', importaQui = f.dataset.importa !== undefined;
    const nome = importaQui ? '' : f.nome.value.trim(), codice = f.codice.value.trim();
    const subito = importaQui ? '' : controlla(valore, nome, codice);
    if (subito) { mostraErrore(subito); return; }
    if (!window.crypto?.subtle) { mostraErrore(t('Il profilo funziona solo sul sito (https).', 'Profiles only work on the website (https).')); return; }
    occupato = true;
    const bottoni = [...finestra.querySelectorAll('button[type="submit"]')];
    bottoni.forEach(b => { b.disabled = true; });
    let err = '';
    try { err = importaQui ? await importa(f.testo.value, codice) : await (valore === 'crea' ? crea : accedi)(nome, codice); }
    catch { err = t('Qualcosa non ha funzionato: riprova.', 'Something went wrong: try again.'); }
    occupato = false;
    bottoni.forEach(b => { b.disabled = false; });
    if (err) { mostraErrore(err); return; }
    dopo();
  });

  /* ---------- pulsante nella barra in alto ---------- */
  const btn = document.createElement('button');
  btn.type = 'button'; btn.id = 'studio-btn';
  const aggiornaBtn = () => { const a = attivo(); btn.innerHTML = a ? `<span class="studio-iniziale" aria-hidden="true">${esc(a.nome[0].toUpperCase())}</span>${esc(a.nome)}` : t('Accedi', 'Sign in'); btn.title = a ? t('Il mio avanzamento', 'My progress') : t('Accedi per tenere traccia dei progressi', 'Sign in to keep track of your progress'); };
  aggiornaBtn();
  btn.addEventListener('click', () => { disegna(); finestra.showModal(); (finestra.querySelector('input[name="nome"]') || finestra.querySelector('button')).focus(); });
  const tema = document.getElementById('theme-toggle');
  if (tema) { btn.className = 'theme studio-btn'; tema.parentNode.insertBefore(btn, tema); }              // appunti: accanto ai pulsanti del tema
  else { btn.className = 'studio-btn studio-menu'; (document.querySelector('.menu') || document.querySelector('.barra nav') || document.body).appendChild(btn); }   // guida OFA: in fondo al menu

  // il profilo attivo si aggiorna quando si lascia la pagina
  document.addEventListener('visibilitychange', () => { if (document.hidden) salva(); });
  window.addEventListener('pagehide', salva);

  /* ---------- aspetto: usa i colori del sito che lo ospita (appunti o guida OFA) ---------- */
  const css = document.createElement('style');
  css.textContent = `
.studio { --s-bg: var(--surface, #0a0a0a); --s-bg2: var(--surface-2, #111); --s-line: var(--line-2, var(--linea-2, #2b2b2b)); --s-text: var(--text, var(--bianco, #f2f2f2));
  --s-text2: var(--text-2, var(--testo-2, #bdbdbd)); --s-text3: var(--text-3, var(--testo-3, #8c8c8c)); --s-accent: var(--accent, var(--rosso, #d7263f)); --s-ink: var(--accent-ink, #fff);
  --s-err: var(--rose, var(--rosso-testo, #ff7384)); --s-ok: var(--green, #7fd49a); --s-font: var(--sans, system-ui, sans-serif);
  width: min(38rem, calc(100vw - 24px)); max-height: calc(100dvh - 32px); overflow: auto; padding: 1.4rem 1.4rem 1.2rem; border-radius: 16px; border: 1px solid var(--s-line);
  background: var(--s-bg); color: var(--s-text); font: 400 .95rem/1.55 var(--s-font); box-shadow: 0 30px 80px -20px rgba(0,0,0,.8); }
.studio::backdrop { background: rgba(0,0,0,.62); -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px); }
.studio h2 { font: 600 1.25rem/1.25 var(--s-font); margin: 0 0 .7rem; color: var(--s-text); letter-spacing: -.01em; }
.studio h3 { font: 600 .74rem/1.3 var(--s-font); letter-spacing: .08em; text-transform: uppercase; color: var(--s-text3); margin: 1.2rem 0 .5rem; }
.studio p { margin: .5rem 0; }
.studio a { color: var(--s-text); text-decoration-color: var(--s-accent); text-underline-offset: .18em; }
.studio-chiudi { position: absolute; top: .7rem; right: .8rem; width: 34px; height: 34px; border-radius: 9px; border: 1px solid var(--s-line); background: transparent; color: var(--s-text2); font: 400 1.3rem/1 var(--s-font); cursor: pointer; }
.studio-avviso { padding: .75rem .9rem; border-radius: 10px; border: 1px solid color-mix(in srgb, var(--s-err) 45%, transparent); background: color-mix(in srgb, var(--s-err) 9%, transparent); color: var(--s-text2); }
.studio-avviso strong { color: var(--s-text); }
.studio-form { display: grid; gap: .8rem; margin-top: 1rem; }
.studio-form label { display: grid; gap: .3rem; font-weight: 600; font-size: .88rem; }
.studio-form small { font-weight: 400; color: var(--s-text3); }
.studio-form input, .studio-form textarea { font: 500 1rem/1.3 ui-monospace, Consolas, monospace; padding: .6rem .7rem; border-radius: 9px; border: 1px solid var(--s-line); background: var(--s-bg2); color: var(--s-text); width: 100%; box-sizing: border-box; }
.studio-form input:focus, .studio-form textarea:focus, .studio-trasferimento textarea:focus { outline: 2px solid var(--s-accent); outline-offset: 1px; }
.studio-errore { color: var(--s-err); font-weight: 600; min-height: 1.2em; margin: 0 !important; }
.studio-errore:empty { min-height: 0; }
.studio-azioni { display: flex; flex-wrap: wrap; gap: .5rem; align-items: center; margin-top: .6rem; }
.studio button { font: 600 .88rem/1 var(--s-font); }
.studio-azioni button, .studio-trasferimento button { padding: .65rem 1rem; border-radius: 9px; border: 1px solid var(--s-line); background: var(--s-bg2); color: var(--s-text); cursor: pointer; }
.studio-azioni .studio-primario { background: var(--s-accent); border-color: var(--s-accent); color: var(--s-ink); }
.studio-azioni .studio-link { background: none; border: 0; color: var(--s-err); padding: .65rem .2rem; margin-left: auto; }
.studio-nota { font-size: .84rem; color: var(--s-text3); }
.studio-chips { display: inline-flex; flex-wrap: wrap; gap: .3rem; vertical-align: middle; }
.studio-chip { display: inline-block; padding: .28rem .5rem; border-radius: 7px; border: 1px solid var(--s-line); background: var(--s-bg2); color: var(--s-text2) !important; font: 500 .78rem/1.2 ui-monospace, Consolas, monospace; text-decoration: none; cursor: pointer; }
.studio-chip.ok { border-color: color-mix(in srgb, var(--s-ok) 55%, transparent); color: var(--s-ok) !important; }
.studio-chip.no { border-color: color-mix(in srgb, var(--s-err) 55%, transparent); color: var(--s-err) !important; }
.studio-importa { margin-top: .8rem; border-top: 1px solid var(--s-line); padding-top: .7rem; }
.studio-importa summary { cursor: pointer; color: var(--s-text2); font-weight: 600; font-size: .88rem; }
.studio-testa { display: flex; align-items: center; gap: .8rem; margin-right: 2.4rem; }
.studio-testa h2 { margin: 0; }
.studio-testa .studio-nota { margin: .1rem 0 0; }
.studio-iniziale { display: inline-grid; place-items: center; width: 1.9em; height: 1.9em; border-radius: 50%; background: var(--s-accent); color: var(--s-ink); font-weight: 700; flex: 0 0 auto; }
.studio-testa .studio-iniziale { width: 42px; height: 42px; font-size: 1.1rem; }
.studio-righe { list-style: none; margin: 0; padding: 0; }
.studio-righe li { display: grid; grid-template-columns: minmax(0, 1fr) 5.5rem 3rem; gap: .7rem; align-items: center; padding: .38rem 0; border-bottom: 1px solid var(--s-line); margin: 0; font-size: .9rem; }
.studio-righe a { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-decoration: none; color: var(--s-text2); }
.studio-righe a:hover { color: var(--s-text); }
.studio-barra { height: 5px; border-radius: 5px; background: var(--s-bg2); border: 1px solid var(--s-line); overflow: hidden; }
.studio-barra i { display: block; height: 100%; width: calc(var(--p) * 100%); background: var(--s-accent); }
.studio-num { font: 500 .8rem/1 ui-monospace, Consolas, monospace; color: var(--s-text3); text-align: right; }
.studio-trasferimento textarea { width: 100%; box-sizing: border-box; font: 500 .78rem/1.4 ui-monospace, Consolas, monospace; padding: .6rem; border-radius: 9px; border: 1px solid var(--s-line); background: var(--s-bg2); color: var(--s-text); margin: .3rem 0 .5rem; word-break: break-all; }
.studio-btn .studio-iniziale { width: 1.35rem; height: 1.35rem; font-size: .72rem; margin-right: .35rem; }
.theme.studio-btn::before { display: none; }
.studio-menu { background: none; border: 1px solid var(--linea-2, #2b2b2b); color: var(--testo-2, #bdbdbd); border-radius: 7px; margin: auto 0 auto .5rem; padding: .45rem .75rem; font: 500 .8rem/1 var(--sans, system-ui); cursor: pointer; display: inline-flex; align-items: center; white-space: nowrap; }
.studio-menu:hover { color: var(--bianco, #fff); border-color: var(--testo-3, #888); }
@media (max-width: 1100px) { .menu .studio-menu { margin: 1rem 0 0; justify-content: center; padding: .9rem; font-size: 1rem; } }
@media (max-width: 520px) { .studio-righe li { grid-template-columns: minmax(0, 1fr) 3.5rem 2.6rem; } .studio { padding: 1.1rem 1rem 1rem; } }`;
  document.head.appendChild(css);
})();
