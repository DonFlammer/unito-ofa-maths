---
titolo: "Mock tests"
breve: "Eight full-length tests like the OFA test (OFA: additional learning requirement, obbligo formativo aggiuntivo): 5 questions, 45 minutes, solutions with every step."
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/simulazioni.md
---

## How to use them

- Do each mock test in one go, as in the real test: **45 minutes** on the stopwatch, **no calculator**, a sheet of scratch paper.
- Each question is worth 2 points; when it is split into a) and b), each part is worth 1 point. The pass mark is **6/10**.
- In the multiple-choice questions here you get full marks only if you choose **all** the right answers and no wrong one. We do not know whether the real test gives partial marks: we practise with the stricter rule.
- Wrong answers do not lose you points: **always answer**, even a question you cannot do, choosing among the options you have not ruled out.
- In numeric answers you can write an integer, a decimal (with a comma or a point) or a fraction: `2,5`, `2.5` and `5/2` are all accepted.
- The mock tests are in order of difficulty: 1 and 2 are the easiest, from 3 to 6 the level is intermediate, 7 and 8 are the most demanding (parameters, cases to distinguish, less common formulas).
- After marking, read the explanation of **every** question, including the ones you got right: there is often a shorter route. Below each mock test you will find the module of each question: if you keep going wrong on the same one, go back to the notes for that module and redo its exercises before the next mock test.

## Mock test 1

```simulazione
D: Let $A$ be the set of the natural divisors of $12$ and let $B = \{x \in \N \mid 2 \le x < 7\}$.
a) How many elements does the set $A \cup B$ have?
N: 7
= First write the sets by listing their elements. The divisors of $12$ are $A = \{1, 2, 3, 4, 6, 12\}$; $B$ contains the natural numbers from $2$ to $6$ ($7$ is excluded because the inequality $x < 7$ is strict): $B = \{2, 3, 4, 5, 6\}$. The union contains the elements that are in at least one of the two sets, each counted only once: $A \cup B = \{1, 2, 3, 4, 5, 6, 12\}$, that is, $7$ elements. Common mistake: adding $6 + 5 = 11$. The $4$ common elements ($2, 3, 4, 6$) must be counted only once: $6 + 5 - 4 = 7$.
b) The symmetric difference $A \, \Delta \, B$ (the elements that are in only one of the two sets) is
+ $\{1, 5, 12\}$
- $\{2, 3, 4, 6\}$
- $\{1, 12\}$
- $\{1, 2, 3, 4, 5, 6, 12\}$
= The common elements are $A \cap B = \{2, 3, 4, 6\}$: they are exactly the ones to remove from the union. What is left is $1$ and $12$ (only in $A$) and $5$ (only in $B$), so $A \, \Delta \, B = \{1, 5, 12\}$. In symbols: $A \, \Delta \, B = (A \cup B) \setminus (A \cap B)$. The other options: $\{2, 3, 4, 6\}$ is the intersection, $\{1, 12\}$ contains only the elements of $A$ that are not in $B$ (the $5$ is missing), $\{1, 2, 3, 4, 5, 6, 12\}$ is the union.

D: Which of the following numbers are roots of the polynomial $P(x) = x^3 - 2x^2 - 5x + 6$?
+ $1$
+ $3$
+ $-2$
- $-1$
- $2$
- $-3$
= The integer roots must be looked for among the divisors of the constant term $6$: $\pm 1, \pm 2, \pm 3, \pm 6$. Try $x = 1$: $P(1) = 1 - 2 - 5 + 6 = 0$, so $1$ is a root and $P(x)$ is divisible by $x - 1$. With Ruffini's rule, that is synthetic division (coefficients $1, -2, -5, 6$ and root $1$), the quotient is $x^2 - x - 6$ with remainder $0$. The trinomial factorises with two numbers whose sum is $-1$ and whose product is $-6$, that is $-3$ and $2$: $$P(x) = (x - 1)(x^2 - x - 6) = (x - 1)(x - 3)(x + 2)$$ The roots are $1$, $3$ and $-2$. Checking the other options: $P(-1) = -1 - 2 + 5 + 6 = 8$, $P(2) = 8 - 8 - 10 + 6 = -4$, $P(-3) = -27 - 18 + 15 + 6 = -24$, none of them is zero. A third-degree polynomial has at most three roots: once you have found the first three, you can stop.

D: A rectangle has perimeter $20$ cm and area $21$ cm². Call $x$ the length, in cm, of one side.
a) How long, in cm, is the longer side?
N: 7
= The semi-perimeter is $10$, so if one side measures $x$ the other measures $10 - x$ (with $0 < x < 10$). The area gives the equation $x(10 - x) = 21$, that is $x^2 - 10x + 21 = 0$. Two numbers with sum $10$ and product $21$ are $3$ and $7$ (with the formula: $\Delta = 100 - 84 = 16$ and $x = \frac{10 \pm 4}{2}$). The sides measure $3$ cm and $7$ cm: the longer one is $7$ cm.
b) If the perimeter stays $20$ cm, for which values of $x$ is the area of the rectangle at least $16$ cm²?
+ $2 \le x \le 8$
- $x \le 2$ or $x \ge 8$
- $2 < x < 8$
- $0 < x \le 2$
= The area is $x(10 - x)$ and it must be $x(10 - x) \ge 16$, that is $-x^2 + 10x - 16 \ge 0$. Multiply by $-1$ and **reverse the direction**: $x^2 - 10x + 16 \le 0$. The associated equation has solutions $2$ and $8$ (sum $10$, product $16$). The parabola $y = x^2 - 10x + 16$ opens upwards, so it is negative or zero between the two roots, endpoints included: $2 \le x \le 8$, which already lies within $0 < x < 10$. If you forget to reverse the direction you find the outer intervals; if you forget the equals sign you lose $x = 2$ and $x = 8$, yet the $2 \times 8$ rectangle has an area of exactly $16$.

D: The solution set of the inequality $\dfrac{x^2 - 4}{x - 1} \ge 0$ is
+ $[-2, 1) \cup [2, +\infty)$
- $[-2, 1] \cup [2, +\infty)$
- $(-\infty, -2] \cup (1, 2]$
- $[-2, 2]$
= Domain condition (condizione di esistenza): $x \ne 1$. Study the sign of the numerator and of the denominator separately. Numerator: $x^2 - 4 \ge 0$ for $x \le -2$ or $x \ge 2$. Denominator: $x - 1 > 0$ for $x > 1$ (the denominator cannot be zero, so only $>$). Rule of signs: for $x < -2$ you have $(+)$ over $(-)$, negative; for $-2 < x < 1$ you have $(-)$ over $(-)$, positive; for $1 < x < 2$ you have $(-)$ over $(+)$, negative; for $x > 2$ you have $(+)$ over $(+)$, positive. Take the positive intervals plus the zeros of the numerator $x = \pm 2$, where the fraction equals $0$: $[-2, 1) \cup [2, +\infty)$. The value $1$ is always excluded because it makes the denominator zero: that is why $[-2, 1] \cup [2, +\infty)$ is wrong. $(-\infty, -2] \cup (1, 2]$ is the solution of the opposite inequality, $\le 0$. $[-2, 2]$ contains $1$, where the fraction does not exist, and the values between $1$ and $2$, where it is negative.

D: In the Cartesian plane you are given the points $A = (-1, 1)$ and $B = (5, 9)$.
a) What is the length of the segment $AB$?
N: 10
= Formula for the distance between two points: $$AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \sqrt{(5 + 1)^2 + (9 - 1)^2} = \sqrt{36 + 64} = \sqrt{100} = 10$$ Watch the sign: $x_B - x_A = 5 - (-1) = 6$, not $4$.
b) True or false: the point $P = (6, 2)$ is equidistant from $A$ and $B$.
+ True
- False
= Compute the two distances: $PA = \sqrt{(6 + 1)^2 + (2 - 1)^2} = \sqrt{49 + 1} = \sqrt{50}$ and $PB = \sqrt{(6 - 5)^2 + (2 - 9)^2} = \sqrt{1 + 49} = \sqrt{50}$. They are equal, so it is true. Put another way, $P$ lies on the perpendicular bisector (asse) of the segment $AB$, that is, on the line perpendicular to $AB$ through its midpoint $M = (2, 5)$. The slope of $AB$ is $\frac{9 - 1}{5 + 1} = \frac{4}{3}$, that of the perpendicular bisector is the negative reciprocal $-\frac{3}{4}$, and the perpendicular bisector has equation $y - 5 = -\frac{3}{4}(x - 2)$: for $x = 6$ you get exactly $y = 5 - 3 = 2$.
```

