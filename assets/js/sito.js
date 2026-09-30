// Comportamenti del sito OFA: menu, animazioni, indice, quiz, test d'ingresso, simulazioni, checklist, piano di studio.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const leggi = (k, def) => { try { const v = (window.StudioStorage || localStorage).getItem(k); return v === null ? def : JSON.parse(v); } catch { return def; } };
  const scrivi = (k, v) => { try { (window.StudioStorage || localStorage).setItem(k, JSON.stringify(v)); } catch { /* memoria del browser non disponibile */ } };
  // valori salvati: si usano solo se hanno la forma attesa (possono arrivare da un profilo importato o da altre pagine)
  const coppiaSalvata = v => (Array.isArray(v) && v.length === 2 && v.every(x => Number.isInteger(x) && x >= 0) ? v : null);
  const votoSalvato = v => (typeof v === 'number' && v >= 0 && v <= 10 ? v : null);
  const elencoSalvato = v => (Array.isArray(v) ? v : []);
  const oggettoSalvato = v => (v && typeof v === 'object' && !Array.isArray(v) ? v : null);
  const radice = document.body.dataset.radice || '';
  // lingua della pagina: lo stesso script serve il sito italiano e quello inglese
  const EN = (document.documentElement.lang || '').startsWith('en');
  const t = (it, en) => (EN ? en : it);
  const PAG = EN ? { piano: 'plan.html', test: 'entry-test.html', sim: 'mock-tests.html' } : { piano: 'piano.html', test: 'test-ingresso.html', sim: 'simulazioni.html' };
  const datiModuli = (() => { try { return JSON.parse($('#dati-moduli')?.textContent || '[]'); } catch { return []; } })();

  /* ---------- movimento ridotto ---------- */
  const html = document.documentElement;
  if (leggi('ofa:moto', '') === 'ridotto') html.classList.add('meno-moto');
  // due comandi uguali: il pulsante nella barra in alto e l'interruttore nel piede (ridotte = resta solo lo sfondo nero)
  const comandiMoto = $$('#interruttore-moto, #anim-toggle');
  const aggiornaMoto = () => comandiMoto.forEach(b => b.setAttribute('aria-pressed', html.classList.contains('meno-moto') ? 'true' : 'false'));
  aggiornaMoto();
  comandiMoto.forEach(b => b.addEventListener('click', () => {
    const on = html.classList.toggle('meno-moto');
    aggiornaMoto();
    scrivi('ofa:moto', on ? 'ridotto' : '');
    document.dispatchEvent(new Event('ofa:moto'));
    if (on) $$('.rivela').forEach(e => e.classList.add('visto'));
  }));

  /* ---------- barra in alto ---------- */
  const barra = $('.barra');
  const menuBtn = $('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const aperto = document.body.classList.toggle('menu-aperto');
      menuBtn.setAttribute('aria-expanded', aperto ? 'true' : 'false');
    });
    $$('.menu a').forEach(a => a.addEventListener('click', () => { document.body.classList.remove('menu-aperto'); menuBtn.setAttribute('aria-expanded', 'false'); }));
  }
  const barraLettura = $('.progresso-lettura');
  let ultimoY = window.scrollY, attesa = false;
  const suScroll = () => {
    attesa = false;
    const y = window.scrollY;
    if (barra) {
      barra.classList.toggle('scorsa', y > 8);
      if (!document.body.classList.contains('menu-aperto')) barra.classList.toggle('nascosta', y > ultimoY && y > 280);
    }
    if (barraLettura) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      barraLettura.style.setProperty('--p', h > 0 ? Math.min(1, y / h).toFixed(4) : 0);
    }
    ultimoY = y;
  };
  window.addEventListener('scroll', () => { if (!attesa) { attesa = true; requestAnimationFrame(suScroll); } }, { passive: true });
  suScroll();

  /* ---------- apparizioni ---------- */
  const rivela = $$('.rivela');
  if ('IntersectionObserver' in window && !html.classList.contains('meno-moto')) {
    const io = new IntersectionObserver(voci => voci.forEach(v => { if (v.isIntersecting) { v.target.classList.add('visto'); io.unobserve(v.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rivela.forEach(e => io.observe(e));
  } else rivela.forEach(e => e.classList.add('visto'));

  /* ---------- indice che segue la lettura (chiuso all'inizio sugli schermi stretti) ---------- */
  const indiceBox = $('.indice > details');
  if (indiceBox && window.innerWidth < 1120) indiceBox.open = false;
  const linkIndice = $$('.indice a[href^="#"]');
  if (linkIndice.length && 'IntersectionObserver' in window) {
    const mappa = new Map(linkIndice.map(a => [decodeURIComponent(a.getAttribute('href').slice(1)), a]));
    const titoli = Array.from(mappa.keys()).map(id => document.getElementById(id)).filter(Boolean);
    const visibili = new Set();
    const aggiorna = () => {
      let scelto = null;
      for (const t of titoli) if (t.getBoundingClientRect().top < window.innerHeight * 0.32) scelto = t;
      linkIndice.forEach(a => a.classList.remove('attivo'));
      if (scelto) mappa.get(scelto.id)?.classList.add('attivo');
    };
    const io = new IntersectionObserver(v => { v.forEach(x => x.isIntersecting ? visibili.add(x.target) : visibili.delete(x.target)); aggiorna(); }, { rootMargin: '0px 0px -60% 0px' });
    titoli.forEach(t => io.observe(t));
    window.addEventListener('scroll', () => requestAnimationFrame(aggiorna), { passive: true });
    linkIndice.forEach(a => a.addEventListener('click', () => { const d = a.closest('details'); if (d && window.innerWidth < 1120) d.open = false; }));
  }

  /* ---------- correzione delle risposte ---------- */
  const numeroDa = s => {
    const t = String(s).trim().replace(/\s+/g, '').replace(/−/g, '-').replace(',', '.');
    if (!t) return NaN;
    const f = t.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (f) return Number(f[1]) / Number(f[2]);
    return /^-?(\d+(\.\d+)?|\.\d+)$/.test(t) ? Number(t) : NaN;
  };
  function statoParte(p) {                                  // null = non risposta, true/false = giusta/sbagliata
    const tipo = p.dataset.tipo;
    if (tipo === 'numerica') {
      const inp = $('input', p), v = numeroDa(inp.value);
      if (!inp.value.trim()) return null;
      if (Number.isNaN(v)) return false;
      const giusto = Number(inp.dataset.valore), toll = Number(inp.dataset.toll) || 1e-9;
      return Math.abs(v - giusto) <= toll + 1e-9 * Math.max(1, Math.abs(giusto));
    }
    const inp = $$('input', p);
    if (!inp.some(i => i.checked)) return null;
    return inp.every(i => i.checked === (i.dataset.ok === '1'));
  }
  function mostraParte(p, giusta) {
    const tipo = p.dataset.tipo;
    if (tipo === 'numerica') {
      const box = $('.q-numero', p);
      box.classList.add(giusta ? 'giusta' : 'errata');
      $('input', p).disabled = true;
      if (!giusta) $('.q-giusto', p).hidden = false;
    } else {
      for (const i of $$('input', p)) {
        const opz = i.closest('.opz');
        i.disabled = true;
        if (i.dataset.ok === '1' && i.checked) opz.classList.add('giusta');
        else if (i.dataset.ok !== '1' && i.checked) opz.classList.add('errata');
        else if (i.dataset.ok === '1') opz.classList.add(tipo === 'multipla' ? 'mancata' : 'giusta');
      }
    }
    const sp = $('.q-spiega', p);
    if (sp) sp.hidden = false;
  }
  function azzeraParte(p) {
    $$('input', p).forEach(i => { i.disabled = false; if (i.type === 'text') i.value = ''; else i.checked = false; });
    $$('.opz', p).forEach(o => o.classList.remove('giusta', 'errata', 'mancata'));
    $('.q-numero', p)?.classList.remove('giusta', 'errata');
    const g = $('.q-giusto', p); if (g) g.hidden = true;
    const sp = $('.q-spiega', p); if (sp) sp.hidden = true;
  }
  const scuoti = q => { q.classList.remove('scuoti'); void q.offsetWidth; q.classList.add('scuoti'); };

  /* quiz dei moduli: si verifica domanda per domanda */
  $$('.quiz:not(.diagnostico)').forEach(quiz => {
    const domande = $$('.q', quiz);
    const riepilogo = document.createElement('div');
    riepilogo.className = 'quiz-riepilogo';
    riepilogo.hidden = true;
    riepilogo.innerHTML = '<span class="voto"></span><div class="barra-avanz"><i></i></div><span class="q-esito"></span>';
    quiz.appendChild(riepilogo);
    const conta = () => {
      const fatte = domande.filter(q => q.classList.contains('fatta'));
      const giuste = fatte.filter(q => q.classList.contains('corretta')).length;
      riepilogo.hidden = !fatte.length;
      $('.voto', riepilogo).textContent = `${giuste}/${domande.length}`;
      $('.barra-avanz', riepilogo).style.setProperty('--p', (giuste / domande.length).toFixed(3));
      $('.q-esito', riepilogo).textContent = fatte.length < domande.length ? t(`${fatte.length} domande verificate su ${domande.length}`, `${fatte.length} of ${domande.length} questions checked`) : (giuste / domande.length >= 0.6 ? t('Buon risultato: completa la checklist del modulo', 'Good result: complete the module checklist') : t('Rileggi le spiegazioni e riprova tra qualche giorno', 'Reread the explanations and try again in a few days'));
    };
    domande.forEach(q => {
      const btn = $('.q-verifica', q), esito = $('.q-esito', q);
      if (!btn) return;
      btn.addEventListener('click', () => {
        if (q.classList.contains('fatta')) {
          q.classList.remove('fatta', 'corretta', 'sbagliata');
          $$('.q-parte', q).forEach(azzeraParte);
          esito.textContent = ''; esito.className = 'q-esito'; btn.textContent = t('Verifica', 'Check');
          conta();
          return;
        }
        const parti = $$('.q-parte', q), stati = parti.map(statoParte);
        if (stati.some(s => s === null)) { esito.textContent = parti.length > 1 ? t('Rispondi a tutte le parti', 'Answer every part') : t('Scegli o scrivi una risposta', 'Choose or write an answer'); esito.className = 'q-esito esito-no'; return; }
        parti.forEach((p, k) => mostraParte(p, stati[k]));
        const giuste = stati.filter(Boolean).length, tutte = giuste === stati.length;
        q.classList.add('fatta', tutte ? 'corretta' : 'sbagliata');
        if (!tutte) scuoti(q);
        esito.textContent = tutte ? t('Risposta corretta', 'Correct answer') : (giuste ? t(`${giuste} parti corrette su ${stati.length}`, `${giuste} of ${stati.length} parts correct`) : t('Risposta errata', 'Wrong answer'));
        esito.className = 'q-esito ' + (tutte ? 'esito-ok' : 'esito-no');
        btn.textContent = t('Riprova', 'Try again');
        conta();
      });
    });
  });

  /* ---------- test d'ingresso ---------- */
  const nomeModulo = tag => { const n = Number(String(tag).replace(/\D/g, '')); return datiModuli.find(m => m.numero === n); };
  // debole = meno di 2/3 delle risposte giuste (2 su 3 non è debole)
  const scarso = (g, t) => t > 0 && g / t < 2 / 3 - 1e-9;
  function mostraDiagnosi(box, risultati) {
    const righe = Object.keys(risultati).sort().map(tag => {
      const [g, t] = risultati[tag], m = nomeModulo(tag), debole = scarso(g, t);
      return `<div class="diag-riga${debole ? ' debole' : ''}"><a href="${radice}${m ? m.url : '#'}">${m ? `${String(m.numero).padStart(2, '0')} · ${m.titolo}` : tag}</a><div class="barra-avanz" style="--p:${(g / t).toFixed(3)}"><i></i></div><span class="punti">${g}/${t}</span></div>`;
    }).join('');
    const deboli = Object.keys(risultati).filter(t => scarso(...risultati[t])).sort();
    const tot = Object.values(risultati).reduce((a, [g, t]) => [a[0] + g, a[1] + t], [0, 0]);
    box.innerHTML = `<div class="diag-box"><span class="occhiello">${t('Risultato', 'Result')}</span><h3>${t(`${tot[0]} risposte corrette su ${tot[1]}`, `${tot[0]} correct answers out of ${tot[1]}`)}</h3>`
      + `<div class="diag-griglia">${righe}</div>`
      + (deboli.length ? (() => { const da = deboli.map(g => { const m = nomeModulo(g); return m ? `<a class="link" href="${radice}${m.url}">${t('modulo', 'module')} ${m.numero}</a>` : g; }).join(', ');
          return t(`<p>Conviene partire da ${da}. Il <a class="link" href="${radice}${PAG.piano}">piano di studio</a> assegna ora più tempo a questi moduli.</p>`, `<p>Start from ${da}. The <a class="link" href="${radice}${PAG.piano}">study plan</a> now gives these modules more time.</p>`); })()
        : t(`<p>Nessun modulo sotto i 2/3: segui il <a class="link" href="${radice}${PAG.piano}">piano di studio</a> con un ripasso più rapido e passa presto alle simulazioni.</p>`, `<p>No module below 2/3: follow the <a class="link" href="${radice}${PAG.piano}">study plan</a> with a quicker review and move on to the mock tests early.</p>`))
      + `<button type="button" class="btn diag-rifai">${t('Rifai il test', 'Take the test again')}</button></div>`;
    $('.diag-rifai', box).addEventListener('click', () => {
      const quiz = box.closest('.quiz');
      $$('.q', quiz).forEach(q => { q.classList.remove('fatta', 'corretta', 'sbagliata'); $$('.q-parte', q).forEach(azzeraParte); });
      box.innerHTML = ''; $('.diag-verifica', quiz).hidden = false;
      quiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  $$('.quiz.diagnostico').forEach(quiz => {
    const btn = $('.diag-verifica', quiz), box = $('.diag-esito', quiz);
    btn.addEventListener('click', () => {
      const domande = $$('.q', quiz);
      const vuote = domande.filter(q => $$('.q-parte', q).some(p => statoParte(p) === null)).length;
      if (vuote && !confirm(t(`Hai lasciato ${vuote} domande senza risposta: contano come sbagliate. Correggo lo stesso?`, `You left ${vuote} questions unanswered: they count as wrong. Mark the test anyway?`))) return;
      const risultati = {};
      domande.forEach(q => {
        const tag = q.dataset.tag || 'altro';
        risultati[tag] = risultati[tag] || [0, 0];
        $$('.q-parte', q).forEach(p => {
          const s = statoParte(p) === true;
          mostraParte(p, s);
          risultati[tag][0] += s ? 1 : 0; risultati[tag][1] += 1;
          q.classList.add('fatta', s ? 'corretta' : 'sbagliata');
        });
      });
      scrivi('ofa:diag', { data: new Date().toISOString().slice(0, 10), risultati });
      btn.hidden = true;
      mostraDiagnosi(box, risultati);
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- simulazioni ---------- */
  const mmss = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  $$('.sim').forEach(sim => {
    const id = sim.id, domande = $('.sim-domande', sim), minuti = Number(sim.dataset.tempo) || 45;
    const parti = $$('.q-parte', sim);
    domande.hidden = true;
    const migliore = votoSalvato(leggi(`ofa:${id}`, null));
    const testa = $('.sim-testa', sim);
    const stato = document.createElement('span');
    stato.className = 'sim-stato';
    stato.textContent = migliore !== null ? t(`Miglior voto: ${migliore}/10`, `Best mark: ${migliore}/10`) : t('Non ancora svolta', 'Not taken yet');
    const avvio = document.createElement('button');
    avvio.type = 'button'; avvio.className = 'btn btn-rosso';
    avvio.textContent = t('Inizia la prova (45 minuti)', 'Start the test (45 minutes)');
    testa.append(stato, avvio);
    const barraSim = document.createElement('div');
    barraSim.className = 'sim-barra'; barraSim.hidden = true;
    barraSim.innerHTML = `<span class="timer"><svg viewBox="0 0 30 30" aria-hidden="true"><circle class="fondo" cx="15" cy="15" r="12"/><circle class="pieno" cx="15" cy="15" r="12"/></svg><span class="tempo">${mmss(minuti * 60)}</span></span><span class="sim-punti">${parti.map(() => '<i></i>').join('')}</span><button type="button" class="btn btn-piccolo btn-rosso consegna">${t('Consegna', 'Hand in')}</button>`;
    sim.insertBefore(barraSim, domande);
    const piede = document.createElement('div');
    piede.className = 'sim-piede'; piede.hidden = true;
    piede.innerHTML = `<button type="button" class="btn btn-rosso consegna">${t('Consegna e correggi', 'Hand in and mark')}</button><span class="sim-info">${t('Nessuna penalità: rispondi a tutto.', 'No penalty: answer everything.')}</span>`;
    sim.appendChild(piede);
    let fine = 0, tic = 0;
    const timer = $('.timer', barraSim), tempo = $('.tempo', barraSim), punti = $$('.sim-punti i', barraSim);
    const aggiornaPunti = () => parti.forEach((p, k) => {
      const risposta = p.dataset.tipo === 'numerica' ? $('input', p).value.trim() !== '' : $$('input', p).some(i => i.checked);
      punti[k].classList.toggle('risposta', risposta);
    });
    domande.addEventListener('input', aggiornaPunti);
    domande.addEventListener('change', aggiornaPunti);
    function scorri() {
      const resto = Math.max(0, (fine - Date.now()) / 1000);
      tempo.textContent = mmss(Math.ceil(resto));
      timer.style.setProperty('--p', (resto / (minuti * 60)).toFixed(4));
      timer.classList.toggle('poco', resto < 300);
      if (resto <= 0) consegna(true);
    }
    function inizia() {
      $$('.q', sim).forEach(q => { q.classList.remove('fatta', 'corretta', 'sbagliata'); $$('.q-parte', q).forEach(azzeraParte); });
      $('.sim-risultato', sim)?.remove();
      $$('.q-punti', sim).forEach(e => e.remove());
      domande.hidden = false; barraSim.hidden = false; piede.hidden = false; avvio.hidden = true;
      sim.classList.add('in-corso');
      fine = Date.now() + minuti * 60 * 1000;
      clearInterval(tic); tic = setInterval(scorri, 250); scorri(); aggiornaPunti();
      barraSim.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    function consegna(scaduto) {
      if (!sim.classList.contains('in-corso')) return;
      if (!scaduto) {
        const mancano = parti.filter(p => statoParte(p) === null).length;
        if (mancano && !confirm(t(`Mancano ${mancano} risposte (niente penalità: conviene rispondere). Consegni lo stesso?`, `${mancano} answers are missing (no penalty: it pays to answer). Hand in anyway?`))) return;
      }
      clearInterval(tic);
      const usato = Math.min(minuti * 60, Math.round(minuti * 60 - (fine - Date.now()) / 1000));
      let totale = 0;
      $$('.q', sim).forEach(q => {
        let pq = 0;
        $$('.q-parte', q).forEach(p => {
          const giusta = statoParte(p) === true;
          mostraParte(p, giusta);
          if (giusta) pq += Number(p.dataset.punti) || 0;
        });
        totale += pq;
        const max = Number(q.dataset.punti) || 2;
        q.classList.add('fatta', pq === max ? 'corretta' : 'sbagliata');
        const et = document.createElement('span');
        et.className = 'q-punti'; et.textContent = t(`${pq}/${max} punti`, `${pq}/${max} points`);
        $('.q-testo', q).prepend(et);
      });
      sim.classList.remove('in-corso');
      barraSim.hidden = true; piede.hidden = true; avvio.hidden = false;
      avvio.textContent = t('Ripeti la prova', 'Take the test again');
      const prec = votoSalvato(leggi(`ofa:${id}`, null));
      if (prec === null || totale > prec) scrivi(`ofa:${id}`, totale);
      stato.textContent = t(`Miglior voto: ${Math.max(totale, prec ?? 0)}/10`, `Best mark: ${Math.max(totale, prec ?? 0)}/10`);
      const ris = document.createElement('div');
      const ok = totale >= 6;
      ris.className = `sim-risultato ${ok ? 'superato' : 'non-superato'}`;
      ris.innerHTML = `<span class="voto">${totale}<small>/10</small></span><span class="verdetto">${ok ? t('Sufficiente', 'Pass') : t('Insufficiente', 'Fail')}</span>`
        + `<p>${scaduto ? t('Tempo scaduto. ', 'Time is up. ') : ''}${t('Tempo usato', 'Time used')}: ${mmss(usato)}. ${ok ? t('Il voto supera la sufficienza della prova (6/10). Leggi comunque le spiegazioni delle risposte errate.', 'Your mark reaches the pass mark of the test (6/10). Still, read the explanations of the wrong answers.') : t('La sufficienza è 6/10. Leggi le spiegazioni qui sotto e riprendi i moduli delle risposte errate prima della prossima simulazione.', 'The pass mark is 6/10. Read the explanations below and go back to the modules of the wrong answers before the next mock test.')}</p>`;
      sim.insertBefore(ris, domande);
      ris.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    avvio.addEventListener('click', inizia);
    $$('.consegna', sim).forEach(b => b.addEventListener('click', () => consegna(false)));
  });
  $$('.lista-sim [data-sim]').forEach(a => {
    const v = votoSalvato(leggi(`ofa:${a.dataset.sim}`, null));
    if (v === null) return;
    const m = document.createElement('span'); m.className = 'migliore'; m.textContent = `${t('miglior voto', 'best mark')} ${v}/10`;
    $('span', a).replaceChildren(m);
  });

  /* ---------- checklist e avanzamento dei moduli ---------- */
  const numeroModulo = Number(document.body.dataset.modulo || 0);
  const checklist = $$('.checklist');
  if (checklist.length) {
    const chiave = numeroModulo ? `ofa:check:m${numeroModulo}` : `ofa:check:${location.pathname.split('/').pop() || 'index'}`;
    const vecchia = `ofa:check:${location.pathname.split('/').pop() || 'index'}`;
    if (numeroModulo && leggi(chiave, null) === null && leggi(vecchia, null) !== null) scrivi(chiave, elencoSalvato(leggi(vecchia, [])));
    const salvate = elencoSalvato(leggi(chiave, []));
    const tutte = checklist.flatMap(ul => $$('input', ul));
    tutte.forEach((inp, k) => { inp.checked = salvate.includes(k); });
    const aggiorna = () => {
      const fatte = tutte.map((inp, k) => inp.checked ? k : -1).filter(k => k >= 0);
      scrivi(chiave, fatte);
      if (numeroModulo) scrivi(`ofa:prog:${numeroModulo}`, [fatte.length, tutte.length]);
      const p = tutte.length ? fatte.length / tutte.length : 0;
      $$('.mt-progresso').forEach(b => { b.querySelector('.barra-avanz').style.setProperty('--p', p.toFixed(3)); b.querySelector('small').textContent = t(`checklist ${fatte.length} di ${tutte.length}`, `checklist ${fatte.length} of ${tutte.length}`); });
    };
    tutte.forEach(inp => inp.addEventListener('change', aggiorna));
    aggiorna();
  }
  const diagSalvato = oggettoSalvato(leggi('ofa:diag', null));
  const diag = diagSalvato && oggettoSalvato(diagSalvato.risultati)
    ? { risultati: Object.fromEntries(Object.entries(diagSalvato.risultati).filter(([m, r]) => /^M\d$/.test(m) && coppiaSalvata(r))) } : null;
  $$('.programma tr[data-modulo]').forEach(riga => {
    const n = riga.dataset.modulo, [f, t] = coppiaSalvata(leggi(`ofa:prog:${n}`, null)) || [0, 0];
    const b = $('.barra-avanz', riga);
    if (b) b.style.setProperty('--p', t ? (f / t).toFixed(3) : 0);
    const testo = $('.avanz > span:last-child', riga);
    if (testo) testo.textContent = t ? `${f}/${t}` : '—';
    const r = diag?.risultati?.[`M${n}`];
    if (r && scarso(...r)) riga.classList.add('priorita');
  });

  /* ---------- piano di studio ---------- */
  const piano = $('#piano');
  if (piano && datiModuli.length) {
    const fEsame = $('#piano-esame'), fData = $('#piano-data'), fOre = $('#piano-ore'), outOre = $('#piano-ore-val');
    const uscita = $('#piano-settimane'), sintesi = $('#piano-sintesi'), avviso = $('#piano-avviso');
    const salvato = oggettoSalvato(leggi('ofa:piano', {})) || {};
    const oggi = new Date(); oggi.setHours(12, 0, 0, 0);
    const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const MAX_GIORNI = 366 * 5;
    const daIso = s => {
      if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return new Date(NaN);
      const [a, m, g] = s.split('-').map(Number), d = new Date(a, m - 1, g, 12);
      return a >= 1900 && a <= 2100 && d.getFullYear() === a && d.getMonth() === m - 1 && d.getDate() === g ? d : new Date(NaN);
    };
    fData.min = iso(new Date(oggi.getTime() + 864e5));
    fData.max = iso(new Date(oggi.getTime() + MAX_GIORNI * 864e5));
    const fmt = d => d.toLocaleDateString(EN ? 'en-GB' : 'it-IT', { day: 'numeric', month: 'short' });
    const opzioni = $$('option', fEsame).map(o => o.value);
    const prima = opzioni.find(v => v !== 'altra' && daIso(v) > oggi) || 'altra';
    fEsame.value = salvato.esame && (opzioni.includes(salvato.esame)) && (salvato.esame === 'altra' || daIso(salvato.esame) > oggi) ? salvato.esame : prima;
    fData.value = daIso(salvato.data) > oggi && daIso(salvato.data) <= daIso(fData.max) ? salvato.data : iso(new Date(oggi.getTime() + 60 * 864e5));
    fOre.value = Number.isFinite(salvato.ore) && salvato.ore >= 1 && salvato.ore <= 40 ? salvato.ore : 7;
    const fatti = new Set(elencoSalvato(leggi('ofa:piano:fatti', [])).filter(x => typeof x === 'string'));
    function calcola() {
      const altra = fEsame.value === 'altra';
      fData.closest('.campo').hidden = !altra;
      const esame = daIso(altra ? fData.value : fEsame.value), ore = Number(fOre.value);
      outOre.textContent = t(`${ore} ore`, `${ore} hours`);
      const giorniAlTest = Math.round((esame - oggi) / 864e5);
      avviso.hidden = true;
      if (Number.isNaN(giorniAlTest)) { avviso.hidden = false; avviso.textContent = t('Scegli la data della prova.', 'Choose the date of the test.'); uscita.innerHTML = ''; sintesi.innerHTML = ''; return; }
      if (giorniAlTest < 1) { avviso.hidden = false; avviso.innerHTML = t('<strong>La data scelta è già passata.</strong> Scegli un altro appello.', '<strong>The chosen date has already passed.</strong> Choose another sitting.'); uscita.innerHTML = ''; sintesi.innerHTML = ''; return; }
      if (giorniAlTest > MAX_GIORNI || !Number.isFinite(ore) || ore < 1 || ore > 40) {
        avviso.hidden = false; avviso.textContent = t('Scegli una data entro cinque anni e da 1 a 40 ore a settimana.', 'Choose a date within five years and 1 to 40 hours per week.');
        uscita.innerHTML = ''; sintesi.innerHTML = ''; return;
      }
      scrivi('ofa:piano', { esame: fEsame.value, data: fData.value, ore });
      // blocchi di 7 giorni contati all'indietro dal giorno della prova: l'ultimo finisce il giorno prima,
      // il primo parte da oggi e, se è più corto, riceve meno ore
      const settimane = Math.min(Math.ceil(MAX_GIORNI / 7), Math.max(1, Math.ceil(giorniAlTest / 7)));
      const settim = Array.from({ length: settimane }, (_, k) => {
        const fine = new Date(esame); fine.setDate(esame.getDate() - 1 - 7 * (settimane - 1 - k));
        const inizio = new Date(fine); inizio.setDate(fine.getDate() - 6);
        if (inizio < oggi) inizio.setTime(oggi.getTime());
        const giorni = Math.round((fine - inizio) / 864e5) + 1;
        return { inizio, fine, cap: ore * giorni / 7, voci: [], ore: 0 };
      });
      const peso = n => { const r = diag?.risultati?.[`M${n}`]; if (!r) return 1; return r[0] >= r[1] ? 0.6 : scarso(...r) ? 1.15 : 0.85; };
      const lavori = [];
      lavori.push({ id: 'libretto', testo: t('Controlla su MyUnito, nel libretto, che ci sia «INT1475 OFA - MATEMATICA»', 'Check on MyUnito, in your online transcript (libretto), that “INT1475 OFA - MATEMATICA” is there'), ore: 0.25 });
      lavori.push({ id: 'iscrizione', testo: t('Entra su www.ofa.unito.it con le credenziali SCU e iscriviti al corso «OFA Matematica»', 'Log in to www.ofa.unito.it with your SCU credentials and enrol in the “OFA Matematica” course'), ore: 0.25, link: 'https://www.ofa.unito.it/course/view.php?id=20' });
      lavori.push({ id: 'ingresso', testo: t('Fai il test d\'ingresso per sapere da dove partire', 'Take the entry test to find out where to start'), ore: 0.75, link: `${radice}${PAG.test}` });
      for (const m of datiModuli) {
        const oreM = Math.max(1.5, m.ore * peso(m.numero));
        const unita = m.unita.length ? m.unita : [m.titolo];
        // le introduzioni senza numero (es. «Introduzione: il piano cartesiano») sono brevi
        const pesoU = u => /^\d/.test(u) ? 1 : 0.3, sommaU = unita.reduce((a, u) => a + pesoU(u), 0);
        unita.forEach((u, iu) => lavori.push({ id: `m${m.numero}u${iu}`, testo: `${t('Modulo', 'Module')} ${m.numero} · ${u}`, ore: oreM * 0.8 * pesoU(u) / sommaU, link: `${radice}${m.url}` }));
        lavori.push({ id: `m${m.numero}quiz`, testo: t(`Modulo ${m.numero}: quiz, checklist e «Test modulo ${m.numero}» sul portale OFA`, `Module ${m.numero}: quiz, checklist and “Test modulo ${m.numero}” on the OFA platform`), ore: oreM * 0.2, link: `${radice}${m.url}#quiz-1` });
      }
      const nSim = 8;
      for (let s = 1; s <= nSim; s++) lavori.push({ id: `sim${s}`, testo: t(`Simulazione ${s} a tempo (45 minuti) e correzione`, `Mock test ${s}, timed (45 minutes), and marking`), ore: 1.25, link: `${radice}${PAG.sim}#sim-${s}`, sim: true });
      lavori.push({ id: 'ripasso', testo: t('Ripasso mirato: rifai gli esercizi sbagliati e le checklist incomplete', 'Targeted review: redo the exercises you got wrong and the incomplete checklists'), ore: 2, ripasso: true });
      const necessarie = lavori.reduce((a, l) => a + l.ore, 0), disponibili = settim.reduce((a, s) => a + s.cap, 0);
      if (necessarie > disponibili) {
        const servono = Math.ceil(necessarie / settimane);
        avviso.hidden = false;
        avviso.innerHTML = t(`<strong>Il tempo è stretto.</strong> Servono circa ${Math.round(necessarie)} ore di studio e da qui al test ne hai ${Math.round(disponibili)}. Porta lo studio a <strong>${servono} ore a settimana</strong> oppure punta all'appello successivo. Qui sotto il piano compresso.`, `<strong>Time is tight.</strong> You need about ${Math.round(necessarie)} hours of study and until the test you have ${Math.round(disponibili)}. Raise your study to <strong>${servono} hours a week</strong> or aim for the next sitting. The compressed plan is below.`);
      }
      const scala = necessarie > disponibili ? disponibili / necessarie : 1;   // tempo stretto: tutto si comprime
      const riempi = Math.min(1, necessarie / disponibili);                    // tempo in avanzo: il ritmo rallenta
      // le voci riempiono le settimane in ordine, sul tempo cumulato: il carico resta uniforme e le simulazioni,
      // che sono in fondo alla lista, finiscono nelle ultime settimane. Una voce lunga a cavallo di due settimane
      // si divide («continua»), ma mai in pezzi sotto i 3/4 d'ora
      const confini = []; let cumulato = 0;
      settim.forEach(s => { cumulato += s.cap * riempi; confini.push(cumulato); });
      let cursore = 0;
      for (const l of lavori) {
        let resto = l.ore * scala, parte = 0;
        while (resto > 1e-9) {
          let k = confini.findIndex(b => cursore < b - 1e-9);
          if (k < 0) k = settimane - 1;
          let o = k === settimane - 1 ? resto : Math.min(resto, confini[k] - cursore);
          if (resto - o < 0.75) o = resto;
          else if (o < 0.75) { cursore += o; continue; }
          settim[k].voci.push({ ...l, ore: o, id: parte ? `${l.id}~${parte}` : l.id, testo: parte ? `${l.testo} ${t('(continua)', '(continued)')}` : l.testo });
          settim[k].ore += o; cursore += o; resto -= o; parte++;
        }
      }
      const iscrizione = new Date(esame); iscrizione.setDate(esame.getDate() - 17);
      settim.forEach(s => {
        if (iscrizione >= s.inizio && iscrizione <= s.fine) s.voci.unshift({ id: 'prenota', testo: t('Prenota l\'appello su MyUnito (Esami → Appelli) appena aprono le iscrizioni: posti limitati (l\'anno scorso 60 per turno), un solo turno per sessione', 'Book the sitting on MyUnito (Esami → Appelli, i.e. Exams → Exam sessions) as soon as registration opens: limited places (60 per sitting last year), one sitting per exam period'), ore: 0.1, link: 'https://my.unito.it', chiave: true });
      });
      const ultima = settim[settimane - 1];
      ultima.voci.push({ id: 'giorno', testo: t(`Il giorno prima: ripasso leggero. Il giorno del test (${fmt(esame)}): documento d'identità, credenziali SCU (non SPID), puntualità in Laboratorio Turing`, `The day before: light review. On the day of the test (${fmt(esame)}): ID document, SCU credentials (not SPID), be on time at the Turing Lab`), ore: 0, chiave: true });
      uscita.innerHTML = settim.map((s, n) => {
        const esameQui = n === settimane - 1, oggiQui = oggi >= s.inizio && oggi <= s.fine;
        const voci = s.voci.map(v => {
          const idv = v.id;
          const testo = v.link ? `<a class="link${/^https?:/.test(v.link) ? ' esterno' : ''}" href="${v.link}"${/^https?:/.test(v.link) ? ' target="_blank" rel="noopener"' : ''}>${v.testo}</a>` : v.testo;
          return `<li><label><input type="checkbox" data-id="${idv.replace(/"/g, '')}"${fatti.has(idv.replace(/"/g, '')) ? ' checked' : ''}><span class="ck-segno" aria-hidden="true"></span><span>${v.chiave ? '<strong>' + testo + '</strong>' : testo}${v.ore >= 0.5 ? `<span class="ore">~${Math.round(v.ore * 2) / 2} h</span>` : ''}</span></label></li>`;
        }).join('') || `<li><span class="tenue">${t('Settimana libera: ripassa i moduli più deboli.', 'Free week: review your weakest modules.')}</span></li>`;
        return `<li class="settimana${esameQui ? ' esame' : ''}${oggiQui ? ' oggi' : ''}"><div class="quando"><b>${t('Settimana', 'Week')} ${n + 1}</b><span>${fmt(s.inizio)} – ${fmt(s.fine)}</span>${oggiQui ? `<br><span class="etichetta">${t('questa settimana', 'this week')}</span>` : ''}${esameQui ? `<br><span class="etichetta">${t('prova il', 'test on')} ${fmt(esame)}</span>` : ''}</div><ul>${voci}</ul></li>`;
      }).join('');
      $$('input[type="checkbox"]', uscita).forEach(i => i.addEventListener('change', () => { i.checked ? fatti.add(i.dataset.id) : fatti.delete(i.dataset.id); scrivi('ofa:piano:fatti', Array.from(fatti)); }));
      const aSett = Math.ceil(necessarie / (giorniAlTest / 7));
      sintesi.innerHTML = `<span class="chip"><span class="punto"></span>${t(`${giorniAlTest} giorni al test`, `${giorniAlTest} days to the test`)}</span><span class="chip">${t(`${settimane} settimane`, `${settimane} weeks`)}</span><span class="chip">~${Math.round(necessarie)} ${t('ore di studio', 'hours of study')}</span><span class="chip">${necessarie < disponibili * 0.85 ? t(`bastano ~${aSett} ore a settimana`, `~${aSett} hours a week are enough`) : t(`${ore} ore a settimana`, `${ore} hours a week`)}</span>${diag ? `<span class="chip">${t('tarato sul tuo test d\'ingresso', 'tuned to your entry test')}</span>` : ''}`;
    }
    [fEsame, fData, fOre].forEach(f => f.addEventListener('input', calcola));
    calcola();
  }
})();
