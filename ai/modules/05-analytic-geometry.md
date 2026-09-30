---
modulo: 5
titolo: "Analytic geometry: lines and conics"
breve: "Cartesian plane, distance and midpoint, the straight line and its equations, circle, parabola, ellipse and hyperbola."
ore: 9
unita:
  - "Introduction: the Cartesian plane"
  - "5.1 The straight line in the Cartesian plane"
  - "5.2 Conic sections"
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/moduli/05-geometria-analitica.md
---

## In brief

- **Distance** and **midpoint** of $A = (x_A, y_A)$ and $B = (x_B, y_B)$: $d(A, B) = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$ and $M = \left(\frac{x_A + x_B}{2}, \frac{y_A + y_B}{2}\right)$.
- Every line has an equation $ax + by + c = 0$; if it is not vertical it can be written $y = mx + q$, with **slope** $m = -\frac{a}{b}$ and **$y$-intercept** $q$.
- Line through a point: $y - y_P = m(x - x_P)$. Through two points: first $m = \frac{y_B - y_A}{x_B - x_A}$, then the previous formula.
- **Parallel**: same $m$. **Perpendicular**: $m \cdot m' = -1$. The common point of two lines is found by solving the system.
- **Point-to-line distance**: $\frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$; you also use it to tell whether a line is tangent to a circle.
- **Circle** $x^2 + y^2 + ax + by + c = 0$: centre $\left(-\frac{a}{2}, -\frac{b}{2}\right)$, radius $\sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c}$; if the number under the root is negative, it is not a real circle.
- **Parabola** $y = ax^2 + bx + c$: vertex at $x_V = -\frac{b}{2a}$, opening upwards if $a > 0$. Its graph solves second-degree (quadratic) inequalities.
- **Ellipse** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ and **hyperbola** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$: vertices, foci ($c^2 = a^2 - b^2$ for the ellipse with $a > b$, $c^2 = a^2 + b^2$ for the hyperbola) and, for the hyperbola, asymptotes $y = \pm\frac{b}{a}x$. The rectangular hyperbola referred to its asymptotes is $xy = k$.

## Introduction: the Cartesian plane

**Analytic geometry** translates geometry into algebra: a point becomes a pair of numbers, a line or a curve becomes an equation in $x$ and $y$. In this way geometric problems are solved with equations, systems and inequalities, and conversely an equation can be “seen” as a figure.

### The Cartesian coordinate system

> [!DEF] Cartesian coordinate system
> A **Cartesian coordinate system** is formed by two perpendicular oriented lines that meet at the **origin** $O$: the **axis of abscissas** ($x$-axis, horizontal, oriented to the right) and the **axis of ordinates** ($y$-axis, vertical, oriented upwards). The real numbers are represented on both of them, with $0$ at $O$.
> Every point $P$ corresponds to exactly one ordered pair $P = (x, y)$: $x$ is the **$x$-coordinate** (abscissa) of $P$, $y$ is its **$y$-coordinate** (ordinate).

The axes divide the plane into four **quadrants**, numbered anticlockwise starting from the positive $x$-axis. Points lying on the axes do not belong to any quadrant: on the $x$-axis they have $y = 0$, on the $y$-axis they have $x = 0$.

| Quadrant | Signs of the coordinates | Example |
|---|---|---|
| I | $x > 0$, $y > 0$ | $P = (3, 2)$ |
| II | $x < 0$, $y > 0$ | $Q = (-2, 3)$ |
| III | $x < 0$, $y < 0$ | $R = (-3, -2)$ |
| IV | $x > 0$, $y < 0$ | $S = (2, -3)$ |

```grafico
titolo: The four quadrants and the points in the table
x: -5 5
y: -4 4
punto: 3 2 | $P$ | ne
punto: -2 3 | $Q$ | no
punto: -3 -2 | $R$ | so
punto: 2 -3 | $S$ | se
segmento: 3 0 3 2 | tratteggio | grigio
segmento: 0 2 3 2 | tratteggio | grigio
testo: 4 3 | "I"
testo: -4 3 | "II"
testo: -4 -3 | "III"
testo: 4 -3 | "IV"
```

> [!NOTA] Symmetric points
> You will need them with conics and with functions. The point symmetric to $P = (x, y)$ with respect to the $x$-axis is $(x, -y)$; with respect to the $y$-axis it is $(-x, y)$; with respect to the origin it is $(-x, -y)$; with respect to the bisector $y = x$ it is $(y, x)$, that is, the coordinates are swapped.

> [!ESEMPIO] A point and its symmetric points
> $P = (-1, 4)$ has a negative $x$-coordinate and a positive $y$-coordinate: it lies in quadrant II. Its symmetric point with respect to the $x$-axis is $(-1, -4)$, in quadrant III; with respect to the $y$-axis it is $(1, 4)$, in quadrant I; with respect to the origin it is $(1, -4)$, in quadrant IV; with respect to the bisector $y = x$ it is $(4, -1)$, in quadrant IV.

### Distance between two points

> [!PROP] Distance between two points
> The distance between $A = (x_A, y_A)$ and $B = (x_B, y_B)$ is
> $$
> d(A, B) = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}
> $$

You do not need to learn it by heart: it is **Pythagoras' theorem**. The segment $AB$ is the hypotenuse of a right-angled triangle with a horizontal leg of length $|x_B - x_A|$ and a vertical leg of length $|y_B - y_A|$ (the bars $|\ldots|$ denote the absolute value). The differences are squared, so the order of the subtraction does not matter. If the two points have the same $y$-coordinate, the distance is simply $|x_B - x_A|$; if they have the same $x$-coordinate, it is $|y_B - y_A|$.

```grafico
titolo: Distance between $A = (1, 2)$ and $B = (4, 6)$: legs $3$ and $4$, hypotenuse $5$
x: -1 6
y: 0 7
segmento: 1 2 4 6 | rosso | $d = 5$ | no
segmento: 1 2 4 2 | tratteggio | $3$ | s
segmento: 4 2 4 6 | tratteggio | $4$ | e
punto: 1 2 | $A$ | so
punto: 4 6 | $B$ | ne
```

