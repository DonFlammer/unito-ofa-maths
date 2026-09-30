# Maths OFA — Computer Science UniTo 2026/27

> Italian original: <https://github.com/DonFlammer/unito-ofa-matematica/blob/main/README.md>. This repository is the English translation of [DonFlammer/unito-ofa-matematica](https://github.com/DonFlammer/unito-ofa-matematica).

**Website: https://donflammer.github.io/unito-ofa-maths/**

Unofficial guide to making up the **maths OFA** (additional learning requirement, *obbligo formativo aggiuntivo*) of the Computer Science degree programme (corso di laurea in Informatica) at the University of Turin: anyone who scored less than 5/20 in Basic Mathematics (Matematica di base) in the TOLC-S must take the “OFA Matematica” course on www.ofa.unito.it and pass its exam within the first year.

> Unofficial guide, built on the syllabus of the official OFA course and on UniTo's pages. It may contain errors: for rules, dates and registration only the official sources are authoritative. Read the [disclaimer](DISCLAIMER.md).

## What's inside

- **Notes for the 8 modules** of the official course (language and numbers, polynomials, equations and inequalities, rational/radical/absolute value, analytic geometry, functions, exponentials and logarithms, trigonometry): theory explained from scratch, definitions and rules, methods, worked examples, common mistakes, graphs, exercises with solutions, quizzes and checklists. In all, 134 exercises, 127 quiz questions and 72 graphs.
- **Formula sheet** with all the definitions and rules.
- **Study plan** that spreads the modules over the weeks up to the exam date you choose.
- **Entry test** of 24 questions, with the result module by module.
- **Mock tests** in the real test format (5 questions, 45 minutes, pass mark 6/10), with timer and marking.
- **Rules, dates and contacts** with the official sources.
- **The official course**: how the “OFA Matematica” course on the platform is organised and the typos in its material, verified against the originals.
- **Italian for the OFA test**: the course and the test are in Italian; [`ai/italian-glossary.md`](ai/italian-glossary.md) lists the key Italian terms of each module and the typical phrasings of the questions.
- **Context for AIs** in the [`ai/`](ai/) folder: all the research and all the content in Markdown, to give to any AI without redoing the research. There is a single file with everything ([`ai/_ALL_IN_ONE.md`](ai/_ALL_IN_ONE.md)) and a light one with rules and organisation ([`ai/_ESSENTIALS.md`](ai/_ESSENTIALS.md)); instructions and a prompt to copy are in [`ai/README.md`](ai/README.md).

Progress stays in your browser. Local profiles and encrypted transfer backups work across the four guides; see [local profiles and security](SECURITY.md). The site uses no cookies or external services: fonts and formula rendering are hosted here.

## How it is made

- The content is Markdown files in [`ai/`](ai/); the syntax (formulas, callouts, exercises, quizzes, graphs) is in [`ai/FORMAT.md`](ai/FORMAT.md).
- `tools/build.mjs` creates the HTML pages; `tools/check.mjs <file>` checks a file. The first time you need `npm install` in the `tools/` folder (Node 20 or later).
- Design and behaviour: `assets/css/sito.css`, `assets/js/sito.js`, `assets/js/stelle.js`.

## Licence

Texts: [CC BY-NC-SA 4.0](LICENSE). Fonts Source Serif 4 and Geist: SIL Open Font License ([`assets/fonts/OFL-source-serif.txt`](assets/fonts/OFL-source-serif.txt), [`assets/fonts/OFL-geist.txt`](assets/fonts/OFL-geist.txt)). KaTeX: MIT licence ([`assets/katex/LICENSE`](assets/katex/LICENSE)).

## More

Notes for the first year of Computer Science at UniTo: [DonFlammer/unito-computer-science](https://github.com/DonFlammer/unito-computer-science) (website: https://donflammer.github.io/unito-computer-science/). Contact: Telegram [@rapsodico](https://t.me/rapsodico).
