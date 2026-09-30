---
modulo: 2
titolo: "Polynomials and factorisation"
breve: "Monomials and polynomials, operations, special products, division and Ruffini's rule, factorisation and algebraic fractions."
ore: 6
unita:
  - "2.1 Polynomials and factorisation"
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/moduli/02-polinomi.md
---

## In brief

- A **polynomial** in $x$ is a sum of terms of the form $a x^k$ with natural-number exponents; the **degree** is the highest exponent that appears with a non-zero coefficient.
- Sum and difference: you add like terms. Product: every term times every term, and the degrees add up.
- The **special products** must be known by heart in both directions: from left to right to expand, from right to left to factorise.
- **Ruffini's rule** (synthetic division) divides a polynomial by $x - a$ in a few steps; by the **remainder theorem** the remainder is the value of the polynomial at $a$.
- $x - a$ is a factor of $P(x)$ if and only if $P(a) = 0$. Rational roots are searched for among the fractions $\pm\frac{\text{divisor of the constant term}}{\text{divisor of the leading coefficient}}$, with both the plus and the minus sign.
- To factorise, follow an order: taking out the common factor, special products, the sum-and-product trinomial, factorising by grouping, Ruffini. Then check whether the factors found can be factorised further.
- Not all polynomials can be factorised: $x^2 + 1$ and $x^2 + x + 1$ have no first-degree factors.
- In **algebraic fractions** you cancel only factors, never terms of a sum, and you write the domain conditions (denominator different from zero).

## 2.1 Polynomials and factorisation

### Monomials

> [!DEF] Monomial
> A **monomial** is the product of a number, the **coefficient**, and one or more letters with natural-number exponents, the **literal part**. Examples: $-5x^3$, $\tfrac23 x^2 y$, $7$ (a number on its own is a monomial with no letters).
> The **degree** of a monomial is the sum of the exponents of its letters: $-5x^3$ has degree 3, $\tfrac23 x^2 y$ has degree $2 + 1 = 3$, $7$ has degree 0.
> Two monomials are **like** (similar) if they have the same literal part: $4x^2$ and $-x^2$ are like monomials, $4x^2$ and $4x^3$ are not.

> [!PROP] Operations with monomials
> - You can add only like monomials, by adding the coefficients: $4x^2 - x^2 = 3x^2$. On the other hand, $4x^2 + 4x^3$ stays as it is.
> - In a product you multiply the coefficients and **add** the exponents of the same letters: $(3x^2)(-2x^5) = -6x^7$.
> - In a power you raise the coefficient to the power and **multiply** the exponents: $(-2x^3)^2 = 4x^6$.
> - In a division you divide the coefficients and **subtract** the exponents: $12x^5 : 4x^2 = 3x^3$.

### What a polynomial is

The name comes from Greek and means "many terms": a polynomial is a sum of monomials.

> [!DEF] Polynomial in one variable
> A **polynomial** in the variable $x$ is an expression of the form
> $$
> P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0 \qquad n \in \N
> $$
> - $a_n, a_{n-1}, \dots, a_0$ are the **coefficients**: numbers taken from a number set ($\Z$, $\Q$ or $\R$).
> - If $a_n \ne 0$, $n$ is the **degree** of the polynomial and $a_n$ is the **leading coefficient** (the coefficient of the highest-degree term).
> - $a_0$ is the **constant term**.

A polynomial is **ordered** if its terms are written in decreasing powers, and it is **complete** if all the powers of $x$ are present, from the highest degree down to the constant term. A missing term has coefficient $0$: $4x^3 - x + 2 = 4x^3 + 0x^2 - x + 2$. In division and in Ruffini's rule these zeros must be written.

> [!ESEMPIO] Recognising a polynomial
> - $3 - x + 2x^4$: polynomial of degree 4. Ordered, it becomes $2x^4 - x + 3$; leading coefficient $2$, constant term $3$; it is not complete ($x^3$ and $x^2$ are missing).
> - $\tfrac{x^2}{5} - \sqrt3\,x$: polynomial of degree 2 with constant term $0$. The coefficients ($\tfrac15$ and $-\sqrt3$) can be fractions or irrational numbers: all that matters is that the **exponents** of $x$ are natural numbers.
> - $x^3 + \tfrac4x$: **not** a polynomial, because $\tfrac4x = 4x^{-1}$ has a negative exponent.
> - $x^2 - 2\sqrt{x}$: **not** a polynomial, because $\sqrt{x} = x^{1/2}$ has a fractional exponent.
> - $-6$: polynomial of degree 0, that is, a constant.

The **value** of a polynomial at a number $a$ is obtained by substituting $a$ for $x$, and is written $P(a)$. If $P(x) = 2x^3 - x + 5$, then $P(-1) = 2(-1)^3 - (-1) + 5 = -2 + 1 + 5 = 4$. Always put the negative numbers you substitute in brackets.

> [!PROP] Identity principle for polynomials
> Two polynomials are equal, that is, they give the same value for every $x$, if and only if they have the same coefficients, term by term.

> [!ESEMPIO] Finding unknown coefficients
> For which numbers $a$ and $b$ does $(x + a)^2 = x^2 + 6x + b$ hold for every $x$?
> I expand the left-hand side: $x^2 + 2ax + a^2 = x^2 + 6x + b$. I compare the coefficients of the same degree: $2a = 6$ and $a^2 = b$. So $a = 3$ and $b = 9$.

> [!NOTA] Polynomials in several letters
> There are also polynomials in several variables, such as $x^2 - 3xy + y^2$: the degree is the highest of the degrees of its monomials (here 2). The rules for calculating and factorising are the same.

### Sum and difference

> [!METODO] Adding and subtracting polynomials
> 1. Remove the brackets: if there is a $+$ in front, the signs stay the same; if there is a $-$, **all** the signs inside the bracket change.
> 2. Group like terms (same exponent of $x$) and add their coefficients.

> [!ESEMPIO] Sum and difference
> $A(x) = 4x^3 - 2x^2 + 5$ and $B(x) = -x^3 + 6x^2 - 3x - 1$.
> $$
> A + B = (4 - 1)x^3 + (-2 + 6)x^2 - 3x + (5 - 1) = 3x^3 + 4x^2 - 3x + 4
> $$
> $$
> A - B = 4x^3 - 2x^2 + 5 + x^3 - 6x^2 + 3x + 1 = 5x^3 - 8x^2 + 3x + 6
> $$

The degree of a sum is at most the higher of the degrees of the two polynomials added, but it can also drop: $(x^2 + x) + (-x^2 + 1) = x + 1$.

### Product

> [!METODO] Multiplying two polynomials
> Multiply **every** term of the first by **every** term of the second (distributive property), then add like terms. The degree of the product is the **sum** of the degrees.

> [!ESEMPIO] A product, worked out and checked
> $$
> (2x - 3)(x^2 + 4x - 1) = 2x^3 + 8x^2 - 2x - 3x^2 - 12x + 3 = 2x^3 + 5x^2 - 14x + 3
> $$
> Quick check with $x = 1$: on the left $(2 - 3)(1 + 4 - 1) = -4$, on the right $2 + 5 - 14 + 3 = -4$. The two values match.

### Special products

