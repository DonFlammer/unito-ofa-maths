---
modulo: 7
titolo: "Exponentials and logarithms"
breve: "Powers with real exponents, the exponential function, logarithms and their properties, exponential and logarithmic equations and inequalities."
ore: 8
unita:
  - "7.1 Exponentials and logarithms"
  - "7.2 Exponential and logarithmic equations and inequalities"
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/moduli/07-esponenziali-logaritmi.md
---

## In brief

- The **exponential function** $y = a^x$ makes sense only with base $a > 0$ and $a \neq 1$. It is always positive, passes through the point $(0, 1)$, increases if $a > 1$ and decreases if $0 < a < 1$.
- The **logarithm** $\log_a b$ is the exponent you must give the base $a$ to obtain $b$: saying $\log_a b = y$ is the same as saying $a^y = b$. It exists only if $a > 0$, $a \neq 1$ and $b > 0$.
- The properties of logarithms turn products into sums, quotients into differences and powers into factors; the change of base brings any logarithm to the base you prefer. For $\log_a(x + y)$ there is no rule at all.
- $\ln$ denotes the logarithm to base $e$ (natural logarithm; $e$ is an irrational number approximately equal to $2.718$), $\log_{10}$ the logarithm to base 10.
- Exponential and logarithm with the same base are inverse functions: their graphs are symmetric with respect to the line $y = x$.
- Exponential equations: with the same base, set the exponents equal; otherwise, switch to logarithms. Logarithmic equations: first the domain conditions, then the calculations, and at the end discard the solutions that are not acceptable.
- Inequalities: with a base greater than 1 the direction stays the same, with a base between 0 and 1 the direction is reversed. In logarithmic inequalities the result must be put in a system with the domain conditions.

## 7.1 Exponentials and logarithms

### From powers to real exponents

A power $a^n$ is a short way to write a product: $2^3 = 2 \cdot 2 \cdot 2 = 8$. The number $a$ is called the **base**, the number $n$ is called the **exponent**. To build the exponential function you need to give a meaning to $a^x$ for *every* real exponent $x$: negative, fractional or irrational ones too. The meaning is built in stages, so that the rules for powers always remain valid.

| Exponent | Meaning | Example |
|---|---|---|
| natural number $n \geq 1$ | product of $n$ factors equal to $a$ | $2^3 = 8$ |
| zero | $a^0 = 1$ (with $a \neq 0$) | $5^0 = 1$ |
| negative integer | $a^{-n} = \dfrac{1}{a^n}$ | $2^{-3} = \dfrac{1}{8}$ |
| fraction $\dfrac{m}{n}$ | $a^{m/n} = \sqrt[n]{a^m}$ | $8^{2/3} = \sqrt[3]{64} = 4$ |
| irrational | the exponent is approximated by fractions closer and closer to it | $2^{\sqrt{2}} \approx 2.67$ |

Here $\sqrt[n]{a}$ is the **$n$-th root** of $a$ and the symbol $\approx$ reads “approximately equal to”.

**Why the base must be positive.** With exponent $\frac{1}{2}$ you have $a^{1/2} = \sqrt{a}$: if $a$ were negative, for example $a = -4$, you would have to compute $\sqrt{-4}$, which does not exist in the real numbers. That is why the exponential function always requires $a > 0$; $a = 0$ is left out too, because $0^{-1} = \frac{1}{0}$ does not exist. The base $a = 1$ is excluded as well: $1^x = 1$ for every $x$, and you would get a constant function, always equal to 1. With a positive base the result is always positive: $a^x > 0$ for every $x$.

> [!PROP] Properties of powers (with $a > 0$, $b > 0$ and any real exponents)
> | Rule | Example |
> |---|---|
> | $a^m \cdot a^n = a^{m+n}$ | $2^3 \cdot 2^4 = 2^7$ |
> | $\dfrac{a^m}{a^n} = a^{m-n}$ | $\dfrac{5^6}{5^4} = 5^2$ |
> | $(a^m)^n = a^{m \cdot n}$ | $(3^2)^3 = 3^6$ |
> | $a^n \cdot b^n = (ab)^n$ | $2^3 \cdot 5^3 = 10^3$ |
> | $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$ | $\dfrac{6^2}{3^2} = 2^2$ |
> | $\left(\dfrac{1}{a}\right)^n = a^{-n}$ | $\left(\dfrac{1}{3}\right)^2 = 3^{-2}$ |

> [!ESEMPIO] Fractional and negative exponents
> - $27^{2/3} = \left(\sqrt[3]{27}\right)^2 = 3^2 = 9$. It pays to take the root first: the numbers stay small.
> - $16^{-3/4} = \dfrac{1}{16^{3/4}} = \dfrac{1}{\left(\sqrt[4]{16}\right)^3} = \dfrac{1}{2^3} = \dfrac{1}{8}$.
> - $\left(\dfrac{1}{4}\right)^{-1/2} = 4^{1/2} = \sqrt{4} = 2$: the negative exponent turns the fraction upside down.

> [!TRAPPOLA] Mistakes with powers
> - A negative exponent turns the number upside down, it does not change the sign: $2^{-3} = \frac{1}{8}$, not $-8$.
> - $a^{m+n}$ is not $a^m + a^n$: $2^{1+2} = 8$, while $2^1 + 2^2 = 6$.
> - $-2^2 = -4$ (the minus stays outside the power), while $(-2)^2 = 4$.

> [!NOTA] Power or exponential?
> In $y = x^2$ the variable is in the base and the exponent is fixed: it is a **power function**. In $y = 2^x$ the base is fixed and the variable is in the exponent: it is an **exponential function**. They are very different functions. For example $3^2 = 9$ is bigger than $2^3 = 8$, but $10^2 = 100$ is much smaller than $2^{10} = 1024$: as you go further, the exponential overtakes any power.

### The exponential function

> [!DEF] Exponential function
> Given a number $a$ with $a > 0$ and $a \neq 1$, the **exponential function with base $a$** is the function $f(x) = a^x$, which assigns to every real number $x$ the number $a^x$.

> [!PROP] Features of $y = a^x$
> - **Domain**: all of $\R$, the set of real numbers: every $x$ is allowed.
> - **Sign**: $a^x > 0$ always; the range (image) is the interval $(0, +\infty)$, where the symbol $\infty$ reads “infinity”.
> - **Key points**: the graph always passes through $(0, 1)$, because $a^0 = 1$, and through $(1, a)$, because $a^1 = a$.
> - **Monotonicity**: if $a > 1$ the function is **increasing**, if $0 < a < 1$ it is **decreasing**. In both cases it is monotonic, so $a^u = a^v$ only when $u = v$.
> - **Asymptote**: the graph approaches the $x$-axis without ever touching it (the $x$-axis is a **horizontal asymptote**): towards the left if $a > 1$, towards the right if $0 < a < 1$.

```grafico
titolo: $y = 2^x$ (increasing) and $y = \left(\frac{1}{2}\right)^x$ (decreasing)
x: -4 4
y: -1 6
f: 2^x
f: (1/2)^x | rosso
punto: 0 1 | $(0, 1)$ | ne
punto: 1 2 | $(1, 2)$ | se
punto: -1 2 | rosso | $(-1, 2)$ | so
testo: 3.2 3.2 | $y = 2^x$ | bianco
testo: -3.2 3.2 | $y = \left(\frac{1}{2}\right)^x$ | bianco
```

The two graphs are symmetric with respect to the $y$-axis: indeed $\left(\frac{1}{2}\right)^x = 2^{-x}$, so the value of $\left(\frac12\right)^x$ at $x = 3$ is equal to the value of $2^x$ at $x = -3$.

> [!PROP] Comparing two powers with the same base
> - If $a > 1$: $a^u < a^v$ exactly when $u < v$ (the order of the exponents is preserved).
> - If $0 < a < 1$: $a^u < a^v$ exactly when $u > v$ (the order is reversed).
>
> In symbols, for $a > 1$ you write $a^u < a^v \iff u < v$, where $\iff$ reads “if and only if”.

