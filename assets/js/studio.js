// «Il mio avanzamento»: un profilo locale (nome utente + codice segreto) per tenere traccia dei progressi
// negli appunti e nella guida all'OFA, in italiano e in inglese. Non c'è nessun server: tutto resta nella memoria di questo
// browser, che i quattro siti condividono perché stanno allo stesso indirizzo (donflammer.github.io). Per cambiare dispositivo
// si usa il codice di trasferimento. Lo stesso file serve tutti e quattro i siti (lingua da <html lang>).
(async () => {
  'use strict';
  if (window.self !== window.top) return;
  const root = document.documentElement;
  const EN = (root.lang || '').startsWith('en');
  const t = (it, en) => (EN ? en : it);
  let LS = null;
  try { const k = '__studio__'; localStorage.setItem(k, k); localStorage.removeItem(k); LS = localStorage; } catch { return; }   // memoria non disponibile: niente login
  const M = window.StudioStorage || LS;
  const memoria = k => DI_PROFILO(k) ? M : LS;
  const leggi = (k, d = null) => { try { const v = memoria(k).getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } };
  const scrivi = (k, v) => { try { memoria(k).setItem(k, JSON.stringify(v)); } catch { /* memoria piena o bloccata */ } };
  const togli = k => { try { memoria(k).removeItem(k); } catch { /* niente */ } };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const oggi = () => new Date().toISOString().slice(0, 10);

  /* ---------- progressi: quali chiavi appartengono al profilo (tema e animazioni restano del browser) ---------- */
  const DI_PROFILO = k => /^ofa:(prog|check|diag|sim-|piano)/.test(k) || /-checklist$/.test(k) || k === 'studio:lezioni';
  const chiavi = () => { const out = []; for (let i = 0; i < M.length; i++) { const k = M.key(i); if (k && DI_PROFILO(k)) out.push(k); } return out; };
  const fotografa = () => pulisciTutto(Object.fromEntries(chiavi().map(k => [k, leggi(k)])));
  const svuota = () => chiavi().forEach(togli);
  const ripristina = dati => { svuota(); for (const [k, v] of Object.entries(pulisciTutto(dati))) scrivi(k, v); };

  /* ---------- controllo dei dati: i progressi possono arrivare da un codice di trasferimento incollato da altri, o da
     qualunque pagina dello stesso indirizzo. Si tiene solo ciò che ha la forma attesa (numeri, date, elenchi di voci),
     così niente di quello che è salvato può finire nella pagina come HTML o bloccare gli script dei siti ---------- */
  const PROIBITE = new Set(['__proto__', 'constructor', 'prototype']);
  const DATA = /^\d{4}-\d{2}-\d{2}$/;
  const dataValida = s => {
    if (typeof s !== 'string' || !DATA.test(s)) return false;
    const [a, m, g] = s.split('-').map(Number), d = new Date(0); d.setUTCHours(12, 0, 0, 0); d.setUTCFullYear(a, m - 1, g);
    return a >= 1900 && a <= 2100 && d.getUTCFullYear() === a && d.getUTCMonth() === m - 1 && d.getUTCDate() === g;
  };
  const intero = (x, max) => Number.isInteger(x) && x >= 0 && x <= max;
  const stringa = (x, max) => typeof x === 'string' && x.length <= max;
  const oggetto = x => !!x && typeof x === 'object' && !Array.isArray(x);
  const coppia = (v, max) => Array.isArray(v) && v.length === 2 && intero(v[0], max) && intero(v[1], max) && v[0] <= v[1];
  // indirizzo di una lezione: solo pagine di questi siti (stesso indirizzo), mai javascript: né altri siti
  function urlLezione(u) {
    if (!stringa(u, 600)) return '';
    try {
      const x = new URL(u, location.href);
      if (x.protocol === 'https:' || x.protocol === 'http:') return x.origin === location.origin && /^\/(unito-informatica|unito-computer-science|unito-ofa-matematica|unito-ofa-maths)\//.test(x.pathname) ? x.href : '';
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
      return { data: dataValida(v.data) ? v.data : '', risultati };
    }
    if (k === 'ofa:piano') {
      if (!oggetto(v)) return undefined;
      return { esame: (v.esame === 'altra' || dataValida(v.esame)) ? v.esame : '',
        data: dataValida(v.data) ? v.data : '', ore: intero(v.ore, 40) && v.ore >= 1 ? v.ore : 7 };
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
  // Web Storage non garantisce l'ordine delle chiavi: confrontare il contenuto, non l'ordine di enumerazione.
  const statoDati = d => JSON.stringify(d, (k, v) => oggetto(v) ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)) : v);
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

  /* ---------- profili cifrati, con migrazione del formato precedente ---------- */
  const PROFILI = 'studio:profili', ATTIVO = 'studio:attivo', SESSIONE = 'studio:sessione:v2';
  const VALIDO_NOME = /^[A-Za-z0-9]{3,20}$/, CODICE_VECCHIO = /^[A-Za-z0-9]{4,12}$/;
  const CODICE_NUOVO = /^[^\u0000-\u001f\u007f]{12,128}$/u, ESA = /^[0-9a-f]{32,64}$/;
  const ITERAZIONI = 600000, DURATA_SESSIONE = 30 * 60000, MAX_TRASFERIMENTO = 200000;
  const b64 = {
    da: s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
    a: s => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))))
  };
  const byte64 = a => btoa(Array.from(new Uint8Array(a), n => String.fromCharCode(n)).join('')).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const da64 = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
  const esa = buf => Array.from(new Uint8Array(buf), b => b.toString(16).padStart(2, '0')).join('');
  const nuovoSale = () => esa(crypto.getRandomValues(new Uint8Array(16)));
  let sessione = null, coda = Promise.resolve(), ultimoStato = '';
  function profiloValido(id, v) {
    if (!oggetto(v) || !stringa(v.nome, 20) || !VALIDO_NOME.test(v.nome) || v.nome.toLowerCase() !== id) return null;
    const date = { creato: dataValida(v.creato) ? v.creato : '', aggiornato: dataValida(v.aggiornato) ? v.aggiornato : '' };
    if (v.v === 2) {
      if (!/^[0-9a-f]{32}$/.test(v.sale) || typeof v.normalizza !== 'boolean' || !stringa(v.iv, 16)
        || !/^[A-Za-z0-9_-]{16}$/.test(v.iv) || !stringa(v.cifrato, MAX_TRASFERIMENTO)
        || !/^[A-Za-z0-9_-]{22,}$/.test(v.cifrato)) return null;
      return { v: 2, nome: v.nome, sale: v.sale, normalizza: v.normalizza, iv: v.iv, cifrato: v.cifrato, ...date };
    }
    if (v.v !== undefined || !stringa(v.sale, 64) || !ESA.test(v.sale) || !stringa(v.impronta, 64) || !ESA.test(v.impronta)) return null;
    return { nome: v.nome, sale: v.sale, impronta: v.impronta, ...date, dati: pulisciTutto(v.dati) };
  }
  function profili() {
    const p = leggi(PROFILI, {}), out = {};
    if (oggetto(p)) for (const [id, v] of Object.entries(p).slice(0, 100)) { const valido = profiloValido(id, v); if (valido) out[id] = valido; }
    return out;
  }
  const salvaProfili = p => LS.setItem(PROFILI, JSON.stringify(p)); // errore esplicito: non fingere di salvare se la memoria è piena
  const attivo = () => {
    if (!sessione || sessione.scade <= Date.now()) return null;
    const p = profili()[sessione.id]; return p?.v === 2 && p.sale === sessione.sale ? { id: sessione.id, ...p } : null;
  };
  async function chiaveDa(p, codice) {
    const bytes = new TextEncoder();
    const materiale = await crypto.subtle.importKey('raw', bytes.encode(p.normalizza ? codice.toLowerCase() : codice), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt: bytes.encode(`${p.sale}:${p.nome.toLowerCase()}`), iterations: ITERAZIONI }, materiale, { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
  }
  const parametri = (p, iv) => ({ name: 'AES-GCM', iv, additionalData: new TextEncoder().encode(JSON.stringify([2, p.nome.toLowerCase(), p.sale, p.normalizza])), tagLength: 128 });
  async function cifra(p, chiave, dati) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const testo = JSON.stringify(pulisciTutto(dati));
    const bytes = new TextEncoder().encode(testo);
    if (bytes.byteLength > 100000) throw new Error('Profilo troppo grande');
    const cifrato = byte64(await crypto.subtle.encrypt(parametri(p, iv), chiave, bytes));
    return { v: 2, nome: p.nome, sale: p.sale, normalizza: p.normalizza, creato: p.creato || oggi(), aggiornato: oggi(), iv: byte64(iv), cifrato };
  }
  async function decifra(p, chiave) {
    const testo = await crypto.subtle.decrypt(parametri(p, da64(p.iv)), chiave, da64(p.cifrato));
    return pulisciTutto(JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(testo)));
  }
  async function apri(p, codice) {
    if (p.v === 2) { const chiave = await chiaveDa(p, codice); return { p, chiave, dati: await decifra(p, chiave) }; }
    // STUDIO1 usava codici senza distinzione tra maiuscole/minuscole e PBKDF2 a 300000 iterazioni.
    if (!CODICE_VECCHIO.test(codice)) throw new Error('Codice non valido');
    const bytes = new TextEncoder();
    const materiale = await crypto.subtle.importKey('raw', bytes.encode(codice.toLowerCase()), 'PBKDF2', false, ['deriveBits']);
    const impronta = esa(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: bytes.encode(`${p.sale}:${p.nome.toLowerCase()}`), iterations: 300000 }, materiale, 256));
    if (impronta !== p.impronta) throw new Error('Codice non valido');
    const nuovo = { v: 2, nome: p.nome, sale: nuovoSale(), normalizza: true, creato: p.creato || oggi() };
    const chiave = await chiaveDa(nuovo, codice);
    return { p: await cifra(nuovo, chiave, p.dati), chiave, dati: p.dati };
  }
  async function attiva(p, chiave, dati) {
    const record = { id: p.nome.toLowerCase(), chiave: byte64(await crypto.subtle.exportKey('raw', chiave)), scade: Date.now() + DURATA_SESSIONE };
    sessionStorage.setItem(SESSIONE, JSON.stringify(record)); // la chiave resta nella sessione della scheda, mai in localStorage
    sessione = { id: record.id, chiave, sale: p.sale, scade: record.scade };
    ripristina(dati); ultimoStato = statoDati(fotografa());
    if (ultimoStato !== statoDati(pulisciTutto(dati))) { chiudiSessione(); throw new Error('Memoria della sessione piena'); }
  }
  function salva() {
    const a = attivo(); if (!a) return Promise.resolve();
    const dati = fotografa(), stato = statoDati(dati), s = sessione;
    if (stato === ultimoStato) return coda;
    const operazione = coda.catch(() => {}).then(async () => {
      const nuovo = await cifra(a, s.chiave, dati);
      const p = profili();
      if (sessione !== s || p[a.id]?.sale !== a.sale) return; // un'altra scheda può aver cambiato codice durante la cifratura
      p[a.id] = nuovo; salvaProfili(p); ultimoStato = stato;
    });
    coda = operazione; return operazione;
  }
  function chiudiSessione() {
    const keys = []; for (let i = 0; i < sessionStorage.length; i++) { const k = sessionStorage.key(i); if (k && DI_PROFILO(k)) keys.push(k); }
    keys.forEach(k => sessionStorage.removeItem(k)); sessionStorage.removeItem(SESSIONE); sessione = null; ultimoStato = ''; togli(ATTIVO);
  }
  async function esci() { await salva(); chiudiSessione(); }
  const ERR = {
    nome: t('Il nome utente deve avere da 3 a 20 caratteri, solo lettere e numeri.', 'The username must have 3 to 20 characters, letters and numbers only.'),
    codice: t('Per un nuovo profilo scegli da 12 a 128 caratteri. Maiuscole, minuscole, spazi e simboli sono distinti. I vecchi codici restano validi per accedere.', 'For a new profile choose 12 to 128 characters. Case, spaces and symbols are significant. Old codes remain valid for signing in.'),
    esiste: t('Questo nome utente esiste già: scegline un altro oppure accedi.', 'This username already exists: choose another one or sign in.'),
    manca: t('In questo browser non c’è un profilo con questo nome utente.', 'There is no profile with this username in this browser.'),
    sbagliato: t('Il codice non è giusto o il profilo non è leggibile.', 'The code is not right or the profile cannot be read.'),
    trasferimento: t('Il codice di trasferimento non è valido: copialo per intero.', 'The transfer code is not valid: copy all of it.'),
    corrisponde: t('Il codice non corrisponde oppure il trasferimento è danneggiato.', 'The code does not match or the transfer is damaged.'),
    altro: t('In questo browser c’è già un altro profilo con questo nome utente e un codice diverso.', 'This browser already has a profile with this username and a different code.'),
    conferma: t('I due nuovi codici non coincidono.', 'The two new codes do not match.'),
    limite: t('Questo browser contiene già 100 profili: elimina quelli inutilizzati.', 'This browser already contains 100 profiles: delete unused ones.')
  };
  function controlla(azione, nome, codice) {
    if (!VALIDO_NOME.test(nome)) return ERR.nome;
    const p = profili(), esiste = Object.hasOwn(p, nome.toLowerCase());
    if (azione === 'crea' && !CODICE_NUOVO.test(codice)) return ERR.codice;
    if (azione !== 'crea' && (!stringa(codice, 128) || !codice.length)) return ERR.sbagliato;
    if (azione === 'crea' && esiste) return ERR.esiste;
    if (azione === 'crea' && Object.keys(p).length >= 100) return ERR.limite;
    if (azione === 'accedi' && !esiste) return ERR.manca;
    return '';
  }
  async function accedi(nome, codice) {
    const e = controlla('accedi', nome, codice); if (e) return e;
    const id = nome.toLowerCase(); let aperto;
    try { aperto = await apri(profili()[id], codice); } catch { return ERR.sbagliato; }
    if (attivo()?.id === id) return '';
    if (attivo()) await esci();
    const dati = unisci(aperto.dati, fotografa());
    const p = profili(); p[id] = await cifra(aperto.p, aperto.chiave, dati); salvaProfili(p);
    svuota(); await attiva(p[id], aperto.chiave, dati); return '';
  }
  async function crea(nome, codice) {
    const e = controlla('crea', nome, codice); if (e) return e;
    const id = nome.toLowerCase(), nuovo = { v: 2, nome, sale: nuovoSale(), normalizza: false, creato: oggi() }, chiave = await chiaveDa(nuovo, codice);
    if (Object.hasOwn(profili(), id)) return ERR.esiste;
    if (attivo()) await esci();
    const dati = fotografa(), p = profili(); p[id] = await cifra(nuovo, chiave, dati); salvaProfili(p);
    svuota(); await attiva(p[id], chiave, dati); return '';
  }
  async function cambiaCodice(attuale, codice, conferma) {
    if (!CODICE_NUOVO.test(codice)) return ERR.codice;
    if (codice !== conferma) return ERR.conferma;
    const a = attivo(); if (!a) return ERR.manca;
    try { await apri(a, attuale); } catch { return ERR.sbagliato; }
    await salva();
    const dati = fotografa(), nuovo = { v: 2, nome: a.nome, sale: nuovoSale(), normalizza: false, creato: a.creato }, chiave = await chiaveDa(nuovo, codice);
    const p = profili(); p[a.id] = await cifra(nuovo, chiave, dati); salvaProfili(p); await attiva(p[a.id], chiave, dati); return '';
  }
  async function elimina() { const a = attivo(); if (!a) return; await coda.catch(() => {}); const p = profili(); delete p[a.id]; salvaProfili(p); chiudiSessione(); }
  async function codiceTrasferimento() {
    await salva(); const a = attivo(); if (!a) return '';
    const codice = 'STUDIO2.' + b64.da(JSON.stringify(profili()[a.id]));
    if (codice.length > MAX_TRASFERIMENTO) throw new Error('Profilo troppo grande per il trasferimento');
    return codice;
  }
  async function importa(testo, codice) {
    const s = String(testo).replace(/\s+/g, '');
    if (!s || s.length > MAX_TRASFERIMENTO || !stringa(codice, 128) || !codice.length) return ERR.trasferimento;
    let p;
    try {
      if (s.startsWith('STUDIO2.')) { const o = JSON.parse(b64.a(s.slice(8))); p = profiloValido(String(o.nome || '').toLowerCase(), o); if (p?.v !== 2) return ERR.trasferimento; }
      else if (s.startsWith('STUDIO1.')) { const o = JSON.parse(b64.a(s.slice(8))); if (!oggetto(o) || !oggetto(o.d)) return ERR.trasferimento; p = profiloValido(String(o.n || '').toLowerCase(), { nome: o.n, sale: o.s, impronta: o.i, creato: o.c, dati: o.d }); }
      else return ERR.trasferimento;
    } catch { return ERR.trasferimento; }
    if (!p) return ERR.trasferimento;
    const id = p.nome.toLowerCase(), esistente = profili()[id]; let aperto, precedente = {};
    if (!esistente && Object.keys(profili()).length >= 100) return ERR.limite;
    try { aperto = await apri(p, codice); } catch { return ERR.corrisponde; }
    if (esistente) { try { precedente = (await apri(esistente, codice)).dati; } catch { return ERR.altro; } }
    if (attivo()) await esci();
    const dati = unisci(unisci(precedente, aperto.dati), fotografa()), q = profili();
    q[id] = await cifra(aperto.p, aperto.chiave, dati); salvaProfili(q); svuota(); await attiva(q[id], aperto.chiave, dati); return '';
  }
  async function riprendiSessione() {
    // Il vecchio profilo attivo si blocca, preservando l'ultima copia dei progressi fino alla migrazione al prossimo accesso.
    const vecchio = leggi(ATTIVO), p = profili();
    if (typeof vecchio === 'string' && Object.hasOwn(p, vecchio) && p[vecchio].v !== 2) {
      p[vecchio].dati = unisci(p[vecchio].dati, fotografa()); salvaProfili(p); svuota();
    }
    togli(ATTIVO);
    try {
      const s = JSON.parse(sessionStorage.getItem(SESSIONE) || 'null');
      if (!s) return;
      if (!p[s.id] || p[s.id].v !== 2 || !Number.isFinite(s.scade) || s.scade <= Date.now() || s.scade > Date.now() + DURATA_SESSIONE || !/^[A-Za-z0-9_-]{43}$/.test(s.chiave)) { chiudiSessione(); return; }
      const chiave = await crypto.subtle.importKey('raw', da64(s.chiave), { name: 'AES-GCM' }, true, ['encrypt', 'decrypt']);
      const dati = await decifra(p[s.id], chiave);
      sessione = { id: s.id, chiave, sale: p[s.id].sale, scade: s.scade }; ripristina({ ...dati, ...fotografa() }); ultimoStato = statoDati(dati);
      await salva();
    } catch { chiudiSessione(); }
  }
  await riprendiSessione();

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
  const AVVISO = t('<strong>Serve solo a tenere traccia dei tuoi progressi.</strong> Non inserire dati sensibili: niente nome e cognome, email, numero di matricola o password che usi altrove. Scegli un nome utente di fantasia e un codice lungo e unico che ricordi.',
    '<strong>This only keeps track of your progress.</strong> Do not enter sensitive data: no real name, email, student ID or passwords you use elsewhere. Pick a made-up username and a long, unique code that you can remember.');
  const NOTA = t('Il profilo resta in questo browser (non c\'è nessun server) e vale per tutti i siti: appunti e guida all\'OFA, in italiano e in inglese. Gli archivi e i trasferimenti sono cifrati. La sessione si blocca dopo 30 minuti senza attività. Conserva il codice: senza non si può recuperare il profilo.',
    'The profile stays in this browser (there is no server) and works on all the sites: the notes and the OFA guide, in Italian and in English. Profile archives and transfers are encrypted. The session locks after 30 minutes without activity. Keep your code: a profile cannot be recovered without it.');
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
<label>${t('Codice', 'Code')} <small>${t('nuovi profili: 12–128 caratteri; i vecchi codici restano validi', 'new profiles: 12–128 characters; old codes remain valid')}</small><input type="password" name="codice" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="128" required></label>
<p class="studio-errore" role="alert">${esc(errore)}</p>
<div class="studio-azioni"><button type="submit" class="studio-primario" value="accedi">${t('Accedi', 'Sign in')}</button><button type="submit" value="crea">${t('Crea profilo', 'Create profile')}</button></div>
</form>
${altri ? `<p class="studio-nota">${t('Profili in questo browser', 'Profiles in this browser')}: <span class="studio-chips">${altri}</span></p>` : ''}
<p class="studio-nota">${NOTA}</p>
<details class="studio-importa"><summary>${t('Importa un profilo da un altro dispositivo', 'Import a profile from another device')}</summary>
<form class="studio-form" data-importa novalidate><label>${t('Codice di trasferimento', 'Transfer code')}<textarea name="testo" rows="3" maxlength="200000" spellcheck="false"></textarea></label>
<label>${t('Codice del profilo', 'Profile code')}<input type="password" name="codice" autocomplete="off" maxlength="128"></label>
<div class="studio-azioni"><button type="submit" value="importa">${t('Importa', 'Import')}</button></div></form></details>`;
    } else {
      finestra.innerHTML = `<button type="button" class="studio-chiudi" aria-label="${t('Chiudi', 'Close')}">×</button>