> [!PROP] The special products
> | name | formula |
> |---|---|
> | square of a binomial | $(A \pm B)^2 = A^2 \pm 2AB + B^2$ |
> | sum times difference | $(A + B)(A - B) = A^2 - B^2$ |
> | cube of a binomial | $(A \pm B)^3 = A^3 \pm 3A^2B + 3AB^2 \pm B^3$ |
> | square of a trinomial | $(A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2AC + 2BC$ |
> | sum of cubes | $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$ |
> | difference of cubes | $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$ |
>
> $A^2 - AB + B^2$ and $A^2 + AB + B^2$ are called **false squares** (*falsi quadrati*): they look like the expansion of the square of a binomial, but the middle term is $AB$ instead of $2AB$.

The symbol $\pm$ ("plus or minus") sums up two formulas in one: the one with all the upper signs and the one with all the lower signs. In the formulas, $A$ and $B$ can be anything: numbers, $x$, $3x$, $x^2$…

> [!ESEMPIO] Expansions
> - $(3x - 2)^2 = 9x^2 - 12x + 4$: the middle term is twice the product, $2 \cdot 3x \cdot (-2) = -12x$.
> - $(2x + 5)(2x - 5) = 4x^2 - 25$.
> - $(x + 2)^3 = x^3 + 3 \cdot x^2 \cdot 2 + 3 \cdot x \cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8$.
> - $(x - y + 1)^2 = x^2 + y^2 + 1 - 2xy + 2x - 2y$ (square of a trinomial with $B = -y$).

> [!TRAPPOLA] The forgotten middle term
> $(x + 3)^2$ is not $x^2 + 9$: $6x$ is missing. And $(x - 3)^2 = x^2 - 6x + 9$ has a positive $+9$, because it is $(-3)^2$.
> $(A - B)^2 = (B - A)^2$, because squaring cancels the sign; on the other hand, $(A - B)^3 = -(B - A)^3$.

> [!NOTA] Pascal's triangle (*triangolo di Tartaglia*)
> The coefficients of $(A + B)^n$ can be read on the rows of Pascal's triangle, in which each number is the sum of the two above it: $1\ \ 1$, then $1\ \ 2\ \ 1$, then $1\ \ 3\ \ 3\ \ 1$, then $1\ \ 4\ \ 6\ \ 4\ \ 1$. For example $(A + B)^4 = A^4 + 4A^3B + 6A^2B^2 + 4AB^3 + B^4$.

### Polynomial division

> [!PROP] Division with remainder
> Given $A(x)$ (the **dividend**) and $B(x)$ (the **divisor**, non-zero), there exist two unique polynomials $Q(x)$, the **quotient**, and $R(x)$, the **remainder**, such that
> $$
> A(x) = B(x) \cdot Q(x) + R(x) \qquad \text{with degree of } R < \text{degree of } B
> $$
> If $R(x) = 0$, $A$ is said to be **divisible** by $B$, and $B$ is a **factor** of $A$.

> [!METODO] Long division
> 1. Order the dividend and the divisor by decreasing powers and complete the dividend with zeros.
> 2. Divide the first term of the dividend by the first term of the divisor: you get the first term of the quotient.
> 3. Multiply this term by the whole divisor and **subtract** the result from the dividend.
> 4. Repeat with the polynomial obtained, until its degree becomes less than that of the divisor: that is the remainder.

> [!ESEMPIO] Dividing $x^3 + 2x^2 - 5x + 7$ by $x^2 - x + 1$
> - $x^3 : x^2 = x$ is the first term of the quotient. $x \cdot (x^2 - x + 1) = x^3 - x^2 + x$. I subtract: $(x^3 + 2x^2 - 5x + 7) - (x^3 - x^2 + x) = 3x^2 - 6x + 7$.
> - $3x^2 : x^2 = 3$. $3 \cdot (x^2 - x + 1) = 3x^2 - 3x + 3$. I subtract: $(3x^2 - 6x + 7) - (3x^2 - 3x + 3) = -3x + 4$.
> - $-3x + 4$ has degree 1, less than 2: I stop.
>
> Quotient $Q(x) = x + 3$, remainder $R(x) = -3x + 4$. Check: $(x^2 - x + 1)(x + 3) + (-3x + 4) = x^3 + 2x^2 - 5x + 7$.

### Ruffini's rule

When the divisor is of the first degree, of the form $x - a$, the division is much quicker with **Ruffini's rule**.

> [!METODO] Dividing $P(x)$ by $x - a$ with Ruffini's rule
> 1. Write in a row the coefficients of $P(x)$, ordered and complete (with zeros in place of the missing terms); separate the constant term with a bar.
> 2. At the bottom left write $a$, the number that makes the divisor **zero**: for $x - 2$ write $2$, for $x + 3$ write $-3$.
> 3. Bring the first coefficient down to the last row.
> 4. Multiply it by $a$, write the product under the next coefficient and add down the column. Repeat up to the last column.
> 5. In the last row, read off the coefficients of the quotient, whose degree is one less than that of $P$, and, after the bar, the remainder.

> [!ESEMPIO] Dividing $3x^3 - 5x^2 + 4$ by $x - 2$
> The complete dividend is $3x^3 - 5x^2 + 0x + 4$: coefficients $3,\ -5,\ 0,\ 4$. The divisor $x - 2$ is zero for $x = 2$.
> $$
> \begin{array}{c|ccc|c}
>  & 3 & -5 & 0 & 4 \\
> 2 &  & 6 & 2 & 4 \\
> \hline
>  & 3 & 1 & 2 & 8
> \end{array}
> $$
> Steps: bring down $3$; $3 \cdot 2 = 6$ and $-5 + 6 = 1$; $1 \cdot 2 = 2$ and $0 + 2 = 2$; $2 \cdot 2 = 4$ and $4 + 4 = 8$.
> Quotient $3x^2 + x + 2$, remainder $8$. That is, $3x^3 - 5x^2 + 4 = (x - 2)(3x^2 + x + 2) + 8$.

> [!ESEMPIO] Divisor of the form $x + a$: dividing $x^4 - 1$ by $x + 1$
> Coefficients $1,\ 0,\ 0,\ 0,\ -1$ ($x^3$, $x^2$ and $x$ are missing). The divisor is zero for $x = -1$.
> $$
> \begin{array}{c|cccc|c}
>  & 1 & 0 & 0 & 0 & -1 \\
> -1 &  & -1 & 1 & -1 & 1 \\
> \hline
>  & 1 & -1 & 1 & -1 & 0
> \end{array}
> $$
> Quotient $x^3 - x^2 + x - 1$, remainder $0$: $x^4 - 1 = (x + 1)(x^3 - x^2 + x - 1)$.

> [!NOTA] Why the rule works
> Ruffini's rule is long division written in compact form: the numbers in the last row are the coefficients of the quotient, found one after the other as in the division. In the division, at each step you subtract a multiple of $x - a$: subtracting $q \cdot (x - a)$ means subtracting $qx$ and **adding** $q \cdot a$. That is why in the scheme you multiply by $a$ and add.

> [!TRAPPOLA] Mistakes with Ruffini's rule
> - Forgetting the zeros for the missing terms: the whole quotient comes out wrong.
> - Getting the sign of $a$ wrong: to divide by $x + 3$ you write $-3$, not $3$.
> - Misreading the result: the quotient has degree **one less** than the dividend and the last number is the remainder, not a coefficient.

> [!NOTA] Divisors such as $2x - 1$
> Ruffini's rule works with divisors of the form $x - a$. To divide by $2x - 1 = 2\left(x - \tfrac12\right)$ you can divide by $x - \tfrac12$ (with $a = \tfrac12$) and then divide the quotient obtained by 2; the remainder does not change.

### Remainder theorem and factor theorem

> [!PROP] Remainder theorem
> The remainder of the division of $P(x)$ by $x - a$ is $P(a)$.

The reason: $P(x) = (x - a) \cdot Q(x) + R$, where $R$ is a number (the remainder has a lower degree than the divisor $x - a$, whose degree is 1). Substituting $x = a$, the first part becomes zero and you are left with $P(a) = R$. In the earlier example: $3 \cdot 2^3 - 5 \cdot 2^2 + 4 = 24 - 20 + 4 = 8$, exactly the remainder found with Ruffini's rule.

> [!PROP] Factor theorem (Ruffini's theorem)
> $P(x)$ is divisible by $x - a$ if and only if $P(a) = 0$.
> A number $a$ such that $P(a) = 0$ is called a **root** (or **zero**) of the polynomial.

> [!ESEMPIO] Finding a parameter
> For which value of $k$ is the polynomial $P(x) = 2x^3 - x^2 + kx + 6$ divisible by $x + 2$?
> The divisor is zero for $x = -2$, so you need $P(-2) = 0$:
> $$
> 2(-8) - 4 - 2k + 6 = 0 \quad\Longrightarrow\quad -14 - 2k = 0 \quad\Longrightarrow\quad k = -7
> $$
> Check: $2x^3 - x^2 - 7x + 6$ at $-2$ equals $-16 - 4 + 14 + 6 = 0$.

### Factorising: where to start

**Factorising** a polynomial (in Italian *scomporre* or *fattorizzare*) means writing it as a product of polynomials of lower degree. A polynomial that cannot be factorised is called **irreducible**. The factorised form is used to simplify algebraic fractions, to solve equations and inequalities (modules 3 and 4) and to study the sign of an expression.

> [!METODO] Factorisation strategy
> 1. **Taking out the common factor**: is there a factor common to all the terms? Take it out first.
> 2. Count the terms that remain:
>    - **2 terms**: difference of two squares, sum or difference of cubes;
>    - **3 terms**: square of a binomial, sum-and-product trinomial (also with a leading coefficient other than 1);
>    - **4 terms**: cube of a binomial, or factorising by grouping.
> 3. If nothing works: **Ruffini**, looking for a root among the rational candidates.
> 4. Check every factor obtained: can it be factorised further? You stop when all the factors are irreducible.
> 5. Check the result: multiply it back out, or compare the values at a point (for example $x = 1$ or $x = 0$).

The table sums up which method to try by looking at the form of the polynomial.

| what it looks like | method | example |
|---|---|---|
| a factor common to all the terms | taking out the common factor | $6x^3 - 9x^2 = 3x^2(2x - 3)$ |
| two squares separated by a minus sign | difference of two squares | $4x^2 - 9 = (2x - 3)(2x + 3)$ |
| two cubes | sum or difference of cubes | $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$ |
| three terms: two squares and twice their product | square of a binomial | $x^2 + 8x + 16 = (x + 4)^2$ |
| three terms of the form $x^2 + Sx + P$ | sum and product | $x^2 + x - 6 = (x + 3)(x - 2)$ |
| four terms: two cubes and the two middle terms | cube of a binomial | $x^3 + 3x^2 + 3x + 1 = (x + 1)^3$ |
| four terms with factors common to pairs of terms | factorising by grouping | $x^3 + x^2 + 2x + 2 = (x + 1)(x^2 + 2)$ |
| none of the previous cases | Ruffini | $x^3 - 7x + 6 = (x - 1)(x - 2)(x + 3)$ |

> [!ESEMPIO] Three factorisations in several steps
> - $x^5 - x = x(x^4 - 1) = x(x^2 - 1)(x^2 + 1) = x(x - 1)(x + 1)(x^2 + 1)$: taking out the common factor, then two differences of squares one after the other; $x^2 + 1$ is irreducible and stays as it is.
> - $3x^3 - 12x^2 + 12x = 3x(x^2 - 4x + 4) = 3x(x - 2)^2$: taking out the common factor, then the square of a binomial.
> - $-x^2 + 6x - 9 = -(x^2 - 6x + 9) = -(x - 3)^2$: when the first term is negative it is best to take out the minus sign, so that you can recognise the special product inside the bracket.

> [!TRAPPOLA] Stopping too early
> $2x^2 - 8 = 2(x^2 - 4)$ is not yet fully factorised: $x^2 - 4$ is a difference of two squares, so $2x^2 - 8 = 2(x - 2)(x + 2)$. After each step, ask yourself whether the factors obtained can be factorised further.

### Taking out the common factor and grouping

> [!METODO] Taking out the common factor
> If all the terms have a common factor, you bring it out in front (in Italian this is also called **raccoglimento a fattor comune**): $AB + AC = A(B + C)$. Usually you take out the gcd of the coefficients times the power of $x$ with the lowest exponent.

> [!ESEMPIO] Taking out common factors
> - $6x^3 - 9x^2 + 3x = 3x(2x^2 - 3x + 1)$. Watch the last term: $3x : 3x = 1$, not $0$. The trinomial can be factorised further (you will see how later on): $2x^2 - 3x + 1 = (2x - 1)(x - 1)$, so in the end $6x^3 - 9x^2 + 3x = 3x(2x - 1)(x - 1)$.
> - $5x^4 + 10x^2 = 5x^2(x^2 + 2)$.
> - $3x(x - 2) + 5(x - 2) = (x - 2)(3x + 5)$: you can also take out a factor that is a polynomial.

> [!METODO] Factorising by grouping
> If there is no factor common to all the terms, group the terms in pairs (or in groups) that have a common factor and take it out in each group. If the **same** polynomial appears in the brackets, take it out again.

> [!ESEMPIO] Factorisations by grouping
> - $x^3 - 3x^2 + 2x - 6 = x^2(x - 3) + 2(x - 3) = (x - 3)(x^2 + 2)$.
> - $2x^3 + x^2 - 8x - 4 = x^2(2x + 1) - 4(2x + 1) = (2x + 1)(x^2 - 4) = (2x + 1)(x - 2)(x + 2)$. Here you keep going, because $x^2 - 4$ is a difference of two squares.
> - $ax - ay + 3x - 3y = a(x - y) + 3(x - y) = (x - y)(a + 3)$.

> [!TRAPPOLA] The sign when grouping
> In $2x^3 + x^2 - 8x - 4$, you take $-4$ out of the last two terms: $-8x - 4 = -4(2x + 1)$, because $-4 \cdot 2x = -8x$ and $-4 \cdot 1 = -4$. Taking out $+4$ you would get $4(-2x - 1)$ and the bracket would no longer match $2x + 1$.

### Factorising with special products

> [!ESEMPIO] Differences of two squares
> - $9x^2 - 16 = (3x)^2 - 4^2 = (3x - 4)(3x + 4)$.
> - $x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$: the first factor can be factorised further, $x^2 + 4$ cannot.
> - $(x + 1)^2 - 25 = (x + 1 - 5)(x + 1 + 5) = (x - 4)(x + 6)$.

> [!ESEMPIO] Squares and cubes of binomials
> - $x^2 - 10x + 25 = (x - 5)^2$: $x^2$ and $25$ are the squares of $x$ and of $5$, and the middle term is twice their product, $2 \cdot x \cdot 5 = 10x$, with a minus sign.
> - $12x^2 + 12x + 3 = 3(4x^2 + 4x + 1) = 3(2x + 1)^2$.
> - $x^6 - 6x^3 + 9 = (x^3)^2 - 2 \cdot x^3 \cdot 3 + 3^2 = (x^3 - 3)^2$: special products also work with higher powers.
> - $x^3 - 6x^2 + 12x - 8 = (x - 2)^3$: $x^3$ and $-8 = (-2)^3$ are cubes, and the middle terms are $3 \cdot x^2 \cdot 2 = 6x^2$ and $3 \cdot x \cdot 2^2 = 12x$, with alternating signs.

> [!ESEMPIO] Sum and difference of cubes
> - $x^3 - 27 = x^3 - 3^3 = (x - 3)(x^2 + 3x + 9)$.
> - $8a^3 + 1 = (2a)^3 + 1^3 = (2a + 1)(4a^2 - 2a + 1)$.
>
> The false square that remains cannot be factorised any further (with real coefficients).

> [!TRAPPOLA] The sum of two squares cannot be factorised
> $x^2 + 9$ is not $(x + 3)^2$ (which also has $6x$) and is not $(x + 3)(x - 3)$ (which gives $x^2 - 9$). With real coefficients, $x^2 + 9$ is irreducible: no real number has $x^2 = -9$.

### The quadratic trinomial: sum and product method

> [!PROP] Trinomial $x^2 + Sx + P$
> If you find two numbers $m$ and $n$ with **sum** $m + n = S$ and **product** $m \cdot n = P$, then
> $$
> x^2 + Sx + P = (x + m)(x + n)
> $$
> Indeed, $(x + m)(x + n) = x^2 + (m + n)x + mn$.

> [!METODO] Finding $m$ and $n$ in your head
> 1. Look at the sign of $P$: if $P > 0$, $m$ and $n$ have the **same** sign, that of $S$; if $P < 0$ they have **opposite** signs, and the one with the larger absolute value has the sign of $S$.
> 2. List the pairs of divisors of $|P|$ and look for the one with the right sum.

> [!ESEMPIO] Four trinomials
> - $x^2 + 7x + 12$: $P = 12 > 0$ and $S = 7 > 0$, both positive. Pairs: $1 \cdot 12$, $2 \cdot 6$, $3 \cdot 4$; the sum 7 comes from $3$ and $4$. Result $(x + 3)(x + 4)$.
> - $x^2 - 9x + 20$: positive product and negative sum, both negative: $-4$ and $-5$. Result $(x - 4)(x - 5)$.
> - $x^2 - x - 12$: negative product, opposite signs; sum $-1$: $-4$ and $3$. Result $(x - 4)(x + 3)$.
> - $x^2 + 2x - 15$: opposite signs, sum $+2$: $5$ and $-3$. Result $(x + 5)(x - 3)$.

> [!METODO] Leading coefficient other than 1: $ax^2 + bx + c$
> Look for two numbers with sum $b$ and product $a \cdot c$, split the middle term and factorise by grouping.
> Example: $2x^2 + x - 1$. You need sum $1$ and product $2 \cdot (-1) = -2$: the numbers are $2$ and $-1$.
> $$
> 2x^2 + x - 1 = 2x^2 + 2x - x - 1 = 2x(x + 1) - (x + 1) = (x + 1)(2x - 1)
> $$
> In module 3 you will see the general method: if $x_1$ and $x_2$ are the solutions of $ax^2 + bx + c = 0$, then $ax^2 + bx + c = a(x - x_1)(x - x_2)$.

> [!ESEMPIO] A trinomial in $x^2$
> The same method works with $x^2$ in place of $x$. In $x^4 - 5x^2 + 4$ you need sum $-5$ and product $4$: $-1$ and $-4$. So $x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4)$ and, with the differences of two squares,
> $$
> x^4 - 5x^2 + 4 = (x - 1)(x + 1)(x - 2)(x + 2)
> $$

### Roots and factorisation with Ruffini's rule

If $a$ is a root of $P(x)$, by the factor theorem $P(x) = (x - a) \cdot Q(x)$, and the quotient $Q(x)$ is found precisely with Ruffini's rule. The problem is finding a root: for rational roots there is a precise criterion.

> [!PROP] Where to look for rational roots
> If $P(x)$ has **integer** coefficients and the reduced fraction $\tfrac{p}{q}$ is one of its roots, then $p$ divides the constant term and $q$ divides the leading coefficient. In practice the candidates are
> $$
> \pm \frac{\text{divisors of the constant term}}{\text{divisors of the leading coefficient}}
> $$
> If the leading coefficient is $1$, the candidates are just the divisors of the constant term, with the $+$ sign and with the $-$ sign.

> [!NOTA] Watch out for the names
> The precise name of this criterion is the **rational root theorem** (*teorema delle radici razionali*). In some texts it appears under the name "remainder theorem" (*teorema del resto*), because it is used together with the remainder theorem: you compute $P(a)$ for the candidates and stop when you find $P(a) = 0$.

> [!METODO] Factorising with Ruffini's rule
> 1. List the candidates.
> 2. Compute $P(a)$ for the simplest candidates ($\pm1$, $\pm2$, …) until you find $P(a) = 0$.
> 3. Divide $P(x)$ by $x - a$ with Ruffini's rule (the remainder must come out as $0$): $P(x) = (x - a) \cdot Q(x)$.
> 4. Factorise $Q(x)$, whose degree is one less, with the methods already seen or with Ruffini's rule again.
>
> Two shortcuts: $P(1)$ is the **sum of the coefficients**, so $1$ is a root if this sum is $0$. $P(-1)$ is obtained by adding the coefficients after changing the sign of those of the odd-degree terms.

> [!ESEMPIO] $P(x) = x^3 - 2x^2 - 5x + 6$
> Candidates: the divisors of $6$, that is, $\pm1, \pm2, \pm3, \pm6$. The sum of the coefficients is $1 - 2 - 5 + 6 = 0$, so $P(1) = 0$ and $x - 1$ is a factor.
> $$
> \begin{array}{c|ccc|c}
>  & 1 & -2 & -5 & 6 \\
> 1 &  & 1 & -1 & -6 \\
> \hline
>  & 1 & -1 & -6 & 0
> \end{array}
> $$
> Quotient $x^2 - x - 6$, which factorises with sum $-1$ and product $-6$: $(x - 3)(x + 2)$. In conclusion
> $$
> x^3 - 2x^2 - 5x + 6 = (x - 1)(x - 3)(x + 2)
> $$
> Check with two values: for $x = 0$ the product equals $(-1)(-3)(2) = 6$ and $P(0) = 6$; for $x = 2$ it equals $(1)(-1)(4) = -4$ and $P(2) = 8 - 8 - 10 + 6 = -4$.
> The roots $-2$, $1$ and $3$ are the points where the graph of $y = P(x)$ crosses the $x$-axis.

```grafico
titolo: $y = x^3 - 2x^2 - 5x + 6 = (x - 1)(x - 3)(x + 2)$ crosses the $x$-axis at the roots $-2$, $1$ and $3$
x: -3 4
y: -8 10
proporzioni: libere
f: x^3 - 2x^2 - 5x + 6
punto: -2 0 | rosso
punto: 1 0 | rosso
punto: 3 0 | rosso
```

> [!ESEMPIO] Leading coefficient other than 1: $P(x) = 2x^3 - 3x^2 - 3x + 2$
> Candidates: $\pm1, \pm2, \pm\tfrac12$. I try: $P(1) = 2 - 3 - 3 + 2 = -2$, no. $P(-1) = -2 - 3 + 3 + 2 = 0$, yes.
> $$
> \begin{array}{c|ccc|c}
>  & 2 & -3 & -3 & 2 \\
> -1 &  & -2 & 5 & -2 \\
> \hline
>  & 2 & -5 & 2 & 0
> \end{array}
> $$
> Quotient $2x^2 - 5x + 2$: you need sum $-5$ and product $2 \cdot 2 = 4$, that is, $-4$ and $-1$. So $2x^2 - 4x - x + 2 = 2x(x - 2) - (x - 2) = (x - 2)(2x - 1)$.
> Result: $P(x) = (x + 1)(x - 2)(2x - 1)$. The roots are $-1$, $2$ and $\tfrac12$: the fractional root $\tfrac12$ corresponds to the factor $2x - 1 = 2\left(x - \tfrac12\right)$.

> [!PROP] Factorised form and roots
> A polynomial of degree $n$ has **at most** $n$ real roots; it can have fewer, or none. If it has exactly $n$, namely $x_1, x_2, \dots, x_n$ (a root that appears twice, as in $(x - 5)^2$, is counted twice), then
> $$
> P(x) = a_n (x - x_1)(x - x_2) \cdots (x - x_n)
> $$
> where $a_n$ is the leading coefficient. For example $2x^3 - 3x^2 - 3x + 2$ has leading coefficient $2$ and roots $-1$, $2$ and $\tfrac12$, so it is equal to $2(x + 1)(x - 2)\left(x - \tfrac12\right) = (x + 1)(x - 2)(2x - 1)$.

### Irreducible polynomials

> [!PROP] When a polynomial cannot be factorised
> - Every **first-degree** polynomial is irreducible.
> - A **second-degree** polynomial factorises into two first-degree factors (with real coefficients) if and only if it has real roots. $x^2 + 1$, $x^2 + 4$ and $x^2 + x + 1$ have none: they are irreducible.
> - In module 3 you will use the **discriminant** $b^2 - 4ac$: if it is negative, the trinomial $ax^2 + bx + c$ is irreducible.

> [!ESEMPIO] Why $x^2 + x + 1$ cannot be factorised
> Completing the square: $x^2 + x + 1 = \left(x + \tfrac12\right)^2 + \tfrac34$. A square is always greater than or equal to zero, so the polynomial is always at least $\tfrac34$: it is never zero, it has no roots and it has no first-degree factors.
> The graph shows that its parabola never touches the $x$-axis, while that of $x^2 + x - 2 = (x + 2)(x - 1)$ crosses it at $-2$ and at $1$.

```grafico
titolo: $y = x^2 + x + 1$ (irreducible) does not touch the $x$-axis; in red, $y = x^2 + x - 2 = (x + 2)(x - 1)$
x: -3.5 2.5
y: -3 7
proporzioni: libere
f: x^2 + x + 1
f: x^2 + x - 2 | rosso
punto: -2 0 | rosso
punto: 1 0 | rosso
```

### Algebraic fractions

> [!DEF] Algebraic fraction and domain conditions
> An **algebraic fraction** is a quotient $\dfrac{A(x)}{B(x)}$ of two polynomials. It makes sense only where the denominator is not zero: the **domain conditions** (C.E., from the Italian *condizioni di esistenza*) are $B(x) \ne 0$.
> Example: $\dfrac{x + 5}{x^2 - 9}$ exists for $x^2 - 9 \ne 0$, that is, for $x \ne 3$ and $x \ne -3$.

> [!METODO] Simplifying
> 1. Factorise the numerator and the denominator.
> 2. Write the domain conditions by looking at the factorised denominator, **before** simplifying.
> 3. Divide the numerator and the denominator by the **common** factors.

> [!ESEMPIO] A simplification
> $$
> \frac{x^2 - 9}{x^2 + 3x} = \frac{(x - 3)(x + 3)}{x(x + 3)} = \frac{x - 3}{x} \qquad \text{C.E. } x \ne 0,\ x \ne -3
> $$
> The condition $x \ne -3$ remains even though the factor $x + 3$ has disappeared: the original fraction does not exist at $-3$.

> [!METODO] Adding and subtracting
> 1. Factorise the denominators and write the C.E.
> 2. The common denominator is the **lcm** of the denominators: all the factors, common and non-common, each with the highest exponent.
> 3. For each fraction, divide the common denominator by its denominator and multiply the result by its numerator.
> 4. Add the numerators and, if possible, simplify.

> [!ESEMPIO] The common denominator
> To add $\dfrac{1}{x^2 - 1}$, $\dfrac{2}{x^2 + 2x + 1}$ and $\dfrac{3}{x}$, factorise the denominators: $(x - 1)(x + 1)$, $(x + 1)^2$ and $x$. The lcm takes each factor only once, with the highest exponent: $x(x - 1)(x + 1)^2$. The C.E. are $x \ne 0$, $x \ne 1$ and $x \ne -1$.

> [!ESEMPIO] A sum that simplifies in the end
> $$
> \frac{x}{x - 2} - \frac{4}{x^2 - 2x} = \frac{x}{x - 2} - \frac{4}{x(x - 2)} = \frac{x \cdot x - 4}{x(x - 2)} = \frac{(x - 2)(x + 2)}{x(x - 2)} = \frac{x + 2}{x}
> $$
> with C.E. $x \ne 0$ and $x \ne 2$.

> [!ESEMPIO] Product and division
> In a product you factorise everything and cancel the common factors, even across different fractions:
> $$
> \frac{x^2 - 4}{x + 1} \cdot \frac{x^2 + x}{x - 2} = \frac{(x - 2)(x + 2)}{x + 1} \cdot \frac{x(x + 1)}{x - 2} = x(x + 2)
> $$
> with C.E. $x \ne -1$ and $x \ne 2$. To divide, you multiply by the **reciprocal** fraction; in that case the numerator of the second fraction must also be non-zero.

> [!TRAPPOLA] Cancelling terms of a sum
> In $\dfrac{x + 3}{x}$ the $x$ in the numerator is a term of a sum, not a factor: it does not "cancel". The correct result is $\dfrac{x + 3}{x} = 1 + \dfrac3x$, not $3$ and not $4$ either. $\dfrac{x^2 + 1}{x + 1}$ cannot be simplified either: $x^2 + 1$ does not contain the factor $x + 1$.

> [!TRAPPOLA] Opposite factors
> $2 - x$ and $x - 2$ are not equal, they are **opposites**: $2 - x = -(x - 2)$. When you cancel them, a minus sign remains:
> $$
> \frac{x - 2}{2 - x} = \frac{x - 2}{-(x - 2)} = -1 \qquad \frac{x^2 - 9}{3 - x} = \frac{(x - 3)(x + 3)}{-(x - 3)} = -(x + 3)
> $$
> with C.E. $x \ne 2$ in the first case and $x \ne 3$ in the second.

> [!NOTA] What factorising is for
> In modules 3 and 4, factorisation is used to solve equations such as $x^3 - 2x^2 - 5x + 6 = 0$ thanks to the **zero product property** (*legge di annullamento del prodotto*: a product is zero if and only if at least one factor is zero) and to study the sign of algebraic fractions. For example $x^3 - 4x = 0$ becomes $x(x - 2)(x + 2) = 0$, which is true for $x = 0$, for $x = 2$ and for $x = -2$. Polynomial factorisation also has applications outside school, for example in cryptography and in codes for transmitting data without errors.

> [!TEST] Polynomials and factorisation
> - **"Which of the following is the factorisation of…"** (for example as a multiple-choice question with one right answer out of four): instead of factorising, check the options. With $x = 0$ you compare the constant terms, with $x = 1$ the sums of the coefficients: this is often enough to rule out three options.
> - **Remainder of the division by $x - a$** (for example as a numeric-answer question): do not do the division, compute $P(a)$. If the divisor has degree 2 or more this shortcut does not work: you need long division.
> - **Parameter for divisibility by $x - a$** (also as a numeric-answer question): set $P(a) = 0$ and solve the equation in the parameter, usually a first-degree one.
> - **True/false on identities** such as $(a - b)^2 = a^2 - b^2$ or $a^3 + b^3 = (a + b)^3$: try small numbers, for example $a = 2$ and $b = 1$.
> - **Multiple choice on factors**: $x - a$ is a factor if and only if $P(a) = 0$; check each option this way.
> - **Algebraic fractions**: be wary of options that cancel terms of a sum or forget the C.E.

## Exercises

::: esercizio base Recognising polynomials
For each expression, say whether it is a polynomial in $x$; if it is, state its degree, leading coefficient and constant term.
1. $5 - 2x^3 + x^2$
2. $x^2 + \dfrac3x$
3. $\sqrt3\,x^4 - x$
4. $7$
5. $\sqrt{x} + 1$
::: soluzione
1. It is a polynomial. Ordered: $-2x^3 + x^2 + 5$. Degree 3, leading coefficient $-2$, constant term $5$.
2. It is not a polynomial: $\tfrac3x = 3x^{-1}$ has a negative exponent.
3. It is a polynomial of degree 4, with leading coefficient $\sqrt3$ (an irrational coefficient is perfectly fine) and constant term $0$.
4. It is a polynomial of degree 0 (a constant): the leading coefficient and the constant term coincide and are both $7$.
5. It is not a polynomial: $\sqrt{x} = x^{1/2}$ has a fractional exponent.
:::

::: esercizio base Sum and difference
Given $A(x) = 2x^3 - x^2 + 4$ and $B(x) = x^3 + 3x^2 - 5x - 1$, compute $A + B$, $A - B$ and $B - A$.
::: soluzione
- $A + B = (2 + 1)x^3 + (-1 + 3)x^2 - 5x + (4 - 1) = 3x^3 + 2x^2 - 5x + 3$.
- $A - B = 2x^3 - x^2 + 4 - x^3 - 3x^2 + 5x + 1 = x^3 - 4x^2 + 5x + 5$ (the minus in front of $B$ changes all its signs).
- $B - A$ is the opposite of $A - B$: $-x^3 + 4x^2 - 5x - 5$.
:::

::: esercizio base Products
Compute: $(x - 4)(2x + 3)$; $(2x - 3)^2$; $(x + 1)^3$; $(5 - x)(5 + x)$.
::: soluzione
- $(x - 4)(2x + 3) = 2x^2 + 3x - 8x - 12 = 2x^2 - 5x - 12$.
- $(2x - 3)^2 = 4x^2 - 12x + 9$: the middle term is twice the product, $2 \cdot 2x \cdot (-3) = -12x$.
- $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$.
- $(5 - x)(5 + x) = 25 - x^2$.
:::

::: esercizio base Common factors
Factorise: $4x^3 - 8x^2$; $10x^4 + 15x^3 + 5x^2$; $x(x - 1) + 3(x - 1)$.
::: soluzione
- $4x^3 - 8x^2 = 4x^2(x - 2)$.
- $10x^4 + 15x^3 + 5x^2 = 5x^2(2x^2 + 3x + 1)$. The trinomial can be factorised further: sum $3$ and product $2 \cdot 1 = 2$ give $2$ and $1$, so $2x^2 + 2x + x + 1 = 2x(x + 1) + (x + 1) = (x + 1)(2x + 1)$. Result: $5x^2(x + 1)(2x + 1)$.
- $x(x - 1) + 3(x - 1) = (x - 1)(x + 3)$.
:::

::: esercizio base Ruffini's rule
Divide $P(x) = x^3 - 4x^2 + x + 6$ by $x - 3$ using Ruffini's rule. What can you conclude? Then factorise $P(x)$ completely.
::: soluzione
$$
\begin{array}{c|ccc|c}
 & 1 & -4 & 1 & 6 \\
3 &  & 3 & -3 & -6 \\
\hline
 & 1 & -1 & -2 & 0
\end{array}
$$
Quotient $x^2 - x - 2$, remainder $0$: $P(x)$ is divisible by $x - 3$, that is, $3$ is a root. Indeed $P(3) = 27 - 36 + 3 + 6 = 0$.
The quotient factorises with sum $-1$ and product $-2$, that is, $-2$ and $1$. So $P(x) = (x - 3)(x - 2)(x + 1)$.
:::

::: esercizio medio Special products in reverse
Factorise: $25x^2 - 1$; $x^2 - 12x + 36$; $2x^3 - 50x$; $x^3 - 64$; $27x^3 + 27x^2 + 9x + 1$.
::: soluzione
- $25x^2 - 1 = (5x - 1)(5x + 1)$.
- $x^2 - 12x + 36 = (x - 6)^2$.
- $2x^3 - 50x = 2x(x^2 - 25) = 2x(x - 5)(x + 5)$: first take out the common factor, then use the difference of two squares.
- $x^3 - 64 = x^3 - 4^3 = (x - 4)(x^2 + 4x + 16)$.
- $27x^3 + 27x^2 + 9x + 1 = (3x + 1)^3$. Check: $(3x)^3 = 27x^3$, $3 \cdot (3x)^2 \cdot 1 = 27x^2$, $3 \cdot 3x \cdot 1^2 = 9x$, $1^3 = 1$.
:::

::: esercizio medio Trinomials
Factorise: $x^2 + 8x + 15$; $x^2 - 2x - 24$; $x^2 - 11x + 30$; $3x^2 - 6x - 9$; $3x^2 + 5x - 2$.
::: soluzione
- $x^2 + 8x + 15 = (x + 3)(x + 5)$: sum 8, product 15.
- $x^2 - 2x - 24 = (x - 6)(x + 4)$: negative product, so opposite signs; sum $-2$.
- $x^2 - 11x + 30 = (x - 5)(x - 6)$.
- $3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1)$: first take out the 3.
- $3x^2 + 5x - 2$: you need sum $5$ and product $3 \cdot (-2) = -6$, that is, $6$ and $-1$. So $3x^2 + 6x - x - 2 = 3x(x + 2) - (x + 2) = (x + 2)(3x - 1)$.
:::