> [!ESEMPIO] Comparisons without a calculator
> - $2^{0.3}$ and $2^{0.5}$: the base 2 is greater than 1 and $0.3 < 0.5$, so $2^{0.3} < 2^{0.5}$.
> - $\left(\frac{1}{3}\right)^{0.3}$ and $\left(\frac{1}{3}\right)^{0.5}$: the base is between 0 and 1, so the order is reversed: $\left(\frac13\right)^{0.3} > \left(\frac13\right)^{0.5}$.
> - $2^{30}$ and $3^{20}$: the bases are different, but the exponents have the common divisor 10. $2^{30} = (2^3)^{10} = 8^{10}$ and $3^{20} = (3^2)^{10} = 9^{10}$. With the same positive exponent the larger base wins: $8^{10} < 9^{10}$, so $2^{30} < 3^{20}$.

### The logarithm

The equation $2^x = 8$ can be solved by inspection: $x = 3$. But what about $2^x = 5$? The exponent you are looking for lies between 2 and 3, because $2^2 = 4 < 5 < 8 = 2^3$, and it is not a “simple” number. It is given a name: it is the logarithm of 5 to base 2, and it is written $\log_2 5$.

> [!DEF] Logarithm
> Let $a > 0$ with $a \neq 1$, and $b > 0$. The **logarithm of $b$ to base $a$**, written $\log_a b$, is the exponent to which you must raise $a$ to obtain $b$:
> $$
> \log_a b = y \iff a^y = b
> $$
> The number $a$ is the **base**, the number $b$ is the **argument** of the logarithm.

The conditions on the base are the same as for exponentials. The argument must be positive because $a^y$ is always positive: no exponent turns $a$ into zero or into a negative number.

> [!METODO] Computing a logarithm by hand
> 1. Write the base and the argument as powers of the same number: $a = c^m$ and $b = c^n$.
> 2. You are looking for $y$ with $a^y = b$, that is $c^{my} = c^n$: the exponents must be equal, $my = n$.
> 3. So $\log_a b = \dfrac{n}{m}$. Always check backwards: $a$ raised to the result must give $b$.

> [!ESEMPIO] Logarithms computed from the definition
> - $\log_3 81 = 4$, because $3^4 = 81$.
> - $\log_2 \frac{1}{8} = -3$, because $2^{-3} = \frac{1}{8}$.
> - $\log_{1/2} 8 = -3$, because $\left(\frac12\right)^{-3} = 2^3 = 8$.
> - $\log_9 3 = \frac{1}{2}$, because $9^{1/2} = \sqrt{9} = 3$.
> - $\log_4 8$: $4 = 2^2$ and $8 = 2^3$, so $\log_4 8 = \frac{3}{2}$. Check: $4^{3/2} = \left(\sqrt{4}\right)^3 = 8$.
> - $\log_{1/4} 32$: $\frac14 = 2^{-2}$ and $32 = 2^5$, so $\log_{1/4} 32 = \frac{5}{-2} = -\frac{5}{2}$.
> - $\log_{10} 0.01 = -2$, because $10^{-2} = \frac{1}{100} = 0.01$.
> - $\log_{\sqrt{3}} 9 = 4$, because $\left(\sqrt{3}\right)^4 = 3^2 = 9$.

> [!PROP] Four equalities to know by heart
> For every allowed base $a$:
> - $\log_a 1 = 0$, because $a^0 = 1$;
> - $\log_a a = 1$, because $a^1 = a$;
> - $\log_a a^x = x$ for every real $x$: the logarithm “undoes” the power;
> - $a^{\log_a x} = x$ for every $x > 0$: the power “undoes” the logarithm.

> [!ESEMPIO] Using the four equalities
> - $5^{\log_5 7} = 7$ and $\log_3 3^{-4} = -4$.
> - $2^{3 + \log_2 5} = 2^3 \cdot 2^{\log_2 5} = 8 \cdot 5 = 40$.
> - $10^{2\log_{10} 3} = \left(10^{\log_{10} 3}\right)^2 = 3^2 = 9$.

> [!TRAPPOLA] What does not exist
> - The logarithm of zero or of a negative number **does not exist**: $\log_2(-4)$ and $\log_3 0$ make no sense. The *result* of a logarithm, on the other hand, can be negative or zero: $\log_2 \frac12 = -1$, $\log_7 1 = 0$.
> - Base 1 is not allowed, and neither is a negative base.
> - $\log_a b$ and $\log_b a$ are in general different numbers, each the reciprocal of the other: $\log_2 8 = 3$, while $\log_8 2 = \frac13$.

### The properties of logarithms

The properties of logarithms are the properties of powers read from the point of view of the exponents. If $x = a^m$ and $y = a^n$, then $xy = a^{m+n}$: so $\log_a(xy) = m + n = \log_a x + \log_a y$. When you multiply two powers the exponents add up, and a logarithm is precisely an exponent.

> [!PROP] Properties of logarithms (with $a > 0$, $a \neq 1$, $x > 0$, $y > 0$)
> | Name | Formula | Example |
> |---|---|---|
> | product | $\log_a(xy) = \log_a x + \log_a y$ | $\log_6 4 + \log_6 9 = \log_6 36 = 2$ |
> | quotient | $\log_a \dfrac{x}{y} = \log_a x - \log_a y$ | $\log_2 40 - \log_2 5 = \log_2 8 = 3$ |
> | power | $\log_a x^n = n \log_a x$ | $\log_3 \sqrt{27} = \frac{1}{2}\log_3 27 = \frac{3}{2}$ |
> | reciprocal | $\log_a \dfrac{1}{x} = -\log_a x$ | $\log_5 \frac{1}{25} = -\log_5 25 = -2$ |
> | change of base | $\log_a b = \dfrac{\log_c b}{\log_c a}$ | $\log_4 32 = \dfrac{\log_2 32}{\log_2 4} = \dfrac{5}{2}$ |
>
> In the change of base the argument $b$ is positive and the new base $c$ is positive and different from 1. A useful consequence: $\log_a b = \dfrac{1}{\log_b a}$ (with $b \neq 1$). For example $\log_5 2 \cdot \log_2 25 = \dfrac{1}{\log_2 5} \cdot 2\log_2 5 = 2$.

> [!NOTA] Why the absolute value sometimes appears
> The formulas require positive arguments. If $x$ and $y$ are both negative, the product $xy$ is positive and $\log_a(xy)$ exists, while $\log_a x$ and $\log_a y$ do not. In general $\log_a(xy) = \log_a |x| + \log_a |y|$ (for $xy > 0$) and $\log_a x^2 = 2\log_a |x|$ (for $x \neq 0$) hold, where $|x|$ is the absolute value of $x$. In equations the difference matters: $\log_3 x^2$ exists for every $x \neq 0$, while $2\log_3 x$ exists only for $x > 0$.

> [!ESEMPIO] Expanding and combining
> **Expand** $\log_3 \dfrac{9x^2}{y}$, with $x > 0$ and $y > 0$: first the quotient, then the product, then the power.
> $$
> \log_3 \frac{9x^2}{y} = \log_3 9 + \log_3 x^2 - \log_3 y = 2 + 2\log_3 x - \log_3 y
> $$
> In the same way $\log_2 \dfrac{x^3\sqrt{y}}{4} = 3\log_2 x + \dfrac{1}{2}\log_2 y - 2$, because $\sqrt{y} = y^{1/2}$ and $\log_2 4 = 2$.
>
> **Combine** $2\log_2 x + \log_2 3 - \log_2 y$ into a single logarithm: first the coefficients become exponents, then sums become products and differences become quotients.
> $$
> 2\log_2 x + \log_2 3 - \log_2 y = \log_2 x^2 + \log_2 3 - \log_2 y = \log_2 \frac{3x^2}{y}
> $$

> [!TRAPPOLA] The most common mistakes
> | Wrong | Right | Counterexample |
> |---|---|---|
> | $\log_a(x + y) = \log_a x + \log_a y$ | there is no rule for the sum | $\log_2(4 + 4) = 3$, but $\log_2 4 + \log_2 4 = 4$ |
> | $\log_a(xy) = \log_a x \cdot \log_a y$ | $\log_a(xy) = \log_a x + \log_a y$ | $\log_2(4 \cdot 8) = 5$, but $2 \cdot 3 = 6$ |
> | $\dfrac{\log_a x}{\log_a y} = \log_a \dfrac{x}{y}$ | $\dfrac{\log_a x}{\log_a y} = \log_y x$ | $\dfrac{\log_2 8}{\log_2 4} = \dfrac{3}{2}$, but $\log_2 2 = 1$ |
> | $(\log_a x)^2 = \log_a x^2$ | $\log_a x^2 = 2\log_a x$ (with $x > 0$) | $(\log_2 8)^2 = 9$, but $\log_2 64 = 6$ |

