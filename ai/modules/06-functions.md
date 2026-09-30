---
modulo: 6
titolo: "Real functions of a real variable"
breve: "What a function is, domain and graph, the main properties (injective, inverse, composite, even, periodic, monotonic, bounded, continuous), translations and the most commonly used functions."
ore: 7
unita:
  - "6.1 Definition of a function and main features"
  - "6.2 Examples of useful functions"
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/moduli/06-funzioni.md
---

## In brief

- A **function** assigns to every $x$ in the domain **one and only one** value $f(x)$: on the graph, every vertical line meets the curve at most once.
- **Domain**: exclude the zeros of the denominators and require radicand $\ge 0$ in roots of even index ($> 0$ if the root is in a denominator); roots of odd index impose no conditions.
- The **zeros** of $f$ are the solutions of $f(x) = 0$, that is the $x$-coordinates of the points where the graph crosses the $x$-axis.
- **Injective**: different values of $x$ give different values. **Surjective**: the range is the whole codomain. **Bijective** means both, that is invertible; the graph of $f^{-1}$ is symmetric to that of $f$ with respect to the line $y = x$.
- **Composite**: $(g \circ f)(x) = g(f(x))$, first $f$ and then $g$; in general $g \circ f \ne f \circ g$.
- **Even**: $f(-x) = f(x)$, graph symmetric with respect to the $y$-axis. **Odd**: $f(-x) = -f(x)$, symmetric with respect to the origin. **Periodic**: $f(x + T) = f(x)$.
- **Translations** (with $c > 0$): $f(x - c)$ shifts the graph to the right, $f(x + c)$ to the left, $f(x) + c$ up, $f(x) - c$ down.
- Functions to recognise at a glance: constant, piecewise, $|x|$ and $|f(x)|$, linear $y = mx + q$ (direct proportionality if $q = 0$ and $m \ne 0$), $y = \frac{k}{x}$ (inverse proportionality).

## 6.1 Definition of a function and main features

### Definition and terminology

> [!DEF] Function
> A **function** $f$ from a set $A$ to a set $B$ is a rule that assigns to **every** element $x$ of $A$ **one and only one** element of $B$, denoted by $f(x)$. You write
> $$
> f: A \to B, \qquad x \mapsto f(x)
> $$
> and read “$f$ from $A$ to $B$, which maps $x$ to $f(x)$”. Here $A$ and $B$ are subsets of $\R$, the set of real numbers: we speak of **real functions of a real variable**. You often write $y = f(x)$.

The names you need to know:

- $A$ is the **domain**, $B$ the **codomain** (the target set).
- $x$ is the **independent variable**, $y = f(x)$ the **dependent variable**, because its value depends on $x$ through the rule.
- $f(x)$ is the **image** of $x$. The **range** (image) of the whole function, $f(A)$, is the set of the values it takes: it can be smaller than the codomain.
- The **preimage** (*controimmagine*) of a value $y$ is the set of the $x$ in the domain for which $f(x) = y$: it can contain a single element, several elements, or none (it is then the empty set, $\emptyset$).

> [!ESEMPIO] Images and preimages for $f(x) = x^2$
> With $f: \R \to \R$, $f(x) = x^2$: the image of $3$ is $f(3) = 9$. The preimage of $4$ is $\{-2, 2\}$ (two elements), that of $0$ is $\{0\}$, that of $-1$ is empty, because no square is negative. The range of $f$ is $[0, +\infty)$, smaller than the codomain $\R$.

Other examples: the graph of $f(x) = 3x - 1$ is a line (linear function); the graph of $f(x) = x^2 - 2x$ is a parabola (second-degree polynomial function); $f: \N \to \N$, $f(n) = 2n$ assigns to every natural number its double, and its range, the set of even numbers, is smaller than the codomain $\N$.

> [!NOTA] Algebraic and transcendental functions
> **Algebraic** functions are built from polynomials with sums, differences, products, quotients and extraction of roots: they are the ones in this module. The others are called **transcendental**: exponentials, logarithms and trigonometric functions, which have their own modules. The properties that follow hold for all of them.

### The domain

When a function is given only by a formula, its **domain** (in Italian also *campo di esistenza*) is the set of real numbers for which the formula makes sense.

> [!METODO] Domain conditions (*condizioni di esistenza*)
> - Fraction: the **denominator** must be $\ne 0$.
> - Root of **even** index ($\sqrt{\;}$, $\sqrt[4]{\;}$, …): **radicand** $\ge 0$.
> - Root of even index **in a denominator**: radicand $> 0$ (it must be $\ge 0$ and also $\ne 0$).
> - Root of **odd** index ($\sqrt[3]{\;}$, …): no condition on the radicand.
> - If there are several conditions, they must **all hold together**: you put them into a system.
>
> Logarithms and exponentials have their own rules, which you will see together with those functions.

> [!ESEMPIO] Six domains
> - $f(x) = \frac{x + 1}{x^2 - 4}$: $x^2 - 4 \ne 0$, so $x \ne 2$ and $x \ne -2$. Domain $\R \setminus \{-2, 2\}$, which reads “$\R$ minus $-2$ and $2$”.
> - $f(x) = \sqrt{6 - 2x}$: $6 - 2x \ge 0$, that is $x \le 3$. Domain $(-\infty, 3]$.
> - $f(x) = \sqrt{x^2 - 5x + 6}$: $(x - 2)(x - 3) \ge 0$; the parabola opens upwards, so $x \le 2$ or $x \ge 3$.
> - $f(x) = \frac{\sqrt{x}}{x - 4}$: $x \ge 0$ and $x \ne 4$. Domain $[0, 4) \cup (4, +\infty)$.
> - $f(x) = \frac{1}{\sqrt{x + 3}}$: root in a denominator, so $x + 3 > 0$, that is $x > -3$.
> - $f(x) = \sqrt[3]{x - 1}$: cube root, no condition. Domain $\R$.

```retta
titolo: Domain of $\sqrt{x^2 - 5x + 6}$: $x \le 2$ or $x \ge 3$
da: 0 5
int: (-inf, 2]
int: [3, +inf)
```

> [!TRAPPOLA] Find the domain before simplifying
> $f(x) = \frac{x^2 - 1}{x - 1}$ has domain $x \ne 1$. Simplifying gives $x + 1$, but the value $x = 1$ remains excluded: the graph is the line $y = x + 1$ **without the point** $(1, 2)$. Also remember that the conditions from a denominator and from a root hold together (“and”), not as alternatives.

### Zeros and sign of a function

A number $c$ is a **zero** of $f$ if $f(c) = 0$. Finding the zeros is the same as solving the equation $f(x) = 0$, that is the system of $y = f(x)$ and $y = 0$: graphically, the zeros are the $x$-coordinates of the points where the graph **crosses the $x$-axis**. In the same way, $f(x) > 0$ where the graph lies above the $x$-axis and $f(x) < 0$ where it lies below; the solutions of $f(x) = g(x)$ are the $x$-coordinates of the points the two graphs have in common. The graph crosses the $y$-axis at the point $(0, f(0))$, if $0$ is in the domain.

> [!ESEMPIO] Zeros and sign of a polynomial
> $f(x) = x^3 - x^2 - 6x$. Take out the common factor $x$ and factorise the trinomial: $f(x) = x(x^2 - x - 6) = x(x - 3)(x + 2)$. The zeros are $-2$, $0$ and $3$. With the sign study of the factors: $f(x) > 0$ for $-2 < x < 0$ or $x > 3$; $f(x) < 0$ for $x < -2$ or $0 < x < 3$.

```grafico
titolo: The zeros of $f(x) = x^3 - x^2 - 6x$ are $-2$, $0$ and $3$
x: -3 4
y: -10 10
proporzioni: libere
f: x^3 - x^2 - 6x | rosso
punto: -2 0
punto: 0 0
punto: 3 0
```