::: esercizio medio Factorising by grouping
Factorise: $x^3 + 5x^2 - 4x - 20$; $ab - 2a + 3b - 6$; $x^3 - x^2 + x - 1$.
::: soluzione
- $x^3 + 5x^2 - 4x - 20 = x^2(x + 5) - 4(x + 5) = (x + 5)(x^2 - 4) = (x + 5)(x - 2)(x + 2)$.
- $ab - 2a + 3b - 6 = a(b - 2) + 3(b - 2) = (b - 2)(a + 3)$.
- $x^3 - x^2 + x - 1 = x^2(x - 1) + (x - 1) = (x - 1)(x^2 + 1)$, and $x^2 + 1$ is irreducible.
:::

::: esercizio medio Remainder theorem
1. Without doing the division, find the remainder of $(x^5 - 3x^2 + 2) : (x + 1)$.
2. Find $k$ so that $x^3 + kx^2 - 4$ is divisible by $x - 2$.
::: soluzione
1. With $P(x) = x^5 - 3x^2 + 2$: the divisor is zero for $x = -1$, so the remainder is $P(-1) = (-1)^5 - 3(-1)^2 + 2 = -1 - 3 + 2 = -2$.
2. With $P(x) = x^3 + kx^2 - 4$ you need $P(2) = 0$: $8 + 4k - 4 = 0$, that is, $4k = -4$ and $k = -1$. Check: $x^3 - x^2 - 4$ at $2$ equals $8 - 4 - 4 = 0$.
:::

