---
type: note
title: Sender (Sender Receiver)
created: Tuesday 14 Feb 2023
tags: 
---
> [!Quote]
> A **sender** is an object that describes work. Senders are similar to futures in existing asynchrony designs, but unlike futures, the work that is being done to arrive at the values they will _send_ is also directly described by the sender object itself. A sender is said to send some values if a receiver connected (see [§ 5.3 execution::connect](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2022/p2300r5.html#design-connect)) to that sender will eventually _receive_ said values.

> [!IDEA]
> Can be thought of as a Lazy Value - analogous to a [[Futures and Promises|Future]]

## Composability:
Composable through **sender algorithms**:
- [[Factory Pattern|Factories]]: () -> Sender (also called a [[Scheduler (Sender Receiver)]]): 
	- Like `just` and `schedule`
- [[Adapter Pattern|Adapters]]: Sender -> Sender: 
	- Like `then`
- **Terminal / Consumer**: Sender -> ():
	- Like `sync_wait`