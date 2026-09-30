---
modulo: 1
titolo: "Language, sets, logic and numbers"
breve: "Sets and set operations, connectives and quantifiers, negations, proofs and counterexamples; number sets, fractions, decimals, powers, radicals, percentages and intervals."
ore: 7
unita:
  - "1.1 Elements of set theory and logic"
  - "1.2 Numbers"
italian_original: https://github.com/DonFlammer/unito-ofa-matematica/blob/main/ai/moduli/01-linguaggio-numeri.md
---

## In brief

- A set is described **by listing** its elements (roster notation) or with a **characteristic property** (set-builder notation). The symbol $\in$ ("belongs to") links an element to a set; the symbol $\subseteq$ ("is contained in") links two sets.
- Set operations translate the logical connectives: intersection = "and", union = "or", complement = "not", symmetric difference = "either… or…".
- "If $p$ then $q$" is false only when $p$ is true and $q$ is false. It is equivalent to the **contrapositive** "if not $q$ then not $p$", **not** to the converse "if $q$ then $p$".
- To negate: "and" becomes "or" (and vice versa), "for every" becomes "there is at least one that does not", "there exists" becomes "for every… not". The negation of $x > 3$ is $x \le 3$.
- A single **counterexample** is enough to show that a general statement is false; to show that it is true you need a proof.
- $\N \subset \Z \subset \Q \subset \R$ (natural numbers, integers, rational numbers, real numbers). Rational numbers have terminating or repeating decimals; irrational numbers ($\sqrt2$, $\pi$…) have infinite, non-repeating decimals.
- Fractions, powers, radicals and percentages are done by hand: you need a few reliable rules (the table of the properties of powers, taking factors out of the root, rationalising, increases and discounts as multiplications).
- In intervals a square bracket includes the endpoint and a round bracket excludes it; next to $+\infty$ and $-\infty$ there is always a round bracket.

## 1.1 Elements of set theory and logic

### Sets and elements

In mathematics, **set** is a primitive notion: it is not defined, it is used. Think of it as a collection of objects, the **elements**, for which it is always clear whether an object belongs to it or not. "The even numbers" is a set; "the large numbers" is not, because "large" is not an objective criterion.

Sets are usually denoted by capital letters ($A$, $B$, $X$) and elements by lower-case letters.

> [!DEF] Membership
> $x \in A$ is read "$x$ belongs to $A$": $x$ is an element of $A$.
> $x \notin A$ is read "$x$ does not belong to $A$".
> The symbols $\in$ and $\notin$ are used **only** between an element (on the left) and a set (on the right).

A set can be represented in three ways.

1. **By listing** (roster notation): write the elements between curly brackets, for example $V = \{a, e, i, o, u\}$. The order does not matter and repeated elements count only once: $\{2, 5, 5, 7\} = \{7, 2, 5\}$.
2. **With a characteristic property** (set-builder notation): $P = \{n \in \N \mid n \text{ is even}\}$. The vertical bar $\mid$ is read "such that" (some books use a colon). So: "the set of natural numbers $n$ such that $n$ is even".
3. **With a Venn diagram** (*diagramma di Eulero-Venn*): a closed curve with points inside that represent the elements.

The set with no elements is called the **empty set** and is denoted by $\varnothing$. For example $\{x \in \R \mid x^2 = -1\} = \varnothing$, because no real number has a negative square.

The most commonly used sets are the number sets, which you will study in the second part of the module: $\N$ (natural numbers), $\Z$ (integers), $\Q$ (rational numbers), $\R$ (real numbers).

> [!ESEMPIO] From listing to property and back
> - $A = \{n \in \N \mid n < 5\}$ written by listing is $A = \{0, 1, 2, 3, 4\}$ (remember that $0 \in \N$).
> - $B = \{1, 4, 9, 16, 25\}$ written with a property is $B = \{n^2 \mid n \in \N,\ 1 \le n \le 5\}$: the squares of the numbers from 1 to 5.
> - $C = \{x \in \Z \mid -2 \le x < 2\} = \{-2, -1, 0, 1\}$: $-2$ is included (there is an equals sign), $2$ is not.

### Subsets and equality

> [!DEF] Inclusion
> $A \subseteq B$ is read "$A$ is contained (or included) in $B$" or "$A$ is a **subset** of $B$": **every** element of $A$ is also an element of $B$. This does not rule out $A = B$.
> $A \subset B$ (or $A \subsetneq B$) means that $A \subseteq B$ and, in addition, $A \ne B$: $A$ is **strictly** included in $B$.
> $A \not\subseteq B$ means that at least one element of $A$ is not in $B$.

For every set $A$, $\varnothing \subseteq A$ and $A \subseteq A$ always hold: these are the **improper subsets** of $A$. All other subsets are called **proper**.

> [!PROP] When two sets are equal
> $A = B$ if and only if $A \subseteq B$ and $B \subseteq A$: they have exactly the same elements.

> [!TRAPPOLA] $\in$ or $\subseteq$?
> With $A = \{1, 2, 3\}$: $2 \in A$ is correct and $\{2\} \subseteq A$ is correct; on the other hand, $2 \subseteq A$ and $\{2\} \in A$ are wrong. To the left of $\subseteq$ you need a set; to the left of $\in$ you need an element of $A$, and the set $\{2\}$ is not one of the elements of $A$.
> The empty set is a subset of every set, but usually it is **not** one of its elements: $\varnothing \subseteq A$ is true, $\varnothing \in A$ is false.
> Some books also use $\subset$ for non-strict inclusion: if the difference matters, look at the context.

### Power set

> [!DEF] Power set
> The **power set** (*insieme delle parti*) of $X$, denoted by $\mathcal{P}(X)$, is the set whose elements are **all the subsets** of $X$, including $\varnothing$ and $X$:
> $$
> \mathcal{P}(X) = \{A \mid A \subseteq X\}
> $$

> [!ESEMPIO] The power sets of sets with two and with three elements
> If $X = \{a, b\}$: $\mathcal{P}(X) = \{\varnothing, \{a\}, \{b\}, \{a, b\}\}$, that is, 4 elements.
> If $Y = \{\text{red}, \text{green}, \text{blue}\}$ the subsets are: $\varnothing$; three with one element; three with two elements ($\{\text{red}, \text{green}\}$, $\{\text{red}, \text{blue}\}$, $\{\text{green}, \text{blue}\}$); $Y$ itself. Total $1 + 3 + 3 + 1 = 8$.

> [!PROP] How many subsets there are
> If $X$ has $n$ elements, $\mathcal{P}(X)$ has $2^n$ elements.
> The reason: to build a subset you decide, element by element, "I take it" or "I leave it out". That is $n$ choices with 2 options each: $2 \cdot 2 \cdots 2 = 2^n$. The case $n = 0$ works too: $\mathcal{P}(\varnothing) = \{\varnothing\}$ has $2^0 = 1$ element.

### Set operations

Consider two sets $A$ and $B$ contained in an "ambient" set $X$, called the **universal set**.

> [!DEF] The operations
> - **Intersection**: $A \cap B = \{x \mid x \in A \text{ and } x \in B\}$, the elements **in common**. If $A \cap B = \varnothing$, $A$ and $B$ are called **disjoint**.
> - **Union**: $A \cup B = \{x \mid x \in A \text{ or } x \in B\}$, the elements that are in at least one of the two (possibly in both).
> - **Difference**: $A \setminus B = \{x \mid x \in A \text{ and } x \notin B\}$, the elements of $A$ that are not in $B$ (also written $A - B$).
> - **Symmetric difference**: $A \,\Delta\, B$, the elements that are in **only one** of the two sets: $A \,\Delta\, B = (A \setminus B) \cup (B \setminus A)$.
> - **Complement** of $A$ in $X$: $\overline{A} = X \setminus A = \{x \in X \mid x \notin A\}$.
> - **Cartesian product**: $A \times B = \{(a, b) \mid a \in A,\ b \in B\}$, the set of **ordered pairs** with the first element in $A$ and the second in $B$.

> [!ESEMPIO] All the operations on two sets
> $A = \{\text{divisors of } 12\} = \{1, 2, 3, 4, 6, 12\}$ and $B = \{\text{prime numbers less than } 10\} = \{2, 3, 5, 7\}$.
> - $A \cap B = \{2, 3\}$
> - $A \cup B = \{1, 2, 3, 4, 5, 6, 7, 12\}$ (2 and 3 are written only once)
> - $A \setminus B = \{1, 4, 6, 12\}$ and $B \setminus A = \{5, 7\}$: the difference is **not** commutative
> - $A \,\Delta\, B = \{1, 4, 5, 6, 7, 12\}$: all of $A \cup B$ except the common part
> - with universal set $X = \{1, 2, \dots, 12\}$: $\overline{B} = \{1, 4, 6, 8, 9, 10, 11, 12\}$

```grafico
titolo: Venn diagram of $A$ and $B$; in red, the intersection $A \cap B = \{2, 3\}$
x: -5 5
y: -3 3
assi: no
griglia: no
area: sqrt(abs(5.76-(abs(x)+1.2)^2)) | -sqrt(abs(5.76-(abs(x)+1.2)^2)) | -1.2 1.2 | rosso
cerchio: -1.2 0 2.4
cerchio: 1.2 0 2.4
testo: -3.4 2.3 | $A$ | bianco
testo: 3.4 2.3 | $B$ | bianco
testo: -2.4 0.5 | $1,\ 4$
testo: -2.4 -0.5 | $6,\ 12$
testo: 0 0 | $2,\ 3$
testo: 2.4 0 | $5,\ 7$
```