::: esercizio medio Ruffini's rule twice
Factorise $P(x) = x^4 - x^3 - 7x^2 + x + 6$.
::: soluzione
Candidates: $\pm1, \pm2, \pm3, \pm6$. The sum of the coefficients is $1 - 1 - 7 + 1 + 6 = 0$, so $P(1) = 0$.
$$
\begin{array}{c|cccc|c}
 & 1 & -1 & -7 & 1 & 6 \\
1 &  & 1 & 0 & -7 & -6 \\
\hline
 & 1 & 0 & -7 & -6 & 0
\end{array}
$$
$P(x) = (x - 1)(x^3 - 7x - 6)$. For $Q(x) = x^3 - 7x - 6$ I try $-1$: $Q(-1) = -1 + 7 - 6 = 0$.
$$
\begin{array}{c|ccc|c}
 & 1 & 0 & -7 & -6 \\
-1 &  & -1 & 1 & 6 \\
\hline
 & 1 & -1 & -6 & 0
\end{array}
$$
$Q(x) = (x + 1)(x^2 - x - 6) = (x + 1)(x - 3)(x + 2)$. In conclusion
$$
P(x) = (x - 1)(x + 1)(x - 3)(x + 2)
$$
:::

::: esercizio test Recognising the right factorisation
Which of the following is the factorisation of $x^2 - 2x - 15$?
(a) $(x + 5)(x - 3)$ (b) $(x - 5)(x + 3)$ (c) $(x - 5)(x - 3)$ (d) $(x - 15)(x + 1)$
::: soluzione
Quick method: the constant term is $-15$, so the two numbers have opposite signs and (c), whose product is $+15$, can be ruled out. The sum must be $-2$: in (a) it is $5 - 3 = 2$, in (d) it is $-15 + 1 = -14$, in (b) it is $-5 + 3 = -2$. Answer (b).
Check: $(x - 5)(x + 3) = x^2 + 3x - 5x - 15 = x^2 - 2x - 15$.
:::

