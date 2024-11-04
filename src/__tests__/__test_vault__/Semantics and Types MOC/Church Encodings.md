> Title ❕: **Church Encodings**
> Created 📅: **Monday 18 Oct 2021 17:38**
  Tags 📎: #type-theory #theory/computation

### Summary ⌛:
Ways of encoding data in the (polymorphic) lambda calculus.

### Natural Numbers
##### In Untyped Lambda Calculus
$\lambda s. \lambda z. s \;s \; s\; z$
The **iter** function (which is really juts [[Primitive Recursion]]) can be defined as applying/setting s (for succ) and z (for zero) to appropriate terms.

### Lists
##### In Untyped Lambda Calculus
$\lambda c. \lambda n. c\; e \; (xs \; c \; n)$  where xs is the encoding for the rest of the list, and e is the new head.
The **fold** function can be defined as applying/setting c (for cons) and n (for nil) to appropriate terms.