> [!PROP] Useful properties
> - $A \cap B \subseteq A \subseteq A \cup B$.
> - If $A \subseteq B$, then $A \cap B = A$ and $A \cup B = B$.
> - **De Morgan's laws**: $\overline{A \cup B} = \overline{A} \cap \overline{B}$ and $\overline{A \cap B} = \overline{A} \cup \overline{B}$.
> - To count, write $|A|$ for the number of elements of $A$: then $|A \cup B| = |A| + |B| - |A \cap B|$ (otherwise you would count the common elements twice) and $|A \times B| = |A| \cdot |B|$.

> [!ESEMPIO] The Cartesian product
> $A = \{1, 2\}$ and $B = \{a, b, c\}$.
> $A \times B = \{(1, a), (1, b), (1, c),$ $(2, a), (2, b), (2, c)\}$: $2 \cdot 3 = 6$ pairs.
> $B \times A = \{(a, 1), (a, 2), (b, 1),$ $(b, 2), (c, 1), (c, 2)\}$ is a different set, because $(1, a) \ne (a, 1)$: the Cartesian product is **not** commutative.
> The Cartesian plane is $\R \times \R$ (also written $\R^2$): each point is an ordered pair $(x, y)$ of real numbers.

> [!ESEMPIO] Counting with diagrams
> In a class of 28 people, 17 play football, 12 play volleyball and 5 play both sports. How many people play neither?
> Let $C$ be the set of those who play football and $P$ the set of those who play volleyball. Those who play at least one sport: $|C \cup P| = 17 + 12 - 5 = 24$ (the 5 are counted both in $C$ and in $P$, so they are subtracted once). No sport: $28 - 24 = 4$.

### Statements and predicates

> [!DEF] Logical statement
> A **statement** (or **proposition**) is a sentence that can be objectively established as true or false. Every statement is either true or false, never both: its **truth value** is T (true; in Italian V, *vero*) or F (false; *falso*).

Examples: "7 is an odd number" is a true statement; "10 is divisible by 4" is a false statement; "blue is the most beautiful colour" is not a statement (it is an opinion); "$x + 1 = 5$" is not yet a statement, because it depends on $x$.

> [!DEF] Predicate
> A **predicate** is a sentence that contains one or more variables: it becomes true or false only when you give the variables a value. Example: $P(x)$: "$x^2 > 4$", with $x \in \Z$. $P(3)$ is true, $P(1)$ is false.

### Quantifiers

> [!DEF] Quantifiers
> - $\forall$ is the **universal quantifier**, read "for every" (or "for all").
> - $\exists$ is the **existential quantifier**, read "there exists" (at least one).
> - $\exists!$ is read "there exists one and only one".

A predicate preceded by a quantifier becomes a statement, that is, it is true or false.

- $\forall x \in \R,\ x^2 \ge 0$: "every real number has a square greater than or equal to zero". True.
- $\exists x \in \N \mid x + 3 = 1$: "there exists a natural number which, added to 3, gives 1". False: you would need $x = -2$, which is not a natural number.
- $\exists x \in \Z \mid x^2 = 9$: true, and there are actually two values ($3$ and $-3$). "There exists" means **at least** one.
- $\exists!\, x \in \R \mid 2x + 1 = 7$: true, the only solution is $x = 3$. On the other hand, $\exists!\, x \in \Z \mid x^2 = 9$ is false, because there are two solutions.

The quantifier can also be written at the end: "$x^2 + 1 > 0,\ \forall x \in \R$" means the same as "$\forall x \in \R,\ x^2 + 1 > 0$".

> [!ESEMPIO] From words to quantifiers
> - "Every positive real number is the square of some real number": $\forall x \in \R,\ x > 0 \Rightarrow \exists y \in \R \mid y^2 = x$. True ($y = \sqrt{x}$ works).
> - "Between two different real numbers there is always a third one": $\forall a, b \in \R,\ a < b \Rightarrow \exists c \in \R \mid a < c < b$. True (for example the mean $c = \tfrac{a + b}{2}$).
> - "No natural number is negative": $\forall n \in \N,\ n \ge 0$, or, equivalently, $\lnot\left(\exists n \in \N \mid n < 0\right)$.

> [!TRAPPOLA] The order of the quantifiers matters
> "$\forall n \in \N\ \exists m \in \N \mid m > n$" says: for every natural number there is a larger one ($m = n + 1$ works). **True**.
> "$\exists m \in \N \mid \forall n \in \N,\ m > n$" says: there is a natural number larger than all natural numbers, itself included. **False**.
> Same symbols, different order, different meaning. Swapping two quantifiers **of the same type** (two "for every" or two "there exists"), on the other hand, changes nothing.

### Logical connectives

Starting from two statements $p$ and $q$, you build others with the **connectives**.

> [!DEF] The connectives
> - **Negation** $\lnot p$ ("not $p$"): true when $p$ is false, false when $p$ is true.
> - **Conjunction** $p \wedge q$ ("$p$ and $q$"): true only if $p$ and $q$ are **both** true.
> - **Inclusive disjunction** $p \vee q$ ("$p$ or $q$"): false only if $p$ and $q$ are **both** false.
> - **Exclusive disjunction** $p \,\dot{\vee}\, q$ ("either $p$ or $q$"): true if **exactly one** of the two is true.
> - **Implication** $p \Rightarrow q$ ("if $p$ then $q$"): false **only** if $p$ is true and $q$ is false. $p$ is called the **antecedent** (or hypothesis), $q$ the **consequent** (or conclusion).
> - **Biconditional** (double implication, or **logical equivalence**) $p \Leftrightarrow q$ ("$p$ if and only if $q$"): true if $p$ and $q$ have the **same** truth value. It means $p \Rightarrow q$ and also $q \Rightarrow p$.
>
> The **truth table** summarises all the cases:
>
> | | | not | and | or | either… or… | if… then | if and only if |
> |---|---|---|---|---|---|---|---|
> | $p$ | $q$ | $\lnot p$ | $p \wedge q$ | $p \vee q$ | $p \,\dot{\vee}\, q$ | $p \Rightarrow q$ | $p \Leftrightarrow q$ |
> | T | T | F | T | T | F | T | T |
> | T | F | F | F | T | T | F | F |
> | F | T | T | F | T | T | T | F |
> | F | F | T | F | F | F | T | T |

> [!NOTA] Why "if $p$ then $q$" is true when $p$ is false
> Think of a promise: "if you pass the exam, I'll give you a book". The promise is **broken** only if you pass the exam and the book does not arrive. If you do not pass the exam, whatever happens the promise has not been violated: the implication is true.

> [!PROP] Necessary and sufficient condition
> If $p \Rightarrow q$ is true:
> - $p$ is a **sufficient condition** for $q$: $p$ holding is enough for $q$ to hold;
> - $q$ is a **necessary condition** for $p$: without $q$ there cannot be $p$.
>
> If $p \Leftrightarrow q$ holds, each one is a **necessary and sufficient** condition for the other.

Example: "if a number is a multiple of 4, then it is even" is true. Being a multiple of 4 is **sufficient** for being even; being even is **necessary** for being a multiple of 4, but not sufficient (6 is even and is not a multiple of 4).

> [!PROP] The implications related to $p \Rightarrow q$
> | name | form | equivalent to the original implication? |
> |---|---|---|
> | converse (*inversa*) | $q \Rightarrow p$ | no |
> | inverse (*contraria*) | $\lnot p \Rightarrow \lnot q$ | no |
> | contrapositive (*contronominale*) | $\lnot q \Rightarrow \lnot p$ | **yes**, always |
>
> Example: "if a number is a multiple of 4, then it is even" is true; the contrapositive "if a number is not even, then it is not a multiple of 4" is true as well; the converse "if a number is even, then it is a multiple of 4" is false (counterexample: 6).

> [!ESEMPIO] Fixing a false implication
> "If $x^2 = 25$, then $x = 5$" ($x$ real) is false: with $x = -5$ the antecedent is true and the consequent is false.
> To make it true you can **widen the consequent**: "if $x^2 = 25$, then $x = 5$ or $x = -5$". Or you can **narrow the antecedent**: "if $x^2 = 25$ and $x > 0$, then $x = 5$".

### Negating a statement

> [!PROP] Negation rules
> | sentence | negation |
> |---|---|
> | $p \wedge q$ | $\lnot p \vee \lnot q$ |
> | $p \vee q$ | $\lnot p \wedge \lnot q$ |
> | $p \Rightarrow q$ | $p \wedge \lnot q$ |
> | $\forall x,\ P(x)$ | $\exists x \mid \lnot P(x)$ |
> | $\exists x \mid P(x)$ | $\forall x,\ \lnot P(x)$ |
> | $\lnot p$ | $p$ (double negation) |
> | $x > a$ | $x \le a$ |
> | $x \ge a$ | $x < a$ |
>
> The first two rows are **De Morgan's laws** of logic.

> [!ESEMPIO] Negations step by step
> - "The number is positive and odd" → "The number is **not** positive **or not** odd".
> - "I am going to the cinema or to the theatre" → "I am not going to the cinema **and** I am not going to the theatre".
> - "All trains are on time today" → "**At least one** train is **not** on time today" (and not "no train is on time").
> - "There exists an even prime number" → "**Every** prime number is odd", that is, no prime number is even.
> - "If I study, I pass the exam" → "I study **and** I do not pass the exam".
> - "Every student has at least one book" → "There exists a student who has no books".
> - "All participants are more than 18 years old" → "At least one participant is **at most** 18 years old": the negation of "more than 18" is "18 or less", not "less than 18".

