---
modulo: 4
titolo: "Rational, radical and absolute value equations and inequalities"
breve: "Rational equations and inequalities, and those with roots or absolute values, without losing sight of the domain conditions."
ore: 9
unita:
  - "4.1 Rational equations and inequalities"
  - "4.2 Radical equations and inequalities"
  - "4.3 Absolute value equations and inequalities"
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/moduli/04-fratte-irrazionali-modulo.md
---

## In brief

- First of all write the **domain conditions** (*condizioni di esistenza*): every denominator different from zero, every radicand of a root with even index greater than or equal to zero.
- Rational equation: bring everything to the form $\frac{N(x)}{D(x)} = 0$. A fraction is zero when its numerator is zero: solve $N(x) = 0$ and discard the solutions that make a denominator zero.
- Rational inequality: do **not** multiply by the denominator, because its sign changes with $x$. Bring it to $\frac{N(x)}{D(x)} > 0$ (or $<$, $\geq$, $\leq$), study the sign of numerator and denominator and use the sign chart.
- Root with odd index: you raise to the power and that is all, without losing or adding solutions.
- Root with even index: a square root is never negative. For $\sqrt{f(x)} = g(x)$ you need $f(x) = g(x)^2$ and $g(x) \geq 0$; for inequalities there are two schemes to know.
- The absolute value of a number is its distance from zero; $|x - a|$ is the distance between $x$ and $a$.
- With $c > 0$: $|A| = c$ means $A = \pm c$; $|A| < c$ means $-c < A < c$; $|A| > c$ means $A < -c$ or $A > c$. If $c < 0$ the answers are "never" (for $=$ and $<$) and "always" (for $>$).
- With several absolute values, split the number line into intervals according to the sign of each argument.

## 4.1 Rational equations and inequalities

### Domain conditions

> [!DEF] Rational equations and domain conditions
> An equation (or inequality) is **rational** (fractional, *fratta*) when the unknown appears in at least one denominator. A fraction makes no sense if its denominator is zero, so first of all you write the **domain conditions** (**C.E.** for short, from the Italian *condizioni di esistenza*): the values of $x$ that make a denominator zero must be excluded. The set of allowed values is called the **domain** (*campo di esistenza*, or *dominio*).

> [!METODO] Finding the domain conditions
> 1. Factorise every denominator (taking out a common factor, special products, trinomials).
> 2. Require every factor to be different from zero.
> 3. A factor that is never zero, such as $x^2 + 1$, gives no conditions.

> [!ESEMPIO] C.E. of $\frac{3}{x^2 - 9} + \frac{1}{2x} = \frac{x}{x + 3}$
> $x^2 - 9 = (x - 3)(x + 3)$ is zero for $x = 3$ and for $x = -3$; $2x$ is zero for $x = 0$; $x + 3$ again for $x = -3$.
>
> C.E.: $x \neq 0$, $x \neq 3$, $x \neq -3$ (in short: $x \neq 0$ and $x \neq \pm 3$).

### Rational equations

> [!METODO] Solving a rational equation
> 1. Write the domain conditions.
> 2. Bring everything to the left-hand side and use a common denominator (the least common multiple of the factorised denominators): you reach $\frac{N(x)}{D(x)} = 0$.
> 3. A fraction is zero only when its numerator is zero: solve $N(x) = 0$, that is the equation reduced **to non-fractional form** (with no $x$ in the denominator). It is like multiplying both sides by $D(x)$, which is allowed because with the C.E. $D(x) \neq 0$.
> 4. Compare the solutions with the C.E. and keep only the **acceptable** ones.

> [!NOTA] The common denominator
> The common denominator is the least common multiple of the denominators and is computed as with numbers: factorise every denominator and take **all** the factors that appear, each one only once and with the highest exponent. For example with the denominators $x - 2$, $x^2 - 4 = (x - 2)(x + 2)$ and $x^2 + 2x = x(x + 2)$ the common denominator is $x(x - 2)(x + 2)$. Then each numerator must be multiplied by the factors missing from its denominator.
>
> Watch out for **opposite factors**, such as $1 - x = -(x - 1)$ or $x - 3x^2 = -x(3x - 1)$: take the minus sign outside and you will recognise the same factor. For example in $\frac{2}{x - 1} + \frac{3}{1 - x} = \frac{1}{x}$ (C.E.: $x \neq 0$ and $x \neq 1$) the second fraction is $-\frac{3}{x - 1}$, so the left-hand side equals $-\frac{1}{x - 1}$; multiplying by $x(x - 1)$ you get $-x = x - 1$, that is $x = \frac{1}{2}$, acceptable.

> [!ESEMPIO] Two equal fractions: $\frac{3}{x - 1} = \frac{2}{x + 1}$
> C.E.: $x \neq 1$ and $x \neq -1$.
>
> With the common denominator $(x - 1)(x + 1)$:
> $$
> \frac{3(x + 1) - 2(x - 1)}{(x - 1)(x + 1)} = 0
> $$
> The numerator must be zero: $3x + 3 - 2x + 2 = 0$, that is $x + 5 = 0$ and $x = -5$. It is different from $\pm 1$: acceptable.
>
> Check: $\frac{3}{-6} = -\frac{1}{2}$ and $\frac{2}{-4} = -\frac{1}{2}$.

> [!ESEMPIO] A solution to discard: $\frac{x}{x - 1} + \frac{1}{x + 1} = \frac{2}{x^2 - 1}$
> Factorise: $x^2 - 1 = (x - 1)(x + 1)$. C.E.: $x \neq 1$ and $x \neq -1$.
>
> With the common denominator $(x - 1)(x + 1)$, the numerator must be zero:
> $$
> x(x + 1) + (x - 1) - 2 = 0 \quad\Rightarrow\quad x^2 + 2x - 3 = 0
> $$
> (the arrow $\Rightarrow$ is read "therefore"). The solutions are $x = -3$ and $x = 1$ (sum $-2$, product $-3$). But $x = 1$ makes the denominators zero: **not acceptable**. Only solution: $x = -3$.
>
> Check: $\frac{-3}{-4} + \frac{1}{-2} = \frac{3}{4} - \frac{2}{4} = \frac{1}{4}$ and $\frac{2}{9 - 1} = \frac{1}{4}$.

> [!ESEMPIO] All solutions discarded: $\frac{x}{x - 2} - \frac{2}{x} = \frac{4}{x^2 - 2x}$
> $x^2 - 2x = x(x - 2)$. C.E.: $x \neq 0$ and $x \neq 2$.
>
> With the common denominator $x(x - 2)$, the numerator must be zero: $x \cdot x - 2(x - 2) - 4 = 0$, that is $x^2 - 2x = 0$, so $x = 0$ or $x = 2$. **Both** are excluded by the C.E.: the equation is **impossible**.

> [!TRAPPOLA] Simplifying without looking at the C.E.
> $\frac{x^2 - 4}{x - 2} = 4$: simplifying $\frac{(x - 2)(x + 2)}{x - 2} = x + 2$ you reach $x + 2 = 4$, that is $x = 2$. But $x = 2$ makes the original denominator zero: the equation is **impossible**. The C.E. are written **before** simplifying, and at the end they are always checked.

> [!ESEMPIO] A problem: working together
> One tap fills a tank in $3$ hours, another in $6$ hours. With both open, how long do they take to fill it?
>
> In one hour the first fills $\frac{1}{3}$ of the tank and the second $\frac{1}{6}$. If together they take $x$ hours, in one hour they fill $\frac{1}{x}$ of it:
> $$
> \frac{1}{3} + \frac{1}{6} = \frac{1}{x} \qquad (x \neq 0)
> $$
> On the left $\frac{2}{6} + \frac{1}{6} = \frac{1}{2}$, so $\frac{1}{x} = \frac{1}{2}$ and $x = 2$ hours. The same idea works for every problem in which two people (or machines) do a job together, each at its own speed.

