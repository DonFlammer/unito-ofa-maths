---
modulo: 3
titolo: "First- and second-degree equations and inequalities, systems"
breve: "First- and second-degree equations and inequalities, linear systems and word problems to translate into equations."
ore: 8
unita:
  - "3.1 First-degree equations and inequalities"
  - "3.2 Second-degree equations and inequalities"
  - "3.3 Systems of equations"
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/moduli/03-equazioni-disequazioni.md
---

## In brief

- A first-degree (linear) equation can always be reduced to $ax + b = 0$. If $a \neq 0$ it has exactly one solution, $x = -\frac{b}{a}$; if $a = 0$ it is **impossible** (when $b \neq 0$) or it is an **identity** (when $b = 0$ as well).
- Inequalities are solved like equations, with one extra rule: if you multiply or divide by a negative number, the direction of the inequality is reversed ($<$ becomes $>$ and vice versa).
- For $ax^2 + bx + c = 0$ first compute the discriminant $\Delta = b^2 - 4ac$: two solutions if $\Delta > 0$, only one (a double one) if $\Delta = 0$, no real solutions if $\Delta < 0$. Then use $x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}$.
- The sum and the product of the solutions, $x_1 + x_2 = -\frac{b}{a}$ and $x_1 x_2 = \frac{c}{a}$, let you check a result in a few seconds.
- For a second-degree (quadratic) inequality think of the parabola: with $a > 0$ and $\Delta > 0$ the trinomial is positive **outside** the solutions and negative **between** the solutions.
- A linear system of two equations is solved by substitution or by elimination; it can have one solution, none (**impossible**) or infinitely many (**indeterminate**).
- The degree of a system is the product of the degrees of its equations.
- In word problems: choose the unknown, write the equation, solve it and check that the solution makes sense (positive lengths and ages, a whole number of people and so on).

## 3.1 First-degree equations and inequalities

### What an equation is

> [!DEF] Equation and solution
> An **equation** is an equality between two expressions that contains a letter, the **unknown** (usually $x$). The expression to the left of the equals sign is the **left-hand side** (*primo membro*), the one to the right is the **right-hand side** (*secondo membro*).
> A **solution** is a number that, put in place of $x$, makes the equality true. **Solving** an equation means finding all its solutions.

For example $2x + 1 = 7$ has the solution $x = 3$: indeed $2 \cdot 3 + 1 = 7$. The number $1$, on the other hand, is not a solution, because $2 \cdot 1 + 1 = 3 \neq 7$ (the symbol $\neq$ is read "is not equal to").

An equation is **first-degree** (or linear) when, after doing all the calculations, $x$ appears only to the first power. It can always be written in the form
$$
ax + b = 0
$$
where $a$ and $b$ are real numbers. Two equations are **equivalent** if they have the same solutions: solving means moving from one equation to another one that is equivalent but simpler, until you reach "$x$ equals a number".

### The equivalence principles

> [!PROP] The two equivalence principles
> 1. **First principle.** If you add or subtract the same expression on both sides, you get an equivalent equation.
> 2. **Second principle.** If you multiply or divide both sides by the same **non-zero** number, you get an equivalent equation.

The two principles give the practical rules you will use all the time:

- **Transposition**: a term can move from one side to the other by changing its sign. From $3x - 5 = 7$ you go to $3x = 7 + 5$ (you have added $5$ to both sides).
- **Cancellation**: a term that is the same on both sides can be removed. In $x^2 + 2x = x^2 + 6$ remove $x^2$ from both sides and you are left with $2x = 6$.
- **Numerical denominators**: multiply all the terms by the least common multiple (lcm) of the denominators and the fractions disappear.
- **Change of sign**: multiplying everything by $-1$ changes the signs of all the terms, and $-x = 4$ becomes $x = -4$.

> [!TRAPPOLA] Multiplying by zero
> The second principle holds only with non-zero numbers. Multiplying by $0$, any equation becomes $0 = 0$ and you lose all the information. In the same way, you do not divide by an expression that contains $x$ (for example by $x$ itself) without knowing whether it can be zero: you risk losing solutions.

### Determined, impossible, indeterminate

Once you have reached the form $ax + b = 0$, that is $ax = -b$, there are three cases.

| Coefficients | Type of equation | Solutions |
|---|---|---|
| $a \neq 0$ | **determined** | exactly one: $x = -\frac{b}{a}$ |
| $a = 0$ and $b \neq 0$ | **impossible** | none: it becomes $0 \cdot x = -b$, false for every $x$ |
| $a = 0$ and $b = 0$ | **indeterminate** (identity) | all real numbers: it becomes $0 \cdot x = 0$ |

The set of real numbers is denoted by $\R$; the empty set, i.e. "no solutions", by $\emptyset$.

> [!METODO] Solving a first-degree equation
> 1. Expand the products and remove the brackets.
> 2. If there are numerical denominators, multiply **every** term by their lcm.
> 3. Bring the terms with $x$ to the left-hand side and the numbers to the right-hand side (transposition, changing the sign).
> 4. Add up like terms until you reach $ax = -b$.
> 5. If $a \neq 0$ divide by $a$; if $a = 0$ decide whether it is impossible or an identity.
> 6. Check (optional but useful): substitute the result into the original equation.

> [!ESEMPIO] With brackets: $3(x - 4) = 5(x - 2) + 4$
> Expand the products: $3x - 12 = 5x - 10 + 4$, that is $3x - 12 = 5x - 6$.
>
> Bring the $x$ terms to the left and the numbers to the right: $3x - 5x = -6 + 12$, so $-2x = 6$.
>
> Divide by $-2$: $x = -3$.
>
> Check: on the left $3(-3 - 4) = -21$, on the right $5(-3 - 2) + 4 = -25 + 4 = -21$. Correct.

> [!ESEMPIO] With denominators: $\frac{x - 1}{4} + \frac{x}{6} = \frac{x + 3}{3}$
> The lcm of $4$, $6$ and $3$ is $12$. Multiply every term by $12$: $12 \cdot \frac{x - 1}{4} = 3(x - 1)$, $12 \cdot \frac{x}{6} = 2x$, $12 \cdot \frac{x + 3}{3} = 4(x + 3)$. You get
> $$
> 3(x - 1) + 2x = 4(x + 3)
> $$
> that is $3x - 3 + 2x = 4x + 12$, then $5x - 4x = 12 + 3$ and finally $x = 15$.
>
> Check: $\frac{14}{4} + \frac{15}{6} = 3.5 + 2.5 = 6$ and $\frac{18}{3} = 6$.

> [!ESEMPIO] An impossible equation and an identity
> $2(x + 3) - x = x + 4$ becomes $2x + 6 - x = x + 4$, that is $x + 6 = x + 4$. Bringing the $x$ terms to the left: $0 \cdot x = -2$. No number multiplied by $0$ gives $-2$: the equation is **impossible**.
>
> $3(x - 1) + 2 = 3x - 1$ becomes $3x - 1 = 3x - 1$, that is $0 \cdot x = 0$: true for every $x$. It is an **identity** and the solution set is $\R$.

> [!TRAPPOLA] The minus sign in front of a fraction
> In $\frac{x}{2} - \frac{x - 3}{4} = 1$ the minus sign applies to the **whole** numerator. Multiplying by $4$ you get $2x - (x - 3) = 4$, that is $2x - x + 3 = 4$, and so $x = 1$. Writing $2x - x - 3 = 4$ is the most common mistake (it would lead to $x = 7$). And remember that multiplying by $4$ applies to the $1$ on the right-hand side as well.

> [!TRAPPOLA] $0 \cdot x = 0$ does not mean $x = 0$
> $x = 0$ is an equation with exactly one solution, zero. $0 \cdot x = 0$, on the other hand, is true for **all** numbers, and $0 \cdot x = 5$ is true for none.

### First-degree inequalities

An **inequality** (*disequazione*) is like an equation, but instead of the equals sign there is one of these symbols: $>$ (greater than), $\geq$ (greater than or equal to), $<$ (less than), $\leq$ (less than or equal to). There are usually infinitely many solutions and they form one or more **intervals**. Every first-degree inequality can be reduced to one of the forms $ax > b$, $ax \geq b$, $ax < b$, $ax \leq b$.