### The bases $e$ and 10

Two bases are used more than all the others, and they are the ones you find on calculators.

**Euler's number** $e$ (Napier's constant) is an irrational number: $e \approx 2.71828$. The logarithm to base $e$ is called the **natural logarithm** (or Napierian logarithm) and is written $\ln x$, without indicating the base. So $\ln e = 1$, $\ln 1 = 0$, $\ln e^3 = 3$ and $e^{\ln 5} = 5$. The base $e$ has a handy property: when $y$ is close to zero,

$$
\ln(1 + y) \approx y
$$

For example $\ln 1.01 \approx 0.01$ (the true value is $0.00995\ldots$).

The logarithm to base 10 is called the **common logarithm** (or decimal logarithm). In many books and on calculators it is written just $\log$; here we always write the base, $\log_{10}$. On powers of 10 it is computed straight away: $\log_{10} 1000 = 3$ and $\log_{10} 0.001 = -3$.

> [!NOTA] Scientific notation: characteristic and mantissa
> Every positive number can be written in **scientific notation**, $x = m \cdot 10^k$ with $1 \leq m < 10$ and $k$ an integer. Then
> $$
> \log_{10} x = k + \log_{10} m, \qquad 0 \leq \log_{10} m < 1
> $$
> The integer part $k$ is called the **characteristic**, the fractional part $\log_{10} m$ is called the **mantissa**. Example: $4500 = 4.5 \cdot 10^3$, so $\log_{10} 4500 = 3 + \log_{10} 4.5 \approx 3 + 0.653 = 3.653$. And $45 = 4.5 \cdot 10^1$ gives $\log_{10} 45 \approx 1.653$: same digits, same mantissa, only the characteristic changes. This works only in base 10. Practical consequence: if a number greater than or equal to 1 has $n$ digits before the decimal point, its common logarithm is at least $n - 1$ and less than $n$.

Calculators usually have keys only for $\ln$ and for the base-10 logarithm: the other bases are obtained with the change of base, for example $\log_3 7 = \dfrac{\ln 7}{\ln 3}$. In the test there is no calculator, so a number like $\log_3 7$ stays written like that, or in the equivalent form $\dfrac{\ln 7}{\ln 3}$.

### The logarithmic function

> [!DEF] Logarithmic function
> Given $a > 0$ with $a \neq 1$, the **logarithmic function with base $a$** is the function $f(x) = \log_a x$, defined for $x > 0$.

> [!PROP] Features of $y = \log_a x$
> - **Domain**: $(0, +\infty)$: only positive arguments.
> - **Range**: all of $\R$.
> - **Key points**: the graph passes through $(1, 0)$, because $\log_a 1 = 0$, and through $(a, 1)$.
> - **Monotonicity**: increasing if $a > 1$, decreasing if $0 < a < 1$.
> - **Asymptote**: the $y$-axis is a **vertical asymptote**: near $x = 0$ the graph goes down towards $-\infty$ if $a > 1$ and up towards $+\infty$ if $0 < a < 1$.
> - **Sign**: if $a > 1$, $\log_a x$ is negative for $0 < x < 1$ and positive for $x > 1$; if $0 < a < 1$ the opposite happens.

```grafico
titolo: $y = \log_2 x$ (increasing) and $y = \log_{1/2} x$ (decreasing)
x: -1 8
y: -4 4
f: log(2, x) | $y = \log_2 x$ | n
f: log(1/2, x) | rosso | $y = \log_{1/2} x$ | s
punto: 1 0 | $(1, 0)$ | se
punto: 2 1 | $(2, 1)$ | se
punto: 0.5 1 | rosso | $\left(\frac{1}{2}, 1\right)$ | ne
```

Here too the two graphs are symmetric, this time with respect to the $x$-axis: with the change of base, $\log_{1/2} x = \dfrac{\log_2 x}{\log_2 \frac12} = -\log_2 x$.

> [!METODO] Domain of a function with logarithms
> 1. Write the condition “argument $> 0$” for each logarithm, with a strict “greater than”.
> 2. Add the other conditions: denominators different from zero, radicands of even-index roots greater than or equal to zero.
> 3. Solve the system: the domain is the set of values that satisfy all the conditions at the same time.

> [!ESEMPIO] Domains
> - $f(x) = \log_2(x - 3)$: you need $x - 3 > 0$, domain $(3, +\infty)$.
> - $f(x) = \ln(4 - x^2)$: you need $4 - x^2 > 0$, that is $x^2 < 4$, domain $(-2, 2)$.
> - $f(x) = \ln(x^2 + 1)$: $x^2 + 1$ is always positive, domain $\R$.
> - $f(x) = \log_3 \dfrac{x + 1}{x - 2}$: you need $\dfrac{x + 1}{x - 2} > 0$. The numerator is positive for $x > -1$, the denominator for $x > 2$; the fraction is positive when they have the same sign, that is for $x < -1$ or $x > 2$. Domain $(-\infty, -1) \cup (2, +\infty)$, where $\cup$ denotes the union.
>
> ```retta
> titolo: Domain of $\log_3 \frac{x+1}{x-2}$
> da: -4 5
> int: (-inf, -1)
> int: (2, +inf)
> ```

### Exponential and logarithm are inverse functions

> [!PROP] Inverse functions
> With the same base $a$:
> $$
> \log_a\left(a^x\right) = x \ \text{ for every } x \in \R, \qquad a^{\log_a x} = x \ \text{ for every } x > 0
> $$
> ($\in$ reads “belongs to”). Each function undoes the other: $y = a^x$ and $y = \log_a x$ are **inverse functions**. Their graphs are symmetric with respect to the line $y = x$, the bisector of the first and third quadrants: if the point $(p, q)$ lies on the graph of the exponential, the point $(q, p)$ lies on the graph of the logarithm.

```grafico
titolo: $y = 2^x$ and $y = \log_2 x$ are symmetric with respect to the line $y = x$
x: -4 6
y: -4 6
f: x | grigio | tratteggio | $y = x$ | no
f: 2^x | a=2.58 | $y = 2^x$ | no
f: log(2, x) | rosso
punto: 0 1
punto: 1 0 | rosso
punto: 2 4
punto: 4 2 | rosso
segmento: 2 4 4 2 | grigio | tratteggio
testo: 5 1.5 | $y = \log_2 x$ | bianco
```

| | $y = a^x$ | $y = \log_a x$ |
|---|---|---|
| domain | $\R$ | $(0, +\infty)$ |
| range | $(0, +\infty)$ | $\R$ |
| passes through | $(0, 1)$ and $(1, a)$ | $(1, 0)$ and $(a, 1)$ |
| asymptote | $x$-axis (horizontal) | $y$-axis (vertical) |
| monotonicity | increasing if $a > 1$, decreasing if $0 < a < 1$ | the same as the exponential |

Domain and range swap, as always happens between a function and its inverse.

### Exponential models

Many phenomena grow or shrink by the same percentage at regular time intervals: a population of bacteria, invested capital, a radioactive substance that decays. At each interval the quantity is multiplied by the same factor $q$, so after $t$ intervals

$$
N(t) = N_0 \cdot q^t
$$

where $N_0$ is the initial quantity. If $q > 1$ the quantity grows, if $0 < q < 1$ it decreases.

- An increase of $p\%$ at each step: $q = 1 + \frac{p}{100}$. For example an increase of $10\%$ per year gives $q = 1.1$.
- A decrease of $p\%$ at each step: $q = 1 - \frac{p}{100}$.
- Doubling at each step: $q = 2$; halving: $q = \frac12$.

> [!ESEMPIO] Bacteria that double
> A bacterium splits in two every hour. Starting from a single bacterium you have $1, 2, 4, 8, \ldots$ bacteria: after $t$ hours there are $N(t) = 2^t$, and after 10 hours there are $2^{10} = 1024$.
>
> If there are 3 bacteria at the start, the model is $N(t) = 3 \cdot 2^t$. When does the number go above 1000 bacteria? You need $3 \cdot 2^t > 1000$, that is $2^t > \frac{1000}{3} \approx 333$. Since $2^8 = 256$ and $2^9 = 512$, counting whole hours the 1000 mark is passed after 9 hours: $3 \cdot 2^8 = 768$, while $3 \cdot 2^9 = 1536$.

