---
type: note
title: Modification Order in C++
created: Wednesday 21 Jun 2023
tags: 
---
> [!Important]
> For any particular atomic variable, it is guaranteed that all modifications appear in a total order, regardless of the type of operation and its memory_ordering

We can consider the modification order as a log of the values a variable takes.