> [!TRAPPOLA] The zeros must be in the domain
> $f(x) = \frac{x^2 - 4}{x - 2}$: the numerator is zero for $x = 2$ and for $x = -2$, but $x = 2$ is excluded from the domain. The only zero is $x = -2$.

### Graph of a function

> [!DEF] Graph
> The **graph** of $f$ is the set of the points $(x, f(x))$ of the plane, with $x$ in the domain. A curve is the graph of a function if and only if **every vertical line meets it in at most one point**: two points on the same vertical line would mean two values for the same $x$.

From the graph you can read the domain, by projecting the curve onto the $x$-axis, and the range, by projecting it onto the $y$-axis.

> [!ESEMPIO] Circle and semicircle
> The circle $x^2 + y^2 = 4$ is not the graph of a function: the line $x = 1$ meets it at $(1, \sqrt3)$ and at $(1, -\sqrt3)$. The upper semicircle $y = \sqrt{4 - x^2}$, on the other hand, is a function, with domain $[-2, 2]$ (you need $4 - x^2 \ge 0$) and range $[0, 2]$.

```grafico
titolo: The line $x = 1$ meets the circle at two points, the semicircle $y = \sqrt{4 - x^2}$ at only one
x: -3 3
y: -3 3
cerchio: 0 0 2 | grigio | tratteggio
f: sqrt(4 - x^2) | rosso | $y = \sqrt{4 - x^2}$ | ne
verticale: 1 | $x = 1$
punto: 1 sqrt(3) | rosso
punto: 1 -sqrt(3) | vuoto
```

### Injective, surjective and bijective functions

> [!DEF] Injective, surjective, bijective
> - $f$ is **injective** if distinct elements of the domain have distinct images: $x_1 \ne x_2 \Rightarrow f(x_1) \ne f(x_2)$ (the arrow $\Rightarrow$ reads “implies”). Equivalently: $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$. An injective function never takes the same value twice.
> - $f: A \to B$ is **surjective** if every element of the codomain is the image of at least one element of the domain: for every $y \in B$ there exists $x \in A$ with $f(x) = y$ (the symbol $\in$ reads “belongs to”). In other words $f(A) = B$.
> - $f$ is **bijective** (in Italian *biiettiva* or *biunivoca*) if it is both injective and surjective: there is a one-to-one correspondence between domain and codomain.

On the graph you look at the horizontal lines $y = k$, with $k$ in the codomain: $f$ is injective if each of them meets the graph **at most** once, surjective if each of them meets it **at least** once, bijective if **exactly** once.

> [!ESEMPIO] Four cases
> - $f(x) = 5x - 2$, from $\R$ to $\R$: injective, because $5x_1 - 2 = 5x_2 - 2$ implies $x_1 = x_2$; surjective, because for every $y$ you just take $x = \frac{y + 2}{5}$. It is bijective, like every non-horizontal line.
> - $f(x) = x^2$, from $\R$ to $\R$: it is not injective ($f(-2) = f(2) = 4$: to disprove it, a single **counterexample** is enough) and it is not surjective (negative values are never taken). If you take $[0, +\infty)$ as the codomain it becomes surjective: surjectivity depends on the chosen codomain.
> - $f(x) = x^3$, from $\R$ to $\R$: bijective; every horizontal line cuts the graph exactly once.
> - $f(x) = \frac{1}{x}$, from $\R \setminus \{0\}$ to $\R$: injective but not surjective, because the value $0$ is never taken.

```grafico
titolo: $y = x^2$ is not injective: the line $y = 4$ meets it at $(-2, 4)$ and at $(2, 4)$
x: -4 4
y: -1 6
f: x^2 | rosso | da=-sqrt(6) | a=sqrt(6) | $y = x^2$ | e
orizzontale: 4 | tratteggio | $y = 4$
punto: -2 4 | no
punto: 2 4 | ne
```

### Restriction of a function

> [!DEF] Restriction
> If $D \subseteq A$ ($D$ is contained in $A$), the **restriction** of $f$ to $D$ is the function $f|_D: D \to B$ that acts like $f$ but only on the points of $D$: $f|_D(x) = f(x)$ for every $x \in D$. The domain is restricted; the codomain stays the same.

It is used above all to obtain an injective function: $x^2$ is not injective on $\R$, but its restrictions to $[0, +\infty)$ and to $(-\infty, 0]$ are.

### Inverse function

> [!DEF] Inverse function
> If $f: A \to B$ is bijective, its **inverse** $f^{-1}: B \to A$ (read “$f$ inverse” or “$f$ to the minus one”) assigns to every $y \in B$ the unique $x \in A$ such that $f(x) = y$. So $f^{-1}(f(x)) = x$ and $f(f^{-1}(y)) = y$: the dependent variable of $f$ becomes the independent variable of $f^{-1}$.
> A function is **invertible** if and only if it is bijective, and the domain of $f^{-1}$ is the range of $f$. The graph of $f^{-1}$ is **symmetric** to that of $f$ with respect to the bisector $y = x$.

> [!METODO] Computing the inverse
> 1. Check that $f$ is bijective; if it is not, restrict the domain (and take the range as the codomain).
> 2. Write $y = f(x)$ and solve for $x$ in terms of $y$.
> 3. Swap the names of the variables, to go back to the usual notation with $x$ as the independent variable.
> 4. Check that $f(f^{-1}(x)) = x$.

> [!ESEMPIO] Inverse of a linear function
> $f(x) = 2x - 6$, from $\R$ to $\R$. From $y = 2x - 6$ you get $x = \frac{y + 6}{2}$; swapping the names, $f^{-1}(x) = \frac{x}{2} + 3$. Check: $f\left(\frac{x}{2} + 3\right) = 2\left(\frac{x}{2} + 3\right) - 6 = x$.
> The point $(3, 0)$ of the graph of $f$ becomes the point $(0, 3)$ of the graph of $f^{-1}$; the two lines meet on the bisector, at $(6, 6)$.

```grafico
titolo: $f(x) = 2x - 6$ and $f^{-1}(x) = \frac{x}{2} + 3$ are symmetric with respect to $y = x$
x: -4 10
y: -7 8
f: 2x - 6 | rosso | da=-1/2 | a=7
f: x/2 + 3
f: x | tratteggio | grigio
testo: 1.75 -3.5 | $f$ | bianco
testo: -2.6 2.35 | $f^{-1}$ | bianco
testo: -1.9 -2.9 | $y = x$ | bianco
punto: 3 0 | rosso | $(3, 0)$ | no
punto: 0 3 | $(0, 3)$ | no
punto: 6 6
```

> [!ESEMPIO] Inverting after a restriction
> $f(x) = x^2$ is not invertible on $\R$. The restriction to $[0, +\infty)$, with codomain $[0, +\infty)$, is bijective: from $y = x^2$ with $x \ge 0$ you get $x = \sqrt{y}$, so the inverse is $\sqrt{x}$. The restriction to $(-\infty, 0]$, instead, has inverse $-\sqrt{x}$.

```grafico
titolo: The restriction of $y = x^2$ to $[0, +\infty)$ and its inverse $y = \sqrt{x}$
x: -1 4
y: -1 4
f: x^2 | rosso | da=0 | a=2 | $y = x^2$ | o
f: sqrt(x) | $y = \sqrt{x}$ | no
f: x | tratteggio | grigio
f: x^2 | grigio | tratteggio | da=-2 | a=0
```

> [!TRAPPOLA] $f^{-1}$ is not $\frac{1}{f}$
> Here the exponent $-1$ does not denote the reciprocal: for $f(x) = 2x - 6$ the inverse is $\frac{x}{2} + 3$, whereas $\frac{1}{f(x)} = \frac{1}{2x - 6}$ is a completely different function.

### Composition of functions

