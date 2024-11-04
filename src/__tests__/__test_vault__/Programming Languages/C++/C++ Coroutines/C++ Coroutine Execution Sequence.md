---
type: note
title: C++ Coroutine Execution Sequence
created: Thursday 12 Jan 2023
tags: 
---

## In calling the coroutine:
Imagine we were to call `count_up()`
```C++
Handle count_up(){
for(int i =0;...)
{
	co_yield i;
}
}
```

1) Allocates **coroutine state** and fills with what the compiler thinks it needs from the code above.
3) A promise object is created (the compiler figure) according to `Handle::promise_type` and saved in the *coroutine state*
4) The handle is created from the promise.
5) `intial_suspend` is called from the promise. ([[C++ Eagerness Rules]])

**This creates a coroutine handle**

## In executing the coroutine:
When the coroutine is resumed (`resume` the handle), it will execute until it reaches a **suspension point** (a co_something).

##### co_await:
In general:
- You `co_await` a [[C++ Awaitable]] or if it is not an awaitable, the promise will try to convert it with `promise.await_transform`;
- The rules are governed by the awaitable.
- If the `await_ready()` is true, do nothing
- If false, suspend coroutine and run the `await_suspend` on the awaitable

Once the coroutine is resumed, `await_resume` is called on the awaitable.

> [!Note]
> There are lots of conditions depending on how the awaitable's rules are set up.

#### co_yield and co_return:
Using the rules set out in the promise, `yield_value` and `yield_return` will be run and the coroutine will suspend etc.