> [!ESEMPIO] Radioactive decay
> A radioactive substance halves every 5 years. After $t$ years, $M(t) = M_0 \left(\frac{1}{2}\right)^{t/5}$ of it remains, where $M_0$ is the initial quantity. After 15 years the exponent is $\frac{15}{5} = 3$: $\left(\frac12\right)^3 = \frac18$ of the initial quantity remains.

> [!NOTA] The limits of the model
> In reality no population grows exponentially forever: food, space and other resources are limited. These **limiting factors** slow growth down until it levels off or stops. The exponential model describes a phenomenon well only for a limited period.

> [!TEST] Exponentials and logarithms in the test questions
> - **Computing logarithms** (numeric answer or one option out of four): write base and argument as powers of the same number and check backwards, raising the base to the result.
> - **True or false on the properties**: if you do not remember a formula, test it with simple numbers (base 2, arguments 4 and 8). A single counterexample is enough to answer “false”.
> - **Estimates without a calculator**: $\log_2 10$ is between 3 and 4, because $2^3 = 8 < 10 < 16 = 2^4$. An estimate like this is often enough to discard the wrong options.
> - **Recognising graphs**: the graph of $y = a^x$ passes through $(0, 1)$ and lies entirely above the $x$-axis; that of $y = \log_a x$ passes through $(1, 0)$ and lies entirely to the right of the $y$-axis. If the graph goes down, the base is between 0 and 1.
> - **Domain**: the argument of every logarithm must be strictly positive; then take the values that satisfy all the conditions.

## 7.2 Exponential and logarithmic equations and inequalities

Equations and inequalities in which the unknown is in the exponent or in the argument of a logarithm are called **transcendental**: they are not algebraic like those of modules 3 and 4. All the methods rely on two facts seen above: exponentials and logarithms are monotonic functions (so they give the same value only with the same exponent or the same argument), and each is the inverse of the other.

### Exponential equations

In an **exponential equation** the unknown appears in the exponent. The conditions on the bases ($a > 0$, $a \neq 1$) are taken for granted. Below, $f(x)$ and $g(x)$ denote expressions that contain $x$.

> [!METODO] The four typical cases
> 1. **Same base**: $a^{f(x)} = a^{g(x)} \iff f(x) = g(x)$. Often you first need to write everything as a power of the same base ($4 = 2^2$, $\frac19 = 3^{-2}$, $\sqrt{5} = 5^{1/2}$).
> 2. **Exponential equal to a number**: $a^{f(x)} = c$. If $c \leq 0$ the equation is impossible. If $c > 0$, apply $\log_a$ to both sides: $f(x) = \log_a c$.
> 3. **Different bases**: $a^{f(x)} = b^{g(x)}$. Apply the same logarithm to both sides (for example $\ln$): $f(x)\ln a = g(x)\ln b$, and solve.
> 4. **Equations that can be reduced**: take out a common power, or set $t = a^x$ (with $t > 0$) and solve an algebraic equation in $t$.

> [!ESEMPIO] Same base
> - $4^{x+1} = 8^x$. Everything in base 2: $4^{x+1} = \left(2^2\right)^{x+1} = 2^{2x+2}$ and $8^x = 2^{3x}$. So $2x + 2 = 3x$, that is $x = 2$. Check: $4^3 = 64$ and $8^2 = 64$.
> - $\left(\frac{1}{3}\right)^x = 9^{x-3}$. Everything in base 3: $3^{-x} = 3^{2x-6}$, so $-x = 2x - 6$ and $x = 2$.
> - $2^{x^2 - 3x} = \frac{1}{4}$. Since $\frac14 = 2^{-2}$: $x^2 - 3x = -2$, that is $x^2 - 3x + 2 = 0$, with solutions $x = 1$ and $x = 2$.

> [!ESEMPIO] Exponential equal to a number
> - $5^{x+1} = 7$: $x + 1 = \log_5 7$, so $x = \log_5 7 - 1$.
> - $e^{2x-1} = 3$: $2x - 1 = \ln 3$, so $x = \dfrac{1 + \ln 3}{2}$.
> - $6^{x+3} = 1$: $1 = 6^0$, so $x + 3 = 0$ and $x = -3$. Equal to 1 does not mean impossible.
> - $3^{2x} = -9$: impossible, because an exponential is never negative.

> [!ESEMPIO] Different bases
> $3^x = 2^{x+1}$. Apply $\ln$ to both sides and use the power property:
> $$
> x\ln 3 = (x + 1)\ln 2 \;\Rightarrow\; x\ln 3 - x\ln 2 = \ln 2 \;\Rightarrow\; x = \frac{\ln 2}{\ln 3 - \ln 2} = \frac{\ln 2}{\ln \frac{3}{2}}
> $$
> The symbol $\Rightarrow$ reads “therefore”. You could also divide by $2^x$: $\left(\frac32\right)^x = 2$, that is $x = \log_{3/2} 2$. It is the same number written in another form: among the options of a question the solution can appear in any of these forms.

> [!ESEMPIO] Taking out a common factor and substitution
> - $2^{x+2} - 2^x = 24$. Since $2^{x+2} = 4 \cdot 2^x$, take out $2^x$: $2^x(4 - 1) = 24$, so $2^x = 8$ and $x = 3$.
> - $4^x - 6 \cdot 2^x + 8 = 0$. Since $4^x = \left(2^x\right)^2$, set $t = 2^x$: $t^2 - 6t + 8 = 0$, with solutions $t = 2$ and $t = 4$. Back to $x$: $2^x = 2$ gives $x = 1$, $2^x = 4$ gives $x = 2$.
> - $9^x + 3^x - 12 = 0$. With $t = 3^x$: $t^2 + t - 12 = 0$, with solutions $t = 3$ and $t = -4$. The value $t = -4$ is discarded ($3^x$ is always positive), so what remains is $3^x = 3$, that is $x = 1$.

> [!TRAPPOLA] Mistakes in exponential equations
> - $2^x + 2^x = 2 \cdot 2^x = 2^{x+1}$: it is not $2^{2x}$.
> - You can set the exponents equal only when each side is a **single** power of the same base. In $2^x + 2 = 8$ you cannot “drop the base”: first isolate the power, $2^x = 6$, and then $x = \log_2 6$.
> - After the substitution $t = a^x$ you must go back to $x$: the values of $t$ are not the solutions.

### Logarithmic equations

In a **logarithmic equation** the unknown appears in the argument of one or more logarithms.

> [!METODO] Solving a logarithmic equation
> 1. **Domain conditions** (C.E. for short, from the Italian *condizioni di esistenza*): every argument must be greater than zero. Write them for the original equation, before any transformation.
> 2. Using the properties, you reach one of these two forms:
>    - $\log_a f(x) = c$: by the definition of logarithm, $f(x) = a^c$;
>    - $\log_a f(x) = \log_a g(x)$: the arguments must be equal, $f(x) = g(x)$.
> 3. Solve the resulting algebraic equation.
> 4. Keep only the solutions that satisfy the C.E.

> [!ESEMPIO] The two basic forms
> - $\log_3(2x + 1) = 2$. C.E.: $2x + 1 > 0$, that is $x > -\frac12$. By the definition $2x + 1 = 3^2 = 9$, so $x = 4$: it satisfies the C.E., so it is acceptable.
> - $\ln(x - 1) = 2$. C.E.: $x > 1$. By the definition $x - 1 = e^2$, so $x = 1 + e^2$ (about $8.39$): acceptable.
> - $\log_2(x + 3) = \log_2(2x - 1)$. C.E.: $x + 3 > 0$ and $2x - 1 > 0$, that is $x > \frac12$. Equal arguments: $x + 3 = 2x - 1$, so $x = 4$: acceptable.

> [!ESEMPIO] With the properties: solutions to discard
> $\log_2 x + \log_2(x - 2) = 3$.
>
> C.E.: $x > 0$ and $x - 2 > 0$, so $x > 2$.
>
> With the product property: $\log_2[x(x - 2)] = 3$, that is $x(x - 2) = 2^3 = 8$, so $x^2 - 2x - 8 = 0$, with solutions $x = 4$ and $x = -2$. Only $x = 4$ satisfies the C.E. Check: $\log_2 4 + \log_2 2 = 2 + 1 = 3$.
>
> Where does $x = -2$ come from? The expression $\log_2[x(x-2)]$ also exists for $x < 0$, the original one does not: the transformation enlarged the domain. That is why the C.E. are always written for the initial equation.