> [!DEF] Composite function
> Given $f: A \to B$ and $g: B \to C$, the **composite** $g \circ f$ (read “$g$ composed with $f$”) is the function from $A$ to $C$ defined by
> $$
> (g \circ f)(x) = g(f(x))
> $$
> You apply $f$ **first** (the **inner** function) and **then** $g$ (the **outer** function). For this to be possible, the range of $f$ must be contained in the domain of $g$; if it is not, you restrict the domain of $f$.

> [!ESEMPIO] The order matters
> $f(x) = 2x + 1$ and $g(x) = x^2 - 3$.
> $(g \circ f)(x) = g(2x + 1) = (2x + 1)^2 - 3 = 4x^2 + 4x - 2$.
> $(f \circ g)(x) = f(x^2 - 3) = 2(x^2 - 3) + 1 = 2x^2 - 5$.
> At a point: $(g \circ f)(1) = g(f(1)) = g(3) = 6$, whereas $(f \circ g)(1) = f(g(1)) = f(-2) = -3$.

> [!ESEMPIO] Composites and domain
> $f(x) = x - 3$ and $g(x) = \sqrt{x}$. The composite $(g \circ f)(x) = \sqrt{x - 3}$ exists only for $x \ge 3$: you must restrict $f$ to $[3, +\infty)$, where $f(x) \ge 0$. The other one, $(f \circ g)(x) = \sqrt{x} - 3$, has domain $x \ge 0$.

Being able to recognise a composite is useful: $h(x) = (3x - 1)^5$ is $g(f(x))$ with $f(x) = 3x - 1$ and $g(t) = t^5$. You can also compose three or more functions, always starting from the innermost one.

> [!TRAPPOLA] Composite, not product
> $(g \circ f)(x)$ is read from right to left: $f$ first. And it is not the product $g(x) \cdot f(x)$: with $f(x) = x - 1$ and $g(x) = x^2$ you have $(g \circ f)(x) = (x - 1)^2$, whereas $g(x) \cdot f(x) = x^3 - x^2$.

### Even and odd functions

> [!DEF] Even and odd
> The domain must be symmetric with respect to $0$: if it contains $x$, it also contains $-x$.
> - $f$ is **even** if $f(-x) = f(x)$ for every $x$ in the domain: the graph is **symmetric with respect to the $y$-axis**.
> - $f$ is **odd** if $f(-x) = -f(x)$ for every $x$ in the domain: the graph is **symmetric with respect to the origin**.

The names come from polynomials: those with only even powers of $x$ (constants count as even powers), such as $x^2$ or $x^4 - 3x^2 + 2$, are even; those with only odd powers, such as $x$ or $x^3 - 3x$, are odd. But there are many even or odd functions that are not polynomials: $|x|$ and $\cos x$ are even, $\frac{1}{x}$ and $\sin x$ are odd. Most functions are neither even nor odd. If an odd function is defined at $0$, then $f(0) = 0$. Knowing that a function is even or odd lets you study it only for $x \ge 0$ and obtain the rest by symmetry.

> [!METODO] Deciding whether a function is even or odd
> 1. Check that the domain is symmetric; if it is not, the function is neither even nor odd.
> 2. Compute $f(-x)$ by putting $-x$ in place of every $x$, and simplify.
> 3. If you get back $f(x)$ it is even; if you get $-f(x)$ it is odd; otherwise it is neither (to show this, one value is enough, for example $x = 1$).

> [!ESEMPIO] Four checks
> - $f(x) = x^4 - 3x^2 + 2$: $f(-x) = (-x)^4 - 3(-x)^2 + 2 = x^4 - 3x^2 + 2 = f(x)$, even.
> - $h(x) = \frac{x}{x^2 + 1}$: $h(-x) = \frac{-x}{x^2 + 1} = -h(x)$, odd.
> - $k(x) = x^2 - 2x$: $k(-x) = x^2 + 2x$, which is neither $k(x)$ nor $-k(x)$ (for example $k(1) = -1$ and $k(-1) = 3$): neither even nor odd.
> - $\sqrt{x^2 - 4}$ is even, with the symmetric domain $x \le -2$ or $x \ge 2$; $\sqrt{x - 1}$ is neither even nor odd, because its domain $[1, +\infty)$ is not symmetric.

```grafico
titolo: $f(x) = x^2 - 2$ is even: the graph is symmetric with respect to the $y$-axis
x: -4 4
y: -3 5
f: x^2 - 2 | rosso
segmento: -2 2 2 2 | tratteggio | grigio
punto: -2 2 | $(-2, 2)$ | no
punto: 2 2 | $(2, 2)$ | ne
```

```grafico
titolo: $g(x) = x^3 - 3x$ is odd: the graph is symmetric with respect to the origin
x: -4 4
y: -4 4
f: x^3 - 3x | rosso
segmento: -1 2 1 -2 | tratteggio | grigio
punto: -1 2 | $(-1, 2)$ | no
punto: 1 -2 | $(1, -2)$ | se
```

> [!TRAPPOLA] “Not even” does not mean “odd”
> There are three possibilities, not two: even, odd, neither (the only function that is both even and odd is the one that is always $0$). And watch the signs: $(-x)^3 = -x^3$ but $(-x)^2 = x^2$, whereas $-x^2$ means $-(x^2)$.

### Periodic functions

> [!DEF] Periodic function
> $f$ is **periodic** with **period** $T > 0$ if $f(x + T) = f(x)$ for every $x$ in the domain, and $T$ is the smallest positive number with this property. The graph repeats identically every $T$: it is enough to study it on an interval of length $T$.

Consequently $f(x + 2T) = f(x)$, $f(x - T) = f(x)$ and in general $f(x + nT) = f(x)$ for every integer $n$. The typical examples are the trigonometric functions: $\sin x$ and $\cos x$ have period $2\pi$.

```grafico
titolo: $y = \sin x$ has period $2\pi$: the piece between $0$ and $2\pi$ repeats identically
x: -pi 4pi
y: -1.5 1.5
proporzioni: libere
passo-x: pi
passo-y: 1
f: sin(x) | rosso
segmento: 0 -1.25 2pi -1.25 | $T = 2\pi$ | s
segmento: 2pi -1.25 4pi -1.25 | tratteggio | grigio
```

> [!ESEMPIO] Using the period
> $f$ has period $3$ and $f(1) = 5$. Then $f(4) = f(1 + 3) = 5$, $f(10) = f(1 + 3 \cdot 3) = 5$ and $f(-2) = f(1 - 3) = 5$.

> [!NOTA] The period of $f(kx)$
> If $f$ has period $T$, then $f(kx)$ has period $\frac{T}{|k|}$: $\sin(2x)$ has period $\pi$, $\cos\left(\frac{x}{2}\right)$ has period $4\pi$. A translation, on the other hand, does not change the period.

### Increasing, decreasing and monotonic functions

> [!DEF] Monotonicity on an interval $I$ of the domain
> For every $x_1, x_2 \in I$ with $x_1 < x_2$:
> - $f$ is **increasing** on $I$ if $f(x_1) < f(x_2)$: the graph, traced from left to right, goes up;
> - $f$ is **decreasing** on $I$ if $f(x_1) > f(x_2)$: the graph goes down;
> - $f$ is **non-decreasing** on $I$ if $f(x_1) \le f(x_2)$, **non-increasing** if $f(x_1) \ge f(x_2)$: horizontal pieces are allowed.
>
> A function that has one of these properties on $I$ is called **monotonic** on $I$. Some books call “strictly increasing” what is called increasing here, and “increasing” what is called non-decreasing here.

> [!ESEMPIO] Intervals of monotonicity
> - $y = mx + q$: increasing on the whole of $\R$ if $m > 0$, decreasing if $m < 0$; if $m = 0$ it is constant, that is non-increasing and non-decreasing at the same time.
> - $f(x) = x^2 - 6x + 5$: parabola opening upwards with vertex $(3, -4)$. It is decreasing on $(-\infty, 3]$ and increasing on $[3, +\infty)$; it is not monotonic on the whole of $\R$.

