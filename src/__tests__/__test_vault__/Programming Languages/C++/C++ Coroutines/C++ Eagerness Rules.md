---
type: note
title: C++ Eagerness Rules
created: Thursday 12 Jan 2023
tags: 
---
For the rules in both the promise, we can specify rules for whether certain operations (like `initial_suspend`) cause the coroutine to suspend or not:

- `std::suspend_always`
- `std::suspend_never` 

These are in fact [[C++ Awaitable]]s.