> [!ESEMPIO] Two distances
> $A = (1, 2)$, $B = (4, 6)$: $d = \sqrt{(4 - 1)^2 + (6 - 2)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
>
> $A = (-2, -1)$, $B = (4, 1)$: $x_B - x_A = 4 - (-2) = 6$ and $y_B - y_A = 1 - (-1) = 2$, so $d = \sqrt{36 + 4} = \sqrt{40} = 2\sqrt{10}$.

> [!TRAPPOLA] The minus signs
> With negative coordinates it is easy to get the subtraction wrong: $4 - (-2) = 6$, not $2$. Always write the brackets before substituting.

### Midpoint of a segment

> [!PROP] Midpoint
> The coordinates of the midpoint of the segment $AB$ are the averages of the coordinates of the endpoints:
> $$
> M = \left(\frac{x_A + x_B}{2}, \frac{y_A + y_B}{2}\right)
> $$

> [!ESEMPIO] Midpoint and the inverse problem
> $A = (-3, 5)$, $B = (7, -1)$: $M = \left(\frac{-3 + 7}{2}, \frac{5 - 1}{2}\right) = (2, 2)$.
>
> Inverse problem: $M = (3, 1)$ is the midpoint of $AB$ and $A = (1, -2)$; find $B$. From $\frac{1 + x_B}{2} = 3$ you get $x_B = 5$; from $\frac{-2 + y_B}{2} = 1$ you get $y_B = 4$. So $B = (5, 4)$, which is also the point symmetric to $A$ with respect to $M$.

> [!TEST] Distances without a calculator
> Pythagorean triples save time: if the differences of the coordinates are $3$ and $4$ (or $6$ and $8$, $5$ and $12$, $8$ and $15$), the distance is $5$ (or $10$, $13$, $17$) without computing any roots. If the result is a root, simplify it: $\sqrt{40} = \sqrt{4 \cdot 10} = 2\sqrt{10}$. To find a point “equidistant” from two given points, set the **squares** of the distances equal: the roots disappear and the second-degree terms cancel out.

## 5.1 The straight line in the Cartesian plane

In this unit every line is described by a first-degree equation in $x$ and $y$. A point belongs to a line (or to any curve) **if and only if** its coordinates, substituted into the equation, make it true.

### Special lines

- The $x$-axis is made up of the points with $y$-coordinate zero: its equation is $y = 0$. The $y$-axis has equation $x = 0$.
- **Horizontal** lines, parallel to the $x$-axis, have equation $y = k$: all their points have $y$-coordinate $k$. **Vertical** lines, parallel to the $y$-axis, have equation $x = h$.
- The lines through the origin, except the $y$-axis, have equation $y = mx$: for each of their points $(x, y)$ with $x \ne 0$ the ratio $\frac{y}{x}$ is always $m$.
- The **bisector** (*bisettrice*) of quadrants I and III contains the points with equal coordinates, of the form $(x, x)$: its equation is $y = x$. The bisector of quadrants II and IV contains the points $(x, -x)$: its equation is $y = -x$.

```grafico
titolo: The lines $y = 2$, $x = -3$ and the bisectors $y = x$, $y = -x$
x: -5 5
y: -4 4
f: 2 | $y = 2$ | so
verticale: -3 | $x = -3$
f: x | rosso | a=4 | $y = x$ | no
f: -x | rosso | tratteggio | a=4 | $y = -x$ | ne
```

> [!ESEMPIO] Lines through a point parallel to the axes
> The vertical line through $(5, -2)$ is $x = 5$ (all its points have $x$-coordinate $5$); the horizontal line through the same point is $y = -2$. The point $(-3, 3)$ lies on the bisector $y = -x$, because $3 = -(-3)$; it does not lie on the bisector $y = x$.

### Slope-intercept form: slope and y-intercept

> [!DEF] Slope-intercept form
> A non-vertical line has equation $y = mx + q$. The number $m$ is the **slope** (or **gradient**; in Italian *coefficiente angolare* or *pendenza*), the number $q$ is the **$y$-intercept** (*ordinata all'origine*): the line crosses the $y$-axis at the point $(0, q)$.

The slope measures how steeply the line rises: if $x$ increases by $1$, $y$ increases by $m$. Taking any two points $A$ and $B$ on the line,
$$
m = \frac{\Delta y}{\Delta x} = \frac{y_B - y_A}{x_B - x_A}
$$
where $\Delta$ (read “delta”) denotes a change: $\Delta x$ is how much the $x$-coordinate changes, $\Delta y$ how much the $y$-coordinate changes. It is also true that $m = \tan\alpha$, where $\alpha$ (read “alpha”) is the angle that the line forms with the positive $x$-axis (you will meet the tangent $\tan$ again in trigonometry).

- $m > 0$: the line rises from left to right and forms an acute angle with the $x$-axis;
- $m < 0$: the line falls, obtuse angle;
- $m = 0$: horizontal line;
- vertical line: $m$ does not exist, because $\Delta x = 0$.

The larger $|m|$, the steeper the line.

```grafico
titolo: Lines through $(0, 1)$ with different slopes
x: -4 4
y: -3 5
f: 2x + 1 | da=-2 | a=2 | $m = 2$ | o
f: x/2 + 1 | grigio | $m = \frac{1}{2}$
f: 1 | tratteggio | $m = 0$
f: -x + 1 | rosso | $m = -1$ | so
punto: 0 1 | $q = 1$ | no
```

> [!ESEMPIO] Reading a line
> $y = -2x + 3$ has $m = -2$ (it goes down by $2$ for every step to the right) and $q = 3$, so it passes through $(0, 3)$. It crosses the $x$-axis where $y = 0$: $-2x + 3 = 0$, that is $x = \frac{3}{2}$.
> The point $(2, -1)$ belongs to the line, because $-2 \cdot 2 + 3 = -1$; the point $(1, 2)$ does not, because $-2 \cdot 1 + 3 = 1 \ne 2$.

### General (implicit) form

> [!PROP] All lines, and only lines
> Every first-degree equation $ax + by + c = 0$, with $a$ and $b$ not both zero, represents a line; conversely, every line in the plane has an equation of this type, called the **general (implicit) form**.
> If $b \ne 0$ you can solve for $y$: $y = -\frac{a}{b}x - \frac{c}{b}$, so
> $$
> m = -\frac{a}{b}, \qquad q = -\frac{c}{b}
> $$

Special cases:

- $b = 0$: what remains is $ax + c = 0$, that is $x = -\frac{c}{a}$, a vertical line with no slope. It is the only case that the slope-intercept form does not cover.
- $a = 0$: $y = -\frac{c}{b}$, a horizontal line.
- $c = 0$: the line passes through the origin.

The same line has infinitely many general equations: multiplying all the coefficients by the same number $k \ne 0$ does not change the line. For example $2x - y + 1 = 0$ and $4x - 2y + 2 = 0$ are the same line.

> [!ESEMPIO] From general to slope-intercept form
> $3x - 2y + 6 = 0$. Isolate $y$: $-2y = -3x - 6$; divide by $-2$: $y = \frac{3}{2}x + 3$. So $m = \frac{3}{2}$ (with the formula: $-\frac{a}{b} = -\frac{3}{-2} = \frac{3}{2}$) and $q = 3$.
> Intersections with the axes: for $x = 0$ you find $y = 3$, point $(0, 3)$; for $y = 0$ you find $3x + 6 = 0$, that is $x = -2$, point $(-2, 0)$. Two points are enough to draw it.

```grafico
titolo: The line $3x - 2y + 6 = 0$: moving $2$ to the right you go up $3$, so $m = \frac{3}{2}$
x: -5 3
y: -4 5
f: 3x/2 + 3
punto: 0 3 | $(0, 3)$ | e
punto: -2 0 | $(-2, 0)$ | no
segmento: -4 -3 -2 -3 | rosso | tratteggio | $\Delta x = 2$ | s
segmento: -2 -3 -2 0 | rosso | tratteggio | $\Delta y = 3$ | e
```

> [!TRAPPOLA] The sign of $m$
> In $ax + by + c = 0$ the slope is $-\frac{a}{b}$, with the minus sign in front. For $2x - 4y + 1 = 0$: $m = -\frac{2}{-4} = \frac{1}{2}$, not $-\frac{1}{2}$. When in doubt, isolate $y$.

### Line through a point and line through two points

> [!PROP] Line through a point with a given slope
> The line that passes through $P = (x_P, y_P)$ and has slope $m$ is
> $$
> y - y_P = m(x - x_P)
> $$
> As $m$ varies you get all the lines through $P$ except the vertical one, $x = x_P$.

> [!METODO] Line through two points $A$ and $B$
> 1. If $x_A = x_B$ the line is vertical: $x = x_A$. If $y_A = y_B$ it is horizontal: $y = y_A$.
> 2. Otherwise compute $m = \frac{y_B - y_A}{x_B - x_A}$.
> 3. Write $y - y_A = m(x - x_A)$ and simplify.
> 4. Check that $B$ also satisfies the equation.
>
> In one go you can use $\frac{x - x_A}{x_B - x_A} = \frac{y - y_A}{y_B - y_A}$, when the denominators are not zero.

> [!ESEMPIO] Two lines through two points
> $A = (1, 2)$, $B = (3, 8)$: $m = \frac{8 - 2}{3 - 1} = 3$; $y - 2 = 3(x - 1)$, that is $y = 3x - 1$. Check with $B$: $3 \cdot 3 - 1 = 8$.
>
> $A = (-2, 5)$, $B = (4, 2)$: $m = \frac{2 - 5}{4 - (-2)} = \frac{-3}{6} = -\frac{1}{2}$; $y - 5 = -\frac{1}{2}(x + 2)$, that is $y = -\frac{1}{2}x + 4$, in general form $x + 2y - 8 = 0$. Check with $B$: $-2 + 4 = 2$.

### Intersection of two lines

A point common to two lines must satisfy both equations: you solve the **system** formed by the two equations, with the methods for linear systems. There are three cases:

- exactly one solution: **intersecting** lines (different slopes);
- no solution (impossible system): **distinct parallel** lines;
- infinitely many solutions (indeterminate system): **coincident** lines.

> [!ESEMPIO] Where they meet
> $r: 2x + y - 7 = 0$ and $s: x - y - 2 = 0$. Adding the two equations side by side: $3x - 9 = 0$, so $x = 3$; from $s$ you get $y = x - 2 = 1$. The common point is $(3, 1)$. Check in $r$: $6 + 1 - 7 = 0$.

> [!ESEMPIO] Which plan is cheaper
> To rent a bike, plan A costs €$2$ an hour; plan B costs a fixed €$5$ plus €$1$ an hour. With $x$ = hours and $y$ = cost in euros: A is the line $y = 2x$, B is the line $y = x + 5$. They meet where $2x = x + 5$, that is for $x = 5$ (cost €$10$). For less than $5$ hours the line of A lies below that of B and A is cheaper; beyond $5$ hours B is cheaper.

```grafico
titolo: Plan A $y = 2x$ and plan B $y = x + 5$: they meet at $(5, 10)$
x: -1 10
y: -2 16
proporzioni: libere
f: 2x | da=0 | a=8 | $A$ | no
f: x + 5 | rosso | da=0 | $B$ | s
punto: 5 10 | $(5, 10)$ | se
verticale: 5 | tratteggio | grigio
```

### Parallelism and perpendicularity

> [!PROP] Parallel and perpendicular lines
> For $r: y = mx + q$ and $r': y = m'x + q'$:
> - $r$ and $r'$ are **parallel** ($r \parallel r'$) if and only if $m = m'$;
> - $r$ and $r'$ are **perpendicular** ($r \perp r'$) if and only if $m \cdot m' = -1$, that is $m' = -\frac{1}{m}$: the slope of the perpendicular is the **negative reciprocal** (*antireciproco*).
>
> In general form, $ax + by + c = 0$ and $a'x + b'y + c' = 0$ are parallel if $ab' = a'b$ and perpendicular if $aa' + bb' = 0$. These two conditions also hold for horizontal and vertical lines: two vertical lines are parallel, a horizontal line and a vertical line are perpendicular.

> [!ESEMPIO] Parallel and perpendicular through a point
> Line through $P = (2, -1)$ parallel to $r: y = 3x + 5$: same slope $3$, so $y + 1 = 3(x - 2)$, that is $y = 3x - 7$.
> Line through $P$ perpendicular to $r$: slope $-\frac{1}{3}$, so $y + 1 = -\frac{1}{3}(x - 2)$, that is $y = -\frac{1}{3}x - \frac{1}{3}$.
>
> With the general form: $2x - 3y + 1 = 0$ and $6x - 9y + 4 = 0$ are parallel, because $2 \cdot (-9) = 6 \cdot (-3) = -18$; $2x - 3y + 1 = 0$ and $3x + 2y - 5 = 0$ are perpendicular, because $2 \cdot 3 + (-3) \cdot 2 = 0$.

```grafico
titolo: Through $P = (2, -1)$: the parallel $s$ and the perpendicular $t$ to the line $r: y = 3x + 5$
x: -4 5
y: -5 4
f: 3x + 5 | grigio | da=-3 | a=-1/3 | $r$ | o
f: 3x - 7 | da=2/3 | a=11/3 | $s$ | o
f: -x/3 - 1/3 | rosso | $t$ | n
punto: 2 -1 | $P$ | se
```

> [!TRAPPOLA] Negative reciprocal, not just the opposite
> The perpendicular to a line with slope $\frac{2}{3}$ has slope $-\frac{3}{2}$: you change the sign **and** turn the fraction upside down. Writing $-\frac{2}{3}$ (only the opposite) or $\frac{3}{2}$ (only the reciprocal) are typical mistakes.