**Modules by question.** 1: sets (module 1) · 2: roots of a polynomial and Ruffini's rule (module 2) · 3: second-degree problem and inequality (module 3) · 4: rational inequality (module 4) · 5: distance between points and perpendicular bisector of a segment (module 5).

## Mock test 2

```simulazione
D: In a stationery shop $3$ notebooks and $2$ pens cost $9.50$ euros in total, while $2$ notebooks and $5$ pens cost $10$ euros. The notebooks all have the same price, and so do the pens. How much does one notebook cost, in euros?
N: 2.5
= Let $q$ be the price of a notebook and $p$ that of a pen. The text gives the system formed by $3q + 2p = 9.5$ and $2q + 5p = 10$. Elimination method: multiply the first equation by $2$ and the second by $3$, so that $q$ has the same coefficient in both: $6q + 4p = 19$ and $6q + 15p = 30$. Subtract the first from the second: $11p = 11$, so $p = 1$. Substitute into the second original equation: $2q + 5 = 10$, hence $q = 2.5$. A notebook costs $2.50$ euros. Check in the first equation: $3 \cdot 2.5 + 2 \cdot 1 = 7.5 + 2 = 9.5$. It always pays to check the solution of a system by substituting it into **all** the equations: a calculation error shows up straight away.

D: The equation $\sqrt{x + 7} = x - 5$ has as its solutions
+ only $x = 9$
- $x = 2$ and $x = 9$
- only $x = 2$
- no real solution
= The root has an even index, so it is greater than or equal to zero: the right-hand side must be too, $x - 5 \ge 0$, that is $x \ge 5$. Under this condition you can square both sides (the radicand will automatically be non-negative, because it equals a square): $x + 7 = (x - 5)^2 = x^2 - 10x + 25$, that is $x^2 - 11x + 18 = 0$. Two numbers with sum $11$ and product $18$: $2$ and $9$. Compare with the condition $x \ge 5$: $x = 2$ must be discarded, $x = 9$ is acceptable. Check: $\sqrt{9 + 7} = \sqrt{16} = 4$ and $9 - 5 = 4$. With $x = 2$, on the other hand, you get $\sqrt{9} = 3$ on the left and $-3$ on the right: it is an extraneous solution, introduced by squaring.

D: Consider the functions $f(x) = 2x - 3$ and $g(x) = x^2 + 1$, defined on the whole of $\R$.
a) What is $(g \circ f)(2)$?
N: 2
= $g \circ f$ means: first apply $f$, then $g$. So $(g \circ f)(2) = g(f(2))$. Compute $f(2) = 2 \cdot 2 - 3 = 1$ and then $g(1) = 1^2 + 1 = 2$. Common mistake: reversing the order and computing $f(g(2)) = f(5) = 7$.
b) Which of the following statements are true?
+ $f$ is injective
+ the inverse function of $f$ is $f^{-1}(x) = \dfrac{x + 3}{2}$
- $f$ is an even function
- $(f \circ g)(x) = (2x - 3)^2 + 1$
- $f$ expresses a direct proportionality between $x$ and $f(x)$
= The graph of $f$ is a non-horizontal line (slope $2$): different values of $x$ give different values of $f(x)$, so $f$ is injective (indeed bijective from $\R$ to $\R$). For the inverse, work out $x$ from $y = 2x - 3$: $x = \frac{y + 3}{2}$; then call the variable $x$ again: $f^{-1}(x) = \frac{x + 3}{2}$. $f$ is not even: for example $f(1) = -1$ but $f(-1) = -5$. Finally $(f \circ g)(x) = f(g(x)) = 2(x^2 + 1) - 3 = 2x^2 - 1$; the expression $(2x - 3)^2 + 1$ is instead $(g \circ f)(x)$. Direct proportionality does not fit either: it has the form $y = mx$, with a graph through the origin, whereas $f(0) = -3$; indeed doubling $x$ does not double $f(x)$: $f(1) = -1$ and $f(2) = 1$.

D: Consider the equation $4^x - 3 \cdot 2^x - 4 = 0$.
a) It has only one real solution. What is it?
N: 2
= Notice that $4^x = (2^2)^x = (2^x)^2$. Set $t = 2^x$, with $t > 0$ because an exponential is always positive: the equation becomes $t^2 - 3t - 4 = 0$, with solutions $t = 4$ and $t = -1$ (sum $3$, product $-4$). $t = -1$ must be discarded, because $2^x = -1$ is impossible. That leaves $2^x = 4 = 2^2$, so $x = 2$. Check: $4^2 - 3 \cdot 2^2 - 4 = 16 - 12 - 4 = 0$.
b) True or false: the equation $e^{2x} - 3e^x - 4 = 0$ has $x = \ln 4$ as its only real solution.
+ True
- False
= It is the same equation with base $e$ instead of $2$. Set $t = e^x$, with $t > 0$: again $t^2 - 3t - 4 = 0$, so $t = 4$ (the solution $t = -1$ must be discarded). Now, however, $e^x = 4$ cannot be solved by inspection: you take the logarithm to the same base, that is the natural logarithm $\ln$, which is the inverse function of $e^x$. So $x = \ln 4$ (it can also be written $2\ln 2$): it is true. Common mistake: answering $x = 2$ as in part a), but $e^2$ is about $7.39$, not $4$.

D: Consider the equation $2\cos x + \sqrt{3} = 0$.
a) Its solutions in the interval $[0, 2\pi)$ are
+ $x = \frac{5}{6}\pi$ and $x = \frac{7}{6}\pi$
- $x = \frac{\pi}{6}$ and $x = \frac{11}{6}\pi$
- $x = \frac{5}{6}\pi$ and $x = \frac{11}{6}\pi$
- $x = \frac{2}{3}\pi$ and $x = \frac{4}{3}\pi$
= Isolate the cosine: $\cos x = -\frac{\sqrt{3}}{2}$. The first-quadrant angle with cosine $\frac{\sqrt{3}}{2}$ is $\frac{\pi}{6}$. The cosine is negative in the second and third quadrants, so the angles you are looking for are $\pi - \frac{\pi}{6} = \frac{5}{6}\pi$ and $\pi + \frac{\pi}{6} = \frac{7}{6}\pi$ (they are opposite up to a full turn: $\frac{7}{6}\pi = 2\pi - \frac{5}{6}\pi$). The other pairs: $\frac{\pi}{6}$ and $\frac{11}{6}\pi$ solve $\cos x = \frac{\sqrt{3}}{2}$; $\frac{2}{3}\pi$ and $\frac{4}{3}\pi$ solve $\cos x = -\frac{1}{2}$; at $\frac{11}{6}\pi$ the cosine is positive.
b) True or false: $\tan\left(\frac{7}{6}\pi\right) = \frac{\sqrt{3}}{3}$.
+ True
- False
= $\frac{7}{6}\pi = \pi + \frac{\pi}{6}$ is a third-quadrant angle, where sine and cosine are both negative. By the formulas for related angles (archi associati), $\sin(\pi + \alpha) = -\sin\alpha$ and $\cos(\pi + \alpha) = -\cos\alpha$, so $\sin\left(\frac{7}{6}\pi\right) = -\frac{1}{2}$ and $\cos\left(\frac{7}{6}\pi\right) = -\frac{\sqrt{3}}{2}$ (the value from part a). The tangent is the ratio of sine to cosine: $$\tan\left(\frac{7}{6}\pi\right) = \frac{-\frac{1}{2}}{-\frac{\sqrt{3}}{2}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$$ and it is positive, so it is true. More quickly: the tangent has period $\pi$, so $\tan\left(\pi + \frac{\pi}{6}\right) = \tan\frac{\pi}{6} = \frac{\sqrt{3}}{3}$. Common mistake: thinking that in the third quadrant the tangent is negative like sine and cosine, whereas the ratio of two negative numbers is positive.
```