::: esercizio test Simplifying an algebraic fraction
Simplify $\dfrac{x^2 - 4x + 4}{x^2 - 4}$, with the domain conditions, and compute its value for $x = 3$.
::: soluzione
Numerator: $(x - 2)^2$. Denominator: $(x - 2)(x + 2)$. C.E.: $x \ne 2$ and $x \ne -2$.
$$
\frac{(x - 2)^2}{(x - 2)(x + 2)} = \frac{x - 2}{x + 2}
$$
For $x = 3$, which satisfies the C.E.: $\dfrac{3 - 2}{3 + 2} = \dfrac15$.
:::

::: esercizio test Sum of algebraic fractions
Compute $\dfrac{2}{x - 1} - \dfrac{4}{x^2 - 1}$ and simplify the result.
::: soluzione
$x^2 - 1 = (x - 1)(x + 1)$, so the C.E. are $x \ne 1$ and $x \ne -1$, and the common denominator is $(x - 1)(x + 1)$:
$$
\frac{2(x + 1) - 4}{(x - 1)(x + 1)} = \frac{2x - 2}{(x - 1)(x + 1)} = \frac{2(x - 1)}{(x - 1)(x + 1)} = \frac{2}{x + 1}
$$
with $x \ne 1$ and $x \ne -1$.
:::