> [!ESEMPIO] With the quotient property
> $\log_2(x + 6) - \log_2 x = 2$. C.E.: $x + 6 > 0$ and $x > 0$, so $x > 0$.
>
> With the quotient property: $\log_2 \dfrac{x + 6}{x} = 2$, that is $\dfrac{x + 6}{x} = 2^2 = 4$. Multiply by $x$, which is positive: $x + 6 = 4x$, so $x = 2$, acceptable. Check: $\log_2 8 - \log_2 2 = 3 - 1 = 2$.

> [!ESEMPIO] The C.E. discard the most “natural” solution
> $\log_{10}(x^2 - 9) = \log_{10}(3 - x)$.
>
> C.E.: $x^2 - 9 > 0$ gives $x < -3$ or $x > 3$; $3 - x > 0$ gives $x < 3$. Together: $x < -3$.
>
> Equal arguments: $x^2 - 9 = 3 - x$, that is $x^2 + x - 12 = 0$, with solutions $x = 3$ and $x = -4$. Only $x = -4$ satisfies the C.E.: it is the only solution.

> [!ESEMPIO] Substitution
> $(\log_2 x)^2 - \log_2 x - 2 = 0$. C.E.: $x > 0$. With $t = \log_2 x$: $t^2 - t - 2 = 0$, with solutions $t = 2$ and $t = -1$. So $x = 2^2 = 4$ or $x = 2^{-1} = \frac12$: both acceptable.

> [!TRAPPOLA] The logarithm of a square
> $\log_3 x^2 = 2$. C.E.: $x^2 > 0$, that is $x \neq 0$. By the definition $x^2 = 9$, so $x = 3$ or $x = -3$: **two** solutions. If you immediately write $2\log_3 x = 2$ you find only $x = 3$ and lose $x = -3$, because $\log_3 x^2 = 2\log_3|x|$, not $2\log_3 x$.

### Exponential inequalities

> [!PROP] The direction depends on the base
> - If $a > 1$: $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$ (the direction stays the same).
> - If $0 < a < 1$: $a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$ (the direction is reversed).
>
> The same holds with $<$, $\geq$, $\leq$. The reason is monotonicity: with a base greater than 1 the exponential increases, with a base between 0 and 1 it decreases.

> [!METODO] Solving an exponential inequality
> 1. Bring both sides to the same base and compare the exponents, reversing the direction if the base is between 0 and 1.
> 2. If one side is a number $c \leq 0$: $a^{f(x)} > c$ is always true (where $f$ is defined), $a^{f(x)} < c$ is never true. If $c > 0$, write $c = a^{\log_a c}$ and go back to step 1.
> 3. With different bases apply a logarithm with base greater than 1 (for example $\ln$), which does not change the direction; then, when you divide by the coefficient of $x$, check its sign.
> 4. With the substitution $t = a^x$ solve the inequality in $t$ and then go back to $x$.

> [!ESEMPIO] Same base
> - $3^{2x-1} > 3^{x+2}$: base $3 > 1$, the direction stays the same. $2x - 1 > x + 2$, so $x > 3$.
> - $\left(\frac12\right)^{x-1} \geq \frac18$: $\frac18 = \left(\frac12\right)^3$ and the base is between 0 and 1, so the direction is reversed: $x - 1 \leq 3$, hence $x \leq 4$.
> - $\left(\frac13\right)^x < 9$: $9 = \left(\frac13\right)^{-2}$, the direction is reversed: $x > -2$. You reach the same result in base 3: $3^{-x} < 3^2$, so $-x < 2$, that is $x > -2$.
> - $2^{x^2} < 2^{x+2}$: base 2, the direction stays the same: $x^2 < x + 2$, that is $x^2 - x - 2 < 0$. The roots are $-1$ and $2$ and the parabola is negative between the roots: $-1 < x < 2$.
>
> ```retta
> titolo: Solutions of $2^{x^2} < 2^{x+2}$
> da: -3 4
> int: (-1, 2)
> ```

> [!ESEMPIO] A number on the right-hand side
> - $5^x > -1$: always true, because $5^x$ is positive. Solutions: all of $\R$.
> - $e^x < 0$: never true, no solutions.
> - $3^x \leq 1$: $1 = 3^0$, so $x \leq 0$.
> - $\left(\frac12\right)^x > 3$: apply $\log_{1/2}$, which reverses the direction: $x < \log_{1/2} 3 = -\log_2 3$.

> [!ESEMPIO] Different bases: watch the sign of the coefficient
> $2^x > 3^{x-1}$. Apply $\ln$ (base $e > 1$, the direction stays the same):
> $$
> x\ln 2 > (x - 1)\ln 3 \;\Rightarrow\; x\ln 2 - x\ln 3 > -\ln 3 \;\Rightarrow\; x(\ln 2 - \ln 3) > -\ln 3
> $$
> The coefficient $\ln 2 - \ln 3$ is **negative** (because $2 < 3$): dividing by it reverses the direction.
> $$
> x < \frac{-\ln 3}{\ln 2 - \ln 3} = \frac{\ln 3}{\ln 3 - \ln 2} \approx 2.71
> $$
>
> ```grafico
> titolo: $y = 2^x$ lies above $y = 3^{x-1}$ for $x < 2.71$ approximately
> x: -2 4
> y: -1 10
> proporzioni: libere
> area: 2^x | 3^(x-1) | -2 ln(3)/(ln(3)-ln(2)) | rosso
> f: 2^x | a=3.33 | $y = 2^x$ | no
> f: 3^(x-1) | rosso | a=3.1 | $y = 3^{x-1}$ | se
> punto: ln(3)/(ln(3)-ln(2)) 2^(ln(3)/(ln(3)-ln(2)))
> ```

> [!ESEMPIO] Substitution
> $4^x - 5 \cdot 2^x + 4 < 0$. With $t = 2^x$: $t^2 - 5t + 4 < 0$, with roots $1$ and $4$, so $1 < t < 4$. Back to $x$: $1 < 2^x < 4$, that is $2^0 < 2^x < 2^2$, so $0 < x < 2$.

> [!TRAPPOLA] Mistakes in exponential inequalities
> - With a base between 0 and 1 the direction is reversed: this is the most frequent mistake.
> - Dividing by a negative number, such as $\ln 2 - \ln 3$, reverses the direction.
> - $2^x > 3^x$ is not “never true”: dividing by $3^x > 0$ you get $\left(\frac23\right)^x > 1 = \left(\frac23\right)^0$ and, with a base between 0 and 1, $x < 0$. Indeed for $x = -1$: $2^{-1} = 0.5 > 3^{-1} \approx 0.33$.

### Logarithmic inequalities

> [!PROP] Comparing logarithms with the same base
> With $f(x) > 0$ and $g(x) > 0$:
> - if $a > 1$: $\log_a f(x) > \log_a g(x) \iff f(x) > g(x)$ (the direction stays the same);
> - if $0 < a < 1$: $\log_a f(x) > \log_a g(x) \iff f(x) < g(x)$ (the direction is reversed).

> [!METODO] Solving a logarithmic inequality
> 1. C.E.: every argument greater than zero.
> 2. Write the numbers as logarithms in the same base: $c = \log_a a^c$ (for example $3 = \log_2 8$ and $-1 = \log_{1/2} 2$).
> 3. Compare the arguments, reversing the direction if the base is between 0 and 1.
> 4. **Put the result in a system** with the C.E.: they must hold together, so keep only the values they have in common.

> [!ESEMPIO] Base greater than 1
> $\log_3(x - 1) < \log_3(5 - x)$.
>
> C.E.: $x - 1 > 0$ and $5 - x > 0$, that is $1 < x < 5$.
>
> Base $3 > 1$, the direction stays the same: $x - 1 < 5 - x$, so $x < 3$.
>
> System with the C.E.: $1 < x < 3$.
>
> ```retta
> titolo: Solutions of $\log_3(x-1) < \log_3(5-x)$
> da: 0 6
> int: (1, 3)
> ```

