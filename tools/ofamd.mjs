// Markdown del sito OFA → HTML.
// Oltre al Markdown normale capisce: formule $…$ e $$…$$ (KaTeX), riquadri "> [!TIPO] titolo",
// esercizi "::: esercizio livello titolo / ::: soluzione / :::", e i blocchi ```quiz, ```simulazione,
// ```grafico, ```retta, ```checklist. La sintassi completa è in ai/FORMATO.md.
import { Marked } from 'marked';
import katex from 'katex';
import yaml from 'js-yaml';

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const MACRO = { '\\R': '\\mathbb{R}', '\\N': '\\mathbb{N}', '\\Z': '\\mathbb{Z}', '\\Q': '\\mathbb{Q}', '\\C': '\\mathbb{C}' };

export const RIQUADRI = {
  DEF: 'Definizione', PROP: 'Regola', METODO: 'Metodo', ESEMPIO: 'Esempio',
  TRAPPOLA: 'Errore frequente', TEST: 'Nella prova', NOTA: 'Nota',
};
const LIVELLI = { base: 'Base', medio: 'Medio', test: 'Livello prova' };
// etichette dell'interfaccia nelle due lingue del sito (compila(…, { lingua: 'en' }) per la versione inglese)
const ETICHETTE = {
  it: { riquadri: RIQUADRI, livelli: LIVELLI, esercizio: 'Esercizio', soluzione: 'Soluzione', risposta: 'La tua risposta', numerica: 'Risposta numerica',
    multipla: 'Una o più risposte giuste', verifica: 'Verifica', correggi: 'Correggi il test', simulazione: 'Simulazione',
    simInfo: '5 domande · 45 minuti · sufficienza 6/10 · senza calcolatrice' },
  en: { riquadri: { DEF: 'Definition', PROP: 'Rule', METODO: 'Method', ESEMPIO: 'Example', TRAPPOLA: 'Common mistake', TEST: 'In the test', NOTA: 'Note' },
    livelli: { base: 'Basic', medio: 'Intermediate', test: 'Test level' }, esercizio: 'Exercise', soluzione: 'Solution', risposta: 'Your answer',
    numerica: 'Numeric answer', multipla: 'One or more correct answers', verifica: 'Check', correggi: 'Mark the test', simulazione: 'Mock test',
    simInfo: '5 questions · 45 minutes · pass mark 6/10 · no calculator' },
};
let virgola = true;   // separatore decimale dei numeri sugli assi: virgola in italiano, punto in inglese
const NUMERATI = new Set(['DEF', 'PROP', 'ESEMPIO']);   // numerati per modulo, come in un libro: «Definizione 3.2»

/* ---------- espressioni matematiche per grafici e rette (parser di Pratt) ---------- */

const FUNZIONI = {
  sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs, exp: Math.exp, ln: Math.log, log10: Math.log10, log2: Math.log2,
  sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan,
  floor: Math.floor, sign: Math.sign, log: (b, x) => Math.log(x) / Math.log(b),
};
const COSTANTI = { pi: Math.PI, 'π': Math.PI, e: Math.E };

export function compilaEspressione(src, variabili = ['x']) {
  const tok = [];
  const re = /\s*(?:(\d+(?:[.,]\d+)?|[.,]\d+)|([A-Za-zπ_]\w*)|(\*\*|[-+*/^(),]))/y;
  let pos = 0;
  src = String(src).trim();
  while (pos < src.length) {
    re.lastIndex = pos;
    const m = re.exec(src);
    if (!m) throw new Error(`carattere inatteso «${src[pos]}» in «${src}»`);
    pos = re.lastIndex;
    if (m[1] !== undefined) tok.push({ t: 'num', v: parseFloat(m[1].replace(',', '.')) });
    else if (m[2] !== undefined) tok.push({ t: 'id', v: m[2] });
    else tok.push({ t: 'op', v: m[3] === '**' ? '^' : m[3] });
  }
  let i = 0;
  const vedi = () => tok[i];
  const prendi = () => tok[i++];
  const inizioOperando = k => k && (k.t === 'num' || k.t === 'id' || (k.t === 'op' && k.v === '('));
  const PREC = { '+': 10, '-': 10, '*': 20, '/': 20, '^': 30 };
  function prefisso() {
    const k = prendi();
    if (!k) throw new Error(`espressione incompleta: «${src}»`);
    if (k.t === 'num') return () => k.v;
    if (k.t === 'op' && (k.v === '-' || k.v === '+')) {
      const a = espr(25);
      return k.v === '-' ? v => -a(v) : a;
    }
    if (k.t === 'op' && k.v === '(') {
      const a = espr(0);
      const c = prendi();
      if (!c || c.v !== ')') throw new Error(`manca una «)» in «${src}»`);
      return a;
    }
    if (k.t === 'id') {
      if (variabili.includes(k.v)) { const n = k.v; return v => v[n]; }
      if (k.v in COSTANTI) { const c = COSTANTI[k.v]; return () => c; }
      if (k.v in FUNZIONI) {
        const f = FUNZIONI[k.v];
        const a = vedi();
        if (!a || a.v !== '(') throw new Error(`dopo «${k.v}» ci vuole «(» in «${src}»`);
        prendi();
        const argomenti = [espr(0)];
        while (vedi() && vedi().v === ',') { prendi(); argomenti.push(espr(0)); }
        const c = prendi();
        if (!c || c.v !== ')') throw new Error(`manca una «)» dopo gli argomenti di ${k.v} in «${src}»`);
        return v => f(...argomenti.map(g => g(v)));
      }
      throw new Error(`nome sconosciuto «${k.v}» in «${src}» (variabili: ${variabili.join(', ')})`);
    }
    throw new Error(`«${k.v}» fuori posto in «${src}»`);
  }
  function espr(minimo) {
    let sx = prefisso();
    for (;;) {
      const k = vedi();
      if (!k) break;
      let op;
      if (k.t === 'op' && k.v in PREC) op = k.v;
      else if (inizioOperando(k)) op = '*';        // moltiplicazione implicita: 2x, 3(x+1), x sin(x)
      else break;
      const p = PREC[op];
      if (p < minimo || (p === minimo && op !== '^')) break;
      if (k.t === 'op' && k.v === op) prendi();
      const dx = espr(op === '^' ? p : p + 1);
      const a = sx;
      sx = op === '+' ? v => a(v) + dx(v) : op === '-' ? v => a(v) - dx(v) : op === '*' ? v => a(v) * dx(v)
        : op === '/' ? v => a(v) / dx(v) : v => Math.pow(a(v), dx(v));
    }
    return sx;
  }
  const f = espr(0);
  if (i < tok.length) throw new Error(`avanzo «${tok[i].v}» in «${src}»`);
  return f;
}

const numero = s => compilaEspressione(s, [])({});