**Modules by question.** 1: linear system in a word problem (module 3) · 2: radical equation (module 4) · 3: composition, inverse function and proportionality (module 6) · 4: exponential equations and natural logarithm (module 7) · 5: trigonometric equation, related angles and tangent (module 8).

## Mock test 3

```simulazione
D: Consider the statement “for every natural number $n$ there is a natural number $m$ such that $m > n$”, in symbols $\forall n \in \N, \; \exists m \in \N \mid m > n$ (the symbol $\mid$ is read “such that”).
a) Its negation is
+ there is a natural number $n$ such that, for every natural number $m$, $m \le n$
- there is a natural number $n$ such that, for every natural number $m$, $m < n$
- for every natural number $n$ there is a natural number $m$ such that $m \le n$
- there is a natural number $m$ such that, for every natural number $n$, $m > n$
= To negate a sentence with quantifiers you swap every “for every” with “there is” (and vice versa) and negate the final property. Here $\forall n$ becomes $\exists n$, $\exists m$ becomes $\forall m$, and $m > n$ becomes $m \le n$: the opposite of “greater than” is “less than **or equal to**”. The negation is therefore $\exists n \in \N \mid \forall m \in \N, \; m \le n$, that is “there is a natural number greater than or equal to all the natural numbers”. It is false, as it should be: the original statement is true (just take $m = n + 1$). The other answers: with “$m < n$” the inequality is negated incorrectly; “for every $n$ there is $m$ such that $m \le n$” does not swap the quantifiers; “there is $m$ such that, for every $n$, $m > n$” only reverses the order of the quantifiers: it changes the meaning of the sentence, but it is not its negation.
b) True or false: for every $x \in \R$ the implication “if $x^2 > 4$, then $x > 2$” holds.
- True
+ False
= An implication is false if there is even a single case in which the antecedent is true and the consequent is false: one counterexample is enough. With $x = -3$ you have $x^2 = 9 > 4$, but $-3 > 2$ is false. In fact $x^2 > 4$ is equivalent to $x < -2$ or $x > 2$. The converse implication “if $x > 2$, then $x^2 > 4$”, on the other hand, is true: $x > 2$ is a sufficient condition for $x^2 > 4$, but not a necessary one.

D: Consider the polynomial $P(x) = 2x^3 + kx^2 - 5x + 6$, where $k$ is a real number.
a) For what value of $k$ is the polynomial $P(x)$ divisible by $x - 2$?
N: -3
= By the remainder theorem, the remainder when $P(x)$ is divided by $x - 2$ is $P(2)$, and the polynomial is divisible when this remainder is zero. $P(2) = 2 \cdot 8 + k \cdot 4 - 10 + 6 = 4k + 12$. Set $4k + 12 = 0$: $k = -3$.
b) With the value of $k$ you found, the factorisation of $P(x)$ into first-degree factors is
+ $(x - 2)(x - 1)(2x + 3)$
- $(x - 2)(x + 1)(2x - 3)$
- $(x + 2)(x - 1)(2x - 3)$
- $(x - 2)(2x^2 - x + 3)$
= With $k = -3$ the polynomial is $P(x) = 2x^3 - 3x^2 - 5x + 6$. Divide by $x - 2$ with Ruffini's rule: coefficients $2, -3, -5, 6$, root $2$. Bring down the $2$; $2 \cdot 2 = 4$ and $-3 + 4 = 1$; $1 \cdot 2 = 2$ and $-5 + 2 = -3$; $-3 \cdot 2 = -6$ and $6 - 6 = 0$. The quotient is $2x^2 + x - 3$, with remainder $0$. The trinomial has $\Delta = 1 + 24 = 25$ and roots $x = \frac{-1 \pm 5}{4}$, that is $1$ and $-\frac{3}{2}$, so $2x^2 + x - 3 = 2(x - 1)\left(x + \frac{3}{2}\right) = (x - 1)(2x + 3)$. Altogether $P(x) = (x - 2)(x - 1)(2x + 3)$. To rule out the other options it is enough to expand them: for example $(x - 2)(x + 1)(2x - 3) = 2x^3 - 5x^2 - x + 6$, which is different from $P(x)$.

D: For which values of $k$ is the line $3x - 4y + k = 0$ tangent to the circle $x^2 + y^2 - 4x + 6y - 12 = 0$?
+ $k = 7$
+ $k = -43$
- $k = 43$
- $k = -7$
- $k = 25$
= In the form $x^2 + y^2 + ax + by + c = 0$ the centre is $\left(-\frac{a}{2}, -\frac{b}{2}\right) = (2, -3)$ and the radius is $r = \sqrt{2^2 + (-3)^2 - (-12)} = \sqrt{4 + 9 + 12} = 5$. A line is tangent when its distance from the centre equals the radius: $$\frac{|3 \cdot 2 - 4 \cdot (-3) + k|}{\sqrt{3^2 + 4^2}} = \frac{|18 + k|}{5} = 5$$ so $|18 + k| = 25$, that is $18 + k = 25$ or $18 + k = -25$: $k = 7$ or $k = -43$. The values $43$ and $-7$ come from a sign error on the centre (using $(-2, 3)$); $k = 25$ forgets the $18$. Check: with $k = 7$ the line touches the circle only at the point $(-1, 1)$.

D: Consider the function $f(x) = x^2 - 4x + 3$, defined on $\R$. Which of the following statements are true?
+ $f$ is decreasing on the interval $(-\infty, 2]$
+ $f$ is bounded below but not above
+ the graph of $f$ is obtained from that of $y = x^2$ by a translation of $2$ to the right and $1$ down
- $f$ is injective on the whole of $\R$
- $f$ is an even function
= Complete the square: $x^2 - 4x + 3 = (x^2 - 4x + 4) - 1 = (x - 2)^2 - 1$. The graph is a parabola opening upwards with vertex $(2, -1)$. So $f$ goes down until $x = 2$ and then goes up: it is decreasing on $(-\infty, 2]$. The smallest value is $-1$ (bounded below), but the values grow without limit (not bounded above). The expression $(x - 2)^2 - 1$ says exactly this: in $x^2$ put $x - 2$ in place of $x$ (translation of $2$ to the right) and then subtract $1$ (translation of $1$ down). It is not injective: $f(1) = f(3) = 0$. It is not even: $f(-1) = 1 + 4 + 3 = 8$, while $f(1) = 0$; its axis of symmetry is the line $x = 2$, not the $y$-axis.

D: Consider the equation $\log_2(x + 1) + \log_2(x - 1) = 3$.
a) What is its only solution?
N: 3
= Domain conditions: both arguments must be positive, $x + 1 > 0$ and $x - 1 > 0$, that is $x > 1$. Under these conditions you can use the product property: $\log_2\left[(x + 1)(x - 1)\right] = 3$, that is $x^2 - 1 = 2^3 = 8$, so $x^2 = 9$ and $x = \pm 3$. Only $x = 3$ satisfies $x > 1$. Check: $\log_2 4 + \log_2 2 = 2 + 1 = 3$.
b) True or false: $x = -3$ is a solution of the equation $\log_2\left[(x + 1)(x - 1)\right] = 3$.
+ True
- False
= This is a different equation from the one in part a): here there is only one logarithm, which exists when the **product** $(x + 1)(x - 1)$ is positive, that is for $x < -1$ or $x > 1$. For $x = -3$: $(-3 + 1)(-3 - 1) = (-2)(-4) = 8$ and $\log_2 8 = 3$, so it is true. The lesson: the property $\log_a(bc) = \log_a b + \log_a c$ holds only if $b$ and $c$ are both positive. That is why the domain conditions are written for the original equation, **before** transforming it: in part a) $x = -3$ must be discarded because $\log_2(-2)$ does not exist.
```