> [!ESEMPIO] A number on the right-hand side
> - $\log_2(x + 1) \leq 3$. C.E.: $x > -1$. Since $3 = \log_2 8$: $x + 1 \leq 8$, that is $x \leq 7$. Solutions: $-1 < x \leq 7$, that is the interval $(-1, 7]$.
> - $\log_{1/2}(x - 2) \geq -1$. C.E.: $x > 2$. Since $-1 = \log_{1/2} 2$ and the base is between 0 and 1, the direction is reversed: $x - 2 \leq 2$, that is $x \leq 4$. Solutions: $2 < x \leq 4$.
> - $\ln(2x - 1) < 0$. C.E.: $x > \frac12$. Since $0 = \ln 1$: $2x - 1 < 1$, that is $x < 1$. Solutions: $\frac12 < x < 1$.
>
> ```retta
> titolo: Solutions of $\log_2(x+1) \leq 3$: the endpoint $-1$ is excluded, 7 is included
> da: -2 8
> int: (-1, 7]
> ```

> [!ESEMPIO] Solution in two intervals
> $\log_{10}(x^2 - 3x) < 1$.
>
> C.E.: $x^2 - 3x > 0$, that is $x(x - 3) > 0$: $x < 0$ or $x > 3$.
>
> Since $1 = \log_{10} 10$: $x^2 - 3x < 10$, that is $x^2 - 3x - 10 < 0$. The roots are $-2$ and $5$, so $-2 < x < 5$.
>
> System: the C.E. and $-2 < x < 5$ must hold together. You get $-2 < x < 0$ or $3 < x < 5$.
>
> ```retta
> titolo: Solutions of $\log_{10}(x^2 - 3x) < 1$
> da: -3 6
> int: (-2, 0)
> int: (3, 5)
> ```

> [!TRAPPOLA] Mistakes in logarithmic inequalities
> - Without the C.E. you almost always go wrong: the solutions of $\log_2 x < 3$ are not $x < 8$, but $0 < x < 8$.
> - Here too, with a base between 0 and 1, the direction is reversed.
> - Watch out for “and” and “or”: the C.E. and the inequality must hold **together**; the final solution can be made of several pieces, joined by “or”.

### An application: pH

In chemistry the acidity of a solution is measured by its **pH**:

$$
\mathrm{pH} = -\log_{10}[\mathrm{H}^+]
$$

where $[\mathrm{H}^+]$ is the concentration of hydrogen ions. If $\mathrm{pH} < 7$ the solution is **acidic**, if $\mathrm{pH} > 7$ it is **basic**.

- $[\mathrm{H}^+] = 10^{-3}$ gives $\mathrm{pH} = -\log_{10} 10^{-3} = 3$: acidic solution.
- If $\mathrm{pH} = 9$, then $\log_{10}[\mathrm{H}^+] = -9$ and $[\mathrm{H}^+] = 10^{-9}$: basic solution.
- One pH unit less means a concentration 10 times larger; two units less, 100 times larger.

> [!ESEMPIO] From pH to concentration
> A solution has $\mathrm{pH} = 4.5$. Call $x$ the concentration: $-\log_{10} x = 4.5$, that is $\log_{10} x = -4.5$. By the definition of logarithm:
> $$
> x = 10^{-4.5} = 10^{0.5} \cdot 10^{-5} = \sqrt{10} \cdot 10^{-5} \approx 3.16 \cdot 10^{-5}
> $$
> And when is a solution acidic? $\mathrm{pH} < 7$ means $-\log_{10} x < 7$, that is $\log_{10} x > -7$ (multiplying by $-1$ reverses the direction), so $x > 10^{-7}$.

> [!TEST] Equations and inequalities in the test questions
> - **Equations**: it is often faster to substitute the options into the equation than to solve it. First of all, discard the options that do not satisfy the domain conditions.
> - **Inequalities**: try a convenient value (such as $x = 0$ or $x = 1$) in the original inequality and eliminate the options that treat it the wrong way. Then look at the endpoints: they are excluded if the C.E. or the strict sign require it.
> - **Mistakes to avoid**: the direction not reversed with a base between 0 and 1, forgotten C.E., values of $t$ mistaken for solutions. Also remember that the same solution can be written in different forms: $\log_{3/2} 2$ and $\frac{\ln 2}{\ln 3 - \ln 2}$ are the same number.
> - **Numeric answer**: without a calculator a number like $\log_3 7$ cannot be turned into a decimal. If a question that asks for a number leads you there, recheck your steps.

## Exercises

::: esercizio base Computing logarithms
Compute without a calculator:

- $\log_2 32$
- $\log_3 \frac{1}{27}$
- $\log_{1/2} 16$
- $\log_{25} 5$
- $\log_{10} 0.001$
- $\log_8 4$
::: soluzione
For each one, look for the exponent you must give the base to obtain the argument.

- $32 = 2^5$, so $\log_2 32 = 5$.
- $\frac{1}{27} = 3^{-3}$, so $\log_3 \frac{1}{27} = -3$.
- $16 = 2^4 = \left(\frac12\right)^{-4}$, so $\log_{1/2} 16 = -4$.
- $5 = \sqrt{25} = 25^{1/2}$, so $\log_{25} 5 = \frac12$.
- $0.001 = \frac{1}{1000} = 10^{-3}$, so $\log_{10} 0.001 = -3$.
- $8 = 2^3$ and $4 = 2^2$, so $\log_8 4 = \frac{2}{3}$. Check: $8^{2/3} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$.
:::

::: esercizio base Powers with fractional and negative exponents
Compute: $16^{3/4}$, $\;27^{-2/3}$, $\;\left(\frac{4}{9}\right)^{-1/2}$, $\;2^3 \cdot 4^{-1} \cdot 8^{1/3}$.
::: soluzione
- $16^{3/4} = \left(\sqrt[4]{16}\right)^3 = 2^3 = 8$.
- $27^{-2/3} = \dfrac{1}{\left(\sqrt[3]{27}\right)^2} = \dfrac{1}{3^2} = \dfrac{1}{9}$.
- $\left(\frac{4}{9}\right)^{-1/2} = \left(\frac{9}{4}\right)^{1/2} = \sqrt{\frac94} = \frac{3}{2}$.
- Everything in base 2: $4^{-1} = 2^{-2}$ and $8^{1/3} = \sqrt[3]{8} = 2$. So $2^3 \cdot 2^{-2} \cdot 2^1 = 2^{3 - 2 + 1} = 2^2 = 4$.
:::

::: esercizio base Ordering without a calculator
Put in order from smallest to largest: $2^{-1}$, $\;2^{0.5}$, $\;\left(\frac12\right)^{-2}$, $\;4^0$.
::: soluzione
Write everything as a power of 2: $\left(\frac12\right)^{-2} = 2^2$ and $4^0 = 1 = 2^0$. Now you have $2^{-1}$, $2^{0.5}$, $2^2$, $2^0$.

The base 2 is greater than 1: the power with the larger exponent is the larger one. The exponents in order are $-1 < 0 < 0.5 < 2$, so

$$
2^{-1} < 4^0 < 2^{0.5} < \left(\frac12\right)^{-2}
$$

that is $0.5 < 1 < \sqrt{2} < 4$ (with $\sqrt2 \approx 1.41$).
:::

::: esercizio base Elementary exponential equations
Solve: $3^{x+1} = 27$, $\;5^{2x} = \frac{1}{5}$, $\;2^x = -8$, $\;7^{x-2} = 1$.
::: soluzione
- $27 = 3^3$, so $x + 1 = 3$ and $x = 2$.
- $\frac15 = 5^{-1}$, so $2x = -1$ and $x = -\frac12$.
- $2^x$ is always positive and cannot equal $-8$: the equation is impossible.
- $1 = 7^0$, so $x - 2 = 0$ and $x = 2$.
:::

::: esercizio base Elementary logarithmic equations
Solve: $\log_2(3x - 1) = 3$ and $\log_5(x + 4) = \log_5(2x + 1)$.
::: soluzione
**First equation.** C.E.: $3x - 1 > 0$, that is $x > \frac13$. By the definition of logarithm $3x - 1 = 2^3 = 8$, so $3x = 9$ and $x = 3$. Since $3 > \frac13$, the solution is acceptable.

**Second equation.** C.E.: $x + 4 > 0$ and $2x + 1 > 0$, that is $x > -4$ and $x > -\frac12$: together, $x > -\frac12$. Equal arguments: $x + 4 = 2x + 1$, so $x = 3$, acceptable. Check: $\log_5 7 = \log_5 7$.
:::

::: esercizio medio Expanding and combining
Expand $\log_2 \dfrac{8a^3}{\sqrt{b}}$ (with $a > 0$ and $b > 0$). Then write $2\ln x - \ln(x + 1) + \ln 3$ (with $x > 0$) as a single logarithm.
::: soluzione
**Expanding.** Quotient, then product, then powers ($\sqrt{b} = b^{1/2}$):