> [!TRAPPOLA] Monotonic piece by piece does not mean monotonic
> $f(x) = \frac{1}{x}$ is decreasing on $(-\infty, 0)$ and on $(0, +\infty)$, but **not** on its whole domain: $-1 < 1$ and also $f(-1) = -1 < f(1) = 1$. The intervals of monotonicity must be given separately.

```grafico
titolo: $y = \frac{1}{x}$ is decreasing on $(-\infty, 0)$ and on $(0, +\infty)$, but $f(-1) < f(1)$
x: -5 5
y: -4 4
f: 1/x | rosso
punto: -1 -1 | $(-1, -1)$ | so
punto: 1 1 | $(1, 1)$ | ne
```

A function that is increasing (or decreasing) on its whole domain is injective: this is a convenient way to show that it is invertible.

### Bounded functions

> [!DEF] Bounded function
> - $f$ is **bounded above** if there is a number $K$ such that $f(x) \le K$ for every $x$ in the domain;
> - $f$ is **bounded below** if there is a number $K$ such that $f(x) \ge K$ for every $x$ in the domain;
> - $f$ is **bounded** if it is both bounded above and bounded below: its graph lies entirely within a **horizontal strip** of the plane.

> [!ESEMPIO] Bounded and unbounded
> - $\sin x$ and $\cos x$ take values between $-1$ and $1$: they are bounded. Consequently $\cos x + 1$, which has values between $0$ and $2$, is bounded too.
> - $x^2$ is bounded below ($x^2 \ge 0$) but not above.
> - $x^3$ and $\frac{1}{x}$ are bounded neither above nor below.
> - $f(x) = \frac{1}{x^2 + 1}$: the denominator is at least $1$, so $0 < f(x) \le 1$. It is bounded, and the value $1$, reached at $x = 0$, is its **maximum**.

```grafico
titolo: $f(x) = \frac{1}{x^2 + 1}$ is bounded: the graph lies in the strip between $y = 0$ and $y = 1$
x: -5 5
y: -1 2
f: 1/(x^2 + 1) | rosso
orizzontale: 1 | tratteggio | $y = 1$
punto: 0 1 | $(0, 1)$ | ne
```

### Continuous functions

A precise definition of continuity requires the tools of mathematical analysis; here the intuitive idea is enough: a function is **continuous** on an interval if its graph, on that interval, can be drawn **without lifting the pen from the paper**. Lines, parabolas, polynomials, $|x|$ and $\sqrt{x}$ are continuous. The graph of $\frac{1}{x}$ has two branches because $x = 0$ is not in the domain, but each branch can be drawn without lifting the pen.

A function is **discontinuous** at a point of its domain when its graph “jumps” there. This often happens with piecewise functions and with quantities that are counted: the number of people in a room, as a function of time, changes in jumps; the temperature of the room, on the other hand, varies continuously.

> [!ESEMPIO] A jump
> $g(x) = 2x$ for $x \le 1$ and $g(x) = x + 3$ for $x > 1$. At $x = 1$ we have $g(1) = 2$, but just to the right of $1$ the values are close to $1 + 3 = 4$: the graph jumps from $2$ to $4$, and $g$ is discontinuous at $x = 1$.

```grafico
titolo: $g(x) = 2x$ for $x \le 1$, $g(x) = x + 3$ for $x > 1$: at $x = 1$ the graph jumps from $2$ to $4$
x: -2 4
y: -3 7
proporzioni: libere
f: 2x | rosso | a=1
f: x + 3 | rosso | da=1
punto: 1 2 | rosso | $(1, 2)$ | se
punto: 1 4 | vuoto | $(1, 4)$ | no
```

### Translations

> [!PROP] Translating the graph of $f$ (with $c > 0$)
> - $y = f(x - c)$: the graph of $f$ shifted **to the right** by $c$;
> - $y = f(x + c)$: shifted **to the left** by $c$;
> - $y = f(x) + c$: shifted **up** by $c$;
> - $y = f(x) - c$: shifted **down** by $c$.
>
> If the constant is **inside** the argument, the translation is horizontal and goes “against” the sign; if it is **outside**, it is vertical and follows the sign. Together: $y = f(x - h) + k$ is the graph of $f$ shifted by $h$ horizontally and by $k$ vertically.

Why “against”: in $y = f(x - 2)$ the value that $f$ took at $0$ is taken when $x - 2 = 0$, that is at $x = 2$. Everything happens $2$ units further to the right.

> [!ESEMPIO] Three translations
> - $y = (x - 2)^2 + 1$: the parabola $y = x^2$ shifted $2$ to the right and $1$ up; the vertex moves from $(0, 0)$ to $(2, 1)$. Expanding: $y = x^2 - 4x + 5$, and indeed $x_V = \frac{4}{2} = 2$.
> - $y = |x + 3| - 2$: the graph of $|x|$ shifted $3$ to the left and $2$ down; the vertex of the “V” is $(-3, -2)$.
> - $y = \frac{1}{x - 1} + 2$: the graph of $\frac{1}{x}$ shifted $1$ to the right and $2$ up. The lines that the branches approach (the asymptotes) become $x = 1$ and $y = 2$; the domain is $x \ne 1$ and the range is $y \ne 2$.

```grafico
titolo: From $y = x^2$ to $y = (x - 2)^2 + 1$: $2$ to the right and $1$ up
x: -3 5
y: -1 7
f: x^2 | grigio | tratteggio | da=-2.6 | a=2.6 | $y = x^2$ | o
f: (x - 2)^2 + 1 | rosso | $y = (x - 2)^2 + 1$ | e
freccia: 0 0 2 1
punto: 2 1 | rosso | $V$ | s
```

```grafico
titolo: $y = \frac{1}{x - 1} + 2$: the graph of $\frac{1}{x}$ shifted $1$ to the right and $2$ up
x: -4 6
y: -3 7
f: 1/(x - 1) + 2 | rosso
verticale: 1 | tratteggio | grigio | $x = 1$
orizzontale: 2 | tratteggio | grigio | $y = 2$
```

> [!TRAPPOLA] When there is a coefficient in front of $x$
> The horizontal translation is read after taking out the coefficient of $x$: $\sqrt{2x - 4} = \sqrt{2(x - 2)}$ is the graph of $\sqrt{2x}$ shifted $2$ to the right, not $4$. In the same way, if $g(x) = \cos\left(\frac{x}{2}\right)$, the shift by $c$ to the left is $g(x + c) = \cos\left(\frac{x + c}{2}\right)$: so $\cos\left(\frac{x}{2} + 1\right) = \cos\left(\frac{x + 2}{2}\right)$ is obtained from $\cos\left(\frac{x}{2}\right)$ by shifting it $2$ to the left.

> [!NOTA] Symmetries
> $y = -f(x)$ is symmetric to the graph of $f$ with respect to the $x$-axis; $y = f(-x)$ is symmetric to it with respect to the $y$-axis. An even function coincides with $f(-x)$; for an odd one $f(-x) = -f(x)$.

> [!TEST] Functions in the test questions
> In questions on the domain with a choice of four answers, try the “boundary” values of the options: a number that makes a denominator zero cannot be in the domain; a number that makes the radicand of an even root zero (not in a denominator) usually can. For even and odd, even in a multiple-choice question, compute $f(-x)$ for each option, or compare $f(1)$ and $f(-1)$ to rule options out quickly. A composite evaluated at a point gives a number: compute the inner function first. For translations: inside the argument, against the sign; outside, following the sign.

## 6.2 Examples of useful functions

### Constant function

> [!DEF] Constant function
> $f: \R \to \R$, $f(x) = k$, with $k$ a fixed real number: all the elements of the domain have the same image $k$. The graph is the horizontal line $y = k$.

A constant function is even, bounded and not injective; its range is the single value $k$. For example $f(x) = -2$ is a negative constant function: its graph lies entirely below the $x$-axis.

```grafico
titolo: Two constant functions: $y = 3$ and $y = -2$
x: -5 5
y: -3 4
f: 3 | $y = 3$ | n
f: -2 | rosso | $y = -2$ | s
```

