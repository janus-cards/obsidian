---
type: note
title: Receiver (Sender Receiver)
created: Tuesday 14 Feb 2023
tags: 
---
> [!Quote]
> A receiver[](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2022/p2300r5.html#receiver) is a callback that supports more than one channel. In fact, it supports three of them:
> - `set_value`, which is the moral equivalent of an `operator()` or a function call, which signals successful completion of the operation its execution depends on;
> - `set_error`, which signals that an error has happened during scheduling of the current work, executing the current work, or at some earlier point in the sender chain; and
> - `set_stopped`, which signals that the operation completed without succeeding (`set_value`) and without failing (`set_error`). This result is often used to indicate that the operation stopped early, typically because it was asked to do so because the result is no longer needed.