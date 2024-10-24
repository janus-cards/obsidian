---
type: note
title: Notation for Sequential Consistency
created: Friday 21 Apr 2023
tags: 
---

[[Consistency Model Mathematical Notation]]

> [!Important]
A memory order $<_m$ is sequentially consistent if and only if:
> 1. For each processor $p \in P$, the order of memory operations in $\textit{ops}(p)$ is consistent with the per-processor order relation, i.e., if $m_1 <_p m_2$, then $m_1 <_m m_2$.
> 2. The global memory order $<_m$ is a total order, meaning that for any two distinct memory operations $m_1$ and $m_2$, either $m_1 <_m m_2$ or $m_2 <_m m_1$.
