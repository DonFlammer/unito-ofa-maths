---
modulo: 8
titolo: "Trigonometry"
breve: "Angles in degrees and radians, sine, cosine and tangent on the unit circle, formulas, trigonometric equations and inequalities, triangles."
ore: 9
unita:
  - "Introduction: unit circle and angles"
  - "8.1 Trigonometric functions"
  - "8.2 Trigonometric equations and inequalities"
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/moduli/08-trigonometria.md
---

## In brief

- $180^\circ$ corresponds to $\pi$ radians: to go from degrees to radians multiply by $\frac{\pi}{180}$, to go back multiply by $\frac{180}{\pi}$.
- On the unit circle (centre at the origin, radius 1) the point of the angle $x$ is $P = (\cos x, \sin x)$; the tangent is $\tan x = \frac{\sin x}{\cos x}$.
- Pythagorean identity: $\sin^2 x + \cos^2 x = 1$. The sign of sine, cosine and tangent depends on the quadrant.
- The values for $0$, $\frac{\pi}{6}$, $\frac{\pi}{4}$, $\frac{\pi}{3}$, $\frac{\pi}{2}$ must be learnt by heart; the other angles are brought back to the first quadrant with related angles (*archi associati*).
- The addition, subtraction, double-angle and half-angle formulas give the exact values of angles such as $15^\circ$ or $105^\circ$.
- Sine and cosine have period $2\pi$ and values in $[-1, 1]$; the tangent has period $\pi$ and does not exist at $\frac{\pi}{2} + k\pi$, with $k$ an integer.
- $\sin x = c$ and $\cos x = c$ have solutions only if $-1 \leq c \leq 1$, and then they have infinitely many: they are written with $+2k\pi$ ($+k\pi$ for the tangent). Inequalities are solved by reading arcs on the circle.
- In a right-angled triangle a leg (cathetus) is the hypotenuse times the sine of the opposite angle; in every triangle the law of cosines and the law of sines hold.

## Introduction: unit circle and angles

### The unit circle

> [!DEF] Unit circle
> The **unit circle** (*circonferenza goniometrica*) is the circle in the Cartesian plane with centre at the origin $O$ and radius 1. Its equation is $x^2 + y^2 = 1$.

Angles are drawn with their vertex at the origin. The first side is always the positive half of the $x$-axis, that is, it goes towards the point $A = (1, 0)$; the second side cuts the circle at a point $P$. Each angle corresponds to exactly one point $P$ and one arc $AP$. By convention:

- rotating **anticlockwise** gives **positive** angles;
- rotating **clockwise** gives **negative** angles.

Angles are often denoted by Greek letters: $\alpha$ (alpha), $\beta$ (beta), $\gamma$ (gamma), $\theta$ (theta). When studying functions the usual $x$ is also used. The axes divide the plane into four **quadrants**, numbered anticlockwise: quadrant I goes from $0^\circ$ to $90^\circ$, II from $90^\circ$ to $180^\circ$, III from $180^\circ$ to $270^\circ$, IV from $270^\circ$ to $360^\circ$.

```grafico
titolo: The unit circle and the angle $\alpha = 120^\circ$, in quadrant II
x: -1.6 1.6
y: -1.4 1.4
passo-x: 1
passo-y: 1
cerchio: 0 0 1
segmento: 0 0 cos(2pi/3) sin(2pi/3) | rosso
arco: 0 0 0.3 0 2pi/3 | rosso | $\alpha$
punto: 1 0 | $A$ | no
punto: cos(2pi/3) sin(2pi/3) | rosso | $P$ | no
testo: 1.15 1.15 | "I"
testo: -1.15 1.15 | "II"
testo: -1.15 -1.15 | "III"
testo: 1.15 -1.15 | "IV"
```

### Degrees and radians

> [!DEF] Degree and radian
> - The **degree** ($1^\circ$) is the angle corresponding to $\frac{1}{360}$ of the full angle.
> - The **radian** is the central angle that, on any circle, subtends an arc as long as the radius.

A circle of radius $r$ has circumference $2\pi r$, that is, the radius fits into it $2\pi$ times: so the full angle measures $2\pi$ radians. The number $\pi$ (“pi”) is approximately $3.14$. So $360^\circ$ corresponds to $2\pi$ radians and $180^\circ$ to $\pi$ radians. When an angle is written without a unit of measurement, it is in radians.

> [!PROP] Converting between degrees and radians
> If $\alpha$ is the measure in degrees and $x$ the measure in radians, the proportion $\alpha : 360 = x : 2\pi$ holds, from which
> $$
> x = \alpha \cdot \frac{\pi}{180} \qquad\qquad \alpha = x \cdot \frac{180}{\pi}
> $$

| Degrees | Radians | Degrees | Radians |
|---|---|---|---|
| $0^\circ$ | $0$ | $180^\circ$ | $\pi$ |
| $30^\circ$ | $\frac{\pi}{6}$ | $210^\circ$ | $\frac{7\pi}{6}$ |
| $45^\circ$ | $\frac{\pi}{4}$ | $225^\circ$ | $\frac{5\pi}{4}$ |
| $60^\circ$ | $\frac{\pi}{3}$ | $240^\circ$ | $\frac{4\pi}{3}$ |
| $90^\circ$ | $\frac{\pi}{2}$ | $270^\circ$ | $\frac{3\pi}{2}$ |
| $120^\circ$ | $\frac{2\pi}{3}$ | $300^\circ$ | $\frac{5\pi}{3}$ |
| $135^\circ$ | $\frac{3\pi}{4}$ | $315^\circ$ | $\frac{7\pi}{4}$ |
| $150^\circ$ | $\frac{5\pi}{6}$ | $330^\circ$ | $\frac{11\pi}{6}$ |

A trick: multiples of $30^\circ$ are written with $\pi$ over 6 (or over 3, or over 2), multiples of $45^\circ$ with $\pi$ over 4. For example $210^\circ = 7 \cdot 30^\circ$, so $\frac{7\pi}{6}$. The full angle, $360^\circ$, is $2\pi$.

> [!ESEMPIO] Conversions
> - $150^\circ = 150 \cdot \frac{\pi}{180} = \frac{5\pi}{6}$.
> - $40^\circ = 40 \cdot \frac{\pi}{180} = \frac{2\pi}{9}$.
> - $\frac{7\pi}{4} = \frac{7\pi}{4} \cdot \frac{180}{\pi} = 7 \cdot 45 = 315^\circ$.
> - $\frac{2\pi}{5}$ radians correspond to $\frac{2 \cdot 180^\circ}{5} = 72^\circ$: put $180^\circ$ in place of $\pi$.
> - $1$ radian $= \frac{180^\circ}{\pi} \approx 57.3^\circ$ (the symbol $\approx$ reads “approximately”).

> [!NOTA] Length of an arc
> On a circle of radius $r$, a central angle of $x$ radians subtends an arc of length $\ell = r \cdot x$. For example, with radius 3 and angle $\frac{\pi}{3}$ the arc is $\pi$ long. On the unit circle ($r = 1$) the measure in radians is exactly the length of the arc.

### Angles larger than a full turn and negative angles

Adding or subtracting a full turn ($2\pi$, that is $360^\circ$) brings you back to the same point $P$. So the angles $x$ and $x + 2k\pi$, where $k$ is any integer, correspond to the same point. You write $k \in \Z$, where $\in$ reads “belongs to” and $\Z$ is the set of integers $0, \pm 1, \pm 2, \ldots$ (the symbol $\pm$ reads “plus or minus”).

> [!ESEMPIO] Bringing an angle back into the first turn
> - $\frac{17\pi}{3}$: subtract two turns, that is $4\pi = \frac{12\pi}{3}$. What remains is $\frac{5\pi}{3}$, which is in quadrant IV.
> - $-\frac{5\pi}{6}$: add one turn, $-\frac{5\pi}{6} + 2\pi = \frac{7\pi}{6}$, which is in quadrant III.
> - $390^\circ = 360^\circ + 30^\circ$: same point as $30^\circ$.

> [!TRAPPOLA] Radians and numbers
> - $\pi$ radians correspond to $180^\circ$, but $\pi$ as a number is approximately $3.14$: do not write $\pi = 180$.
> - The angle $-\frac{\pi}{4}$ is traced clockwise and ends in quadrant IV, at the same point as $\frac{7\pi}{4}$, not $\frac{3\pi}{4}$.

> [!TEST] Angles in the test questions
> - Conversions are done mentally starting from $180^\circ = \pi$: $\frac{\pi}{12}$ corresponds to $\frac{180^\circ}{12} = 15^\circ$, so $\frac{5\pi}{12}$ radians are $5 \cdot 15^\circ = 75^\circ$.
> - To work out which quadrant an angle falls in, remove the whole turns and compare with $\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$ written with the same denominator. Example: $\frac{11\pi}{4} - 2\pi = \frac{3\pi}{4}$, which lies between $\frac{2\pi}{4}$ and $\frac{4\pi}{4}$: quadrant II.

## 8.1 Trigonometric functions

### Sine and cosine

> [!DEF] Sine and cosine
> Let $P$ be the point of the unit circle that corresponds to the angle $x$.
> - The **cosine** of $x$, written $\cos x$, is the $x$-coordinate (abscissa) of $P$.
> - The **sine** of $x$, written $\sin x$, is the $y$-coordinate (ordinate) of $P$.
>
> So $P = (\cos x, \sin x)$.

If $H$ is the projection of $P$ onto the $x$-axis, the segment $OH$ measures $|\cos x|$ and the segment $HP$ measures $|\sin x|$. The sign tells you on which side $P$ lies: the cosine is positive to the right of the $y$-axis, the sine is positive above the $x$-axis.

```grafico
titolo: $\cos x$ is the $x$-coordinate of $P$, $\sin x$ is its $y$-coordinate
x: -1.4 1.4
y: -1.2 1.2
passo-x: 1
passo-y: 1
cerchio: 0 0 1
segmento: 0 0 cos(pi/3) sin(pi/3) | grigio
segmento: 0 0 cos(pi/3) 0 | rosso | spesso | $\cos x$ | s
segmento: cos(pi/3) 0 cos(pi/3) sin(pi/3) | spesso | $\sin x$ | e
arco: 0 0 0.25 0 pi/3 | $x$
punto: cos(pi/3) sin(pi/3) | $P$ | ne
punto: cos(pi/3) 0 | $H$ | se
punto: 1 0 | $A$ | no
```

> [!PROP] Bounded values and angles on the axes
> Since $P$ lies on a circle of radius 1, sine and cosine are always between $-1$ and $1$:
> $$
> -1 \leq \sin x \leq 1 \qquad\qquad -1 \leq \cos x \leq 1
> $$
>
> | $x$ | $0$ | $\frac{\pi}{2}$ | $\pi$ | $\frac{3\pi}{2}$ | $2\pi$ |
> |---|---|---|---|---|---|
> | point $P$ | $(1, 0)$ | $(0, 1)$ | $(-1, 0)$ | $(0, -1)$ | $(1, 0)$ |
> | $\cos x$ | $1$ | $0$ | $-1$ | $0$ | $1$ |
> | $\sin x$ | $0$ | $1$ | $0$ | $-1$ | $0$ |

The names come from Latin: “sine” from *sinus* (bay, fold), “cosine” from *complementi sinus*, the sine of the complementary angle. Indeed, as we will see, $\cos x = \sin\left(\frac{\pi}{2} - x\right)$.