### Rational inequalities and the sign chart

In rational inequalities **you cannot multiply by the denominator** as in equations: the denominator contains $x$ and its sign changes depending on $x$, so you do not know whether the direction must be reversed or not. Instead, you reason about the signs.

> [!PROP] Rule of signs
> A quotient (or a product) is **positive** if the two factors have the **same sign** and **negative** if they have **opposite** signs:
> $$
> \frac{+}{+} = +, \qquad \frac{-}{-} = +, \qquad \frac{+}{-} = -, \qquad \frac{-}{+} = -
> $$
> A fraction is zero where its numerator is zero and **does not exist** where its denominator is zero.

> [!METODO] Solving a rational inequality
> 1. Write the C.E.
> 2. Bring everything to the left-hand side and use a common denominator: you reach $\frac{N(x)}{D(x)} > 0$ (or $\geq 0$, $< 0$, $\leq 0$). On the right there must be $0$.
> 3. Study the sign of the numerator: solve $N(x) > 0$, or $N(x) \geq 0$ if the direction of the inequality is $\geq$ or $\leq$.
> 4. Study the sign of the denominator: solve $D(x) > 0$, always with the strict inequality sign, because $D(x)$ can never be zero.
> 5. Put the results into a sign chart and apply the rule of signs column by column.
> 6. Choose the intervals with the required sign: positive for $>$ and $\geq$, negative for $<$ and $\leq$. With $\geq$ or $\leq$ add the zeros of the numerator; the zeros of the denominator are **always excluded**.

> [!ESEMPIO] $\frac{x - 2}{x + 3} \geq 0$
> C.E.: $x \neq -3$.
>
> Numerator: $x - 2 \geq 0$ for $x \geq 2$. Denominator: $x + 3 > 0$ for $x > -3$.
>
> In the sign chart each row is a stretch of the number line; the columns are the numerator $x - 2$, the denominator $x + 3$ and the fraction.
>
> | Interval | Numerator | Denominator | Fraction |
> |---|---|---|---|
> | $x < -3$ | $-$ | $-$ | $+$ |
> | $x = -3$ | $-$ | $0$ | does not exist |
> | $-3 < x < 2$ | $-$ | $+$ | $-$ |
> | $x = 2$ | $0$ | $+$ | $0$ |
> | $x > 2$ | $+$ | $+$ | $+$ |
>
> The direction is $\geq$: you need the positive intervals and the zero of the numerator. Solution: $x < -3$ or $x \geq 2$, that is $(-\infty, -3) \cup [2, +\infty)$.
>
> ```retta
> titolo: Solutions of $\frac{x - 2}{x + 3} \geq 0$
> da: -6 5
> int: (-inf, -3)
> int: [2, +inf)
> ```

The graph of the function $y = \frac{x - 2}{x + 3}$ confirms the table: it lies above the $x$-axis to the left of $-3$ and to the right of $2$, below the axis between $-3$ and $2$. At $x = -3$ the graph breaks, because the fraction does not exist there.

```grafico
titolo: $y = \frac{x - 2}{x + 3}$ is positive for $x < -3$ and for $x > 2$
x: -10 6
y: -6 6
f: (x - 2)/(x + 3)
verticale: -3 | tratteggio | grigio | $x = -3$
punto: 2 0
```

> [!ESEMPIO] Second-degree numerator: $\frac{x^2 - 4x + 3}{x - 2} < 0$
> C.E.: $x \neq 2$.
>
> Numerator: $x^2 - 4x + 3 > 0$. The roots are $1$ and $3$, so it is positive for $x < 1$ or $x > 3$ and negative between $1$ and $3$. Denominator: $x - 2 > 0$ for $x > 2$.
>
> | Interval | Numerator | Denominator | Fraction |
> |---|---|---|---|
> | $x < 1$ | $+$ | $-$ | $-$ |
> | $1 < x < 2$ | $-$ | $-$ | $+$ |
> | $2 < x < 3$ | $-$ | $+$ | $-$ |
> | $x > 3$ | $+$ | $+$ | $+$ |
>
> Direction $<$: negative intervals, endpoints excluded. Solution: $x < 1$ or $2 < x < 3$.
>
> ```retta
> titolo: Solutions of $\frac{x^2 - 4x + 3}{x - 2} < 0$
> da: -1 5
> int: (-inf, 1)
> int: (2, 3)
> ```

> [!ESEMPIO] First bring everything to the left: $\frac{2x + 1}{x - 1} \leq 1$
> C.E.: $x \neq 1$.
>
> $\frac{2x + 1}{x - 1} - 1 \leq 0$ becomes $\frac{2x + 1 - (x - 1)}{x - 1} \leq 0$, that is $\frac{x + 2}{x - 1} \leq 0$.
>
> Numerator: $x + 2 \geq 0$ for $x \geq -2$. Denominator: $x - 1 > 0$ for $x > 1$. The fraction is negative between $-2$ and $1$ and is zero at $x = -2$. Solution: $-2 \leq x < 1$, that is $[-2, 1)$.

> [!TRAPPOLA] Multiplying by the denominator
> If in the previous example you multiply by $x - 1$ as in an equation, you find $2x + 1 \leq x - 1$, that is $x \leq -2$: a **wrong** result. For example $x = 0$ is a genuine solution ($\frac{1}{-1} = -1 \leq 1$), but with that method you would lose it. The trouble is that for $x < 1$ the denominator is negative and the direction should have been reversed.

> [!ESEMPIO] A classic case: $\frac{1}{x} > 2$
> The temptation is to write $1 > 2x$, that is $x < \frac{1}{2}$: wrong, because it includes the negative numbers, for which $\frac{1}{x}$ is negative and cannot be greater than $2$.
>
> Bring everything to the left: $\frac{1}{x} - 2 > 0$, that is $\frac{1 - 2x}{x} > 0$. The numerator is positive for $x < \frac{1}{2}$, the denominator for $x > 0$: the fraction is positive when both are positive, that is for $0 < x < \frac{1}{2}$ (for $x < 0$ the numerator is positive and the denominator negative). Solution: $0 < x < \frac{1}{2}$.

> [!ESEMPIO] An always positive numerator: $\frac{x^2 + 4}{x^2 - x - 6} < 0$
> The numerator $x^2 + 4$ is always positive, so the sign of the fraction is that of the denominator. It is enough to solve $x^2 - x - 6 < 0$: the roots are $-2$ and $3$ and you need the inner interval. Solution: $-2 < x < 3$ (the endpoints are excluded also because they make the denominator zero).

> [!NOTA] Products too
> The sign chart works in the same way for a product of several factors. For example in $(x + 1)(x - 2)(x - 5) \geq 0$ you study the sign of each factor, put it in the chart and apply the rule of signs column by column: the solution is $-1 \leq x \leq 2$ or $x \geq 5$.

> [!TEST] Rational equations and inequalities in the test
> - Many wrong options come from two mistakes: including a zero of the denominator, or multiplying by the denominator. Always check the endpoints.
> - To choose among several sets, try a convenient number from each interval in the **original** inequality.
> - Numeric-answer questions such as "how many integers satisfy...": find the set and count the integers, paying attention to the excluded endpoints. In $[-2, 1)$ there are $-2$, $-1$ and $0$, that is $3$ integers.
> - In a rational equation with four options, substitute: a value that makes a denominator zero is never a solution.

## 4.2 Radical equations and inequalities

### Roots with even and odd index