<div class="studio-testa"><span class="studio-iniziale" aria-hidden="true">${esc(a.nome[0].toUpperCase())}</span><div><h2 id="studio-titolo">${t('Ciao', 'Hi')}, ${esc(a.nome)}</h2><p class="studio-nota">${t('Profilo creato il', 'Profile created on')} ${esc(a.creato)} · ${t('resta in questo browser', 'stays in this browser')}</p></div></div>
${riepilogo()}
<p class="studio-errore" role="alert">${esc(errore)}</p>
<div class="studio-azioni"><button type="button" data-azione="trasferisci">${t('Codice di trasferimento', 'Transfer code')}</button><button type="button" data-azione="esci">${t('Esci', 'Sign out')}</button><button type="button" class="studio-link" data-azione="elimina">${t('Elimina il profilo', 'Delete the profile')}</button></div>
<div class="studio-trasferimento" hidden><p class="studio-nota">${t('Sull\'altro dispositivo apri «Accedi» → «Importa un profilo», incolla questo codice e scrivi il codice del profilo. Contiene i progressi cifrati: tienilo insieme al codice solo in un posto sicuro.', 'On the other device open “Sign in” → “Import a profile”, paste this code and type your profile code. It contains encrypted progress: keep it together with the profile code only in a safe place.')}</p><textarea readonly rows="3"></textarea><button type="button" data-azione="copia">${t('Copia', 'Copy')}</button></div>
<details class="studio-importa"><summary>${t('Cambia il codice del profilo', 'Change the profile code')}</summary>
${a.normalizza ? `<p class="studio-nota">${t('Il tuo vecchio codice funziona ancora: scegline uno nuovo e lungo per rafforzare la cifratura.', 'Your old code still works: choose a new, long one to strengthen encryption.')}</p>` : ''}
<form class="studio-form" data-cambia novalidate>
<label>${t('Codice attuale', 'Current code')}<input type="password" name="attuale" autocomplete="off" maxlength="128" required></label>
<label>${t('Nuovo codice (12–128 caratteri)', 'New code (12–128 characters)')}<input type="password" name="codice" autocomplete="new-password" minlength="12" maxlength="128" required></label>
<label>${t('Ripeti il nuovo codice', 'Repeat the new code')}<input type="password" name="conferma" autocomplete="new-password" minlength="12" maxlength="128" required></label>
<div class="studio-azioni"><button type="submit" value="cambia">${t('Salva il nuovo codice', 'Save the new code')}</button></div></form></details>
<p class="studio-nota">${t('Serve solo a tenere traccia dei progressi: non inserire dati sensibili.', 'It only keeps track of your progress: do not enter sensitive data.')}</p>`;
    }
  }
  const dopo = () => { finestra.close(); location.reload(); };
  finestra.addEventListener('click', async e => {
    const b = e.target.closest('button'); if (!b) { if (e.target === finestra) finestra.close(); return; }
    if (b.classList.contains('studio-chiudi')) { finestra.close(); return; }
    if (b.dataset.nome) { const i = finestra.querySelector('input[name="nome"]'); i.value = b.dataset.nome; finestra.querySelector('input[name="codice"]').focus(); return; }
    const azione = b.dataset.azione;
    if (!azione || occupato) return;
    occupato = true; b.disabled = true;
    try {
      if (azione === 'esci') { await esci(); dopo(); }
      else if (azione === 'elimina') { if (confirm(t('Eliminare il profilo e i suoi progressi da questo browser? Non si può annullare.', 'Delete the profile and its progress from this browser? This cannot be undone.'))) { await elimina(); dopo(); } }
      else if (azione === 'trasferisci') { const box = finestra.querySelector('.studio-trasferimento'); box.querySelector('textarea').value = await codiceTrasferimento(); box.hidden = false; box.querySelector('textarea').select(); }
      else if (azione === 'copia') { const ta = finestra.querySelector('.studio-trasferimento textarea'); ta.select();
        if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(ta.value); else if (!document.execCommand('copy')) return;
        b.textContent = t('Copiato', 'Copied');
      }
    } catch { mostraErrore(t('Non è stato possibile salvare o copiare. Controlla che la memoria del browser sia disponibile e riprova.', 'Could not save or copy. Check that browser storage is available and try again.')); }
    finally { occupato = false; b.disabled = false; }
  });
  const mostraErrore = err => { const p = finestra.querySelector('.studio-errore'); if (p) p.textContent = err; else disegna(err); };
  let occupato = false;
  finestra.addEventListener('submit', async e => {
    e.preventDefault();
    if (occupato) return;
    const f = e.target, valore = e.submitter?.value === 'crea' ? 'crea' : 'accedi', importaQui = f.dataset.importa !== undefined, cambiaQui = f.dataset.cambia !== undefined;
    const nome = importaQui || cambiaQui ? '' : f.nome.value.trim(), codice = f.codice.value;
    const subito = importaQui || cambiaQui ? '' : controlla(valore, nome, codice);
    if (subito) { mostraErrore(subito); return; }
    if (!window.crypto?.subtle) { mostraErrore(t('Il profilo funziona solo sul sito (https).', 'Profiles only work on the website (https).')); return; }
    occupato = true;
    const bottoni = [...finestra.querySelectorAll('button[type="submit"]')];
    bottoni.forEach(b => { b.disabled = true; });
    let err = '';
    try { err = cambiaQui ? await cambiaCodice(f.attuale.value, codice, f.conferma.value) : importaQui ? await importa(f.testo.value, codice) : await (valore === 'crea' ? crea : accedi)(nome, codice); }
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

  // Ogni variazione viene cifrata subito; logout e trasferimento attendono il salvataggio.
  const salvaInBackground = () => { salva().catch(() => mostraErrore(t('Salvataggio non riuscito: libera spazio nel browser prima di uscire.', 'Saving failed: free up browser storage before signing out.'))); };
  document.addEventListener('change', salvaInBackground);
  document.addEventListener('input', e => { if (!e.target.closest('.studio')) salvaInBackground(); });
  document.addEventListener('click', e => { if (!e.target.closest('.studio')) salvaInBackground(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) salvaInBackground(); });
  window.addEventListener('pagehide', salvaInBackground);
  const rinnova = () => {
    if (!attivo()) return;
    sessione.scade = Date.now() + DURATA_SESSIONE;
    try { const s = JSON.parse(sessionStorage.getItem(SESSIONE)); s.scade = sessione.scade; sessionStorage.setItem(SESSIONE, JSON.stringify(s)); } catch { /* il controllo periodico blocca una sessione non valida */ }
  };
  ['pointerdown', 'keydown'].forEach(evento => document.addEventListener(evento, rinnova, { passive: true }));
  setInterval(() => {
    if (sessione && (!attivo() || !sessionStorage.getItem(SESSIONE))) { chiudiSessione(); location.reload(); }
  }, 10000);
  window.addEventListener('storage', e => { if (e.key === PROFILI && sessione && !attivo()) { chiudiSessione(); location.reload(); } });

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