**Modules by question.** 1: quantifiers, negation, counterexample (module 1) · 2: remainder theorem and Ruffini's rule (module 2) · 3: circle and tangent line (module 5) · 4: features of a function and translations (module 6) · 5: logarithmic equation and domain conditions (module 7).

## Mock test 4

```simulazione
D: For $x \ne \pm 2$, the expression $\dfrac{x^3 - 8}{x^2 - 4} - \dfrac{4}{x + 2}$ is equal to
+ $x$
- $x + 2$
- $\dfrac{x^2 + 2x}{x - 2}$
- $\dfrac{x^2 + 2x + 8}{x + 2}$
= Factorise: $x^3 - 8$ is a difference of cubes, $x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$; $x^2 - 4$ is a difference of two squares, $(x - 2)(x + 2)$. Cancel the factor $x - 2$ (allowed because $x \ne 2$): $$\frac{x^3 - 8}{x^2 - 4} = \frac{x^2 + 2x + 4}{x + 2}$$ Now the two fractions have the same denominator: $$\frac{x^2 + 2x + 4 - 4}{x + 2} = \frac{x^2 + 2x}{x + 2} = \frac{x(x + 2)}{x + 2} = x$$ where $x + 2$ has been cancelled, which is allowed because $x \ne -2$. Check with a number: for $x = 0$ the expression equals $\frac{-8}{-4} - \frac{4}{2} = 2 - 2 = 0$, just like $x$. Common mistakes: writing the false square (falso quadrato) with the wrong sign, $x^2 - 2x + 4$, or adding the $4$ instead of subtracting it (then $+8$ appears in the numerator).

D: Consider the equation $x^2 - 6x + k = 0$, where $k$ is a real number.
a) For what value of $k$ does the equation have two coincident real solutions?
N: 9
= The solutions coincide when the discriminant is zero: $\Delta = (-6)^2 - 4 \cdot 1 \cdot k = 36 - 4k = 0$, that is $k = 9$. In that case $x^2 - 6x + 9 = (x - 3)^2$ and the only solution is $x = 3$. For $k < 9$ there are two distinct solutions, for $k > 9$ there are no real solutions.
b) For $k = 5$, the solutions of the inequality $x^2 - 6x + k < 0$ are
+ $1 < x < 5$
- $x < 1$ or $x > 5$
- $1 \le x \le 5$
- $-5 < x < -1$
= With $k = 5$ the inequality is $x^2 - 6x + 5 < 0$. The associated equation $x^2 - 6x + 5 = 0$ has solutions $1$ and $5$ (sum $6$, product $5$). The coefficient of $x^2$ is positive, so the parabola $y = x^2 - 6x + 5$ opens upwards and is negative **between** the roots: $1 < x < 5$, endpoints excluded because the inequality is strict (at $1$ and at $5$ the trinomial equals $0$). The outer intervals are the solutions of $x^2 - 6x + 5 > 0$; $-5 < x < -1$ comes from getting the sign of the roots wrong.

D: The solution set of the inequality $|2x - 1| < x + 4$ is
+ $(-1, 5)$
- $(-\infty, -1) \cup (5, +\infty)$
- $\left[\frac{1}{2}, 5\right)$
- $(-\infty, -1) \cup \left[\frac{1}{2}, 5\right)$
= Split into the two cases of the definition of absolute value. First case, $2x - 1 \ge 0$, that is $x \ge \frac{1}{2}$: you drop the absolute value bars and leave what is inside as it is, $2x - 1 < x + 4$, hence $x < 5$; solutions $\frac{1}{2} \le x < 5$. Second case, $x < \frac{1}{2}$: the absolute value equals $-(2x - 1) = 1 - 2x$, so $1 - 2x < x + 4$, that is $-3x < 3$; divide by $-3$, **reversing the direction**: $x > -1$; solutions $-1 < x < \frac{1}{2}$. Combine the two cases: $-1 < x < 5$. More quickly: $|A| < B$ is equivalent to $-B < A < B$, that is $-x - 4 < 2x - 1 < x + 4$, which gives $x > -1$ and $x < 5$. $(-\infty, -1) \cup \left[\frac{1}{2}, 5\right)$ is the mistake of not reversing the direction when dividing by $-3$; $\left[\frac{1}{2}, 5\right)$ forgets the second case; $(-\infty, -1) \cup (5, +\infty)$ solves the opposite inequality, $|2x - 1| > x + 4$.

D: Consider the parabola $y = x^2 - 4x + 3$ and the line $y = x - 1$.
a) What is the y-coordinate of the focus of the parabola?
N: -3/4
= For $y = ax^2 + bx + c$ the vertex is $V = \left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right)$ and the focus is $F = \left(-\frac{b}{2a}, \frac{1 - \Delta}{4a}\right)$. Here $a = 1$, $b = -4$, $c = 3$ and $\Delta = 16 - 12 = 4$: vertex $V = (2, -1)$, focus $F = \left(2, \frac{1 - 4}{4}\right) = \left(2, -\frac{3}{4}\right)$, so the y-coordinate is $-\frac{3}{4} = -0.75$. Check: the focus lies on the axis $x = 2$, at a distance $\frac{1}{4a} = \frac{1}{4}$ from the vertex, on the side towards which the parabola opens (upwards): $-1 + \frac{1}{4} = -\frac{3}{4}$. The directrix is the line $y = -\frac{5}{4}$, at the same distance from the vertex but on the other side.
b) Which of the following points lie on both the parabola and the line?
+ $(1, 0)$
+ $(4, 3)$
- $(2, -1)$
- $(3, 2)$
- $(0, 3)$
= The common points are found by solving the two equations as a system: $x^2 - 4x + 3 = x - 1$, that is $x^2 - 5x + 4 = 0$, with solutions $x = 1$ and $x = 4$ (sum $5$, product $4$). The y-coordinates are obtained from the line: $y = 0$ and $y = 3$. The common points are $(1, 0)$ and $(4, 3)$. The others: $(2, -1)$ and $(0, 3)$ lie on the parabola but not on the line ($2 - 1 = 1 \ne -1$ and $0 - 1 = -1 \ne 3$); $(3, 2)$ lies on the line but not on the parabola ($9 - 12 + 3 = 0 \ne 2$). A point is common only if it satisfies **both** equations.

D: A triangle has sides of length $a = 7$, $b = 5$ and $c = 3$. Let $\alpha$ be the angle opposite side $a$ and $\beta$ the angle opposite side $b$.
a) The angle $\alpha$ measures
+ $\frac{2}{3}\pi$
- $\frac{\pi}{3}$
- $\frac{5}{6}\pi$
- $\frac{3}{4}\pi$
= You know all three sides, so use the law of cosines (Carnot's theorem) on side $a$: $a^2 = b^2 + c^2 - 2bc\cos\alpha$. Substitute: $49 = 25 + 9 - 30\cos\alpha$, so $30\cos\alpha = 34 - 49 = -15$ and $\cos\alpha = -\frac{1}{2}$. In a triangle every angle lies between $0$ and $\pi$, and the only angle in that interval with cosine $-\frac{1}{2}$ is $\frac{2}{3}\pi$, that is $120°$. $\frac{\pi}{3}$ has cosine $+\frac{1}{2}$: it is the most common sign error.
b) True or false: $\sin\beta = \dfrac{5\sqrt{3}}{14}$.
+ True
- False
= With the law of sines: $\frac{a}{\sin\alpha} = \frac{b}{\sin\beta}$, so $\sin\beta = \frac{b \sin\alpha}{a} = \frac{5 \cdot \frac{\sqrt{3}}{2}}{7} = \frac{5\sqrt{3}}{14}$, because $\sin\frac{2}{3}\pi = \frac{\sqrt{3}}{2}$. It is true. Check with the law of cosines on side $b$: $25 = 49 + 9 - 42\cos\beta$, hence $\cos\beta = \frac{33}{42} = \frac{11}{14}$, and indeed $\sin^2\beta + \cos^2\beta = \frac{75}{196} + \frac{121}{196} = 1$.
```