### Distance from a point to a line

> [!PROP] Point-to-line distance
> The distance of $P_0 = (x_0, y_0)$ from the line $r: ax + by + c = 0$ is
> $$
> d(P_0, r) = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}
> $$
> It is the length of the segment $P_0H$, where $H$ is the foot of the perpendicular drawn from $P_0$ to $r$. If $P_0$ lies on the line, the numerator is $0$.

The line must be written **in general form**. For lines parallel to the axes it is simpler: the distance of $P_0$ from the line $x = h$ is $|x_0 - h|$, from the line $y = k$ it is $|y_0 - k|$.

> [!ESEMPIO] Two distances
> $P = (2, -1)$ and $r: 3x + 4y + 8 = 0$: $d = \frac{|3 \cdot 2 + 4 \cdot (-1) + 8|}{\sqrt{9 + 16}} = \frac{|10|}{5} = 2$.
> If the line is given in slope-intercept form, for example $y = 2x - 3$, first bring it to the form $2x - y - 3 = 0$. The distance of the origin from it is then $\frac{|-3|}{\sqrt{4 + 1}} = \frac{3}{\sqrt5} = \frac{3\sqrt5}{5}$.

```grafico
titolo: The distance of $P = (2, -1)$ from the line $3x + 4y + 8 = 0$ is the length of $PH$
x: -4 4
y: -5 2
f: -3x/4 - 2 | $r$ | so
punto: 2 -1 | $P$ | ne
punto: 4/5 -13/5 | $H$ | so
segmento: 2 -1 4/5 -13/5 | rosso | $d = 2$ | e
```

### Pencils of lines

> [!DEF] Pencils of lines
> The **improper pencil** (*fascio improprio*) is the set of all the lines parallel to a given line: $y = mx + q$ with $m$ fixed and $q$ varying; the vertical lines form the pencil $x = k$, with $k$ varying.
> The **proper pencil** (*fascio proprio*) with **centre** $C = (x_C, y_C)$ is the set of all the lines through $C$: $y - y_C = m(x - x_C)$ as $m$ varies, plus the vertical line $x = x_C$.
> If two lines $ax + by + c = 0$ and $a'x + b'y + c' = 0$ meet at $C$, the proper pencil can also be written $\lambda(ax + by + c) + \mu(a'x + b'y + c') = 0$, with $\lambda$ (lambda) and $\mu$ (mu) real numbers that are not both zero.

> [!ESEMPIO] Choosing a line of the pencil
> The pencil $y - 2 = m(x - 1)$ has centre $(1, 2)$. Which of its lines also passes through $(3, 6)$? Substitute: $6 - 2 = m(3 - 1)$, so $m = 2$, and the line is $y - 2 = 2(x - 1)$, that is $y = 2x$.

```grafico
titolo: Some lines of the proper pencil with centre $C = (1, 2)$; in red the one through $(3, 6)$
x: -3 5
y: -2 7
f: 2 + (x - 1) | grigio
f: 2 - (x - 1) | grigio
f: 2 | grigio
verticale: 1 | grigio
f: 2x | rosso | da=-1 | a=3.5 | $y = 2x$ | o
punto: 1 2 | $C$ | se
punto: 3 6 | $(3, 6)$ | e
```

> [!METODO] Centre of a pencil written with a parameter
> An equation such as $(k + 1)x - y + 2k = 0$, with $k$ a parameter, represents a different line for each value of $k$. Collect the terms in $k$: $k(x + 2) + (x - y) = 0$. The centre makes both brackets zero, whatever $k$ is: $x + 2 = 0$ and $x - y = 0$, so $C = (-2, -2)$.
> Watch out: with a single parameter, the very line that multiplies $k$ is missing (here the vertical line $x = -2$), which no value of $k$ produces. That is why the general form uses two parameters, $\lambda$ and $\mu$.

> [!TEST] Lines in the test questions
> In the questions with a choice of four answers it pays to **check the options** instead of redoing everything: substitute the given point (discard the lines that do not pass through it), then compare the slopes. For a line in general form use $m = -\frac{a}{b}$ straight away. With a parameter $k$ (“for which $k$ is the line parallel, perpendicular, through…”) write $m$ as a function of $k$ and impose the condition: the result is a number, suitable for a numeric answer.

## 5.2 Conic sections

Circle, parabola, ellipse and hyperbola are called **conics** (conic sections). They are all described by second-degree equations in $x$ and $y$.

> [!NOTA] Why “conics”
> They are the curves you get by cutting a **right circular cone** with a plane (imagine two infinite ice-cream cones joined at the tip). A plane perpendicular to the axis of the cone gives a circle; a slightly tilted plane gives an ellipse; a plane parallel to a line of the cone gives a parabola; a plane that cuts both parts of the cone gives a hyperbola. If the plane passes through the vertex you get the **degenerate conics**: the vertex alone, or two intersecting lines, or two coincident lines.

### The circle

> [!DEF] Circle
> The **circle** (*circonferenza*) with **centre** $C$ and **radius** $r > 0$ is the locus of the points $P$ of the plane at distance $r$ from $C$: $d(P, C) = r$. “Locus” means: the set of all and only the points with that property.

With $C = (\alpha, \beta)$ (read “alpha” and “beta”), the distance formula, squared, gives the equation.

> [!PROP] Equation of the circle
> $$
> (x - \alpha)^2 + (y - \beta)^2 = r^2
> $$
> Expanding the squares you get the form $x^2 + y^2 + ax + by + c = 0$, from which
> $$
> C = \left(-\frac{a}{2}, -\frac{b}{2}\right), \qquad r = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c}
> $$
> The equation represents a real circle only if $\frac{a^2}{4} + \frac{b^2}{4} - c \ge 0$, that is $a^2 + b^2 - 4c \ge 0$; if this quantity is $0$, the “circle” reduces to the centre alone.

You recognise it like this: a second-degree equation in $x$ and $y$, **without the $xy$ term**, with **equal** coefficients of $x^2$ and $y^2$. If they are not $1$, first divide the whole equation by that number.

> [!ESEMPIO] From centre and radius to the equation, and back
> Centre $(2, -1)$ and radius $3$: $(x - 2)^2 + (y + 1)^2 = 9$, that is $x^2 - 4x + 4 + y^2 + 2y + 1 - 9 = 0$, or $x^2 + y^2 - 4x + 2y - 4 = 0$.
>
> Back: in $x^2 + y^2 - 4x + 2y - 4 = 0$ you have $a = -4$, $b = 2$, $c = -4$. Centre $\left(-\frac{-4}{2}, -\frac{2}{2}\right) = (2, -1)$, radius $\sqrt{4 + 1 + 4} = 3$.
>
> The equation $2x^2 + 2y^2 - 8x + 4y - 8 = 0$, divided by $2$, is the same circle.

```grafico
titolo: The circle $x^2 + y^2 - 4x + 2y - 4 = 0$, with centre $(2, -1)$ and radius $3$
x: -2 6
y: -5 3
cerchio: 2 -1 3 | rosso
punto: 2 -1 | $C$ | so
segmento: 2 -1 5 -1 | tratteggio | $r = 3$ | n
```

> [!ESEMPIO] A circle through the origin and a non-real circle
> $x^2 + y^2 - 6x + 8y = 0$: centre $(3, -4)$, radius $\sqrt{9 + 16 - 0} = 5$. The constant term is $0$, so it passes through the origin.
> $x^2 + y^2 + 2x - 4y + 10 = 0$: the “centre” would be $(-1, 2)$, but $1 + 4 - 10 = -5 < 0$. No real point satisfies the equation: it is not a circle.

> [!METODO] Circle through three points
> Three non-collinear points determine exactly one circle. Substitute their coordinates into $x^2 + y^2 + ax + by + c = 0$: you get a linear system of three equations in the unknowns $a$, $b$, $c$.
> With $O = (0, 0)$, $A = (4, 0)$, $B = (0, 2)$: from $O$ you get $c = 0$; from $A$: $16 + 4a = 0$, $a = -4$; from $B$: $4 + 2b = 0$, $b = -2$. The circle is $x^2 + y^2 - 4x - 2y = 0$, with centre $(2, 1)$ and radius $\sqrt{4 + 1} = \sqrt5$.
> Alternatively, the centre is the point where the perpendicular bisectors of two chords meet (the **perpendicular bisector** of a segment is the line perpendicular to the segment through its midpoint), for example those of the segments $OA$ and $OB$: $x = 2$ and $y = 1$.

> [!TRAPPOLA] Centre with the signs changed
> The centre has coordinates $-\frac{a}{2}$ and $-\frac{b}{2}$: for $x^2 + y^2 + 6x - 2y = 0$ the centre is $(-3, 1)$, not $(3, -1)$. And in the form $(x - \alpha)^2 + (y - \beta)^2 = r^2$ the right-hand side is $r^2$: if you find $25$, the radius is $5$.

### Line and circle

> [!PROP] Position of a line relative to a circle
> Let $d$ be the distance of the centre $C$ from the line and $r$ the radius:
> - $d > r$: **non-intersecting** line (*retta esterna*), no common point;
> - $d = r$: **tangent** line, exactly one common point;
> - $d < r$: **secant** line, two common points.
>
> You get the same result by putting the line and the circle into a system: the second-degree equation you obtain has $\Delta < 0$, $\Delta = 0$ or $\Delta > 0$.

