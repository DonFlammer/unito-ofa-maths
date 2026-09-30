// Builds the site from the Markdown files in ai/: home page, module notes, formula sheet, study plan,
// entry test, mock tests, rules, the official course, the Italian glossary and the single files for AIs.
// Usage (from the site folder): node tools/build.mjs   ·   OFA_ROOT=<folder> to build a test copy
// The renderer (tools/ofamd.mjs), the stylesheet and the scripts are shared with the Italian original.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { compila, esc } from './ofamd.mjs';

// script in linea nella <head> (animazioni ridotte prima del primo disegno) e politica di sicurezza dei contenuti (CSP):
// GitHub Pages non permette intestazioni HTTP, quindi va in un <meta>. Solo gli script del sito più questo (con la sua
// impronta SHA-256), niente gestori in linea (onclick, onerror…), niente risorse esterne
const SCRIPT_MOTO = `try { if (localStorage.getItem('ofa:moto') === '"ridotto"') document.documentElement.classList.add('meno-moto'); } catch (e) {}`;
const CSP = `default-src 'none'; script-src 'self' 'sha256-${createHash('sha256').update(SCRIPT_MOTO).digest('base64')}'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'none'`;
// indirizzi esterni (costanti e portale): solo https, sempre con escape
const httpsSicuro = url => { if (!/^https:\/\/[^\s"'<>]+$/.test(url)) throw new Error(`indirizzo esterno non valido (serve https): ${url}`); return esc(url); };

const R = process.env.OFA_ROOT || join(dirname(fileURLToPath(import.meta.url)), '..');
const read = p => readFileSync(join(R, p), 'utf8');
const exists = p => existsSync(join(R, p));
const write = (p, s) => { mkdirSync(dirname(join(R, p)), { recursive: true }); writeFileSync(join(R, p), s); };

const REPO = 'https://github.com/DonFlammer/unito-ofa-maths';
const SITE = 'https://donflammer.github.io/unito-ofa-maths/';
const IT_REPO = 'https://github.com/DonFlammer/unito-ofa-matematica';
const IT_SITE = 'https://donflammer.github.io/unito-ofa-matematica/';
const FIRST_YEAR_NOTES = 'https://donflammer.github.io/unito-computer-science/';
const PLATFORM = 'https://www.ofa.unito.it/course/view.php?id=20';
const REQUIREMENTS = 'https://laurea.informatica.unito.it/do/home.pl/View?doc=Requisiti_di_ammissione.html';
const ESSE3 = 'https://esse3.unito.it/ListaAppelliOfferta.do';
const UPDATED = '30 September 2026';

// [number, English file name, Italian file name, fallback title]
const LIST = [
  [1, '01-language-sets-numbers', '01-linguaggio-numeri', 'Language, sets, logic and numbers'],
  [2, '02-polynomials', '02-polinomi', 'Polynomials and factorisation'],
  [3, '03-equations-inequalities', '03-equazioni-disequazioni', 'First- and second-degree equations and inequalities, systems'],
  [4, '04-rational-radical-absolute-value', '04-fratte-irrazionali-modulo', 'Rational, radical and absolute value equations and inequalities'],
  [5, '05-analytic-geometry', '05-geometria-analitica', 'Analytic geometry: lines and conics'],
  [6, '06-functions', '06-funzioni', 'Real functions of a real variable'],
  [7, '07-exponentials-logarithms', '07-esponenziali-logaritmi', 'Exponentials and logarithms'],
  [8, '08-trigonometry', '08-trigonometria', 'Trigonometry'],
];
// the same page in the Italian original (the "Italiano" link of every page)
const IT_PAGE = { 'index.html': 'index.html', 'rules.html': 'info.html', 'plan.html': 'piano.html', 'mock-tests.html': 'simulazioni.html', 'entry-test.html': 'test-ingresso.html', 'formulas.html': 'formulario.html', 'course.html': 'corso.html', 'glossary.html': 'index.html', '404.html': 'index.html' };
for (const [, en, it] of LIST) IT_PAGE[`modules/${en}.html`] = `moduli/${it}.html`;

let errors = 0;
function compileFile(path, required = []) {
  const r = compila(read(path), { file: path, richiedi: required, lingua: 'en' });
  r.errori.forEach(e => console.error('ERROR ' + e));
  r.avvisi.forEach(e => console.error('warning ' + e));
  errors += r.errori.length;
  return r;
}

const portal = JSON.parse(read('tools/portal.json'));
const TYPE = { Libro: 'Book', Pagina: 'Page', PDF: 'PDF', Esplora: 'Explore', 'Test online': 'Online test' };
const modules = LIST.map(([n, base, , title]) => {
  const md = `ai/modules/${base}.md`;
  if (!exists(md)) return { n, base, title, ready: false };
  const r = compileFile(md, ['modulo', 'titolo', 'breve', 'ore', 'unita']);
  return { n, base, ready: true, ...r, title: r.meta.titolo || title, url: `modules/${base}.html` };
});
const ready = modules.filter(m => m.ready);
// errata of the official material, module by module (the errata section of ai/official-course.md)
const errata = {};
if (exists('ai/official-course.md')) {
  const section = read('ai/official-course.md').split(/^## /m).find(s => /^(Errata|Errors|Typos|Misprints)/i.test(s)) || '';
  for (const [, n, text] of section.matchAll(/^### Module (\d+)\s*\n([\s\S]*?)(?=^### |(?![\s\S]))/gm)) errata[n] = compila(text.trim(), { file: 'ai/official-course.md', lingua: 'en' }).html;
}
const moduleData = ready.map(m => ({ numero: m.n, titolo: m.title, ore: Number(m.meta.ore) || 6, unita: m.meta.unita || [], url: m.url }));
const unitCodes = m => (m.meta?.unita || []).map(u => (String(u).match(/^\d+(?:\.\d+)+/) || [])[0]).filter(Boolean);

/* ---------- shared pieces ---------- */

const ICON = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#000"/><rect x="14" y="14" width="10" height="10" fill="#d7263f"/><path d="M14 50h36M14 39h36" stroke="#e8e5de" stroke-width="4"/></svg>');
const ext = (url, text, cls = 'link') => `<a class="${cls} esterno" href="${httpsSicuro(url)}" target="_blank" rel="noopener">${text}</a>`;
const sep = '<span aria-hidden="true">/</span>';

function bar(r, active, reading, itUrl) {
  const item = (id, href, text) => `<a href="${r}${href}"${active === id ? ' class="attivo" aria-current="page"' : ''}>${text}</a>`;
  return `<header class="barra"><div class="contenitore barra-in">
<a class="logo" href="${r}index.html"><span class="logo-segno" aria-hidden="true"></span><span class="logo-nome">Maths OFA</span><small>unofficial guide · Computer Science UniTo</small></a>
<button class="menu-btn" type="button" aria-label="Open the menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button>
<nav class="menu" id="menu" aria-label="Site sections">
${item('notes', 'index.html#programme', 'Notes')}
${item('formulas', 'formulas.html', 'Formula sheet')}
${item('test', 'entry-test.html', 'Entry test')}
${item('plan', 'plan.html', 'Study plan')}
${item('mock', 'mock-tests.html', 'Mock tests')}
${item('rules', 'rules.html', 'Rules and dates')}
${item('glossary', 'glossary.html', 'Glossary')}
<a class="lingua" href="${itUrl}" hreflang="it" lang="it">Italiano</a>
<button type="button" class="anim-menu" id="anim-toggle" aria-pressed="false" aria-label="Reduced motion" title="Reduced motion: only the black background stays"><span class="anim-icona" aria-hidden="true"></span><span class="anim-testo">Reduced motion</span></button>
</nav>
</div>${reading ? '<span class="progresso-lettura" aria-hidden="true"></span>' : ''}</header>`;
}

function footer(r) {
  return `<footer class="piede"><div class="contenitore">
<div class="piede-in">
<div>
<h4>Maths OFA</h4>
<p>Unofficial guide to making up the maths OFA for the Computer Science degree programme at the University of Turin, A.Y. 2026/27. Updated on ${UPDATED}.</p>
<p>Unofficial guide, based on the OFA course programme and UniTo's official pages; English translation of the Italian original; published by DonFlammer. It may contain errors: for rules, dates and registration only the official sources are authoritative. ${ext(`${REPO}/blob/main/DISCLAIMER.md`, 'Disclaimer')}</p>
</div>
<div>
<h4>The guide</h4>
<ul>
<li><a href="${r}index.html#programme">Notes for the eight modules</a></li>
<li><a href="${r}formulas.html">Formula sheet</a></li>
<li><a href="${r}entry-test.html">Entry test</a></li>
<li><a href="${r}plan.html">Study plan</a></li>
<li><a href="${r}mock-tests.html">Mock tests</a></li>
<li><a href="${r}rules.html">Rules, dates and contacts</a></li>
<li><a href="${r}course.html">The official course and its errata</a></li>
<li><a href="${r}glossary.html">Italian glossary for the test</a></li>
<li>${ext(`${REPO}/tree/main/ai`, 'Context for AIs', '')}</li>
</ul>
</div>
<div>
<h4>Official sources and services</h4>
<ul>
<li>${ext(PLATFORM, 'The “OFA Matematica” course', '')}</li>
<li>${ext(REQUIREMENTS, 'Admission requirements and OFA (Italian)', '')}</li>
<li>${ext('https://my.unito.it', 'MyUnito', '')}</li>
<li>${ext(ESSE3, 'Exam listings on Esse3', '')}</li>
<li>${ext(FIRST_YEAR_NOTES, 'First-year Computer Science notes', '')}</li>
<li>${ext('https://t.me/rapsodico', 'Contact: Telegram @rapsodico', '')}</li>
<li>${ext(REPO, 'Source on GitHub', '')} · ${ext(IT_REPO, 'Italian original', '')}</li>
</ul>
</div>
</div>
<div class="piede-fondo"><span>Licence CC BY-NC-SA 4.0 · DonFlammer · not a University of Turin website</span><button type="button" class="interruttore" id="interruttore-moto" aria-pressed="false"><span class="pista" aria-hidden="true"></span>Reduced motion</button></div>
</div></footer>`;
}

function page({ path, title, description, body, active = '', reading = false, katex = true, data = {}, moduleData: md = false }) {
  const r = path.includes('/') ? '../' : '';
  const attr = Object.entries(data).map(([k, v]) => ` data-${k}="${esc(v)}"`).join('');
  const itUrl = IT_SITE + (IT_PAGE[path] || 'index.html');
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="${CSP}">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#000000">
<meta name="color-scheme" content="dark">
<script>${SCRIPT_MOTO}</script>
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<link rel="alternate" hreflang="it" href="${itUrl}">
<link rel="icon" href="${ICON}">
<link rel="preload" href="${r}assets/fonts/source-serif-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${r}assets/css/sito.css">
${katex ? `<link rel="stylesheet" href="${r}assets/katex/katex.min.css">\n` : ''}</head>
<body data-radice="${r}"${attr}>
<canvas id="stelle" aria-hidden="true"></canvas>
<a class="salta" href="#contenuto">Skip to content</a>
${bar(r, active, reading, itUrl)}
<main id="contenuto">
${body}
</main>
${footer(r)}
${md ? `<script type="application/json" id="dati-moduli">${JSON.stringify(moduleData).replace(/</g, '\\u003c')}</script>\n` : ''}<script src="${r}assets/js/stelle.js" defer></script>
<script src="${r}assets/js/sito.js" defer></script>
<script src="${r}assets/js/studio.js" defer></script>
</body>
</html>
`;
  write(path, html.replace(/href="sito:/g, `href="${r}`));
}

function contents(toc, extra = []) {
  const items = [...toc, ...extra].map(t => `<li class="l${t.livello}"><a href="#${t.id}">${t.html}</a></li>`).join('');
  return `<aside class="indice" aria-label="Page contents"><details open><summary>Page contents</summary><p class="indice-titolo">On this page</p><ol>${items}</ol></details></aside>`;
}

function header({ crumbs, eyebrow = '', title, sub, extra = '' }) {
  return `<section class="testata-pagina"><div class="contenitore">
<nav class="briciole entra" style="--i:0" aria-label="Breadcrumb">${crumbs}</nav>
${eyebrow ? `<span class="occhiello entra" style="--i:1">${eyebrow}</span>` : ''}
<h1 class="entra" style="--i:1">${title}</h1>
${sub ? `<p class="sotto entra" style="--i:2">${sub}</p>` : ''}
${extra ? `<div class="entra" style="--i:3">${extra}</div>` : ''}
</div></section>`;
}

/* ---------- module notes ---------- */

for (const [k, m] of modules.entries()) {
  if (!m.ready) continue;
  const p = portal.find(x => x.modulo === m.n);
  const extra = `<div class="meta-chip"><span>about ${esc(m.meta.ore)} hours of study</span>${ext(p ? p.url : PLATFORM, 'material on the OFA platform', '')}<a href="../formulas.html#module-${m.n}">entries in the formula sheet</a><span class="mt-progresso"><span class="barra-avanz"><i></i></span><small>checklist 0 of 0</small></span></div>`;
  const portalHtml = p ? `<section class="portale" aria-labelledby="on-the-ofa-platform"><h2 id="on-the-ofa-platform">On the OFA platform</h2>
<p>The test is built on this material. After the notes, read the book (Libro) of each unit, try the “Esplora” worksheets, do the PDF exercises and the online tests. You need to log in with your UniTo SCU credentials and enrol in the “OFA Matematica” course; how to use each activity is explained on the page <a href="../course.html">The official course</a>. The platform is in Italian: the <a href="../glossary.html">Italian glossary</a> lists the words you will meet.</p>
<ul class="portale-lista">${p.attivita.map(a => `<li><a href="${httpsSicuro(a.url)}" target="_blank" rel="noopener"><span class="tipo">${esc(TYPE[a.tipo] || a.tipo)}</span><span lang="it">${esc(a.nome)}</span></a></li>`).join('')}</ul>
${errata[m.n] ? `<h3 id="known-errata">Known errata in this material</h3>
<p>In the material of this module we found a few errata, checked against the original pages and PDFs; the notes give the correct version.</p>
${errata[m.n]}<p class="nota-piccola"><a href="../course.html#module-${m.n}">The errata of all modules</a>, with the caveats.</p>` : ''}</section>` : '';
  const prev = modules.slice(0, k).reverse().find(x => x.ready), next = modules.slice(k + 1).find(x => x.ready);
  const nav = `<nav class="nav-moduli" aria-label="Other modules">
${prev ? `<a class="prec" href="${prev.base}.html"><span class="dir">← Module ${prev.n}</span><b>${esc(prev.title)}</b></a>` : '<span></span>'}
${next ? `<a class="succ" href="${next.base}.html"><span class="dir">Module ${next.n} →</span><b>${esc(next.title)}</b></a>` : '<a class="succ" href="../mock-tests.html"><span class="dir">After the modules →</span><b>The mock tests</b></a>'}
</nav>`;
  const body = header({
    crumbs: `<a href="../index.html">Maths OFA</a>${sep}<a href="../index.html#programme">Notes</a>${sep}<span>Module ${m.n}</span>`,
    eyebrow: `<span class="rosso">Module ${m.n}</span> · units ${unitCodes(m).join(', ')}`,
    title: esc(m.title), sub: esc(m.meta.breve), extra,
  }) + `<div class="contenitore pagina-modulo">${contents(m.toc, p ? [{ livello: 2, id: 'on-the-ofa-platform', html: 'On the OFA platform' }, ...(errata[m.n] ? [{ livello: 3, id: 'known-errata', html: 'Known errata' }] : [])] : [])}<article class="testo">${m.html}${portalHtml}${nav}</article></div>`;
  page({ path: m.url, title: `Module ${m.n}. ${m.title} — Maths OFA`, description: `Notes for the maths OFA of Computer Science at UniTo, module ${m.n}: ${m.meta.breve}`, body, active: 'notes', reading: true, data: { modulo: m.n } });
}

/* ---------- formula sheet ---------- */

{
  const toc = [], blocks = [];
  for (const m of ready) {
    const rules = m.riquadri.filter(q => q.tipo === 'DEF' || q.tipo === 'PROP');
    if (!rules.length) continue;
    const id = `module-${m.n}`;
    toc.push({ livello: 2, id, html: `Module ${m.n}` });
    let html = `<h2 id="${id}">Module ${m.n}. ${esc(m.title)}</h2><p><a href="${m.url}">Notes for module ${m.n}</a>, with explanations, examples and exercises.</p>`;
    let section = null;
    for (const q of rules) {
      if (q.sezione !== section) { section = q.sezione; html += `<h3>${esc(section)}</h3>`; }
      const copy = q.html.replace(/ id="r\d+"/, '').replace(/id="gc(\d+)"/g, `id="gc${m.n}x$1"`).replace(/url\(#gc(\d+)\)/g, `url(#gc${m.n}x$1)`).replace(/id="(grafico|retta)-(\d+)"/g, `id="$1-${m.n}x$2"`);
      html += copy.replace('</div><div class="rq-corpo">', ` <a class="rimando" href="${m.url}#${q.id}">in the module</a></div><div class="rq-corpo">`);
    }
    blocks.push(html);
  }
  const body = header({
    crumbs: `<a href="index.html">Maths OFA</a>${sep}<span>Formula sheet</span>`,
    title: 'Formula sheet',
    sub: 'The definitions and rules of the eight modules, in the order of the notes, for revision. Each entry links to the point where it is explained with examples.',
  }) + `<div class="contenitore pagina-modulo">${contents(toc)}<article class="testo">${blocks.join('') || '<p>The formula sheet fills up as the module notes are ready.</p>'}</article></div>`;
  page({ path: 'formulas.html', title: 'Formula sheet — Maths OFA', description: 'Definitions and rules of all eight modules of the maths OFA course, on one page.', body, active: 'formulas', reading: true });
}

/* ---------- entry test, mock tests, rules, official course, glossary, study plan ---------- */

function markdownPage({ md, path, active, crumb, defaultTitle, sub, description, withContents = true, before = '', after = '', dm = false }) {
  const r = exists(md) ? compileFile(md) : null;
  const title = r?.meta.titolo || defaultTitle;
  const content = r ? r.html : '<p>This page is being prepared.</p>';
  const body = header({ crumbs: `<a href="index.html">Maths OFA</a>${sep}<span>${crumb}</span>`, title: esc(title), sub: sub || esc(r?.meta.breve || '') })
    + (withContents && r ? `<div class="contenitore pagina-modulo">${contents(r.toc)}<article class="testo">${before}${content}${after}</article></div>`
      : `<div class="contenitore"><article class="testo stretto" style="margin-inline:auto">${before}${content}${after}</article></div>`);
  page({ path, title: `${title} — Maths OFA`, description, body, active, reading: true, moduleData: dm });
  return r;
}

markdownPage({ md: 'ai/entry-test.md', path: 'entry-test.html', active: 'test', crumb: 'Entry test', defaultTitle: 'Entry test',
  description: 'A 24-question entry test to find out which modules to start from when making up the maths OFA.', withContents: false, dm: true });

{
  const r = exists('ai/mock-tests.md') ? compila(read('ai/mock-tests.md'), { file: 'ai/mock-tests.md', lingua: 'en' }) : null;
  const sims = r ? r.toc.filter(t => t.livello === 2 && /^(mock-test|simulation|test)-\d+$/.test(t.id)) : [];
  const list = sims.length ? `<div class="lista-sim">${sims.map((s, k) => `<a href="#${s.id}" data-sim="sim-${k + 1}"><b>${s.html}</b><span>not taken yet</span></a>`).join('')}</div>` : '';
  markdownPage({ md: 'ai/mock-tests.md', path: 'mock-tests.html', active: 'mock', crumb: 'Mock tests', defaultTitle: 'Mock tests',
    sub: 'Eight tests in the format of the real one: five questions worth two points each, 45 minutes, pass mark 6/10, no calculator. The timer starts when you press “Start”; when you hand in, you see your mark and the explanations.',
    description: 'Mock tests of the maths OFA test of Computer Science at UniTo, with timer and marking.', before: list });
}

markdownPage({ md: 'ai/ofa-rules.md', path: 'rules.html', active: 'rules', crumb: 'Rules and dates', defaultTitle: 'Rules, dates and contacts',
  description: 'Who has the maths OFA in Computer Science at UniTo, how to clear it, test dates, place and contacts, with the official sources.' });

markdownPage({ md: 'ai/official-course.md', path: 'course.html', active: 'course', crumb: 'The official course', defaultTitle: 'The “OFA Matematica” course',
  description: 'How the “OFA Matematica” course on UniTo\'s OFA platform is organised: modules, units, activities, notation and verified errata of the material.' });

markdownPage({ md: 'ai/italian-glossary.md', path: 'glossary.html', active: 'glossary', crumb: 'Italian glossary', defaultTitle: 'Italian for the OFA test',
  description: 'The Italian words and phrases of the maths OFA course and test, with their English meaning.' });

{
  const r = exists('ai/study-plan.md') ? compileFile('ai/study-plan.md') : null;
  const totHours = moduleData.reduce((a, m) => a + m.ore, 0);
  const datesHeading = exists('ai/ofa-rules.md') ? (compila(read('ai/ofa-rules.md'), { lingua: 'en' }).toc.find(t => /^dates/.test(t.id))?.id || '') : '';
  const tool = `<section id="piano" class="pannello" aria-labelledby="build-your-plan">
<h2 id="build-your-plan">The plan, week by week</h2>
<p style="color:var(--testo-2);margin:0 0 1.2rem">Choose the session and the hours per week: the plan spreads the eight modules (about ${Math.round(totHours) || 55} hours) and the mock tests until the test. If you took the <a class="link" href="entry-test.html">entry test</a>, it gives more time to the modules where it went worse. Your ticks stay saved in this browser.</p>
<div class="piano-form">
<div class="campo"><label for="piano-esame">Session</label><select id="piano-esame">
<option value="2026-11-24">Late November 2026 (estimate)</option>
<option value="2027-01-14">Mid-January 2027 (estimate)</option>
<option value="2027-05-28">Late May 2027 (estimate)</option>
<option value="2027-09-03">Early September 2027 (estimate)</option>
<option value="altra">Another date</option>
</select></div>
<div class="campo" hidden><label for="piano-data">Date of the test</label><input type="date" id="piano-data"></div>
<div class="campo"><label for="piano-ore">Hours per week: <output id="piano-ore-val" for="piano-ore">7 hours</output></label><input type="range" id="piano-ore" min="3" max="20" step="1" value="7"></div>
</div>
<p class="nota-piccola">The 2026/27 dates are not published yet: the estimates follow the 2025/26 calendar (sittings on 24 and 28 November, 14, 19 and 26 January, 29 May and 4 June, 3 and 18 September). The official dates are on the <a class="link" href="rules.html${datesHeading ? '#' + datesHeading : ''}">Rules and dates</a> page.</p>
<div id="piano-sintesi" class="piano-sintesi"></div>
<div id="piano-avviso" class="avviso" hidden></div>
<ol id="piano-settimane" class="settimane"></ol>
</section>`;
  const body = header({ crumbs: `<a href="index.html">Maths OFA</a>${sep}<span>Study plan</span>`, title: 'Study plan',
    sub: esc(r?.meta.breve || 'A week-by-week plan until the test, with the method to study each module.') })
    + `<div class="contenitore">${tool}</div>`
    + (r ? `<div class="contenitore pagina-modulo" style="margin-top:3rem">${contents(r.toc)}<article class="testo">${r.html}</article></div>` : '');
  page({ path: 'plan.html', title: 'Study plan — Maths OFA', description: 'A week-by-week study plan to make up the maths OFA, tuned to the date of the test.', body, active: 'plan', reading: false, moduleData: true });
}

/* ---------- home page ---------- */

{
  const rows = modules.map(m => {
    const units = m.ready ? unitCodes(m).join(' · ') : '';
    const title = m.ready ? `<a href="${m.url}">${esc(m.title)}</a><small>${esc(m.meta.breve)}</small>` : `${esc(m.title)}<small>in preparation</small>`;
    const progress = m.ready ? '<span class="avanz"><span class="barra-avanz"><i></i></span><span>—</span></span>' : '';
    return `<tr${m.ready ? ` data-modulo="${m.n}"` : ' class="in-arrivo"'}><td class="n">${m.n}</td><td class="titolo">${title}</td><td class="meta">${units}</td><td class="meta">${m.ready ? `about ${esc(m.meta.ore)} h` : ''}</td><td class="meta">${progress}</td></tr>`;
  }).join('\n');
  const steps = [
    ['Check that you have the OFA.', 'The activity “INT1475 OFA - MATEMATICA” appears in your online transcript (libretto) on <a href="https://my.unito.it" target="_blank" rel="noopener">MyUnito</a> if your TOLC-S score in Basic Mathematics is below 5/20.'],
    ['Enrol in the “OFA Matematica” course.', `On the <a href="${PLATFORM}" target="_blank" rel="noopener">OFA platform</a>, with your UniTo SCU credentials; enrolment needs no key.`],
    ['Study the programme of the eight modules.', 'The test questions are drawn from all the course material. The notes of this guide follow the same programme; the <a href="plan.html">study plan</a> spreads it over the weeks.'],
    ['Book a sitting on MyUnito.', 'Exams section, activity INT1475: one sitting per exam period, limited places (about 60 in 2025/26).'],
    ['Take the test.', 'In the Turing Lab, with an ID document and your SCU credentials: five questions in 45 minutes, pass mark 6/10, no calculator. The test is in Italian.'],
  ].map(([t, p]) => `<li><div><b>${t}</b><p>${p}</p></div></li>`).join('');
  const calendar = [
    ['24 and 28 November 2025', 'three sittings', 'from 7 November'],
    ['14, 19 and 26 January 2026', 'three sittings', 'from late November'],
    ['29 May and 4 June 2026', 'two sittings', 'from 27 February'],
    ['3 and 18 September 2026', 'two sittings, no limit on places', 'from July'],
  ].map(([q, t, i]) => `<tr><td>${q}</td><td>${t}</td><td>${i}</td></tr>`).join('');
  const faq = [
    ['How do you know if you have the OFA?', '<p>From your TOLC-S score: less than 5 out of 20 in the Basic Mathematics section. The activity “INT1475 OFA - MATEMATICA” appears in your online transcript on MyUnito.</p>'],
    ['What happens if you don\'t pass it within the first year?', '<p>Second-year exams cannot be recorded until the OFA is passed: the 2026/27 Degree Programme Guide requires, for the exams of the years after the first, at least 21 CFU (ECTS credits) of first-year exams <em>and</em> the maths OFA passed.</p>'],
    ['Can you take first-year exams in the meantime?', '<p>Yes: the OFA only blocks second-year exams.</p>'],
    ['How many times can you take the test?', '<p>One sitting per exam period, but there are several periods during the year: in 2025/26 in November, January, May-June and September.</p>'],
    ['Is a calculator allowed?', '<p>No. Students with a disability or a specific learning disorder (DSA) can request compensatory tools and a third more time, following the University\'s procedure before the test.</p>'],
    ['Is the course in English?', '<p>No: the “OFA Matematica” course, its material and the test are in Italian. This guide is an English translation of the Italian original; the <a href="glossary.html">Italian glossary</a> lists the words and phrases you will meet.</p>'],
  ].map(([d, r]) => `<details><summary>${d}</summary><div class="risposta">${r}</div></details>`).join('');
  const body = `<section class="frontespizio"><div class="contenitore">
<span class="occhiello entra" style="--i:0">Unofficial guide · Computer Science degree programme · University of Turin · A.Y. 2026/27</span>
<h1 class="entra" style="--i:1">Making up the maths OFA</h1>
<p class="sotto entra" style="--i:2">Anyone who scored less than 5 out of 20 in the Basic Mathematics section of the TOLC-S must clear the additional learning requirement (OFA, <span lang="it">obbligo formativo aggiuntivo</span>) within the first year. This guide collects the official rules, the <strong>notes for the eight modules</strong> of the catch-up course and the tools to prepare for the test.</p>
<p class="sotto entra" style="--i:2;font-size:1rem;margin-top:.9rem">English translation of <a class="link" href="${IT_SITE}" hreflang="it">the Italian original</a>: if the two differ, the Italian version prevails. The course and the test are in Italian: see the <a class="link" href="glossary.html">Italian glossary</a>.</p>
<p class="data-agg entra" style="--i:3"><span>Updated on ${UPDATED}</span><span>Sources on the <a class="link" href="rules.html#sources">Rules and dates</a> page</span></p>
</div></section>

<section><div class="contenitore sintesi rivela">
<div>
<h2>In short</h2>
<dl class="fatti-tab">
<dt>Who has the OFA</dt><dd>Anyone with less than 5/20 in Basic Mathematics on the TOLC-S</dd>
<dt>How to clear it</dt><dd>The “OFA Matematica” course on www.ofa.unito.it and an in-person test</dd>
<dt>The test</dt><dd>Five questions, 45 minutes, pass mark 6/10, no calculator</dd>
<dt>Where</dt><dd>Turing Lab, Department of Computer Science, via Pessinetto 12</dd>
<dt>Registration</dt><dd>MyUnito, activity INT1475: one sitting per exam period, limited places</dd>
<dt>Deadline</dt><dd>Within the first year; otherwise second-year exams cannot be recorded</dd>
</dl>
</div>
<div>
<h2>In this guide</h2>
<ol class="contenuti">
<li><a href="#programme"><span>Notes for the eight modules<small>Theory, worked examples, exercises and checks</small></span></a></li>
<li><a href="formulas.html"><span>Formula sheet<small>Definitions and rules on one page</small></span></a></li>
<li><a href="entry-test.html"><span>Entry test<small>24 questions to choose where to start</small></span></a></li>
<li><a href="plan.html"><span>Study plan<small>Week by week until the test</small></span></a></li>
<li><a href="mock-tests.html"><span>Mock tests<small>Eight timed tests, with marking</small></span></a></li>
<li><a href="rules.html"><span>Rules, dates and contacts<small>With the official sources</small></span></a></li>
<li><a href="course.html"><span>The official course<small>Modules, activities and errata of the material</small></span></a></li>
<li><a href="glossary.html"><span>Italian glossary<small>The Italian words of the course and the test</small></span></a></li>
</ol>
</div>
</div></section>

<section class="sezione" id="programme"><div class="contenitore">
<div class="sezione-testa rivela"><h2><span class="num">1</span>The programme: eight modules</h2><p>The notes follow the modules of the “OFA Matematica” catch-up course, on which the test is built. Each module has the theory explained from the start, definitions and rules, methods, worked examples, common mistakes and graphs; at the end, exercises with solutions, a quiz and a checklist.</p></div>
<div class="rivela"><table class="programma">
<thead><tr><th>No.</th><th>Module</th><th>Units</th><th>Study</th><th>Checklist</th></tr></thead>
<tbody>
${rows}
</tbody></table></div>
<p class="nota-piccola rivela">After the <a class="link" href="entry-test.html">entry test</a>, a red dot next to the number marks the modules to go over more carefully.</p>
</div></section>

<section class="sezione" id="procedure"><div class="contenitore">
<div class="sezione-testa rivela"><h2><span class="num">2</span>How to clear it</h2><p>The procedure set by the degree programme for A.Y. 2026/27: take the catch-up course on the OFA platform and pass the in-person test within the first year.</p></div>
<ol class="passi-lista rivela">${steps}</ol>
</div></section>

<section class="sezione" id="calendar"><div class="contenitore">
<div class="sezione-testa rivela"><h2><span class="num">3</span>Test calendar</h2><p>The 2026/27 calendar has not been published yet (checked on ${UPDATED}). The degree programme recommends taking the test in the autumn sittings. For reference, the 2025/26 sessions, all in the Turing Lab:</p></div>
<div class="tabella rivela" style="max-width:50rem"><table><thead><tr><th>Session</th><th>Sittings</th><th>Registration</th></tr></thead><tbody>${calendar}</tbody></table></div>
<p class="nota-piccola rivela">The official dates appear on the ${ext(REQUIREMENTS, 'degree programme\'s requirements page')} (in Italian) and in the ${ext(ESSE3, 'exam listings on Esse3')} (activity INT1475). All the 2025/26 sittings, with registrations and places, are on the <a class="link" href="rules.html">Rules and dates</a> page.</p>
</div></section>

<section class="sezione" id="faq"><div class="contenitore">
<div class="sezione-testa rivela"><h2><span class="num">4</span>Frequently asked questions</h2><p>The complete rules, with the sources, are on the <a class="link" href="rules.html">Rules and dates</a> page.</p></div>
<div class="faq rivela">${faq}</div>
</div></section>

<section class="sezione" id="first-year"><div class="contenitore">
<div class="sezione-testa rivela"><h2><span class="num">5</span>The rest of the first year</h2><p>The OFA is only one part of the first year. For the actual courses there is this guide's twin, the <strong>Computer Science notes</strong>: lesson by lesson, with worked examples, simulators and exercises, plus sheets for every first-year course for channels A, B and C, with exams, exam dates and lecturers.</p></div>
<p class="rivela"><a class="btn" href="${FIRST_YEAR_NOTES}">Open the first-year notes</a></p>
</div></section>`;
  page({ path: 'index.html', title: 'Making up the maths OFA — Computer Science UniTo 2026/27', description: 'Unofficial guide to making up the maths OFA for Computer Science at the University of Turin: rules, notes for the eight modules, study plan and mock tests. English translation of the Italian original.', body, katex: false });
}

/* ---------- page not found (GitHub Pages uses 404.html with absolute addresses) ---------- */

{
  const base = '/unito-ofa-maths/';
  const body = `<section class="frontespizio"><div class="contenitore"><span class="occhiello entra" style="--i:0">Error 404</span>
<h1 class="entra" style="--i:1">Page not found</h1>
<p class="sotto entra" style="--i:2">The address may have changed. From the home page you can reach every section of the guide.</p>
<p class="entra" style="--i:3;margin-top:1.6rem"><a class="btn" href="${base}index.html">Home page</a> <a class="btn" href="${base}index.html#programme">Notes</a> <a class="btn" href="${base}rules.html">Rules and dates</a></p></div></section>`;
  page({ path: '404.html', title: 'Page not found — Maths OFA', description: 'Page not found.', body, katex: false });
  write('404.html', read('404.html').replace(/(href|src)="(?!https?:|data:|#|\/)([^"]*)"/g, (_, a, u) => `${a}="${base}${u}"`));
}

/* ---------- single files for AIs ---------- */

{
  const warning = "> Disclaimer: research and texts are based on public sources of the degree programme and of UniTo and on the material of the “OFA Matematica” course; every mathematical result was recomputed independently with symbolic computation. They are accurate and sourced, but may contain errors or outdated data; the author takes no responsibility. For rules, dates and registration only the official sources are authoritative (the degree programme's requirements page, Esse3, the OFA platform). Full text: DISCLAIMER.md at the root of the repository. Licence CC BY-NC-SA 4.0.";
  const merge = (name, title, description, parts) => {
    const head = `# ${title}\n\n${description} Generated by \`tools/build.mjs\` (content updated on ${UPDATED}): do not edit it by hand, edit the single files and build again. Before attaching it, fill in the “About you” sheet (file \`ai/student.md\`) if you want tailored help.\n\n${warning}\n`;
    const body = parts.filter(exists).map(p => `\n\n---\n\n<!-- FILE: ${p} -->\n> File: \`${p}\`\n\n${read(p).trim()}`).join('');
    write(`ai/${name}`, (head + body + '\n').replace(/\]\(sito:/g, `](${SITE}`));
  };
  const base = ['ai/README.md', 'ai/ai-instructions.md', 'ai/student.md', 'ai/ofa-rules.md', 'ai/official-course.md', 'ai/italian-glossary.md', 'ai/study-plan.md'];
  merge('_ALL_IN_ONE.md', 'Maths OFA, Computer Science UniTo 2026/27 — full context',
    'All the files of `ai/` merged into one: rules, official course and errata, Italian glossary, study plan, notes for the eight modules, entry test, mock tests and file syntax.',
    [...base, ...ready.map(m => `ai/modules/${m.base}.md`), 'ai/entry-test.md', 'ai/mock-tests.md', 'ai/FORMAT.md']);
  merge('_ESSENTIALS.md', 'Maths OFA, Computer Science UniTo 2026/27 — essential context',
    'Instructions, student sheet, rules, official course, Italian glossary and study plan, without the module notes: enough for questions about rules, dates, registration and study organisation.', base);
}

console.log(`${ready.length}/8 modules · ${errors} errors`);
if (errors) process.exitCode = 1;