/* ---------- utilità ---------- */

function hash(s) {
  let h = 2166136261;
  for (const c of s) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mescola(arr, seme) {
  let x = seme || 1;
  const casuale = () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return (x >>> 0) / 4294967296; };
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(casuale() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
export function slug(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/§[A-Z]\d+§/g, '')
    .replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'sezione';
}
const fmt = v => {
  if (Math.abs(v - Math.round(v)) < 1e-9) return String(Math.round(v)).replace('-', '−');
  return String(+v.toFixed(3)).replace('.', virgola ? ',' : '.').replace('-', '−');
};

/* ---------- contesto di una pagina ---------- */

function nuovoContesto(file) {
  return {
    file, errori: [], avvisi: [], formule: [], blocchi: [], toc: [], ids: new Set(),
    n: { esercizio: 0, quiz: 0, sim: 0, grafico: 0, retta: 0, check: 0, domande: 0, riquadro: 0 }, riquadri: [], sezione: '',
    profondita: 0, righeOrigine: [],
    errore(riga, msg) { this.errori.push(`${this.file}:${riga ?? '?'}: ${msg}`); },
    avviso(riga, msg) { this.avvisi.push(`${this.file}:${riga ?? '?'}: ${msg}`); },
  };
}
function rigaDi(ctx, pezzo) {
  const i = ctx.righeOrigine.findIndex(r => r.includes(pezzo));
  return i < 0 ? '?' : i + 1;
}

/* ---------- formule ---------- */

function proteggi(testo, ctx) {
  let s = testo.replace(/\\\$/g, '§DOLLARO§');
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    ctx.formule.push({ tex: tex.trim(), display: true });
    return `\n\n§D${ctx.formule.length - 1}§\n\n`;
  });
  s = s.replace(/(?<![\\$])\$(?![\s$])((?:[^$\n\\]|\\.)+?)(?<![\s\\])\$(?!\$)/g, (_, tex) => {
    ctx.formule.push({ tex, display: false });
    return `§M${ctx.formule.length - 1}§`;
  });
  if (/(?<!§DOLLARO)\$/.test(s.replace(/§DOLLARO§/g, ''))) {
    const r = s.split('\n').find(l => l.replace(/§DOLLARO§/g, '').includes('$')) || '';
    const pezzo = r.split(/§[DMB]\d+§/).find(t => t.includes('$')) || r;
    ctx.errore(rigaDi(ctx, pezzo.trim().slice(0, 40)), `simbolo $ spaiato o formula con spazio dopo il $ iniziale / prima del $ finale: «${r.replace(/§[DMB]\d+§/g, '…').trim().slice(0, 90)}»`);
  }
  return s;
}
function formula(ctx, i) {
  const f = ctx.formule[i];
  if (f.html) return f.html;
  try {
    f.html = katex.renderToString(f.tex, { displayMode: f.display, throwOnError: true, strict: 'ignore', output: 'htmlAndMathml', macros: { ...MACRO } });
  } catch (e) {
    ctx.errore(rigaDi(ctx, f.tex.slice(0, 30)), `formula non valida «${f.tex}»: ${e.message.replace(/^KaTeX parse error: /, '')}`);
    f.html = `<code class="formula-errata">${esc(f.tex)}</code>`;
  }
  return f.html;
}
function ripristina(html, ctx) {
  html = html.replace(/<p>\s*§D(\d+)§\s*<\/p>/g, (_, i) => `<div class="formula">${formula(ctx, +i)}</div>`);
  html = html.replace(/§D(\d+)§/g, (_, i) => `<div class="formula">${formula(ctx, +i)}</div>`);
  html = html.replace(/§M(\d+)§/g, (_, i) => formula(ctx, +i));
  html = html.replace(/<p>\s*§B(\d+)§\s*<\/p>/g, (_, i) => ctx.blocchi[+i]);
  html = html.replace(/§B(\d+)§/g, (_, i) => ctx.blocchi[+i]);
  return html.replace(/§DOLLARO§/g, '$');
}

/* ---------- Markdown ---------- */

function creaMarked(ctx) {
  const m = new Marked({ gfm: true, breaks: false });
  m.use({
    renderer: {
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens);
        if (depth === 1) ctx.errore(rigaDi(ctx, text.slice(0, 30)), 'niente titoli con un solo # (il titolo della pagina viene dal frontmatter)');
        let id = slug(text);
        while (ctx.ids.has(id)) id += '-2';
        ctx.ids.add(id);
        if (ctx.profondita === 0 && (depth === 2 || depth === 3)) ctx.toc.push({ livello: depth, id, html: inner });
        else if (ctx.profondita > 0 && depth <= 3) ctx.avviso(rigaDi(ctx, text.slice(0, 30)), `titolo «${text}» dentro un riquadro o esercizio: usa il grassetto`);
        return `<h${depth} id="${id}"><a class="ancora" href="#${id}" aria-hidden="true" tabindex="-1">#</a>${inner}</h${depth}>\n`;
      },
      table(token) {
        const cella = (c, tag) => `<${tag}${c.align ? ` style="text-align:${c.align}"` : ''}>${this.parser.parseInline(c.tokens)}</${tag}>`;
        const testa = `<tr>${token.header.map(c => cella(c, 'th')).join('')}</tr>`;
        const corpo = token.rows.map(r => `<tr>${r.map(c => cella(c, 'td')).join('')}</tr>`).join('\n');
        return `<div class="tabella"><table><thead>${testa}</thead><tbody>${corpo}</tbody></table></div>\n`;
      },
      link({ href, title, tokens }) {
        const inner = this.parser.parseInline(tokens);
        // solo https, mailto, pagine del sito (sito:) e percorsi relativi; «www.…» scritto nel testo diventa un link https
        const url = href.replace(/^http:\/\//i, 'https://');
        if (/^[a-z][a-z0-9+.-]*:/i.test(url) && !/^(https|mailto|sito):/i.test(url)) throw new Error(`link non permesso: «${href}» (solo https, mailto, sito: o percorsi relativi)`);
        const esterno = /^https:/i.test(url);
        return `<a href="${esc(url)}"${title ? ` title="${esc(title)}"` : ''}${esterno ? ' target="_blank" rel="noopener" class="esterno"' : ''}>${inner}</a>`;
      },
    },
  });
  return m;
}

function inLinea(testo, ctx) {
  const m = creaMarked(ctx);
  return ripristina(m.parseInline(proteggi(testo, ctx)), ctx);
}

function blocco(ctx, html) {
  ctx.blocchi.push(html);
  return `\n\n§B${ctx.blocchi.length - 1}§\n\n`;
}