> [!TRAPPOLA] The most common mistakes
> - Negating "all" with "none": the negation of "everyone passed" is "someone did not pass", not "nobody passed".
> - Forgetting to swap "and" with "or".
> - Negating $x > 5$ with $x < 5$: that way you lose the case $x = 5$. The correct negation is $x \le 5$.
> - Negating an implication with another implication: the negation of "if $p$ then $q$" is not "if $p$ then not $q$", but "$p$ and not $q$".

### Proofs and counterexamples

Many theorems have the form $H \Rightarrow T$: from the **hypotheses** $H$ follows the **conclusion** $T$ (*tesi*). Sometimes the "if… then…" is hidden: "the sum of two odd numbers is even" means "if $a$ and $b$ are odd, then $a + b$ is even".

To reason about even and odd numbers, use these forms: $n$ is **even** if $n = 2k$ with $k \in \Z$; $n$ is **odd** if $n = 2k + 1$ with $k \in \Z$.

> [!METODO] Direct proof
> You start from the hypotheses and, through valid steps, reach the conclusion.

> [!ESEMPIO] The sum of two odd numbers is even
> Hypothesis: $a = 2h + 1$ and $b = 2k + 1$ with $h, k \in \Z$ (two different letters: the two numbers are not necessarily equal). Then
> $$
> a + b = 2h + 1 + 2k + 1 = 2h + 2k + 2 = 2(h + k + 1)
> $$
> which is twice an integer: $a + b$ is even.

> [!METODO] Proof by contrapositive
> Instead of $H \Rightarrow T$ you prove $\lnot T \Rightarrow \lnot H$, which is equivalent. This is convenient when the negation of the conclusion is easier to use.

> [!ESEMPIO] If $a + b > 10$, at least one of the two numbers exceeds 5
> Here $a$ and $b$ are real numbers. Conclusion: "$a > 5$ or $b > 5$". Its negation, by De Morgan, is "$a \le 5$ and $b \le 5$".
> Contrapositive: if $a \le 5$ and $b \le 5$, then $a + b \le 10$. This is immediate: adding the two inequalities, $a + b \le 5 + 5 = 10$. The original statement is proved.

> [!METODO] Proof by contradiction
> Assume that the hypotheses **and** the negation of the conclusion are true; through valid steps you reach a **contradiction** (something impossible, or contrary to the hypotheses). So the negation of the conclusion cannot hold: the conclusion is true.
> When the contradiction is precisely with the hypothesis, you have derived $\lnot H$ from $\lnot T$: in practice you have proved the contrapositive $\lnot T \Rightarrow \lnot H$.

> [!ESEMPIO] There is no largest natural number
> Suppose, for the sake of contradiction, that there exists a natural number $M$ greater than or equal to every natural number. $M + 1$ is also a natural number, so $M \ge M + 1$ would have to hold, that is, $0 \ge 1$: contradiction. So no such $M$ exists.
> Another famous example of proof by contradiction is the irrationality of $\sqrt2$, in the part on numbers.

> [!DEF] Counterexample
> To show that a statement of the form "for every $x$, $P(x)$ holds", or "if $H$ then $T$", is **false**, a **counterexample** is enough: a single case that satisfies the hypotheses but not the conclusion.

> [!ESEMPIO] Three counterexamples
> - "Every prime number is odd": false, $2$ is prime and even.
> - "If $a^2 = b^2$ then $a = b$": false, with $a = 3$ and $b = -3$ we get $9 = 9$ but $3 \ne -3$.
> - "For every $x \in \R$, $x^2 \ge x$": false, with $x = \tfrac12$ we get $x^2 = \tfrac14 < \tfrac12$.

> [!TRAPPOLA] Examples are not proofs
> Checking a statement in 3, 10 or 1000 cases does not prove it: it could fail in the next case. The number $n^2 + n + 41$ is prime for $n = 0, 1, 2, \dots, 39$, but for $n = 40$ it equals $1681 = 41^2$. A single counterexample is enough to **disprove**; to **prove** you need an argument that works in every case.

### Logic and sets: the same language

> [!PROP] Dictionary between logic and sets
> If $A = \{x \in X \mid p(x)\}$ and $B = \{x \in X \mid q(x)\}$ are the sets where two predicates $p(x)$ and $q(x)$ hold, each connective corresponds to a set operation.
>
> | logic | sets |
> |---|---|
> | conjunction $p(x) \wedge q(x)$ | intersection $A \cap B$ |
> | inclusive disjunction $p(x) \vee q(x)$ | union $A \cup B$ |
> | exclusive disjunction $p(x) \,\dot{\vee}\, q(x)$ | symmetric difference $A \,\Delta\, B$ |
> | negation $\lnot p(x)$ | complement $\overline{A}$ |
> | $p(x) \Rightarrow q(x)$ true for every $x$ | inclusion $A \subseteq B$ |
> | $p(x) \Leftrightarrow q(x)$ true for every $x$ | equality $A = B$ |

De Morgan's laws for sets and for logic are the same rule written in two languages.

> [!ESEMPIO] From predicates to sets
> Universal set $X = \{1, 2, \dots, 10\}$, $p(x)$: "$x$ is even", $q(x)$: "$x > 6$". Then $A = \{2, 4, 6, 8, 10\}$ and $B = \{7, 8, 9, 10\}$.
> - "$x$ is even **and** greater than 6": $A \cap B = \{8, 10\}$.
> - "$x$ is even **or** greater than 6": $A \cup B = \{2, 4, 6, 7, 8, 9, 10\}$.
> - "**either** $x$ is even **or** it is greater than 6" (only one of the two): $A \,\Delta\, B = \{2, 4, 6, 7, 9\}$.
> - "$x$ is **not** even": $\overline{A} = \{1, 3, 5, 7, 9\}$.

> [!TEST] Sets and logic
> - **Negations**, for example as a multiple-choice question with one right answer out of four: apply the rules one word at a time and be wary of options with "none" instead of "at least one… not", with "and" not turned into "or", or with $<$ instead of $\le$.
> - **True/false on general statements**: look straight away for a counterexample with small numbers ($0$, $1$, $-1$, $\tfrac12$, $2$). If you find one, the answer is "false".
> - **Necessary or sufficient condition**: rewrite the sentence as "if… then…". What comes after "if" is sufficient, what comes after "then" is necessary.
> - **Sets** given by listing: write out the elements one by one, not at a glance. To count, use $|A \cup B| = |A| + |B| - |A \cap B|$.
> - **Power set**, for example as a numeric-answer question: $2^n$ subsets, including $\varnothing$ and the set itself.

## 1.2 Numbers

### Natural numbers

> [!DEF] Natural numbers
> $\N = \{0, 1, 2, 3, \dots\}$ is the set of **natural numbers**. It has infinitely many elements and the smallest is $0$.

Numbers are written in **positional notation** in base ten: you use the digits $0, 1, \dots, 9$ and the value of each digit depends on its position. For example $5037 = 5 \cdot 10^3 + 0 \cdot 10^2 + 3 \cdot 10 + 7$.

> [!ESEMPIO] Reasoning about digits
> What is the smallest three-digit number whose digits add up to 20?
> For the number to be small, the first digit (the hundreds) must be as small as possible. The other two digits add up to at most $9 + 9 = 18$, so the first digit is at least $20 - 18 = 2$. With the first digit equal to 2 you need two digits adding up to 18, that is, $9$ and $9$. The number is $299$.

In $\N$ the sum and the product of two natural numbers are always natural numbers.

> [!PROP] Properties of addition and multiplication
> For every $a$, $b$, $c$:
>
> | property | addition | multiplication |
> |---|---|---|
> | commutative | $a + b = b + a$ | $a \cdot b = b \cdot a$ |
> | associative | $(a + b) + c = a + (b + c)$ | $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ |
> | identity element | $a + 0 = 0 + a = a$ | $a \cdot 1 = 1 \cdot a = a$ |
>
> The **distributive property** links the two operations: $a(b + c) = ab + ac$.

The inverse operations, on the other hand, cannot always be carried out in $\N$: $3 - 5$ and $3 : 5$ are not natural numbers. To always be able to subtract, you move to the integers; to always be able to divide (by a non-zero number), to the rational numbers.

### Divisibility, prime numbers, gcd and lcm

> [!DEF] Divisors and prime numbers
> $a$ is **divisible** by $b$ ($b$ is a **divisor** of $a$, $a$ is a **multiple** of $b$) if $a = b \cdot k$ with $k$ an integer.
> A natural number $p > 1$ is **prime** if its only positive divisors are $1$ and $p$: $2, 3, 5, 7, 11, 13, 17, 19, 23, \dots$ The number $1$ is not prime and $2$ is the only even prime.

Useful tests without a calculator: a number is divisible by $2$ if its last digit is even; by $3$ (or by $9$) if the sum of its digits is divisible by $3$ (or by $9$); by $4$ if the number formed by its last two digits is; by $5$ if it ends in $0$ or $5$; by $10$ if it ends in $0$.

> [!PROP] Prime factorisation, gcd and lcm
> Every natural number greater than 1 can be written in **only one way** as a product of prime numbers (up to the order of the factors). Example: $360 = 2^3 \cdot 3^2 \cdot 5$.
> - **gcd** (greatest common divisor; in Italian *MCD*, *massimo comune divisore*): the product of the **common** prime factors, each with the **smallest** exponent.
> - **lcm** (least common multiple; in Italian *mcm*, *minimo comune multiplo*): the product of the prime factors, **common and non-common**, each with the **largest** exponent.
> - For two numbers, $\text{gcd}(a, b) \cdot \text{lcm}(a, b) = a \cdot b$.