**Modules by question.** 1: factorisation and algebraic fractions (module 2) · 2: discriminant and second-degree inequality (module 3) · 3: inequality with absolute value (module 4) · 4: parabola, focus, intersection with a line (module 5) · 5: triangles, laws of cosines and sines (module 8).

## Mock test 5

```simulazione
D: A shop raises the price of a jacket by $20\%$. A few weeks later, in the sales, it applies a $20\%$ discount to the new price.
a) By what percentage has the final price decreased compared with the initial one? Write only the number (for example $7$ for a decrease of $7\%$).
N: 4
= Call $p$ the initial price. Raising by $20\%$ means multiplying by $1 + \frac{20}{100} = 1.2$; a $20\%$ discount means multiplying by $1 - \frac{20}{100} = 0.8$. The final price is $$0.8 \cdot 1.2 \cdot p = 0.96\,p$$ that is, $96\%$ of the initial one: it has decreased by $4\%$. Common mistake: thinking that $+20\%$ and $-20\%$ cancel out. They do not, because the discount is calculated on a higher price than the one the increase was calculated on.
b) True or false: after the sales, to bring the jacket back exactly to its initial price it is enough to raise its price by $4\%$.
- True
+ False
= After the sales the price is $0.96\,p$. Raising it by $4\%$ gives $0.96\,p \cdot 1.04 = 0.9984\,p$, still less than $p$: $4\%$ of $0.96\,p$ is less than $4\%$ of $p$. To get back to $p$ you have to multiply by $\frac{1}{0.96} = \frac{100}{96} = \frac{25}{24}$, that is, increase the price by $\frac{1}{24}$ of itself, about $4.17\%$. A percentage is always calculated on the value it is applied to.

D: The system $\begin{cases} x + y + z = 6 \\ 2x - y + z = 3 \\ x + 2y - z = 2 \end{cases}$ has exactly one solution $(x, y, z)$. What is $z$?
N: 3
= Use the substitution method. From the first equation get $z = 6 - x - y$ and substitute it into the other two. Second: $2x - y + 6 - x - y = 3$, that is $x - 2y = -3$. Third: $x + 2y - (6 - x - y) = 2$, that is $2x + 3y = 8$. Now you have a system of two equations in two unknowns. From the first get $x = 2y - 3$ and substitute into the second: $2(2y - 3) + 3y = 8$, that is $7y = 14$ and $y = 2$. Then $x = 2 \cdot 2 - 3 = 1$ and $z = 6 - 1 - 2 = 3$. The solution is $(1, 2, 3)$. Check in all three equations: $1 + 2 + 3 = 6$, $2 - 2 + 3 = 3$, $1 + 4 - 3 = 2$. Shortcut: adding the first and the third equation eliminates $z$ and immediately gives $2x + 3y = 8$.

D: The equation $\dfrac{x}{x - 2} - \dfrac{2}{x + 2} = \dfrac{8}{x^2 - 4}$
+ has no real solutions
- has the solutions $x = 2$ and $x = -2$
- has the single solution $x = 2$
- has the single solution $x = -2$
= Domain conditions: the denominators $x - 2$, $x + 2$ and $x^2 - 4 = (x - 2)(x + 2)$ must not be zero, so $x \ne 2$ and $x \ne -2$. The common denominator is $(x - 2)(x + 2)$; multiply both sides by it, since it is non-zero under the domain conditions: $x(x + 2) - 2(x - 2) = 8$, that is $x^2 + 2x - 2x + 4 = 8$, so $x^2 = 4$ and $x = \pm 2$. Both values are excluded by the domain conditions: the equation has no solutions. If you skip the domain conditions you answer $x = 2$ and $x = -2$, but for these values the equation contains a division by zero.

D: Consider the function $f(x) = \dfrac{2x + 1}{x - 3}$.
a) For what value of $x$ is $f(x) = 3$?
N: 10
= Solve $\frac{2x + 1}{x - 3} = 3$ with the condition $x \ne 3$: multiply by $x - 3$ to get $2x + 1 = 3x - 9$, so $x = 10$, which is acceptable. Check: $f(10) = \frac{21}{7} = 3$. In other words $10$ is the preimage of $3$, that is $f^{-1}(3) = 10$.
b) Which of the following statements are true?
+ the domain of $f$ is $\R \setminus \{3\}$
+ the number $2$ does not belong to the range of $f$
+ viewed as a function from its domain to its range, $f$ is invertible and $f^{-1}(x) = \dfrac{3x + 1}{x - 2}$
- $f(0) = \dfrac{1}{3}$
- $f$ is an even function
= Domain: the only condition is $x - 3 \ne 0$, so $x \ne 3$. For the range, solve $f(x) = y$ for $x$: $2x + 1 = y(x - 3)$, that is $2x - xy = -3y - 1$, so $x(2 - y) = -3y - 1$ and $x = \frac{3y + 1}{y - 2}$. This can be done for every $y \ne 2$; for $y = 2$ the equation becomes $2x + 1 = 2x - 6$, which is impossible. So $2$ is not the image of any $x$, the function is bijective from $\R \setminus \{3\}$ to $\R \setminus \{2\}$ and, swapping the names of the variables, the inverse is $f^{-1}(x) = \frac{3x + 1}{x - 2}$. Next, $f(0) = \frac{1}{-3} = -\frac{1}{3}$, not $\frac{1}{3}$. Finally $f$ is not even: $f(1) = -\frac{3}{2}$, while $f(-1) = \frac{-1}{-4} = \frac{1}{4}$; besides, the domain is not even symmetric about $0$ (it contains $-3$ but not $3$).

D: The solution set of the inequality $\left(\dfrac{1}{2}\right)^{x^2 - 3} > \dfrac{1}{4^x}$ is
+ $-1 < x < 3$
- $x < -1$ or $x > 3$
- $-3 < x < 1$
- $x > 3$
= Write everything with the same base $\frac{1}{2}$: $\frac{1}{4^x} = \left(\frac{1}{4}\right)^x = \left(\left(\frac{1}{2}\right)^2\right)^x = \left(\frac{1}{2}\right)^{2x}$. The inequality becomes $\left(\frac{1}{2}\right)^{x^2 - 3} > \left(\frac{1}{2}\right)^{2x}$. The base lies between $0$ and $1$, so the exponential is decreasing and, when you pass to the exponents, the direction **is reversed**: $x^2 - 3 < 2x$, that is $x^2 - 2x - 3 < 0$. The roots of $x^2 - 2x - 3 = 0$ are $-1$ and $3$, and the trinomial is negative between the roots: $-1 < x < 3$. If you do not reverse the direction you find the outer intervals; if you write $\frac{1}{4^x} = \left(\frac{1}{2}\right)^{-2x}$ you get the sign of the exponent wrong and find $-3 < x < 1$. Check with $x = 0$: $\left(\frac{1}{2}\right)^{-3} = 8$ and $\frac{1}{4^0} = 1$, and $8 > 1$ is true.
```

**Modules by question.** 1: percentages (module 1) · 2: linear system of three equations (module 3) · 3: rational equation and domain conditions (module 4) · 4: domain, range and inverse function (module 6) · 5: exponential inequality with base less than 1 (module 7).

## Mock test 6