function markdown(testo, ctx) {
  const righe = testo.split(/\r?\n/);
  const out = [];
  for (let i = 0; i < righe.length; i++) {
    const r = righe[i];
    let m;
    if (ctx.profondita === 0 && /^##\s/.test(r)) ctx.sezione = r.replace(/^##\s+/, '').trim();
    if ((m = r.match(/^```\s*(quiz|simulazione|grafico|retta|checklist)\b\s*(.*)$/))) {
      const inizio = i;
      const corpo = [];
      for (i++; i < righe.length && !/^```\s*$/.test(righe[i]); i++) corpo.push(righe[i]);
      if (i >= righe.length) ctx.errore(rigaDi(ctx, r), `blocco \`\`\`${m[1]} non chiuso`);
      const f = { quiz: bloccoQuiz, simulazione: bloccoSimulazione, grafico: bloccoGrafico, retta: bloccoRetta, checklist: bloccoChecklist }[m[1]];
      try { out.push(blocco(ctx, f(corpo, ctx, m[2].trim(), rigaDi(ctx, r) + 1))); }
      catch (e) { ctx.errore(rigaDi(ctx, r) + 1, `${m[1]}: ${e.message}`); }
      void inizio;
      continue;
    }
    if (/^```/.test(r)) {                        // blocco di codice normale: lo lascio com'è
      out.push(r);
      for (i++; i < righe.length && !/^```\s*$/.test(righe[i]); i++) out.push(righe[i]);
      if (i < righe.length) out.push(righe[i]);
      continue;
    }
    if ((m = r.match(/^:::\s*esercizio\b\s*(\S*)\s*(.*)$/))) {
      const riga = rigaDi(ctx, r);
      const testoEs = [], sol = [];
      let dove = testoEs;
      for (i++; i < righe.length && !/^:::\s*$/.test(righe[i]); i++) {
        if (/^:::\s*soluzione\s*$/.test(righe[i])) { dove = sol; continue; }
        if (/^:::/.test(righe[i])) { ctx.errore(riga, `dentro un esercizio c'è «${righe[i].trim()}»: chiudi prima l'esercizio con «:::»`); }
        dove.push(righe[i]);
      }
      if (i >= righe.length) ctx.errore(riga, 'esercizio non chiuso con «:::»');
      let livello = m[1], titolo = m[2];
      if (!(livello in LIVELLI)) { ctx.errore(riga, `livello «${livello}» sconosciuto (base, medio, test)`); titolo = `${livello} ${titolo}`.trim(); livello = 'base'; }
      if (!sol.join('').trim()) ctx.errore(riga, 'esercizio senza «::: soluzione»');
      out.push(blocco(ctx, esercizio(ctx, livello, titolo, testoEs.join('\n'), sol.join('\n'))));
      continue;
    }
    if ((m = r.match(/^>\s*\[!([A-Za-zÀ-ú]+)\]\s*(.*)$/))) {
      const riga = rigaDi(ctx, r);
      const tipo = m[1].toUpperCase();
      const corpo = [];
      for (i++; i < righe.length && /^>/.test(righe[i]); i++) corpo.push(righe[i].replace(/^>\s?/, ''));
      i--;
      if (!(tipo in RIQUADRI)) ctx.errore(riga, `riquadro [!${m[1]}] sconosciuto: usa ${Object.keys(RIQUADRI).join(', ')}`);
      out.push(blocco(ctx, riquadro(ctx, tipo, m[2], corpo.join('\n'))));
      continue;
    }
    if (/^:::/.test(r)) ctx.errore(rigaDi(ctx, r), `«${r.trim()}» fuori posto (gli esercizi iniziano con «::: esercizio livello titolo»)`);
    out.push(r);
  }
  const m = creaMarked(ctx);
  return ripristina(m.parse(proteggi(out.join('\n'), ctx)), ctx);
}

function dentro(ctx, testo) {
  ctx.profondita++;
  try { return markdown(testo, ctx); } finally { ctx.profondita--; }
}

function riquadro(ctx, tipo, titolo, corpo) {
  const n = ++ctx.n.riquadro;
  const t = titolo ? ` <span class="rq-titolo">${inLinea(titolo, ctx)}</span>` : '';
  let etichetta = ctx.T.riquadri[tipo] || tipo;
  if (NUMERATI.has(tipo)) {
    ctx.numeri[tipo] = (ctx.numeri[tipo] || 0) + 1;
    etichetta += ` ${ctx.modulo ? ctx.modulo + '.' : ''}${ctx.numeri[tipo]}`;
  }
  const html = `<aside class="rq rq-${tipo.toLowerCase()}" id="r${n}"><div class="rq-testa"><span class="rq-tipo">${etichetta}</span>${t}</div><div class="rq-corpo">${dentro(ctx, corpo)}</div></aside>`;
  ctx.riquadri.push({ tipo, id: `r${n}`, sezione: ctx.sezione, html });
  return html;
}

function esercizio(ctx, livello, titolo, testo, sol) {
  const n = ++ctx.n.esercizio;
  return `<div class="es" id="esercizio-${n}" data-livello="${livello}"><div class="es-testa"><span class="es-num">${ctx.T.esercizio} ${ctx.modulo ? ctx.modulo + '.' : ''}${n}</span><span class="es-livello">${ctx.T.livelli[livello]}</span>${titolo ? `<span class="es-titolo">${inLinea(titolo, ctx)}</span>` : ''}</div>`
    + `<div class="es-testo">${dentro(ctx, testo)}</div><details class="es-sol"><summary><span>${ctx.T.soluzione}</span></summary><div class="es-sol-corpo">${dentro(ctx, sol)}</div></details></div>`;
}

/* ---------- quiz e simulazioni ---------- */

function leggiNumero(s) {
  const m = s.match(/^(.+?)(?:\s*(?:±|\+-|\+\/-)\s*(.+))?$/);
  const valore = s => {
    const t = s.trim().replace(/−/g, '-').replace(',', '.');
    if (/^-?\d+(\.\d+)?\s*\/\s*-?\d+(\.\d+)?$/.test(t)) { const [a, b] = t.split('/').map(Number); return a / b; }
    if (/^-?(\d+(\.\d+)?|\.\d+)$/.test(t)) return Number(t);
    return NaN;
  };
  const v = valore(m[1]), tol = m[2] ? valore(m[2]) : 1e-9;
  if (!Number.isFinite(v) || !Number.isFinite(tol)) throw new Error(`risposta numerica «${s}» non valida: scrivi un intero, un decimale o una frazione, es. «N: -3/4» o «N: 1,5 ± 0,01»`);
  return { v, tol };
}

export function leggiDomande(corpo, riga0 = 1) {
  const domande = [];
  let titolo = '';
  let d = null, p = null, ultimo = null;
  const parteCorrente = () => {
    if (!d) throw new Error(`riga ${riga0}: le opzioni vengono prima di una «D:»`);
    if (!p) { p = { testo: '', opzioni: [], numero: null, spiega: '', riga: d.riga }; d.parti.push(p); }
    return p;
  };
  corpo.forEach((grezza, k) => {
    const r = grezza.replace(/\s+$/, '');
    const riga = riga0 + k;
    let m;
    if (!r.trim()) { ultimo = null; return; }
    if ((m = r.match(/^#\s+(.*)$/))) { titolo = m[1]; ultimo = null; return; }
    if ((m = r.match(/^D(?:\(([^)]*)\))?:\s*(.*)$/))) {
      d = { tag: (m[1] || '').trim(), testo: m[2], parti: [], riga }; p = null; domande.push(d);
      ultimo = t => { d.testo += ' ' + t; }; return;
    }
    if ((m = r.match(/^([a-d])\)\s*(.*)$/)) && d) {
      p = { testo: m[2], opzioni: [], numero: null, spiega: '', riga }; d.parti.push(p);
      const pp = p; ultimo = t => { pp.testo += ' ' + t; }; return;
    }
    if ((m = r.match(/^([+-])\s+(.*)$/))) {
      const pp = parteCorrente(); const o = { testo: m[2], giusta: m[1] === '+' }; pp.opzioni.push(o);
      ultimo = t => { o.testo += ' ' + t; }; return;
    }
    if ((m = r.match(/^N:\s*(.+)$/))) {
      const pp = parteCorrente(); pp.numero = { ...leggiNumero(m[1]), testo: m[1].trim() }; ultimo = null; return;
    }
    if ((m = r.match(/^=\s*(.*)$/))) {
      const pp = parteCorrente(); pp.spiega = m[1]; ultimo = t => { pp.spiega += ' ' + t; }; return;
    }
    if (ultimo) { ultimo(r.trim()); return; }
    throw new Error(`riga ${riga}: non capisco «${r.trim().slice(0, 60)}» (le righe iniziano con D:, a), +, -, N:, =)`);
  });
  for (const d of domande) {
    if (!d.parti.length) throw new Error(`riga ${d.riga}: la domanda «${d.testo.slice(0, 50)}» non ha né opzioni né risposta numerica`);
    for (const p of d.parti) {
      const giuste = p.opzioni.filter(o => o.giusta).length;
      if (p.numero && p.opzioni.length) throw new Error(`riga ${p.riga}: una parte ha sia opzioni sia risposta numerica`);
      if (!p.numero && p.opzioni.length < 2) throw new Error(`riga ${p.riga}: servono almeno 2 opzioni (o una riga N:)`);
      if (!p.numero && !giuste) throw new Error(`riga ${p.riga}: nessuna opzione giusta (segnala con «+»)`);
      if (!p.spiega.trim()) throw new Error(`riga ${p.riga}: manca la spiegazione «= …» per «${(p.testo || d.testo).slice(0, 50)}»`);
      const vf = p.opzioni.length === 2 && p.opzioni.every(o => /^(vero|falso|true|false)$/i.test(o.testo.trim()));
      p.tipo = p.numero ? 'numerica' : vf ? 'vf' : giuste > 1 ? 'multipla' : 'singola';
    }
  }
  return { titolo, domande };
}

function htmlParte(ctx, p, nome, punti, seme) {
  let h = `<div class="q-parte" data-tipo="${p.tipo}" data-punti="${punti}">`;
  if (p.testo) h += `<div class="q-sottotesto">${inLinea(p.testo, ctx)}</div>`;
  if (p.tipo === 'numerica') {
    h += `<div class="q-numero"><input type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="${ctx.T.risposta}" aria-label="${ctx.T.numerica}" data-valore="${p.numero.v}" data-toll="${p.numero.tol}"><span class="q-giusto" hidden>${esc(p.numero.testo.replace(/\s*(±|\+-).*/, ''))}</span></div>`;
  } else {
    if (p.tipo === 'multipla') h += `<div class="q-nota">${ctx.T.multipla}</div>`;
    const ordine = p.tipo === 'vf' ? p.opzioni : mescola(p.opzioni, seme);
    h += '<div class="q-opzioni">' + ordine.map(o => `<label class="opz"><input type="${p.tipo === 'multipla' ? 'checkbox' : 'radio'}" name="${nome}" data-ok="${o.giusta ? 1 : 0}"><span class="opz-segno" aria-hidden="true"></span><span class="opz-testo">${inLinea(o.testo, ctx)}</span></label>`).join('') + '</div>';
  }
  return h + `<div class="q-spiega" hidden>${inLinea(p.spiega, ctx)}</div></div>`;
}

function htmlDomanda(ctx, d, nome, conPunti, azioni) {
  const n = ++ctx.n.domande;
  const puntiParte = conPunti ? (d.parti.length === 1 ? 2 : 1) : 1;
  let h = `<li class="q" data-tag="${esc(d.tag)}"${conPunti ? ` data-punti="2"` : ''}><div class="q-testo">${inLinea(d.testo, ctx)}</div>`;
  d.parti.forEach((p, k) => { h += htmlParte(ctx, p, `${nome}-${k}`, puntiParte, hash(d.testo + p.testo + n)); });
  if (azioni) h += `<div class="q-azioni"><button type="button" class="btn q-verifica">${ctx.T.verifica}</button><span class="q-esito" aria-live="polite"></span></div>`;
  return h + '</li>';
}

function bloccoQuiz(corpo, ctx, info, riga0) {
  const { domande } = leggiDomande(corpo, riga0);
  const q = ++ctx.n.quiz;
  const diagnostico = /diagnostico/.test(info);
  if (diagnostico && domande.some(d => !d.tag)) throw new Error('nel quiz diagnostico ogni domanda deve avere il modulo, es. «D(M3): …»');
  return `<div class="quiz${diagnostico ? ' diagnostico' : ''}" id="quiz-${q}"><ol class="q-lista">${domande.map((d, k) => htmlDomanda(ctx, d, `q${q}-${k}`, false, !diagnostico)).join('')}</ol>`
    + (diagnostico ? `<div class="q-azioni"><button type="button" class="btn btn-rosso diag-verifica">${ctx.T.correggi}</button></div><div class="diag-esito" aria-live="polite"></div>` : '')
    + '</div>';
}

function bloccoSimulazione(corpo, ctx, info, riga0) {
  const { titolo, domande } = leggiDomande(corpo, riga0);
  const s = ++ctx.n.sim;
  if (domande.length !== 5) throw new Error(`una simulazione ha 5 domande, qui ce ne sono ${domande.length}`);
  for (const d of domande) if (d.parti.length > 2) throw new Error(`riga ${d.riga}: al massimo due sotto-domande (a, b) per domanda`);
  const t = titolo || `${ctx.T.simulazione} ${s}`;
  return `<section class="sim" id="sim-${s}" data-tempo="45"><header class="sim-testa"><h3 class="sim-titolo">${inLinea(t, ctx)}</h3><p class="sim-info">${ctx.T.simInfo}</p></header>`
    + `<ol class="q-lista sim-domande">${domande.map((d, k) => htmlDomanda(ctx, d, `s${s}-${k}`, true, false)).join('')}</ol></section>`;
}

function bloccoChecklist(corpo, ctx) {
  const voci = corpo.map(r => r.replace(/^\s*[-*]\s*/, '').trim()).filter(Boolean);
  if (!voci.length) throw new Error('checklist vuota');
  const c = ++ctx.n.check;
  return `<ul class="checklist" data-check="${c}">${voci.map((v, k) => `<li><label><input type="checkbox" data-i="${k}"><span class="ck-segno" aria-hidden="true"></span><span>${inLinea(v, ctx)}</span></label></li>`).join('')}</ul>`;
}

/* ---------- grafici ---------- */

const PASSI = [0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10, 20, 25, 50, 100];
const passoBello = ampiezza => PASSI.find(p => ampiezza / p <= 9) || 100;

function etichettaPi(v, passo) {
  const k = Math.round(v / passo), num = k * passo / Math.PI;
  for (const den of [1, 2, 3, 4, 6]) {
    const n = Math.round(num * den);
    if (Math.abs(n / den - num) < 1e-9) {
      if (n === 0) return '0';
      const s = n < 0 ? '−' : '', a = Math.abs(n);
      return den === 1 ? `${s}${a === 1 ? '' : a}π` : `${s}${a === 1 ? '' : a}π/${den}`;
    }
  }
  return fmt(v);
}

function opzioni(parti) {
  const o = { classi: [], etichetta: '', pos: '' };
  for (const p of parti) {
    const t = p.trim();
    if (!t) continue;
    if (/^\$.*\$$/.test(t) || /^".*"$/.test(t)) o.etichetta = t.replace(/^"|"$/g, '');
    else if (/^(rosso|grigio|bianco|tratteggio|sottile|spesso|vuoto|pieno|tenue)$/.test(t)) o.classi.push(t);
    else if (/^(n|s|e|o|ne|no|se|so|c)$/.test(t)) o.pos = t;
    else if (/^da=/.test(t)) o.da = numero(t.slice(3));
    else if (/^a=/.test(t)) o.a = numero(t.slice(2));
    else throw new Error(`opzione «${t}» sconosciuta (rosso, grigio, tratteggio, sottile, spesso, vuoto, tenue, da=…, a=…, posizione n/s/e/o/ne/no/se/so, $etichetta$)`);
  }
  return o;
}

function bloccoGrafico(corpo, ctx) {
  const g = { x: [-5, 5], y: [-5, 5], assi: true, griglia: true, uguali: true, titolo: '', passoX: null, passoY: null, piX: false, voci: [] };
  for (const grezza of corpo) {
    const r = grezza.replace(/\s+#\s.*$/, '').trim();
    if (!r || r.startsWith('//') || r.startsWith('#')) continue;
    const m = r.match(/^([a-zà-ù-]+)\s*:\s*(.*)$/i);
    if (!m) throw new Error(`riga «${r}» non valida (formato «chiave: valori»)`);
    const [, chiave, resto] = m;
    const [primo, ...altre] = resto.split('|');
    const valori = primo.trim().split(/\s+/).filter(Boolean);
    const nums = () => valori.map(numero);
    switch (chiave.toLowerCase()) {
      case 'titolo': g.titolo = resto.trim(); break;
      case 'x': g.x = nums(); break;
      case 'y': g.y = nums(); break;
      case 'assi': g.assi = !/^no/i.test(resto.trim()); break;
      case 'nomi': g.nomi = resto.trim().split(/\s+/); if (g.nomi.length !== 2) throw new Error(`nomi: servono i nomi dei due assi, es. «nomi: t s» («${r}»)`); break;
      case 'griglia': g.griglia = !/^no/i.test(resto.trim()); break;
      case 'proporzioni': g.uguali = !/^libere/i.test(resto.trim()); break;
      case 'passo-x': if (/pi|π/.test(primo)) g.piX = true; g.passoX = numero(primo); break;
      case 'passo-y': g.passoY = numero(primo); break;
      case 'f': g.voci.push({ tipo: 'f', f: compilaEspressione(primo, ['x']), src: primo.trim(), ...opzioni(altre) }); break;
      case 'fy': g.voci.push({ tipo: 'fy', f: compilaEspressione(primo, ['y']), src: primo.trim(), ...opzioni(altre) }); break;
      case 'punto': if (valori.length !== 2) throw new Error(`punto: servono 2 coordinate («${r}»)`); g.voci.push({ tipo: 'punto', p: nums(), ...opzioni(altre) }); break;
      case 'segmento': case 'freccia': if (valori.length !== 4) throw new Error(`${chiave}: servono 4 numeri («${r}»)`); g.voci.push({ tipo: chiave, p: nums(), ...opzioni(altre) }); break;
      case 'poligono': if (valori.length < 6 || valori.length % 2) throw new Error(`poligono: servono almeno 3 coppie di coordinate («${r}»)`); g.voci.push({ tipo: 'poligono', p: nums(), ...opzioni(altre) }); break;
      case 'cerchio': if (valori.length !== 3) throw new Error(`cerchio: centro x, centro y, raggio («${r}»)`); g.voci.push({ tipo: 'cerchio', p: nums(), ...opzioni(altre) }); break;
      case 'ellisse': if (valori.length !== 4) throw new Error(`ellisse: centro x, centro y, semiasse x, semiasse y («${r}»)`); g.voci.push({ tipo: 'ellisse', p: nums(), ...opzioni(altre) }); break;
      case 'arco': if (valori.length !== 5) throw new Error(`arco: centro x, centro y, raggio, angolo iniziale, angolo finale in radianti («${r}»)`); g.voci.push({ tipo: 'arco', p: nums(), ...opzioni(altre) }); break;
      case 'verticale': g.voci.push({ tipo: 'verticale', p: nums(), ...opzioni(altre) }); break;
      case 'orizzontale': g.voci.push({ tipo: 'orizzontale', p: nums(), ...opzioni(altre) }); break;
      case 'testo': if (valori.length !== 2) throw new Error(`testo: servono 2 coordinate («${r}»)`); g.voci.push({ tipo: 'testo', p: nums(), ...opzioni(altre) }); break;
      case 'area': {
        const pezzi = resto.split('|').map(s => s.trim());
        if (pezzi.length < 3) throw new Error(`area: «area: f(x) | g(x) | da a» («${r}»)`);
        const [a, b] = pezzi[2].split(/\s+/).map(numero);
        g.voci.push({ tipo: 'area', f: compilaEspressione(pezzi[0], ['x']), g: compilaEspressione(pezzi[1], ['x']), a, b, ...opzioni(pezzi.slice(3)) });
        break;
      }
      default: throw new Error(`chiave «${chiave}» sconosciuta`);
    }
  }
  let [x0, x1] = g.x, [y0, y1] = g.y;
  if (!(x1 > x0) || !(y1 > y0)) throw new Error('intervalli x/y non validi: scrivi «x: min max» con min < max');
  const W = 640;
  const altezza = () => { const h = g.uguali ? W * (y1 - y0) / (x1 - x0) : W * 0.62; return h > W * 1.6 || h < W * 0.28 ? Math.max(W * 0.35, Math.min(W * 0.9, h)) : h; };
  const hGrezza = W * (y1 - y0) / (x1 - x0);
  if (g.uguali && (hGrezza > W * 1.6 || hGrezza < W * 0.28)) ctx.avviso(null, `grafico «${g.titolo}»: con le stesse unità su x e y verrebbe alto ${Math.round(hGrezza)} su 640; ho usato proporzioni libere (scrivi «proporzioni: libere» o cambia gli intervalli)`);
  // se l'asse x è quasi sul bordo inferiore o l'asse y quasi sul bordo sinistro, i numeri delle tacche non ci stanno
  // (sui telefoni la figura scende a metà della larghezza): la finestra si allarga quanto basta
  if (g.assi) for (let k = 0; k < 3; k++) {
    const h = altezza();
    if (y0 <= 0 && y1 > 0) { const sotto = -y0 / (y1 - y0) * h; if (sotto < 44) y0 -= (44 - sotto) / h * (y1 - y0) * 1.02; }
    if (x0 <= 0 && x1 > 0) { const sinistra = -x0 / (x1 - x0) * W; if (sinistra < 60) x0 -= (60 - sinistra) / W * (x1 - x0) * 1.02; }
  }
  const H = altezza();
  const X = x => (x - x0) / (x1 - x0) * W, Y = y => H - (y - y0) / (y1 - y0) * H;
  const px = v => +v.toFixed(2);
  const svg = [], et = [];
  const pct = (x, y) => `left:${(X(x) / W * 100).toFixed(2)}%;top:${(Y(y) / H * 100).toFixed(2)}%`;
  const etichetta = (x, y, testo, pos, classe = '') => {
    let p = pos || 'ne';
    if (p !== 'c' && !/g-tacca|g-nome-asse|g-origine/.test(classe)) {   // vicino ai bordi l'etichetta va dall'altra parte
      const xp = X(x) / W * 100, yp = Y(y) / H * 100;
      let v = p.includes('n') ? 'n' : p.includes('s') ? 's' : '', h = p.endsWith('e') ? 'e' : p.endsWith('o') ? 'o' : '';
      if (h === 'e' && xp > 78) h = 'o'; else if (h === 'o' && xp < 22) h = 'e';
      if (v === 'n' && yp < 12) v = 's'; else if (v === 's' && yp > 88) v = 'n';
      p = v + h || 'c';
    }
    et.push(`<span class="g-et g-${p}${classe}" style="${pct(x, y)}">${/^\$.*\$$/.test(testo) ? inLinea(testo, ctx) : esc(testo)}</span>`);
  };
  const cl = o => o.classi.map(c => ` g-${c}`).join('');
  // un asse sul bordo della finestra (es. «x: 0 10») porta i numeri dal lato interno, altrimenti verrebbero tagliati
  const asseYaSinistra = X(0) < 34, asseXinBasso = Y(0) > H - 24;
  if (g.griglia || g.assi) {
    const sx = g.passoX || passoBello(x1 - x0), sy = g.passoY || passoBello(y1 - y0);
    if ((x1 - x0) / sx > 60 || (y1 - y0) / sy > 60) throw new Error('passo della griglia troppo piccolo');
    const righe = [];
    for (let v = Math.ceil(x0 / sx) * sx; v <= x1 + 1e-9; v += sx) {
      if (g.griglia) righe.push(`M${px(X(v))} 0V${px(H)}`);
      if (g.assi && Math.abs(v) > 1e-9 && y0 <= 0 && y1 >= 0 && v > x0 + sx / 3 && v < x1 - sx / 3) etichetta(v, 0, g.piX ? etichettaPi(v, sx) : fmt(v), asseXinBasso ? 'n' : 's', ' g-tacca');
    }
    for (let v = Math.ceil(y0 / sy) * sy; v <= y1 + 1e-9; v += sy) {
      if (g.griglia) righe.push(`M0 ${px(Y(v))}H${W}`);
      if (g.assi && Math.abs(v) > 1e-9 && x0 <= 0 && x1 >= 0 && v > y0 + sy / 3 && v < y1 - sy / 3) etichetta(0, v, fmt(v), asseYaSinistra ? 'e' : 'o', ' g-tacca');
    }
    if (g.griglia) svg.push(`<path class="g-griglia" d="${righe.join('')}"/>`);
  }
  if (g.assi) {
    const [nx, ny] = g.nomi || ['x', 'y'];
    if (y0 <= 0 && y1 >= 0) { svg.push(`<path class="g-asse" d="M0 ${px(Y(0))}H${W}" marker-end="url(#g-punta)"/>`); etichetta(x1, 0, nx, asseXinBasso ? 'no' : 'so', ' g-nome-asse'); }
    if (x0 <= 0 && x1 >= 0) { svg.push(`<path class="g-asse" d="M${px(X(0))} ${H}V0" marker-end="url(#g-punta)"/>`); etichetta(0, y1, ny, X(0) > W - 34 ? 'so' : 'se', ' g-nome-asse'); }
    if (y0 <= 0 && y1 >= 0 && x0 <= 0 && x1 >= 0) etichetta(0, 0, '$O$', (asseXinBasso ? 'n' : 's') + (asseYaSinistra ? 'e' : 'o'), ' g-origine');
  }
  const pezziCurva = (f, a, b, verso) => {
    const N = 900, d = [];
    let prima = null, aperto = false;
    const lim = (y1 - y0) * 3;
    for (let k = 0; k <= N; k++) {
      const t = a + (b - a) * k / N;
      let v;
      try { v = f(verso === 'x' ? { x: t } : { y: t }); } catch { v = NaN; }
      const ok = Number.isFinite(v) && v > y0 - lim && v < y1 + lim;
      const vx = verso === 'x' ? { x: t, y: v } : { x: v, y: t };
      if (ok && verso === 'y' && !(v > x0 - (x1 - x0) * 3 && v < x1 + (x1 - x0) * 3)) { aperto = false; prima = null; continue; }
      if (!ok || (prima !== null && Math.abs(v - prima) > (verso === 'x' ? (y1 - y0) : (x1 - x0)) * 0.9)) { aperto = false; prima = ok ? v : null; if (!ok) continue; }
      d.push(`${aperto ? 'L' : 'M'}${px(X(vx.x))} ${px(Y(vx.y))}`);
      aperto = true; prima = v;
    }
    return d.join('');
  };
  for (const v of g.voci) {
    if (v.tipo === 'f' || v.tipo === 'fy') {
      const a = v.da ?? (v.tipo === 'f' ? x0 : y0), b = v.a ?? (v.tipo === 'f' ? x1 : y1);
      const d = pezziCurva(v.f, a, b, v.tipo === 'f' ? 'x' : 'y');
      if (!d) ctx.avviso(null, `grafico «${g.titolo}»: la curva «${v.src}» non ha punti visibili nella finestra`);
      svg.push(`<path class="g-curva${cl(v)}" d="${d}"/>`);
      if (v.etichetta) {
        const t = v.tipo === 'f' ? a + (b - a) * 0.82 : null;
        let ex, ey;
        if (t !== null) { ex = t; ey = v.f({ x: t }); } else { ey = y0 + (y1 - y0) * 0.82; ex = v.f({ y: ey }); }
        if (Number.isFinite(ey) && Number.isFinite(ex)) etichetta(Math.min(Math.max(ex, x0), x1), Math.min(Math.max(ey, y0), y1), v.etichetta, v.pos || 'ne', ' g-et-curva');
      }
    } else if (v.tipo === 'area') {
      const N = 200, su = [], giu = [];
      for (let k = 0; k <= N; k++) { const t = v.a + (v.b - v.a) * k / N; su.push(`${px(X(t))} ${px(Y(Math.min(Math.max(v.f({ x: t }), y0), y1)))}`); }
      for (let k = N; k >= 0; k--) { const t = v.a + (v.b - v.a) * k / N; giu.push(`${px(X(t))} ${px(Y(Math.min(Math.max(v.g({ x: t }), y0), y1)))}`); }
      svg.unshift(`<path class="g-area${cl(v)}" d="M${su.join('L')}L${giu.join('L')}Z"/>`);
    } else if (v.tipo === 'punto') {
      const [x, y] = v.p;
      svg.push(`<circle class="g-punto${cl(v)}" cx="${px(X(x))}" cy="${px(Y(y))}" r="5"/>`);
      if (v.etichetta) etichetta(x, y, v.etichetta, v.pos || 'ne');
    } else if (v.tipo === 'segmento' || v.tipo === 'freccia') {
      const [a, b, c, d] = v.p;
      svg.push(`<path class="g-linea${cl(v)}" d="M${px(X(a))} ${px(Y(b))}L${px(X(c))} ${px(Y(d))}"${v.tipo === 'freccia' ? ' marker-end="url(#g-punta-r)"' : ''}/>`);
      if (v.etichetta) etichetta((a + c) / 2, (b + d) / 2, v.etichetta, v.pos || 'n');
    } else if (v.tipo === 'poligono') {
      const pt = [];
      for (let k = 0; k < v.p.length; k += 2) pt.push(`${px(X(v.p[k]))} ${px(Y(v.p[k + 1]))}`);
      svg.push(`<path class="g-poligono${cl(v)}" d="M${pt.join('L')}Z"/>`);
      if (v.etichetta) { let sx = 0, sy = 0; for (let k = 0; k < v.p.length; k += 2) { sx += v.p[k]; sy += v.p[k + 1]; } etichetta(sx / (v.p.length / 2), sy / (v.p.length / 2), v.etichetta, v.pos || 'c'); }
    } else if (v.tipo === 'cerchio' || v.tipo === 'ellisse') {
      const [cx, cy, a] = v.p, b = v.tipo === 'ellisse' ? v.p[3] : a;
      svg.push(`<ellipse class="g-linea${cl(v)}" cx="${px(X(cx))}" cy="${px(Y(cy))}" rx="${px(Math.abs(X(cx + a) - X(cx)))}" ry="${px(Math.abs(Y(cy + b) - Y(cy)))}"/>`);
      if (v.etichetta) etichetta(cx + a * 0.72, cy + b * 0.72, v.etichetta, v.pos || 'ne');
    } else if (v.tipo === 'arco') {
      const [cx, cy, r, t0, t1] = v.p, d = [];
      for (let k = 0; k <= 80; k++) { const t = t0 + (t1 - t0) * k / 80; d.push(`${k ? 'L' : 'M'}${px(X(cx + r * Math.cos(t)))} ${px(Y(cy + r * Math.sin(t)))}`); }
      svg.push(`<path class="g-linea${cl(v)}" d="${d.join('')}"/>`);
      if (v.etichetta) { const t = (t0 + t1) / 2; etichetta(cx + r * 1.25 * Math.cos(t), cy + r * 1.25 * Math.sin(t), v.etichetta, v.pos || 'c'); }
    } else if (v.tipo === 'verticale') {
      svg.push(`<path class="g-linea${cl(v)}" d="M${px(X(v.p[0]))} 0V${px(H)}"/>`);
      if (v.etichetta) etichetta(v.p[0], y1, v.etichetta, v.pos || 'se');
    } else if (v.tipo === 'orizzontale') {
      svg.push(`<path class="g-linea${cl(v)}" d="M0 ${px(Y(v.p[0]))}H${W}"/>`);
      if (v.etichetta) etichetta(x0, v.p[0], v.etichetta, v.pos || 'ne');
    } else if (v.tipo === 'testo') {
      etichetta(v.p[0], v.p[1], v.etichetta || '', v.pos || 'c', ' g-testo' + cl(v));
    }
  }
  const n = ++ctx.n.grafico;
  const defs = `<defs><clipPath id="gc${n}"><rect width="${W}" height="${px(H)}"/></clipPath><marker id="g-punta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1L10 5L0 9z" class="g-punta"/></marker><marker id="g-punta-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1L10 5L0 9z" class="g-punta-rossa"/></marker></defs>`;
  const titolo = g.titolo ? `<figcaption>${inLinea(g.titolo, ctx)}</figcaption>` : '';
  const larghezzaMax = H > W * 0.72 ? `;max-width:min(100%,${Math.round(560 * W / H)}px)` : '';
  return `<figure class="grafico" id="grafico-${n}"><div class="g-quadro" style="aspect-ratio:${W}/${px(H)}${larghezzaMax}"><svg viewBox="0 0 ${W} ${px(H)}" role="img" aria-label="${esc(g.titolo.replace(/\$/g, '') || 'grafico')}" preserveAspectRatio="none">${defs}<g clip-path="url(#gc${n})">${svg.join('')}</g></svg>${et.join('')}</div>${titolo}</figure>`;
}

/* ---------- retta dei numeri ---------- */

function bloccoRetta(corpo, ctx) {
  let da = null, titolo = '';
  const voci = [], tacche = [];
  for (const grezza of corpo) {
    const r = grezza.replace(/\s+#\s.*$/, '').trim();
    if (!r || r.startsWith('//') || r.startsWith('#')) continue;
    const m = r.match(/^([a-z]+)\s*:\s*(.*)$/i);
    if (!m) throw new Error(`riga «${r}» non valida`);
    if (m[1].toLowerCase() === 'titolo') { titolo = m[2].trim(); continue; }   // il titolo può contenere «|», es. $|x|$
    const [primo, ...altre] = m[2].split('|');
    const o = opzioni(altre);
    switch (m[1].toLowerCase()) {
      case 'da': da = primo.trim().split(/\s+/).map(numero); break;
      case 'int': {
        const t = primo.trim().match(/^([[(\]])\s*([^,;]+?)\s*[,;]\s*([^,;]+?)\s*([\])[])$/);
        if (!t) throw new Error(`intervallo «${primo.trim()}» non valido: scrivi es. «int: (-2, 3]» o «int: (-inf, 1)»`);
        const val = s => (/^[-−]\s*inf|^-∞/.test(s) ? -Infinity : /^\+?\s*inf|^\+?∞/.test(s) ? Infinity : numero(s));
        const a = val(t[2]), b = val(t[3]);
        if (!(b > a)) throw new Error(`intervallo «${primo.trim()}»: il primo estremo deve essere minore del secondo`);
        voci.push({ tipo: 'int', a, b, aChiuso: t[1] === '[', bChiuso: t[4] === ']', sa: t[2].trim(), sb: t[3].trim(), ...o });
        break;
      }
      case 'punto': { const v = numero(primo.trim().split(/\s+/)[0]); voci.push({ tipo: 'punto', v, ...o }); break; }
      case 'tacca': tacche.push({ v: numero(primo.trim()), etichetta: o.etichetta }); break;
      default: throw new Error(`chiave «${m[1]}» sconosciuta (titolo, da, int, punto, tacca)`);
    }
  }
  if (!da || da.length !== 2 || !(da[1] > da[0])) throw new Error('serve «da: min max»');
  const W = 640, H = 64, Y = 34, M = 22;
  const X = v => M + (v - da[0]) / (da[1] - da[0]) * (W - 2 * M);
  const px = v => +v.toFixed(2);
  const svg = [`<path class="r-asse" d="M4 ${Y}H${W - 4}" marker-end="url(#r-punta)"/>`];
  const et = [];
  const etichette = new Map();
  const aggiungiEt = (v, testo) => { if (!etichette.has(v) || testo) etichette.set(v, testo || etichette.get(v) || fmt(v)); };
  for (const v of voci) {
    if (v.tipo === 'int') {
      const a = Math.max(v.a, da[0] - 1), b = Math.min(v.b, da[1] + 1);
      const xa = v.a === -Infinity ? 4 : X(a), xb = v.b === Infinity ? W - 4 : X(b);
      svg.push(`<path class="r-int${v.classi.map(c => ` r-${c}`).join('')}" d="M${px(xa)} ${Y}H${px(xb)}"/>`);
      if (Number.isFinite(v.a)) { svg.push(`<circle class="r-estremo${v.aChiuso ? '' : ' r-vuoto'}" cx="${px(X(v.a))}" cy="${Y}" r="5.5"/>`); aggiungiEt(v.a, null); }
      if (Number.isFinite(v.b)) { svg.push(`<circle class="r-estremo${v.bChiuso ? '' : ' r-vuoto'}" cx="${px(X(v.b))}" cy="${Y}" r="5.5"/>`); aggiungiEt(v.b, null); }
    } else {
      svg.push(`<circle class="r-estremo${v.classi.includes('vuoto') ? ' r-vuoto' : ''}" cx="${px(X(v.v))}" cy="${Y}" r="5.5"/>`);
      aggiungiEt(v.v, v.etichetta);
    }
  }
  for (const t of tacche) aggiungiEt(t.v, t.etichetta);
  for (const [v, testo] of etichette) {
    if (v < da[0] || v > da[1]) continue;
    svg.push(`<path class="r-tacca" d="M${px(X(v))} ${Y - 6}V${Y + 6}"/>`);
    et.push(`<span class="r-et" style="left:${(X(v) / W * 100).toFixed(2)}%">${/^\$.*\$$/.test(testo) ? inLinea(testo, ctx) : esc(testo)}</span>`);
  }
  const n = ++ctx.n.retta;
  const defs = `<defs><marker id="r-punta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 1L10 5L0 9z" class="g-punta"/></marker></defs>`;
  const alta = [...etichette.values()].some(t => /\\[dt]?frac|\\sqrt|\\binom/.test(t));   // frazioni e radici nelle etichette: serve più spazio sotto
  return `<figure class="retta" id="retta-${n}"><div class="r-quadro${alta ? ' r-alta' : ''}"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(titolo.replace(/\$/g, '') || 'retta dei numeri')}" preserveAspectRatio="none">${defs}${svg.join('')}</svg>${et.join('')}</div>${titolo ? `<figcaption>${inLinea(titolo, ctx)}</figcaption>` : ''}</figure>`;
}

/* ---------- pagina ---------- */

export function compila(sorgente, { file = 'pagina', richiedi = [], lingua = 'it' } = {}) {
  const ctx = nuovoContesto(file);
  ctx.T = ETICHETTE[lingua] || ETICHETTE.it;
  virgola = lingua !== 'en';
  let meta = {}, corpo = sorgente.replace(/^\uFEFF/, '');
  const fm = corpo.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (fm) {
    try { meta = yaml.load(fm[1]) || {}; } catch (e) { ctx.errore(1, `frontmatter YAML non valido: ${e.message}`); }
    corpo = corpo.slice(fm[0].length);
  }
  for (const k of richiedi) if (meta[k] === undefined || meta[k] === '') ctx.errore(1, `nel frontmatter manca «${k}»`);
  ctx.righeOrigine = sorgente.split(/\r?\n/);
  ctx.modulo = Number.isFinite(Number(meta.modulo)) && meta.modulo !== undefined ? Number(meta.modulo) : null;
  ctx.numeri = {};
  const html = markdown(corpo, ctx);
  if (/nicolas|stella\b/i.test(sorgente)) ctx.errore(null, 'contiene un nome personale: toglilo');
  const parole = corpo.replace(/\$[^$]*\$/g, ' x ').split(/\s+/).filter(w => /[a-zà-ù]{2,}/i.test(w)).length;
  const tocHtml = ctx.toc.map(t => ({ ...t, html: ripristina(t.html, ctx).replace(/<a class="ancora"[^>]*>#<\/a>/, '') }));
  return { meta, html, toc: tocHtml, riquadri: ctx.riquadri, errori: ctx.errori, avvisi: ctx.avvisi, stats: { parole, ...ctx.n } };
}