### Piecewise functions

A function is **piecewise-defined** (*definita a tratti*) when it is given by different expressions on different intervals of the domain. It is written with a curly bracket:
$$
f(x) = \begin{cases} -x + 1 & \text{if } x < 1 \\ x^2 - 1 & \text{if } x \ge 1 \end{cases}
$$
To compute $f$ at a point, you first look at which interval $x$ falls in, then use the formula of that piece: $f(-2) = 2 + 1 = 3$, $f(0) = 1$, $f(1) = 1 - 1 = 0$, $f(2) = 4 - 1 = 3$. The graph is a piece of a line for $x < 1$ and a piece of a parabola for $x \ge 1$; here the two pieces join at the point $(1, 0)$ and the function is continuous. The range is $[0, +\infty)$, and $f$ is not injective, because $f(-2) = f(2) = 3$.

```grafico
titolo: The piecewise function $f(x) = -x + 1$ for $x < 1$, $f(x) = x^2 - 1$ for $x \ge 1$
x: -3 3
y: -1 5
f: -x + 1 | rosso | a=1
f: x^2 - 1 | rosso | da=1 | a=sqrt(6)
orizzontale: 3 | tratteggio | grigio
punto: 1 0 | rosso | $(1, 0)$ | se
punto: -2 3 | $(-2, 3)$ | no
punto: 2 3 | $(2, 3)$ | no
```

> [!TRAPPOLA] Overlapping conditions
> The intervals of the pieces must not assign two different values to the same $x$. If two conditions include the same point (for example “$x \le 0$” and “$x \ge 0$”), the two formulas must give the same value there. To tell which piece an endpoint belongs to, look where the equals sign is.

### Absolute value function

> [!DEF] Absolute value
> $$
> f(x) = |x| = \begin{cases} x & \text{if } x \ge 0 \\ -x & \text{if } x < 0 \end{cases}
> $$
> The graph is a “V” with its vertex at the origin, made up of the bisector $y = x$ for $x \ge 0$ and of $y = -x$ for $x < 0$. The function is even, has range $[0, +\infty)$, is decreasing on $(-\infty, 0]$ and increasing on $[0, +\infty)$.

> [!METODO] Graph of $y = |f(x)|$
> $$
> |f(x)| = \begin{cases} f(x) & \text{where } f(x) \ge 0 \\ -f(x) & \text{where } f(x) < 0 \end{cases}
> $$
> 1. Draw the graph of $y = f(x)$.
> 2. Leave the part that lies above the $x$-axis (or on it) as it is.
> 3. Flip the part that lies below upwards, symmetrically with respect to the $x$-axis.
>
> The result never goes below the $x$-axis.

> [!ESEMPIO] $y = |x^2 - 4|$
> The parabola $y = x^2 - 4$ lies below the $x$-axis for $-2 < x < 2$, with vertex $(0, -4)$. Flipping that piece gives an arc with its highest point at $(0, 4)$; outside $[-2, 2]$ the graph does not change.
> The graph lets you count the solutions of $|x^2 - 4| = k$: the line $y = 3$ cuts it at $4$ points ($x = \pm 1$ and $x = \pm\sqrt7$), the line $y = 4$ at $3$ points ($x = 0$ and $x = \pm 2\sqrt2$), the line $y = 5$ at $2$ points ($x = \pm 3$).

```grafico
titolo: $y = |x^2 - 4|$: the piece of the parabola below the $x$-axis is flipped over
x: -4 4
y: -4.5 5.5
f: x^2 - 4 | grigio | tratteggio | da=-3 | a=3 | $y = x^2 - 4$ | se
f: abs(x^2 - 4) | rosso | $y = \lvert x^2 - 4 \rvert$ | e
orizzontale: 3 | grigio | sottile | $y = 3$
punto: 0 4 | rosso | $(0, 4)$ | ne
```

### Linear function and direct proportionality

> [!DEF] Linear function
> $f: \R \to \R$, $f(x) = mx + q$, with $m$ and $q$ real: the graph is the line with slope $m$ and $y$-intercept $q$. If $q = 0$ it becomes $y = mx$ and the line passes through the origin.

> [!DEF] Direct proportionality
> Two quantities $x$ and $y$ are **directly proportional** if $y = kx$, with $k \ne 0$ constant, that is if the **ratio** $\frac{y}{x}$ is constant (for $x \ne 0$). If $x$ doubles, $y$ doubles; if $x$ triples, $y$ triples. The number $k$ is the **constant of proportionality** and the graph is a line through the origin.

Examples: the price of $x$ notebooks at €$3$ each is $y = 3x$, with constant $3$. In physics, from Newton's second law $F = ma$ (force equals mass times acceleration) it follows that, for the same mass, the acceleration is directly proportional to the force: doubling the force doubles the acceleration.

> [!TRAPPOLA] A line that does not pass through the origin is not proportionality
> A taxi that costs €$3$ at the start plus €$2$ per kilometre has cost $y = 2x + 3$: the relation is linear, but doubling the kilometres does not double the cost ($1$ km costs €$5$, $2$ km cost €$7$). It is not direct proportionality.

### The function $\frac{1}{x}$ and inverse proportionality

> [!DEF] Inverse proportionality
> Two quantities are **inversely proportional** if $y = \frac{k}{x}$, with $k \ne 0$ constant, that is if the **product** $xy = k$ is constant. If $x$ doubles, $y$ halves. The simplest case is
> $$
> f(x) = \frac{1}{x}, \qquad x \ne 0
> $$
> whose graph is the rectangular hyperbola referred to its asymptotes, $xy = 1$: the asymptotes are the Cartesian axes.

Properties of $\frac{1}{x}$: domain and range $\R \setminus \{0\}$; odd; injective; decreasing on $(-\infty, 0)$ and on $(0, +\infty)$ taken separately; not bounded.

> [!ESEMPIO] Time and speed
> To travel $120$ km: at $60$ km/h you need $2$ hours, at $40$ km/h $3$ hours, at $120$ km/h $1$ hour. The product of speed and time is always $120$: $t = \frac{120}{v}$, inverse proportionality. The same goes for $a = \frac{F}{m}$: for the same force, if the mass doubles the acceleration halves.

```grafico
titolo: Direct proportionality $y = 3x$ and inverse proportionality $y = \frac{12}{x}$, for $x > 0$
x: -0.6 8
y: -1.2 13
proporzioni: libere
f: 3x | da=0 | a=13/3 | $y = 3x$ | o
f: 12/x | rosso | da=12/13 | $y = \frac{12}{x}$ | ne
punto: 2 6 | $(2, 6)$ | e
```

### Fact sheet of the functions covered

| $f(x)$ | Domain | Range | Symmetry | Monotonicity |
|---|---|---|---|---|
| $k$ | $\R$ | $\{k\}$ | even (if $k = 0$ also odd) | constant |
| $mx + q$, $m \ne 0$ | $\R$ | $\R$ | odd if $q = 0$, otherwise none | increasing if $m > 0$, decreasing if $m < 0$ |
| $x^2$ and $|x|$ | $\R$ | $[0, +\infty)$ | even | decreasing on $(-\infty, 0]$, increasing on $[0, +\infty)$ |
| $x^3$ | $\R$ | $\R$ | odd | increasing |
| $\frac{1}{x}$ | $\R \setminus \{0\}$ | $\R \setminus \{0\}$ | odd | decreasing on $(-\infty, 0)$ and on $(0, +\infty)$ |
| $\sqrt{x}$ | $[0, +\infty)$ | $[0, +\infty)$ | none | increasing |

> [!TEST] Useful functions in the test questions
> To count the solutions of an equation like $|f(x)| = k$, draw the graph and count its intersections with the horizontal line $y = k$. To recognise a proportionality from a table of values: a constant ratio $\frac{y}{x}$ means direct, a constant product $xy$ means inverse, neither of the two means no proportionality. With piecewise functions, before computing always check which piece $x$ falls in.

