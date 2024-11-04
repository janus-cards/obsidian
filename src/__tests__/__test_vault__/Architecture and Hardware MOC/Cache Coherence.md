---
type: note
title: Cache Coherence
created: Saturday 01 Jul 2023
tags: 
---
> [!IDEA]
> On a multicore system, the [[Memory Hierarchy]] may be such that cores will have their own private cache, thus giving the core a different view of the state of memory

> [!IDEA]
> **Cache Coherence** ensures that these out of sync views of memory remain in a **mutually consistent state**. The degree of consistency is dictated by the [[Memory Model]] but in general the state cannot be contradictory.

## Protocols
[[MESI Protocol]]