> [!ESEMPIO] gcd and lcm of 84 and 90
> $84 = 2^2 \cdot 3 \cdot 7$ and $90 = 2 \cdot 3^2 \cdot 5$.
> $\text{gcd} = 2 \cdot 3 = 6$ and $\text{lcm} = 2^2 \cdot 3^2 \cdot 5 \cdot 7 = 1260$. Check: $6 \cdot 1260 = 7560 = 84 \cdot 90$.

### Integers

> [!DEF] Integers
> $\Z = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$: the natural numbers together with their **opposites**. The **opposite** (additive inverse) of $a$ is the number $-a$ such that $a + (-a) = 0$: the opposite of $4$ is $-4$, the opposite of $-7$ is $7$, the opposite of $0$ is $0$.

In $\Z$ subtraction can always be carried out: the equation $m + x = n$ always has the integer solution $x = n - m$. Division cannot: $2x = 3$ has no integer solutions.

> [!PROP] Sign rule and brackets
> In products and quotients: equal signs give $+$, different signs give $-$. So $(-3) \cdot (-4) = 12$, $(-3) \cdot 4 = -12$, $(-12) : (-4) = 3$.
> A bracket preceded by $-$ is removed by changing the sign of **all** the terms inside: $5 - (3 - x) = 5 - 3 + x = 2 + x$.

The **absolute value** $|a|$ is the distance of $a$ from $0$: it equals $a$ if $a \ge 0$ and $-a$ if $a < 0$. For example $|-7| = 7$ and $|7| = 7$.

### Rational numbers and fractions

> [!DEF] Rational numbers
> $\Q = \left\{ \dfrac{m}{n} \mid m, n \in \Z,\ n \ne 0 \right\}$ is the set of **rational** numbers: those that can be written as a **fraction** of two integers, with a non-zero denominator.

Every integer is rational ($5 = \tfrac51$), so $\Z \subset \Q$. In $\Q$ every non-zero number has a **reciprocal** (or inverse): the reciprocal of $\tfrac{a}{b}$ is $\tfrac{b}{a}$, because $\tfrac{a}{b} \cdot \tfrac{b}{a} = 1$. This is why the equation $ax = b$ with $a \ne 0$ always has the solution $x = \tfrac{b}{a}$. Zero has no reciprocal: **you cannot divide by zero**.

The same rational number can be written with infinitely many **equivalent fractions**: $\tfrac{a}{b} = \tfrac{a \cdot k}{b \cdot k}$ for every $k \ne 0$, for example $\tfrac23 = \tfrac46 = \tfrac{-10}{-15}$. A fraction is **in lowest terms** when the numerator and the denominator have no common divisors greater than 1; to reduce it, you divide both by their gcd: $\tfrac{84}{90} = \tfrac{14}{15}$ (dividing by 6).

> [!PROP] Operations with fractions
> $$
> \frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd} \qquad \frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd} \qquad \frac{a}{b} : \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c} \qquad \left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}
> $$
> When adding, it is best to use the **lcm** of the denominators as the denominator. To compare two fractions with positive denominators: $\tfrac{a}{b} < \tfrac{c}{d}$ if and only if $ad < bc$.

> [!ESEMPIO] An expression with fractions
> $$
> \left(\frac{5}{6} - \frac{3}{4}\right) : \frac{1}{8} = \left(\frac{10}{12} - \frac{9}{12}\right) \cdot 8 = \frac{1}{12} \cdot 8 = \frac{8}{12} = \frac{2}{3}
> $$
> The lcm of 6 and 4 is 12; dividing by $\tfrac18$ is the same as multiplying by $8$.

> [!TRAPPOLA] Classic mistakes with fractions
> - $\tfrac{a}{b} + \tfrac{c}{d}$ is **not** $\tfrac{a + c}{b + d}$: $\tfrac12 + \tfrac12 = 1$, not $\tfrac24$.
> - You cancel **factors**, not terms of a sum: $\tfrac{2 + 6}{2} = \tfrac82 = 4$, not $6$.
> - "Three quarters of 20" is $\tfrac34 \cdot 20 = 15$: a fraction of a quantity is a multiplication.

### Terminating and repeating decimals

Every fraction can be turned into a decimal number by dividing the numerator by the denominator. The result is of two kinds:
- **terminating decimal**: $\tfrac78 = 0.875$;
- **repeating decimal**: from some point on, a group of digits, the **period** (repetend), repeats for ever, and is marked with a bar over it: $\tfrac23 = 0.666\ldots = 0.\overline{6}$, $\tfrac{3}{11} = 0.\overline{27}$, $\tfrac56 = 0.8\overline{3}$ (here the digit $8$ between the decimal point and the period is called the **pre-period**, *antiperiodo*).

> [!PROP] Terminating or repeating?
> Reduce the fraction to lowest terms and factorise the denominator: if it contains **only** the prime factors $2$ and $5$, the decimal is **terminating**; if another prime appears as well, it is **repeating**.
> - $\tfrac{7}{40}$: $40 = 2^3 \cdot 5$, terminating ($0.175$).
> - $\tfrac{7}{30}$: $30 = 2 \cdot 3 \cdot 5$ contains 3, repeating ($0.2\overline{3}$).
> - $\tfrac{9}{12}$: first reduce it, $\tfrac{9}{12} = \tfrac34$, and $4 = 2^2$ gives a terminating decimal ($0.75$).

> [!METODO] From decimal to fraction: the fraction form (*frazione generatrice*)
> - **Terminating** decimal: write the number without the decimal point and divide by $1$ followed by as many zeros as there are digits after the point, then reduce: $2.35 = \tfrac{235}{100} = \tfrac{47}{20}$.
> - **Repeating** decimal: in the numerator put the number written without the decimal point and without the bar, minus the number formed by the digits before the period; in the denominator put as many $9$s as there are digits in the period, followed by as many $0$s as there are digits in the pre-period.
> $$
> 0.\overline{4} = \frac{4}{9} \qquad 1.\overline{36} = \frac{136 - 1}{99} = \frac{135}{99} = \frac{15}{11} \qquad 0.1\overline{6} = \frac{16 - 1}{90} = \frac{15}{90} = \frac16
> $$

> [!NOTA] Why the rule works
> With $x = 1.\overline{36}$ you get $100x = 136.\overline{36}$. Subtracting, $100x - x = 136.\overline{36} - 1.\overline{36} = 135$, so $99x = 135$ and $x = \tfrac{135}{99} = \tfrac{15}{11}$.
> The same trick shows that $0.\overline{9} = 1$: if $x = 0.\overline{9}$, then $10x - x = 9.\overline{9} - 0.\overline{9} = 9$, so $x = 1$.

### Percentages

> [!DEF] Percentage
> "$p$ per cent", written $p\%$, means $\tfrac{p}{100}$. $p\%$ of a quantity $x$ is $\tfrac{p}{100} \cdot x$: 15% of 80 is $0.15 \cdot 80 = 12$.

> [!PROP] Increases and discounts are multiplications
> - Increasing $x$ by $p\%$: $x \cdot \left(1 + \tfrac{p}{100}\right)$. A 20% increase is $\times 1.2$.
> - Decreasing $x$ by $p\%$: $x \cdot \left(1 - \tfrac{p}{100}\right)$. A 5% discount is $\times 0.95$.
> - Two changes in a row are **multiplied**, not added.
> - To go back to the initial value, you **divide** by the same factor.

> [!ESEMPIO] Three typical problems
> - What percentage of 60 is 21? $\tfrac{21}{60} = \tfrac{35}{100}$, that is, 35%.
> - A price of 50 euros rises by 10% and then falls by 10%: $50 \cdot 1.1 \cdot 0.9 = 50 \cdot 0.99 = 49.5$ euros. The final price is **lower** than the initial one, by 1%.
> - After a 20% discount an item costs 36 euros. Initial price: $0.8\,x = 36$, so $x = \tfrac{36}{0.8} = 45$ euros, and not $36 \cdot 1.2 = 43.2$ euros.

> [!TRAPPOLA] Percentages do not add up
> A 10% increase followed by a 10% decrease does not bring you back to the initial value. A 20% discount followed by another one of 30% does not make 50%: $0.8 \cdot 0.7 = 0.56$, that is, a total discount of 44%.

### Powers

> [!DEF] Power
> For $n$ natural, $n \ge 1$: $a^n = \underbrace{a \cdot a \cdots a}_{n \text{ times}}$; $a$ is the **base** and $n$ the **exponent**.
> For $a \ne 0$ we set $a^0 = 1$ and $a^{-n} = \dfrac{1}{a^n}$. Consequently $\left(\tfrac{a}{b}\right)^{-n} = \left(\tfrac{b}{a}\right)^{n}$.

> [!PROP] Properties of powers, with non-zero bases
> | rule | example |
> |---|---|
> | $a^m \cdot a^n = a^{m+n}$ | $2^3 \cdot 2^4 = 2^7$ |
> | $a^m : a^n = a^{m-n}$ | $5^6 : 5^4 = 5^2 = 25$ |
> | $(a^m)^n = a^{m \cdot n}$ | $(3^2)^3 = 3^6$ |
> | $a^n \cdot b^n = (a \cdot b)^n$ | $2^5 \cdot 5^5 = 10^5$ |
> | $a^n : b^n = (a : b)^n$ | $6^3 : 2^3 = 3^3 = 27$ |
> | $a^{-n} = \frac{1}{a^n}$ | $2^{-3} = \frac18$ |
> | $a^0 = 1$ | $(-7)^0 = 1$ |