An equation or inequality is **radical** (irrational, *irrazionale*) when the unknown appears under a root sign. The symbol $\sqrt[n]{a}$ ("$n$-th root of $a$") denotes the number that raised to the power $n$ gives $a$: the number $n$ is the **index**, $a$ is the **radicand**. When the index is not written it is $2$ (square root).

> [!PROP] Even index and odd index
> - **Odd index** (cube root $\sqrt[3]{\ }$, fifth root, ...): the root exists for every radicand and has the same sign as the radicand. Examples: $\sqrt[3]{8} = 2$, $\sqrt[3]{-8} = -2$.
> - **Even index** (square root, fourth root, ...): the root exists only if the radicand is **greater than or equal to zero**, and the result is **greater than or equal to zero**. Examples: $\sqrt{9} = 3$ (not $-3$), $\sqrt[4]{16} = 2$, while $\sqrt{-4}$ is not a real number.

The idea for solving is always to **remove the root by raising to the right power**. The delicate point is that raising to an even power is **not** a safe step:

> [!PROP] Raising to a power
> - If $n$ is **odd**, $a = b$ is equivalent to $a^n = b^n$ for all real numbers $a$ and $b$.
> - If $n$ is **even**, $a = b$ is equivalent to $a^n = b^n$ only if $a$ and $b$ have the **same sign** (in Italian, they are *concordi*). For example $-3 \neq 3$, but $(-3)^2 = 3^2$.
>
> So when you square an equation, **extraneous solutions** may appear, which solve the squared equation but not the original one.

> [!NOTA] Why squaring adds solutions
> The equation $x = 3$ has only one solution. Squaring it you get $x^2 = 9$, which has two: $3$ and $-3$. The square "forgets" the sign, so the squared equation also accepts the values that make the two sides **opposite** instead of equal. This is why, after squaring, you must check the sign (with a condition such as $g(x) \geq 0$) or verify the solutions.

### Equations with one radical

Let us consider equations of the type $\sqrt[n]{f(x)} = g(x)$, where $f(x)$ and $g(x)$ are polynomials.

> [!METODO] Odd index
> Raise both sides to the power $n$: $\sqrt[n]{f(x)} = g(x)$ is equivalent to $f(x) = g(x)^n$. No conditions are needed and no solutions are lost or added.

> [!ESEMPIO] $\sqrt[3]{x^3 + 5x^2 + 2x} = x + 1$
> Cube both sides: $x^3 + 5x^2 + 2x = (x + 1)^3 = x^3 + 3x^2 + 3x + 1$.
>
> Cancel $x^3$ and bring everything to the left: $2x^2 - x - 1 = 0$. $\Delta = 1 + 8 = 9$, $x = \frac{1 \pm 3}{4}$: $x = 1$ or $x = -\frac{1}{2}$. They are both solutions (odd index, no conditions).
>
> Check with $x = 1$: $\sqrt[3]{1 + 5 + 2} = \sqrt[3]{8} = 2$ and $1 + 1 = 2$.

> [!METODO] Even index
> For $\sqrt{f(x)} = g(x)$ set up the system
> $$
> \begin{cases} f(x) = g(x)^2 \\ g(x) \geq 0 \end{cases}
> $$
> With another even index $n$ (fourth root, sixth root, ...) you raise to the power $n$: the system becomes $f(x) = g(x)^n$ and $g(x) \geq 0$.
> - $g(x) \geq 0$ because a root with even index is never negative, so it cannot be equal to a negative number.
> - There is no need to write the condition $f(x) \geq 0$: if $f(x) = g(x)^2$ (or $g(x)^n$ with $n$ even), then $f(x)$ is an even power and is not negative.
>
> Alternatively you can square (or raise to the power $n$) without conditions and then **verify** each solution by substituting it into the original equation.

> [!ESEMPIO] An extraneous solution: $\sqrt{x + 7} = x + 1$
> Condition: $x + 1 \geq 0$, that is $x \geq -1$.
>
> Square: $x + 7 = x^2 + 2x + 1$, that is $x^2 + x - 6 = 0$, with solutions $x = 2$ and $x = -3$.
>
> $x = -3$ does not satisfy $x \geq -1$ and is discarded: indeed $\sqrt{-3 + 7} = 2$, while $-3 + 1 = -2$. Only solution: $x = 2$ (check: $\sqrt{9} = 3 = 2 + 1$).

The graph shows where the extraneous solution comes from. By squaring you solve $\sqrt{x + 7} = x + 1$ and $-\sqrt{x + 7} = x + 1$ together: the solution $x = -3$ belongs to the second equation, not to ours.

```grafico
titolo: The red line $y = x + 1$ meets $y = \sqrt{x + 7}$ (solid curve) only at $x = 2$; at $x = -3$ it meets $y = -\sqrt{x + 7}$ (dashed)
x: -8 5
y: -4 5
f: sqrt(x + 7)
f: -sqrt(x + 7) | grigio | tratteggio
f: x + 1 | rosso
punto: 2 3 | $(2, 3)$ | se
punto: -3 -2 | vuoto | $(-3, -2)$ | e
```

> [!ESEMPIO] Two acceptable solutions and an impossible case
> $\sqrt{x^2 - 16} = 3$: the right-hand side is positive, so it is enough to square. $x^2 - 16 = 9$, $x^2 = 25$, $x = \pm 5$. Both are acceptable: $\sqrt{25 - 16} = 3$.
>
> $\sqrt{x^2 + 1} = -2$: a square root cannot equal a negative number. **Impossible**, without any calculation.

> [!TRAPPOLA] The square of a binomial
> $(x + 1)^2 = x^2 + 2x + 1$, not $x^2 + 1$. Forgetting the middle term (twice the product) is the most frequent mistake when squaring a right-hand side such as $x + 1$ or $3 - x$.

### Equations with two or more square roots

With several square roots, for example $\sqrt{f(x)} \pm \sqrt{g(x)} = h(x)$ or $\sqrt{f(x)} \pm \sqrt{g(x)} = \sqrt{h(x)}$, you square several times until the roots disappear. Writing all the conditions becomes long, so you usually proceed like this:

> [!METODO] Several square roots
> 1. Write the C.E.: all radicands greater than or equal to zero.
> 2. Isolate one root on one side, so that squaring is simpler.
> 3. Square; if a root remains, isolate it again and square again.
> 4. Solve the equation without roots that you get.
> 5. **Verify** each solution by substituting it into the original equation and keep only those that make it true.

> [!ESEMPIO] $\sqrt{2x + 1} + \sqrt{x} = 1$
> C.E.: $x \geq 0$ (with $x \geq 0$, $2x + 1$ is positive too).
>
> Isolate the first root: $\sqrt{2x + 1} = 1 - \sqrt{x}$. Square:
> $$
> 2x + 1 = 1 - 2\sqrt{x} + x \quad\Rightarrow\quad x = -2\sqrt{x}
> $$
> Square again: $x^2 = 4x$, that is $x(x - 4) = 0$: $x = 0$ or $x = 4$.
>
> Verification: with $x = 0$ you get $\sqrt{1} + \sqrt{0} = 1$, true. With $x = 4$ you get $\sqrt{9} + \sqrt{4} = 5 \neq 1$: extraneous solution. Only solution: $x = 0$.
>
> You could also reason like this: in $x = -2\sqrt{x}$ the left-hand side is $\geq 0$ and the right-hand side is $\leq 0$, so they must both be zero.

### Inequalities with one radical

> [!METODO] Odd index
> Raise both sides to the power $n$ without conditions: the direction stays the same, because with $n$ odd $a < b$ is equivalent to $a^n < b^n$.

> [!ESEMPIO] $\sqrt[3]{1 - 2x} \geq -1$
> Cube both sides: $1 - 2x \geq -1$, that is $-2x \geq -2$. Divide by $-2$ and reverse: $x \leq 1$.