### Tangent and cotangent

> [!DEF] Tangent and cotangent
> The **tangent** of $x$ is
> $$
> \tan x = \frac{\sin x}{\cos x}
> $$
> and exists only if $\cos x \neq 0$, that is for $x \neq \frac{\pi}{2} + k\pi$ with $k \in \Z$.
>
> The **cotangent** of $x$ is
> $$
> \operatorname{cotan} x = \frac{\cos x}{\sin x}
> $$
> and exists only if $\sin x \neq 0$, that is for $x \neq k\pi$. Where both exist, $\operatorname{cotan} x = \dfrac{1}{\tan x}$. The cotangent is also written $\cot x$.

**Geometric meaning.** Draw the line tangent to the circle at the point $A$ (the name comes from the Latin *tangere*, “to touch”): it is the vertical line $x = 1$. The line $OP$ meets it at a point $R$, and the $y$-coordinate of $R$ is $\tan x$. If $P$ lies to the left of the $y$-axis (quadrants II and III), to reach $R$ you must extend $OP$ on the other side, beyond the origin. The reason: the triangles $OHP$ and $OAR$ are similar, so $\frac{AR}{OA} = \frac{HP}{OH}$; since $OA = 1$, you get $AR = \frac{\sin x}{\cos x}$ (up to the sign). In the same way the horizontal line $y = 1$ is tangent to the circle at the point $B = (0, 1)$: the line $OP$ meets it at a point whose $x$-coordinate is $\operatorname{cotan} x$.

```grafico
titolo: The tangent of $x$ is the $y$-coordinate of the point $R$, on the line $x = 1$
x: -1.4 2
y: -1.2 2.1
passo-x: 1
passo-y: 1
cerchio: 0 0 1
verticale: 1 | grigio
segmento: 0 0 1 tan(pi/3) | grigio
segmento: 1 0 1 tan(pi/3) | rosso | spesso | $\tan x$ | e
arco: 0 0 0.25 0 pi/3 | $x$
punto: cos(pi/3) sin(pi/3) | $P$ | no
punto: 1 tan(pi/3) | rosso | $R$ | e
punto: 1 0 | $A$ | ne
```

**Link with straight lines.** The tangent is the slope of the line $OP$. In general, a line that forms an angle $\alpha$ with the positive half of the $x$-axis has slope $m = \tan\alpha$. For example $y = \sqrt{3}\,x$ forms an angle of $60^\circ$ with the $x$-axis, because $\tan 60^\circ = \sqrt3$; the bisector $y = x$ forms an angle of $45^\circ$.

> [!PROP] Signs in the quadrants
> | Quadrant | I | II | III | IV |
> |---|---|---|---|---|
> | $\sin x$ | $+$ | $+$ | $-$ | $-$ |
> | $\cos x$ | $+$ | $-$ | $-$ | $+$ |
> | $\tan x$ and $\operatorname{cotan} x$ | $+$ | $-$ | $+$ | $-$ |

### The Pythagorean identity

> [!PROP] Pythagorean identity (*relazione fondamentale della trigonometria*)
> For every angle $x$:
> $$
> \sin^2 x + \cos^2 x = 1
> $$
> The reason: $P = (\cos x, \sin x)$ lies on the circle $x^2 + y^2 = 1$. It is also Pythagoras' theorem in the right-angled triangle $OHP$, which has hypotenuse $OP = 1$.

The notation $\sin^2 x$ means $(\sin x)^2$, the square of the sine; it is not $\sin(x^2)$. From the Pythagorean identity you get $\cos x = \pm\sqrt{1 - \sin^2 x}$ and $\sin x = \pm\sqrt{1 - \cos^2 x}$: the right sign is chosen by looking at the quadrant.

> [!METODO] From one function to the others
> 1. With $\sin^2 x + \cos^2 x = 1$ find the other function, up to the sign.
> 2. Choose the sign according to the quadrant in which $x$ falls.
> 3. Compute $\tan x = \dfrac{\sin x}{\cos x}$ and $\operatorname{cotan} x = \dfrac{\cos x}{\sin x}$.

> [!ESEMPIO] Known sine in the second quadrant
> $\sin x = \frac{5}{13}$ with $\frac{\pi}{2} < x < \pi$.
>
> $\cos^2 x = 1 - \frac{25}{169} = \frac{144}{169}$, so $\cos x = \pm\frac{12}{13}$. In quadrant II the cosine is negative: $\cos x = -\frac{12}{13}$.
>
> Then $\tan x = \dfrac{5/13}{-12/13} = -\dfrac{5}{12}$ and $\operatorname{cotan} x = -\dfrac{12}{5}$.

> [!ESEMPIO] Known cosine in the fourth quadrant
> $\cos x = \frac{8}{17}$ with $\frac{3\pi}{2} < x < 2\pi$. $\sin^2 x = 1 - \frac{64}{289} = \frac{225}{289}$; in quadrant IV the sine is negative, so $\sin x = -\frac{15}{17}$ and $\tan x = -\frac{15}{8}$.

> [!NOTA] If you know the tangent
> Dividing the Pythagorean identity by $\cos^2 x$ you get $1 + \tan^2 x = \dfrac{1}{\cos^2 x}$. For example, if $\tan x = 2$ and $x$ is in quadrant III: $\cos^2 x = \frac{1}{1 + 4} = \frac15$, so $\cos x = -\frac{1}{\sqrt5} = -\frac{\sqrt5}{5}$ (negative in quadrant III) and $\sin x = \tan x \cdot \cos x = -\frac{2\sqrt5}{5}$.

> [!TRAPPOLA] Mistakes with the Pythagorean identity
> - $\sin^2 x$ is $(\sin x)^2$, not $\sin(x^2)$.
> - The square root gives two signs: the quadrant decides which one to keep.
> - $\sin x + \cos x = 1$ is **not** the Pythagorean identity: it holds only for some angles. For $x = \frac{\pi}{4}$, for example, the sum equals $\sqrt2$.

### Special values

> [!PROP] Table of special values
> | Angle | $\sin$ | $\cos$ | $\tan$ | $\operatorname{cotan}$ |
> |---|---|---|---|---|
> | $0$ ($0^\circ$) | $0$ | $1$ | $0$ | does not exist |
> | $\frac{\pi}{6}$ ($30^\circ$) | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ | $\sqrt{3}$ |
> | $\frac{\pi}{4}$ ($45^\circ$) | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ | $1$ |
> | $\frac{\pi}{3}$ ($60^\circ$) | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ | $\frac{\sqrt{3}}{3}$ |
> | $\frac{\pi}{2}$ ($90^\circ$) | $1$ | $0$ | does not exist | $0$ |
> | $\pi$ ($180^\circ$) | $0$ | $-1$ | $0$ | does not exist |
> | $\frac{3\pi}{2}$ ($270^\circ$) | $-1$ | $0$ | does not exist | $0$ |

**Where they come from.** For $45^\circ$ the triangle $OHP$ is right-angled and isosceles, with hypotenuse 1: the legs are equal and, calling $\ell$ their length, by Pythagoras' theorem $2\ell^2 = 1$, so $\ell = \frac{1}{\sqrt2} = \frac{\sqrt2}{2}$. For $30^\circ$ and $60^\circ$ you use half of an equilateral triangle with side 1: it has sides $1$ and $\frac12$ and height $\sqrt{1 - \frac14} = \frac{\sqrt3}{2}$; the side $\frac12$ is opposite the $30^\circ$ angle. Finally $\tan\frac{\pi}{6} = \frac{1/2}{\sqrt3/2} = \frac{1}{\sqrt3} = \frac{\sqrt3}{3}$, rationalising the denominator.

**To remember them.** The sines of $0^\circ$, $30^\circ$, $45^\circ$, $60^\circ$, $90^\circ$ are $\frac{\sqrt0}{2}$, $\frac{\sqrt1}{2}$, $\frac{\sqrt2}{2}$, $\frac{\sqrt3}{2}$, $\frac{\sqrt4}{2}$; the cosines are the same numbers in reverse order.

```grafico
titolo: The points of the angles $\frac{\pi}{6}$, $\frac{\pi}{4}$ and $\frac{\pi}{3}$
x: -0.3 1.5
y: -0.3 1.3
passo-x: 0.5
passo-y: 0.5
cerchio: 0 0 1
segmento: 0 0 cos(pi/6) sin(pi/6) | grigio
segmento: 0 0 cos(pi/4) sin(pi/4) | grigio
segmento: 0 0 cos(pi/3) sin(pi/3) | grigio
punto: cos(pi/6) sin(pi/6) | $\left(\frac{\sqrt3}{2}, \frac12\right)$ | e
punto: cos(pi/4) sin(pi/4) | rosso | $\left(\frac{\sqrt2}{2}, \frac{\sqrt2}{2}\right)$ | ne
punto: cos(pi/3) sin(pi/3) | $\left(\frac12, \frac{\sqrt3}{2}\right)$ | no
```

### Related angles

To compute sine, cosine and tangent of any angle, you bring it back to an angle in the first quadrant, using the symmetries of the circle. The angles $x$, $\pi - x$, $\pi + x$ and $-x$ have symmetric points: only the signs of the coordinates change.

```grafico
titolo: The points of $x$, $\pi - x$, $\pi + x$ and $-x$ (here $x = \frac{\pi}{6}$)
x: -1.6 1.6
y: -1.3 1.3
passo-x: 1
passo-y: 1
cerchio: 0 0 1
segmento: cos(pi/6) sin(pi/6) -cos(pi/6) sin(pi/6) | grigio | tratteggio
segmento: cos(pi/6) -sin(pi/6) -cos(pi/6) -sin(pi/6) | grigio | tratteggio
segmento: cos(pi/6) sin(pi/6) cos(pi/6) -sin(pi/6) | grigio | tratteggio
punto: cos(pi/6) sin(pi/6) | rosso | $x$ | ne
punto: -cos(pi/6) sin(pi/6) | $\pi - x$ | no
punto: -cos(pi/6) -sin(pi/6) | $\pi + x$ | so
punto: cos(pi/6) -sin(pi/6) | $-x$ | se
```

> [!PROP] Related angle formulas
> | Angle | Symmetry of the point | $\sin$ | $\cos$ | $\tan$ |
> |---|---|---|---|---|
> | $-x$ (opposite) | about the $x$-axis | $-\sin x$ | $\cos x$ | $-\tan x$ |
> | $\pi - x$ (supplementary) | about the $y$-axis | $\sin x$ | $-\cos x$ | $-\tan x$ |
> | $\pi + x$ | about the origin | $-\sin x$ | $-\cos x$ | $\tan x$ |
> | $2\pi - x$ | about the $x$-axis | $-\sin x$ | $\cos x$ | $-\tan x$ |
> | $\frac{\pi}{2} - x$ (complementary) | about the line $y = x$ | $\cos x$ | $\sin x$ | $\operatorname{cotan} x$ |
>
> Moreover, by periodicity, $x + 2k\pi$ has the same values as $x$.

> [!METODO] Bringing an angle back to the first quadrant
> 1. Remove the whole turns (multiples of $2\pi$).
> 2. See which quadrant the angle falls in.
> 3. Find the acute reference angle: $\pi - x$ in quadrant II, $x - \pi$ in III, $2\pi - x$ in IV.
> 4. Take the value of the reference angle with the sign of the quadrant of the **original** angle.

