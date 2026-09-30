// Checks the Markdown files of the OFA site: formulas, callouts, exercises, quizzes, simulations, graphs, number lines, checklists.
// Usage: node tools/check.mjs <file.md> [more files…]   → lists errors and warnings; exits with 1 if there are errors.
// The syntax keywords (callout types, «::: esercizio», D:/N:/=, graph keys…) are the Italian ones described in ai/FORMAT.md.
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { compila } from './ofamd.mjs';

const REQUIRED = { modules: ['modulo', 'titolo', 'breve', 'ore', 'unita'] };
let errors = 0;
for (const file of process.argv.slice(2)) {
  const source = readFileSync(file, 'utf8');
  const kind = /[\\/]modules[\\/]/.test(file) ? 'modules' : '';
  const r = compila(source, { file: basename(file), richiedi: REQUIRED[kind] || [], lingua: 'en' });
  const s = r.stats;
  console.log(`\n${file}\n  ${s.parole} words · ${r.toc.filter(t => t.livello === 2).length} sections · ${s.esercizio} exercises · ${s.domande} questions (${s.quiz} quizzes, ${s.sim} simulations) · ${s.grafico} graphs · ${s.retta} number lines · ${s.check} checklists`);
  for (const e of r.errori) console.log('  ERROR ' + e);
  for (const w of r.avvisi) console.log('  warning ' + w);
  if (!r.errori.length) console.log('  ok, no errors');
  errors += r.errori.length;
}
process.exit(errors ? 1 : 0);
