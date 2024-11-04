---
sr-due: 2024-06-25
sr-interval: 407
sr-ease: 340
---

---
type: note
title: Contextualised Computation
created: Thursday 15 Sep 2022
tags: review computation-theory 
sr-due: 2023-04-13
sr-interval: 60
sr-ease: 320
---
Systems may be **closed**, in which case they always behave the same. But we can create [[Open Systems]] which depend on the [[Context]] in which they are placed.

We differentiate these two by [[Impure Computation]] vs [[Pure Computation]]

For example:
- Execution may depend on external state. (Impure code)
- [[Agents and Environments]]

## In Programming
- [[Monad]]s provide a good abstraction for this.
- [[Program Context]]
- [[Execution Context (C++ Executors)]]
- One may construct a pure function from an impure one by explicitly passing in the context. [[Strange Loop]]