A set of solutions can be written in three equivalent ways: with an inequality, as an interval, or drawn on the number line.

| Inequality | Interval | Meaning |
|---|---|---|
| $x > 2$ | $(2, +\infty)$ | the numbers greater than $2$, $2$ excluded |
| $x \geq 2$ | $[2, +\infty)$ | the numbers greater than $2$, $2$ included |
| $x < 2$ | $(-\infty, 2)$ | the numbers less than $2$, $2$ excluded |
| $x \leq 2$ | $(-\infty, 2]$ | the numbers less than $2$, $2$ included |
| $-1 < x \leq 2$ | $(-1, 2]$ | between $-1$ (excluded) and $2$ (included) |

A round bracket marks an **excluded** endpoint, a square bracket an **included** endpoint. The symbol $\infty$ (infinity) is not a number: next to it the bracket is always round. To put two intervals together you use the **union** symbol $\cup$: $(-\infty, 1) \cup (3, +\infty)$ means "$x < 1$ or $x > 3$". Sometimes "or" is written $\vee$ and "and" is written $\wedge$.

> [!PROP] Equivalence principles for inequalities
> 1. Adding or subtracting the same expression on both sides does not change the solutions (transposition works as in equations).
> 2. Multiplying or dividing both sides by a **positive** number does not change the solutions.
> 3. Multiplying or dividing both sides by a **negative** number changes the **direction** (*verso*): $<$ becomes $>$, $\leq$ becomes $\geq$ and vice versa.

The reason for the third rule: $2 < 5$ is true, but multiplying by $-1$ you get $-2$ and $-5$, and $-2 > -5$. Multiplying by a negative number "flips" the order of the numbers on the line.

> [!METODO] Solving a first-degree inequality
> 1. Remove brackets and numerical denominators (the lcm of the denominators is positive: the direction does not change).
> 2. Bring the $x$ terms to the left and the numbers to the right.
> 3. Reach the form $ax > b$ (or with one of the other three symbols).
> 4. Divide by $a$: if $a > 0$ the direction stays the same, if $a < 0$ the direction is reversed.
> 5. Write the solution as an inequality and as an interval; if it helps, draw it on the number line.

> [!ESEMPIO] $2(x + 1) - 5 \leq 4x + 3$
> Expand: $2x + 2 - 5 \leq 4x + 3$, that is $2x - 3 \leq 4x + 3$.
>
> Transpose: $2x - 4x \leq 3 + 3$, so $-2x \leq 6$.
>
> Divide by $-2$, which is negative, and **reverse the direction**: $x \geq -3$.
>
> Solution: $x \geq -3$, that is the interval $[-3, +\infty)$.
>
> ```retta
> titolo: Solutions of $2(x + 1) - 5 \leq 4x + 3$
> da: -6 3
> int: [-3, +inf)
> ```

> [!ESEMPIO] With denominators: $\frac{x}{3} - \frac{x - 1}{2} > 1$
> The lcm is $6$ (positive, the direction stays the same): $2x - 3(x - 1) > 6$, that is $2x - 3x + 3 > 6$, so $-x > 3$.
>
> Multiply by $-1$ and reverse: $x < -3$, that is the interval $(-\infty, -3)$.
>
> Quick check with a number that should work, $x = -6$: $\frac{-6}{3} - \frac{-7}{2} = -2 + 3.5 = 1.5 > 1$. Yes.

> [!NOTA] When the coefficient of $x$ vanishes
> If after the calculations $x$ disappears, you are left with an inequality between numbers. If it is true, the inequality holds for every $x \in \R$ (read "$x$ belonging to $\R$"); if it is false, it has no solutions. For example $x + 5 > x + 2$ becomes $0 \cdot x > -3$, always true; $x + 2 \geq x + 5$ becomes $0 \cdot x \geq 3$, never true.

> [!TRAPPOLA] When the direction is reversed
> The direction is reversed **only** when you multiply or divide by a negative number. Moving a term from one side to the other does not change the direction. And dividing by a positive number does not change it, even if the right-hand side is negative: from $3x < -6$ it follows that $x < -2$.

### Several inequalities together: systems and double inequalities

A **system of inequalities** asks for the numbers that satisfy **all** the inequalities at the same time: solve each inequality and take the common part, that is the **intersection** (symbol $\cap$). This tool will be very useful in module 4.

> [!ESEMPIO] A system of two inequalities
> $$
> \begin{cases} 2x - 1 > 3 \\ x + 4 \leq 10 \end{cases}
> $$
> The first gives $2x > 4$, that is $x > 2$. The second gives $x \leq 6$. The numbers that work for both are those with $2 < x \leq 6$, that is the interval $(2, 6]$.
>
> ```retta
> titolo: Common part of $x > 2$ and $x \leq 6$
> da: 0 8
> int: (2, 6]
> ```
>
> If the two solution sets have nothing in common (for example $x < 1$ and $x > 3$) the system has no solutions.

A **double inequality** such as $-1 < 2x + 3 \leq 7$ is a system written in compact form: you can work on all three "sides" together. Subtract $3$: $-4 < 2x \leq 4$; divide by $2$: $-2 < x \leq 2$.

### First-degree word problems

> [!METODO] From the text to the equation
> 1. Choose the unknown and write **in words** what it represents (with the unit of measurement).
> 2. Express all the other quantities of the problem in terms of the unknown.
> 3. Translate the condition in the text into an equation, or into an inequality if the text says "at most", "at least", "no more than".
> 4. Solve.
> 5. Check that the result makes sense (a length is positive, a number of people is a whole number) and answer exactly the question asked.

> [!ESEMPIO] A rectangle
> In a rectangle one side is three times the other and the perimeter is $48$ cm. What is the area?
>
> Let $x$ be the short side (in cm): the long side is $3x$. The perimeter is the sum of the four sides: $2(x + 3x) = 48$, that is $8x = 48$ and $x = 6$. The sides are $6$ cm and $18$ cm, the area is $6 \cdot 18 = 108$ cm².

> [!ESEMPIO] Ages
> Of two sisters, the older one is $3$ years older than the younger one. In $5$ years' time the sum of their ages will be $29$. How old are they today?
>
> Let $x$ be the age of the younger one: the older one is $x + 3$ years old. In $5$ years they will be $x + 5$ and $x + 8$ years old, so $(x + 5) + (x + 8) = 29$, that is $2x + 13 = 29$ and $x = 8$. The younger one is $8$ years old, the older one $11$.

> [!ESEMPIO] A problem with an inequality
> A gym charges $30$ euros to join plus $8$ euros for each visit. With $100$ euros, how many visits can you make at most?
>
> Let $n$ be the number of visits. The expense must not exceed $100$ euros: $30 + 8n \leq 100$, that is $8n \leq 70$ and $n \leq 8.75$. Since $n$ is a whole number, at most **8** visits.

> [!TEST] How it can appear in the test
> - Choice among four values ("the solution of ... is"): it is often quicker to **substitute** the options into the equation than to solve it.
> - Numeric answer: keep exact fractions until the end, simplify them and double-check the sign; with decimals and no calculator it is easy to make mistakes.
> - True/false on "impossible" and "indeterminate": bring everything to the form $ax = -b$ and look at $a$ and $b$.
> - Intervals: check the brackets (round or square) and try a number from the proposed interval in the original inequality.
> - In problems with "at most" or "at least" the result must be rounded in the right direction: $n \leq 8.75$ gives $8$, not $9$.

## 3.2 Second-degree equations and inequalities

### The standard form

> [!DEF] Second-degree equation
> A **second-degree** (quadratic) equation in standard form (*forma normale*) is
> $$
> ax^2 + bx + c = 0 \qquad \text{with } a \neq 0
> $$
> The numbers $a$, $b$, $c$ are the **coefficients**; $c$ is called the **constant term**. The solutions are also called **roots** and there are at most two of them, denoted by $x_1$ and $x_2$.

First of all you must bring the equation to standard form (everything on the left, zero on the right, like terms added up) and read the coefficients **with their signs**. For example:

- $3x^2 - x + 5 = 0$: $a = 3$, $b = -1$, $c = 5$;
- $4 - x^2 = 0$, that is $-x^2 + 4 = 0$: $a = -1$, $b = 0$, $c = 4$;
- $2x^2 = 7x$, that is $2x^2 - 7x = 0$: $a = 2$, $b = -7$, $c = 0$.

### Incomplete equations

If $b = 0$ or $c = 0$ you do not need the formula: two simple ideas are enough.

> [!PROP] Zero product property (*legge di annullamento del prodotto*)
> A product equals zero if and only if at least one of the factors equals zero: $A \cdot B = 0$ is equivalent to $A = 0$ or $B = 0$.

| Type | Form | How to solve it |
|---|---|---|
| **pure** (*pura*, $b = 0$) | $ax^2 + c = 0$ | $x^2 = -\frac{c}{a}$: if $-\frac{c}{a} > 0$ there are two opposite solutions $x = \pm\sqrt{-\frac{c}{a}}$; if it is negative, none |
| **spurious** (*spuria*, $c = 0$) | $ax^2 + bx = 0$ | take out the common factor: $x(ax + b) = 0$, so $x = 0$ or $x = -\frac{b}{a}$ |
| **monomial** (*monomia*, $b = c = 0$) | $ax^2 = 0$ | $x = 0$ (double solution) |

The symbol $\pm$ is read "plus or minus" and stands for two numbers: $\pm 3$ means $3$ and $-3$.

> [!ESEMPIO] Three incomplete equations
> - $2x^2 - 18 = 0$: $x^2 = 9$, so $x = 3$ or $x = -3$.
> - $x^2 + 4 = 0$: $x^2 = -4$, impossible in the real numbers (a square is never negative).
> - $3x^2 - 12x = 0$: take out $3x$ and you get $3x(x - 4) = 0$, so $x = 0$ or $x = 4$.

> [!TRAPPOLA] Do not divide by $x$
> From $3x^2 = 12x$ it is tempting to divide by $x$ and write $3x = 12$, that is $x = 4$. That way you lose the solution $x = 0$: bring everything to the left and take out the common factor. And from $x^2 = 9$ do not write only $x = 3$: $(-3)^2 = 9$ as well.

### The quadratic formula and the discriminant

> [!PROP] Quadratic formula (*formula risolutiva*)
> The solutions of $ax^2 + bx + c = 0$ are
> $$
> x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
> $$
> The number under the root is called the **discriminant** and is denoted by the Greek letter $\Delta$ ("delta"): $\Delta = b^2 - 4ac$.
>
> - $\Delta > 0$: two **distinct** real solutions, $x_1 = \frac{-b - \sqrt{\Delta}}{2a}$ and $x_2 = \frac{-b + \sqrt{\Delta}}{2a}$.
> - $\Delta = 0$: two **coincident** solutions, that is a single solution (called a double solution): $x_1 = x_2 = -\frac{b}{2a}$.
> - $\Delta < 0$: **no real solutions** (the square root of a negative number is not a real number).

> [!METODO] Solving a second-degree equation
> 1. Bring the equation to standard form $ax^2 + bx + c = 0$.
> 2. If it is incomplete, use the shortcuts seen above.
> 3. Write down $a$, $b$, $c$ with their signs.
> 4. Compute $\Delta = b^2 - 4ac$ and decide how many solutions there are.
> 5. If $\Delta \geq 0$ apply the formula and simplify the root if you can.
> 6. Check with the sum and the product (you will find them further on) or by substituting.

> [!ESEMPIO] $\Delta > 0$: $2x^2 + x - 6 = 0$
> $a = 2$, $b = 1$, $c = -6$. $\Delta = 1^2 - 4 \cdot 2 \cdot (-6) = 1 + 48 = 49$, positive: two solutions.
> $$
> x_{1,2} = \frac{-1 \pm \sqrt{49}}{2 \cdot 2} = \frac{-1 \pm 7}{4}
> $$
> so $x_1 = \frac{-8}{4} = -2$ and $x_2 = \frac{6}{4} = \frac{3}{2}$.

> [!ESEMPIO] $\Delta = 0$ and $\Delta < 0$
> $4x^2 - 12x + 9 = 0$: $\Delta = 144 - 4 \cdot 4 \cdot 9 = 144 - 144 = 0$. A single solution: $x = -\frac{b}{2a} = \frac{12}{8} = \frac{3}{2}$. Indeed the trinomial is the square $(2x - 3)^2$.
>
> $x^2 - 2x + 5 = 0$: $\Delta = 4 - 20 = -16 < 0$. No real solutions.

> [!ESEMPIO] First rearrange: $2x(x + 3) - (x + 1)^2 = 2x + 14$
> Expand: $2x^2 + 6x - (x^2 + 2x + 1) = 2x + 14$. The minus sign in front of the bracket changes the sign of **all** its terms: $x^2 + 4x - 1 = 2x + 14$.
>
> Bring everything to the left: $x^2 + 2x - 15 = 0$. $\Delta = 4 + 60 = 64$ and $\sqrt{64} = 8$:
> $$
> x_{1,2} = \frac{-2 \pm 8}{2} \quad\Rightarrow\quad x_1 = -5, \quad x_2 = 3
> $$
> (The arrow $\Rightarrow$ is read "therefore": what is on the right follows from what is on the left.)

> [!PROP] Reduced formula (when $b$ is even)
> If $b$ is an even number it is easier to work with half of it, $\frac{b}{2}$:
> $$
> x_{1,2} = \frac{-\frac{b}{2} \pm \sqrt{\left(\frac{b}{2}\right)^2 - ac}}{a}
> $$
> The number under the root, $\left(\frac{b}{2}\right)^2 - ac$, is $\frac{\Delta}{4}$: it has the same sign as $\Delta$ and decides the number of solutions in the same way. The calculations involve smaller numbers; the result is identical.

> [!ESEMPIO] Reduced formula: $x^2 - 4x - 8 = 0$
> $b = -4$, so $\frac{b}{2} = -2$. Under the root: $(-2)^2 - 1 \cdot (-8) = 4 + 8 = 12$. Then
> $$
> x_{1,2} = \frac{2 \pm \sqrt{12}}{1} = 2 \pm 2\sqrt{3}
> $$
> because $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$. With the full formula: $\Delta = 16 + 32 = 48$ and $\frac{4 \pm \sqrt{48}}{2} = \frac{4 \pm 4\sqrt{3}}{2} = 2 \pm 2\sqrt{3}$. Same result, longer calculations.

### Where the formula comes from

The formula is obtained by **completing the square**: you add to both sides the number that turns the part with $x$ into the square of a binomial. First look at a case with numbers, $x^2 + 6x + 5 = 0$:

- bring the constant term to the right: $x^2 + 6x = -5$;
- take half the coefficient of $x$, that is $3$, and its square, $9$; add it to both sides: $x^2 + 6x + 9 = 4$;
- on the left there is a square: $(x + 3)^2 = 4$;
- so $x + 3 = 2$ or $x + 3 = -2$, that is $x = -1$ or $x = -5$.

In the general case you do the same, after dividing everything by $a$ (half the coefficient of $x$ is $\frac{b}{2a}$, and its square is $\frac{b^2}{4a^2}$):
$$
\begin{aligned}
x^2 + \frac{b}{a}x + \frac{c}{a} &= 0 \\
x^2 + \frac{b}{a}x &= -\frac{c}{a} \\
x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} &= \frac{b^2}{4a^2} - \frac{c}{a} \\
\left(x + \frac{b}{2a}\right)^2 &= \frac{b^2 - 4ac}{4a^2}
\end{aligned}
$$
If the right-hand side is positive or zero you can take the square root of both sides, with the $\pm$:
$$
x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}
$$
Isolating $x$ you find the quadratic formula. You can also see why the sign of $\Delta = b^2 - 4ac$ matters: the left-hand side is a square and cannot be negative, while the right-hand side has the same sign as $\Delta$ (the denominator $4a^2$ is positive). If $\Delta < 0$ the equality is impossible.

### Factorisation, sum and product of the roots