$$
\log_2 \frac{8a^3}{\sqrt{b}} = \log_2 8 + \log_2 a^3 - \log_2 b^{1/2} = 3 + 3\log_2 a - \frac{1}{2}\log_2 b
$$

**Combining.** The coefficient 2 becomes an exponent, then sums and differences become products and quotients:

$$
2\ln x - \ln(x + 1) + \ln 3 = \ln x^2 + \ln 3 - \ln(x + 1) = \ln \frac{3x^2}{x + 1}
$$
:::

::: esercizio medio Computing with the properties
Compute: $\log_6 12 + \log_6 3$, $\;\log_3 54 - \log_3 2$, $\;\log_9 27$, $\;\log_2 3 \cdot \log_3 16$.
::: soluzione
- Product: $\log_6 12 + \log_6 3 = \log_6 36 = 2$.
- Quotient: $\log_3 54 - \log_3 2 = \log_3 27 = 3$.
- Change of base, to base 3: $\log_9 27 = \dfrac{\log_3 27}{\log_3 9} = \dfrac{3}{2}$.
- Change of base, to base $e$: $\log_2 3 \cdot \log_3 16 = \dfrac{\ln 3}{\ln 2} \cdot \dfrac{\ln 16}{\ln 3} = \dfrac{\ln 16}{\ln 2} = \log_2 16 = 4$.
:::

::: esercizio medio Taking out a common power
Solve $3^{x+1} + 3^{x-1} = 30$.
::: soluzione
Write the two powers as multiples of $3^x$: $3^{x+1} = 3 \cdot 3^x$ and $3^{x-1} = \frac13 \cdot 3^x$. Take out the common factor:

$$
3^x\left(3 + \frac{1}{3}\right) = 30 \;\Rightarrow\; 3^x \cdot \frac{10}{3} = 30 \;\Rightarrow\; 3^x = 9 \;\Rightarrow\; x = 2
$$

Check: $3^3 + 3^1 = 27 + 3 = 30$.
:::

::: esercizio medio Logarithmic equation with the product
Solve $\log_3 x + \log_3(x + 6) = 3$.
::: soluzione
C.E.: $x > 0$ and $x + 6 > 0$; together, $x > 0$.

With the product property: $\log_3[x(x + 6)] = 3$, so $x(x + 6) = 3^3 = 27$, that is $x^2 + 6x - 27 = 0$. It factorises: $(x + 9)(x - 3) = 0$, so $x = -9$ or $x = 3$.

$x = -9$ does not satisfy the C.E. and is discarded. The only solution is $x = 3$. Check: $\log_3 3 + \log_3 9 = 1 + 2 = 3$.
:::

::: esercizio medio One exponential, one logarithmic
Solve: $\left(\frac{1}{2}\right)^{2x - 3} > \frac{1}{8}$ and $\log_2(x - 3) \leq 2$.
::: soluzione
**First.** $\frac18 = \left(\frac12\right)^3$, so $\left(\frac12\right)^{2x-3} > \left(\frac12\right)^3$. The base is between 0 and 1: the direction is reversed, $2x - 3 < 3$, that is $x < 3$.

**Second.** C.E.: $x > 3$. Since $2 = \log_2 4$ and the base is greater than 1: $x - 3 \leq 4$, that is $x \leq 7$. System with the C.E.: $3 < x \leq 7$, that is the interval $(3, 7]$.
:::

::: esercizio medio Base between 0 and 1
Solve $\log_{1/3}(2x - 1) > -2$.
::: soluzione
C.E.: $2x - 1 > 0$, that is $x > \frac12$.

Write $-2$ as a logarithm to base $\frac13$: $-2 = \log_{1/3}\left(\frac13\right)^{-2} = \log_{1/3} 9$. The inequality becomes $\log_{1/3}(2x - 1) > \log_{1/3} 9$. The base is between 0 and 1, so the direction is reversed:

$$
2x - 1 < 9 \;\Rightarrow\; x < 5
$$

System with the C.E.: $\frac12 < x < 5$.
:::

::: esercizio test Substitution
The equation $9^x - 4 \cdot 3^x + 3 = 0$: how many solutions does it have and what is their sum?
::: soluzione
Since $9^x = \left(3^x\right)^2$, set $t = 3^x$ (with $t > 0$): $t^2 - 4t + 3 = 0$, with solutions $t = 1$ and $t = 3$, both positive.

Back to $x$: $3^x = 1$ gives $x = 0$; $3^x = 3$ gives $x = 1$. There are two solutions and their sum is $0 + 1 = 1$.

Careful: 4 is the sum of the values of $t$, not of the solutions in $x$.
:::

::: esercizio test An inequality in two pieces
Solve $\log_2(x^2 - 4x) < 5$.
::: soluzione
C.E.: $x^2 - 4x > 0$, that is $x(x - 4) > 0$: $x < 0$ or $x > 4$.

Since $5 = \log_2 32$ and the base is greater than 1: $x^2 - 4x < 32$, that is $x^2 - 4x - 32 < 0$. It factorises: $(x - 8)(x + 4) < 0$, true between the roots: $-4 < x < 8$.

System with the C.E.: $-4 < x < 0$ or $4 < x < 8$.

```retta
titolo: Solutions of $\log_2(x^2 - 4x) < 5$
da: -6 10
int: (-4, 0)
int: (4, 8)
```
:::

::: esercizio test Different bases and an estimate
Solve $2^{x+1} = 5^x$ and determine between which two consecutive integers the solution lies.
::: soluzione
Apply $\ln$ to both sides: $(x + 1)\ln 2 = x\ln 5$, so $\ln 2 = x(\ln 5 - \ln 2)$ and

$$
x = \frac{\ln 2}{\ln 5 - \ln 2} = \frac{\ln 2}{\ln \frac{5}{2}}
$$

Alternatively: divide both sides by $2^x$ and you get $2 = \left(\frac52\right)^x$, that is $x = \log_{5/2} 2$.

Estimate: $\left(\frac52\right)^0 = 1 < 2 < \frac52 = \left(\frac52\right)^1$ and the base $\frac52$ is greater than 1, so the exponent you are looking for lies between 0 and 1: $0 < x < 1$ (it is about $0.76$).
:::

::: esercizio test Growth of a colony
A colony of bacteria doubles every 3 hours. At 8:00 in the morning there are 500 bacteria. At what time will there be 8000?
::: soluzione
After $t$ hours the colony has doubled $\frac{t}{3}$ times, so $N(t) = 500 \cdot 2^{t/3}$. Set $N(t) = 8000$:

$$
500 \cdot 2^{t/3} = 8000 \;\Rightarrow\; 2^{t/3} = 16 = 2^4 \;\Rightarrow\; \frac{t}{3} = 4 \;\Rightarrow\; t = 12
$$

Twelve hours after 8:00 in the morning: at 20:00.
:::

::: esercizio test A rational inequality with an exponential
Solve $\dfrac{3^x - 9}{x + 1} \geq 0$.
::: soluzione
C.E.: $x + 1 \neq 0$, that is $x \neq -1$.

Study the sign of the two pieces:

- numerator: $3^x - 9 \geq 0$ when $3^x \geq 3^2$, that is $x \geq 2$;
- denominator: $x + 1 > 0$ when $x > -1$.

Sign chart: for $x < -1$ numerator negative and denominator negative, fraction positive; for $-1 < x < 2$ numerator negative and denominator positive, fraction negative; for $x > 2$ fraction positive. At $x = 2$ the numerator is zero and so is the fraction: with $\geq$ the value $x = 2$ is accepted.

Solutions: $x < -1$ or $x \geq 2$.

```retta
titolo: Solutions of $\frac{3^x - 9}{x+1} \geq 0$
da: -3 4
int: (-inf, -1)
int: [2, +inf)
```
:::

::: esercizio test Watch out for the square
How many solutions does the equation $\ln(x^2) = \ln(x + 6)$ have?
::: soluzione
C.E.: $x^2 > 0$, that is $x \neq 0$, and $x + 6 > 0$, that is $x > -6$.

Equal arguments: $x^2 = x + 6$, that is $x^2 - x - 6 = 0$, which factorises as $(x - 3)(x + 2) = 0$: $x = 3$ or $x = -2$.