> [!ESEMPIO] Angles reduced to the first quadrant
> - $\sin\frac{5\pi}{6} = \sin\left(\pi - \frac{\pi}{6}\right) = \sin\frac{\pi}{6} = \frac12$.
> - $\cos\frac{5\pi}{4} = \cos\left(\pi + \frac{\pi}{4}\right) = -\cos\frac{\pi}{4} = -\frac{\sqrt2}{2}$.
> - $\tan\frac{2\pi}{3} = \tan\left(\pi - \frac{\pi}{3}\right) = -\tan\frac{\pi}{3} = -\sqrt3$.
> - $\cos\frac{7\pi}{4} = \cos\left(2\pi - \frac{\pi}{4}\right) = \cos\frac{\pi}{4} = \frac{\sqrt2}{2}$.
> - $\sin\left(-\frac{\pi}{3}\right) = -\sin\frac{\pi}{3} = -\frac{\sqrt3}{2}$.
> - $\sin\frac{19\pi}{6}$: subtract one turn, $\frac{19\pi}{6} - 2\pi = \frac{7\pi}{6} = \pi + \frac{\pi}{6}$, so $\sin\frac{19\pi}{6} = -\sin\frac{\pi}{6} = -\frac12$.
> - In degrees: $\cos 300^\circ = \cos(360^\circ - 60^\circ) = \cos 60^\circ = \frac12$.

> [!TRAPPOLA] The sign comes from the original angle
> In $\cos\frac{5\pi}{4}$ the reference angle $\frac{\pi}{4}$ is in quadrant I, where the cosine is positive, but $\frac{5\pi}{4}$ is in quadrant III: the result is negative, $-\frac{\sqrt2}{2}$.

### Addition, subtraction, double-angle and half-angle formulas

> [!PROP] Trigonometric formulas
> **Addition and subtraction**
> $$
> \sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta
> $$
> $$
> \cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta
> $$
> In the cosine the sign is reversed: the symbol $\mp$ means “minus when there is a plus on the left, plus when there is a minus on the left”.
>
> **Double angle**
> $$
> \sin 2\alpha = 2\sin\alpha\cos\alpha \qquad \cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 1 - 2\sin^2\alpha = 2\cos^2\alpha - 1
> $$
>
> **Half angle**
> $$
> \sin^2\frac{\alpha}{2} = \frac{1 - \cos\alpha}{2} \qquad \cos^2\frac{\alpha}{2} = \frac{1 + \cos\alpha}{2}
> $$
> The sign of $\sin\frac{\alpha}{2}$ and of $\cos\frac{\alpha}{2}$ depends on the quadrant in which $\frac{\alpha}{2}$ falls.

The double-angle formulas are the addition formulas with $\beta = \alpha$; the other two forms of $\cos 2\alpha$ are obtained from the Pythagorean identity. The half-angle formulas are derived from $\cos 2\beta = 1 - 2\sin^2\beta$ and from $\cos 2\beta = 2\cos^2\beta - 1$ by setting $\beta = \frac{\alpha}{2}$.

> [!ESEMPIO] Addition and subtraction
> $\sin 15^\circ = \sin(45^\circ - 30^\circ) = \sin 45^\circ\cos 30^\circ - \cos 45^\circ\sin 30^\circ$:
> $$
> \sin 15^\circ = \frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} - \frac{\sqrt2}{2}\cdot\frac12 = \frac{\sqrt6 - \sqrt2}{4}
> $$
> $\cos 105^\circ = \cos(60^\circ + 45^\circ) = \cos 60^\circ\cos 45^\circ - \sin 60^\circ\sin 45^\circ$:
> $$
> \cos 105^\circ = \frac12\cdot\frac{\sqrt2}{2} - \frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2} = \frac{\sqrt2 - \sqrt6}{4}
> $$
> The result is negative, as it must be: $105^\circ$ is in quadrant II.
>
> For the tangent, the ratio of sine and cosine is enough. With the same calculation, but with a plus, $\cos 15^\circ = \cos(45^\circ - 30^\circ) = \frac{\sqrt6 + \sqrt2}{4}$. So:
> $$
> \tan 15^\circ = \frac{\sqrt6 - \sqrt2}{\sqrt6 + \sqrt2} = \frac{\left(\sqrt6 - \sqrt2\right)^2}{6 - 2} = \frac{8 - 4\sqrt3}{4} = 2 - \sqrt3
> $$
> In the second step numerator and denominator are multiplied by $\sqrt6 - \sqrt2$, to remove the roots from the denominator.

> [!ESEMPIO] Double angle
> $\sin x = \frac13$ with $0 < x < \frac{\pi}{2}$. First the cosine: $\cos x = \sqrt{1 - \frac19} = \sqrt{\frac89} = \frac{2\sqrt2}{3}$, positive in quadrant I. Then
> $$
> \sin 2x = 2 \cdot \frac13 \cdot \frac{2\sqrt2}{3} = \frac{4\sqrt2}{9} \qquad \cos 2x = 1 - 2\sin^2 x = 1 - \frac29 = \frac79
> $$

> [!ESEMPIO] Half angle
> $\sin\frac{\pi}{12}$, with $\frac{\pi}{12} = \frac12 \cdot \frac{\pi}{6}$:
> $$
> \sin^2\frac{\pi}{12} = \frac{1 - \cos\frac{\pi}{6}}{2} = \frac{1 - \frac{\sqrt3}{2}}{2} = \frac{2 - \sqrt3}{4}
> $$
> The angle $\frac{\pi}{12}$ is in quadrant I, so $\sin\frac{\pi}{12} = \dfrac{\sqrt{2 - \sqrt3}}{2}$.

> [!NOTA] The same number in two forms
> $\frac{\pi}{12}$ is $15^\circ$: the value just found must coincide with $\frac{\sqrt6 - \sqrt2}{4}$. Indeed $\left(\frac{\sqrt6 - \sqrt2}{4}\right)^2 = \frac{6 - 2\sqrt{12} + 2}{16} = \frac{8 - 4\sqrt3}{16} = \frac{2 - \sqrt3}{4}$. The same value can appear among the options in different forms: if in doubt, check that the two numbers have the same sign and then compare their squares.

> [!TRAPPOLA] The formulas are not “linear”
> - $\sin(\alpha + \beta) \neq \sin\alpha + \sin\beta$: with $\alpha = \beta = \frac{\pi}{2}$ you get $\sin\pi = 0$, while $\sin\frac{\pi}{2} + \sin\frac{\pi}{2} = 2$.
> - $\sin 2x \neq 2\sin x$: for $x = \frac{\pi}{2}$ the first equals $\sin\pi = 0$, the second 2.
> - In $\cos(\alpha + \beta)$ there is a minus: $\cos\alpha\cos\beta - \sin\alpha\sin\beta$.

### Graphs and features

Now the angle $x$ (in radians) ranges over all real numbers and we look at $y = \sin x$, $y = \cos x$, $y = \tan x$ as functions, with the tools of module 6. Their main feature is that they are **periodic**: they repeat the same values at regular intervals, and that is why they describe oscillating phenomena well.

> [!PROP] Features of the trigonometric functions
> | Function | Domain | Range | Period | Symmetry | Zeros |
> |---|---|---|---|---|---|
> | $y = \sin x$ | $\R$ | $[-1, 1]$ | $2\pi$ | odd | $x = k\pi$ |
> | $y = \cos x$ | $\R$ | $[-1, 1]$ | $2\pi$ | even | $x = \frac{\pi}{2} + k\pi$ |
> | $y = \tan x$ | $x \neq \frac{\pi}{2} + k\pi$ | $\R$ | $\pi$ | odd | $x = k\pi$ |
> | $y = \operatorname{cotan} x$ | $x \neq k\pi$ | $\R$ | $\pi$ | odd | $x = \frac{\pi}{2} + k\pi$ |
>
> Sine and cosine are continuous and **bounded**. Tangent and cotangent are not bounded: near the points excluded from the domain the graph has vertical asymptotes. The tangent is increasing on every interval $\left(-\frac{\pi}{2} + k\pi, \frac{\pi}{2} + k\pi\right)$, the cotangent is decreasing on every interval $(k\pi, \pi + k\pi)$.

The period of the sine is $2\pi$ because after a full turn you come back to the same point. The tangent has period $\pi$: the points of $x$ and of $x + \pi$ are symmetric with respect to the origin, sine and cosine both change sign and their ratio stays the same.

```grafico
titolo: $y = \sin x$ and $y = \cos x$ (in red): the same wave, shifted by $\frac{\pi}{2}$
x: -2pi 2pi
y: -1.6 1.6
passo-x: pi/2
proporzioni: libere
f: sin(x)
f: cos(x) | rosso
testo: -3pi/2 1.3 | $y = \sin x$ | bianco
testo: pi -1.3 | $y = \cos x$ | bianco
```

```grafico
titolo: $y = \tan x$: period $\pi$, vertical asymptotes at $x = \frac{\pi}{2} + k\pi$
x: -3pi/2 3pi/2
y: -4 4
passo-x: pi/2
f: tan(x)
verticale: -pi/2 | grigio | tratteggio
verticale: pi/2 | grigio | tratteggio
```

The cotangent has the same period $\pi$, but its asymptotes are at the points $x = k\pi$, where the sine is zero, and on each branch it goes down instead of up.

```grafico
titolo: $y = \operatorname{cotan} x$: period $\pi$, vertical asymptotes at $x = k\pi$
x: -3pi/2 3pi/2
y: -4 4
passo-x: pi/2
f: cos(x)/sin(x) | rosso
verticale: -pi | grigio | tratteggio
verticale: pi | grigio | tratteggio
```

> [!PROP] Amplitude and period
> For $y = A\sin(\omega x)$ and $y = A\cos(\omega x)$, with $A$ and $\omega$ (“omega”) non-zero numbers:
> - the range is $[-|A|, |A|]$: the number $|A|$ is called the **amplitude**;
> - the **period** is $T = \dfrac{2\pi}{|\omega|}$.
>
> For $y = \tan(\omega x)$ the period is $\dfrac{\pi}{|\omega|}$. Adding a constant, as in $y = d + \sin x$, shifts the graph vertically: the range becomes $[d - 1, d + 1]$.

> [!ESEMPIO] Periods and ranges
> - $y = 3\sin(2x)$: range $[-3, 3]$, period $\frac{2\pi}{2} = \pi$.
> - $y = \cos(3x)$: range $[-1, 1]$, period $\frac{2\pi}{3}$.
> - $y = 2 + \cos x$: range $[1, 3]$, period $2\pi$.
> - $y = \sin\frac{x}{3}$: period $\frac{2\pi}{1/3} = 6\pi$.
> - $y = \tan(2x)$: period $\frac{\pi}{2}$.

```grafico
titolo: $y = \sin x$ (in grey) and $y = 3\sin(2x)$ (in red): amplitude 3, period $\pi$
x: -pi 2pi
y: -3.5 3.5
passo-x: pi/2
proporzioni: libere
f: sin(x) | grigio
f: 3sin(2x) | rosso
```

