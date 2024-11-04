---
type: note
title: As-if Rule
created: Monday 09 Jan 2023
tags: 
---

Allow any and all transformations in the implementation that do not change the observable behaviour of the program.

> [!Quote]
> Thou shalt not modify the behavior of a single-threaded program.

## Exceptions
- Program with [[Undefined Behaviour]] - all bets are called off and the compiler can do whatever.
- [[Copy Elision]]
- [[Return Value Optimization]]