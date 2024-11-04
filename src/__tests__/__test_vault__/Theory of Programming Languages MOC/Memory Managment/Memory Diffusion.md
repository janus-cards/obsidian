---
type: note
title: Memory Diffusion
created: Monday 06 Mar 2023
tags: 
---
([[Memory Allocation]]) Allocated objects may be tightly packed but the logical grouping of those objects may be scattered.

For example, if many threads are adding elements to their own linked list, then consecutive elements in those lists will probably have poor [[Memory Locality]]

> [!Important]
> Not the same as [[Memory Fragmentation]]


> [!IDEA]
> To avoid, **increase memory contiguity**