> [!NOTA] Waves and oscillations
> The sine and cosine functions are used to describe everything that repeats over time: the oscillation of a pendulum or a spring, sound waves, radio waves, light. A real sound wave is a sum of many terms with sines and cosines. For sound, the amplitude is linked to the intensity, the period (or the frequency, the number of oscillations per second) to the pitch of the note, and the way the various terms combine to the timbre.

> [!TEST] Trigonometric functions in the test questions
> - **Values** (one option out of four or numeric answer): first decide the sign using the quadrant, then the absolute value using the reference angle. The most frequent mistakes are the wrong sign and swapping $\frac12$ and $\frac{\sqrt3}{2}$: check exactly these two points before choosing.
> - **True or false identities**: try convenient angles ($0$, $\frac{\pi}{2}$, $\frac{\pi}{4}$). If the equality does not hold for one angle, it is false. Careful: if it holds for one angle, that does not yet mean it holds for all of them.
> - **Period**: for $\sin(\omega x)$ and $\cos(\omega x)$ it is $\frac{2\pi}{|\omega|}$; the coefficient in front changes only the amplitude.
> - **Draw the circle**: a sketch with the point $P$ settles most doubts about signs.

## 8.2 Trigonometric equations and inequalities

### Elementary equations

In a **trigonometric equation** the unknown $x$, which represents an angle, appears inside sine, cosine or tangent. They are **transcendental** equations, like those of module 7. Because of periodicity, if a trigonometric equation has one solution it has infinitely many: they are all written together using $k \in \Z$.

> [!PROP] The three elementary equations
> - $\sin x = c$: if $c < -1$ or $c > 1$ there are no solutions. Otherwise, if $\alpha$ is a solution, all the solutions are
> $$
> x = \alpha + 2k\pi \quad \text{or} \quad x = \pi - \alpha + 2k\pi
> $$
> - $\cos x = c$: if $c < -1$ or $c > 1$ there are no solutions. Otherwise, if $\alpha$ is a solution,
> $$
> x = \pm\alpha + 2k\pi
> $$
> - $\tan x = c$: there are solutions for every real number $c$, and if $\alpha$ is a solution
> $$
> x = \alpha + k\pi
> $$

Why: on the circle there are two points with $y$-coordinate $c$, symmetric with respect to the $y$-axis (angles $\alpha$ and $\pi - \alpha$); there are two points with $x$-coordinate $c$, symmetric with respect to the $x$-axis (angles $\alpha$ and $-\alpha$); the tangent repeats after half a turn.

```grafico
titolo: $\sin x = \frac{\sqrt{3}}{2}$: there are two points with $y$-coordinate $\frac{\sqrt3}{2}$
x: -1.6 1.6
y: -1.3 1.3
passo-x: 1
passo-y: 1
cerchio: 0 0 1
orizzontale: sqrt(3)/2 | rosso | tratteggio
segmento: 0 0 cos(pi/3) sin(pi/3) | grigio
segmento: 0 0 cos(2pi/3) sin(2pi/3) | grigio
punto: cos(pi/3) sin(pi/3) | rosso | $\frac{\pi}{3}$ | ne
punto: cos(2pi/3) sin(2pi/3) | rosso | $\frac{2\pi}{3}$ | no
```

> [!PROP] Special cases
> | Equation | Solutions |
> |---|---|
> | $\sin x = 0$ | $x = k\pi$ |
> | $\sin x = 1$ | $x = \frac{\pi}{2} + 2k\pi$ |
> | $\sin x = -1$ | $x = \frac{3\pi}{2} + 2k\pi$ |
> | $\cos x = 0$ | $x = \frac{\pi}{2} + k\pi$ |
> | $\cos x = 1$ | $x = 2k\pi$ |
> | $\cos x = -1$ | $x = \pi + 2k\pi$ |
>
> In these cases the two families of solutions coincide or merge into a single one.

> [!ESEMPIO] Elementary equations
> - $\sin x = \frac{\sqrt3}{2}$: $\alpha = \frac{\pi}{3}$, and also $\pi - \frac{\pi}{3} = \frac{2\pi}{3}$. Solutions: $x = \frac{\pi}{3} + 2k\pi$ or $x = \frac{2\pi}{3} + 2k\pi$.
> - $2\cos x + 1 = 0$: $\cos x = -\frac12$, with $\alpha = \frac{2\pi}{3}$. Solutions: $x = \pm\frac{2\pi}{3} + 2k\pi$; in the first turn they are $\frac{2\pi}{3}$ and $\frac{4\pi}{3}$.
> - $\sin x = -\frac{\sqrt2}{2}$: $\alpha = -\frac{\pi}{4}$, and $\pi - \alpha = \pi + \frac{\pi}{4} = \frac{5\pi}{4}$. Solutions: $x = -\frac{\pi}{4} + 2k\pi$ or $x = \frac{5\pi}{4} + 2k\pi$; in the first turn $\frac{5\pi}{4}$ and $\frac{7\pi}{4}$.
> - $\tan x = -\sqrt3$: $\alpha = -\frac{\pi}{3}$, so $x = -\frac{\pi}{3} + k\pi$; in the first turn $\frac{2\pi}{3}$ and $\frac{5\pi}{3}$.
> - $\cos x = 2$: impossible, the cosine does not exceed 1.
> - $\sin 2x = \frac12$: the argument is $2x$. $2x = \frac{\pi}{6} + 2k\pi$ or $2x = \frac{5\pi}{6} + 2k\pi$; dividing everything by 2, $x = \frac{\pi}{12} + k\pi$ or $x = \frac{5\pi}{12} + k\pi$. In the first turn there are four solutions: $\frac{\pi}{12}$, $\frac{5\pi}{12}$, $\frac{13\pi}{12}$, $\frac{17\pi}{12}$.
> - $\cos\left(x - \frac{\pi}{4}\right) = 0$: $x - \frac{\pi}{4} = \frac{\pi}{2} + k\pi$, so $x = \frac{3\pi}{4} + k\pi$.

> [!TRAPPOLA] Mistakes in elementary equations
> - When the argument is $2x$ you must also divide the $2k\pi$ by 2, which becomes $k\pi$: if you forget it you lose half of the solutions.
> - For the sine the second family is $\pi - \alpha$, for the cosine it is $-\alpha$: do not mix them up.
> - Before looking for the angles, check that $c$ is between $-1$ and $1$.

### Equations with the same function on both sides

> [!PROP] When two angles have the same sine, cosine or tangent
> If $A$ and $B$ are expressions that contain $x$:
> - $\sin A = \sin B \iff A = B + 2k\pi$ or $A = \pi - B + 2k\pi$;
> - $\cos A = \cos B \iff A = B + 2k\pi$ or $A = -B + 2k\pi$;
> - $\tan A = \tan B \iff A = B + k\pi$, provided $\tan A$ and $\tan B$ exist.
>
> The symbol $\iff$ reads “if and only if”.

> [!ESEMPIO] Same sine, same cosine
> $\sin 3x = \sin x$:
> - $3x = x + 2k\pi$ gives $2x = 2k\pi$, that is $x = k\pi$;
> - $3x = \pi - x + 2k\pi$ gives $4x = \pi + 2k\pi$, that is $x = \frac{\pi}{4} + \frac{k\pi}{2}$.
>
> $\cos 3x = \cos x$:
> - $3x = x + 2k\pi$ gives $x = k\pi$;
> - $3x = -x + 2k\pi$ gives $x = \frac{k\pi}{2}$.
>
> The first family is contained in the second (just take $k$ even), so the solutions are $x = \frac{k\pi}{2}$.

> [!ESEMPIO] Sine equal to cosine
> $\sin 2x = \cos x$. Use $\cos x = \sin\left(\frac{\pi}{2} - x\right)$:
> - $2x = \frac{\pi}{2} - x + 2k\pi$ gives $x = \frac{\pi}{6} + \frac{2k\pi}{3}$;
> - $2x = \pi - \left(\frac{\pi}{2} - x\right) + 2k\pi$ gives $x = \frac{\pi}{2} + 2k\pi$.
>
> In the first turn: $\frac{\pi}{6}$, $\frac{5\pi}{6}$, $\frac{3\pi}{2}$ from the first family and $\frac{\pi}{2}$ from the second.

> [!NOTA] The same solutions written in different ways
> The equation $\sin 2x = \cos x$ can also be solved with the double-angle formula: $2\sin x\cos x - \cos x = 0$, that is $\cos x(2\sin x - 1) = 0$. You find $x = \frac{\pi}{2} + k\pi$ or $x = \frac{\pi}{6} + 2k\pi$ or $x = \frac{5\pi}{6} + 2k\pi$. It looks like a different result, but in the first turn it gives the same four angles. To compare two ways of writing the solutions (for example two options of a question), list the solutions between $0$ and $2\pi$.

> [!ESEMPIO] A homogeneous equation
> $\sqrt3\sin x = \cos x$. If $\cos x = 0$, we would have $\sin x = \pm 1$ and the equation would give $\pm\sqrt3 = 0$, which is false: so you can divide by $\cos x$. You get $\sqrt3\tan x = 1$, that is $\tan x = \frac{1}{\sqrt3} = \frac{\sqrt3}{3}$, and therefore $x = \frac{\pi}{6} + k\pi$.

### Equations that reduce to elementary ones

> [!METODO] Reducing to elementary equations
> 1. Bring everything to a single function, using the Pythagorean identity and the formulas.
> 2. Take out a common factor, or set $t = \sin x$ (or $t = \cos x$, $t = \tan x$) and solve the algebraic equation in $t$.
> 3. Discard the impossible values of $t$: for sine and cosine, those less than $-1$ or greater than $1$.
> 4. Solve the elementary equations that remain.

> [!ESEMPIO] Taking out a common factor
> $\sin 2x = \sin x$. With the double-angle formula: $2\sin x\cos x - \sin x = 0$, that is $\sin x(2\cos x - 1) = 0$. A product is zero when one of its factors is zero:
> - $\sin x = 0$ gives $x = k\pi$;
> - $\cos x = \frac12$ gives $x = \pm\frac{\pi}{3} + 2k\pi$.

> [!TRAPPOLA] Do not divide by a factor that can be zero
> In the previous example, if you divide by $\sin x$ you get only $2\cos x = 1$ and lose all the solutions $x = k\pi$. Take out the common factor, do not divide.

> [!ESEMPIO] Quadratic equation in the sine
> $2\sin^2 x - \sin x - 1 = 0$. With $t = \sin x$: $2t^2 - t - 1 = 0$, so $t = \frac{1 \pm 3}{4}$, that is $t = 1$ or $t = -\frac12$.
> - $\sin x = 1$ gives $x = \frac{\pi}{2} + 2k\pi$;
> - $\sin x = -\frac12$ gives $x = \frac{7\pi}{6} + 2k\pi$ or $x = \frac{11\pi}{6} + 2k\pi$.

> [!ESEMPIO] With the Pythagorean identity
> $2\cos^2 x - 3\sin x = 0$. Substitute $\cos^2 x = 1 - \sin^2 x$: $2 - 2\sin^2 x - 3\sin x = 0$, that is $2\sin^2 x + 3\sin x - 2 = 0$. With $t = \sin x$: $t = \frac{-3 \pm 5}{4}$, so $t = \frac12$ or $t = -2$. The value $-2$ is impossible for a sine. What remains is $\sin x = \frac12$: $x = \frac{\pi}{6} + 2k\pi$ or $x = \frac{5\pi}{6} + 2k\pi$.