With an even index you must distinguish whether the root must be **less** or **greater** than $g(x)$. The schemes below are written for the square root; with another even index $n$ they are identical, with $g(x)^n$ in place of $g(x)^2$.

> [!PROP] Square root less than $g(x)$
> $$
> \sqrt{f(x)} < g(x) \quad\Longleftrightarrow\quad \begin{cases} f(x) \geq 0 \\ g(x) > 0 \\ f(x) < g(x)^2 \end{cases}
> $$
> The double arrow $\Longleftrightarrow$ is read "is equivalent to": what is on the left and what is on the right have the same solutions.
>
> - $f(x) \geq 0$: the root must exist;
> - $g(x) > 0$: the root is positive or zero, so it can be less than $g(x)$ only if $g(x)$ is positive;
> - $f(x) < g(x)^2$: now both sides are positive or zero and you can square without changing the direction.
>
> With $\leq$ in place of $<$ the system becomes $f(x) \geq 0$, $g(x) \geq 0$, $f(x) \leq g(x)^2$.

> [!PROP] Square root greater than $g(x)$
> $$
> \sqrt{f(x)} > g(x) \quad\Longleftrightarrow\quad \begin{cases} g(x) < 0 \\ f(x) \geq 0 \end{cases} \;\cup\; \begin{cases} g(x) \geq 0 \\ f(x) > g(x)^2 \end{cases}
> $$
> - First system: if $g(x)$ is negative, the inequality is true wherever the root exists.
> - Second system: if $g(x) \geq 0$ you square; the condition $f(x) \geq 0$ is already contained in $f(x) > g(x)^2$.
> - The solutions are the **union** of the solutions of the two systems.
>
> With $\geq$ in place of $>$, in the second system you write $f(x) \geq g(x)^2$.

> [!ESEMPIO] $\sqrt{x + 2} < x$
> $$
> \begin{cases} x + 2 \geq 0 \\ x > 0 \\ x + 2 < x^2 \end{cases}
> $$
> The first gives $x \geq -2$, the second $x > 0$. The third is $x^2 - x - 2 > 0$: roots $-1$ and $2$, outer intervals, that is $x < -1$ or $x > 2$. The part common to all three is $x > 2$.

> [!ESEMPIO] $\sqrt{x + 2} > x$
> First system: $x < 0$ and $x + 2 \geq 0$, that is $-2 \leq x < 0$.
>
> Second system: $x \geq 0$ and $x + 2 > x^2$, that is $x^2 - x - 2 < 0$, which holds for $-1 < x < 2$; together with $x \geq 0$ it gives $0 \leq x < 2$.
>
> Union: $-2 \leq x < 2$, that is $[-2, 2)$.

The graph puts the two examples together: the root lies **above** the line $y = x$ for $-2 \leq x < 2$ and **below** it for $x > 2$; at $x = 2$ the two curves meet ($\sqrt{4} = 2$), and to the left of $-2$ the root does not exist.

```grafico
titolo: $y = \sqrt{x + 2}$ lies above the red line $y = x$ for $-2 \leq x < 2$ and below it for $x > 2$
x: -3 5
y: -3 4
f: sqrt(x + 2) | da=-2 | a=-0.5 | $y = \sqrt{x + 2}$ | no
f: sqrt(x + 2) | da=-0.5 | a=5
f: x | rosso | da=-3 | a=-1 | $y = x$ | se
f: x | rosso | da=-1 | a=5
punto: 2 2 | $(2, 2)$ | se
punto: -2 0 | $-2$ | no
```

> [!ESEMPIO] The root on the right: $x - 1 \leq \sqrt{x + 5}$
> Read the inequality from right to left: it is the same as $\sqrt{x + 5} \geq x - 1$, that is a root "greater than or equal to" $g(x) = x - 1$.
>
> First system: $x - 1 < 0$ and $x + 5 \geq 0$, that is $-5 \leq x < 1$.
>
> Second system: $x - 1 \geq 0$ and $x + 5 \geq (x - 1)^2 = x^2 - 2x + 1$, that is $x \geq 1$ and $x^2 - 3x - 4 \leq 0$ (roots $-1$ and $4$), so $1 \leq x \leq 4$.
>
> Union: $-5 \leq x \leq 4$.

> [!NOTA] Cases with a number on the right-hand side
> When $g(x)$ is a number $c$ a little reasoning is enough:
> - $\sqrt{f(x)} < c$ with $c \leq 0$: **no** solutions. With $c > 0$: $0 \leq f(x) < c^2$.
> - $\sqrt{f(x)} > c$ with $c < 0$: it holds for **all $x$ in the domain**, that is where $f(x) \geq 0$. With $c \geq 0$: $f(x) > c^2$.
>
> Example: $\sqrt{3 - x} \leq 2$ is equivalent to $0 \leq 3 - x \leq 4$, that is $-1 \leq x \leq 3$.

> [!TRAPPOLA] "Greater than a negative number" does not mean "for every $x$"
> $\sqrt{x - 1} > -3$ is true for all $x$ **for which the root exists**: the solution is $x \geq 1$, not the whole of $\R$. For $x = 0$, for example, $\sqrt{-1}$ does not exist and the inequality makes no sense.

### Inequalities with two square roots

Here there is no single scheme: you use the same reasoning, carefully. Two ideas help:

- if both sides are **greater than or equal to zero** you can square without changing the direction;
- the domain conditions of **all** the roots must be put in a system with the rest.

> [!ESEMPIO] $\sqrt{x + 1} < \sqrt{5 - x}$
> C.E.: $x + 1 \geq 0$ and $5 - x \geq 0$, that is $-1 \leq x \leq 5$. Both sides are positive or zero: square, $x + 1 < 5 - x$, that is $x < 2$. Together with the C.E.: $-1 \leq x < 2$.

> [!ESEMPIO] $\sqrt{x + 3} + \sqrt{x - 2} > 5$
> C.E.: $x \geq -3$ and $x \geq 2$, that is $x \geq 2$. Both sides are positive: square.
> $$
> x + 3 + x - 2 + 2\sqrt{(x + 3)(x - 2)} > 25 \quad\Rightarrow\quad \sqrt{(x + 3)(x - 2)} > 12 - x
> $$
> (in the second step you moved $2x + 1$ to the right and divided by $2$). It is a "root greater than $g(x)$" inequality with $g(x) = 12 - x$:
> - first system: $12 - x < 0$ and $(x + 3)(x - 2) \geq 0$, that is $x > 12$;
> - second system: $12 - x \geq 0$ and $x^2 + x - 6 > 144 - 24x + x^2$, that is $x \leq 12$ and $25x > 150$, so $6 < x \leq 12$.
>
> Union: $x > 6$. All these values satisfy the C.E. ($x \geq 2$), so the solution is $x > 6$. Check: with $x = 6$ you get $\sqrt{9} + \sqrt{4} = 5$, exactly the boundary value.

> [!TEST] Radical equations and inequalities in the test
> - Look at the signs straight away: $\sqrt{\ldots} = -2$ and $\sqrt{\ldots} < -1$ have no solutions; $\sqrt{\ldots} > -1$ holds on the whole domain.
> - In multiple-choice questions **substitute** the proposed solutions into the original equation: it is the fastest way to unmask extraneous solutions.
> - "How many solutions does ... have": solve the squared equation and then discard the solutions with $g(x) < 0$.
> - With an odd index (cube root) no conditions are needed: a cube root can be negative.

## 4.3 Absolute value equations and inequalities

### The absolute value