```simulazione
D: Let $A = \{a, b, c\}$ and $B = \{1, 2\}$.
a) How many elements does the power set of the Cartesian product, $\mathcal{P}(A \times B)$, have?
N: 64
= The Cartesian product $A \times B$ contains all the ordered pairs $(u, v)$ with $u \in A$ and $v \in B$: there are $3 \cdot 2 = 6$ of them, namely $(a, 1), (a, 2), (b, 1), (b, 2), (c, 1), (c, 2)$. A set with $n$ elements has $2^n$ subsets, so $\mathcal{P}(A \times B)$ has $2^6 = 64$ elements (including the empty set and $A \times B$ itself). Common mistakes: answering $6$ (the elements of $A \times B$) or $2^3 \cdot 2^2 = 32$.
b) Which of the following statements are true?
+ $(a, 1) \in A \times B$
+ $\{a\} \in \mathcal{P}(A)$
+ $\varnothing \subseteq A$
- $(1, a) \in A \times B$
- $\{a, b\} \in A$
= $(a, 1)$ has its first element in $A$ and its second in $B$: it is in $A \times B$. $(1, a)$, on the other hand, is not: in ordered pairs the order matters, and $(1, a)$ is in $B \times A$. The elements of $\mathcal{P}(A)$ are the subsets of $A$, and $\{a\}$ is a subset of $A$: so $\{a\} \in \mathcal{P}(A)$. The empty set is a subset of every set. Finally, the elements of $A$ are $a$, $b$, $c$: the set $\{a, b\}$ is **contained** in $A$ ($\{a, b\} \subseteq A$), but it is not one of its elements. Watch the difference between $\in$ (between an element and a set) and $\subseteq$ (between two sets).

D: Which of the following polynomials are factors (that is, divisors) of the polynomial $P(x) = x^4 - 5x^2 + 4$?
+ $x + 2$
+ $x^2 - 3x + 2$
+ $x^2 - 1$
- $x^2 + 4$
- $x - 4$
= $P(x)$ contains only even powers of $x$: set $t = x^2$ to get $t^2 - 5t + 4$, which factorises with two numbers whose sum is $-5$ and whose product is $4$: $(t - 1)(t - 4)$. Go back to $x$: $P(x) = (x^2 - 1)(x^2 - 4)$, and with the difference of two squares $$P(x) = (x - 1)(x + 1)(x - 2)(x + 2)$$ The factors of $P(x)$ are the products of some of these four (up to a constant). $x + 2$ is one of them; $x^2 - 1 = (x - 1)(x + 1)$ and $x^2 - 3x + 2 = (x - 1)(x - 2)$ are products of two of them. $x^2 + 4$ is not: dividing $P(x)$ by $x^2 + 4$ leaves $40$. $x - 4$ is not a factor because, by the remainder theorem, $P(4) = 256 - 80 + 4 = 180 \ne 0$.

D: Consider the ellipse with equation $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$.
a) What is the distance between the two foci?
N: 8
= The equation is in standard form $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ with $a^2 = 25$ and $b^2 = 9$, that is $a = 5$ and $b = 3$. Since $a > b$, the foci lie on the $x$-axis, at the points $(\pm c, 0)$ with $c^2 = a^2 - b^2 = 25 - 9 = 16$, so $c = 4$. The foci are $(4, 0)$ and $(-4, 0)$ and they are $2c = 8$ apart. Common mistake: using $c^2 = a^2 + b^2$, which holds for the hyperbola, not for the ellipse. The vertices are $(\pm 5, 0)$ and $(0, \pm 3)$.
b) True or false: the hyperbola with equation $\dfrac{x^2}{9} - \dfrac{y^2}{7} = 1$ has the same foci as the ellipse.
+ True
- False
= The hyperbola in standard form $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ also has its foci on the $x$-axis, at the points $(\pm c, 0)$, but for the hyperbola $c^2 = a^2 + b^2$ (for the ellipse, instead, $c^2 = a^2 - b^2$). Here $a^2 = 9$ and $b^2 = 7$: $c^2 = 9 + 7 = 16$ and $c = 4$. The foci are $(4, 0)$ and $(-4, 0)$, the same as the ellipse's: it is true. If you use the formula for the ellipse you find $c^2 = 9 - 7 = 2$ and answer false. For the same hyperbola: the vertices are $(\pm 3, 0)$ and the asymptotes are the lines $y = \pm\frac{b}{a}x = \pm\frac{\sqrt{7}}{3}x$. When $a = b$ the hyperbola is called rectangular (iperbole equilatera) and its asymptotes are the quadrant bisectors $y = \pm x$.

D: Consider the piecewise function $f(x) = \begin{cases} x^2 - 1 & \text{if } x < 1 \\ 3 - 2x & \text{if } x \ge 1 \end{cases}$. Which of the following statements are true?
+ $f(f(2)) = 0$
+ the zeros of $f$ are $x = -1$ and $x = \frac{3}{2}$
+ $f$ is not injective
- $f$ is continuous at $x = 1$
- $f$ is bounded above
= To compute $f$ at a point you first have to work out which piece to use. $f(2)$: $2 \ge 1$, so $f(2) = 3 - 4 = -1$; then $f(-1)$: $-1 < 1$, so $f(-1) = 1 - 1 = 0$. Hence $f(f(2)) = 0$. Zeros: in the first piece $x^2 - 1 = 0$ gives $x = \pm 1$, but the piece applies only for $x < 1$, so only $x = -1$ remains; in the second piece $3 - 2x = 0$ gives $x = \frac{3}{2}$, which satisfies $x \ge 1$. The zeros are $-1$ and $\frac{3}{2}$ (careful: $f(1) = 3 - 2 = 1$, not $0$). $f$ is not injective, because it takes the value $0$ twice. It is not continuous at $1$: approaching $1$ from the left, the values $x^2 - 1$ get closer and closer to $0$, but $f(1) = 1$, so the graph jumps. Finally, for very negative $x$, $x^2 - 1$ becomes as large as you like: $f$ is not bounded above.

D: Consider the equation $2\sin^2 x - \sin x - 1 = 0$.
a) How many solutions does it have in the interval $[0, 2\pi)$?
N: 3
= It is a second-degree equation in $\sin x$. Set $t = \sin x$: $2t^2 - t - 1 = 0$, with $\Delta = 1 + 8 = 9$ and $t = \frac{1 \pm 3}{4}$, that is $t = 1$ or $t = -\frac{1}{2}$, both acceptable because they lie between $-1$ and $1$. $\sin x = 1$ has only one solution in $[0, 2\pi)$: $x = \frac{\pi}{2}$. $\sin x = -\frac{1}{2}$ has two solutions, in the third and fourth quadrants: $x = \pi + \frac{\pi}{6} = \frac{7}{6}\pi$ and $x = 2\pi - \frac{\pi}{6} = \frac{11}{6}\pi$. In total $3$ solutions.
b) The sum of the solutions in the interval $[0, 2\pi)$ is
+ $\frac{7}{2}\pi$
- $3\pi$
- $\frac{3}{2}\pi$
- $\frac{5}{2}\pi$
= Add up the three solutions you found: $\frac{\pi}{2} + \frac{7}{6}\pi + \frac{11}{6}\pi = \frac{3\pi + 7\pi + 11\pi}{6} = \frac{21}{6}\pi = \frac{7}{2}\pi$. $3\pi$ is the sum you get if you forget $\sin x = 1$ (only $\frac{7}{6}\pi + \frac{11}{6}\pi$); $\frac{3}{2}\pi$ is the sum you obtain if you get the sign wrong and solve $\sin x = \frac{1}{2}$ ($\frac{\pi}{6} + \frac{5}{6}\pi + \frac{\pi}{2}$); $\frac{5}{2}\pi$ is the one you obtain if you get the sign of both roots wrong and solve $\sin x = \frac{1}{2}$ and $\sin x = -1$ ($\frac{\pi}{6} + \frac{5}{6}\pi + \frac{3}{2}\pi$).
```

**Modules by question.** 1: Cartesian product and power set (module 1) · 2: factorisation of a polynomial (module 2) · 3: ellipse and hyperbola (module 5) · 4: piecewise function (module 6) · 5: second-degree trigonometric equation (module 8).

## Mock test 7