> [!PROP] The sign of a power
> A negative base with an **even** exponent gives a positive result, with an **odd** exponent a negative one: $(-2)^4 = 16$, $(-2)^3 = -8$.
> Watch the brackets: $-2^4 = -(2^4) = -16$, whereas $(-2)^4 = 16$.

> [!TRAPPOLA] Powers do not add up
> - $2^3 + 2^4$ is not $2^7$: it equals $8 + 16 = 24$, whereas $2^7 = 128$.
> - $(a + b)^2$ is not $a^2 + b^2$ ($2ab$ is missing).
> - $2^3 \cdot 2^4 = 2^7$, not $4^7$: the base stays the same.
> - $(2^3)^2 = 2^6$, but $2^{3^2} = 2^9$.

> [!ESEMPIO] Bringing everything to the same base
> $$
> \frac{4^3 \cdot 8^{-1}}{2^5} = \frac{(2^2)^3 \cdot (2^3)^{-1}}{2^5} = \frac{2^6 \cdot 2^{-3}}{2^5} = 2^{6 - 3 - 5} = 2^{-2} = \frac14
> $$

Powers of 10 are used for **scientific notation**: a number is written as $c \cdot 10^n$ with $1 \le c < 10$. For example $3\,500\,000 = 3.5 \cdot 10^6$ and $0.00042 = 4.2 \cdot 10^{-4}$.

### Radicals

> [!DEF] Square root and $n$th root
> For $a \ge 0$, $\sqrt{a}$ is the number **greater than or equal to zero** whose square is $a$: $\sqrt{25} = 5$, not $\pm 5$ ("plus or minus 5"), even though $(-5)^2 = 25$ as well.
> More generally, $\sqrt[n]{a}$ is the number which, raised to the power $n$, gives $a$. With an **even** index $n$ you need $a \ge 0$ and the result is $\ge 0$; with an **odd** index any $a$ is fine: $\sqrt[3]{-8} = -2$.
> Roots can also be written as powers with a fractional exponent: $\sqrt[n]{a^m} = a^{m/n}$ (for $a > 0$). For example $8^{2/3} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$.

> [!PROP] Properties of radicals, with radicands greater than or equal to zero
> $$
> \sqrt{a} \cdot \sqrt{b} = \sqrt{ab} \qquad \frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}\ \ (b > 0) \qquad \sqrt{a^2 b} = a\sqrt{b}\ \ (a \ge 0) \qquad \sqrt{a^2} = |a|
> $$
> The last one holds for every real $a$: $\sqrt{(-3)^2} = \sqrt9 = 3 = |-3|$.

> [!METODO] Simplifying and adding radicals
> 1. Factorise the radicand, looking for the largest **perfect square** that divides it, and take it out of the root: $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt2$.
> 2. Add only **like** radicals (same index and same radicand), by adding the coefficients: $\sqrt{75} - \sqrt{12} = 5\sqrt3 - 2\sqrt3 = 3\sqrt3$.

> [!METODO] Rationalising the denominator
> - If the denominator is $\sqrt{b}$, multiply top and bottom by $\sqrt{b}$: $\dfrac{10}{\sqrt5} = \dfrac{10\sqrt5}{5} = 2\sqrt5$.
> - If the denominator is a sum or a difference containing a root, multiply by the **conjugate** (same terms, opposite middle sign) and use $(x - y)(x + y) = x^2 - y^2$:
> $$
> \frac{2}{\sqrt3 - 1} = \frac{2\left(\sqrt3 + 1\right)}{\left(\sqrt3 - 1\right)\left(\sqrt3 + 1\right)} = \frac{2\left(\sqrt3 + 1\right)}{3 - 1} = \sqrt3 + 1
> $$

> [!TRAPPOLA] The root of a sum
> $\sqrt{a + b}$ is not $\sqrt{a} + \sqrt{b}$: $\sqrt{9 + 16} = \sqrt{25} = 5$, whereas $\sqrt9 + \sqrt{16} = 7$. In the same way, $\sqrt{x^2 + 1}$ is not $x + 1$.

> [!METODO] Comparing numbers with roots without a calculator
> Of two **positive** numbers, the larger is the one with the larger square. $2\sqrt3$ or $3\sqrt2$? $\left(2\sqrt3\right)^2 = 12$ and $\left(3\sqrt2\right)^2 = 18$, so $2\sqrt3 < 3\sqrt2$.
> To estimate a root, look for the nearby squares: $\sqrt{50}$ lies between $7$ and $8$ because $49 < 50 < 64$, and it is very close to $7$. It is worth remembering $\sqrt2 \approx 1.41$, $\sqrt3 \approx 1.73$ and $\pi \approx 3.14$ (the symbol $\approx$ is read "approximately equal to").

### Irrational numbers

By Pythagoras' theorem, the diagonal of a square with side $1$ measures $\sqrt{1^2 + 1^2} = \sqrt2$. This number is **not** rational.

> [!ESEMPIO] $\sqrt2$ is irrational: proof by contradiction
> Suppose, for the sake of contradiction, that $\sqrt2 = \tfrac{m}{n}$, with $m$ and $n$ positive integers and the fraction in lowest terms (no common factor).
> Squaring: $2 = \tfrac{m^2}{n^2}$, that is, $m^2 = 2n^2$. So $m^2$ is even, and therefore $m$ is even too (the square of an odd number is odd). We write $m = 2k$.
> Substituting: $4k^2 = 2n^2$, that is, $n^2 = 2k^2$. So $n^2$ is even too, hence $n$ is even.
> But then $m$ and $n$ are both even and the fraction could still be simplified by 2: contradiction. So $\sqrt2 \notin \Q$.

> [!DEF] Irrational numbers
> An **irrational** number is a real number that cannot be written as a fraction of integers. Its decimal expansion is **infinite and non-repeating**: $\sqrt2 = 1.41421356\ldots$, $\pi = 3.14159265\ldots$, $e = 2.71828\ldots$ (**Euler's number**, also called Napier's constant).

> [!PROP] When a root is rational
> If $n$ is a natural number, $\sqrt{n}$ is rational only when $n$ is a **perfect square** ($\sqrt{49} = 7$); otherwise it is irrational: $\sqrt3$, $\sqrt5$, $\sqrt8$, $\sqrt{12}$ are irrational.
> For a positive rational $q$: $\sqrt{q}$ is rational if and only if $q$ is the square of a rational number. For example $\sqrt{\tfrac{9}{25}} = \tfrac35$.

> [!PROP] Operations between rational and irrational numbers
> - rational $+$ irrational is irrational: $1 + \sqrt2$;
> - non-zero rational $\times$ irrational is irrational: $3\sqrt2$;
> - the sum and the product of two irrational numbers can be rational: $\sqrt2 + \left(-\sqrt2\right) = 0$ and $\sqrt2 \cdot \sqrt8 = \sqrt{16} = 4$.

### Real numbers and ordering

> [!DEF] Real numbers
> $\R$ is the set of **real numbers**: the union of the rational and the irrational numbers. The real numbers correspond to the points of a line: once an **origin** (the point $0$), a **direction** and a **unit of length** have been fixed, each point corresponds to one and only one real number and vice versa. This is the **real line**.

In $\R$ all the properties of addition and multiplication seen so far hold: commutative, associative, identity element, opposite, reciprocal of non-zero numbers, distributive. In addition, $\R$ is **totally ordered**: given two real numbers $a$ and $b$, either $a \le b$ or $b \le a$ always holds. The relation $\le$ ("less than or equal to") is:
- **reflexive**: $a \le a$;
- **antisymmetric**: if $a \le b$ and $b \le a$, then $a = b$;
- **transitive**: if $a \le b$ and $b \le c$, then $a \le c$.

> [!PROP] Between two numbers there is always another one
> Between two different rational numbers there is always another rational number, for example their **mean**: between $\tfrac13$ and $\tfrac12$ there is $\tfrac12\left(\tfrac13 + \tfrac12\right) = \tfrac{5}{12}$. Repeating the argument, you find infinitely many.
> With decimals it is even quicker: between $2.71$ and $2.72$ there are $2.711$, $2.715$, $2.7199$ and infinitely many others.

> [!METODO] Ordering numbers written in different ways
> Bring everything to the same form (decimals with a few digits, or fractions with the same denominator) and then compare.
> Example: $\tfrac58$, $0.6$, $\tfrac23$, $\tfrac{\sqrt2}{2}$. As decimals: $\tfrac58 = 0.625$; $0.6$; $\tfrac23 = 0.\overline{6}$; $\tfrac{\sqrt2}{2} \approx 0.707$. So $0.6 < \tfrac58 < \tfrac23 < \tfrac{\sqrt2}{2}$.

### Intervals

> [!DEF] Intervals
> An **interval** is the set of real numbers between two endpoints $a < b$ (a segment of the line) or the set of real numbers greater than or less than a given number (a half-line). A **square** bracket means the endpoint is **included**, a **round** bracket means it is **excluded**. Half-lines involve the symbols $+\infty$ ("plus infinity") and $-\infty$ ("minus infinity").
>
> | interval | inequality | name |
> |---|---|---|
> | $[a, b]$ | $a \le x \le b$ | closed |
> | $(a, b)$ | $a < x < b$ | open |
> | $[a, b)$ | $a \le x < b$ | closed on the left, open on the right |
> | $(a, b]$ | $a < x \le b$ | open on the left, closed on the right |
> | $[a, +\infty)$ | $x \ge a$ | closed half-line |
> | $(a, +\infty)$ | $x > a$ | open half-line |
> | $(-\infty, b]$ | $x \le b$ | closed half-line |
> | $(-\infty, b)$ | $x < b$ | open half-line |
> | $(-\infty, +\infty)$ | any $x$ | all of $\R$ |