> [!PROP] Factorising the second-degree trinomial
> If $\Delta \geq 0$ and $x_1$, $x_2$ are the solutions of $ax^2 + bx + c = 0$, then
> $$
> ax^2 + bx + c = a(x - x_1)(x - x_2)
> $$
> If $\Delta < 0$ the trinomial cannot be factorised over the real numbers.
>
> Expanding the product you find two very useful relations:
> $$
> x_1 + x_2 = -\frac{b}{a} \qquad\qquad x_1 \cdot x_2 = \frac{c}{a}
> $$

This rule generalises the quadratic trinomial (sum and product method) of module 2, $x^2 + sx + p = (x + A)(x + B)$ when $A + B = s$ and $A \cdot B = p$. Now you can factorise any second-degree trinomial with $\Delta \geq 0$, even when you cannot guess the two numbers.

> [!ESEMPIO] Factorising $2x^2 + x - 6$
> The roots are $-2$ and $\frac{3}{2}$ (from the earlier example). So
> $$
> 2x^2 + x - 6 = 2(x + 2)\left(x - \frac{3}{2}\right) = (x + 2)(2x - 3)
> $$
> where the $2$ has gone into the last bracket. Check: $(x + 2)(2x - 3) = 2x^2 - 3x + 4x - 6 = 2x^2 + x - 6$.

> [!ESEMPIO] Two numbers with a given sum and product
> Which numbers have sum $7$ and product $10$? They are the solutions of $t^2 - 7t + 10 = 0$ (in this equation the sum of the roots is $7$ and the product is $10$). $\Delta = 49 - 40 = 9$, $t = \frac{7 \pm 3}{2}$: the numbers are $5$ and $2$.

> [!TRAPPOLA] Do not forget $a$
> $2x^2 + x - 6$ is **not** $(x + 2)\left(x - \frac{3}{2}\right)$: that product equals $x^2 + \frac{1}{2}x - 3$, that is half of it. The coefficient $a$ always goes in front.

> [!TEST] Quick checks without a calculator
> - "What are the solutions of $x^2 - x - 12 = 0$?": look for two numbers with sum $1$ and product $-12$, that is $4$ and $-3$. This is often enough to choose the right option without computing $\Delta$.
> - "How many real solutions does ... have": you only need the sign of $\Delta$. If $a$ and $c$ have opposite signs, $-4ac$ is positive and so $\Delta > 0$ for sure.
> - With integer coefficients, if $\Delta$ is a perfect square ($1, 4, 9, 16, 25, \ldots$) the solutions are fractions or integers; if $\Delta$ is positive but not a perfect square, radicals appear, and the options with only integers are wrong.
> - Questions with a parameter ("for which $k$ are there two coincident solutions?"): set $\Delta = 0$ (or $\Delta > 0$, $\Delta < 0$) and solve for $k$.

### Second-degree inequalities with the parabola

A second-degree inequality can be reduced to one of the forms $ax^2 + bx + c > 0$, $\geq 0$, $< 0$, $\leq 0$, with $a \neq 0$. The safest way to solve it is to think of the graph of $y = ax^2 + bx + c$, which is a **parabola** (you will study it in module 5):

- if $a > 0$ the parabola is concave up (it "opens upwards"), if $a < 0$ it is concave down;
- the points where it crosses the $x$-axis are the solutions of the **associated equation** $ax^2 + bx + c = 0$;
- the trinomial is **positive** where the parabola lies **above** the $x$-axis and **negative** where it lies **below** it.

```grafico
titolo: $y = x^2 - 2x - 3$ is negative between $-1$ and $3$ (red area) and positive outside
x: -3 5
y: -5 3
f: x^2 - 2x - 3 | $y = x^2 - 2x - 3$ | e
area: x^2 - 2x - 3 | 0 | -1 3 | rosso
punto: -1 0 | $-1$ | no
punto: 3 0 | $3$ | ne
```

> [!PROP] Sign of $ax^2 + bx + c$ when $a > 0$
> Let $x_1 < x_2$ be the solutions of the associated equation when $\Delta > 0$, and $x_0 = -\frac{b}{2a}$ the double solution when $\Delta = 0$.
>
> | Direction | $\Delta > 0$ | $\Delta = 0$ | $\Delta < 0$ |
> |---|---|---|---|
> | $> 0$ | $x < x_1$ or $x > x_2$ | every $x \neq x_0$ | every $x \in \R$ |
> | $\geq 0$ | $x \leq x_1$ or $x \geq x_2$ | every $x \in \R$ | every $x \in \R$ |
> | $< 0$ | $x_1 < x < x_2$ | no solutions | no solutions |
> | $\leq 0$ | $x_1 \leq x \leq x_2$ | only $x = x_0$ | no solutions |
>
> In short, with $\Delta > 0$: direction $>$ → **outer** intervals, direction $<$ → **inner** interval. If $a < 0$ multiply everything by $-1$, reverse the direction and then use the table.

```grafico
titolo: Parabolas with $a > 0$: two, one or no intersections with the $x$-axis
x: -8.5 8.5
y: -2 5
f: (x+5)^2 - 1
f: x^2
f: (x-5)^2 + 1
testo: -5 4.4 | $\Delta > 0$
testo: 1.3 4.4 | $\Delta = 0$
testo: 5 4.4 | $\Delta < 0$
```

> [!METODO] Solving a second-degree inequality
> 1. Bring the inequality to standard form: trinomial on the left, $0$ on the right.
> 2. If $a < 0$, multiply by $-1$ and reverse the direction.
> 3. Solve the associated equation: find $x_1$ and $x_2$, or find out that $\Delta \leq 0$.
> 4. Sketch by hand an upward-opening parabola through the roots and choose where it lies above the axis (direction $>$) or below it (direction $<$).
> 5. With $\geq$ or $\leq$ include the roots, with $>$ or $<$ exclude them.

> [!ESEMPIO] $x^2 - 2x - 3 > 0$
> Associated equation: $x^2 - 2x - 3 = 0$, with $\Delta = 4 + 12 = 16$ and $x = \frac{2 \pm 4}{2}$, that is $x_1 = -1$ and $x_2 = 3$. The parabola opens upwards (first graph above) and lies above the axis outside the roots. Solution: $x < -1$ or $x > 3$, that is $(-\infty, -1) \cup (3, +\infty)$.
>
> ```retta
> titolo: Solutions of $x^2 - 2x - 3 > 0$
> da: -4 6
> int: (-inf, -1)
> int: (3, +inf)
> ```

> [!ESEMPIO] With $a < 0$: $-2x^2 + 5x + 3 \geq 0$
> Multiply by $-1$ and reverse: $2x^2 - 5x - 3 \leq 0$. $\Delta = 25 + 24 = 49$, $x = \frac{5 \pm 7}{4}$: $x_1 = -\frac{1}{2}$ and $x_2 = 3$. Direction $\leq$: inner interval, endpoints included. Solution: $-\frac{1}{2} \leq x \leq 3$, that is $\left[-\frac{1}{2}, 3\right]$.
>
> ```retta
> titolo: Solutions of $-2x^2 + 5x + 3 \geq 0$
> da: -2 4
> int: [-1/2, 3]
> tacca: -1/2 | $-1/2$
> ```

> [!ESEMPIO] $\Delta = 0$ and $\Delta < 0$
> $x^2 + 4x + 4 > 0$: the trinomial is the square $(x + 2)^2$, which is zero only for $x = -2$ and positive elsewhere. Solution: $x \neq -2$. With the direction $\leq 0$, on the other hand, the only solution would be $x = -2$.
>
> $x^2 + x + 1 < 0$: $\Delta = 1 - 4 = -3 < 0$ and the parabola lies entirely above the axis. No solutions. With the direction $> 0$ the solution would be every $x \in \R$.

> [!TRAPPOLA] $x^2 < 9$ is not "$x < \pm 3$"
> $x^2 < 9$ has solutions $-3 < x < 3$ (inner interval), while $x^2 > 9$ has solutions $x < -3$ or $x > 3$. And $x^2 > -4$ is true for every $x$, because a square is never negative. Another common mistake: multiplying by $-1$ to make $a$ positive and forgetting to reverse the direction.

> [!TEST] Discarding options quickly
> When the answers are four sets, try a convenient number (often $x = 0$) in the original inequality. For $x^2 - 2x - 3 > 0$, with $x = 0$ you get $-3 > 0$, false: all the options that contain $0$ are wrong. Then check the endpoints: they are included only if the direction is $\geq$ or $\leq$.

