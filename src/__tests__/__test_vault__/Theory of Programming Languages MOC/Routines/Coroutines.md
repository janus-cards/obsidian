---
type: note
title: Coroutines
created: Thursday 12 Jan 2023
tags: 
---
> A generalisation of a [[Subroutine]] which allows for execution to be **suspended** and **resumed**. It represents a sequence of computations.

It plays an important part in [[Cooperative Multitasking]]

![[Pasted image 20230112103119.png]]

The main advantage is that you can write a chain of potentially asynchronous operations, but share state (local variables) across everything.

> [!Quote]
> The principal difference between coroutines and routines is that a coroutine enables explicit suspend and resume of its progress via additional operations by preserving execution state and thus provides an **enhanced control flow** (maintaining the execution context).

[[Characteristics of Coroutines]]
## Types:
- **Stackfull**
- **Stackless** - which puts everything on the heap.

[[C++ Coroutines]]
[[Boost Coroutines]]