::: esercizio test A parameter
For which value of $k$ is the polynomial $x^3 - kx + 6$ divisible by $x + 2$? With that value of $k$, factorise the polynomial.
::: soluzione
Let $P(x) = x^3 - kx + 6$. The divisor is zero for $x = -2$, so you need $P(-2) = 0$: $(-2)^3 - k \cdot (-2) + 6 = -8 + 2k + 6 = 2k - 2 = 0$, so $k = 1$.
With $k = 1$ the polynomial is $x^3 - x + 6$, with coefficients $1, 0, -1, 6$. Ruffini's rule with $-2$:
$$
\begin{array}{c|ccc|c}
 & 1 & 0 & -1 & 6 \\
-2 &  & -2 & 4 & -6 \\
\hline
 & 1 & -2 & 3 & 0
\end{array}
$$
So $x^3 - x + 6 = (x + 2)(x^2 - 2x + 3)$. The second factor is irreducible: $x^2 - 2x + 3 = (x - 1)^2 + 2$ is always at least 2.
:::

::: esercizio test True or false
1. $x^2 + 9 = (x + 3)^2$.
2. $x^2 + 9$ cannot be written as a product of two first-degree polynomials with real coefficients.
3. $x^3 - 1 = (x - 1)(x^2 + x + 1)$.
4. $(x - y)^2 = (y - x)^2$.
5. $x^4 - 1 = (x^2 - 1)^2$.
::: soluzione
1. False: $(x + 3)^2 = x^2 + 6x + 9$. With $x = 1$ you see it straight away: $10 \ne 16$.
2. True: $x^2 + 9 \ge 9$ for every real $x$, so it has no roots and no first-degree factors.
3. True: it is the difference of cubes with $A = x$ and $B = 1$.
4. True: $y - x = -(x - y)$ and squaring cancels the sign.
5. False: $x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$. With $x = 0$: $-1 \ne 1$.
:::