## Exercises

::: esercizio base Domains
Find the domain of: a) $f(x) = \frac{2x + 1}{x^2 - 9}$; b) $g(x) = \sqrt{8 - 2x}$; c) $h(x) = \frac{\sqrt[3]{x - 5}}{x + 1}$; d) $k(x) = \sqrt{x^2 - 3x - 4}$.
::: soluzione
- a) $x^2 - 9 \ne 0$: $x \ne 3$ and $x \ne -3$. Domain $\R \setminus \{-3, 3\}$.
- b) $8 - 2x \ge 0$: $x \le 4$. Domain $(-\infty, 4]$.
- c) The cube root imposes no conditions; the denominator remains: $x \ne -1$.
- d) $x^2 - 3x - 4 \ge 0$, that is $(x - 4)(x + 1) \ge 0$: the parabola opens upwards and is positive outside the zeros. Domain $x \le -1$ or $x \ge 4$, that is $(-\infty, -1] \cup [4, +\infty)$.
:::

::: esercizio base Even or odd?
Decide whether these functions are even, odd or neither: $f(x) = x^4 - 2x^2$, $g(x) = x^3 - 4x$, $h(x) = x^2 + x$, $k(x) = |x| + x^2$, $l(x) = \frac{x}{x^2 + 4}$.
::: soluzione
All the domains are $\R$, which is symmetric.
- $f(-x) = x^4 - 2x^2 = f(x)$: even.
- $g(-x) = -x^3 + 4x = -(x^3 - 4x) = -g(x)$: odd.
- $h(-x) = x^2 - x$, neither $h(x)$ nor $-h(x)$ (for example $h(1) = 2$ and $h(-1) = 0$): neither even nor odd.
- $k(-x) = |-x| + (-x)^2 = |x| + x^2 = k(x)$: even.
- $l(-x) = \frac{-x}{x^2 + 4} = -l(x)$: odd.
:::

::: esercizio base Two composites
With $f(x) = x^2 + 1$ and $g(x) = 3x - 2$ compute $(f \circ g)(x)$, $(g \circ f)(x)$, $(f \circ g)(1)$ and $(g \circ f)(1)$.
::: soluzione
$(f \circ g)(x) = f(3x - 2) = (3x - 2)^2 + 1 = 9x^2 - 12x + 5$.

$(g \circ f)(x) = g(x^2 + 1) = 3(x^2 + 1) - 2 = 3x^2 + 1$.

$(f \circ g)(1) = f(g(1)) = f(1) = 2$ (check: $9 - 12 + 5 = 2$). $(g \circ f)(1) = g(f(1)) = g(2) = 4$ (check: $3 + 1 = 4$). The two values are different: composition is not commutative.
:::

::: esercizio base An inverse
Find the inverse of $f(x) = 4x - 3$ and check that $f^{-1}(f(2)) = 2$.
::: soluzione
$f$ is a non-horizontal line, so it is bijective from $\R$ to $\R$. From $y = 4x - 3$ you get $x = \frac{y + 3}{4}$; swapping the names, $f^{-1}(x) = \frac{x + 3}{4}$.

Check: $f(2) = 8 - 3 = 5$ and $f^{-1}(5) = \frac{8}{4} = 2$.
:::

::: esercizio base A translation
Describe how the graph of $y = (x + 1)^2 - 4$ is obtained from that of $y = x^2$; find the vertex, the zeros and the point on the $y$-axis.
::: soluzione
$x + 1$ inside the argument: $1$ to the left; $-4$ outside: $4$ down. The vertex moves from $(0, 0)$ to $(-1, -4)$.

Zeros: $(x + 1)^2 = 4$, that is $x + 1 = 2$ or $x + 1 = -2$: $x = 1$ and $x = -3$. $y$-axis: $(0 + 1)^2 - 4 = -3$, point $(0, -3)$.

```grafico
titolo: From $y = x^2$ to $y = (x + 1)^2 - 4$
x: -5 3
y: -5 4
f: x^2 | grigio | tratteggio | da=-2 | a=2
f: (x + 1)^2 - 4 | rosso | a=2
testo: 2.9 -4.5 | $y = (x + 1)^2 - 4$ | rosso | o
punto: -1 -4 | rosso | $V$ | s
punto: 1 0 | se
punto: -3 0 | so
punto: 0 -3 | se
```
:::

::: esercizio medio Domains with fractions and roots
Find the domain of $f(x) = \sqrt{\frac{x - 2}{x + 3}}$ and of $g(x) = \frac{\sqrt{x + 4}}{x - 1}$.
::: soluzione
$f$: you need $\frac{x - 2}{x + 3} \ge 0$, with $x \ne -3$. The numerator is $\ge 0$ for $x \ge 2$, the denominator is $> 0$ for $x > -3$; the fraction is positive or zero when they have the same sign: $x < -3$ or $x \ge 2$. The value $-3$ is excluded (it makes the denominator zero), $2$ is included (it makes the numerator zero).

$g$: $x + 4 \ge 0$ **and** $x - 1 \ne 0$, that is $x \ge -4$ with $x \ne 1$: domain $[-4, 1) \cup (1, +\infty)$.

```retta
titolo: Domain of $\sqrt{\frac{x - 2}{x + 3}}$: $x < -3$ or $x \ge 2$
da: -6 5
int: (-inf, -3)
int: [2, +inf)
```
:::

::: esercizio medio Zeros and sign
a) Find the zeros and the sign of $f(x) = x^3 - 4x^2 + 3x$. b) Find the zeros of $g(x) = \frac{x}{x + 1} - \frac{2}{x - 2}$.
::: soluzione
a) $f(x) = x(x^2 - 4x + 3) = x(x - 1)(x - 3)$: zeros $0$, $1$, $3$. With the sign chart of the three factors: $f(x) > 0$ for $0 < x < 1$ or $x > 3$; $f(x) < 0$ for $x < 0$ or $1 < x < 3$.

b) Domain: $x \ne -1$ and $x \ne 2$. With the common denominator $(x + 1)(x - 2)$, $g(x) = 0$ when $x(x - 2) - 2(x + 1) = 0$, that is $x^2 - 4x - 2 = 0$:
$$
x = \frac{4 \pm \sqrt{16 + 8}}{2} = \frac{4 \pm 2\sqrt6}{2} = 2 \pm \sqrt6
$$
Neither of the two values is $-1$ or $2$: the zeros are $2 + \sqrt6$ and $2 - \sqrt6$.
:::

::: esercizio medio A piecewise function
$$
f(x) = \begin{cases} x + 3 & \text{if } x < -1 \\ x^2 + 1 & \text{if } -1 \le x \le 1 \\ 2 & \text{if } x > 1 \end{cases}
$$
Compute $f(-3)$, $f(-1)$, $f(0)$ and $f(5)$; draw the graph; decide whether $f$ is continuous, what its range is, whether it is bounded and where it increases or decreases.
::: soluzione
$f(-3) = -3 + 3 = 0$; $f(-1) = 1 + 1 = 2$; $f(0) = 1$; $f(5) = 2$.

At $x = -1$ the first piece reaches $-1 + 3 = 2$, the same value as $f(-1)$; at $x = 1$ the second piece is $2$, like the third. There are no jumps: $f$ is continuous.

Range: the first piece gives all the values less than $2$, the second the values between $1$ and $2$, the third the value $2$. Range $(-\infty, 2]$: $f$ is bounded above (the maximum is $2$) but not below.

Increasing on $(-\infty, -1]$, decreasing on $[-1, 0]$, increasing on $[0, 1]$, constant on $[1, +\infty)$. It is not injective: $f(1) = f(5) = 2$.

