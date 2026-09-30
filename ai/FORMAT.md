# Format of the site's Markdown files

> Italian original: <https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/FORMATO.md>

The files in `ai/` are the source of the site: `tools/build.mjs` turns them into HTML pages. They are ordinary Markdown plus a few additions. If you are an AI reading these files, this is how to interpret them (for example: in quizzes, the line starting with `+` is the right answer).

The syntax keywords are in Italian, because the same tools also build the Italian original of this site: for example `D:` stands for domanda (question), `+` marks a right option, `::: esercizio base|medio|test` opens an exercise (esercizio) of basic, intermediate or test level, and graphs use keys such as `titolo` (title) and `punto` (point). Keep the keywords exactly as they are and write the text in English.

Check: `node tools/check.mjs ai/modules/03-equations-inequalities.md` reports wrong formulas, unclosed blocks, quizzes without a right answer and so on.

## Front matter of the modules

```yaml
---
modulo: 3
titolo: "First- and second-degree equations and inequalities, systems"
breve: "One line saying what you will learn."
ore: 7                     # estimated study hours
unita:                     # units of the official course covered
  - "3.1 First-degree equations and inequalities"
  - "3.2 Second-degree equations and inequalities"
  - "3.3 Systems of equations"
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/moduli/03-equazioni-disequazioni.md
---
```

The keys are Italian: `modulo` (module number), `titolo` (title), `breve` (one-line summary), `ore` (hours), `unita` (units). In this English version the translated files end their front matter with `italian_original`, the link to the Italian file they translate.

## Links between pages

