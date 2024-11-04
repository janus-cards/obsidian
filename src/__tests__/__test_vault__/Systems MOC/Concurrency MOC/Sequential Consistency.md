---
sr-due: 2023-05-18
sr-interval: 3
sr-ease: 300
type: note
title: Sequential Consistency
created: Friday 14 Apr 2023
tags: review
---
> [!IDEA]
> One can consider a global [[Order of Execution]] (a serialisation of all the threads' execution) and this is equal to the [[Order of Visibility]]


> [!IDEA]
> The execution order of a program in the same processor (or thread) is the same as the [[Program Order Relation]], while the execution order of a program on different processors (or threads) is undefined (but total).

> [!Important]
> There is single global memory and a "switch" that connects an arbitrary processor to memory at any time step. Each processor issues memory operations in **program order** and the switch provides the global serialization among all memory operations
> ![[Rsz_selection_055.png]]

- No instruction reordering within a processor.
## Formal Treatment

> [!IDEA]
> 1. All memory operations (on possibly different variables and or different/same threads) are ordered with respect to one another.

[[Notation for Sequential Consistency]]