> [!ESEMPIO] Three lines and the circle $x^2 + y^2 = 25$
> Centre $O$, radius $5$.
> - $3x + 4y - 25 = 0$: $d = \frac{|-25|}{5} = 5 = r$, tangent. The point of contact is $T = (3, 4)$: it lies on both, because $9 + 16 = 25$ and $9 + 16 - 25 = 0$.
> - $y = x - 1$: substituting, $x^2 + (x - 1)^2 = 25$, that is $2x^2 - 2x - 24 = 0$, or $x^2 - x - 12 = 0$, with solutions $x = 4$ and $x = -3$. Secant at the points $(4, 3)$ and $(-3, -4)$.
> - $y = x + 8$, that is $x - y + 8 = 0$: $d = \frac{8}{\sqrt2} = 4\sqrt2$, about $5.66 > 5$. Non-intersecting.

```grafico
titolo: Non-intersecting, tangent and secant lines for the circle $x^2 + y^2 = 25$
x: -9 9
y: -7 8
cerchio: 0 0 5
f: x + 8 | grigio | da=-9 | a=0 | "non-intersecting" | o
f: -3x/4 + 25/4 | rosso
f: x - 1 | "secant" | no
testo: 1.6 6.3 | "tangent" | bianco
punto: 3 4 | rosso | $T$ | ne
punto: 4 3 | se
punto: -3 -4 | so
```

> [!METODO] Tangent at a point of the circle
> The tangent at a point $P_0$ of the circle is perpendicular to the radius $CP_0$. So compute the slope of $CP_0$, take the negative reciprocal and write the line through $P_0$.
> For $x^2 + y^2 = 25$ at $T = (3, 4)$: the line $OT$ has slope $\frac{4}{3}$, the tangent has slope $-\frac{3}{4}$: $y - 4 = -\frac{3}{4}(x - 3)$, that is $3x + 4y - 25 = 0$, the line of the previous example.
> If $CP_0$ is horizontal the tangent is vertical, and vice versa.

### Pencils of circles

Given two circles with different centres, $C_1: x^2 + y^2 + a_1x + b_1y + c_1 = 0$ and $C_2: x^2 + y^2 + a_2x + b_2y + c_2 = 0$, the **pencil** they determine is
$$
\lambda(x^2 + y^2 + a_1x + b_1y + c_1) + \mu(x^2 + y^2 + a_2x + b_2y + c_2) = 0
$$
- if $\lambda + \mu \ne 0$ you get a circle (divide by $\lambda + \mu$);
- if $\lambda + \mu = 0$ the second-degree terms disappear and a line remains, the **radical axis**. In practice you find it by **subtracting** the two equations: $(a_1 - a_2)x + (b_1 - b_2)y + (c_1 - c_2) = 0$.

> [!PROP] Properties of the pencil of circles
> - The points common to $C_1$ and $C_2$ belong to all the circles of the pencil and to the radical axis.
> - The centres of all the circles of the pencil lie on the **line of centres** (*asse centrale*), the line through the centres of $C_1$ and $C_2$; the radical axis is perpendicular to the line of centres.
> - If $C_1$ and $C_2$ cut each other at two points, the radical axis is the line through those points; if they are tangent, it passes through the point of contact; if they have no common points, the radical axis does not meet any circle of the pencil.
> - Through every point of the plane passes one element of the pencil (a circle or the radical axis): the pencil “fills” the plane.

> [!ESEMPIO] Two circles that cut each other
> $C_1: x^2 + y^2 - 4 = 0$ (centre $O$, radius $2$) and $C_2: x^2 + y^2 - 4x = 0$ (centre $(2, 0)$, radius $2$).
> Radical axis: $(x^2 + y^2 - 4) - (x^2 + y^2 - 4x) = 4x - 4 = 0$, that is $x = 1$. Common points: with $x = 1$ in $C_1$ you find $1 + y^2 = 4$, $y = \pm\sqrt3$ (read “plus or minus”: $y = \sqrt3$ or $y = -\sqrt3$), so $P_1 = (1, \sqrt3)$ and $P_2 = (1, -\sqrt3)$. The line of centres is the $x$-axis, perpendicular to $x = 1$.
> Circle of the pencil through $(3, 0)$: substituting into $\lambda(x^2 + y^2 - 4) + \mu(x^2 + y^2 - 4x) = 0$ you find $5\lambda - 3\mu = 0$. Choose $\lambda = 3$, $\mu = 5$: $8x^2 + 8y^2 - 20x - 12 = 0$, that is $x^2 + y^2 - \frac{5}{2}x - \frac{3}{2} = 0$, with centre $\left(\frac{5}{4}, 0\right)$ on the line of centres and radius $\frac{7}{4}$.

```grafico
titolo: $x^2 + y^2 = 4$, $x^2 + y^2 - 4x = 0$, the radical axis $x = 1$ and (dashed) the circle of the pencil through $(3, 0)$
x: -3 5
y: -3 3
cerchio: 0 0 2
cerchio: 2 0 2
cerchio: 5/4 0 7/4 | rosso | tratteggio
verticale: 1 | rosso | $x = 1$
punto: 1 sqrt(3) | $P_1$ | ne
punto: 1 -sqrt(3) | $P_2$ | se
punto: 3 0 | rosso | e
```

### The parabola

> [!DEF] Parabola
> Given a point $F$, the **focus**, and a line $f$ that does not pass through $F$, the **directrix**, the **parabola** is the locus of the points $P$ equidistant from the focus and from the directrix: $d(P, F) = d(P, f)$.
> The point of the parabola closest to the focus and to the directrix is the **vertex** $V$; the line through $F$ perpendicular to the directrix is the **axis of symmetry**.

Taking $F = (0, c)$ and the directrix $y = -c$, the condition is $\sqrt{x^2 + (y - c)^2} = |y + c|$; squaring and simplifying leaves $x^2 = 4cy$, that is $y = \frac{1}{4c}x^2$.

> [!PROP] Parabola with its vertex at the origin
> - Focus $(0, c)$ and directrix $y = -c$: the parabola is $y = ax^2$ with $a = \frac{1}{4c}$. Its axis is the $y$-axis; the focus is $\left(0, \frac{1}{4a}\right)$ and the directrix $y = -\frac{1}{4a}$.
> - Focus $(c, 0)$ and directrix $x = -c$: the parabola is $x = ay^2$, with the $x$-axis as its axis, focus $\left(\frac{1}{4a}, 0\right)$ and directrix $x = -\frac{1}{4a}$.
>
> In $y = ax^2$: if $a > 0$ the parabola is **concave up** (it opens upwards), if $a < 0$ it opens downwards; the larger $|a|$, the narrower the parabola. In $x = ay^2$: it opens to the right if $a > 0$, to the left if $a < 0$.

> [!ESEMPIO] Focus and directrix
> $y = \frac{1}{8}x^2$: $a = \frac{1}{8}$ and $\frac{1}{4a} = 2$, so focus $(0, 2)$ and directrix $y = -2$. Check with the point $(4, 2)$ of the parabola: it is at distance $4$ from the focus and $2 - (-2) = 4$ from the directrix.
> $x = \frac{1}{4}y^2$: $\frac{1}{4a} = 1$, focus $(1, 0)$ and directrix $x = -1$.

> [!PROP] Parabola with a vertical axis
> $y = ax^2 + bx + c$, with $a \ne 0$ and $\Delta = b^2 - 4ac$:
> - vertex $V = \left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right)$;
> - axis of symmetry $x = -\frac{b}{2a}$;
> - focus $F = \left(-\frac{b}{2a}, \frac{1 - \Delta}{4a}\right)$ and directrix $y = -\frac{1 + \Delta}{4a}$;
> - it crosses the $y$-axis at $(0, c)$ and the $x$-axis at the solutions of $ax^2 + bx + c = 0$: two points if $\Delta > 0$, only one (the vertex) if $\Delta = 0$, none if $\Delta < 0$.
>
> $a$ determines which way the parabola opens and how wide it is; $b$ and $c$ move the parabola.

For the $y$-coordinate of the vertex it is often easier to substitute $x_V$ into the equation. The focus lies on the axis, at distance $\frac{1}{4|a|}$ from the vertex, on the side towards which the parabola opens (“inside” the parabola); the directrix is perpendicular to the axis and lies at the same distance from the vertex, on the opposite side.

> [!ESEMPIO] All the elements of $y = x^2 - 4x + 3$
> $a = 1$, $b = -4$, $c = 3$, $\Delta = 16 - 12 = 4$.
> - Vertex: $x_V = -\frac{-4}{2} = 2$, $y_V = 4 - 8 + 3 = -1$, so $V = (2, -1)$ (with the formula: $-\frac{4}{4} = -1$).
> - Axis $x = 2$; concave up.
> - Focus $\left(2, \frac{1 - 4}{4}\right) = \left(2, -\frac{3}{4}\right)$; directrix $y = -\frac{1 + 4}{4} = -\frac{5}{4}$.
> - $x$-axis: $x^2 - 4x + 3 = 0$ for $x = 1$ and $x = 3$. $y$-axis: $(0, 3)$.

```grafico
titolo: $y = x^2 - 4x + 3$ with vertex $V$, focus $F$, axis $x = 2$ and directrix $y = -\frac{5}{4}$
x: -1 5
y: -2 4
f: x^2 - 4x + 3 | $y = x^2 - 4x + 3$ | e
verticale: 2 | tratteggio | grigio
orizzontale: -5/4 | rosso | tratteggio | $f$
punto: 2 -1 | $V$ | se
punto: 2 -3/4 | rosso | $F$ | ne
punto: 1 0 | no
punto: 3 0 | ne
punto: 0 3 | e
```

> [!ESEMPIO] Concave down
> $y = -2x^2 + 4x$: $x_V = -\frac{4}{-4} = 1$, $y_V = -2 + 4 = 2$, vertex $(1, 2)$. Since $a = -2 < 0$ the focus lies below the vertex, at distance $\frac{1}{8}$: $F = \left(1, \frac{15}{8}\right)$; the directrix is $y = \frac{17}{8}$. Zeros: $-2x(x - 2) = 0$, that is $x = 0$ and $x = 2$.