### Second-degree word problems

The method is the same as for first-degree problems, but you often find two solutions and one of them may **not be acceptable** (a negative length, a negative age, a non-integer number of objects).

> [!ESEMPIO] The sides of a rectangle
> A rectangle has area $60$ cm² and one side is $7$ cm longer than the other. Let $x$ be the short side: the other one is $x + 7$ and $x(x + 7) = 60$, that is $x^2 + 7x - 60 = 0$. $\Delta = 49 + 240 = 289 = 17^2$, so $x = \frac{-7 \pm 17}{2}$: $x = 5$ or $x = -12$. A length cannot be negative: the sides are $5$ cm and $12$ cm.

> [!ESEMPIO] Consecutive numbers
> The product of two consecutive natural numbers is $132$. With $x$ the smaller one: $x(x + 1) = 132$, that is $x^2 + x - 132 = 0$. $\Delta = 1 + 528 = 529 = 23^2$, $x = \frac{-1 \pm 23}{2}$: $x = 11$ or $x = -12$. Natural numbers are not negative: the numbers you are looking for are $11$ and $12$.

> [!ESEMPIO] A stone thrown upwards
> The height (in metres) of a stone after $t$ seconds is $h = 20t - 5t^2$. When is it at $15$ m? And for how long does it stay above $15$ m?
>
> $20t - 5t^2 = 15$ becomes $5t^2 - 20t + 15 = 0$, that is, dividing by $5$, $t^2 - 4t + 3 = 0$: $t = 1$ or $t = 3$. The stone passes $15$ m on the way up after $1$ second and on the way down after $3$ seconds.
>
> Above $15$ m: $20t - 5t^2 > 15$, that is $-5t^2 + 20t - 15 > 0$; dividing by $-5$ the direction is reversed: $t^2 - 4t + 3 < 0$, which holds for $1 < t < 3$. The stone stays above $15$ m for $2$ seconds.
>
> ```grafico
> titolo: The height $h = 20t - 5t^2$ as a function of the time $t$ and the level $h = 15$
> x: -0.5 4.5
> y: -2 22
> nomi: t h
> proporzioni: libere
> f: 20x - 5x^2 | da=0 | a=4
> orizzontale: 15 | rosso | tratteggio | $h = 15$
> punto: 1 15 | $t = 1$ | no
> punto: 3 15 | $t = 3$ | ne
> ```

## 3.3 Systems of equations

### What a system is

> [!DEF] System and solution
> A **system** is a group of two or more equations that must hold **at the same time**. It is written with a curly bracket:
> $$
> \begin{cases} x + y = 5 \\ x - y = 1 \end{cases}
> $$
> A **solution** of a system in two unknowns is an **ordered pair** $(x, y)$ that makes all the equations true; with three unknowns it is a triple $(x, y, z)$, and so on. Here the solution is $(3, 2)$: $3 + 2 = 5$ and $3 - 2 = 1$. The pair $(2, 3)$, on the other hand, does not work, because the order matters.

A system can have:

- **a single solution** (in systems of degree higher than one, possibly more than one, but finitely many): it is called **determined**;
- **infinitely many solutions**: it is called **indeterminate**;
- **no solutions**: it is called **impossible** or **inconsistent**.

In the first two cases the system is **consistent**.

> [!DEF] Degree of a system
> The **degree** of a polynomial equation in several unknowns is the highest degree of its terms; in a term such as $x^2y$ you add the exponents ($2 + 1 = 3$). The **degree of a system** is the **product** of the degrees of its equations. For example:
> $$
> \begin{cases} x + y = 3 \\ xy = 2 \end{cases} \text{ has degree } 1 \cdot 2 = 2, \qquad \begin{cases} x^3 - y = 0 \\ x^2 + y^2 = 1 \end{cases} \text{ has degree } 3 \cdot 2 = 6.
> $$

A system of degree $1$, made only of first-degree equations, is called a **linear system**. With two equations and two unknowns its standard form is
$$
\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}
$$
where $a_1, b_1, c_1, a_2, b_2, c_2$ are real numbers. If the constant terms $c_1$ and $c_2$ are both zero the system is called **homogeneous**, and it always has at least the solution $(0, 0)$, called the **zero solution**.

### Substitution method

> [!METODO] Substitution
> 1. From one of the equations, express one unknown in terms of the other (choose the one with coefficient $1$ or $-1$: no fractions).
> 2. Substitute the expression you found into the other equation: you get an equation with only one unknown.
> 3. Solve it.
> 4. Put the value you found into the expression from step 1 and compute the other unknown.
> 5. Write the pair $(x, y)$ and check it in **both** equations.

> [!ESEMPIO] Substitution
> $$
> \begin{cases} 2x + y = 7 \\ 3x - 2y = 7 \end{cases}
> $$
> From the first: $y = 7 - 2x$. Substitute into the second: $3x - 2(7 - 2x) = 7$, that is $3x - 14 + 4x = 7$, so $7x = 21$ and $x = 3$. Then $y = 7 - 2 \cdot 3 = 1$.
>
> Solution: $(3, 1)$. Check: $6 + 1 = 7$ and $9 - 2 = 7$.

### Comparison method

It is a variant of substitution: you express **the same** unknown from both equations and then set the two expressions equal.

> [!ESEMPIO] Comparison
> $$
> \begin{cases} y = 2x - 1 \\ y = -x + 5 \end{cases}
> $$
> The two expressions for $y$ must be equal: $2x - 1 = -x + 5$, so $3x = 6$ and $x = 2$. Then $y = 2 \cdot 2 - 1 = 3$. Solution: $(2, 3)$.

Every linear equation in $x$ and $y$ represents a **straight line** in the Cartesian plane (module 5): solving the system means finding the point where the two lines meet.

```grafico
titolo: The lines $y = 2x - 1$ and $y = -x + 5$ meet at the point $(2, 3)$
x: -2 6
y: -3 5
f: 2x - 1 | da=-2 | a=0.5 | $y = 2x - 1$ | e
f: 2x - 1 | da=0.5 | a=6
f: -x + 5 | rosso | $y = -x + 5$ | ne
punto: 2 3 | $(2, 3)$ | e
```

### Elimination method