`[text](sito:rules.html)` (sito = site) points to a page of the site (here to <https://donflammer.github.io/unito-ofa-maths/rules.html>): it works both in the generated pages and in the single file for AIs. For links from one module to another the file name is enough: `[module 3](sito:modules/03-equations-inequalities.html)`.

## Headings

`##` for sections (they go in the side table of contents), `###` for subsections. Never `#`: the page title comes from the front matter. No headings inside callouts and exercises.

## Formulas

- Inline: `$x^2 - 5x + 6 = 0$`. No space right after the opening dollar sign or right before the closing one.
- Display, on lines of their own:

  ```
  $$
  x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}
  $$
  ```
- KaTeX LaTeX. Shortcuts: `\R \N \Z \Q \C` for the number sets.
- Decimals: in this English version with a point, `$3.5$`; the Italian original uses the decimal comma, written `$3{,}5$` (the braces remove the space after the comma).
- A real dollar sign is written `\$`.
- Formulas also work in tables, including the absolute value `$|x|$`.

## Callouts

```
> [!TIPO] Optional title, which can contain $formulas$
> Text of the callout, also on several lines,
> with lists, display formulas and graphs.
```

`TIPO` (type) is one of these:

| Type | Label | When |
|---|---|---|
| `DEF` | Definition | definitions |
| `PROP` | Rule | properties, formulas, theorems to remember |
| `METODO` | Method | step-by-step procedure |
| `ESEMPIO` | Example | example solved in full |
| `TRAPPOLA` | Common mistake | typical mistakes (in red) |
| `TEST` | In the test | how the topic comes up in the OFA test |
| `NOTA` | Note | remarks, curiosities, connections |

Definitions, rules and examples are numbered automatically within each module, as in a textbook, each with its own series: in module 3 “Definition 3.1”, “Definition 3.2”, …, “Rule 3.1”, …, “Example 3.1”, ….

## Exercises

```
::: esercizio medio Optional title
Text of the exercise (Markdown, formulas, graphs).
::: soluzione
Step-by-step solution.
:::
```

Levels: `base` (basic), `medio` (intermediate), `test` (like the questions of the OFA test). The exercises are numbered automatically; `soluzione` means solution.

## Quizzes

````
```quiz
D: Text of the question, which can contain $formulas$.
+ right answer
- wrong answer
- wrong answer
- wrong answer
= Explanation, shown after checking.

D: Question with more than one right answer: just mark them all with +.
+ right
+ right
- wrong
- wrong
= Explanation.

D: True or false: $(a+b)^2 = a^2 + b^2$.
- True
+ False
= The middle term $2ab$ is missing.

D: Question with a numeric answer.
N: -3/4
= Explanation.
```
````

- `D:` (domanda) opens a question; `+` right answer, `-` wrong answer; `=` explanation (compulsory).
- `N:` numeric answer: integer, decimal (`1.5`, as in these English files, or the Italian `1,5`) or fraction (`-3/4`); optional tolerance `N: 1.41 ± 0.01`. Whoever answers can write `0.75`, `0,75` or `3/4`.
- More than one `+` line = multiple-choice question (“one or more right answers”).
- Exactly the two options `True` and `False` = true/false question (the tools also accept the Italian `Vero` and `Falso`).
- The options are shuffled when the site is built (not the true/false ones): the order in the file does not matter and the explanations must not refer to letters such as “(B)”.
- A line that does not start with a marker continues the previous line.
- ```` ```quiz diagnostico ```` (diagnostic quiz): entry test; each question states its module, `D(M3): …`; at the end the site says which modules to revise.

## Mock tests

Same syntax as the quizzes, in the ```` ```simulazione ```` (mock test) block, with exactly 5 questions worth 2 points each (pass mark 6/10, 45 minutes, like the real test). A question can have two sub-questions worth 1 point each:

```
D: Consider the equation $x^2 - 5x + 6 = 0$.
a) How many real solutions does it have?
N: 2
= Explanation.
b) The sum of the solutions is
+ $5$
- $-5$
= Explanation.
```

An optional title is written as `# Title` on the first line of the block.

## Graphs

````
```grafico
titolo: The parabola $y = x^2 - 4x + 3$
x: -1 5                      # window: minimum and maximum x
y: -2 5
f: x^2 - 4x + 3 | $y = x^2 - 4x + 3$
f: 2x - 5 | rosso | tratteggio
fy: y^2 - 1                  # curve x = g(y)
punto: 1 0 | $A$
punto: 2 -1 | vuoto | $V$ | s
segmento: 0 0 3 4
freccia: 0 0 1 2
poligono: 0 0 4 0 4 3 | $T$
cerchio: 0 0 2               # centre x, centre y, radius
ellisse: 0 0 3 2             # centre, horizontal semi-axis, vertical semi-axis
arco: 0 0 1 0 pi/3           # centre, radius, start and end angle (radians)
verticale: 1 | tratteggio | $x = 1$
orizzontale: 2
testo: 3 2 | $\Delta > 0$
area: x^2 - 4x + 3 | 0 | 1 3 | rosso    # region between two curves for x from 1 to 3
```
````

- Keys: `titolo` (title), `x` and `y` (the window), `f` (the graph of $y = f(x)$), `fy` (a curve $x = g(y)$), `punto` (point), `segmento` (segment), `freccia` (arrow), `poligono` (polygon), `cerchio` (circle), `ellisse` (ellipse), `arco` (arc), `verticale` and `orizzontale` (vertical and horizontal line), `testo` (text), `area` (shaded region).
- Expressions: `+ - * / ^`, implicit multiplication (`2x`, `3(x+1)`), `sqrt abs exp ln log10 log2 log(b, x) sin cos tan asin acos atan`, constants `pi` and `e`. Coordinates are written without internal spaces (`1+sqrt(2)`).
- Options after `|`: `rosso` (red), `grigio` (grey), `tratteggio` (dashed), `sottile` (thin), `spesso` (thick), `tenue` (faint), `vuoto` (hollow point), `da=…` and `a=…` (from, to: they limit a curve), the position of the label (`n s e o ne no se so c`: north, south, east, west (o = ovest), north-east, north-west, south-east, south-west, centre) and the label `$…$` or `"text"`.
- Other lines: `assi: no` (no axes), `griglia: no` (no grid), `nomi: t s` (names of the axes instead of x and y; the expressions are still written in `x`), `passo-x: pi/2` (x step: ticks at multiples of π), `passo-y: 2` (y step), `proporzioni: libere` (free proportions; by default 1 unit on x = 1 unit on y).
- The `testo:` lines are grey; with `bianco` (white) or `rosso` (red) they take the colour of the curves.
- If the window starts at 0 (for example `x: 0 10`), the tick numbers go on the inner side of the axis.
- Curves are broken automatically at asymptotes and jumps.

## Number line

````
```retta
titolo: Solutions of $x^2 - 4 > 0$
da: -4 4
int: (-inf, -2)
int: (2, +inf)
int: [0, 1]
punto: 3 | vuoto
tacca: 1+sqrt(2) | $1+\sqrt2$
```
````

Keys: `da` (from: the stretch of the line shown), `int` (interval), `punto` (point), `tacca` (tick mark with a label). Round bracket = endpoint excluded (hollow dot), square bracket = endpoint included (filled dot). The title can contain `|` (for example `$|x| < 2$`); in the other lines `|` separates the options. Labels with fractions or roots widen the figure automatically.

## Checklist

````
```checklist
I can calculate the discriminant and say how many solutions there are
I can solve a second-degree inequality using the parabola
```
````

Each line is an item to tick. The site remembers the ticks in the browser.
