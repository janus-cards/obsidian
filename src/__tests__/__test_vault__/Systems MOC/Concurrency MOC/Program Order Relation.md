---
type: note
title: Program Order Relation
created: Friday 21 Apr 2023
tags: 
---
> [!Important]
> A statement which will execute before another on the same thread (usually coming before the other in the source)
- Also called **Sequenced Before** relation in C++.
- Also called [[Order of Execution]]

---
**Memory operations** that are executed on a thread are comparable to each other for program order but not to memory operation on another thread. Instead, we can compare the [[Order of Visibily]] of those operations.