```grafico
titolo: The piecewise function of the exercise
x: -5 4
y: -2 4
f: x + 3 | rosso | a=-1
f: x^2 + 1 | rosso | da=-1 | a=1
f: 2 | rosso | da=1
punto: -1 2 | $(-1, 2)$ | no
punto: 0 1 | $(0, 1)$ | se
punto: -3 0 | $(-3, 0)$ | no
```
:::

::: esercizio medio Counting solutions with the absolute value
Draw $y = |x^2 - 2x - 3|$ and use the graph to say how many solutions the equation $|x^2 - 2x - 3| = k$ has for $k = 2$, $k = 4$, $k = 5$.
::: soluzione
$x^2 - 2x - 3 = (x - 3)(x + 1)$: zeros $-1$ and $3$, vertex $(1, -4)$. Between $-1$ and $3$ the parabola lies below the axis: flipped over, it becomes an arc with its highest point at $(1, 4)$.
- $k = 2$: the line $y = 2$ cuts the two outer branches and the arc twice: $4$ solutions.
- $k = 4$: it touches the arc only at its highest point and cuts the two outer branches: $3$ solutions.
- $k = 5$: it passes above the arc and cuts only the outer branches: $2$ solutions.

Algebraic check for $k = 4$: $x^2 - 2x - 3 = 4$ gives $x = 1 \pm 2\sqrt2$; $x^2 - 2x - 3 = -4$ gives $(x - 1)^2 = 0$, that is $x = 1$.

```grafico
titolo: $y = |x^2 - 2x - 3|$ and the lines $y = 2$, $y = 4$, $y = 5$
x: -3 5
y: -5 7
proporzioni: libere
f: abs(x^2 - 2x - 3) | rosso
f: x^2 - 2x - 3 | grigio | tratteggio | da=-1 | a=3
orizzontale: 2 | grigio | sottile | $y = 2$
orizzontale: 4 | grigio | sottile | $y = 4$
orizzontale: 5 | grigio | sottile | $y = 5$
```
:::

::: esercizio medio A distance-time graph
The graph shows the distance $s$ from home, in km, of a car as a function of time $t$, in hours. Describe the journey; state where the function is increasing, decreasing or constant; is it continuous? Is it injective? Is it bounded?

```grafico
titolo: Distance from home $s$ (km) as a function of time $t$ (hours)
x: -0.4 5
y: -8 70
nomi: t s
proporzioni: libere
passo-y: 10
segmento: 0 0 1 60 | rosso
segmento: 1 60 2 60 | rosso
segmento: 2 60 3 20 | rosso
segmento: 3 20 4 20 | rosso
```
::: soluzione
In the first hour the car moves away from home up to $60$ km: the function is increasing on $[0, 1]$. From the first to the second hour it is stationary: constant on $[1, 2]$. Then it comes back to $20$ km from home: decreasing on $[2, 3]$. Finally it stops again: constant on $[3, 4]$.

It is continuous: the position cannot “jump”, and the graph can be drawn without lifting the pen. It is not injective: for example the distance of $40$ km is reached twice, on the way out and on the way back. It is bounded: $0 \le s \le 60$.
:::

::: esercizio medio Using periodicity
$f$ is periodic with period $4$, with $f(1) = 3$ and $f(2) = -1$. Compute $f(9)$, $f(-2)$, $f(14)$ and $f(-7)$.
::: soluzione
You can add or subtract the period as many times as you like:
$f(9) = f(1 + 2 \cdot 4) = f(1) = 3$; $f(-2) = f(2 - 4) = f(2) = -1$; $f(14) = f(2 + 3 \cdot 4) = f(2) = -1$; $f(-7) = f(1 - 2 \cdot 4) = f(1) = 3$.
:::

::: esercizio test Proportionality from a table
For each row of values of $y$, decide whether $y$ is directly proportional to $x$, inversely proportional, or neither; if there is a law, write it.

| $x$ | $2$ | $4$ | $5$ | $10$ |
|---|---|---|---|---|
| $y$, row A | $10$ | $5$ | $4$ | $2$ |
| $y$, row B | $5$ | $10$ | $12.5$ | $25$ |
| $y$, row C | $7$ | $11$ | $13$ | $23$ |

::: soluzione
- A: the products $xy$ are always $20$: inverse proportionality, $y = \frac{20}{x}$. For example for $x = 8$ you would have $y = \frac{20}{8} = 2.5$.
- B: the ratios $\frac{y}{x}$ are always $2.5$: direct proportionality, $y = \frac{5}{2}x$.
- C: neither the ratios ($\frac{7}{2} \ne \frac{11}{4}$) nor the products ($14 \ne 44$) are constant. The values grow by $2$ for each unit of $x$: $y = 2x + 3$, linear but not proportional.
:::

::: esercizio test Bounded or not?
Knowing that $\cos x$ takes all and only the values of the interval $[-1, 1]$, decide whether these functions are bounded and find their range: a) $\cos(x + 5)$; b) $\cos x - 4$; c) $\frac{1}{\cos x + 2}$; d) $\frac{1}{\cos x - 1}$.
::: soluzione
- a) It is a horizontal translation: the values taken do not change. Range $[-1, 1]$, bounded.
- b) Translation downwards by $4$: range $[-5, -3]$, bounded.
- c) $\cos x + 2$ takes the values of $[1, 3]$, always positive; the reciprocal goes from $\frac{1}{3}$ (when the denominator is $3$) to $1$ (when it is $1$). Range $\left[\frac{1}{3}, 1\right]$, bounded.
- d) Where $\cos x = 1$ the denominator is zero and the function is not defined. Elsewhere $\cos x - 1$ takes all the values of $[-2, 0)$, always negative. The reciprocal is $-\frac{1}{2}$ when the denominator is $-2$; when the denominator gets close to $0$, the reciprocal is negative and as large as you like in absolute value. Range $\left(-\infty, -\frac{1}{2}\right]$: the function is bounded above (the maximum is $-\frac{1}{2}$) but not below.
:::

::: esercizio test Inverse of a rational function
Consider $f(x) = \frac{2x - 1}{x + 3}$. Find the domain, the range and the inverse.
::: soluzione
Domain: $x \ne -3$. From $y = \frac{2x - 1}{x + 3}$: $y(x + 3) = 2x - 1$, that is $xy + 3y = 2x - 1$, so $x(y - 2) = -3y - 1$ and
$$
x = \frac{-3y - 1}{y - 2} = \frac{3y + 1}{2 - y}
$$
You can solve for $x$ for every $y \ne 2$, and in only one way: the range of $f$ is $\R \setminus \{2\}$ and $f$ is bijective from $\R \setminus \{-3\}$ to $\R \setminus \{2\}$. Swapping the names: $f^{-1}(x) = \frac{3x + 1}{2 - x}$, defined for $x \ne 2$.

Check at a point: $f(0) = -\frac{1}{3}$ and $f^{-1}\left(-\frac{1}{3}\right) = \frac{-1 + 1}{2 + \frac{1}{3}} = 0$.
:::

::: esercizio test The hidden domain of composites
With $f(x) = \sqrt{x}$ and $g(x) = 4 - x^2$, write $f \circ g$ and $g \circ f$ with their domains.
::: soluzione
$(f \circ g)(x) = \sqrt{4 - x^2}$: you need $4 - x^2 \ge 0$, that is $-2 \le x \le 2$.

$(g \circ f)(x) = 4 - (\sqrt{x})^2 = 4 - x$, but only where $\sqrt{x}$ exists: the domain is $x \ge 0$. The simplified formula $4 - x$ “hides” a condition that comes from the inner function.
:::

::: esercizio test Translations, domain and range
$f$ has domain $[0, 5]$ and range $[-3, 4]$. Find the domain and range of $g(x) = f(x + 2) - 1$.
::: soluzione
The graph of $g$ is that of $f$ shifted $2$ to the left and $1$ down. Domain: you need $0 \le x + 2 \le 5$, that is $-2 \le x \le 3$: $[-2, 3]$. Range: every value decreases by $1$: $[-4, 3]$.
:::