On the line, an included endpoint is drawn as a filled dot, an excluded one as an empty dot.

```retta
titolo: $[-2, 3)$: $-2$ included (filled dot), $3$ excluded (empty dot)
da: -4 5
int: [-2, 3)
```

> [!TRAPPOLA] Next to infinity there is a round bracket
> $+\infty$ and $-\infty$ are not real numbers, so they cannot be included: next to them there is always a round bracket. $[3, +\infty]$ is wrong notation.
> Some books write $]a, b[$ instead of $(a, b)$: it is the same thing.

> [!ESEMPIO] Union, intersection and complement of intervals
> $A = [-1, 4)$ and $B = (2, 6]$. Picture them one above the other on the line and read off the result.
> - $A \cap B = (2, 4)$: **both** conditions are required, $-1 \le x < 4$ **and** $2 < x \le 6$.
> - $A \cup B = [-1, 6]$: **one** of the two conditions is enough (the two intervals overlap, so there are no gaps).
> - $A \setminus B = [-1, 2]$: $2$ is in $A$ but not in $B$, so it stays.
> - $\overline{A} = \R \setminus A = (-\infty, -1) \cup [4, +\infty)$: $4$ is not in $A$, so it is in the complement.

```retta
titolo: The complement of $[-1, 4)$ is $(-\infty, -1) \cup [4, +\infty)$
da: -3 6
int: (-inf, -1)
int: [4, +inf)
```

This is De Morgan in action: the negation of "$x \ge -1$ **and** $x < 4$" is "$x < -1$ **or** $x \ge 4$".

### Inclusions between the number sets

Each number set contains the previous one: $\N \subset \Z \subset \Q \subset \R$. The irrational numbers are the real numbers that are not rational, that is, $\R \setminus \Q$.

```grafico
titolo: $\N \subset \Z \subset \Q \subset \R$, with a few examples in each region
x: -6 6
y: -3.5 3.5
assi: no
griglia: no
ellisse: -2.9 0 1.3 0.85
ellisse: -2 0 2.55 1.55
ellisse: -1 0 3.9 2.3
ellisse: 0 0 5.5 3.1 | rosso
testo: -2.9 0.3 | $\N$ | bianco
testo: -2.9 -0.35 | $0,\ 1,\ 7$
testo: -0.5 0.8 | $\Z$ | bianco
testo: -0.5 0 | $-3$
testo: 1.7 1.2 | $\Q$ | bianco
testo: 1.7 0 | $\tfrac34,\ 0.\overline{6}$
testo: 4.2 1.2 | $\R$ | bianco
testo: 4.2 0 | $\sqrt2,\ \pi$
```

> [!PROP] Which operations stay within the set
> The table shows which operations **always** give a result that stays in the same set ("no" means that in at least one case you leave the set: $3 - 5 \notin \N$, $2 : 3 \notin \Z$, $\sqrt2 \notin \Q$).
>
> | set | addition | subtraction | multiplication | division by a number $\ne 0$ | square root of a number $\ge 0$ |
> |---|---|---|---|---|---|
> | $\N$ | yes | no | yes | no | no |
> | $\Z$ | yes | yes | yes | no | no |
> | $\Q$ | yes | yes | yes | yes | no |
> | $\R$ | yes | yes | yes | yes | yes |

### From everyday language to formulas

Many problems ask you to translate a sentence into symbols.

> [!PROP] The most frequent translations
> | in words | in symbols |
> |---|---|
> | twice $x$; three times $x$ | $2x$; $3x$ |
> | half of $x$ | $\tfrac{x}{2}$ |
> | twice $x$, increased by 3 | $2x + 3$ |
> | twice the sum of $x$ and 3 | $2(x + 3)$ |
> | the square of the sum of $a$ and $b$ | $(a + b)^2$ |
> | the sum of the squares of $a$ and $b$ | $a^2 + b^2$ |
> | $a$ exceeds $b$ by 5 | $a = b + 5$ |
> | $a$ is three times $b$ | $a = 3b$ |
> | three consecutive integers | $n$, $n + 1$, $n + 2$ |
> | an even number; an odd number | $2k$; $2k + 1$, with $k \in \Z$ |
> | a multiple of 7 | $7k$, with $k \in \Z$ |
> | $x$ increased by 12% | $1.12\,x$ |
> | the reciprocal of $x$; the opposite of $x$ | $\tfrac{1}{x}$ (with $x \ne 0$); $-x$ |

> [!METODO] Translating a problem
> 1. Give a name (a letter) to each quantity and write down what it represents.
> 2. Translate each sentence of the text into an equation.
> 3. Work out the required quantity and check that it makes sense: a number of people or of months must be a natural number.

> [!ESEMPIO] Fixed cost plus usage-based cost
> A gym charges a joining fee of 40 euros plus 25 euros a month. If you have spent 290 euros in total, for how many months did you attend?
> With $m$ = number of months and $C$ = total spent in euros: $C = 40 + 25m$. Solving for $m$: $m = \dfrac{C - 40}{25}$. With $C = 290$: $m = \dfrac{250}{25} = 10$ months.
> The formula works for any total: with $C = 190$ euros, $m = \dfrac{150}{25} = 6$ months.

> [!TEST] Numbers
> - **Calculations without a calculator**, for example as a numeric-answer question: expressions with fractions and powers. Bring everything to the same base or the same denominator before doing the arithmetic.
> - **"Which of these numbers is rational (or irrational)?"**: simplify each option. $\sqrt{0.49} = 0.7$ and $0.\overline{3} = \tfrac13$ are rational, $\sqrt8 = 2\sqrt2$ is not.
> - **Percentages**, also as numeric-answer questions: always write the multiplying factor ($\times 1.2$, $\times 0.75$) instead of adding or subtracting percentages.
> - **Ordering**: bring the numbers to the same form; for roots, compare the squares.
> - **True/false on intervals**: "if $a$ and $b$ are in $(0, 1)$, is $a + b$ in it too?" False: $0.7 + 0.6 = 1.3$. The product $ab$, on the other hand, always stays in $(0, 1)$.
> - **Word problems**: first the formula with letters, then the numbers.

## Exercises

::: esercizio base Set operations
Let $X$ be the set of the letters of the Italian word MATEMATICA (mathematics) and $Y$ the set of the letters of the word STATISTICA (statistics). Write $X$ and $Y$ by listing, then compute $X \cap Y$, $X \cup Y$, $X \setminus Y$, $Y \setminus X$ and $X \,\Delta\, Y$.
::: soluzione
Each letter is written only once: $X = \{M, A, T, E, I, C\}$ and $Y = \{S, T, A, I, C\}$.
- $X \cap Y = \{A, T, I, C\}$ (the letters that appear in both words).
- $X \cup Y = \{M, A, T, E, I, C, S\}$.
- $X \setminus Y = \{M, E\}$ and $Y \setminus X = \{S\}$.
- $X \,\Delta\, Y = (X \setminus Y) \cup (Y \setminus X) = \{M, E, S\}$.

Check by counting: $|X \cup Y| = |X| + |Y| - |X \cap Y| = 6 + 5 - 4 = 7$, the same as the number of letters in the union.
:::

::: esercizio base Elements, subsets and power set
Let $X = \{0, 5, 9\}$.
1. Write all the elements of $\mathcal{P}(X)$.
2. Say whether these are true or false: $5 \in X$; $\{5\} \in X$; $\{5\} \subseteq X$; $\{5\} \in \mathcal{P}(X)$; $\varnothing \in \mathcal{P}(X)$; $\varnothing \in X$.
3. How many elements does the power set of a set with 6 elements have?
::: soluzione
1. $\mathcal{P}(X) = \{\varnothing, \{0\}, \{5\}, \{9\},$ $\{0, 5\}, \{0, 9\}, \{5, 9\}, X\}$: there are $2^3 = 8$ elements.
2. $5 \in X$: true. $\{5\} \in X$: false, the elements of $X$ are numbers, not sets. $\{5\} \subseteq X$: true. $\{5\} \in \mathcal{P}(X)$: true, because it is a subset of $X$. $\varnothing \in \mathcal{P}(X)$: true, $\varnothing$ is a subset of $X$. $\varnothing \in X$: false.
3. $2^6 = 64$.
:::

::: esercizio base A truth table
Complete the truth table of $\lnot p \vee q$ and compare it with that of $p \Rightarrow q$. What do you notice?
::: soluzione
| | | not | or | if… then |
|---|---|---|---|---|
| $p$ | $q$ | $\lnot p$ | $\lnot p \vee q$ | $p \Rightarrow q$ |
| T | T | F | T | T |
| T | F | F | F | F |
| F | T | T | T | T |
| F | F | T | T | T |

The last two columns coincide: $p \Rightarrow q$ is **equivalent** to $\lnot p \vee q$ ("not $p$, or $q$"). From this, with De Morgan, you also get the negation of the implication: $\lnot(\lnot p \vee q)$ is $p \wedge \lnot q$.
:::

::: esercizio base Which number set?
For each number, state the smallest of the sets $\N$, $\Z$, $\Q$, $\R$ that contains it, and say whether it is irrational:
$-6$, $\sqrt{36}$, $\tfrac94$, $\sqrt{10}$, $0.\overline{18}$, $-\tfrac{12}{3}$, $\pi - 1$, $\sqrt{0.01}$.
::: soluzione
- $-6$: $\Z$.
- $\sqrt{36} = 6$: $\N$.
- $\tfrac94 = 2.25$: $\Q$.
- $\sqrt{10}$: $10$ is not a perfect square, so it is irrational; it is in $\R$.
- $0.\overline{18} = \tfrac{18}{99} = \tfrac{2}{11}$: repeating, so rational; $\Q$.
- $-\tfrac{12}{3} = -4$: $\Z$ (the fraction is just a different way of writing an integer).
- $\pi - 1$: irrational minus rational gives an irrational number; it is in $\R$.
- $\sqrt{0.01} = 0.1 = \tfrac{1}{10}$: $\Q$.
:::

::: esercizio base Fractions and powers
Calculate without a calculator:
1. $\left(\dfrac34 + \dfrac16\right) \cdot \dfrac{8}{11}$
2. $\left(\dfrac23\right)^{-2} - 2^{-1}$
3. $\dfrac{9^2 \cdot 3^{-3}}{27^{-1}}$
::: soluzione
1. The lcm of 4 and 6 is 12: $\tfrac34 + \tfrac16 = \tfrac{9}{12} + \tfrac{2}{12} = \tfrac{11}{12}$. Then $\tfrac{11}{12} \cdot \tfrac{8}{11} = \tfrac{8}{12} = \tfrac23$.
2. $\left(\tfrac23\right)^{-2} = \left(\tfrac32\right)^2 = \tfrac94$ and $2^{-1} = \tfrac12 = \tfrac24$. Result: $\tfrac94 - \tfrac24 = \tfrac74$.
3. Everything in base 3: $9^2 = 3^4$ and $27^{-1} = 3^{-3}$. So $\dfrac{3^4 \cdot 3^{-3}}{3^{-3}} = 3^{4 - 3 + 3} = 3^4 = 81$.
:::

::: esercizio medio Negations
Write the negation of each sentence without using "it is not true that" and, when possible, say whether the sentence or its negation is true.
1. "All prime numbers are odd."
2. "There exists a real number $x$ such that $x^2 < 0$."
3. "Every student on the course has passed at least one exam."
4. "$x > -2$ and $x \le 7$."
5. "For every natural number, if it is divisible by 6 then it is divisible by 4."
::: soluzione
1. "There exists a prime number that is not odd." The negation is true: $2$ is prime and even.
2. "For every real number $x$, $x^2 \ge 0$." The negation is true: a square is never negative.
3. "There exists a student on the course who has not passed any exam." Two negations in one: "every" becomes "there exists… who does not", and "at least one exam" becomes "no exam". Here you cannot know which of the two is true.
4. "$x \le -2$ or $x > 7$": "and" becomes "or" and each inequality is negated. It depends on $x$, so it is neither true nor false until $x$ has a value.
5. "There exists a natural number divisible by 6 and not divisible by 4." The negation is true: $6$ is divisible by 6 and not by 4.
:::

::: esercizio medio Prove or disprove
For each statement, write a proof or a counterexample.
1. The sum of an even number and an odd number is odd.
2. If $n^2$ is divisible by 4, then $n$ is divisible by 4.
3. For every $x \in \R$ with $x \ne 0$, $x + \tfrac1x \ge 2$.
4. The product of two odd numbers is odd.
::: soluzione
1. True. With $a = 2h$ and $b = 2k + 1$ ($h, k \in \Z$): $a + b = 2h + 2k + 1 = 2(h + k) + 1$, which is odd.
2. False. Counterexample: $n = 2$. $n^2 = 4$ is divisible by 4, but $2$ is not.
3. False. Counterexample: $x = -1$ gives $x + \tfrac1x = -1 - 1 = -2 < 2$. (The statement becomes true if $x > 0$ is required.)
4. True. With $a = 2h + 1$ and $b = 2k + 1$: $ab = 4hk + 2h + 2k + 1 = 2(2hk + h + k) + 1$, which is odd.
:::

::: esercizio medio Decimals and fractions
1. Convert to a fraction in lowest terms: $0.\overline{45}$; $2.1\overline{6}$; $0.125$.
2. Without doing the division, say whether $\tfrac{11}{16}$ and $\tfrac{7}{15}$ have a terminating or a repeating decimal.
::: soluzione
1. $0.\overline{45} = \tfrac{45}{99} = \tfrac{5}{11}$. $2.1\overline{6} = \tfrac{216 - 21}{90} = \tfrac{195}{90} = \tfrac{13}{6}$. $0.125 = \tfrac{125}{1000} = \tfrac18$.
2. $16 = 2^4$ contains only the factor 2: terminating decimal ($\tfrac{11}{16} = 0.6875$). $\tfrac{7}{15}$ is already in lowest terms and $15 = 3 \cdot 5$ contains 3: repeating decimal ($0.4\overline{6}$).
:::

::: esercizio medio Radicals
1. Simplify $\sqrt{48} - \sqrt{27} + \sqrt{12}$.
2. Rationalise $\dfrac{6}{\sqrt3}$ and $\dfrac{4}{\sqrt5 + 1}$.
3. Put $3\sqrt2$, $2\sqrt5$, $\sqrt{17}$ in increasing order.
::: soluzione
1. $\sqrt{48} = \sqrt{16 \cdot 3} = 4\sqrt3$, $\sqrt{27} = \sqrt{9 \cdot 3} = 3\sqrt3$, $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt3$. Total: $(4 - 3 + 2)\sqrt3 = 3\sqrt3$.
2. $\dfrac{6}{\sqrt3} = \dfrac{6\sqrt3}{3} = 2\sqrt3$. For the second one, multiply by the conjugate: $\dfrac{4\left(\sqrt5 - 1\right)}{\left(\sqrt5 + 1\right)\left(\sqrt5 - 1\right)} = \dfrac{4\left(\sqrt5 - 1\right)}{5 - 1} = \sqrt5 - 1$.
3. They are all positive, so I compare the squares: $\left(3\sqrt2\right)^2 = 18$, $\left(2\sqrt5\right)^2 = 20$, $\left(\sqrt{17}\right)^2 = 17$. Order: $\sqrt{17} < 3\sqrt2 < 2\sqrt5$.
:::

::: esercizio medio Intervals
Let $A = [-3, 2)$ and $B = (0, 5]$. Compute $A \cap B$, $A \cup B$, $A \setminus B$, $B \setminus A$ and the complement of $B$ in $\R$. Represent $A \setminus B$ on the number line.
::: soluzione
- $A \cap B = (0, 2)$: you need $x > 0$ (to be in $B$) and $x < 2$ (to be in $A$).
- $A \cup B = [-3, 5]$.
- $A \setminus B = [-3, 0]$: $0$ is in $A$ but not in $B$ (it is excluded from $B$), so it stays.
- $B \setminus A = [2, 5]$: $2$ is not in $A$, so it stays.
- $\overline{B} = (-\infty, 0] \cup (5, +\infty)$.

```retta
titolo: $A \setminus B = [-3, 0]$
da: -5 6
int: [-3, 0]
```
:::

::: esercizio test Discounts and increases
1. After a 30% discount, a pair of shoes costs 63 euros. How much did they cost before the discount?
2. A subscription goes up by 20% and, the following year, by 10%. By what percentage has it gone up in total?
3. The price of a ticket was $x$ and it has gone up by 6%. Which expression gives the new price? (a) $x + 6$ (b) $0.06\,x$ (c) $1.06\,x$ (d) $1.6\,x$
::: soluzione
1. After the discount, 70% remains: $0.7\,x = 63$, so $x = \tfrac{63}{0.7} = \tfrac{630}{7} = 90$ euros.
2. The factors multiply: $1.2 \cdot 1.1 = 1.32$. The total increase is 32%, not 30%.
3. (c): $x + \tfrac{6}{100}x = (1 + 0.06)\,x = 1.06\,x$. Option (a) adds 6 euros, not 6%; (b) is only the increase; (d) corresponds to a 60% increase.
:::

::: esercizio test From sentence to formula
1. A shared bike costs 1 euro to unlock plus 0.25 euros per minute. Write the cost $C$ of a ride lasting $t$ minutes and find how long a ride costing 6.50 euros lasts.
2. Translate into symbols: "the square of the sum of two numbers exceeds the sum of their squares by 12". What can you say about the product of the two numbers?
::: soluzione
1. $C = 1 + 0.25\,t$. With $C = 6.5$: $0.25\,t = 5.5$, so $t = \tfrac{5.5}{0.25} = 22$ minutes.
2. Call the two numbers $a$ and $b$: $(a + b)^2 = a^2 + b^2 + 12$. Expanding, $a^2 + 2ab + b^2 = a^2 + b^2 + 12$, that is, $2ab = 12$: the product is $ab = 6$.
:::

::: esercizio test Counting with sets
In a group of 40 students, 25 attend the Programming course, 18 attend the Discrete Mathematics course and 7 attend neither. How many attend both courses? How many attend **only** Programming?
::: soluzione
Let $P$ be the set of those who attend Programming and $M$ the set of those who attend Discrete Mathematics. Those who attend at least one course: $|P \cup M| = 40 - 7 = 33$. From the formula $|P \cup M| = |P| + |M| - |P \cap M|$ we get $33 = 25 + 18 - |P \cap M|$, so $|P \cap M| = 43 - 33 = 10$.
Only Programming: $|P \setminus M| = 25 - 10 = 15$. Check: only Discrete Mathematics $18 - 10 = 8$, and $15 + 10 + 8 + 7 = 40$.
:::

::: esercizio test Necessary or sufficient?
Fill in with "necessary but not sufficient", "sufficient but not necessary", "necessary and sufficient" or "neither necessary nor sufficient" ($x$ is a real number, $n$ a natural number).
1. "$x > 5$" is a … condition for "$x > 3$".
2. "$x^2 = 16$" is a … condition for "$x = 4$".
3. "$n$ is even" is a … condition for "$n^2$ is even".
4. "$x > 0$" is a … condition for "$x^2 > 1$".
::: soluzione
1. Sufficient but not necessary: if $x > 5$ then $x > 3$; but $x = 4$ satisfies $x > 3$ without satisfying $x > 5$.
2. Necessary but not sufficient: if $x = 4$ then $x^2 = 16$; but $x^2 = 16$ also holds for $x = -4$.
3. Necessary and sufficient: if $n$ is even, $n^2$ is even; and if $n^2$ is even, $n$ is even (by contrapositive: if $n$ is odd, $n^2$ is odd).
4. Neither necessary nor sufficient: $x = \tfrac12$ is positive but $x^2 = \tfrac14 < 1$; $x = -2$ has $x^2 = 4 > 1$ but is not positive.
:::

::: esercizio test Knights and knaves
On an island live knights, who always tell the truth, and knaves, who always lie. You meet two inhabitants, $A$ and $B$. $A$ says: "At least one of the two of us is a knave". What are $A$ and $B$?
::: soluzione
Reason by cases, as in a proof by contradiction.
- If $A$ were a knave, their statement would be false, so neither of the two would be a knave, $A$ included: contradiction.
- So $A$ is a knight and the statement is true: at least one of the two is a knave, and it is not $A$. Therefore $B$ is a knave.

Answer: $A$ is a knight, $B$ is a knave.
:::

::: esercizio test True or false on numbers
Say whether each statement is true or false, giving reasons.
1. The sum of two irrational numbers is always irrational.
2. $\sqrt3 \cdot \sqrt{12}$ is a natural number.
3. There are no rational numbers between $0.25$ and $0.26$.
4. $0.\overline{9} = 1$.
5. If $a$ and $b$ belong to $(0, 1)$, then $a \cdot b$ also belongs to $(0, 1)$.
::: soluzione
1. False: $2 + \sqrt3$ and $2 - \sqrt3$ are irrational, but their sum is $4$.
2. True: $\sqrt3 \cdot \sqrt{12} = \sqrt{36} = 6$.
3. False: for example $0.255 = \tfrac{51}{200}$ lies in between, and in fact there are infinitely many.
4. True: with the fraction form, $0.\overline{9} = \tfrac99 = 1$.
5. True: if $0 < a < 1$ and $0 < b < 1$, multiplying $a < 1$ by $b > 0$ gives $ab < b < 1$, and $ab > 0$ because it is the product of two positive numbers.
:::

## Self-check quiz

```quiz
D: What is the negation of "All the enrolled students have handed in the assignment"?
+ At least one enrolled student has not handed in the assignment
- No enrolled student has handed in the assignment
- At least one enrolled student has handed in the assignment
- Exactly one enrolled student has not handed in the assignment
= "For every" is negated with "there is at least one that does not". "Nobody has handed it in" is much stronger than the negation; "exactly one" is too precise, because the negation is also true if two or ten students have not handed it in; "at least one has handed it in" can be true together with the original sentence.

D: What is the negation of "$x \ge 2$ and $x < 5$"?
+ $x < 2$ or $x \ge 5$
- $x < 2$ and $x \ge 5$
- $x \le 2$ or $x > 5$
- $x > 2$ or $x \le 5$
= By De Morgan, "and" becomes "or"; the negation of $x \ge 2$ is $x < 2$ and that of $x < 5$ is $x \ge 5$. With "and" the condition would not be true for any $x$.

D: True or false: if $A \subseteq B$, then $A \cap B = A$.
+ True
- False
= Every element of $A$ is also in $B$, so the common elements are exactly those of $A$. In the same way, $A \cup B = B$.

D: How many elements does the power set of $X = \{a, b, c, d\}$ have?
N: 16
= $X$ has 4 elements, so $\mathcal{P}(X)$ has $2^4 = 16$, including $\varnothing$ and $X$.

D: In which case is the implication $p \Rightarrow q$ false?
+ $p$ true and $q$ false
- $p$ false and $q$ true
- $p$ false and $q$ false
- $p$ true and $q$ true
= The implication is false only when the antecedent is true and the consequent is false; in the other three cases it is true.

D: The statement "if $n$ is a multiple of 6, then $n$ is even" is true. Which of the following are equivalent to it?
+ If $n$ is not even, then $n$ is not a multiple of 6
+ Being a multiple of 6 is a sufficient condition for being even
+ Being even is a necessary condition for being a multiple of 6
- If $n$ is even, then $n$ is a multiple of 6
- If $n$ is not a multiple of 6, then $n$ is not even
= The contrapositive (if $n$ is not even, then it is not a multiple of 6) is always equivalent; the sentences with "sufficient" and "necessary" are different ways of saying "if… then…". The converse (if $n$ is even, then it is a multiple of 6) and the inverse (if $n$ is not a multiple of 6, then it is not even) are not equivalent, and here they are false: $4$ is even but is not a multiple of 6.

D: Write $0.1\overline{6}$ as a fraction in lowest terms.
N: 1/6 ± 0.001
= Fraction form: $\tfrac{16 - 1}{90} = \tfrac{15}{90} = \tfrac16$.

D: Which of the following numbers is irrational?
+ $\sqrt{12}$
- $\sqrt{\tfrac94}$
- $0.\overline{12}$
- $\sqrt{0.25}$
= $\sqrt{12} = 2\sqrt3$ and $12$ is not a perfect square. The others are rational: $\sqrt{\tfrac94} = \tfrac32$, $0.\overline{12} = \tfrac{12}{99} = \tfrac{4}{33}$ (repeating), $\sqrt{0.25} = 0.5$.

D: After a 25% discount a jacket costs 60 euros. How many euros did it cost before the discount?
N: 80
= 75% of the price remains: $0.75\,x = 60$, so $x = 80$. Adding 25% of 60 to 60 (and getting 75) is the typical mistake.

D: True or false: the fraction $\tfrac{7}{12}$ has a terminating decimal representation.
- True
+ False
= $\tfrac{7}{12}$ is in lowest terms and $12 = 2^2 \cdot 3$ contains the factor 3: the decimal is repeating, $0.58\overline{3}$.

D: Which interval represents the set $\{x \in \R \mid -1 < x \le 4\}$?
+ $(-1, 4]$
- $[-1, 4)$
- $[-1, 4]$
- $(-1, 4)$
= $-1$ is excluded (strict inequality, round bracket), $4$ is included ($\le$, square bracket).

D: Which of the following statements are true?
+ $\N \subset \Z$
+ $0.\overline{3} \in \Q$
+ $\pi \in \R \setminus \Q$
- $\sqrt2 \in \Q$
- $-3 \in \N$
= $0.\overline{3} = \tfrac13$ is rational and $\pi$ is irrational, that is, it is in $\R$ but not in $\Q$. $\sqrt2$ is irrational; $-3$ is an integer but not a natural number.

D: Calculate $\dfrac{2^5 \cdot 4^{-2}}{8^{-1}}$.
N: 16
= Everything in base 2: $\dfrac{2^5 \cdot 2^{-4}}{2^{-3}} = 2^{5 - 4 + 3} = 2^4 = 16$.

D: What is $\sqrt{50} - \sqrt{18}$ equal to?
+ $2\sqrt2$
- $\sqrt{32}$
- $8\sqrt2$
- $2$
= $\sqrt{50} = 5\sqrt2$ and $\sqrt{18} = 3\sqrt2$, so the difference is $2\sqrt2$. $\sqrt{32} = 4\sqrt2$ comes from the mistake $\sqrt{a} - \sqrt{b} = \sqrt{a - b}$; $8\sqrt2$ is the sum; $2$ forgets the root.

D: Which expression translates "twice the sum of a number $x$ and 3"?
+ $2(x + 3)$
- $2x + 3$
- $x^2 + 3$
- $2 + x + 3$
= "Twice the sum": first the sum $x + 3$, then multiply by 2. $2x + 3$ is "twice $x$, increased by 3".

D: Which of the following statements is true?
+ $\forall x \in \R\ \exists y \in \R \mid y < x$
- $\exists y \in \R \mid \forall x \in \R,\ y < x$
- $\exists x \in \R \mid x^2 < 0$
- $\forall x \in \R,\ x^2 > 0$
= For every $x$, just take $y = x - 1$. With the quantifiers swapped, you would instead need a $y$ smaller than all real numbers, itself included: false. $\exists x \in \R \mid x^2 < 0$ is false because no square is negative; $\forall x \in \R,\ x^2 > 0$ is false for $x = 0$.
```

## Checklist

```checklist
I can tell $\in$ from $\subseteq$ and write a set by listing and with a property
I can compute intersection, union, difference, symmetric difference, complement and Cartesian product
I know that a set with $n$ elements has $2^n$ subsets and I can count with $|A \cup B| = |A| + |B| - |A \cap B|$
I can use $\forall$, $\exists$, $\exists!$ and I know that the order of the quantifiers matters
I can build the truth table of negation, conjunction, disjunctions, implication and biconditional
I can negate sentences with "and", "or", "for every", "there exists", "if… then"
I can recognise necessary and sufficient conditions, the contrapositive and the converse
I can prove directly, by contrapositive and by contradiction, and disprove with a counterexample
I can say which number set a number belongs to and whether it is rational or irrational
I can convert from fraction to decimal and back, including repeating decimals
I can apply the properties of powers, and simplify and rationalise radicals
I can calculate percentages, increases, discounts and successive changes
I can write and draw intervals and compute their union, intersection and complement
I can translate a word problem into a formula
```
