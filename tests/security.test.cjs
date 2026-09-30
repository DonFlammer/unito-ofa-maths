const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { webcrypto, pbkdf2Sync, createHash } = require('node:crypto');
const base = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(base, 'assets/js/studio.js'), 'utf8');
const memory = fs.readFileSync(path.join(base, 'assets/js/memoria.js'), 'utf8');
function storage() {
  const data = new Map();
  return { setItem: (k, v) => data.set(String(k), String(v)), getItem: k => data.has(String(k)) ? data.get(String(k)) : null,
    removeItem: k => data.delete(String(k)), key: i => [...data.keys()][i] ?? null, get length() { return data.size; } };
}
async function sandbox(local = storage(), session = storage(), clock = { now: Date.now() }) {
  const window = {}; window.self = window; window.top = window;
  const context = vm.createContext({ window, document: { documentElement: { lang: 'it', style: { setProperty() {} } } },
    location: { href: 'https://donflammer.github.io/unito-informatica/index.html', origin: 'https://donflammer.github.io', protocol: 'https:' },
    localStorage: local, sessionStorage: session, crypto: webcrypto, TextEncoder, TextDecoder, URL,
    Date: class extends Date { static now() { return clock.now; } },
    btoa: s => Buffer.from(s, 'binary').toString('base64'), atob: s => Buffer.from(s, 'base64').toString('binary') });
  vm.runInContext(memory, context, { timeout: 3000 });
  const end = source.indexOf('  /* ---------- lezioni degli appunti:');
  assert.ok(end > 0);
  await vm.runInContext(source.slice(0, end) + '\nglobalThis.api={crea,accedi,esci,elimina,cambiaCodice,importa,codiceTrasferimento,attivo,profili,pulisci,urlLezione,dataValida,salva};})();', context, { timeout: 3000 });
  return { api: context.api, local, session, memory: window.StudioStorage, clock };
}
const code = 'Correct Example 567!';
const lesson = { 'Demo-checklist': { totale: 3, it: { titolo: 'PRIVATE_PROGRESS_MARKER', url: 'https://donflammer.github.io/unito-informatica/appunti/PROG1/index.html' } } };
function legacy() {
  const nome = 'LegacyUser', sale = '0123456789abcdef0123456789abcdef';
  const impronta = pbkdf2Sync('abcd5678', `${sale}:${nome.toLowerCase()}`, 300000, 32, 'sha256').toString('hex');
  return { nome, sale, impronta, creato: '2026-09-30', dati: { 'ofa:prog:1': [2, 3] } };
}
test('encrypted profiles: session storage, save, reload, logout and wrong-code rejection', async () => {
  const s = await sandbox(); s.local.setItem('ofa:prog:1', '[1,3]');
  assert.equal(await s.api.crea('Alice', code), '');
  assert.equal(s.local.getItem('ofa:prog:1'), null);
  assert.equal(s.session.getItem('ofa:prog:1'), '[1,3]');
  s.memory.setItem('studio:lezioni', JSON.stringify(lesson)); await s.api.salva();
  const saved = s.local.getItem('studio:profili');
  assert.equal(saved.includes('PRIVATE_PROGRESS_MARKER'), false); assert.equal(saved.includes(code), false);
  assert.equal(JSON.parse(saved).alice.v, 2); assert.equal(JSON.parse(saved).alice.impronta, undefined);
  const resumed = await sandbox(s.local, s.session, s.clock); assert.equal(resumed.api.attivo().nome, 'Alice');
  assert.equal(JSON.parse(resumed.memory.getItem('studio:lezioni'))['Demo-checklist'].it.titolo, 'PRIVATE_PROGRESS_MARKER');
  await resumed.api.esci(); assert.equal(resumed.api.attivo(), null);
  assert.equal(s.session.getItem('studio:sessione:v2'), null); assert.equal(s.session.getItem('studio:lezioni'), null);
  assert.ok(await resumed.api.accedi('Alice', 'Wrong Example 567!'));
  assert.equal(await resumed.api.accedi('Alice', code), '');
  assert.ok(await resumed.api.accedi('Alice', code.toLowerCase()));
});
test('profile activation ignores the enumeration order of Web Storage keys', async () => {
  const s = await sandbox();
  s.local.setItem('ofa:prog:1', '[2,3]'); s.local.setItem('ofa:check:m1', '[0,2]'); s.local.setItem('Demo-checklist', '{"item":true}');
  const key = s.session.key; s.session.key = i => key(s.session.length - 1 - i);
  assert.equal(await s.api.crea('Alice', code), ''); assert.equal(s.api.attivo().nome, 'Alice');
  assert.equal(s.memory.getItem('ofa:prog:1'), '[2,3]'); assert.equal(s.memory.getItem('ofa:check:m1'), '[0,2]');
  const resumed = await sandbox(s.local, s.session, s.clock); assert.equal(resumed.api.attivo().nome, 'Alice');
  assert.equal(resumed.memory.getItem('Demo-checklist'), '{"item":true}');
});
test('the working session preserves an unticked checkbox across navigation', async () => {
  const s = await sandbox(); await s.api.crea('Alice', code); s.memory.setItem('Demo-checklist', JSON.stringify({ item: true })); await s.api.salva();
  s.memory.setItem('Demo-checklist', JSON.stringify({ item: false }));
  const resumed = await sandbox(s.local, s.session, s.clock);
  assert.equal(JSON.parse(resumed.memory.getItem('Demo-checklist')).item, false);
});
test('encrypted transfer: correct code, damaged data, foreign browser and code changes', async () => {
  const s = await sandbox(); await s.api.crea('Alice', code);
  s.memory.setItem('studio:lezioni', JSON.stringify(lesson)); s.memory.setItem('ofa:prog:1', '[2,3]');
  const transfer = await s.api.codiceTrasferimento(); assert.ok(transfer.startsWith('STUDIO2.'));
  const record = JSON.parse(Buffer.from(transfer.slice(8), 'base64url').toString());
  assert.equal(record.dati, undefined); assert.equal(JSON.stringify(record).includes('PRIVATE_PROGRESS_MARKER'), false);
  const target = await sandbox(); assert.ok(await target.api.importa(transfer, 'Wrong Example 567!'));
  assert.equal(await target.api.importa(transfer, code), ''); assert.equal(target.memory.getItem('ofa:prog:1'), '[2,3]');
  record.cifrato = (record.cifrato[0] === 'A' ? 'B' : 'A') + record.cifrato.slice(1);
  const damaged = 'STUDIO2.' + Buffer.from(JSON.stringify(record)).toString('base64url');
  assert.ok(await target.api.importa(damaged, code));
  assert.ok(await target.api.cambiaCodice(code, 'New Example 987!', 'Different Example 987!'));
  assert.equal(await target.api.cambiaCodice(code, 'New Example 987!', 'New Example 987!'), '');
  await target.api.esci(); assert.ok(await target.api.accedi('Alice', code));
  assert.equal(await target.api.accedi('Alice', 'New Example 987!'), '');
});
test('an asynchronous save cannot overwrite a profile changed in another tab', async () => {
  const s = await sandbox(); await s.api.crea('Alice', code); s.memory.setItem('ofa:prog:1', '[2,3]');
  const pending = s.api.salva(), profiles = JSON.parse(s.local.getItem('studio:profili'));
  const changedSalt = 'a'.repeat(32); profiles.alice.sale = changedSalt; s.local.setItem('studio:profili', JSON.stringify(profiles));
  await pending; assert.equal(JSON.parse(s.local.getItem('studio:profili')).alice.sale, changedSalt);
  assert.equal(s.api.attivo(), null);
});
test('legacy profiles and STUDIO1 transfers migrate without losing progress', async () => {
  const p = legacy(), local = storage(); local.setItem('studio:profili', JSON.stringify({ legacyuser: p }));
  local.setItem('studio:attivo', JSON.stringify('legacyuser')); local.setItem('ofa:prog:1', '[3,3]');
  const s = await sandbox(local); assert.equal(s.api.attivo(), null); assert.equal(local.getItem('ofa:prog:1'), null);
  assert.equal(await s.api.accedi('LegacyUser', 'AbCD5678'), '');
  assert.equal(s.api.profili().legacyuser.v, 2); assert.equal(s.api.profili().legacyuser.normalizza, true);
  assert.equal(s.memory.getItem('ofa:prog:1'), '[3,3]');
  await s.api.esci(); assert.equal(await s.api.accedi('LegacyUser', 'ABCD5678'), '');
  const old = 'STUDIO1.' + Buffer.from(JSON.stringify({ n: p.nome, s: p.sale, i: p.impronta, c: p.creato, d: p.dati })).toString('base64url');
  const target = await sandbox(); assert.equal(await target.api.importa(old, 'abcd5678'), '');
  assert.ok((await target.api.codiceTrasferimento()).startsWith('STUDIO2.'));
});
test('strong new codes, bounded imports, valid dates and lesson URLs', async () => {
  const s = await sandbox(); assert.ok(await s.api.crea('Alice', '1234')); assert.ok(await s.api.crea('Al', code));
  assert.ok(await s.api.importa('x'.repeat(200001), code)); assert.ok(await s.api.importa('STUDIO3.invalid', code));
  assert.equal(s.api.dataValida('2028-02-29'), true); assert.equal(s.api.dataValida('2027-02-29'), false);
  assert.equal(s.api.dataValida('2027-04-31'), false); assert.equal(s.api.dataValida('2027-13-01'), false);
  assert.equal(s.api.dataValida('2027-01-01'), true); assert.equal(s.api.dataValida('1899-12-31'), false);
  assert.equal(s.api.pulisci('ofa:piano', { data: '2027-02-29', ore: 100 }).data, '');
  assert.equal(s.api.pulisci('ofa:piano', { ore: 100 }).ore, 7);
  assert.equal(s.api.urlLezione('https://example.org/lesson'), '');
  assert.equal(s.api.urlLezione('/unrelated-project/index.html'), '');
  assert.equal(s.api.urlLezione('data:text/plain,hello'), '');
  assert.ok(s.api.urlLezione('/unito-ofa-maths/modules/06-functions.html'));
  assert.equal(s.api.pulisci('ofa:prog:1', [4, 3]), undefined);
  assert.equal(s.api.pulisci('ofa:sim-1', 11), undefined);
  assert.equal(s.api.pulisci('ofa:check:m1', Array(1000).fill(1)), undefined);
});
test('session expiration and deletion remove the plaintext working copy and key', async () => {
  const s = await sandbox(); await s.api.crea('Alice', code); s.memory.setItem('ofa:prog:1', '[2,3]'); await s.api.salva();
  s.clock.now += 31 * 60000; assert.equal(s.api.attivo(), null); assert.equal(s.memory.getItem('ofa:prog:1'), null);
  assert.equal(s.session.getItem('studio:sessione:v2'), null); assert.equal(s.session.getItem('ofa:prog:1'), null);
  assert.equal(await s.api.accedi('Alice', code), ''); assert.equal(s.memory.getItem('ofa:prog:1'), '[2,3]');
  await s.api.elimina(); assert.equal(s.api.profili().alice, undefined); assert.equal(s.session.getItem('studio:sessione:v2'), null);
});
test('storage failures preserve anonymous progress instead of reporting success', async () => {
  const s = await sandbox(); s.local.setItem('ofa:prog:1', '[2,3]');
  const original = s.local.setItem; s.local.setItem = (k, v) => { if (k === 'studio:profili') throw new Error('Full storage'); original(k, v); };
  await assert.rejects(() => s.api.crea('Alice', code)); assert.equal(s.local.getItem('ofa:prog:1'), '[2,3]');
});
function htmlFiles(dir) {
  const excluded = new Set(['.git', 'node_modules', 'moodle', 'slide', 'slides', 'guida_degli_studenti_di']);
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => excluded.has(e.name) ? [] : e.isDirectory() ? htmlFiles(path.join(dir, e.name)) : e.name.endsWith('.html') ? [path.join(dir, e.name)] : []);
}
test('every page loads the storage/frame guard before scripts and has correct CSP hashes', () => {
  for (const file of htmlFiles(base)) {
    const html = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
    const policy = html.match(/<meta http-equiv="Content-Security-Policy" content="([^"]+)"/);
    assert.ok(policy, file); assert.ok(policy[1].includes("default-src 'none'"));
    assert.ok(!policy[1].includes("script-src 'self' 'unsafe-inline'"));
    assert.ok(/<script src="[^"]*assets\/js\/memoria\.js"><\/script>/.test(html), file);
    assert.ok(html.indexOf('memoria.js') < html.indexOf('<script>'), file);
    for (const [, attrs, js] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
      if (/\bsrc\s*=/.test(attrs) || /application\/(?:json|ld\+json)/.test(attrs) || !js.trim()) continue;
      const hash = createHash('sha256').update(js).digest('base64'); assert.ok(policy[1].includes(`'sha256-${hash}'`), file);
    }
    for (const tag of html.match(/<[a-z][^>]*>/gi) || []) assert.equal(/\son[a-z]+\s*=/.test(tag), false, file);
  }
});