> [!METODO] Finding a parabola from three conditions
> To find $a$, $b$, $c$ you need three conditions: passing through a point gives one, the vertex gives two.
> - Vertex $(1, -3)$ and passing through $(3, 5)$: use the form $y = a(x - x_V)^2 + y_V$, here $y = a(x - 1)^2 - 3$. With $(3, 5)$: $5 = 4a - 3$, so $a = 2$ and $y = 2(x - 1)^2 - 3 = 2x^2 - 4x - 1$.
> - Passing through three points: substitute the three points into $y = ax^2 + bx + c$ and solve the linear system.

> [!NOTA] Parabola with a horizontal axis
> $x = ay^2 + by + c$ has the horizontal axis $y = -\frac{b}{2a}$ and opens to the right if $a > 0$. For the vertex first compute $y_V = -\frac{b}{2a}$, then $x_V$ by substituting. For example $x = y^2 - 2y - 3$ has $y_V = 1$, $x_V = 1 - 2 - 3 = -4$, vertex $(-4, 1)$; it crosses the $y$-axis where $y^2 - 2y - 3 = 0$, that is at $(0, 3)$ and $(0, -1)$.

Line and parabola are studied like line and circle: you put them into a system and look at the $\Delta$ of the second-degree equation you get. For example $y = x^2$ and $y = 2x - 1$ give $x^2 - 2x + 1 = 0$, with $\Delta = 0$: the line is tangent at the point $(1, 1)$. Watch out: a line parallel to the axis, such as $x = 1$, meets the parabola at only one point but is not tangent.

### Application: using the parabola to solve inequalities

Solving $ax^2 + bx + c > 0$ means finding the values of $x$ where the parabola $y = ax^2 + bx + c$ lies **above** the $x$-axis; for $< 0$, those where it lies **below**. The solutions of the associated equation $ax^2 + bx + c = 0$ are the $x$-coordinates of the points where the parabola meets the $x$-axis, that is the solutions of the system of $y = ax^2 + bx + c$ and $y = 0$.

> [!METODO] Quadratic inequality using the parabola
> 1. Bring everything to the left-hand side: $ax^2 + bx + c > 0$ (or $<$, $\ge$, $\le$).
> 2. Solve the associated equation: you find the zeros $x_1$ and $x_2$, only one if $\Delta = 0$, none if $\Delta < 0$.
> 3. Sketch the parabola by hand: only the concavity (the sign of $a$) and the points on the $x$-axis matter.
> 4. Read off the values of $x$ where the graph lies above the axis (for $> 0$) or below it (for $< 0$); if there is an equals sign, include the zeros.

Summary for $a > 0$. If $a < 0$, first multiply both sides by $-1$, reversing the direction of the inequality (for example $-x^2 + 9 > 0$ becomes $x^2 - 9 < 0$), then use the table.

| | $\Delta > 0$, zeros $x_1 < x_2$ | $\Delta = 0$, zero $x_1$ | $\Delta < 0$ |
|---|---|---|---|
| $ax^2 + bx + c > 0$ | $x < x_1$ or $x > x_2$ | every $x \ne x_1$ | every real $x$ |
| $ax^2 + bx + c < 0$ | $x_1 < x < x_2$ | no $x$ | no $x$ |
| $ax^2 + bx + c \ge 0$ | $x \le x_1$ or $x \ge x_2$ | every real $x$ | every real $x$ |
| $ax^2 + bx + c \le 0$ | $x_1 \le x \le x_2$ | only $x = x_1$ | no $x$ |

> [!ESEMPIO] Four inequalities
> - $x^2 - x - 6 < 0$: zeros $-2$ and $3$, parabola opening upwards, below the axis between the zeros: $-2 < x < 3$.
> - $2x^2 - 3x \ge 0$: $x(2x - 3) = 0$ for $x = 0$ and $x = \frac{3}{2}$; above the axis outside the zeros: $x \le 0$ or $x \ge \frac{3}{2}$.
> - $x^2 + 2x + 5 > 0$: $\Delta = 4 - 20 < 0$, the parabola lies entirely above the axis: true for every real $x$.
> - $-x^2 + 4x - 4 \ge 0$: this is $-(x - 2)^2 \ge 0$. The parabola, opening downwards, touches the axis only at $x = 2$: the only solution is $x = 2$.

```grafico
titolo: $x^2 - x - 6 < 0$ where the parabola lies below the $x$-axis, that is between $-2$ and $3$
x: -4 5
y: -7 6
proporzioni: libere
f: x^2 - x - 6 | $y = x^2 - x - 6$ | e
area: x^2 - x - 6 | 0 | -2 3 | rosso
punto: -2 0 | vuoto | $-2$ | no
punto: 3 0 | vuoto | $3$ | ne
```

```retta
titolo: Solutions of $2x^2 - 3x \ge 0$: $x \le 0$ or $x \ge \frac{3}{2}$
da: -2 3
int: (-inf, 0]
int: [3/2, +inf)
tacca: 3/2 | $\frac{3}{2}$
```

> [!TRAPPOLA] “Or”, not “and”
> For $x^2 - x - 6 > 0$ the solutions are $x < -2$ **or** $x > 3$: the union $(-\infty, -2) \cup (3, +\infty)$. Writing “$x < -2$ and $x > 3$” means looking for a number that is less than $-2$ and at the same time greater than $3$: there is none. Also pay attention to the endpoints: with $<$ and $>$ they are excluded (round bracket), with $\le$ and $\ge$ they are included (square bracket).

### The ellipse

