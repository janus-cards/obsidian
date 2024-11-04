---
type: note
title: Futures and Promises in C++
created: Wednesday 11 Jan 2023
tags: 
---

## Representation
The future and promise both point to some shared state that represents the channel over which they will communicate

![[Pasted image 20230111160913.png]]

## Problems:
- Expensive [[Synchronisation]] and [[Memory Allocation]]
- Future may already be in flight by the time you wish to specify a continuation, requiring [[Synchronisation]] in the form of [[Mutex]] which is unnecessary.