> [!DEF] Absolute value (or modulus)
> The **absolute value** (or **modulus**, *modulo*) of an expression $A$, written $|A|$, is
> $$
> |A| = \begin{cases} A & \text{if } A \geq 0 \\ -A & \text{if } A < 0 \end{cases}
> $$
> If $A$ is positive or zero it leaves it as it is; if $A$ is negative it changes its sign. The result is never negative.

Examples with numbers: $|7| = 7$, $|-7| = 7$, $|0| = 0$, $|3 - 5| = |-2| = 2$. With an expression the result depends on $x$:
$$
|x - 2| = \begin{cases} x - 2 & \text{if } x \geq 2 \\ 2 - x & \text{if } x < 2 \end{cases}
$$

> [!PROP] Useful properties
> - $|A| \geq 0$ always, and $|A| = 0$ only if $A = 0$.
> - $|-A| = |A|$ and $|A \cdot B| = |A| \cdot |B|$.
> - $\sqrt{A^2} = |A|$: for example $\sqrt{(-3)^2} = \sqrt{9} = 3$.
> - $|x - a|$ is the **distance** between the points $x$ and $a$ on the number line. In particular $|x|$ is the distance of $x$ from $0$.

> [!TRAPPOLA] Mistakes to avoid
> - $|a + b|$ in general is **not** $|a| + |b|$: $|3 + (-5)| = 2$, while $|3| + |-5| = 8$.
> - $|-x|$ is not always $x$: if $x = -4$, then $|-x| = |4| = 4$, which is $-x$.
> - The absolute value does not "remove the minus signs" inside an expression: $|x - 3|$ is not $x + 3$.

```grafico
titolo: $y = \lvert x - 1 \rvert$ and the line $y = 2$: they meet at $x = -1$ and at $x = 3$
x: -3 5
y: -1 5
f: abs(x - 1)
orizzontale: 2 | rosso | tratteggio | $y = 2$
punto: -1 2 | $x = -1$ | so
punto: 3 2 | $x = 3$ | se
```

### Absolute value equations

> [!PROP] $|A(x)| = c$ with $c$ a number
> - $c < 0$: **no solutions**, because an absolute value is never negative.
> - $c = 0$: it is equivalent to $A(x) = 0$.
> - $c > 0$: it is equivalent to $A(x) = c$ **or** $A(x) = -c$.
>
> The last case comes from the definition. You solve the two systems
> $$
> \begin{cases} A(x) \geq 0 \\ A(x) = c \end{cases} \qquad \text{or} \qquad \begin{cases} A(x) < 0 \\ -A(x) = c \end{cases}
> $$
> and take the union of the solutions. With $c > 0$ the sign conditions are automatically true, and what remains is $A(x) = c$ and $A(x) = -c$.

> [!ESEMPIO] $|2x - 3| = 5$
> $2x - 3 = 5$ gives $x = 4$; $2x - 3 = -5$ gives $x = -1$. Solutions: $x = 4$ and $x = -1$.
>
> Check: $|8 - 3| = 5$ and $|-2 - 3| = |-5| = 5$.

> [!ESEMPIO] Using distance: $|x + 1| = 3$
> $|x + 1| = |x - (-1)|$ is the distance of $x$ from $-1$. The points at distance $3$ from $-1$ are $-1 + 3 = 2$ and $-1 - 3 = -4$. Solutions: $x = 2$ and $x = -4$, the same result as $x + 1 = \pm 3$.

> [!ESEMPIO] Four solutions: $|x^2 - 5| = 4$
> $x^2 - 5 = 4$ gives $x^2 = 9$, that is $x = \pm 3$. $x^2 - 5 = -4$ gives $x^2 = 1$, that is $x = \pm 1$. Solutions: $-3$, $-1$, $1$, $3$.

> [!ESEMPIO] Immediate cases
> $|x + 4| = -2$ is impossible. $|3x - 6| = 0$ is equivalent to $3x - 6 = 0$, that is $x = 2$.

If the other side also contains $x$, as in $|A(x)| = B(x)$, you use the definition directly: two systems, one for $A(x) \geq 0$ and one for $A(x) < 0$.

> [!ESEMPIO] $|x - 2| = 2x - 1$
> First case, $x - 2 \geq 0$, that is $x \geq 2$: the equation becomes $x - 2 = 2x - 1$, that is $x = -1$. But $-1$ is not $\geq 2$: it is discarded.
>
> Second case, $x < 2$: the equation becomes $-(x - 2) = 2x - 1$, that is $-x + 2 = 2x - 1$, $3x = 3$ and $x = 1$. It is fine, because $1 < 2$.
>
> Solution: $x = 1$. Check: $|1 - 2| = 1$ and $2 \cdot 1 - 1 = 1$.

> [!NOTA] Two equal absolute values
> $|A(x)| = |B(x)|$ is equivalent to $A(x) = B(x)$ or $A(x) = -B(x)$: two numbers with the same absolute value are equal or opposite. For example in $|x - 1| = |2x + 4|$, from $x - 1 = 2x + 4$ you get $x = -5$ and from $x - 1 = -2x - 4$ you get $x = -1$.

### Absolute value inequalities

> [!PROP] Inequalities with $c$ a number
> With $c > 0$:
> $$
> |A(x)| < c \iff -c < A(x) < c \qquad\qquad |A(x)| > c \iff A(x) < -c \;\text{ or }\; A(x) > c
> $$
> With $\leq$ and $\geq$ the endpoints are included. The second case can also be obtained from the definition, by taking the union of the systems $A(x) \geq 0$, $A(x) > c$ and $A(x) < 0$, $-A(x) > c$.
>
> Thinking of distance: $|x - a| < r$ gives the points whose distance from $a$ is **less** than $r$, that is the interval $(a - r, a + r)$; $|x - a| > r$ gives the points **farther away** than $r$.

The table summarises all the cases, according to the sign of the number $c$ (columns: $c > 0$, $c = 0$, $c < 0$).

| Inequality | Positive number | Zero | Negative number |
|---|---|---|---|
| $|A| < c$ | $-c < A < c$ | no solutions | no solutions |
| $|A| \leq c$ | $-c \leq A \leq c$ | $A = 0$ | no solutions |
| $|A| > c$ | $A < -c$ or $A > c$ | $A \neq 0$ | every $x$ |
| $|A| \geq c$ | $A \leq -c$ or $A \geq c$ | every $x$ | every $x$ |

(Here "every $x$" means every $x$ for which $A$ exists.)

> [!TRAPPOLA] How to write the solution of $|x| > 3$
> The solution is $x < -3$ or $x > 3$: two separate pieces, joined by "or" (as intervals, $(-\infty, -3) \cup (3, +\infty)$). Writing it as $-3 > x > 3$ makes no sense, because no number is at the same time less than $-3$ and greater than $3$. On the other hand, the solution of $|x| < 3$ is correctly written as $-3 < x < 3$: there the numbers must lie **between** $-3$ and $3$.

> [!ESEMPIO] $|x - 1| < 2$
> $-2 < x - 1 < 2$; add $1$ to all the sides: $-1 < x < 3$. These are the points whose distance from $1$ is less than $2$: in the graph above, where the "V" of $y = |x - 1|$ lies below the line $y = 2$.

> [!ESEMPIO] $|2x + 1| \geq 3$
> $2x + 1 \leq -3$ or $2x + 1 \geq 3$, that is $x \leq -2$ or $x \geq 1$.
>
> ```retta
> titolo: Solutions of $\lvert 2x + 1 \rvert \geq 3$
> da: -5 4
> int: (-inf, -2]
> int: [1, +inf)
> ```

