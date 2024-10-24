---
type: note
title: C++ Awaitable
created: Thursday 12 Jan 2023
tags: 
---
Similar to a coroutine **promise** in the sense that it manages the rules that the compiler will use to generate the coroutine.

> [!Quote]
> The **Awaitable** interface specifies methods that control the semantics of a `co_await` expression. When a value is `co_await`ed, the code is translated into a series of calls to methods on the awaitable object that allow it to specify: whether to suspend the current coroutine, execute some logic after it has suspended to schedule the coroutine for later resumption, and execute some logic after the coroutine resumes to produce the result of the `co_await` expression.

> [!Important]
> There are two terms: **Awaiter** and **Awaitable**. The **Awaiter** specifies the await semantics, while an **Awaitable** is something that supports the `co_await` operator and gives you an **Awaiter**. In most cases, we can think just in terms of **Awaiters**

> [!Idea]
> The Awaiter determines the rules for **waiting** on the value of an expresion, like the [[Executors]] determine rules for **executing**

## Abstractly
If we have an awaitable, we can:
- Can check if we are done waiting
- the rule for suspending
- the rule for resuming and **evaluating to the value of the expression**

## In C++
Here, the rules are for:
- `await_ready` -> determines if the wait is over
- `await_suspend(handle)` -> There are lots of overloads to this and different signatures each with different semantics (such as when it returns another coroutine handle).
- `await_resume` -> when the coroutine is unsuspended, this is run and returns T, which is the value that `co_await awaitable` reduces to.

---
- 🔗: [Blog on co_await](https://lewissbaker.github.io/2017/11/17/understanding-operator-co-await)