Both satisfy the C.E. (for $x = -2$: $x^2 = 4 > 0$ and $x + 6 = 4 > 0$). There are **two** solutions. If you turn $\ln(x^2)$ into $2\ln x$ you impose $x > 0$ and lose $x = -2$.
:::

## Self-check quiz

```quiz
D: What is the value of $\log_3 \dfrac{1}{81}$?
N: -4
= $\dfrac{1}{81} = \dfrac{1}{3^4} = 3^{-4}$, so the exponent to give 3 is $-4$.

D: What is the value of $\log_2 24 - \log_2 3$?
N: 3
= The difference of two logarithms with the same base is the logarithm of the quotient: $\log_2 \dfrac{24}{3} = \log_2 8 = 3$.

D: What is the domain of the function $f(x) = \ln(9 - x^2)$?
+ $(-3, 3)$
- $(-\infty, -3) \cup (3, +\infty)$
- $[-3, 3]$
- $(0, 3)$
= You need $9 - x^2 > 0$, that is $x^2 < 9$, so $-3 < x < 3$. The endpoints are excluded because the argument must be strictly positive ($\ln 0$ does not exist). $(0, 3)$ comes from confusing the condition on the argument with $x > 0$; $(-\infty, -3) \cup (3, +\infty)$, on the other hand, is the set where $9 - x^2$ is negative.

D: True or false: $\log_2(x + y) = \log_2 x + \log_2 y$ holds for every $x > 0$ and $y > 0$.
- True
+ False
= There is no rule at all for the sum. Counterexample: $\log_2(4 + 4) = \log_2 8 = 3$, while $\log_2 4 + \log_2 4 = 2 + 2 = 4$. The true rule concerns the product: $\log_2(xy) = \log_2 x + \log_2 y$.

D: True or false: $2^{\sqrt{2}} < 2^{1.5}$.
+ True
- False
= The base 2 is greater than 1, so the power with the larger exponent is the larger one. Since $1.5^2 = 2.25 > 2$, we have $\sqrt{2} < 1.5$ and therefore $2^{\sqrt 2} < 2^{1.5}$.

D: Let $f(x) = a^x$ with $0 < a < 1$. Which statements are true?
+ The graph of $f$ passes through the point $(0, 1)$.
+ $f(x) > 0$ for every real $x$.
+ $f(2) > f(3)$.
- $f$ is increasing.
- The domain of $f$ is $(0, +\infty)$.
= Every exponential equals 1 at $x = 0$ and is always positive. With a base between 0 and 1 the function is decreasing, so a larger $x$ corresponds to a smaller value: $f(2) > f(3)$. The domain is all of $\R$; $(0, +\infty)$ is the range.

D: Solve the equation $4^x = 8$. What is the value of $x$?
N: 3/2
= Write everything in base 2: $2^{2x} = 2^3$, so $2x = 3$ and $x = \dfrac{3}{2}$.

D: What are the solutions of the equation $\log_3 x + \log_3(x - 8) = 2$?
+ Only $x = 9$
- $x = 9$ and $x = -1$
- Only $x = -1$
- No solution
= Domain conditions: $x > 0$ and $x > 8$, so $x > 8$. Then $\log_3[x(x - 8)] = 2$ gives $x^2 - 8x = 9$, that is $x^2 - 8x - 9 = 0$, with roots $9$ and $-1$. Only $x = 9$ satisfies the domain conditions.

D: The solution set of $\left(\dfrac{1}{3}\right)^{x-2} > 9$ is
+ $x < 0$
- $x > 0$
- $x < 4$
- $x > 4$
= $9 = \left(\dfrac{1}{3}\right)^{-2}$, so the inequality is $\left(\dfrac{1}{3}\right)^{x-2} > \left(\dfrac{1}{3}\right)^{-2}$. The base is between 0 and 1 and the direction is reversed: $x - 2 < -2$, that is $x < 0$. If you do not reverse the direction you find $x > 0$; if you wrongly write $9 = \left(\frac13\right)^2$ you find $x < 4$ (or $x > 4$ if you also get the direction wrong).

D: The solution set of $\log_{1/2}(x - 1) > 1$ is
+ $1 < x < \dfrac{3}{2}$
- $x < \dfrac{3}{2}$
- $x > \dfrac{3}{2}$
- $x > 3$
= Domain condition: $x > 1$. Then $1 = \log_{1/2} \dfrac{1}{2}$ and, with a base between 0 and 1, the direction is reversed: $x - 1 < \dfrac{1}{2}$, that is $x < \dfrac{3}{2}$. Together with the condition $x > 1$ you get $1 < x < \dfrac32$. The answer $x < \frac32$ forgets the domain conditions, $x > \frac32$ forgets to reverse the direction.

D: Which equalities hold for every $x > 0$?
+ $\ln(e^2 x) = 2 + \ln x$
+ $\log_2(8x) = 3 + \log_2 x$
+ $\log_3 \dfrac{1}{x} = -\log_3 x$
- $\ln(x^2) = (\ln x)^2$
- $\log_2(x + 8) = \log_2 x + 3$
= The three true equalities are the product and reciprocal properties: $\ln(e^2x) = \ln e^2 + \ln x$ and $\log_2(8x) = \log_2 8 + \log_2 x$. On the other hand, $\ln(x^2) = 2\ln x$, which for $x = e$ equals 2, while $(\ln e)^2 = 1$; and $\log_2(x + 8)$ does not split: for $x = 8$ it equals 4, while $\log_2 8 + 3 = 6$.

D: What is the value of $2^{3 + \log_2 5}$?
N: 40
= $2^{3 + \log_2 5} = 2^3 \cdot 2^{\log_2 5} = 8 \cdot 5 = 40$, because $a^{\log_a x} = x$.

D: The graph of $y = \log_a x$ passes through the point $(9, 2)$. What is the value of the base $a$?
+ $a = 3$
- $a = 81$
- $a = \dfrac{9}{2}$
- $a = 3$ or $a = -3$
= The point $(9, 2)$ on the graph means $\log_a 9 = 2$, that is $a^2 = 9$. The base must be positive, so $a = 3$. $a = 81$ comes from $9^2$ (roles of base and argument swapped), $\frac92$ from dividing instead of using the definition, $-3$ is not an allowed base.

D: True or false: the equation $5^x = -25$ has the solution $x = -2$.
- True
+ False
= $5^{-2} = \dfrac{1}{25}$, not $-25$. An exponential with a positive base is always positive, so $5^x = -25$ is impossible.

D: A solution has $[\mathrm{H}^+] = 10^{-4}$. Another one has a concentration of hydrogen ions 100 times smaller. What is the pH of the second solution?
+ $6$
- $2$
- $4$
- $-6$
= The second concentration is $\dfrac{10^{-4}}{100} = 10^{-4} \cdot 10^{-2} = 10^{-6}$, so $\mathrm{pH} = -\log_{10} 10^{-6} = 6$. A smaller concentration gives a higher pH (a less acidic solution). $-6$ comes from forgetting the minus sign in the definition, $2$ from subtracting instead of adding.

D: Which numbers are solutions of $4^x - 5 \cdot 2^x + 4 = 0$?
+ $0$
+ $2$
- $1$
- $4$
= With $t = 2^x$ the equation becomes $t^2 - 5t + 4 = 0$, with solutions $t = 1$ and $t = 4$. Going back to $x$: $2^x = 1$ gives $x = 0$ and $2^x = 4$ gives $x = 2$. The numbers 1 and 4 are the values of $t$, not of $x$.
```

## Checklist

```checklist
I can compute powers with negative and fractional exponents
I know for which bases $a^x$ is defined and I can draw its graph in the cases $a > 1$ and $0 < a < 1$
I can compare two powers without a calculator
I can compute a logarithm by writing base and argument as powers of the same number
I can use the properties of logarithms to expand an expression or combine it into a single logarithm
I can recognise the typical mistakes, such as splitting $\log_a(x+y)$ or confusing $(\log_a x)^2$ with $\log_a x^2$
I can use the change of base and I know what $\ln$ and $\log_{10}$ denote
I know that exponential and logarithm with the same base are inverse functions, with graphs symmetric with respect to $y = x$
I can find the domain of a function that contains logarithms
I can solve exponential equations with the same base, with different bases and with the substitution $t = a^x$
I can solve logarithmic equations by writing the domain conditions and discarding the solutions that are not acceptable
I can solve exponential and logarithmic inequalities, reversing the direction when the base is between 0 and 1
I can set up an exponential growth model and use the pH formula
```