> [!DEF] Ellipse
> Given two points $F$ and $F'$, the **foci**, the **ellipse** is the locus of the points $P$ for which the sum of the distances from the foci is constant: $d(P, F) + d(P, F') = 2a$, with $2a > d(F, F')$.

> [!PROP] Standard equation of the ellipse
> With the foci $F = (c, 0)$ and $F' = (-c, 0)$ on the $x$-axis and the centre at the origin:
> $$
> \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad b^2 = a^2 - c^2 \quad (a > b)
> $$
> - **vertices** $A = (a, 0)$, $A' = (-a, 0)$, $B = (0, b)$, $B' = (0, -b)$; **centre** $O$;
> - symmetric with respect to both axes and to the origin; contained in the rectangle $-a \le x \le a$, $-b \le y \le b$;
> - **eccentricity** $e = \frac{c}{a}$, with $0 \le e < 1$: the closer it is to $0$, the “rounder” the ellipse. If $a = b$ then $c = 0$ and the ellipse is a circle.
>
> If in the equation $b > a$, the foci lie on the $y$-axis: $(0, \pm c)$ with $c^2 = b^2 - a^2$, and the eccentricity is $\frac{c}{b}$ (always the ratio between $c$ and the semi-major axis).

In practice: the foci lie on the axis of the **larger denominator** and $c^2$ is the difference between the larger denominator and the smaller one. The relation $a^2 = b^2 + c^2$ can be seen at the vertex $B = (0, b)$: it is at distance $a$ from each focus (the sum is $2a$), and $a$ is the hypotenuse of the right-angled triangle with legs $b$ and $c$.

> [!ESEMPIO] Reading an ellipse
> $\frac{x^2}{25} + \frac{y^2}{9} = 1$: $a = 5$, $b = 3$ (roots of the denominators), $c = \sqrt{25 - 9} = 4$. Vertices $(\pm 5, 0)$ and $(0, \pm 3)$, foci $(\pm 4, 0)$, eccentricity $\frac{4}{5}$. At the vertex $B = (0, 3)$ the distances from the foci are $5$ and $5$, with sum $10 = 2a$.
>
> $4x^2 + y^2 = 16$: divide by $16$, $\frac{x^2}{4} + \frac{y^2}{16} = 1$. The larger denominator is under $y^2$: $a = 2$, $b = 4$, $c = \sqrt{16 - 4} = 2\sqrt3$. Vertices $(\pm 2, 0)$ and $(0, \pm 4)$, foci $(0, \pm 2\sqrt3)$ on the $y$-axis.

```grafico
titolo: The ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$: from $B$ to the foci $5 + 5 = 10 = 2a$
x: -7 7
y: -5 5
ellisse: 0 0 5 3 | rosso
punto: 4 0 | $F$ | so
punto: -4 0 | $F'$ | se
punto: 0 3 | $B$ | n
punto: 5 0 | $A$ | e
punto: -5 0 | $A'$ | o
segmento: -4 0 0 3 | tratteggio | grigio | $5$ | no
segmento: 4 0 0 3 | tratteggio | grigio | $5$ | ne
```

> [!TRAPPOLA] First make the right-hand side equal to 1
> Semi-axes and foci can be read off only when the right-hand side is $1$: $9x^2 + 4y^2 = 36$ must first be divided by $36$. And $a$ is the **root** of the denominator: in $\frac{x^2}{16}$ the semi-axis is $4$, not $16$.

### The hyperbola

> [!DEF] Hyperbola
> Given the foci $F$ and $F'$, the **hyperbola** is the locus of the points $P$ for which the difference of the distances from the foci, in absolute value, is constant: $|d(P, F) - d(P, F')| = 2a$, with $2a < d(F, F')$.

> [!PROP] Standard equation of the hyperbola
> With the foci $F = (c, 0)$ and $F' = (-c, 0)$:
> $$
> \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad b^2 = c^2 - a^2 \quad (c^2 = a^2 + b^2)
> $$
> - **vertices** $A = (a, 0)$ and $A' = (-a, 0)$, where the hyperbola is tangent to the lines $x = \pm a$; no point on the $y$-axis and no point with $-a < x < a$, so the curve is made up of two **branches**;
> - symmetric with respect to both axes and to the origin;
> - **asymptotes** $y = \pm\frac{b}{a}x$: lines through the origin that the branches get closer and closer to without ever touching them; they are the diagonals of the rectangle with vertices $(\pm a, \pm b)$;
> - eccentricity $e = \frac{c}{a} > 1$.
>
> The equation $\frac{x^2}{a^2} - \frac{y^2}{b^2} = -1$ is a hyperbola with vertices $(0, \pm b)$ and foci $(0, \pm c)$ on the $y$-axis; the asymptotes are still $y = \pm\frac{b}{a}x$ and again $c^2 = a^2 + b^2$.

A trick for the asymptotes: replace the right-hand side with $0$. From $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 0$ you get $y^2 = \frac{b^2}{a^2}x^2$, that is $y = \pm\frac{b}{a}x$. The asymptotes split the lines through the origin into two families: for the hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, those with slope $m$ such that $|m| < \frac{b}{a}$ cut it at two points, the others (asymptotes included) do not meet it.

> [!ESEMPIO] Reading a hyperbola
> $\frac{x^2}{9} - \frac{y^2}{16} = 1$: $a = 3$, $b = 4$, $c = \sqrt{9 + 16} = 5$. Vertices $(\pm 3, 0)$, foci $(\pm 5, 0)$, asymptotes $y = \pm\frac{4}{3}x$, eccentricity $\frac{5}{3}$.
>
> $4x^2 - 9y^2 = -36$: divide by $36$, $\frac{x^2}{9} - \frac{y^2}{4} = -1$. With the $-1$ the vertices lie on the $y$-axis: $(0, \pm 2)$; $c = \sqrt{9 + 4} = \sqrt{13}$, foci $(0, \pm\sqrt{13})$; asymptotes $y = \pm\frac{2}{3}x$.

```grafico
titolo: The hyperbola $\frac{x^2}{9} - \frac{y^2}{16} = 1$ with the asymptotes $y = \pm\frac{4}{3}x$
x: -8 8
y: -7 7
fy: 3sqrt(1 + y^2/16) | rosso
fy: -3sqrt(1 + y^2/16) | rosso
f: 4x/3 | tratteggio | grigio
f: -4x/3 | tratteggio | grigio
poligono: -3 -4 3 -4 3 4 -3 4 | tratteggio | grigio
punto: 3 0 | $A$ | se
punto: -3 0 | $A'$ | so
punto: 5 0 | $F$ | s
punto: -5 0 | $F'$ | s
```

### Rectangular hyperbola

> [!PROP] Rectangular hyperbola
> If $a = b$ the hyperbola is called **rectangular** (*iperbole equilatera*): $x^2 - y^2 = a^2$. The asymptotes are the bisectors $y = x$ and $y = -x$, perpendicular to each other; the foci are $(\pm a\sqrt2, 0)$ and the eccentricity is $\sqrt2$.
> The equation $x^2 - y^2 = 0$, that is $(x - y)(x + y) = 0$, represents the two bisectors: it is a degenerate hyperbola.

> [!PROP] Rectangular hyperbola referred to its asymptotes
> If the two asymptotes are taken as the Cartesian axes, the rectangular hyperbola has equation
> $$
> xy = k \qquad (k \ne 0)
> $$
> The asymptotes are the $x$- and $y$-axes. If $k > 0$ the branches lie in quadrants I and III and the vertices are on the bisector $y = x$, at $(\sqrt{k}, \sqrt{k})$ and $(-\sqrt{k}, -\sqrt{k})$; the foci lie on the same bisector, at $(\sqrt{2k}, \sqrt{2k})$ and $(-\sqrt{2k}, -\sqrt{2k})$; if $k < 0$ the branches lie in quadrants II and IV and the vertices are on the bisector $y = -x$. It is the graph of $y = \frac{k}{x}$, inverse proportionality.

> [!ESEMPIO] The hyperbola $xy = 4$
> It passes through $(1, 4)$, $(2, 2)$, $(4, 1)$ and through their symmetric points with respect to the origin, $(-1, -4)$, $(-2, -2)$, $(-4, -1)$. The vertices are $(2, 2)$ and $(-2, -2)$: they are at distance $2\sqrt2$ from the origin, which is the semi-axis $a$ (indeed $k = \frac{a^2}{2} = \frac{8}{2} = 4$). The foci are $(2\sqrt2, 2\sqrt2)$ and $(-2\sqrt2, -2\sqrt2)$: they are at distance $4 = a\sqrt2$ from the origin, as in the rectangular hyperbola.

```grafico
titolo: Rectangular hyperbolas referred to their asymptotes: $xy = 4$ and $xy = -2$
x: -6 6
y: -5 5
f: 4/x | rosso | $xy = 4$ | so
f: -2/x | tratteggio | $xy = -2$ | no
f: x | grigio | sottile
punto: 2 2 | rosso | $V$ | se
punto: -2 -2 | rosso | $V'$ | no
```

### Recognising a conic

| Equation | Conic |
|---|---|
| $x^2 + y^2 + ax + by + c = 0$ | circle, if $a^2 + b^2 - 4c > 0$ |
| $y = ax^2 + bx + c$ | parabola with a vertical axis |
| $x = ay^2 + by + c$ | parabola with a horizontal axis |
| $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ | ellipse (circle if $a = b$) |
| $\frac{x^2}{a^2} - \frac{y^2}{b^2} = \pm 1$ | hyperbola |
| $x^2 - y^2 = a^2$ or $xy = k$ | rectangular hyperbola |

An equation of the type $Ax^2 + By^2 = C$ with $C > 0$ is a circle if $A = B > 0$, an ellipse if $A$ and $B$ are positive and different, a hyperbola if $A$ and $B$ have opposite signs.

> [!ESEMPIO] Three similar equations, three different conics
> - $25x^2 + 25y^2 = 100$: divide by $25$, $x^2 + y^2 = 4$, circle with centre $O$ and radius $2$.
> - $25x^2 + 4y^2 = 100$: divide by $100$, $\frac{x^2}{4} + \frac{y^2}{25} = 1$, ellipse with foci on the $y$-axis and $c = \sqrt{25 - 4} = \sqrt{21}$.
> - $25x^2 - 4y^2 = 100$: divide by $100$, $\frac{x^2}{4} - \frac{y^2}{25} = 1$, hyperbola with vertices $(\pm 2, 0)$ and asymptotes $y = \pm\frac{5}{2}x$.

> [!TEST] Conics in the test questions
> The most natural tasks are: recognise the conic from an equation, give the centre and radius of a circle, the vertex of a parabola, the foci or asymptotes of an ellipse or hyperbola, say whether a point lies on the curve, decide whether a line is tangent. For the point: substitute. For tangency: centre-to-line distance equal to the radius (circle) or $\Delta = 0$ in the system (parabola). Before reading off $a$ and $b$ check that the right-hand side is $1$, and remember: ellipse $c^2 = a^2 - b^2$ (subtract), hyperbola $c^2 = a^2 + b^2$ (add).

## Exercises

::: esercizio base Distance and midpoint
Given $A = (-1, 3)$ and $B = (5, -5)$, compute the distance $AB$ and the midpoint $M$. In which quadrant does $M$ lie?
::: soluzione
Differences: $x_B - x_A = 5 - (-1) = 6$ and $y_B - y_A = -5 - 3 = -8$.
$$
d(A, B) = \sqrt{6^2 + (-8)^2} = \sqrt{36 + 64} = \sqrt{100} = 10
$$
Midpoint: $M = \left(\frac{-1 + 5}{2}, \frac{3 + (-5)}{2}\right) = (2, -1)$. It has a positive $x$-coordinate and a negative $y$-coordinate: it lies in quadrant IV.
:::

::: esercizio base Line through two points
Write the equation of the line through $A = (2, -1)$ and $B = (4, 3)$, in slope-intercept form and in general form. Find where it crosses the axes and decide whether $P = (3, 1)$ and $Q = (1, -2)$ belong to it.
::: soluzione
$m = \frac{3 - (-1)}{4 - 2} = \frac{4}{2} = 2$. Line through $A$: $y + 1 = 2(x - 2)$, that is $y = 2x - 5$; in general form $2x - y - 5 = 0$. Check with $B$: $2 \cdot 4 - 5 = 3$.

$y$-axis ($x = 0$): $y = -5$, point $(0, -5)$. $x$-axis ($y = 0$): $2x - 5 = 0$, $x = \frac{5}{2}$, point $\left(\frac{5}{2}, 0\right)$.

$P$: $2 \cdot 3 - 5 = 1$, it belongs to the line. $Q$: $2 \cdot 1 - 5 = -3 \ne -2$, it does not belong to it.
:::

::: esercizio base Centre and radius
Find the centre and radius of the circle $x^2 + y^2 + 6x - 2y - 6 = 0$. Does it pass through the origin?
::: soluzione
$a = 6$, $b = -2$, $c = -6$. Centre $\left(-\frac{6}{2}, -\frac{-2}{2}\right) = (-3, 1)$. Radius $r = \sqrt{9 + 1 - (-6)} = \sqrt{16} = 4$.

It does not pass through the origin: substituting $(0, 0)$ leaves $-6 \ne 0$. A circle passes through the origin only if the constant term is $0$.
:::

::: esercizio base The elements of a parabola
For $y = x^2 + 2x - 8$ find the vertex, axis, focus, directrix and intersections with the axes.
::: soluzione
$a = 1$, $b = 2$, $c = -8$, $\Delta = 4 + 32 = 36$.

Vertex: $x_V = -\frac{2}{2} = -1$, $y_V = 1 - 2 - 8 = -9$, so $V = (-1, -9)$. Axis $x = -1$. Concave up ($a > 0$).

Focus: $\left(-1, \frac{1 - 36}{4}\right) = \left(-1, -\frac{35}{4}\right)$, that is $\frac{1}{4}$ above the vertex. Directrix: $y = -\frac{1 + 36}{4} = -\frac{37}{4}$, $\frac{1}{4}$ below the vertex.

$x$-axis: $x^2 + 2x - 8 = (x + 4)(x - 2) = 0$, points $(-4, 0)$ and $(2, 0)$. $y$-axis: $(0, -8)$.
:::

::: esercizio base Inequalities with the parabola
Solve: a) $x^2 - 5x + 4 \le 0$; b) $-x^2 + 9 > 0$; c) $x^2 - 6x + 9 > 0$; d) $x^2 + x + 1 < 0$.
::: soluzione
- a) Zeros $1$ and $4$; parabola opening upwards, below the axis (or on it) between the zeros: $1 \le x \le 4$, that is $[1, 4]$.
- b) Zeros $-3$ and $3$; $a = -1 < 0$, parabola opening downwards, above the axis between the zeros: $-3 < x < 3$.
- c) $x^2 - 6x + 9 = (x - 3)^2$: the parabola touches the axis only at $x = 3$ and lies above it everywhere else. Solutions: every $x \ne 3$.
- d) $\Delta = 1 - 4 = -3 < 0$ and $a > 0$: the parabola lies entirely above the axis and is never negative. No solution.