> [!ESEMPIO] With a second-degree expression: $|x^2 - 5| \leq 4$
> $-4 \leq x^2 - 5 \leq 4$ and, adding $5$, $1 \leq x^2 \leq 9$. These are two conditions together:
> - $x^2 \geq 1$: $x \leq -1$ or $x \geq 1$;
> - $x^2 \leq 9$: $-3 \leq x \leq 3$.
>
> Common part: $-3 \leq x \leq -1$ or $1 \leq x \leq 3$.
>
> ```retta
> titolo: Solutions of $\lvert x^2 - 5 \rvert \leq 4$
> da: -5 5
> int: [-3, -1]
> int: [1, 3]
> ```

> [!ESEMPIO] Immediate cases
> $|x - 4| > -1$: true for every $x \in \R$. $|x - 4| < 0$: no solutions. $|x - 4| \leq 0$: only $x = 4$.

> [!ESEMPIO] A tolerance
> A mechanical part must be $50$ mm long with a tolerance of $0.2$ mm: the length $x$ is acceptable if $|x - 50| \leq 0.2$, that is $49.8 \leq x \leq 50.2$. The absolute value is the natural way to write "close to a value, within a certain margin".

### Several absolute values

> [!METODO] Sign study
> 1. Find where the argument of each absolute value is zero.
> 2. These points split the number line into intervals; in each one every argument has a constant sign.
> 3. In each interval replace $|A|$ with $A$ (if $A \geq 0$ there) or with $-A$ (if $A < 0$).
> 4. Solve in each interval and keep only the solutions that fall **inside** that interval (it is a system: interval plus equation or inequality).
> 5. Take the union of the results.

> [!ESEMPIO] $|x| + |x - 4| = 6$
> The arguments are zero at $0$ and at $4$.
> - $x < 0$: $-x - (x - 4) = 6$, that is $-2x + 4 = 6$ and $x = -1$. It is $< 0$: acceptable.
> - $0 \leq x < 4$: $x - (x - 4) = 6$, that is $4 = 6$: false, no solutions.
> - $x \geq 4$: $x + x - 4 = 6$, that is $x = 5$. It is $\geq 4$: acceptable.
>
> Solutions: $x = -1$ and $x = 5$.

> [!ESEMPIO] $|x + 2| + |x - 1| < 5$
> The arguments are zero at $-2$ and at $1$.
>
> In the table: the sign of the first argument, $x + 2$, that of the second, $x - 1$, and the expression $|x + 2| + |x - 1|$ written without absolute values in each interval.
>
> | Interval | First argument | Second argument | Expression |
> |---|---|---|---|
> | $x < -2$ | $-$ | $-$ | $-(x + 2) - (x - 1) = -2x - 1$ |
> | $-2 \leq x < 1$ | $+$ | $-$ | $(x + 2) - (x - 1) = 3$ |
> | $x \geq 1$ | $+$ | $+$ | $(x + 2) + (x - 1) = 2x + 1$ |
>
> - $x < -2$: $-2x - 1 < 5$ gives $x > -3$; together with $x < -2$: $-3 < x < -2$.
> - $-2 \leq x < 1$: $3 < 5$ is always true, so the whole interval works.
> - $x \geq 1$: $2x + 1 < 5$ gives $x < 2$; together with $x \geq 1$: $1 \leq x < 2$.
>
> Union: $-3 < x < 2$.

```grafico
titolo: $y = \lvert x + 2 \rvert + \lvert x - 1 \rvert$ lies below the line $y = 5$ for $-3 < x < 2$
x: -5 4
y: -1 8
f: abs(x + 2) + abs(x - 1)
orizzontale: 5 | rosso | tratteggio | $y = 5$
punto: -3 5 | vuoto | $-3$ | so
punto: 2 5 | vuoto | $2$ | se
```

> [!TEST] Absolute value in the test
> - $|x - a| < r$ and $|x - a| > r$ can be solved at a glance by thinking of the distance from $a$.
> - Typical true/false questions: "$|a + b| = |a| + |b|$ for every $a$ and $b$" (false), "$\sqrt{a^2} = a$ for every $a$" (false, it is $|a|$), "$|x| = -3$ has solutions" (false).
> - With two absolute values, think of distances before calculating: $|x| + |x - 2|$ is the sum of the distances of $x$ from $0$ and from $2$. It is never less than $2$ and equals exactly $2$ for all $x$ between $0$ and $2$.
> - "How many integers satisfy...": find the interval and count, checking whether the endpoints are included.

## Exercises

::: esercizio base A rational equation
Solve $\frac{2}{x} + \frac{1}{x - 2} = 0$.
::: soluzione
C.E.: $x \neq 0$ and $x \neq 2$.

With the common denominator $x(x - 2)$, the numerator must be zero: $2(x - 2) + x = 0$, that is $3x - 4 = 0$ and $x = \frac{4}{3}$. It is different from $0$ and from $2$: acceptable.

Check: $\frac{2}{4/3} = \frac{3}{2}$ and $\frac{1}{4/3 - 2} = \frac{1}{-2/3} = -\frac{3}{2}$; the sum is $0$.
:::

::: esercizio base A rational inequality
Solve $\frac{x - 3}{x + 1} > 0$.
::: soluzione
C.E.: $x \neq -1$. The numerator is positive for $x > 3$, the denominator for $x > -1$.

| Interval | Numerator | Denominator | Fraction |
|---|---|---|---|
| $x < -1$ | $-$ | $-$ | $+$ |
| $-1 < x < 3$ | $-$ | $+$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ |

Direction $>$: $x < -1$ or $x > 3$, that is $(-\infty, -1) \cup (3, +\infty)$.
:::

::: esercizio medio Watch the C.E.
Solve $\frac{x + 2}{x - 1} - \frac{x}{x + 1} = \frac{6}{x^2 - 1}$.
::: soluzione
$x^2 - 1 = (x - 1)(x + 1)$. C.E.: $x \neq 1$ and $x \neq -1$.

With the common denominator $(x - 1)(x + 1)$, the numerator must be zero:
$$
(x + 2)(x + 1) - x(x - 1) - 6 = 0
$$
that is $x^2 + 3x + 2 - x^2 + x - 6 = 0$, so $4x - 4 = 0$ and $x = 1$. But $x = 1$ is excluded by the C.E.: the equation is **impossible**.
:::

::: esercizio medio Second-degree numerator
Solve $\frac{x^2 - 9}{x - 1} \leq 0$.
::: soluzione
C.E.: $x \neq 1$. Numerator: $x^2 - 9 \geq 0$ for $x \leq -3$ or $x \geq 3$. Denominator: $x - 1 > 0$ for $x > 1$.

| Interval | Numerator | Denominator | Fraction |
|---|---|---|---|
| $x < -3$ | $+$ | $-$ | $-$ |
| $-3 < x < 1$ | $-$ | $-$ | $+$ |
| $1 < x < 3$ | $-$ | $+$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ |

Direction $\leq$: negative intervals plus the zeros of the numerator ($\pm 3$), never the zero of the denominator. Solution: $x \leq -3$ or $1 < x \leq 3$.

```retta
titolo: Solutions of $\frac{x^2 - 9}{x - 1} \leq 0$
da: -5 5
int: (-inf, -3]
int: (1, 3]
```
:::

::: esercizio test A fraction greater than or equal to a number
Solve $\frac{3}{x - 2} \geq 1$ and state how many integers satisfy the inequality.
::: soluzione
C.E.: $x \neq 2$. Bring everything to the left: $\frac{3}{x - 2} - 1 \geq 0$, that is $\frac{3 - (x - 2)}{x - 2} \geq 0$, so $\frac{5 - x}{x - 2} \geq 0$.

Numerator: $5 - x \geq 0$ for $x \leq 5$. Denominator: $x - 2 > 0$ for $x > 2$. The fraction is positive for $2 < x < 5$ and is zero at $x = 5$. Solution: $2 < x \leq 5$.