> [!ESEMPIO] With the addition formulas
> $\cos\left(x - \frac{\pi}{3}\right) + \cos\left(x + \frac{\pi}{3}\right) = \frac12$. Expand the two cosines:
> $$
> \cos x\cos\frac{\pi}{3} + \sin x\sin\frac{\pi}{3} + \cos x\cos\frac{\pi}{3} - \sin x\sin\frac{\pi}{3} = 2\cos x \cdot \frac12 = \cos x
> $$
> The equation becomes $\cos x = \frac12$, so $x = \pm\frac{\pi}{3} + 2k\pi$.

> [!ESEMPIO] With the tangent squared
> $\tan^2 x = 3$ gives $\tan x = \sqrt3$ or $\tan x = -\sqrt3$, so $x = \pm\frac{\pi}{3} + k\pi$.

### Linear equations in sine and cosine

These are the equations of the form $a\sin x + b\cos x + c = 0$, with $a$, $b$, $c$ numbers.

- If $c = 0$ the equation is **homogeneous**: with $a \neq 0$, the values with $\cos x = 0$ are not solutions (there $\sin x = \pm 1$), so you can divide by $\cos x$ and you get $\tan x = -\frac{b}{a}$, as in the example $\sqrt3\sin x = \cos x$ seen above.
- In general, set $X = \cos x$ and $Y = \sin x$ and put the equation in a system with the Pythagorean identity:

$$
\begin{cases} aY + bX + c = 0 \\ X^2 + Y^2 = 1 \end{cases}
$$

It is the intersection between a line and the unit circle, as in module 5: in the picture the $x$-coordinate of a point is $X = \cos x$ and its $y$-coordinate is $Y = \sin x$. Each intersection point gives an angle.

- Alternatively, use the **parametric formulas** (the tangent half-angle substitution): setting $t = \tan\frac{x}{2}$,

$$
\sin x = \frac{2t}{1 + t^2} \qquad \cos x = \frac{1 - t^2}{1 + t^2}
$$

They hold only if $\tan\frac{x}{2}$ exists, that is for $x \neq \pi + 2k\pi$: that is why, before substituting, you must check separately whether $x = \pi$ is a solution.

> [!ESEMPIO] System method
> $\sqrt3\sin x + \cos x = 1$. With $X = \cos x$ and $Y = \sin x$:
> $$
> \begin{cases} \sqrt{3}\,Y + X = 1 \\ X^2 + Y^2 = 1 \end{cases}
> $$
> From the first, $X = 1 - \sqrt3\,Y$. Substitute into the second: $(1 - \sqrt3\,Y)^2 + Y^2 = 1$, that is $1 - 2\sqrt3\,Y + 3Y^2 + Y^2 = 1$, so $4Y^2 - 2\sqrt3\,Y = 0$ and $2Y(2Y - \sqrt3) = 0$.
> - $Y = 0$ gives $X = 1$: the point $A = (1, 0)$, that is $x = 2k\pi$.
> - $Y = \frac{\sqrt3}{2}$ gives $X = 1 - \frac32 = -\frac12$: the point $Q = \left(-\frac12, \frac{\sqrt3}{2}\right)$, that is $x = \frac{2\pi}{3} + 2k\pi$.
>
> Check with $x = \frac{2\pi}{3}$: $\sqrt3 \cdot \frac{\sqrt3}{2} - \frac12 = \frac32 - \frac12 = 1$.
>
> ```grafico
> titolo: The line $X + \sqrt{3}\,Y = 1$ cuts the circle at the points $A$ (angle $0$) and $Q$ (angle $\frac{2\pi}{3}$)
> x: -1.6 1.8
> y: -1.3 1.4
> passo-x: 1
> passo-y: 1
> cerchio: 0 0 1
> f: (1-x)/sqrt(3) | rosso
> punto: 1 0 | $A$ | ne
> punto: -1/2 sqrt(3)/2 | $Q$ | n
> ```

> [!ESEMPIO] Parametric formulas
> $\sin x + \cos x + 1 = 0$.
>
> **First step.** Check $x = \pi$: $\sin\pi + \cos\pi + 1 = 0 - 1 + 1 = 0$. It is a solution: $x = \pi + 2k\pi$.
>
> **Second step.** For $x \neq \pi + 2k\pi$ set $t = \tan\frac{x}{2}$:
> $$
> \frac{2t}{1 + t^2} + \frac{1 - t^2}{1 + t^2} + 1 = 0
> $$
> Multiply by $1 + t^2$, which is never zero: $2t + 1 - t^2 + 1 + t^2 = 0$, that is $2t + 2 = 0$ and $t = -1$.
>
> **Third step.** $\tan\frac{x}{2} = -1$ gives $\frac{x}{2} = -\frac{\pi}{4} + k\pi$, that is $x = -\frac{\pi}{2} + 2k\pi$.
>
> Solutions: $x = \pi + 2k\pi$ or $x = -\frac{\pi}{2} + 2k\pi$ (that is $\frac{3\pi}{2} + 2k\pi$). Without the check of the first step we would have lost $x = \pi$. With the system method you find the same points: the line $X + Y = -1$ cuts the circle at $(-1, 0)$ and $(0, -1)$.

### Elementary inequalities

> [!METODO] Inequalities with the circle
> 1. Solve the associated equation in the first turn (for example $\sin x = c$).
> 2. On the circle identify the good points: for $\sin x > c$ those **above** the horizontal line with $y$-coordinate $c$, for $\sin x < c$ those below; for $\cos x > c$ those **to the right** of the vertical line with $x$-coordinate $c$, for $\cos x < c$ those to the left; for the tangent use the tangent line at $A$ or the graph of $y = \tan x$.
> 3. Read the arcs anticlockwise, from $0$ to $2\pi$, and write the intervals. The angles found in step 1 are included only with $\geq$ or $\leq$. The endpoints $0$ and $2\pi$ are included when the inequality is true there, even with $>$ or $<$: for example $\cos x > \frac12$ holds at $x = 0$, so you write $0 \leq x < \frac{\pi}{3}$. The points where the function does not exist are never included.
> 4. If the inequality is to be solved on all of $\R$, add $2k\pi$ to the endpoints ($k\pi$ for the tangent).

> [!PROP] Edge cases
> - $\sin x > c$ with $c < -1$: true for every $x$. With $c \geq 1$: no solutions.
> - $\sin x \geq 1$: the sine never exceeds 1, so it is true only when $\sin x = 1$, that is for $x = \frac{\pi}{2} + 2k\pi$.
> - $\sin x > -1$: true for every $x$ except $x = \frac{3\pi}{2} + 2k\pi$.
> - $\cos x < 1$: true for every $x$ except $x = 2k\pi$. $\cos x \leq 1$: true for every $x$.
> - $\sin x < 2$: true for every $x$. $\cos x > \frac32$: no solutions.

> [!ESEMPIO] Sine greater than a number
> $\sin x > \frac12$ in $[0, 2\pi]$. The equation $\sin x = \frac12$ has solutions $\frac{\pi}{6}$ and $\frac{5\pi}{6}$. The points above the line $y = \frac12$ form the arc between these two angles:
> $$
> \frac{\pi}{6} < x < \frac{5\pi}{6}
> $$
> On all of $\R$: $\frac{\pi}{6} + 2k\pi < x < \frac{5\pi}{6} + 2k\pi$.
>
> ```grafico
> titolo: $\sin x > \frac{1}{2}$: the arc above the line $y = \frac{1}{2}$
> x: -1.6 1.6
> y: -1.3 1.3
> passo-x: 1
> passo-y: 1
> cerchio: 0 0 1 | grigio
> arco: 0 0 1 pi/6 5pi/6 | rosso | spesso
> orizzontale: 0.5 | tratteggio
> punto: cos(pi/6) 0.5 | vuoto | $\frac{\pi}{6}$ | ne
> punto: -cos(pi/6) 0.5 | vuoto | $\frac{5\pi}{6}$ | no
> ```
>
> ```retta
> titolo: $\sin x > \frac{1}{2}$ in $[0, 2\pi]$
> da: 0 2pi
> int: (pi/6, 5pi/6)
> tacca: 0 | $0$
> tacca: pi/6 | $\frac{\pi}{6}$
> tacca: 5pi/6 | $\frac{5\pi}{6}$
> tacca: 2pi | $2\pi$
> ```

> [!ESEMPIO] An arc that passes through zero
> $\cos x \geq -\frac{\sqrt2}{2}$ in $[0, 2\pi]$. The equation $\cos x = -\frac{\sqrt2}{2}$ has solutions $\frac{3\pi}{4}$ and $\frac{5\pi}{4}$. The points to the right of the vertical line with $x$-coordinate $-\frac{\sqrt2}{2}$ form an arc that passes through the angle 0: in $[0, 2\pi]$ it splits into two pieces.
> $$
> 0 \leq x \leq \frac{3\pi}{4} \quad \text{or} \quad \frac{5\pi}{4} \leq x \leq 2\pi
> $$
> On all of $\R$ it is a single interval that repeats: $-\frac{3\pi}{4} + 2k\pi \leq x \leq \frac{3\pi}{4} + 2k\pi$.
>
> ```retta
> titolo: $\cos x \geq -\frac{\sqrt{2}}{2}$ in $[0, 2\pi]$
> da: 0 2pi
> int: [0, 3pi/4]
> int: [5pi/4, 2pi]
> tacca: 3pi/4 | $\frac{3\pi}{4}$
> tacca: 5pi/4 | $\frac{5\pi}{4}$
> tacca: 2pi | $2\pi$
> ```

> [!ESEMPIO] Tangent
> $\tan x > 1$ in $[0, 2\pi]$. The equation $\tan x = 1$ has solutions $\frac{\pi}{4}$ and $\frac{5\pi}{4}$. On each branch the tangent increases up to the asymptote, which is never included:
> $$
> \frac{\pi}{4} < x < \frac{\pi}{2} \quad \text{or} \quad \frac{5\pi}{4} < x < \frac{3\pi}{2}
> $$
> On all of $\R$: $\frac{\pi}{4} + k\pi < x < \frac{\pi}{2} + k\pi$.
>
> ```retta
> titolo: $\tan x > 1$ in $[0, 2\pi]$
> da: 0 2pi
> int: (pi/4, pi/2)
> int: (5pi/4, 3pi/2)
> tacca: 0 | $0$
> tacca: pi/4 | $\frac{\pi}{4}$
> tacca: pi/2 | $\frac{\pi}{2}$
> tacca: 5pi/4 | $\frac{5\pi}{4}$
> tacca: 3pi/2 | $\frac{3\pi}{2}$
> tacca: 2pi | $2\pi$
> ```

> [!ESEMPIO] Sine less than or equal to a number
> $\sin x \leq -\frac{\sqrt3}{2}$ in $[0, 2\pi]$: the associated equation has solutions $\frac{4\pi}{3}$ and $\frac{5\pi}{3}$; the points below the line $y = -\frac{\sqrt3}{2}$, endpoints included, give $\frac{4\pi}{3} \leq x \leq \frac{5\pi}{3}$.

### Inequalities that reduce to elementary ones