```simulazione
D: Consider the equation $(k - 1)x^2 - 2kx + k + 3 = 0$, where $k$ is a real parameter.
a) The equation has two distinct real solutions if and only if
+ $k < \frac{3}{2}$ and $k \ne 1$
- $k < \frac{3}{2}$
- $k > \frac{3}{2}$
- $k \le \frac{3}{2}$ and $k \ne 1$
= Two distinct solutions require a second-degree equation, so $k - 1 \ne 0$, that is $k \ne 1$, and a positive discriminant. The coefficient of $x$ is even ($-2k$), so it is convenient to use $\frac{\Delta}{4} = \left(\frac{b}{2}\right)^2 - ac$: $$\frac{\Delta}{4} = k^2 - (k - 1)(k + 3) = k^2 - (k^2 + 2k - 3) = 3 - 2k$$ and $3 - 2k > 0$ for $k < \frac{3}{2}$. Putting it all together: $k < \frac{3}{2}$ and $k \ne 1$. With $k = \frac{3}{2}$ the discriminant is zero (two coincident solutions): that is why “$k \le \frac{3}{2}$ and $k \ne 1$” is wrong. “$k < \frac{3}{2}$” forgets the case $k = 1$, which part b) examines.
b) True or false: for $k = 1$ the equation has exactly one real solution.
+ True
- False
= For $k = 1$ the $x^2$ term disappears: $0 \cdot x^2 - 2x + 1 + 3 = 0$, that is $-2x + 4 = 0$. It is a determined first-degree equation, with the single solution $x = 2$: it is true. When the coefficient of $x^2$ contains a parameter, the case in which it becomes zero must always be studied separately, because there the quadratic formula cannot be used (you would be dividing by $2a = 0$).

D: How many integers satisfy the inequality $\sqrt{x + 5} > x - 1$?
N: 9
= It is of the type $\sqrt{f(x)} > g(x)$ with an even index: the solutions are the union of two systems. **First system**: $g(x) < 0$ and a non-negative radicand, that is $x - 1 < 0$ and $x + 5 \ge 0$. Here the inequality is always true, because a root, which is $\ge 0$, is greater than a negative number: solutions $-5 \le x < 1$. **Second system**: $g(x) \ge 0$ and square both sides, that is $x \ge 1$ and $x + 5 > (x - 1)^2$. The second condition becomes $x + 5 > x^2 - 2x + 1$, that is $x^2 - 3x - 4 < 0$, with roots $-1$ and $4$: $-1 < x < 4$. Together with $x \ge 1$: $1 \le x < 4$. Combine the two systems: $-5 \le x < 4$. The integers in this interval are $-5, -4, -3, -2, -1, 0, 1, 2, 3$, that is $9$: $-5$ is included ($\sqrt{0} = 0 > -6$), $4$ is not ($\sqrt{9} = 3$ is not greater than $3$). If you square straight away without distinguishing the cases, you find $-1 < x < 4$ and count only $4$ integers, losing the values from $-5$ to $-1$, which in fact work: with $x = -4$ you have $\sqrt{1} = 1 > -5$.

D: Consider the circle $x^2 + y^2 = 5$ and the point $P = (0, 5)$, outside the circle.
a) Which of the following lines pass through $P$ and are tangent to the circle?
+ $y = 2x + 5$
+ $y = -2x + 5$
- $y = x + 5$
- $y = 2x - 5$
- $y = 5$
= The lines through $P$ (the pencil of lines centred at $P$) are $y = mx + 5$, plus the vertical line $x = 0$, which passes through the centre and is therefore a secant. The circle has centre $O = (0, 0)$ and radius $\sqrt{5}$. Write the line as $mx - y + 5 = 0$ and require its distance from the centre to equal the radius: $$\frac{|5|}{\sqrt{m^2 + 1}} = \sqrt{5} \quad\Rightarrow\quad 25 = 5(m^2 + 1) \quad\Rightarrow\quad m^2 = 4$$ so $m = 2$ or $m = -2$. The others: $y = x + 5$ is at a distance of $\frac{5}{\sqrt{2}} > \sqrt{5}$ from the centre, so it does not meet the circle (non-intersecting line); $y = 5$ is at a distance of $5$, so it is non-intersecting too; $y = 2x - 5$ is tangent (its distance is $\frac{5}{\sqrt{5}} = \sqrt{5}$) but does not pass through $P$, because for $x = 0$ it gives $y = -5$.
b) What is the x-coordinate of the point of tangency between the circle and the tangent with positive slope?
N: -2
= Solve $y = 2x + 5$ and $x^2 + y^2 = 5$ as a system: $x^2 + (2x + 5)^2 = 5$, that is $5x^2 + 20x + 20 = 0$ and, dividing by $5$, $x^2 + 4x + 4 = (x + 2)^2 = 0$. The zero discriminant confirms the tangency; the double solution is $x = -2$ and the point of tangency is $(-2, 1)$. Check: $(-2)^2 + 1^2 = 5$. Alternatively: the radius that reaches the point of tangency is perpendicular to the tangent, so it lies on the line $y = -\frac{1}{2}x$; intersecting it with $y = 2x + 5$ gives $x = -2$ again.

D: The solution set of the inequality $\log_{\frac{1}{3}}(x - 1) + \log_{\frac{1}{3}}(x + 1) \ge -1$ is
+ $(1, 2]$
- $[-2, 2]$
- $[2, +\infty)$
- $(-\infty, -2] \cup [2, +\infty)$
= Domain conditions: $x - 1 > 0$ and $x + 1 > 0$, that is $x > 1$. Under these conditions use the product property and also write $-1$ as a logarithm to base $\frac{1}{3}$: $-1 = \log_{\frac{1}{3}} 3$, because $\left(\frac{1}{3}\right)^{-1} = 3$. The inequality becomes $\log_{\frac{1}{3}}(x^2 - 1) \ge \log_{\frac{1}{3}} 3$. The base lies between $0$ and $1$, so the logarithm is decreasing and, when you pass to the arguments, the direction **is reversed**: $x^2 - 1 \le 3$, that is $x^2 \le 4$, that is $-2 \le x \le 2$. Intersecting with $x > 1$: $1 < x \le 2$. Check with $x = 2$: $\log_{\frac{1}{3}} 1 + \log_{\frac{1}{3}} 3 = 0 - 1 = -1$, and $-1 \ge -1$ is true. The other options: $[-2, 2]$ forgets the domain conditions, $[2, +\infty)$ does not reverse the direction, $(-\infty, -2] \cup [2, +\infty)$ makes both mistakes.

D: In the interval $[0, 2\pi]$, the solutions of the inequality $2\sin^2 x + 3\cos x - 3 > 0$ are
+ $\left(0, \frac{\pi}{3}\right) \cup \left(\frac{5}{3}\pi, 2\pi\right)$
- $\left[0, \frac{\pi}{3}\right) \cup \left(\frac{5}{3}\pi, 2\pi\right]$
- $\left(\frac{\pi}{3}, \frac{5}{3}\pi\right)$
- $\left(0, \frac{\pi}{6}\right) \cup \left(\frac{11}{6}\pi, 2\pi\right)$
= Write everything in terms of the cosine with the Pythagorean identity (relazione fondamentale), $\sin^2 x = 1 - \cos^2 x$: $2 - 2\cos^2 x + 3\cos x - 3 > 0$, that is $-2\cos^2 x + 3\cos x - 1 > 0$; change the signs and reverse the direction: $2\cos^2 x - 3\cos x + 1 < 0$. With $t = \cos x$: $2t^2 - 3t + 1 < 0$, with roots $t = \frac{1}{2}$ and $t = 1$; the trinomial is negative between the roots: $\frac{1}{2} < \cos x < 1$. On the unit circle $\cos x > \frac{1}{2}$ for $0 \le x < \frac{\pi}{3}$ or $\frac{5}{3}\pi < x \le 2\pi$; remove the points where $\cos x = 1$, that is $x = 0$ and $x = 2\pi$, and you are left with $\left(0, \frac{\pi}{3}\right) \cup \left(\frac{5}{3}\pi, 2\pi\right)$. $\left[0, \frac{\pi}{3}\right) \cup \left(\frac{5}{3}\pi, 2\pi\right]$ includes $0$ and $2\pi$, where the left-hand side equals $0 + 3 - 3 = 0$, which is not $> 0$. $\left(\frac{\pi}{3}, \frac{5}{3}\pi\right)$ is the mistake of not reversing the direction; $\left(0, \frac{\pi}{6}\right) \cup \left(\frac{11}{6}\pi, 2\pi\right)$ confuses the special values ($\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$, not $\frac{1}{2}$).
```