```retta
titolo: Solutions of a) $x^2 - 5x + 4 \le 0$
da: -1 6
int: [1, 4]
```
:::

::: esercizio medio An equidistant point
Find the point $P$ on the $y$-axis that is at the same distance from $A = (2, 1)$ and from $B = (4, 3)$.
::: soluzione
A point on the $y$-axis has the form $P = (0, y)$. Impose $d(P, A)^2 = d(P, B)^2$, so that the roots disappear:
$$
(0 - 2)^2 + (y - 1)^2 = (0 - 4)^2 + (y - 3)^2
$$
$4 + y^2 - 2y + 1 = 16 + y^2 - 6y + 9$. The $y^2$ terms cancel: $-2y + 5 = -6y + 25$, that is $4y = 20$, $y = 5$.

$P = (0, 5)$. Check: $d(P, A) = \sqrt{4 + 16} = \sqrt{20}$ and $d(P, B) = \sqrt{16 + 4} = \sqrt{20}$.
:::

::: esercizio medio Parallel, perpendicular and distance
Given the line $r: 2x + 3y - 6 = 0$ and the point $P = (-1, 2)$, write the line through $P$ parallel to $r$ and the line through $P$ perpendicular to $r$; compute the distance of $P$ from $r$.
::: soluzione
$m_r = -\frac{2}{3}$.

Parallel: $y - 2 = -\frac{2}{3}(x + 1)$; multiplying by $3$: $3y - 6 = -2x - 2$, that is $2x + 3y - 4 = 0$. It has the same $a$ and $b$ as $r$: only the constant term changes.

Perpendicular: slope $\frac{3}{2}$; $y - 2 = \frac{3}{2}(x + 1)$, that is $2y - 4 = 3x + 3$, or $3x - 2y + 7 = 0$. Check: $3 \cdot (-1) - 2 \cdot 2 + 7 = 0$.

Distance: $d = \frac{|2 \cdot (-1) + 3 \cdot 2 - 6|}{\sqrt{4 + 9}} = \frac{|-2|}{\sqrt{13}} = \frac{2}{\sqrt{13}} = \frac{2\sqrt{13}}{13}$.
:::

::: esercizio medio Circle tangent to a line
Write the equation of the circle with centre $C = (2, 3)$ tangent to the line $3x + 4y + 2 = 0$.
::: soluzione
Tangent means that the radius equals the distance of the centre from the line:
$$
r = \frac{|3 \cdot 2 + 4 \cdot 3 + 2|}{\sqrt{9 + 16}} = \frac{20}{5} = 4
$$
Equation: $(x - 2)^2 + (y - 3)^2 = 16$, that is $x^2 + y^2 - 4x - 6y + 4 + 9 - 16 = 0$, or $x^2 + y^2 - 4x - 6y - 3 = 0$.
:::

::: esercizio medio Centre at the vertex of a parabola
Write the equation of the circle whose centre is the vertex of the parabola $x = y^2 - 2y - 3$ and which passes through the origin.
::: soluzione
The parabola has a horizontal axis: $y_V = -\frac{-2}{2} = 1$ and $x_V = 1 - 2 - 3 = -4$, vertex $(-4, 1)$.

The radius is the distance of the centre from the origin: $r = \sqrt{16 + 1} = \sqrt{17}$.

$(x + 4)^2 + (y - 1)^2 = 17$, that is $x^2 + y^2 + 8x - 2y + 16 + 1 - 17 = 0$, or $x^2 + y^2 + 8x - 2y = 0$. The constant term is $0$: the circle really does pass through the origin.
:::

::: esercizio medio Ellipse and hyperbola
Find the vertices, foci and eccentricity of the ellipse $16x^2 + 25y^2 = 400$; then the vertices, foci and asymptotes of the hyperbola $9x^2 - 16y^2 = 144$.
::: soluzione
Ellipse: divide by $400$, $\frac{x^2}{25} + \frac{y^2}{16} = 1$. $a = 5$, $b = 4$, $c = \sqrt{25 - 16} = 3$. Vertices $(\pm 5, 0)$ and $(0, \pm 4)$; foci $(\pm 3, 0)$; eccentricity $\frac{3}{5}$.

Hyperbola: divide by $144$, $\frac{x^2}{16} - \frac{y^2}{9} = 1$. $a = 4$, $b = 3$, $c = \sqrt{16 + 9} = 5$. Vertices $(\pm 4, 0)$; foci $(\pm 5, 0)$; asymptotes $y = \pm\frac{3}{4}x$.
:::

::: esercizio test A line with a parameter
Consider the lines $(k - 1)x + (k + 1)y - 4 = 0$, with $k$ real. Find $k$ so that the line: a) passes through $(1, 3)$; b) is parallel to the $x$-axis; c) is parallel to the bisector of quadrants I and III; d) is perpendicular to $y = \frac{1}{3}x$; e) is vertical; f) forms an acute angle with the $x$-axis. Finally, find the point through which all of them pass.
::: soluzione
For $k \ne -1$ the slope is $m = -\frac{k - 1}{k + 1}$.

- a) $(k - 1) \cdot 1 + (k + 1) \cdot 3 - 4 = 0$, that is $4k - 2 = 0$, $k = \frac{1}{2}$.
- b) Horizontal: the coefficient of $x$ must be zero, $k = 1$. Line $2y - 4 = 0$, that is $y = 2$.
- c) $m = 1$: $-(k - 1) = k + 1$, that is $-k + 1 = k + 1$, $k = 0$. Line $-x + y - 4 = 0$, that is $y = x + 4$.
- d) $m = -3$: $-(k - 1) = -3(k + 1)$, that is $-k + 1 = -3k - 3$, $2k = -4$, $k = -2$.
- e) Vertical: the coefficient of $y$ must be zero, $k = -1$. Line $-2x - 4 = 0$, that is $x = -2$.
- f) An acute angle means $m > 0$: $-\frac{k - 1}{k + 1} > 0$, that is $\frac{k - 1}{k + 1} < 0$. Numerator and denominator must have opposite signs: $-1 < k < 1$.

Common point: collect the terms in $k$, $k(x + y) + (-x + y - 4) = 0$. You need $x + y = 0$ and $-x + y - 4 = 0$; adding them, $2y - 4 = 0$, so $y = 2$ and $x = -2$. All the lines pass through $(-2, 2)$: indeed the lines found in b) and e) are $y = 2$ and $x = -2$.
:::

::: esercizio test Tangent at a point
Check that $P = (-2, 6)$ lies on the circle $x^2 + y^2 - 2x - 4y - 20 = 0$ and write the tangent line at $P$.
::: soluzione
Substitute: $4 + 36 + 4 - 24 - 20 = 0$, so $P$ lies on the circle. Centre $C = (1, 2)$, radius $\sqrt{1 + 4 + 20} = 5$.

Slope of the radius $CP$: $\frac{6 - 2}{-2 - 1} = -\frac{4}{3}$. The tangent is perpendicular to the radius: slope $\frac{3}{4}$.

$y - 6 = \frac{3}{4}(x + 2)$; multiplying by $4$: $4y - 24 = 3x + 6$, that is $3x - 4y + 30 = 0$.

Check: the distance of $C$ from the line is $\frac{|3 - 8 + 30|}{5} = \frac{25}{5} = 5$, exactly the radius.
:::

::: esercizio test Tangents with a parameter
For which values of $q$ is the line $y = x + q$ tangent to the circle $x^2 + y^2 = 8$? For which values is it secant?
::: soluzione
Centre $O$, radius $\sqrt8 = 2\sqrt2$. The line in general form is $x - y + q = 0$ and its distance from the centre is $d = \frac{|q|}{\sqrt2}$.

Tangent: $\frac{|q|}{\sqrt2} = 2\sqrt2$, that is $|q| = 4$: $q = 4$ or $q = -4$.

Secant: $d < r$, that is $|q| < 4$: $-4 < q < 4$. For $q < -4$ or $q > 4$ the line does not intersect the circle.

Check with $q = 4$: $x^2 + (x + 4)^2 = 8$ gives $2x^2 + 8x + 8 = 0$, that is $(x + 2)^2 = 0$: only one common point, $(-2, 2)$.
:::

::: esercizio test Parabola through three points
Find the parabola $y = ax^2 + bx + c$ that passes through $(0, 1)$, $(1, 0)$ and $(2, 3)$, and its vertex.
::: soluzione
From $(0, 1)$: $c = 1$. From $(1, 0)$: $a + b + 1 = 0$, that is $a + b = -1$. From $(2, 3)$: $4a + 2b + 1 = 3$, that is $2a + b = 1$.

Subtracting the second from the third: $a = 2$, so $b = -3$. The parabola is $y = 2x^2 - 3x + 1$.

Vertex: $x_V = \frac{3}{4}$, $y_V = 2 \cdot \frac{9}{16} - \frac{9}{4} + 1 = \frac{9}{8} - \frac{18}{8} + \frac{8}{8} = -\frac{1}{8}$. So $V = \left(\frac{3}{4}, -\frac{1}{8}\right)$.
:::