> [!ESEMPIO] Double argument
> $\sin 2x > 0$ in $[0, 2\pi]$. Set $u = 2x$: when $x$ goes from $0$ to $2\pi$, $u$ goes from $0$ to $4\pi$ (two turns). The sine is positive for $0 < u < \pi$ and for $2\pi < u < 3\pi$. Dividing by 2:
> $$
> 0 < x < \frac{\pi}{2} \quad \text{or} \quad \pi < x < \frac{3\pi}{2}
> $$
>
> ```retta
> titolo: $\sin 2x > 0$ in $[0, 2\pi]$
> da: 0 2pi
> int: (0, pi/2)
> int: (pi, 3pi/2)
> tacca: pi/2 | $\frac{\pi}{2}$
> tacca: pi | $\pi$
> tacca: 3pi/2 | $\frac{3\pi}{2}$
> tacca: 2pi | $2\pi$
> ```

> [!ESEMPIO] Quadratic in the cosine, with isolated points
> $2\cos^2 x - \cos x - 1 \geq 0$ in $[0, 2\pi]$. With $t = \cos x$: $2t^2 - t - 1 \geq 0$, that is $(2t + 1)(t - 1) \geq 0$, true for $t \leq -\frac12$ or $t \geq 1$.
> - $\cos x \leq -\frac12$ gives $\frac{2\pi}{3} \leq x \leq \frac{4\pi}{3}$.
> - $\cos x \geq 1$ holds only when $\cos x = 1$, that is for $x = 0$ and $x = 2\pi$.
>
> Solutions: $x = 0$, $\frac{2\pi}{3} \leq x \leq \frac{4\pi}{3}$, $x = 2\pi$. The two isolated points are easily lost.
>
> ```retta
> titolo: $2\cos^2 x - \cos x - 1 \geq 0$ in $[0, 2\pi]$: one interval and two isolated points
> da: 0 2pi
> punto: 0 | $0$
> int: [2pi/3, 4pi/3]
> punto: 2pi | $2\pi$
> tacca: 2pi/3 | $\frac{2\pi}{3}$
> tacca: 4pi/3 | $\frac{4\pi}{3}$
> ```

### Trigonometry and triangles

Trigonometry is used to **solve triangles**: finding the unknown sides and angles from the known ones. In a triangle $ABC$ we call $a$, $b$, $c$ the sides opposite the vertices $A$, $B$, $C$, and $\alpha$, $\beta$, $\gamma$ the angles at $A$, $B$, $C$. So the side $a$ is opposite the angle $\alpha$.

```grafico
titolo: Triangle right-angled at $C$, with $a = 3$, $b = 4$ and hypotenuse $c = 5$
x: -1 5
y: -0.8 3.8
assi: no
griglia: no
poligono: 0 0 4 0 0 3
poligono: 0 0 0.3 0 0.3 0.3 0 0.3 | grigio | sottile
punto: 0 0 | $C$ | so
punto: 4 0 | $A$ | se
punto: 0 3 | $B$ | no
testo: -0.3 1.5 | $a$ | bianco
testo: 2 -0.35 | $b$ | bianco
testo: 2.2 1.75 | $c$ | bianco
testo: 3.3 0.25 | $\alpha$ | bianco
testo: 0.25 2.4 | $\beta$ | bianco
```

> [!PROP] Right-angled triangle (right angle at $C$, hypotenuse $c$)
> - $a = c\sin\alpha = c\cos\beta$ and $b = c\sin\beta = c\cos\alpha$: a leg is the hypotenuse times the sine of the opposite angle, or times the cosine of the adjacent acute angle.
> - $a = b\tan\alpha = b\operatorname{cotan}\beta$ and $b = a\tan\beta = a\operatorname{cotan}\alpha$: a leg is the other leg times the tangent of the angle opposite the first leg, or times the cotangent of the angle adjacent to the first leg.
> - $\alpha + \beta = 90^\circ$.
>
> In words: $\sin\alpha = \dfrac{\text{opposite leg}}{\text{hypotenuse}}$, $\cos\alpha = \dfrac{\text{adjacent leg}}{\text{hypotenuse}}$, $\tan\alpha = \dfrac{\text{opposite leg}}{\text{adjacent leg}}$.

> [!ESEMPIO] Solving a right-angled triangle
> - Hypotenuse $c = 10$ and $\alpha = 30^\circ$: $a = 10\sin 30^\circ = 5$, $b = 10\cos 30^\circ = 5\sqrt3$, $\beta = 60^\circ$.
> - Leg $b = 6$ and $\alpha = 60^\circ$: $a = b\tan\alpha = 6\sqrt3$ and $c = \dfrac{b}{\cos\alpha} = \dfrac{6}{1/2} = 12$. Check with Pythagoras: $(6\sqrt3)^2 + 6^2 = 108 + 36 = 144 = 12^2$.
> - Legs $a = 1$ and $b = \sqrt3$: $\tan\alpha = \frac{a}{b} = \frac{1}{\sqrt3}$, so $\alpha = 30^\circ$, $\beta = 60^\circ$ and the hypotenuse is $\sqrt{1 + 3} = 2$.

> [!PROP] Any triangle
> **Law of cosines** (also called Carnot's theorem): the square of a side is the sum of the squares of the other two, minus twice their product times the cosine of the angle between them.
> $$
> a^2 = b^2 + c^2 - 2bc\cos\alpha \qquad b^2 = a^2 + c^2 - 2ac\cos\beta \qquad c^2 = a^2 + b^2 - 2ab\cos\gamma
> $$
> With a right angle the cosine is 0 and you get back Pythagoras' theorem.
>
> **Law of sines**: the sides are proportional to the sines of the opposite angles.
> $$
> \frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma}
> $$
> The law of cosines is used when you know two sides and the angle between them (to find the third side) or three sides (to find an angle). The law of sines is used when you know two angles and a side. Also remember that $\alpha + \beta + \gamma = 180^\circ$.

> [!ESEMPIO] Law of cosines
> - Sides $b = 3$ and $c = 5$, included angle $\alpha = 120^\circ$: $a^2 = 9 + 25 - 2 \cdot 3 \cdot 5 \cdot \cos 120^\circ = 34 - 30 \cdot \left(-\frac12\right) = 34 + 15 = 49$, so $a = 7$.
> - Sides 5, 7 and 8: the angle $\theta$ opposite the side 7 has $\cos\theta = \dfrac{5^2 + 8^2 - 7^2}{2 \cdot 5 \cdot 8} = \dfrac{40}{80} = \dfrac12$, so $\theta = 60^\circ$.

> [!ESEMPIO] Law of sines
> $a = 6$, $\alpha = 45^\circ$, $\beta = 30^\circ$. Then $b = \dfrac{a\sin\beta}{\sin\alpha} = \dfrac{6 \cdot \frac12}{\frac{\sqrt2}{2}} = \dfrac{6}{\sqrt2} = 3\sqrt2$, and the third angle is $\gamma = 180^\circ - 45^\circ - 30^\circ = 105^\circ$.

> [!TEST] Equations, inequalities and triangles in the test questions
> - **Solutions written as families**: to compare the options, list the solutions between $0$ and $2\pi$, or substitute a value from the option into the equation.
> - **How many solutions in an interval** (numeric answer): write the families, try the integer values of $k$ ($0, 1, 2, \ldots$ and, if needed, the negative ones too) and count only the values of $x$ that fall in the interval. For example $x = -\frac{\pi}{3} + k\pi$ in $[0, 2\pi)$ gives $\frac{2\pi}{3}$ and $\frac{5\pi}{3}$, with $k = 1$ and $k = 2$.
> - **True or false on the existence of solutions**: $\sin x = c$ and $\cos x = c$ have solutions only if $-1 \leq c \leq 1$. Watch out for numbers in disguise: $\frac{\pi}{3} \approx 1.05$ is greater than 1.
> - **Inequalities**: try a convenient angle ($0$, $\frac{\pi}{2}$, $\pi$) to discard options; check the endpoints, and remember that with the tangent $\frac{\pi}{2}$ and $\frac{3\pi}{2}$ are never included.
> - **Triangles**: with angles of $30^\circ$, $45^\circ$, $60^\circ$, $120^\circ$ the calculations come out clean. Always make a sketch to see which side is opposite which angle.

## Exercises

::: esercizio base Degrees and radians
Convert $210^\circ$ and $36^\circ$ to radians; convert $\frac{3\pi}{4}$ and $\frac{11\pi}{6}$ to degrees. Finally convert $\frac{5\pi}{2}$ to degrees and say which point of the unit circle it corresponds to.
::: soluzione
- $210^\circ = 210 \cdot \frac{\pi}{180} = \frac{7\pi}{6}$.
- $36^\circ = 36 \cdot \frac{\pi}{180} = \frac{\pi}{5}$.
- $\frac{3\pi}{4} = 3 \cdot \frac{180^\circ}{4} = 135^\circ$.
- $\frac{11\pi}{6} = 11 \cdot \frac{180^\circ}{6} = 330^\circ$.
- $\frac{5\pi}{2} = 5 \cdot 90^\circ = 450^\circ = 360^\circ + 90^\circ$: same point as $90^\circ$, that is $(0, 1)$.
:::

::: esercizio base Values with related angles
Compute $\sin\frac{2\pi}{3}$, $\;\cos\frac{7\pi}{6}$, $\;\tan\frac{5\pi}{4}$, $\;\sin\left(-\frac{5\pi}{6}\right)$, $\;\cos\frac{5\pi}{3}$, $\;\sin\frac{3\pi}{2}$.
::: soluzione
- $\frac{2\pi}{3} = \pi - \frac{\pi}{3}$ (quadrant II, positive sine): $\sin\frac{2\pi}{3} = \sin\frac{\pi}{3} = \frac{\sqrt3}{2}$.
- $\frac{7\pi}{6} = \pi + \frac{\pi}{6}$ (quadrant III, negative cosine): $\cos\frac{7\pi}{6} = -\cos\frac{\pi}{6} = -\frac{\sqrt3}{2}$.
- $\frac{5\pi}{4} = \pi + \frac{\pi}{4}$ (quadrant III, positive tangent): $\tan\frac{5\pi}{4} = \tan\frac{\pi}{4} = 1$.
- The sine is odd: $\sin\left(-\frac{5\pi}{6}\right) = -\sin\frac{5\pi}{6} = -\sin\frac{\pi}{6} = -\frac12$.
- $\frac{5\pi}{3} = 2\pi - \frac{\pi}{3}$ (quadrant IV, positive cosine): $\cos\frac{5\pi}{3} = \cos\frac{\pi}{3} = \frac12$.
- $\frac{3\pi}{2}$ corresponds to the point $(0, -1)$: $\sin\frac{3\pi}{2} = -1$.
:::

::: esercizio base From the cosine to the other functions
You know that $\cos x = -\frac{7}{25}$ and that $\pi < x < \frac{3\pi}{2}$. Compute $\sin x$, $\tan x$ and $\operatorname{cotan} x$.
::: soluzione
Pythagorean identity: $\sin^2 x = 1 - \frac{49}{625} = \frac{576}{625}$, so $\sin x = \pm\frac{24}{25}$. In quadrant III the sine is negative: $\sin x = -\frac{24}{25}$.

Then $\tan x = \dfrac{-24/25}{-7/25} = \dfrac{24}{7}$ (positive, as it must be in quadrant III) and $\operatorname{cotan} x = \dfrac{7}{24}$.
:::

