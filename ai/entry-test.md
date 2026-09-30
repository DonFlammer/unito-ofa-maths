---
titolo: "Entry test"
breve: "24 questions, 3 per module, to work out which modules to start studying from."
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/test-ingresso.md
---

## How it works

- There are 24 questions, 3 for each of the 8 modules, at basic and intermediate level. It takes about **30 minutes**.
- Work **without a calculator**, with a sheet of paper for your calculations, as in the OFA test (OFA: additional learning requirement, *obbligo formativo aggiuntivo*).
- You do not need to prepare: the test is there to show you **which modules to start from**. If you really cannot do a question, leave it blank instead of guessing: that way the result tells you what you are actually missing.
- At the end press “Mark the test”: you see your result module by module. Start from the modules with the most mistakes and reread the explanations of the questions you got wrong.

## The questions

```quiz diagnostico
D(M1): What is the negation of the statement “all prime numbers are odd”?
+ there is at least one even prime number
- all prime numbers are even
- no prime number is odd
- there is at least one odd prime number
= To negate “all the elements have a property” you say “there is at least one element that does not have that property”. Here: there is at least one prime number that is not odd, that is, even. The negation is true ($2$ is prime and even), so the original statement is false. “All prime numbers are even” is not the negation: it is false too (for example $3$ is prime and odd), whereas a statement and its negation always have opposite truth values. “No prime number is odd” says the same thing, so it is wrong for the same reason. “There is at least one odd prime number” is true, but it does not negate the property “odd”: it is not the negation.

D(M1): A pair of shoes costs $80$ euros. With a $15\%$ discount, how many euros do you pay?
N: 68
= The discount is $15\%$ of $80$: $\frac{15}{100} \cdot 80 = 12$ euros, so you pay $80 - 12 = 68$ euros. In a single step: you pay $100\% - 15\% = 85\%$ of the price, that is $0.85 \cdot 80 = 68$.

D(M1): Which of the following fractions have a terminating decimal representation?
+ $\frac{7}{40}$
+ $\frac{21}{35}$
- $\frac{5}{6}$
- $\frac{4}{15}$
= A fraction in lowest terms has a terminating decimal representation if and only if its denominator, factorised into primes, contains only the factors $2$ and $5$. $\frac{7}{40}$: $40 = 2^3 \cdot 5$, terminating ($0.175$). $\frac{21}{35}$ must first be reduced: $\frac{21}{35} = \frac{3}{5} = 0.6$, terminating, even though $35 = 5 \cdot 7$ contains a $7$. $\frac{5}{6}$: $6 = 2 \cdot 3$, repeating ($0.8\overline{3}$). $\frac{4}{15}$: $15 = 3 \cdot 5$, repeating ($0.2\overline{6}$).

D(M2): The expansion of $(2x - 3)^2$ is
+ $4x^2 - 12x + 9$
- $4x^2 - 9$
- $4x^2 + 9$
- $4x^2 - 6x + 9$
= Square of a binomial: $(A - B)^2 = A^2 - 2AB + B^2$, with $A = 2x$ and $B = 3$: $(2x)^2 - 2 \cdot 2x \cdot 3 + 3^2 = 4x^2 - 12x + 9$. Common mistakes: forgetting the middle term, twice the product of the two terms ($4x^2 - 9$ is instead the product $(2x - 3)(2x + 3)$), or writing it without the factor $2$ (which gives $-6x$).

D(M2): What is the remainder when $x^3 - 3x + 5$ is divided by $x - 2$?
N: 7
= By the remainder theorem, the remainder when a polynomial $P(x)$ is divided by $x - a$ is $P(a)$. Here $a = 2$: $P(2) = 8 - 6 + 5 = 7$. With Ruffini's rule, that is synthetic division (coefficients $1, 0, -3, 5$: watch out for the $0$ in place of the $x^2$ term, which is missing), you find the quotient $x^2 + 2x + 1$ and the remainder $7$.

D(M2): Which of the following polynomials are factors of $2x^3 - 8x$?
+ $x$
+ $x - 2$
+ $x + 2$
- $x - 4$
- $x^2 + 4$
= First take out the common factor $2x$: $2x^3 - 8x = 2x(x^2 - 4)$. Then $x^2 - 4$ is a difference of two squares: $x^2 - 4 = (x - 2)(x + 2)$. So $2x^3 - 8x = 2x(x - 2)(x + 2)$, and $x$, $x - 2$, $x + 2$ are factors. $x - 4$ is not: for $x = 4$ the polynomial equals $128 - 32 = 96 \ne 0$. $x^2 + 4$ is not: $2x^3 - 8x = 2x(x^2 + 4) - 16x$, so dividing by $x^2 + 4$ leaves the remainder $-16x$, which is not zero.

D(M3): What is the solution of the equation $\dfrac{x - 1}{2} - \dfrac{x + 1}{3} = 1$?
N: 11
= Multiply both sides by $6$, the least common multiple of the denominators: $3(x - 1) - 2(x + 1) = 6$. Remove the brackets, taking care with the minus sign in front of the second one: $3x - 3 - 2x - 2 = 6$, that is $x - 5 = 6$, so $x = 11$. Check: $\frac{10}{2} - \frac{12}{3} = 5 - 4 = 1$.

D(M3): The solutions of the inequality $x^2 - x - 6 \le 0$ are
+ $-2 \le x \le 3$
- $x \le -2$ or $x \ge 3$
- $-3 \le x \le 2$
- $-2 < x < 3$
= The associated equation $x^2 - x - 6 = 0$ has solutions $-2$ and $3$ (sum $1$, product $-6$). The parabola $y = x^2 - x - 6$ opens upwards (positive coefficient of $x^2$), so it is negative between the roots and zero at the roots: with $\le$ the solution is $-2 \le x \le 3$, endpoints included. The outer intervals solve $\ge 0$; $-3 \le x \le 2$ comes from a sign mistake in the roots.

D(M3): True or false: the system $\begin{cases} x + 2y = 3 \\ 2x + 4y = 5 \end{cases}$ has no solutions.
+ True
- False
= Multiply the first equation by $2$: $2x + 4y = 6$. The second says $2x + 4y = 5$. The same quantity $2x + 4y$ cannot equal $6$ and $5$ at the same time: the system is impossible (inconsistent). In the Cartesian plane the two equations are distinct parallel lines, both with slope $-\frac{1}{2}$.

D(M4): The solutions of the inequality $\dfrac{x + 1}{x - 2} > 0$ are
+ $x < -1$ or $x > 2$
- $-1 < x < 2$
- $x > 2$
- $x \le -1$ or $x > 2$
= Domain condition (condizione di esistenza): $x \ne 2$. The numerator is positive for $x > -1$, the denominator for $x > 2$. A fraction is positive when the numerator and the denominator have the same sign: both negative for $x < -1$, both positive for $x > 2$. Solution: $x < -1$ or $x > 2$. The value $x = -1$ is excluded because there the fraction equals $0$ and the inequality is strict; between $-1$ and $2$ the fraction is negative.

D(M4): The equation $\sqrt{2x + 3} = x$ has only one real solution. What is it?
N: 3
= The square root is greater than or equal to zero, so you need $x \ge 0$. Square both sides: $2x + 3 = x^2$, that is $x^2 - 2x - 3 = 0$, with solutions $3$ and $-1$ (sum $2$, product $-3$). $x = -1$ does not satisfy $x \ge 0$ and must be discarded: substituting it would give $\sqrt{1} = 1$ on the left and $-1$ on the right. That leaves $x = 3$: $\sqrt{9} = 3$.

D(M4): True or false: the equation $|2x - 4| = x$ has two solutions.
+ True
- False
= An absolute value is always $\ge 0$, so you need $x \ge 0$. Under this condition $|2x - 4| = x$ is equivalent to $2x - 4 = x$ or $2x - 4 = -x$. The first gives $x = 4$, the second $3x = 4$, that is $x = \frac{4}{3}$; both satisfy $x \ge 0$. Check: $|8 - 4| = 4$ and $\left|\frac{8}{3} - 4\right| = \frac{4}{3}$. There are two solutions: it is true.

D(M5): What is the distance between the points $A = (1, 2)$ and $B = (4, 6)$?
N: 5
= $AB = \sqrt{(4 - 1)^2 + (6 - 2)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$. It is Pythagoras' theorem in the right-angled triangle whose legs are the horizontal displacement ($3$) and the vertical one ($4$).

D(M5): The line that passes through $P = (1, 3)$ and is perpendicular to the line $y = 2x + 1$ has equation
+ $y = -\frac{1}{2}x + \frac{7}{2}$
- $y = 2x + 1$
- $y = -2x + 5$
- $y = \frac{1}{2}x + \frac{5}{2}$
= Two non-vertical lines are perpendicular when the product of their slopes is $-1$. The given line has $m = 2$, so the perpendicular has $m' = -\frac{1}{2}$, the negative reciprocal. Line through a point: $y - 3 = -\frac{1}{2}(x - 1)$, that is $y = -\frac{1}{2}x + \frac{1}{2} + 3 = -\frac{1}{2}x + \frac{7}{2}$. All the options pass through $P$, but $y = 2x + 1$ is the given line, $y = -2x + 5$ uses only the opposite of $m$ and $y = \frac{1}{2}x + \frac{5}{2}$ only the reciprocal: you need both together.

D(M5): The circle $x^2 + y^2 - 6x + 2y + 6 = 0$ has
+ centre $(3, -1)$ and radius $2$
- centre $(-3, 1)$ and radius $2$
- centre $(3, -1)$ and radius $4$
- centre $(-6, 2)$ and radius $6$
= For $x^2 + y^2 + ax + by + c = 0$ the centre is $\left(-\frac{a}{2}, -\frac{b}{2}\right)$ and the radius is $\sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c}$. Here $a = -6$, $b = 2$, $c = 6$: centre $(3, -1)$, radius $\sqrt{9 + 1 - 6} = \sqrt{4} = 2$. You can also complete the squares: $(x - 3)^2 + (y + 1)^2 = 9 + 1 - 6 = 4$. Radius $4$ is the mistake of forgetting the square root, centre $(-3, 1)$ that of getting the sign wrong, centre $(-6, 2)$ and radius $6$ that of taking the coefficients $a$, $b$, $c$ as they are.

D(M6): The domain of the function $f(x) = \dfrac{\sqrt{x + 1}}{x - 3}$ is
+ $[-1, 3) \cup (3, +\infty)$
- $(-1, 3) \cup (3, +\infty)$
- $[-1, +\infty)$
- $\R \setminus \{3\}$
= Two conditions are needed together. The square root requires a non-negative radicand: $x + 1 \ge 0$, that is $x \ge -1$, with $-1$ included because $\sqrt{0} = 0$ exists. The denominator must not be zero: $x \ne 3$. The domain is $[-1, 3) \cup (3, +\infty)$. $(-1, 3) \cup (3, +\infty)$ wrongly excludes $-1$, $[-1, +\infty)$ forgets the denominator, $\R \setminus \{3\}$ forgets the root.

D(M6): Which of the following functions are even?
+ $f(x) = x^4 - x^2$
+ $f(x) = |x|$
+ $f(x) = \cos x$
- $f(x) = x^3$
- $f(x) = x^2 + x$
= A function is even if $f(-x) = f(x)$ for every $x$ in the domain: its graph is symmetric about the $y$-axis. $(-x)^4 - (-x)^2 = x^4 - x^2$: even. $|-x| = |x|$: even. $\cos(-x) = \cos x$: even. $(-x)^3 = -x^3$: it is odd, not even. $(-x)^2 + (-x) = x^2 - x$, different from $x^2 + x$ (for example $f(1) = 2$ and $f(-1) = 0$): neither even nor odd.

D(M6): Let $f(x) = x^2 - 1$ and $g(x) = 2x + 1$. What is $f(g(1))$?
N: 8
= You work from the inside out: first $g(1) = 2 \cdot 1 + 1 = 3$, then $f(3) = 3^2 - 1 = 8$. In the opposite order you would get $g(f(1)) = g(0) = 1$: composition of functions is not commutative in general.

D(M7): What is the solution of the equation $3^{2x - 1} = 27$?
N: 2
= Write $27$ as a power of $3$: $27 = 3^3$. Two powers with the same base are equal when they have the same exponent: $2x - 1 = 3$, so $x = 2$. Check: $3^{4 - 1} = 3^3 = 27$.

D(M7): True or false: $\log_2 12 - \log_2 3 = 2$.
+ True
- False
= The difference of two logarithms to the same base is the logarithm of the quotient: $\log_2 12 - \log_2 3 = \log_2 \frac{12}{3} = \log_2 4 = 2$, because $2^2 = 4$. It is true. Careful: $\log_2 12 - \log_2 3$ is not $\log_2(12 - 3)$.

D(M7): The solutions of the inequality $\log_2(x - 1) < 3$ are
+ $1 < x < 9$
- $x < 9$
- $1 < x < 7$
- $x > 9$
= Domain condition: $x - 1 > 0$, that is $x > 1$. Write $3$ as a logarithm to base $2$: $3 = \log_2 2^3 = \log_2 8$. The base $2$ is greater than $1$, so the logarithm is increasing and the direction of the inequality stays the same: $x - 1 < 8$, that is $x < 9$. Together with the domain condition: $1 < x < 9$. $x < 9$ forgets the domain condition (for example $\log_2(-1)$ does not exist); $1 < x < 7$ confuses $2^3 = 8$ with $2 \cdot 3 = 6$.

D(M8): How many degrees is an angle of $\frac{5}{6}\pi$ radians?
N: 150
= Degrees and radians are proportional: $\theta : 360° = \rho : 2\pi$, that is, $\pi$ radians correspond to $180°$. So $\frac{5}{6}\pi$ radians are $\frac{5}{6} \cdot 180° = 150°$.

D(M8): What is $\sin\frac{5}{6}\pi + \cos\frac{2}{3}\pi$?
N: 0
= Use related angles (archi associati). $\frac{5}{6}\pi = \pi - \frac{\pi}{6}$ and $\sin(\pi - \alpha) = \sin\alpha$, so $\sin\frac{5}{6}\pi = \sin\frac{\pi}{6} = \frac{1}{2}$. $\frac{2}{3}\pi = \pi - \frac{\pi}{3}$ and $\cos(\pi - \alpha) = -\cos\alpha$, so $\cos\frac{2}{3}\pi = -\cos\frac{\pi}{3} = -\frac{1}{2}$. The sum is $\frac{1}{2} - \frac{1}{2} = 0$. On the unit circle: in the second quadrant the sine is positive and the cosine is negative.

D(M8): The solutions of the equation $\cos x = \frac{1}{2}$ in the interval $[0, 2\pi)$ are
+ $\frac{\pi}{3}$ and $\frac{5}{3}\pi$
- $\frac{\pi}{3}$ and $\frac{2}{3}\pi$
- $\frac{\pi}{6}$ and $\frac{5}{6}\pi$
- $\frac{\pi}{6}$ and $\frac{11}{6}\pi$
= The first-quadrant angle with cosine $\frac{1}{2}$ is $\frac{\pi}{3}$, that is $60°$. Two angles have the same cosine when they are opposite: the other solution is $-\frac{\pi}{3}$, which in $[0, 2\pi)$ is written $2\pi - \frac{\pi}{3} = \frac{5}{3}\pi$ (fourth quadrant, where the cosine is still positive). $\frac{2}{3}\pi$ has cosine $-\frac{1}{2}$; $\frac{\pi}{6}$ and $\frac{5}{6}\pi$ are the solutions of $\sin x = \frac{1}{2}$; $\frac{\pi}{6}$ and $\frac{11}{6}\pi$ those of $\cos x = \frac{\sqrt{3}}{2}$.
```
