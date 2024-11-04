---
type: note
title: Cost of Virtual Method Dispatch
created: Monday 13 Mar 2023
tags: review
sr-due: 2023-05-29
sr-interval: 11
sr-ease: 320
---

There is a small cost with virtual methods regarding the indirection / branch costs:
- Cost of two indirections
- [[Branch Misprediction]] if you keep on flipping between implementations called.

> [!Important]
> The main cost is the inability to [[Inline Optimizations]]