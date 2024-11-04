---
type: note
title: Executors
created: Tuesday 10 Jan 2023
tags: 
---

> [!Quote]
> Executors are to function execution as [[Memory Allocator]]s are to [[Memory Allocation]]

A set of rules governing how, when and where a function object will run.

## Submitting Functions for Execution
[[Dispatch, Post, Defer]]

## Example (with associated rule):
- [[Thread Pool]] Executor- *Run the function in a thread from the pool and no where else*
- [[Strand]] ([[Adapter Pattern]]) - *Run all functions [[FIFO]] & serially and according to the rules of the underlying executor*