::: esercizio test Parabola above a line
For which $x$ does the parabola $y = x^2 - 2x - 3$ lie above the line $y = x + 1$? At which points do they meet?
::: soluzione
“Above” means $x^2 - 2x - 3 > x + 1$, that is $x^2 - 3x - 4 > 0$. Zeros: $(x - 4)(x + 1) = 0$, $x = -1$ and $x = 4$. The associated parabola opens upwards: it is positive outside the zeros, so $x < -1$ or $x > 4$.

Meeting points: for $x = -1$ you have $y = 0$, for $x = 4$ you have $y = 5$: $(-1, 0)$ and $(4, 5)$.

```grafico
titolo: $y = x^2 - 2x - 3$ lies above $y = x + 1$ for $x < -1$ or $x > 4$
x: -3 6
y: -5 8
proporzioni: libere
f: x^2 - 2x - 3 | rosso | $y = x^2 - 2x - 3$ | o
f: x + 1
testo: -2.1 -2.2 | $y = x + 1$ | bianco
punto: -1 0 | $(-1, 0)$ | no
punto: 4 5 | $(4, 5)$ | e
```
:::

::: esercizio test Recognise the conic
What curve is it? a) $x^2 + y^2 - 2x + 4y + 6 = 0$; b) $x = -y^2 + 2y$; c) $4x^2 + 9y^2 = 36$; d) $xy = -3$; e) $x^2 - 4y^2 = 4$.
::: soluzione
- a) It has the form of a circle, but $\frac{a^2}{4} + \frac{b^2}{4} - c = 1 + 4 - 6 = -1 < 0$: no real point.
- b) Parabola with a horizontal axis, opening to the left ($a = -1$): $y_V = -\frac{2}{-2} = 1$, $x_V = -1 + 2 = 1$, vertex $(1, 1)$.
- c) Divide by $36$: $\frac{x^2}{9} + \frac{y^2}{4} = 1$, ellipse with $a = 3$, $b = 2$, $c = \sqrt{9 - 4} = \sqrt5$.
- d) Rectangular hyperbola referred to its asymptotes with $k = -3 < 0$: branches in quadrants II and IV.
- e) Divide by $4$: $\frac{x^2}{4} - y^2 = 1$, hyperbola with $a = 2$, $b = 1$, $c = \sqrt5$, asymptotes $y = \pm\frac{1}{2}x$.
:::

## Self-check quiz

```quiz
D: What is the distance between $A = (1, -3)$ and $B = (6, 9)$?
N: 13
= The differences are $6 - 1 = 5$ and $9 - (-3) = 12$: $d = \sqrt{25 + 144} = \sqrt{169} = 13$ (Pythagorean triple $5$, $12$, $13$).

D: The slope of the line $4x - 2y + 7 = 0$ is
+ $2$
- $-2$
- $\frac{1}{2}$
- $\frac{7}{2}$
= $m = -\frac{a}{b} = -\frac{4}{-2} = 2$; isolating $y$ you get $y = 2x + \frac{7}{2}$. $-2$ forgets the minus sign in the formula, $\frac{7}{2}$ is the $y$-intercept.

D: The line through $(1, 3)$ perpendicular to $y = 2x - 5$ is
+ $y = -\frac{1}{2}x + \frac{7}{2}$
- $y = 2x + 1$
- $y = \frac{1}{2}x + \frac{5}{2}$
- $y = -2x + 5$
= They all pass through $(1, 3)$: the slope decides. The perpendicular to $m = 2$ has $m' = -\frac{1}{2}$, the negative reciprocal. $y = 2x + 1$ is the parallel line; $\frac{1}{2}$ is only the reciprocal, $-2$ only the opposite.

D: How far is the point $P = (3, -2)$ from the line $5x + 12y - 4 = 0$?
N: 1
= $d = \frac{|15 - 24 - 4|}{\sqrt{25 + 144}} = \frac{|-13|}{13} = 1$.

D: True or false: the lines $2x - 3y + 1 = 0$ and $6x + 4y - 5 = 0$ are perpendicular.
+ True
- False
= $aa' + bb' = 2 \cdot 6 + (-3) \cdot 4 = 0$. With the slopes: $\frac{2}{3} \cdot \left(-\frac{3}{2}\right) = -1$.

D: True or false: $x^2 + y^2 - 2x + 4y + 7 = 0$ is the equation of a circle.
- True
+ False
= The centre would be $(1, -2)$, but $r^2 = 1 + 4 - 7 = -2 < 0$: no real point satisfies the equation.

D: The centre and radius of the circle $x^2 + y^2 + 8x - 6y = 0$ are
+ $C = (-4, 3)$ and $r = 5$
- $C = (4, -3)$ and $r = 5$
- $C = (-4, 3)$ and $r = 25$
- $C = (-8, 6)$ and $r = 10$
= Centre $\left(-\frac{8}{2}, -\frac{-6}{2}\right) = (-4, 3)$, radius $\sqrt{16 + 9 - 0} = 5$. The typical mistakes: signs of the centre not changed, $r^2$ mistaken for $r$, coefficients not divided by $2$.

D: Which points belong to the parabola $y = x^2 - 3x + 2$?
+ $(0, 2)$
+ $(2, 0)$
+ $(-1, 6)$
- $(3, 0)$
- $(1, 1)$
= Substitute the $x$-coordinate: for $x = 0$ you get $2$, for $x = 2$ you get $4 - 6 + 2 = 0$, for $x = -1$ you get $1 + 3 + 2 = 6$. On the other hand, for $x = 3$ you get $2$ and for $x = 1$ you get $0$.

D: What is the $y$-coordinate of the vertex of the parabola $y = 2x^2 - 8x + 3$?
N: -5
= $x_V = -\frac{-8}{4} = 2$ and $y_V = 2 \cdot 4 - 16 + 3 = -5$. With the formula: $\Delta = 64 - 24 = 40$ and $-\frac{40}{8} = -5$.

D: The solutions of $x^2 - 4x < 0$ are
+ $0 < x < 4$
- $x < 0$ or $x > 4$
- $x < 4$
- $-2 < x < 2$
= $x(x - 4) = 0$ for $x = 0$ and $x = 4$; the parabola opens upwards and lies below the axis between the zeros. “$x < 0$ or $x > 4$” solves the inequality with $>$; “$x < 4$” comes from dividing by $x$ without knowing its sign.

D: The foci of the ellipse $\frac{x^2}{100} + \frac{y^2}{36} = 1$ are
+ $(\pm 8, 0)$
- $(\pm 10, 0)$
- $(0, \pm 8)$
- $(\pm 2\sqrt{34}, 0)$
= The larger denominator is under $x^2$, so the foci lie on the $x$-axis, and $c = \sqrt{100 - 36} = 8$. $(\pm 10, 0)$ are the vertices; $2\sqrt{34} = \sqrt{136}$ is obtained by adding the denominators, as you do for the hyperbola.

D: The asymptotes of the hyperbola $\frac{x^2}{16} - \frac{y^2}{4} = 1$ are
+ $y = \pm\frac{1}{2}x$
- $y = \pm 2x$
- $y = \pm\frac{1}{4}x$
- $y = \pm 4x$
= $a = 4$ and $b = 2$, so $y = \pm\frac{b}{a}x = \pm\frac{1}{2}x$. $\pm 2x$ inverts the ratio; $\pm\frac{1}{4}x$ uses the denominators without taking their roots.

D: Which statements about the line $3x + 4y - 12 = 0$ are true?
+ It crosses the $x$-axis at $(4, 0)$.
+ It crosses the $y$-axis at $(0, 3)$.
+ It is parallel to the line $6x + 8y + 1 = 0$.
- Its slope is $\frac{3}{4}$.
- It passes through the origin.
= With $y = 0$ you find $x = 4$, with $x = 0$ you find $y = 3$. $m = -\frac{3}{4}$ (not $\frac{3}{4}$), the same as that of $6x + 8y + 1 = 0$: they are parallel. The constant term is not $0$, so it does not pass through the origin.

D: True or false: the line $y = 2x + 1$ is tangent to the parabola $y = x^2 + 2$.
+ True
- False
= Putting them into a system: $x^2 + 2 = 2x + 1$, that is $x^2 - 2x + 1 = 0$, with $\Delta = 0$. There is only one common point, $(1, 3)$.

D: For which value of $k$ is the line $(k - 1)x + 2y - 3 = 0$ perpendicular to the line $y = \frac{1}{2}x$?
N: 5
= The slope $m = -\frac{k - 1}{2}$ must be the negative reciprocal of $\frac{1}{2}$, that is $-2$: $\frac{k - 1}{2} = 2$, so $k = 5$.

D: In which quadrants does the hyperbola $xy = -6$ lie?
+ In II and IV
- In I and III
- Only in IV
- In all four
= $xy = -6 < 0$ means that $x$ and $y$ have opposite signs: quadrant II ($x < 0$, $y > 0$) and quadrant IV ($x > 0$, $y < 0$).
```

## Checklist

```checklist
I can compute the distance between two points and the coordinates of the midpoint
I can recognise the lines parallel to the axes, the bisectors and the lines through the origin
I can go from the general form to the slope-intercept form and read off $m$ and $q$
I can write the line through a point with a given slope and the line through two points
I can find the common point of two lines by solving a system
I can recognise parallel and perpendicular lines and write their equations
I can compute the distance from a point to a line
I can recognise a pencil of lines and find its centre
I can find the centre and radius of a circle and tell whether it is real
I can decide whether a line is non-intersecting, tangent or secant to a circle and write the tangent at a point
I can use a pencil of circles and find the radical axis
I can find the vertex, axis, focus and directrix of a parabola
I can solve a quadratic inequality with the graph of the parabola
I can recognise ellipses and hyperbolas and find their vertices, foci and asymptotes, also for the hyperbola $xy = k$
```
