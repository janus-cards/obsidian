---
type: note
title: The Async Interface
created: Thursday 12 Jan 2023
tags: 
---
> With the goal of finding the equivalent of [[C++ Iterator Abstraction]] for asynchronous algorithms


## Goals:
- [[Composable]] and **sequentiable**
- Low overhead
- Works with all forms of execution: [[Coroutines]], [[Fibers]], [[Thread]]s + execution environments ([[Thread Pool]] and [[GPU]]s)

See [[Unified Executor Proposal for C++]]