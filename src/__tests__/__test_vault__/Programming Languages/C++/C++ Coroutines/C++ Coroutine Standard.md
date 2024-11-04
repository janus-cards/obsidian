---
type: note
title: C++ Coroutine Standard
created: Thursday 12 Jan 2023
tags: 
---
### `co_await`:
> [!QUOTE]
> - Ensures all local variables in the current function—which must be a coroutine—are saved to a heap-allocated object.
> - Creates a callable object that, when invoked, will resume execution of the coroutine at the point immediately following evaluation of the co_await expression. 
> - Calls (or more accurately jumps to) a method of co_await’s target object a, passing that method the callable object from step 2.