> [!METODO] Elimination (*riduzione*, also called Gauss's method)
> 1. Multiply one or both equations by **non-zero** numbers so that one of the unknowns has opposite (or equal) coefficients in the two equations.
> 2. Add the two equations side by side (or subtract them, if the coefficients are equal): that unknown disappears.
> 3. Solve the remaining equation in one unknown.
> 4. Substitute the value you found into one of the original equations and find the other unknown.
>
> The equation obtained by adding can replace one of the two original equations: the new system is **equivalent**, that is it has the same solutions.

> [!ESEMPIO] Coefficients already opposite
> $$
> \begin{cases} 3x + 2y = 12 \\ 5x - 2y = 4 \end{cases}
> $$
> The coefficients of $y$ are $2$ and $-2$: adding side by side you get $8x = 16$, so $x = 2$. From the first: $6 + 2y = 12$, that is $y = 3$. Solution: $(2, 3)$.

> [!ESEMPIO] Multiply first
> $$
> \begin{cases} 2x + 3y = 1 \\ 3x + 4y = 2 \end{cases}
> $$
> Multiply the first by $3$ and the second by $2$: $6x + 9y = 3$ and $6x + 8y = 4$. Subtract the second from the first: $y = -1$. Then $2x - 3 = 1$, so $x = 2$. Solution: $(2, -1)$.

> [!TRAPPOLA] Multiply all the terms
> When you multiply an equation by a number, multiply **the constant term too**. And watch the signs when you subtract: $(6x + 9y) - (6x + 8y) = y$, but on the right $3 - 4 = -1$.

> [!NOTA] Cramer's rule
> For the system $a_1x + b_1y = c_1$, $a_2x + b_2y = c_2$ compute the number $D = a_1b_2 - a_2b_1$. If $D \neq 0$ the solution is unique and it is
> $$
> x = \frac{c_1b_2 - c_2b_1}{D} \qquad y = \frac{a_1c_2 - a_2c_1}{D}
> $$
> In the previous example: $D = 2 \cdot 4 - 3 \cdot 3 = -1$, $x = \frac{1 \cdot 4 - 2 \cdot 3}{-1} = 2$, $y = \frac{2 \cdot 2 - 3 \cdot 1}{-1} = -1$. It is handy for checking a result. If $D = 0$ the system is impossible or indeterminate.

### How many solutions a linear system has

If, while solving a system, the unknowns all disappear together, you are left with an equality between numbers:

- if it is **false** (for example $0 = 1$) the system is **impossible**;
- if it is **true** ($0 = 0$) the system is **indeterminate**: one of the equations adds no information.

> [!PROP] Comparing the coefficients
> For the system $a_1 x + b_1 y = c_1$, $a_2 x + b_2 y = c_2$, with non-zero coefficients:
>
> | Condition | System | Lines |
> |---|---|---|
> | $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ | determined (one solution) | intersecting |
> | $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$ | impossible | parallel and distinct |
> | $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$ | indeterminate | coincident |

> [!ESEMPIO] An impossible system
> $$
> \begin{cases} x + 2y = 3 \\ 2x + 4y = 5 \end{cases}
> $$
> Multiply the first by $2$: $2x + 4y = 6$. But the second says $2x + 4y = 5$: subtracting you get $0 = 1$, false. The system is impossible: the two lines are parallel. With the ratios: $\frac{1}{2} = \frac{2}{4}$, but $\frac{3}{5}$ is different.

```grafico
titolo: Parallel lines: $x + 2y = 3$ and $2x + 4y = 5$ never meet
x: -3 5
y: -2 4
f: (3 - x)/2 | da=-3 | a=-1 | $x + 2y = 3$ | ne
f: (3 - x)/2 | da=-1 | a=5
f: (5 - 2x)/4 | rosso
testo: 1.2 0.3 | $2x + 4y = 5$ | bianco
```

> [!ESEMPIO] An indeterminate system
> $$
> \begin{cases} x - y = 2 \\ 3x - 3y = 6 \end{cases}
> $$
> The second equation is the first multiplied by $3$: they represent the same line. Every pair with $x - y = 2$ works: setting $y = t$, where $t$ is any real number (a **parameter**), the solutions are the pairs $(2 + t, t)$. For example $(2, 0)$, $(3, 1)$, $(0, -2)$.

### Systems with three unknowns

With three equations in three unknowns you use the same methods: with a substitution (or an elimination) you remove one unknown and reduce the problem to a system of two equations in two unknowns.

> [!ESEMPIO] A system of three equations in three unknowns
> $$
> \begin{cases} x + y + z = 6 \\ x - y = -1 \\ y + 2z = 8 \end{cases}
> $$
> From the second: $x = y - 1$. Substitute into the first: $(y - 1) + y + z = 6$, that is $2y + z = 7$. Now you have a system in $y$ and $z$:
> $$
> \begin{cases} 2y + z = 7 \\ y + 2z = 8 \end{cases}
> $$
> From the first $z = 7 - 2y$; in the second $y + 14 - 4y = 8$, so $-3y = -6$ and $y = 2$. Then $z = 3$ and $x = 1$. Solution: the triple $(1, 2, 3)$.

With three unknowns too, a system can be impossible (at some point you find a false equality, such as $0 = -2$) or indeterminate: in that case the solutions are written in terms of a parameter, as in the indeterminate system seen above.

### Higher-degree systems (an outline)

**Sum and product system.** The system
$$
\begin{cases} x + y = s \\ xy = p \end{cases}
$$
has degree $2$. The numbers $x$ and $y$ are the solutions of the equation $t^2 - st + p = 0$ (it is the same idea as the sum and product of the roots). It is the system you solve without noticing when you factorise $x^2 + sx + p$ by looking for two numbers with sum $s$ and product $p$.

> [!ESEMPIO] Sum $5$ and product $6$
> $t^2 - 5t + 6 = 0$ has solutions $t = 2$ and $t = 3$. The system $x + y = 5$, $xy = 6$ therefore has **two** solutions: $(2, 3)$ and $(3, 2)$.

**A second-degree equation and a first-degree one.** You use substitution: express one unknown from the first-degree equation and substitute it into the second-degree one.

> [!ESEMPIO] Circle and line
> $$
> \begin{cases} x^2 + y^2 = 10 \\ x - y = 2 \end{cases}
> $$
> From the second $x = y + 2$. In the first: $(y + 2)^2 + y^2 = 10$, that is $2y^2 + 4y - 6 = 0$ and, dividing by $2$, $y^2 + 2y - 3 = 0$, with solutions $y = 1$ and $y = -3$. From $x = y + 2$: if $y = 1$ then $x = 3$; if $y = -3$ then $x = -1$. Solutions: $(3, 1)$ and $(-1, -3)$.

```grafico
titolo: The circle $x^2 + y^2 = 10$ and the line $y = x - 2$ meet at two points
x: -5 5
y: -5 5
cerchio: 0 0 sqrt(10)
f: x - 2 | rosso | da=-5 | a=3.5
f: x - 2 | rosso | da=3.5 | a=5 | $y = x - 2$ | no
punto: 3 1 | $(3, 1)$ | ne
punto: -1 -3 | $(-1, -3)$ | no
```

A linear system has at most one solution (if it is not indeterminate); a second-degree system like this one can have two. For higher degrees the calculations quickly become very complicated.

### Word problems with systems

When a problem has two unknown quantities it is often more natural to use two unknowns and a system.

> [!ESEMPIO] A two-digit number
> In a two-digit number the sum of the digits is $9$; swapping the digits gives a number that is $27$ greater than the original one. What is the number?
>
> Let $d$ be the tens digit and $u$ the units digit: the number is $10d + u$ and the one with the digits swapped is $10u + d$. Then
> $$
> \begin{cases} d + u = 9 \\ (10u + d) - (10d + u) = 27 \end{cases}
> $$
> The second becomes $9u - 9d = 27$, that is $u - d = 3$. Adding it to the first: $2u = 12$, so $u = 6$ and $d = 3$. The number is $36$ (indeed $63 - 36 = 27$).

> [!ESEMPIO] Notebooks and pens
> $3$ notebooks and $2$ pens cost $9$ euros; $1$ notebook and $4$ pens cost $8$ euros. With $q$ the price of a notebook and $p$ that of a pen:
> $$
> \begin{cases} 3q + 2p = 9 \\ q + 4p = 8 \end{cases}
> $$
> From the second $q = 8 - 4p$; in the first $24 - 12p + 2p = 9$, that is $-10p = -15$ and $p = 1.5$. Then $q = 8 - 6 = 2$. A notebook costs $2$ euros, a pen $1.50$ euros.

> [!TEST] Systems in the test
> - "Which pair is a solution of the system?": substitute the proposed pairs into **both** equations. The typical distractors satisfy only one equation or have $x$ and $y$ swapped.
> - "Is the system determined, impossible or indeterminate?": compare the ratios of the coefficients, without solving.
> - "What is the degree of the system?": multiply the degrees of the equations, do not add them.
> - With a parameter ("for which value of $k$ is the system impossible?"): require the ratios of the coefficients of $x$ and of $y$ to be equal and check that the ratio of the constant terms is different.

## Exercises

::: esercizio base An equation with brackets
Solve $5x - 2(x + 3) = x + 4$.
::: soluzione
Expand the product: $5x - 2x - 6 = x + 4$, that is $3x - 6 = x + 4$.

Transpose: $3x - x = 4 + 6$, so $2x = 10$ and $x = 5$.

Check: on the left $25 - 2 \cdot 8 = 9$, on the right $5 + 4 = 9$.
:::

::: esercizio base What type of equation?
Decide whether each equation is determined, impossible or indeterminate, and solve the determined one.

1. $3(x - 2) = 3x - 6$
2. $2x + 1 = 2(x + 1)$
3. $4x - 3 = x + 3$
::: soluzione
1. $3x - 6 = 3x - 6$, that is $0 \cdot x = 0$: **indeterminate** (identity), every $x \in \R$ is a solution.
2. $2x + 1 = 2x + 2$, that is $0 \cdot x = 1$: **impossible**.
3. $4x - x = 3 + 3$, that is $3x = 6$: **determined**, with solution $x = 2$.
:::

::: esercizio base An inequality and a system of inequalities
1. Solve $3 - 2x \geq x - 9$.
2. Solve the system formed by $3 - 2x \geq x - 9$ and $2x + 1 > 0$.
::: soluzione
1. Transpose: $-2x - x \geq -9 - 3$, that is $-3x \geq -12$. Divide by $-3$ and reverse the direction: $x \leq 4$, that is $(-\infty, 4]$.
2. The second inequality gives $2x > -1$, that is $x > -\frac{1}{2}$. The common part with $x \leq 4$ is $-\frac{1}{2} < x \leq 4$, that is $\left(-\frac{1}{2}, 4\right]$.

```retta
titolo: Solutions of the system: $-\frac{1}{2} < x \leq 4$
da: -2 6
int: (-1/2, 4]
tacca: -1/2 | $-1/2$
```
:::

::: esercizio base Second-degree equations
Solve:

1. $x^2 - 7x + 10 = 0$
2. $3x^2 - 27 = 0$
3. $5x^2 + 10x = 0$
::: soluzione
1. $\Delta = 49 - 40 = 9$, $x = \frac{7 \pm 3}{2}$: $x = 2$ or $x = 5$. Check: sum $7$ and product $10$, matching $-\frac{b}{a}$ and $\frac{c}{a}$.
2. Pure equation: $x^2 = 9$, so $x = \pm 3$.
3. Spurious equation: $5x(x + 2) = 0$, so $x = 0$ or $x = -2$.
:::

::: esercizio base A linear system
Solve by substitution:
$$
\begin{cases} x + 3y = 5 \\ 2x - y = 3 \end{cases}
$$
::: soluzione
From the first $x = 5 - 3y$. In the second: $2(5 - 3y) - y = 3$, that is $10 - 6y - y = 3$, so $-7y = -7$ and $y = 1$. Then $x = 5 - 3 = 2$.

Solution: $(2, 1)$. Check: $2 + 3 = 5$ and $4 - 1 = 3$.
:::

::: esercizio medio An equation with denominators
Solve $\frac{2x - 1}{3} - \frac{x + 2}{4} = \frac{x}{6} - 1$.
::: soluzione
The lcm of $3$, $4$ and $6$ is $12$. Multiply every term by $12$, including the $-1$:
$$
4(2x - 1) - 3(x + 2) = 2x - 12
$$
Expand: $8x - 4 - 3x - 6 = 2x - 12$, that is $5x - 10 = 2x - 12$. Transpose: $3x = -2$, so $x = -\frac{2}{3}$.

Check: on the left $\frac{-7/3}{3} - \frac{4/3}{4} = -\frac{7}{9} - \frac{3}{9} = -\frac{10}{9}$; on the right $-\frac{1}{9} - 1 = -\frac{10}{9}$.
:::

::: esercizio medio An inequality with denominators
Solve $\frac{x - 2}{3} - \frac{x + 1}{2} \geq \frac{x}{6}$ and write the solution as an interval.
::: soluzione
Multiply by $6$ (positive, the direction stays the same): $2(x - 2) - 3(x + 1) \geq x$, that is $2x - 4 - 3x - 3 \geq x$, so $-x - 7 \geq x$.

Transpose: $-2x \geq 7$. Divide by $-2$ and reverse: $x \leq -\frac{7}{2}$.

Solution: $\left(-\infty, -\frac{7}{2}\right]$.
:::

::: esercizio medio Three second-degree inequalities
Solve:

1. $-x^2 + 4x + 5 > 0$
2. $x^2 - 6x + 9 > 0$
3. $2x^2 + 3 \leq 0$
::: soluzione
1. Multiply by $-1$ and reverse: $x^2 - 4x - 5 < 0$. The roots of $x^2 - 4x - 5 = 0$ are $-1$ and $5$ (sum $4$, product $-5$). Direction $<$: inner interval, $-1 < x < 5$.
2. $x^2 - 6x + 9 = (x - 3)^2$ is positive except at $x = 3$, where it is zero. Solution: $x \neq 3$.
3. $2x^2 + 3$ is always at least $3$ (a square is not negative), so it is never $\leq 0$: no solutions.
:::

::: esercizio medio A group of friends
A third of a group of friends goes to the cinema, a quarter goes to the theatre and the remaining $10$ stay at home. How many people are there in the group?
::: soluzione
Let $x$ be the number of people. $\frac{x}{3}$ go to the cinema, $\frac{x}{4}$ to the theatre, $10$ stay at home, and altogether there are $x$ of them:
$$
\frac{x}{3} + \frac{x}{4} + 10 = x
$$
Multiply by $12$: $4x + 3x + 120 = 12x$, so $120 = 5x$ and $x = 24$. Check: $8$ at the cinema, $6$ at the theatre, $10$ at home, and $8 + 6 + 10 = 24$.
:::

::: esercizio medio A rectangular vegetable garden
A rectangular vegetable garden has perimeter $26$ m and area $40$ m². How long are the sides?
::: soluzione
If $x$ and $y$ are the sides, $2(x + y) = 26$ and $xy = 40$, that is
$$
\begin{cases} x + y = 13 \\ xy = 40 \end{cases}
$$
It is a sum and product system: $x$ and $y$ are the solutions of $t^2 - 13t + 40 = 0$. $\Delta = 169 - 160 = 9$, $t = \frac{13 \pm 3}{2}$: $t = 8$ or $t = 5$. The sides are $5$ m and $8$ m long.
:::

::: esercizio medio A system with three unknowns
Solve
$$
\begin{cases} x + y - z = 1 \\ 2x + y = 3 \\ x + z = 2 \end{cases}
$$
::: soluzione
From the third $z = 2 - x$. In the first: $x + y - (2 - x) = 1$, that is $2x + y = 3$: it is **the same** equation as the second. Only two different equations remain for three unknowns: the system is **indeterminate**.

Set $x = t$ (parameter): from the second $y = 3 - 2t$, from the third $z = 2 - t$. The solutions are the triples $(t, 3 - 2t, 2 - t)$ with $t \in \R$; for example with $t = 0$ you get $(0, 3, 2)$ and with $t = 1$ you get $(1, 1, 1)$.
:::

::: esercizio test An equation with a parameter
Consider the equation $(k - 2)x = k + 1$, where $k$ is a real number.

1. For which value of $k$ is it impossible?
2. Is there a value of $k$ for which it is indeterminate?
3. For $k = 5$, what is the solution?
::: soluzione
1. It is impossible when the coefficient of $x$ is zero and the constant term is not: $k - 2 = 0$, that is $k = 2$. Then it becomes $0 \cdot x = 3$, false for every $x$.
2. You would need both $k - 2 = 0$ and $k + 1 = 0$, that is $k = 2$ and $k = -1$: this cannot happen. No value of $k$ makes it indeterminate.
3. With $k = 5$: $3x = 6$, so $x = 2$.
:::

::: esercizio test Discriminant with a parameter
For which values of $k$ does the equation $x^2 - 6x + k = 0$ have two distinct real solutions? For which value does it have only one, and what is it?
::: soluzione
$\Delta = 36 - 4k$. Two distinct solutions if $36 - 4k > 0$, that is $k < 9$. A single solution if $\Delta = 0$, that is $k = 9$: the equation becomes $x^2 - 6x + 9 = (x - 3)^2 = 0$ and the solution is $x = 3$. For $k > 9$ there are no real solutions.
:::

::: esercizio test Sum and product
Without solving the equation $2x^2 - 7x + 3 = 0$, compute the sum and the product of the solutions. Then find the solutions and check.
::: soluzione
Sum $= -\frac{b}{a} = \frac{7}{2}$, product $= \frac{c}{a} = \frac{3}{2}$.

$\Delta = 49 - 24 = 25$, $x = \frac{7 \pm 5}{4}$: $x_1 = \frac{1}{2}$ and $x_2 = 3$. Check: $\frac{1}{2} + 3 = \frac{7}{2}$ and $\frac{1}{2} \cdot 3 = \frac{3}{2}$.
:::

::: esercizio test A system with a parameter
For which value of $a$ is the system
$$
\begin{cases} 2x + ay = 1 \\ 4x + 6y = 5 \end{cases}
$$
impossible? For the other values of $a$, how many solutions does it have?
::: soluzione
Ratios of the coefficients: $\frac{2}{4} = \frac{1}{2}$ for $x$, $\frac{a}{6}$ for $y$, $\frac{1}{5}$ for the constant terms. The first two are equal if $\frac{a}{6} = \frac{1}{2}$, that is $a = 3$; in that case the ratio of the constant terms, $\frac{1}{5}$, is different from $\frac{1}{2}$ and the system is **impossible**. Check: with $a = 3$, multiplying the first by $2$ gives $4x + 6y = 2$, which contradicts $4x + 6y = 5$.

For $a \neq 3$ the ratios of the coefficients of $x$ and of $y$ are different: the system has **exactly one** solution.
:::

::: esercizio test Tickets
For a show, $120$ tickets were sold, some full-price at $10$ euros and some reduced at $6$ euros, with takings of $1000$ euros. How many tickets of each type were sold?
::: soluzione
With $i$ the number of full-price tickets and $r$ the number of reduced ones:
$$
\begin{cases} i + r = 120 \\ 10i + 6r = 1000 \end{cases}
$$
From the first $r = 120 - i$; in the second $10i + 720 - 6i = 1000$, that is $4i = 280$ and $i = 70$. So $r = 50$. Check: $700 + 300 = 1000$.
:::

::: esercizio test The sum of the first natural numbers
The sum of the natural numbers from $1$ to $n$ equals $\frac{n(n + 1)}{2}$. For which $n$ is the sum equal to $78$?
::: soluzione
$\frac{n(n + 1)}{2} = 78$ becomes $n^2 + n = 156$, that is $n^2 + n - 156 = 0$. $\Delta = 1 + 624 = 625 = 25^2$, $n = \frac{-1 \pm 25}{2}$: $n = 12$ or $n = -13$. A natural number is needed: $n = 12$. Check: $\frac{12 \cdot 13}{2} = 78$.
:::

## Self-check quiz

```quiz
D: What is the solution of $3(x - 1) = x + 5$?
+ $x = 4$
- $x = 3$
- $x = 2$
- $x = -4$
= $3x - 3 = x + 5$, so $2x = 8$ and $x = 4$. The value $3$ comes from forgetting to multiply the $-1$ by $3$; the value $2$ from a sign error when transposing.

D: Solve $\frac{x}{2} - \frac{x}{3} = 2$. What is the value of $x$?
N: 12
= Multiply by $6$: $3x - 2x = 12$, that is $x = 12$.

D: True or false: the equation $2(x + 3) = 2x + 6$ is impossible.
- True
+ False
= Expanding you get $2x + 6 = 2x + 6$, that is $0 \cdot x = 0$: it is an identity, true for every $x$.

D: The solution set of $-3x + 6 < 0$ is
+ $(2, +\infty)$
- $(-\infty, 2)$
- $[2, +\infty)$
- $(-2, +\infty)$
= $-3x < -6$; dividing by $-3$ the direction is reversed and you get $x > 2$. The number $2$ is excluded because the inequality is strict; $(-\infty, 2)$ is the mistake of those who do not reverse the direction.

D: What is the discriminant of $2x^2 - 3x - 2 = 0$?
N: 25
= $\Delta = b^2 - 4ac = 9 - 4 \cdot 2 \cdot (-2) = 9 + 16 = 25$.

D: Which numbers are solutions of $x^2 - x - 6 = 0$?
+ $3$
+ $-2$
- $-3$
- $2$
= You need two numbers with sum $1$ and product $-6$: they are $3$ and $-2$. With $-3$ and $2$ the sum would be $-1$.

D: The inequality $x^2 - 4 < 0$ is satisfied for
+ $-2 < x < 2$
- $x < -2$ or $x > 2$
- $x < 2$
- no real $x$
= Roots $\pm 2$, upward-opening parabola, direction $<$: inner interval. The answer $x < 2$ forgets that the numbers less than $-2$ also have a square greater than $4$.

D: True or false: the inequality $x^2 + 2x + 3 > 0$ is satisfied for every real $x$.
+ True
- False
= $\Delta = 4 - 12 = -8 < 0$ and $a = 1 > 0$: the parabola lies entirely above the $x$-axis.

D: What is the product of the solutions of $3x^2 - 5x - 12 = 0$?
N: -4
= Product $= \frac{c}{a} = \frac{-12}{3} = -4$. Indeed the solutions are $3$ and $-\frac{4}{3}$.

D: For which value of $k$ does the equation $x^2 + 8x + k = 0$ have two coincident solutions?
+ $k = 16$
- $k = 64$
- $k = -16$
- $k = 4$
= You need $\Delta = 64 - 4k = 0$, that is $k = 16$: the equation becomes $(x + 4)^2 = 0$.

D: What is the solution of the system formed by $x + y = 7$ and $x - y = 3$?
+ $(5, 2)$
- $(2, 5)$
- $(4, 3)$
- $(6, 3)$
= Adding the equations gives $2x = 10$, so $x = 5$ and $y = 2$. The pair $(2, 5)$ has the coordinates swapped; $(4, 3)$ satisfies only the first equation and $(6, 3)$ only the second.

D: Which of these systems are impossible?
+ $x + y = 1$ and $x + y = 3$
+ $x + 2y = 3$ and $2x + 4y = 1$
- $2x - y = 1$ and $4x - 2y = 2$
- $x - y = 0$ and $x + y = 2$
= In the system $x + y = 1$, $x + y = 3$ the same sum would have to equal $1$ and $3$. In the system $x + 2y = 3$, $2x + 4y = 1$ the coefficients are proportional ($\frac{1}{2} = \frac{2}{4}$) but the constant terms are not. The system with $4x - 2y = 2$ is indeterminate (the second equation is twice the first); the system $x - y = 0$, $x + y = 2$ has the unique solution $(1, 1)$.

D: What is the degree of the system formed by $x^2y + y = 1$ and $x - y^2 = 0$?
N: 6
= The first equation has degree $3$ (the term $x^2y$ has degree $2 + 1$), the second has degree $2$: the degree of the system is the product $3 \cdot 2 = 6$.

D: A number added to twice itself and decreased by $5$ gives $16$. The number is
+ $7$
- $\frac{11}{3}$
- $21$
- $5$
= $x + 2x - 5 = 16$, so $3x = 21$ and $x = 7$. The value $\frac{11}{3}$ comes from adding $5$ instead of subtracting it; $21$ is $3x$, not $x$.

D: True or false: the system formed by $2x + 4y = 6$ and $x + 2y = 3$ has infinitely many solutions.
+ True
- False
= The first equation is the second multiplied by $2$: they represent the same line and the system is indeterminate.

D: Which inequality has the interval $[-1, 3]$ as its solution set?
+ $(x + 1)(x - 3) \leq 0$
- $(x + 1)(x - 3) \geq 0$
- $(x - 1)(x + 3) \leq 0$
- $(x + 1)(x - 3) < 0$
= The roots must be $-1$ and $3$, so the factors are $(x + 1)$ and $(x - 3)$; you need the inner interval (direction $\leq$) with the endpoints included (non-strict inequality). $(x - 1)(x + 3) \leq 0$, on the other hand, gives $[-3, 1]$.
```

## Checklist

```checklist
I can recognise whether a first-degree equation is determined, impossible or indeterminate
I can use the two equivalence principles, also to remove numerical denominators
I can solve a first-degree inequality and reverse the direction when I multiply or divide by a negative number
I can write the solutions as an inequality, as an interval and on the number line
I can solve a system of inequalities by taking the common part of the solutions
I can compute the discriminant and say how many real solutions a second-degree equation has
I can use the quadratic formula (the reduced one too) and solve incomplete equations on the fly
I can factorise a second-degree trinomial and use the sum and product of the roots
I can solve a second-degree inequality by thinking of the parabola
I can solve a linear system by substitution, by comparison and by elimination
I can recognise a determined, impossible or indeterminate system and compute the degree of a system
I can solve a second-degree system that contains a first-degree equation
I can translate a problem into an equation, inequality or system and discard the solutions that are not acceptable
```