::: esercizio test A fractional root
Check that $\tfrac23$ is a root of $P(x) = 3x^3 - 2x^2 + 3x - 2$. Which first-degree factor is certain to appear in the factorisation? Factorise $P(x)$.
::: soluzione
$P\left(\tfrac23\right) = 3 \cdot \tfrac{8}{27} - 2 \cdot \tfrac49 + 3 \cdot \tfrac23 - 2 = \tfrac89 - \tfrac89 + 2 - 2 = 0$.
By the factor theorem, the factor $x - \tfrac23$ appears, or equivalently $3x - 2 = 3\left(x - \tfrac23\right)$. Factorising by grouping:
$$
3x^3 - 2x^2 + 3x - 2 = x^2(3x - 2) + (3x - 2) = (3x - 2)(x^2 + 1)
$$
and $x^2 + 1$ is irreducible.
:::

## Self-check quiz

```quiz
D: What is the degree of the polynomial $(2x^3 - x + 1)(x^2 + 4)$?
N: 5
= In a product the degrees add up: $3 + 2 = 5$. The highest-degree term is $2x^3 \cdot x^2 = 2x^5$.

D: What is $(x - 3)^2$ equal to?
+ $x^2 - 6x + 9$
- $x^2 - 9$
- $x^2 + 9$
- $x^2 - 3x + 9$
= Square of the first term, twice the product $2 \cdot x \cdot (-3) = -6x$, square of the second $(-3)^2 = 9$.

D: True or false: $(a - b)^3 = a^3 - b^3$ for every $a$ and $b$.
- True
+ False
= $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$. Counterexample: with $a = 2$ and $b = 1$ the left-hand side is $1$, the right-hand side is $7$.

D: What is the factorisation of $x^2 - x - 20$?
+ $(x - 5)(x + 4)$
- $(x + 5)(x - 4)$
- $(x - 10)(x + 2)$
- $(x - 5)(x - 4)$
= You need two numbers with product $-20$ and sum $-1$: $-5$ and $4$. $(x + 5)(x - 4)$ has sum $+1$, $(x - 5)(x - 4)$ has product $+20$, $(x - 10)(x + 2)$ has sum $-8$.

D: What is the remainder of the division of $x^3 - 2x + 5$ by $x - 2$?
N: 9
= By the remainder theorem, it is the value of the polynomial at $2$: $2^3 - 2 \cdot 2 + 5 = 8 - 4 + 5 = 9$.

D: Which of the following polynomials are factors of $x^3 - 4x$?
+ $x$
+ $x - 2$
+ $x + 2$
- $x - 4$
- $x^2 + 4$
= $x^3 - 4x = x(x^2 - 4) = x(x - 2)(x + 2)$. $x - 4$ is not a factor because the polynomial at $4$ equals $64 - 16 = 48 \ne 0$; $x^2 + 4$ does not appear in the factorisation.

D: What is the factorisation of $8x^3 + 1$?
+ $(2x + 1)(4x^2 - 2x + 1)$
- $(2x + 1)^3$
- $(2x + 1)(4x^2 + 2x + 1)$
- $(2x - 1)(4x^2 + 2x + 1)$
= Sum of cubes with $A = 2x$ and $B = 1$: $(A + B)(A^2 - AB + B^2)$. The cube $(2x + 1)^3$ would also have the terms $12x^2 + 6x$; $(2x - 1)(4x^2 + 2x + 1)$ is the factorisation of $8x^3 - 1$; in $(2x + 1)(4x^2 + 2x + 1)$ the false square has the wrong sign.

D: True or false: $x^2 + 4$ can be written as a product of two first-degree polynomials with real coefficients.
- True
+ False
= $x^2 + 4 \ge 4$ for every real $x$: it has no roots, so it has no first-degree factors. Careful: $(x + 2)^2 = x^2 + 4x + 4$ and $(x + 2)(x - 2) = x^2 - 4$.

D: For which value of $k$ is the polynomial $x^2 + kx + 6$ divisible by $x - 2$?
N: -5
= The polynomial must be zero at $2$: $4 + 2k + 6 = 0$, so $k = -5$. Indeed $x^2 - 5x + 6 = (x - 2)(x - 3)$.

D: What is the quotient of the division $(x^3 - 1) : (x - 1)$?
+ $x^2 + x + 1$
- $x^2 - x + 1$
- $x^2 + 1$
- $x^2 + x - 1$
= With Ruffini's rule (coefficients $1, 0, 0, -1$ and number $1$) the last row is $1,\ 1,\ 1$ with remainder $0$. It is the difference of cubes: $x^3 - 1 = (x - 1)(x^2 + x + 1)$.

D: Which numbers are roots of $P(x) = x^3 - x^2 - 4x + 4$?
+ $1$
+ $-2$
- $4$
- $-1$
= Factorising by grouping: $x^2(x - 1) - 4(x - 1) = (x - 1)(x - 2)(x + 2)$, so the roots are $1$, $2$ and $-2$. On the other hand, $P(4) = 36$ and $P(-1) = 6$.

D: What is $\dfrac{x^2 - 1}{x^2 + 2x + 1}$ equal to, for $x \ne -1$?
+ $\dfrac{x - 1}{x + 1}$
- $\dfrac{-1}{2x + 1}$
- $\dfrac{x + 1}{x - 1}$
- $x - 1$
= $\dfrac{(x - 1)(x + 1)}{(x + 1)^2} = \dfrac{x - 1}{x + 1}$. $\dfrac{-1}{2x + 1}$ comes from the mistake of "cancelling" $x^2$, which is a term of a sum and not a factor.

D: What is the sum of the coefficients of the polynomial obtained by expanding $(2x - 1)^5$?
N: 1
= The sum of the coefficients of a polynomial is its value at $x = 1$: $(2 \cdot 1 - 1)^5 = 1^5 = 1$. There is no need to expand.

D: What is $\dfrac{2}{x - 3} + \dfrac{1}{x + 3}$ equal to?
+ $\dfrac{3x + 3}{x^2 - 9}$
- $\dfrac{3}{2x}$
- $\dfrac{3}{x^2 - 9}$
- $\dfrac{3x - 3}{x^2 - 9}$
= Common denominator $(x - 3)(x + 3) = x^2 - 9$; numerator $2(x + 3) + (x - 3) = 3x + 3$. $\tfrac{3}{2x}$ comes from the mistake of adding numerators to numerators and denominators to denominators.

D: Which of the following expressions is **not** a polynomial?
+ $\dfrac{1}{x^2} + 1$
- $\dfrac{x^2}{5} - 1$
- $\sqrt2\,x + 1$
- $0.5x^3$
= $\tfrac{1}{x^2} = x^{-2}$ has a negative exponent. In the others the exponents of $x$ are natural numbers: fractions and roots in the **coefficients** are fine.
```

## Checklist

```checklist
I can recognise a polynomial and find its degree, leading coefficient and constant term
I can add, subtract and multiply monomials and polynomials
I can expand and recognise the special products, including the sum and difference of cubes
I can do long division of two polynomials
I can apply Ruffini's rule, also with missing terms and with divisors of the form $x + a$
I can use the remainder theorem to find a remainder or a parameter without doing the division
I can take out a common factor and factorise by grouping
I can factorise the trinomials $x^2 + Sx + P$ and $ax^2 + bx + c$
I can list the candidate rational roots and factorise with Ruffini's rule
I can recognise irreducible polynomials such as $x^2 + 1$ and $x^2 + x + 1$
I can simplify, add and multiply algebraic fractions, with the domain conditions
```