**Modules by question.** 1: second-degree equation with a parameter (module 3) · 2: radical inequality (module 4) · 3: tangent lines to a circle from an external point (module 5) · 4: logarithmic inequality with base less than 1 (module 7) · 5: trigonometric inequality (module 8).

## Mock test 8

```simulazione
D: Let $X = \{1, 2, 3, 4, 5\}$.
a) How many subsets of $X$ contain both $1$ and $2$?
N: 8
= A subset that contains $1$ and $2$ is determined by the choice of its other elements, that is, by any subset of $\{3, 4, 5\}$: for each of the three elements you choose whether to put it in or not. A set with $3$ elements has $2^3 = 8$ subsets. Here they are: $\{1, 2\}$, $\{1, 2, 3\}$, $\{1, 2, 4\}$, $\{1, 2, 5\}$, $\{1, 2, 3, 4\}$, $\{1, 2, 3, 5\}$, $\{1, 2, 4, 5\}$ and $X$. In all, $X$ has $2^5 = 32$ subsets, and a quarter of them contain both $1$ and $2$.
b) Which of the following statements are true?
+ if $n$ is an integer and $n^2$ is odd, then $n$ is odd
- the sum of two irrational numbers is always an irrational number
+ the product of a non-zero rational number and an irrational number is irrational
- for every $a, b \in \R$, if $a < b$ then $a^2 < b^2$
= “If $n^2$ is odd, then $n$ is odd”: true. Prove the contrapositive, “if $n$ is even, then $n^2$ is even”: if $n = 2h$, then $n^2 = 4h^2 = 2 \cdot 2h^2$, which is even. An implication and its contrapositive are equivalent. “The sum of two irrationals is always irrational”: false, counterexample $\sqrt{2} + (-\sqrt{2}) = 0$, which is rational. “The product of a non-zero rational and an irrational is irrational”: true, by contradiction. If $q \ne 0$ is rational, $\alpha$ is irrational and $q\alpha = r$ were rational, then $\alpha = \frac{r}{q}$ would be a quotient of rationals, hence rational: contradiction. “If $a < b$ then $a^2 < b^2$”: false, counterexample $a = -3$ and $b = 1$: $-3 < 1$ but $9 > 1$. To prove that a statement is false one counterexample is enough; to prove that it is true examples are not enough, you need an argument that works in every case.

D: The polynomial $P(x) = x^3 + ax^2 + bx - 6$ is divisible both by $x - 1$ and by $x + 2$.
a) What is $a$?
N: 4
= By the remainder theorem, $P(x)$ is divisible by $x - 1$ if $P(1) = 0$ and by $x + 2$ if $P(-2) = 0$. $P(1) = 1 + a + b - 6 = 0$ gives $a + b = 5$. $P(-2) = -8 + 4a - 2b - 6 = 0$ gives $4a - 2b = 14$, that is $2a - b = 7$. Add the two equations: $3a = 12$, so $a = 4$ and $b = 1$. The polynomial is $P(x) = x^3 + 4x^2 + x - 6$.
b) True or false: with the values of $a$ and $b$ you found, $P(x)$ is also divisible by $x + 3$.
+ True
- False
= Just compute $P(-3) = -27 + 4 \cdot 9 - 3 - 6 = -27 + 36 - 9 = 0$: the remainder is zero, so it is true. You can also see it this way: $P(x)$ is divisible by $(x - 1)(x + 2) = x^2 + x - 2$ and the quotient is of first degree, of the form $x + c$; comparing the constant terms, $-2c = -6$, so $c = 3$ and $P(x) = (x - 1)(x + 2)(x + 3)$.

D: Consider the functions $f(x) = \sqrt{4 - x}$ and $g(x) = x^2$. Which of the following statements are true?
+ the domain of $f \circ g$ is $[-2, 2]$
+ $f \circ g$ is an even function
+ the range of $f \circ g$ is $[0, 2]$
- $(g \circ f)(x) = 4 - x$ for every $x \in \R$
- $f \circ g$ is injective
= $(f \circ g)(x) = f(g(x)) = f(x^2) = \sqrt{4 - x^2}$. Domain: the radicand must be non-negative, $4 - x^2 \ge 0$, that is $-2 \le x \le 2$. It is even: $\sqrt{4 - (-x)^2} = \sqrt{4 - x^2}$. Range: $x^2$ varies between $0$ and $4$, so $4 - x^2$ varies between $0$ and $4$ and its square root between $0$ (for $x = \pm 2$) and $2$ (for $x = 0$): the range is $[0, 2]$. It is not injective, precisely because it is even: for example it takes the value $\sqrt{3}$ both at $1$ and at $-1$. Finally $(g \circ f)(x) = \left(\sqrt{4 - x}\right)^2 = 4 - x$ only where $f$ is defined, that is for $x \le 4$: for example $f(5) = \sqrt{-1}$ does not exist. The graph of $f \circ g$ is the upper semicircle with centre $O$ and radius $2$.

D: What is the solution of the equation $\log_2 x + \log_4 x + \log_{16} x = 7$?
N: 16
= Domain condition: $x > 0$. Convert all the logarithms to base $2$ with the change of base formula, $\log_a x = \frac{\log_2 x}{\log_2 a}$: $\log_4 x = \frac{\log_2 x}{2}$ and $\log_{16} x = \frac{\log_2 x}{4}$. Call $L = \log_2 x$: the equation becomes $L + \frac{L}{2} + \frac{L}{4} = 7$, that is $\frac{7}{4}L = 7$, so $L = 4$ and $x = 2^4 = 16$, which satisfies $x > 0$. Check: $\log_2 16 + \log_4 16 + \log_{16} 16 = 4 + 2 + 1 = 7$.

D: Let $\alpha$ and $\beta$ be two angles between $0$ and $\frac{\pi}{2}$, with $\sin\alpha = \frac{4}{5}$ and $\sin\beta = \frac{5}{13}$.
a) What is $\sin(\alpha + \beta)$?
+ $\frac{63}{65}$
- $\frac{33}{65}$
- $\frac{16}{65}$
- $\frac{56}{65}$
= You also need the cosines. From the Pythagorean identity, $\cos\alpha = \sqrt{1 - \frac{16}{25}} = \frac{3}{5}$ and $\cos\beta = \sqrt{1 - \frac{25}{169}} = \frac{12}{13}$, with the $+$ sign because the angles are in the first quadrant. Addition formula: $$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta = \frac{4}{5} \cdot \frac{12}{13} + \frac{3}{5} \cdot \frac{5}{13} = \frac{48 + 15}{65} = \frac{63}{65}$$ The other options are the values of similar formulas: $\frac{33}{65} = \sin(\alpha - \beta)$, $\frac{16}{65} = \cos(\alpha + \beta)$, $\frac{56}{65} = \cos(\alpha - \beta)$.
b) What is $\cos(2\alpha)$?
N: -7/25
= Double-angle formula: $\cos(2\alpha) = \cos^2\alpha - \sin^2\alpha = \frac{9}{25} - \frac{16}{25} = -\frac{7}{25}$, that is $-0.28$. The result is negative because $\sin\alpha > \cos\alpha$, so $\alpha > \frac{\pi}{4}$ and $2\alpha > \frac{\pi}{2}$: the angle $2\alpha$ is in the second quadrant, where the cosine is negative.
```

**Modules by question.** 1: power set, proofs and counterexamples (module 1) · 2: divisibility of a polynomial with two parameters (module 2) · 3: composition of functions, domain and range (module 6) · 4: logarithmic equation with change of base (module 7) · 5: addition and double-angle formulas (module 8).