::: esercizio test Which formula?
The graph represents one of these three functions. Which one? Justify your answer by ruling out the others.
$$
f_1(x) = \begin{cases} x + 2 & \text{if } x < 0 \\ 2 - x^2 & \text{if } x \ge 0 \end{cases}
$$
$$
f_2(x) = \begin{cases} x + 2 & \text{if } x < 0 \\ x^2 + 2 & \text{if } x \ge 0 \end{cases}
$$
$$
f_3(x) = \begin{cases} -x + 2 & \text{if } x < 0 \\ 2 - x^2 & \text{if } x \ge 0 \end{cases}
$$

```grafico
titolo: Which function?
x: -4 3
y: -3 4
f: x + 2 | rosso | a=0
f: 2 - x^2 | rosso | da=0
```
::: soluzione
For $x < 0$ the graph is a line that **rises** and passes through $(-2, 0)$: it is $y = x + 2$ (the line $y = -x + 2$ of $f_3$ falls). For $x \ge 0$ it is a parabola opening **downwards** with vertex $(0, 2)$: it is $y = 2 - x^2$ (the $x^2 + 2$ of $f_2$ opens upwards). The graph is that of $f_1$. Check: $f_1(1) = 1$ and $f_1(2) = -2$, as you can read from the figure.
:::

## Self-check quiz

```quiz
D: What is the domain of $f(x) = \frac{\sqrt{x + 2}}{x - 3}$?
+ $[-2, 3) \cup (3, +\infty)$
- $(-2, 3) \cup (3, +\infty)$
- $[-2, +\infty)$
- $\R \setminus \{3\}$
= You need $x + 2 \ge 0$ (the root is not in a denominator, so $-2$ is included) and $x - 3 \ne 0$. The other options exclude $-2$, forget the denominator or forget the root.

D: Given $f(x) = 2x^2 - 3x$, what is $f(-2)$?
N: 14
= $f(-2) = 2 \cdot (-2)^2 - 3 \cdot (-2) = 8 + 6 = 14$. Typical mistake: writing $-2^2 = -4$ instead of $(-2)^2 = 4$.

D: With $f(x) = x - 1$ and $g(x) = x^2$, the function $(g \circ f)(x)$ is
+ $(x - 1)^2$
- $x^2 - 1$
- $x^3 - x^2$
- $x^2 + x - 1$
= First $f$, then $g$: $g(x - 1) = (x - 1)^2$. $x^2 - 1$ is $(f \circ g)(x)$, $x^3 - x^2$ is the product $g(x) \cdot f(x)$, $x^2 + x - 1$ is the sum.

D: If $f(x) = 3x + 6$, what is $f^{-1}(9)$?
N: 1
= $f^{-1}(9)$ is the $x$ for which $f(x) = 9$: $3x + 6 = 9$, so $x = 1$. It must not be confused with $\frac{1}{f(9)} = \frac{1}{33}$.

D: Which of these functions are odd?
+ $x^3 + x$
+ $\frac{1}{x}$
+ $x|x|$
- $x^2 + x$
- $|x|$
= Compute $f(-x)$: $(-x)^3 + (-x) = -(x^3 + x)$; $\frac{1}{-x} = -\frac{1}{x}$; $(-x)|-x| = -x|x|$. On the other hand, $x^2 + x$ is neither even nor odd and $|x|$ is even.

D: True or false: the function $f(x) = x^2$, from $\R$ to $\R$, is injective.
- True
+ False
= A counterexample is enough: $f(-3) = f(3) = 9$.

D: True or false: $f(x) = \frac{1}{x}$ is decreasing on its whole domain.
- True
+ False
= It is decreasing on $(-\infty, 0)$ and on $(0, +\infty)$ taken separately, but $-1 < 1$ and $f(-1) = -1 < f(1) = 1$.

D: The graph of $y = (x - 3)^2 + 1$ is obtained from that of $y = x^2$ by shifting it
+ $3$ to the right and $1$ up
- $3$ to the left and $1$ up
- $3$ to the right and $1$ down
- $3$ to the left and $1$ down
= Inside the argument there is $x - 3$: $3$ to the right (against the sign); outside there is $+1$: $1$ up. The vertex goes to $(3, 1)$.

D: The range of $f(x) = |x - 2| - 3$ is
+ $[-3, +\infty)$
- $[0, +\infty)$
- $[-2, +\infty)$
- $\R$
= $|x - 2|$ takes all the values $\ge 0$; subtracting $3$ you get all the values $\ge -3$. The graph is a “V” with its vertex at $(2, -3)$.

D: $f$ is periodic with period $5$ and $f(2) = 7$. What is $f(-8)$?
N: 7
= $-8 = 2 - 2 \cdot 5$, so $f(-8) = f(2) = 7$.

D: Which statements about $f(x) = \frac{1}{x^2 + 1}$ are true?
+ It is bounded.
+ It is even.
- It is injective.
- It is increasing on the whole of $\R$.
- It takes the value $0$.
= $0 < f(x) \le 1$ for every $x$: it is bounded, but the value $0$ is never reached (the numerator is $1$). $f(-x) = f(x)$, so it is even and not injective: $f(-1) = f(1) = \frac{1}{2}$. It increases for $x \le 0$ and decreases for $x \ge 0$.

D: Which of these laws expresses a direct proportionality between $x$ and $y$?
+ $y = 4x$
- $y = 4x + 1$
- $y = \frac{4}{x}$
- $xy = 4$
= Direct proportionality means a constant ratio $\frac{y}{x}$: a line through the origin. $y = 4x + 1$ is linear but does not pass through the origin; the last two options are the same inverse proportionality.

D: $x$ and $y$ are inversely proportional and for $x = 4$ you have $y = 6$. What is $y$ for $x = 8$?
N: 3
= The product $xy = 24$ is constant: for $x = 8$, $y = \frac{24}{8} = 3$ ($x$ doubles, $y$ halves). If you answered $12$, you used direct proportionality.

D: What is the domain of $f(x) = \frac{\sqrt[3]{x - 1}}{x^2 + 4}$?
+ $\R$
- $x \ge 1$
- $x \ne 2$ and $x \ne -2$
- $x > 1$
= The cube root is defined for every real number, and $x^2 + 4 \ge 4$ is never zero. The option $x \ne \pm 2$ confuses $x^2 + 4$ with $x^2 - 4$; the others treat the cube root like a square root.

D: Let $f(x) = x^2$ for $x < 1$ and $f(x) = 3 - x$ for $x \ge 1$. What is $f(1) + f(-2)$?
N: 6
= $1$ is in the second piece: $f(1) = 3 - 1 = 2$. $-2$ is in the first: $f(-2) = (-2)^2 = 4$. The sum is $6$.

D: How many real solutions does the equation $|x^2 - 1| = 1$ have?
+ $3$
- $2$
- $4$
- $1$
= The graph of $|x^2 - 1|$ has a flipped arc with its highest point at $(0, 1)$: the line $y = 1$ touches it there and cuts the two outer branches. Algebraically: $x^2 - 1 = 1$ gives $x = \pm\sqrt2$ and $x^2 - 1 = -1$ gives $x = 0$.
```

## Checklist

```checklist
I can explain what domain, codomain, image (range) and preimage are
I can find the domain of functions with fractions and roots
I can recognise whether a curve is the graph of a function
I can find the zeros and sign of a function and read them on the graph
I can decide whether a function is injective, surjective or bijective
I can restrict the domain of a function and compute its inverse
I can compute $g \circ f$ and $f \circ g$, also at a point, with their domains
I can recognise whether a function is even, odd or neither
I can use the period to compute the values of a periodic function
I can say where a function increases or decreases and whether it is bounded
I can explain in words when a function is continuous and recognise a jump
I can draw $f(x \pm c)$ and $f(x) \pm c$ starting from the graph of $f$
I can draw constant functions, piecewise functions, $|x|$ and $|f(x)|$
I can tell direct proportionality from inverse proportionality
```