::: esercizio base Elementary equations
Solve: $2\sin x = \sqrt2$, $\;\cos x = 0$, $\;\tan x = \sqrt3$, $\;\sin x = \frac54$.
::: soluzione
- $\sin x = \frac{\sqrt2}{2}$: $x = \frac{\pi}{4} + 2k\pi$ or $x = \pi - \frac{\pi}{4} + 2k\pi = \frac{3\pi}{4} + 2k\pi$.
- $\cos x = 0$: $x = \frac{\pi}{2} + k\pi$.
- $\tan x = \sqrt3$: $x = \frac{\pi}{3} + k\pi$.
- $\frac54 > 1$ and the sine does not exceed 1: no solutions.
:::

::: esercizio base Period and range
Find the range and period of $y = 4\sin x$, $\;y = \cos 4x$, $\;y = 1 - \cos x$, $\;y = \tan\frac{x}{2}$.
::: soluzione
- $y = 4\sin x$: amplitude 4, range $[-4, 4]$; period $2\pi$.
- $y = \cos 4x$: range $[-1, 1]$; period $\frac{2\pi}{4} = \frac{\pi}{2}$.
- $y = 1 - \cos x$: since $-1 \leq \cos x \leq 1$, $-\cos x$ also lies between $-1$ and $1$, so $1 - \cos x$ lies between $0$ and $2$: range $[0, 2]$; period $2\pi$.
- $y = \tan\frac{x}{2}$: range $\R$; period $\frac{\pi}{1/2} = 2\pi$.
:::

::: esercizio medio Addition formulas
Compute the exact value of $\sin 105^\circ$ and of $\cos 165^\circ$.
::: soluzione
$\sin 105^\circ = \sin(60^\circ + 45^\circ) = \sin 60^\circ\cos 45^\circ + \cos 60^\circ\sin 45^\circ$:

$$
\sin 105^\circ = \frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2} + \frac12\cdot\frac{\sqrt2}{2} = \frac{\sqrt6 + \sqrt2}{4}
$$

$\cos 165^\circ = \cos(120^\circ + 45^\circ) = \cos 120^\circ\cos 45^\circ - \sin 120^\circ\sin 45^\circ$:

$$
\cos 165^\circ = \left(-\frac12\right)\cdot\frac{\sqrt2}{2} - \frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2} = -\frac{\sqrt2 + \sqrt6}{4}
$$

Sign check: $105^\circ$ and $165^\circ$ are in quadrant II, where the sine is positive and the cosine negative.
:::

::: esercizio medio Double-angle formulas
You know that $\sin x = \frac23$ and that $\frac{\pi}{2} < x < \pi$. Compute $\sin 2x$ and $\cos 2x$.
::: soluzione
First the cosine: $\cos^2 x = 1 - \frac49 = \frac59$; in quadrant II the cosine is negative, so $\cos x = -\frac{\sqrt5}{3}$.

$$
\sin 2x = 2\sin x\cos x = 2 \cdot \frac23 \cdot \left(-\frac{\sqrt5}{3}\right) = -\frac{4\sqrt5}{9}
$$

$$
\cos 2x = 1 - 2\sin^2 x = 1 - 2 \cdot \frac49 = \frac19
$$

Check: $\left(\frac{4\sqrt5}{9}\right)^2 + \left(\frac19\right)^2 = \frac{80}{81} + \frac{1}{81} = 1$.
:::

::: esercizio medio Verifying two identities
Prove that $(\sin x + \cos x)^2 = 1 + \sin 2x$ for every $x$, and that $\dfrac{1 - \cos 2x}{\sin 2x} = \tan x$ for every $x$ at which both sides exist.
::: soluzione
**First.** Expand the square and use the Pythagorean identity and the double-angle formula:

$$
(\sin x + \cos x)^2 = \sin^2 x + 2\sin x\cos x + \cos^2 x = 1 + \sin 2x
$$

**Second.** $1 - \cos 2x = 1 - (1 - 2\sin^2 x) = 2\sin^2 x$ and $\sin 2x = 2\sin x\cos x$, so

$$
\frac{1 - \cos 2x}{\sin 2x} = \frac{2\sin^2 x}{2\sin x\cos x} = \frac{\sin x}{\cos x} = \tan x
$$

Cancelling $\sin x$ is legitimate because where the left-hand side exists we have $\sin 2x \neq 0$, so $\sin x \neq 0$.
:::

::: esercizio medio Quadratic in the cosine
Solve $2\cos^2 x + 3\cos x + 1 = 0$.
::: soluzione
With $t = \cos x$: $2t^2 + 3t + 1 = 0$, that is $(2t + 1)(t + 1) = 0$, so $t = -\frac12$ or $t = -1$. Both values are between $-1$ and $1$.

- $\cos x = -\frac12$ gives $x = \pm\frac{2\pi}{3} + 2k\pi$.
- $\cos x = -1$ gives $x = \pi + 2k\pi$.

In the first turn the solutions are $\frac{2\pi}{3}$, $\pi$, $\frac{4\pi}{3}$.
:::

::: esercizio medio An elementary inequality
Solve $2\sin x + \sqrt3 < 0$ in $[0, 2\pi]$.
::: soluzione
The inequality is equivalent to $\sin x < -\frac{\sqrt3}{2}$. The equation $\sin x = -\frac{\sqrt3}{2}$ has solutions $\frac{4\pi}{3}$ and $\frac{5\pi}{3}$ (reference angle $\frac{\pi}{3}$, quadrants III and IV). The points of the circle below the line $y = -\frac{\sqrt3}{2}$ form the arc between the two angles, endpoints excluded:

$$
\frac{4\pi}{3} < x < \frac{5\pi}{3}
$$

```retta
titolo: $2\sin x + \sqrt{3} < 0$ in $[0, 2\pi]$
da: 0 2pi
int: (4pi/3, 5pi/3)
tacca: 0 | $0$
tacca: 4pi/3 | $\frac{4\pi}{3}$
tacca: 5pi/3 | $\frac{5\pi}{3}$
tacca: 2pi | $2\pi$
```
:::

::: esercizio medio A right-angled triangle
A right-angled triangle has hypotenuse 8 and an acute angle $\alpha = 60^\circ$. Find the legs, the other acute angle and the perimeter.
::: soluzione
- Leg opposite $\alpha$: $a = 8\sin 60^\circ = 8 \cdot \frac{\sqrt3}{2} = 4\sqrt3$.
- Leg adjacent to $\alpha$: $b = 8\cos 60^\circ = 8 \cdot \frac12 = 4$.
- The other acute angle: $\beta = 90^\circ - 60^\circ = 30^\circ$.
- Perimeter: $8 + 4 + 4\sqrt3 = 12 + 4\sqrt3$.

Check with Pythagoras: $(4\sqrt3)^2 + 4^2 = 48 + 16 = 64 = 8^2$.
:::

::: esercizio test Linear in sine and cosine
Solve $\sin x + \sqrt3\cos x = \sqrt3$. How many solutions are there in the interval $[0, 2\pi)$?
::: soluzione
With $X = \cos x$ and $Y = \sin x$, put it in a system with the Pythagorean identity:

$$
\begin{cases} Y + \sqrt3\,X = \sqrt3 \\ X^2 + Y^2 = 1 \end{cases}
$$

From the first, $Y = \sqrt3(1 - X)$. Substitute: $X^2 + 3(1 - X)^2 = 1$, that is $4X^2 - 6X + 2 = 0$, so $2X^2 - 3X + 1 = 0$, with solutions $X = 1$ and $X = \frac12$.

- $X = 1$ gives $Y = 0$: the point $(1, 0)$, that is $x = 2k\pi$.
- $X = \frac12$ gives $Y = \frac{\sqrt3}{2}$: the point $\left(\frac12, \frac{\sqrt3}{2}\right)$, that is $x = \frac{\pi}{3} + 2k\pi$.

In $[0, 2\pi)$ the solutions are $0$ and $\frac{\pi}{3}$: **two**. Check with $x = \frac{\pi}{3}$: $\frac{\sqrt3}{2} + \sqrt3 \cdot \frac12 = \sqrt3$.
:::

::: esercizio test Watch out for the domain
Solve $\tan 3x = \tan x$.
::: soluzione
Domain conditions: $\tan x$ exists for $x \neq \frac{\pi}{2} + k\pi$, $\tan 3x$ exists for $3x \neq \frac{\pi}{2} + k\pi$.

Two tangents are equal when the angles differ by a multiple of $\pi$: $3x = x + k\pi$, that is $x = \frac{k\pi}{2}$.

Now check the conditions. If $k$ is odd, $x = \frac{\pi}{2}, \frac{3\pi}{2}, \ldots$: there $\tan x$ does not exist, so these values are discarded. If $k$ is even, $x = 0, \pi, 2\pi, \ldots$: both tangents exist and equal 0.

Solutions: $x = k\pi$.
:::

::: esercizio test Inequality with the tangent
Solve $\tan x > -\frac{\sqrt3}{3}$ in $[0, 2\pi]$.
::: soluzione
The equation $\tan x = -\frac{\sqrt3}{3}$ has solutions $\frac{5\pi}{6}$ and $\frac{11\pi}{6}$ (reference angle $\frac{\pi}{6}$, quadrants II and IV). The tangent does not exist at $\frac{\pi}{2}$ and $\frac{3\pi}{2}$ and is increasing on each branch:

- from $0$ to $\frac{\pi}{2}$ the tangent is positive: it works;
- from $\frac{\pi}{2}$ to $\frac{5\pi}{6}$ it rises from $-\infty$ to $-\frac{\sqrt3}{3}$: it does not work;
- from $\frac{5\pi}{6}$ to $\frac{3\pi}{2}$ it rises from $-\frac{\sqrt3}{3}$ to $+\infty$: it works;
- from $\frac{3\pi}{2}$ to $\frac{11\pi}{6}$ it does not work; from $\frac{11\pi}{6}$ to $2\pi$ it works.

$$
0 \leq x < \frac{\pi}{2} \quad \text{or} \quad \frac{5\pi}{6} < x < \frac{3\pi}{2} \quad \text{or} \quad \frac{11\pi}{6} < x \leq 2\pi
$$

```retta
titolo: $\tan x > -\frac{\sqrt{3}}{3}$ in $[0, 2\pi]$
da: 0 2pi
int: [0, pi/2)
int: (5pi/6, 3pi/2)
int: (11pi/6, 2pi]
tacca: pi/2 | $\frac{\pi}{2}$
tacca: 5pi/6 | $\frac{5\pi}{6}$
tacca: 3pi/2 | $\frac{3\pi}{2}$
tacca: 11pi/6 | $\frac{11\pi}{6}$
tacca: 2pi | $2\pi$
```
:::

::: esercizio test An inequality that reduces to elementary ones
Solve $2\sin^2 x - \sin x < 0$ in $[0, 2\pi]$.
::: soluzione
Take out the common factor: $\sin x(2\sin x - 1) < 0$. With $t = \sin x$, the product $t(2t - 1)$ is negative between the roots $0$ and $\frac12$: you need $0 < \sin x < \frac12$.

- $\sin x > 0$ for $0 < x < \pi$.
- $\sin x < \frac12$ for $0 \leq x < \frac{\pi}{6}$ or $\frac{5\pi}{6} < x \leq 2\pi$.

The two conditions must hold together:

$$
0 < x < \frac{\pi}{6} \quad \text{or} \quad \frac{5\pi}{6} < x < \pi
$$

```retta
titolo: $2\sin^2 x - \sin x < 0$ in $[0, 2\pi]$
da: 0 2pi
int: (0, pi/6)
int: (5pi/6, pi)
tacca: pi/6 | $\frac{\pi}{6}$
tacca: 5pi/6 | $\frac{5\pi}{6}$
tacca: pi | $\pi$
tacca: 2pi | $2\pi$
```
:::

::: esercizio test Law of cosines
A triangle has sides 3, 5 and 7. What is the size of its largest angle?
::: soluzione
The largest angle is opposite the longest side, 7. With the law of cosines:

$$
\cos\gamma = \frac{3^2 + 5^2 - 7^2}{2 \cdot 3 \cdot 5} = \frac{9 + 25 - 49}{30} = \frac{-15}{30} = -\frac12
$$

Between $0^\circ$ and $180^\circ$ the only angle with cosine $-\frac12$ is $120^\circ$, that is $\frac{2\pi}{3}$: the triangle is obtuse.
:::

::: esercizio test Law of sines
In a triangle $b = 5\sqrt2$, $\beta = 45^\circ$ and $\gamma = 60^\circ$. Find the angle $\alpha$ and the side $c$.
::: soluzione
Sum of the angles: $\alpha = 180^\circ - 45^\circ - 60^\circ = 75^\circ$.

Law of sines: $\dfrac{c}{\sin\gamma} = \dfrac{b}{\sin\beta}$, so

$$
c = \frac{b\sin\gamma}{\sin\beta} = \frac{5\sqrt2 \cdot \frac{\sqrt3}{2}}{\frac{\sqrt2}{2}} = 5\sqrt3
$$
:::

## Self-check quiz

```quiz
D: How many degrees is an angle of $\dfrac{7\pi}{12}$ radians?
N: 105
= $\dfrac{7\pi}{12} \cdot \dfrac{180}{\pi} = 7 \cdot 15 = 105$.

D: What is the value of $\cos\dfrac{2\pi}{3}$?
+ $-\dfrac{1}{2}$
- $\dfrac{1}{2}$
- $-\dfrac{\sqrt{3}}{2}$
- $\dfrac{\sqrt{3}}{2}$
= $\dfrac{2\pi}{3} = \pi - \dfrac{\pi}{3}$ is in quadrant II, where the cosine is negative: $\cos\dfrac{2\pi}{3} = -\cos\dfrac{\pi}{3} = -\dfrac12$. The options with $\sqrt3$ confuse the cosine with the sine.

D: What is the value of $\sin\dfrac{\pi}{6} + \cos\dfrac{\pi}{3} + \tan\dfrac{\pi}{4}$?
N: 2
= $\dfrac12 + \dfrac12 + 1 = 2$.

D: True or false: $\sin(\alpha + \beta) = \sin\alpha + \sin\beta$ for every pair of angles $\alpha$ and $\beta$.
- True
+ False
= One counterexample is enough: with $\alpha = \beta = \dfrac{\pi}{2}$ the left-hand side equals $\sin\pi = 0$, the right-hand side $1 + 1 = 2$. The correct formula is $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$.

D: True or false: if $\dfrac{\pi}{2} < x < \pi$, then $\tan x < 0$.
+ True
- False
= In quadrant II the sine is positive and the cosine is negative, so their ratio is negative.

D: Given that $\sin x = \dfrac{4}{5}$ and $\dfrac{\pi}{2} < x < \pi$, what is the value of $\cos x$?
+ $-\dfrac{3}{5}$
- $\dfrac{3}{5}$
- $-\dfrac{1}{5}$
- $\dfrac{9}{25}$
= $\cos^2 x = 1 - \dfrac{16}{25} = \dfrac{9}{25}$, so $\cos x = \pm\dfrac35$; in quadrant II the cosine is negative, $\cos x = -\dfrac35$. $\frac{9}{25}$ is $\cos^2 x$ (the square root is missing); $-\frac15$ comes from $1 - \frac45$, without the squares.

D: Which expressions are equal to $\sin x$ for every $x$?
+ $\sin(\pi - x)$
+ $\cos\left(\dfrac{\pi}{2} - x\right)$
+ $-\sin(-x)$
- $\sin(\pi + x)$
- $\cos(-x)$
= $\sin(\pi - x) = \sin x$ (supplementary angles), $\cos\left(\frac\pi2 - x\right) = \sin x$ (complementary angles) and $-\sin(-x) = -(-\sin x) = \sin x$. On the other hand, $\sin(\pi + x) = -\sin x$ and $\cos(-x) = \cos x$.

D: What is the period of the function $y = 3\sin(4x)$?
+ $\dfrac{\pi}{2}$
- $8\pi$
- $2\pi$
- $\dfrac{2\pi}{3}$
= The period of $\sin(\omega x)$ is $\dfrac{2\pi}{|\omega|}$: here $\dfrac{2\pi}{4} = \dfrac{\pi}{2}$. The coefficient 3 changes the amplitude (the values go from $-3$ to $3$), not the period. $8\pi$ comes from multiplying by 4 instead of dividing.

D: The solutions of the equation $2\cos x - \sqrt{3} = 0$ are
+ $x = \pm\dfrac{\pi}{6} + 2k\pi$, with $k \in \Z$
- $x = \dfrac{\pi}{6} + 2k\pi$ or $x = \dfrac{5\pi}{6} + 2k\pi$, with $k \in \Z$
- $x = \pm\dfrac{\pi}{3} + 2k\pi$, with $k \in \Z$
- $x = \dfrac{\pi}{6} + k\pi$, with $k \in \Z$
= $\cos x = \dfrac{\sqrt3}{2}$ holds for $x = \dfrac\pi6$; for the cosine the other solution is the opposite angle, $-\dfrac\pi6$. The answer with $\frac{5\pi}{6}$ uses the rule for the sine ($\pi - \alpha$), the one with $\pm\frac{\pi}{3}$ confuses $\frac{\sqrt3}{2}$ with $\frac12$, the one with $+k\pi$ uses the period of the tangent.

D: How many solutions does the equation $\sin(3x) = 1$ have in the interval $[0, 2\pi)$?
N: 3
= $3x = \dfrac{\pi}{2} + 2k\pi$, so $x = \dfrac{\pi}{6} + \dfrac{2k\pi}{3}$. With $k = 0, 1, 2$ you get $\dfrac{\pi}{6}$, $\dfrac{5\pi}{6}$, $\dfrac{3\pi}{2}$; with $k = 3$ you reach $\dfrac{13\pi}{6}$, which is beyond $2\pi$.

D: Which values of $x$ are solutions of $\cos x - \sin x = 1$?
+ $x = 0$
+ $x = \dfrac{3\pi}{2}$
+ $x = -\dfrac{\pi}{2}$
- $x = \dfrac{\pi}{2}$
- $x = \pi$
= Substitute: $\cos 0 - \sin 0 = 1$; $\cos\frac{3\pi}{2} - \sin\frac{3\pi}{2} = 0 - (-1) = 1$; $-\frac\pi2$ corresponds to the same point as $\frac{3\pi}{2}$. On the other hand, at $\frac\pi2$ you get $0 - 1 = -1$ and at $\pi$ you get $-1 - 0 = -1$.

D: The solution set of $\cos x > \dfrac{1}{2}$ in the interval $[0, 2\pi]$ is
+ $0 \leq x < \dfrac{\pi}{3}$ or $\dfrac{5\pi}{3} < x \leq 2\pi$
- $\dfrac{\pi}{3} < x < \dfrac{5\pi}{3}$
- $\dfrac{\pi}{6} < x < \dfrac{5\pi}{6}$
- $\dfrac{\pi}{3} < x < \dfrac{2\pi}{3}$
= $\cos x = \dfrac12$ at $\dfrac\pi3$ and at $\dfrac{5\pi}{3}$. The cosine is greater than $\frac12$ to the right of the vertical line with $x$-coordinate $\frac12$, that is on the arc that passes through the angle 0, which in $[0, 2\pi]$ splits into two pieces. The interval between $\frac{\pi}{3}$ and $\frac{5\pi}{3}$ is the solution of $\cos x < \frac12$, the one between $\frac{\pi}{6}$ and $\frac{5\pi}{6}$ is the solution of $\sin x > \frac12$.

D: True or false: the equation $\sin x = \dfrac{\pi}{3}$ has solutions.
- True
+ False
= $\dfrac{\pi}{3}$ is a number, about $1.05$: it is greater than 1, and the sine never exceeds 1. Do not confuse the value of the sine with the angle: $\sin\dfrac\pi3 = \dfrac{\sqrt3}{2}$, but here $\frac\pi3$ is the value the sine should take.

D: A right-angled triangle has hypotenuse 12 and an acute angle of $30^\circ$. How long is the leg opposite that angle?
+ $6$
- $6\sqrt{3}$
- $4\sqrt{3}$
- $24$
= A leg equals the hypotenuse times the sine of the opposite angle: $12 \cdot \sin 30^\circ = 12 \cdot \frac12 = 6$. $6\sqrt3$ is the other leg, the one adjacent to the angle; $4\sqrt3 = 12\tan 30^\circ$ uses the wrong formula; $24$ comes from dividing by $\sin 30^\circ$.

D: In a triangle two sides measure 5 and 8 and the angle between them is $60^\circ$. How long is the third side?
N: 7
= Law of cosines: $a^2 = 5^2 + 8^2 - 2 \cdot 5 \cdot 8 \cdot \cos 60^\circ = 25 + 64 - 40 = 49$, so $a = 7$.

D: Which statement about the function $y = \tan x$ is true?
+ It is defined for $x \neq \dfrac{\pi}{2} + k\pi$ and has period $\pi$.
- It is defined on all of $\R$ and has period $2\pi$.
- It is defined for $x \neq k\pi$ and has period $\pi$.
- It only takes values between $-1$ and $1$.
= The tangent is $\frac{\sin x}{\cos x}$: it does not exist where the cosine is zero, that is at $\frac\pi2 + k\pi$, and it repeats every half turn. The set $x \neq k\pi$ is the domain of the cotangent. The tangent takes all real values.
```

## Checklist

```checklist
I can convert from degrees to radians and vice versa
I can place an angle on the unit circle, even a negative one or one larger than a full turn, and say which quadrant it falls in
I can define sine, cosine and tangent on the unit circle and I remember their signs in the quadrants
I know by heart the sine, cosine and tangent of $0$, $\frac{\pi}{6}$, $\frac{\pi}{4}$, $\frac{\pi}{3}$, $\frac{\pi}{2}$
I can use the Pythagorean identity to find one function from the others, choosing the right sign
I can bring an angle back to the first quadrant with related angles
I can apply the addition, subtraction, double-angle and half-angle formulas
I know the domain, range and period of sine, cosine and tangent, and I can find the period of $y = A\sin(\omega x)$
I can solve $\sin x = c$, $\cos x = c$ and $\tan x = c$, writing all the solutions with $k \in \Z$
I can solve equations that reduce to elementary ones: taking out a common factor, quadratic, same function on both sides, linear in sine and cosine
I can solve a trigonometric inequality in $[0, 2\pi]$ by reading the arcs on the circle
I can solve a right-angled triangle and use the law of cosines and the law of sines
```