The integers are $3$, $4$ and $5$: there are **3**. Watch out: multiplying by $x - 2$ without thinking about the sign you would have found $x \leq 5$, which also contains wrong values such as $x = 0$ (indeed $\frac{3}{-2} < 1$).
:::

::: esercizio test Working as a pair
Two workers together paint a room in $3$ hours; the first one alone takes $4$ hours. How long does the second one take alone?
::: soluzione
Let $x$ be the time in hours of the second worker, with $x \neq 0$. In one hour the first does $\frac{1}{4}$ of the job, the second $\frac{1}{x}$, and together they do $\frac{1}{3}$ of it:
$$
\frac{1}{4} + \frac{1}{x} = \frac{1}{3}
$$
So $\frac{1}{x} = \frac{1}{3} - \frac{1}{4} = \frac{1}{12}$ and $x = 12$ hours.
:::

::: esercizio base A radical with even index
Solve $\sqrt{x + 3} = x - 3$.
::: soluzione
Condition: $x - 3 \geq 0$, that is $x \geq 3$. Square: $x + 3 = x^2 - 6x + 9$, that is $x^2 - 7x + 6 = 0$, with solutions $x = 1$ and $x = 6$.

$x = 1$ does not satisfy $x \geq 3$ and is discarded (indeed $\sqrt{4} = 2$, while $1 - 3 = -2$). Solution: $x = 6$. Check: $\sqrt{9} = 3 = 6 - 3$.
:::

::: esercizio base Odd index and signs
Solve:

1. $\sqrt[3]{x^2 - 1} = 2$
2. $\sqrt{x^2 + 4} = -2$
::: soluzione
1. Odd index: cube both sides, $x^2 - 1 = 8$, so $x^2 = 9$ and $x = \pm 3$. Both are fine.
2. A square root is never negative: **no solutions**.
:::

::: esercizio medio Two radicals
Solve $\sqrt{x + 4} - \sqrt{x - 1} = 1$.
::: soluzione
C.E.: $x \geq 1$. Isolate one root: $\sqrt{x + 4} = 1 + \sqrt{x - 1}$. Square:
$$
x + 4 = 1 + 2\sqrt{x - 1} + x - 1 \quad\Rightarrow\quad 4 = 2\sqrt{x - 1} \quad\Rightarrow\quad \sqrt{x - 1} = 2
$$
Square again: $x - 1 = 4$, that is $x = 5$. Verification: $\sqrt{9} - \sqrt{4} = 3 - 2 = 1$. Solution: $x = 5$.
:::

::: esercizio medio Three radicals
Solve $\sqrt{x + 4} + \sqrt{x - 1} = \sqrt{4x + 5}$.
::: soluzione
C.E.: $x + 4 \geq 0$, $x - 1 \geq 0$ and $4x + 5 \geq 0$, that is $x \geq 1$. Both sides are positive or zero: square.
$$
x + 4 + x - 1 + 2\sqrt{(x + 4)(x - 1)} = 4x + 5 \quad\Rightarrow\quad 2\sqrt{(x + 4)(x - 1)} = 2x + 2
$$
Divide by $2$: $\sqrt{x^2 + 3x - 4} = x + 1$. With $x \geq 1$ the right-hand side is positive, so square again: $x^2 + 3x - 4 = x^2 + 2x + 1$, that is $x = 5$.

Verification: $\sqrt{9} + \sqrt{4} = 5$ and $\sqrt{25} = 5$. Solution: $x = 5$.
:::

::: esercizio medio Root less than $g(x)$
Solve $\sqrt{x + 1} < x - 1$.
::: soluzione
$$
\begin{cases} x + 1 \geq 0 \\ x - 1 > 0 \\ x + 1 < (x - 1)^2 \end{cases}
$$
The first gives $x \geq -1$, the second $x > 1$. The third: $x + 1 < x^2 - 2x + 1$, that is $x^2 - 3x > 0$, $x(x - 3) > 0$, so $x < 0$ or $x > 3$.

Common part: $x > 3$. Check: with $x = 3$ you get $\sqrt{4} = 2$, equal to and not less than $3 - 1 = 2$; with $x = 8$ you get $3 < 7$.
:::

::: esercizio test Root greater than $g(x)$
Solve $\sqrt{4 - x} > x - 2$.
::: soluzione
First system, $x - 2 < 0$ and $4 - x \geq 0$: $x < 2$ and $x \leq 4$, that is $x < 2$.

Second system, $x - 2 \geq 0$ and $4 - x > (x - 2)^2$: $x \geq 2$ and $4 - x > x^2 - 4x + 4$, that is $x^2 - 3x < 0$, which holds for $0 < x < 3$. Together: $2 \leq x < 3$.

Union: $x < 3$, that is $(-\infty, 3)$. All these values satisfy $4 - x \geq 0$.
:::

::: esercizio test Without calculations
Find the solutions of:

1. $\sqrt{x - 5} > -2$
2. $\sqrt{x - 5} < -2$
3. $\sqrt[3]{x - 5} < -2$
::: soluzione
1. The root, when it exists, is $\geq 0$ and therefore greater than $-2$: the solution is the domain, $x \geq 5$ (not the whole of $\R$).
2. A square root cannot be negative: **no solutions**.
3. Odd index: cube both sides, $x - 5 < -8$, that is $x < -3$.
:::

::: esercizio base An equation and inequalities with the modulus
Solve:

1. $|3x - 6| = 9$
2. $|x + 2| \leq 3$
3. $|x + 2| > 3$
::: soluzione
1. $3x - 6 = 9$ gives $x = 5$; $3x - 6 = -9$ gives $x = -1$.
2. $-3 \leq x + 2 \leq 3$, that is $-5 \leq x \leq 1$.
3. $x + 2 < -3$ or $x + 2 > 3$, that is $x < -5$ or $x > 1$. These are exactly the numbers excluded in part 2.
:::

::: esercizio medio Modulus equal to an expression
Solve $|x^2 - 4| = 3x$.
::: soluzione
First case, $x^2 - 4 \geq 0$, that is $x \leq -2$ or $x \geq 2$: the equation is $x^2 - 4 = 3x$, that is $x^2 - 3x - 4 = 0$, with solutions $x = 4$ and $x = -1$. Only $x = 4$ satisfies the condition.

Second case, $x^2 - 4 < 0$, that is $-2 < x < 2$: the equation is $-(x^2 - 4) = 3x$, that is $x^2 + 3x - 4 = 0$, with solutions $x = 1$ and $x = -4$. Only $x = 1$ satisfies the condition.

Solutions: $x = 1$ and $x = 4$. Check: $|1 - 4| = 3 = 3 \cdot 1$ and $|16 - 4| = 12 = 3 \cdot 4$.
:::

::: esercizio medio Two absolute values
Solve $|x - 1| + |x + 1| \leq 4$.
::: soluzione
The arguments are zero at $1$ and at $-1$.

- $x < -1$: $-(x - 1) - (x + 1) = -2x \leq 4$, that is $x \geq -2$; so $-2 \leq x < -1$.
- $-1 \leq x < 1$: $-(x - 1) + (x + 1) = 2 \leq 4$, always true: the whole interval works.
- $x \geq 1$: $(x - 1) + (x + 1) = 2x \leq 4$, that is $x \leq 2$; so $1 \leq x \leq 2$.

Union: $-2 \leq x \leq 2$.
:::

::: esercizio test Isolate the modulus first
Solve $5 - |x^2 - 2| < 4$.
::: soluzione
Isolate the absolute value: $-|x^2 - 2| < -1$, and multiplying by $-1$ (direction reversed) $|x^2 - 2| > 1$. So $x^2 - 2 < -1$ or $x^2 - 2 > 1$:

- $x^2 - 2 < -1$ gives $x^2 < 1$, that is $-1 < x < 1$;
- $x^2 - 2 > 1$ gives $x^2 > 3$, that is $x < -\sqrt{3}$ or $x > \sqrt{3}$.

Solution: $x < -\sqrt{3}$ or $-1 < x < 1$ or $x > \sqrt{3}$ (remember that $\sqrt{3}$ is about $1.73$).

```retta
titolo: Solutions of $5 - \lvert x^2 - 2 \rvert < 4$
da: -3 3
int: (-inf, -sqrt(3))
int: (-1, 1)
int: (sqrt(3), +inf)
tacca: -sqrt(3) | "−√3"
tacca: sqrt(3) | "√3"
```
:::

::: esercizio test How many integers
How many integers satisfy $|2x - 1| < 7$?
::: soluzione
$-7 < 2x - 1 < 7$; add $1$: $-6 < 2x < 8$; divide by $2$: $-3 < x < 4$. The integers are $-2$, $-1$, $0$, $1$, $2$, $3$: there are **6**.
:::

## Self-check quiz

```quiz
D: What are the domain conditions of $\frac{1}{x^2 - 4} + \frac{2}{x}$?
+ $x \neq 0$ and $x \neq \pm 2$
- $x \neq \pm 2$
- $x \neq 0$ and $x \neq 2$
- $x \neq 0$ and $x \neq 4$
= $x^2 - 4 = (x - 2)(x + 2)$ is zero at $2$ and at $-2$; the second denominator is zero at $0$. All three values must be excluded.

D: Solve $\frac{x + 1}{x - 2} = 4$. What is the value of $x$?
N: 3
= C.E. $x \neq 2$. $x + 1 = 4(x - 2)$, that is $x + 1 = 4x - 8$, so $3x = 9$ and $x = 3$, which is acceptable.

D: True or false: $x = 1$ is a solution of the equation $\frac{x^2 - 1}{x - 1} = 2$.
- True
+ False
= For $x = 1$ the denominator is zero, so $x = 1$ is excluded by the C.E. Simplifying you find $x + 1 = 2$, that is $x = 1$: the equation is impossible.

D: The inequality $\frac{x}{x - 3} < 0$ is satisfied for
+ $0 < x < 3$
- $x < 0$ or $x > 3$
- $x < 0$
- $0 \leq x < 3$
= Numerator and denominator must have opposite signs, and this happens only between $0$ and $3$. At $x = 0$ the fraction equals $0$, which is not less than $0$. The answer $x < 0$ comes from multiplying by the denominator.

D: Which of these numbers are solutions of $\frac{x + 2}{x - 1} \geq 0$?
+ $-2$
+ $3$
- $1$
- $0$
= The solution is $x \leq -2$ or $x > 1$. At $-2$ the fraction equals $0$, which is fine; at $3$ it equals $\frac{5}{2}$. At $1$ it does not exist; at $0$ it equals $-2$.

D: How many real solutions does the equation $\sqrt{x + 5} = x - 1$ have?
N: 1
= You need $x \geq 1$. Squaring: $x + 5 = x^2 - 2x + 1$, that is $x^2 - 3x - 4 = 0$, with solutions $4$ and $-1$. Only $x = 4$ satisfies $x \geq 1$: indeed $\sqrt{9} = 3 = 4 - 1$.

D: The solutions of the equation $\sqrt{2x + 7} = x + 2$ are
+ only $x = 1$
- $x = 1$ and $x = -3$
- only $x = -3$
- no real solutions
= Squaring: $2x + 7 = x^2 + 4x + 4$, that is $x^2 + 2x - 3 = 0$, with solutions $1$ and $-3$. With $x = -3$ the right-hand side equals $-1$, negative, while $\sqrt{1} = 1$: it is an extraneous solution.

D: True or false: the equation $\sqrt[3]{x} = -2$ has no real solutions.
- True
+ False
= The cube root can be negative: cubing you find $x = -8$, and indeed $\sqrt[3]{-8} = -2$.

D: The inequality $\sqrt{x - 1} < 2$ is satisfied for
+ $1 \leq x < 5$
- $x < 5$
- $1 < x < 5$
- $x \geq 1$
= You need $x - 1 \geq 0$ (the root exists) and $x - 1 < 4$: so $1 \leq x < 5$. At $x = 1$ the root equals $0 < 2$, so $1$ is included; "$x < 5$" forgets the domain conditions.

D: The solution set of $\sqrt{x + 3} > -1$ is
+ $x \geq -3$
- every real $x$
- no real $x$
- $x > -2$
= A square root, when it exists, is always greater than $-1$: the solution is the domain $x + 3 \geq 0$. It is not the whole of $\R$, because for $x < -3$ the root does not exist.

D: What is the sum of the solutions of $|3x + 1| = 8$?
N: -2/3
= $3x + 1 = 8$ gives $x = \frac{7}{3}$; $3x + 1 = -8$ gives $x = -3$. The sum is $\frac{7}{3} - 3 = -\frac{2}{3}$.

D: Which of these equations are impossible?
+ $|x - 1| = -2$
+ $\sqrt{x} = -3$
- $|x + 5| = 0$
- $\sqrt[3]{x} = -1$
= An absolute value and a square root are never negative. $|x + 5| = 0$ has the solution $x = -5$; $\sqrt[3]{x} = -1$ has the solution $x = -1$.

D: The inequality $|x + 3| < 2$ is equivalent to
+ $-5 < x < -1$
- $x < -1$
- $x < -5$ or $x > -1$
- $1 < x < 5$
= $-2 < x + 3 < 2$; subtracting $3$: $-5 < x < -1$. These are the points at distance less than $2$ from $-3$. The answer $1 < x < 5$ confuses $|x + 3|$ with $|x - 3|$.

D: True or false: for every real number $a$, $\sqrt{a^2} = |a|$.
+ True
- False
= The square root gives the non-negative number whose square is $a^2$, that is $|a|$. For example $\sqrt{(-5)^2} = 5$.

D: How many integers satisfy $|x + 1| \leq 2$?
N: 5
= $-2 \leq x + 1 \leq 2$, that is $-3 \leq x \leq 1$. The integers are $-3$, $-2$, $-1$, $0$, $1$.

D: The solution set of $|x + 1| + |x - 3| = 4$ is
+ $-1 \leq x \leq 3$
- only $x = -1$ and $x = 3$
- no real $x$
- every real $x$
= For $-1 \leq x \leq 3$ the expression equals $(x + 1) + (3 - x) = 4$ whatever $x$ is. Outside that interval it is greater than $4$: for example with $x = 5$ it equals $6 + 2 = 8$. It is the sum of the distances of $x$ from $-1$ and from $3$, which equals $4$ exactly for the points between $-1$ and $3$.
```

## Checklist

```checklist
I can write the domain conditions when there are denominators and roots with even index
I can solve a rational equation and discard the solutions that make a denominator zero
I can solve a rational inequality by studying the sign of numerator and denominator
I know why in an inequality you do not multiply by a denominator that contains $x$
I can solve equations and inequalities with a root of odd index by raising to the power
I can set up the system for $\sqrt{f(x)} = g(x)$ and recognise extraneous solutions
I can solve an equation with two square roots by squaring twice and verifying the solutions
I can use the schemes for $\sqrt{f(x)} < g(x)$ and for $\sqrt{f(x)} > g(x)$
I can recognise on the fly the cases with a root equal to, less than or greater than a negative number
I know the definition of absolute value and its meaning as a distance
I can solve $|A(x)| = c$, $|A(x)| < c$ and $|A(x)| > c$ for every sign of $c$
I can solve equations and inequalities with several absolute values by splitting the number line into intervals
```
