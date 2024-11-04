---
type: note
title: Unified Executor Proposal for C++
created: Wednesday 11 Jan 2023
tags: paper
---
[Paper](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2020/p0443r14.html)
Main points:
- Defines what [[Execution Agents]], [[Executors]] and [[Execution Context (C++ Executors)]] are.
- Executing and using **properties** to specific rules for scheduling and dispatching
- A [[Sender and Receiver Pattern]] as solution for [[Creating Asynchronous Pipelines]]

## Ideas:
**Sender** - A lazy value ([[Futures and Promises|Future-like]])
	It is some unit of work that needs completing. Often set up in [[Continuation Passing Style]] so that the receiver is passed into the sender to start the work
**Receiver** - A continuation for when the work is done ([[Futures and Promises|Promise-like]])
**Scheduler** - A handler to the executor resource. A **one shot factory for creating senders**

![[Pasted image 20230113101347.png]]
*Note this definition requires the use of [[C++ Friends]] to implement and allow for [[Open Closed Principle]]*

---
See [for code](https://godbolt.org/z/dnrabsbdq)
[CPPCon](https://www.youtube.com/watch?v=tF-Nz4aRWAM&t=210s)
[Code up](https://www.youtube.com/watch?v=xiaqNvqRB2E)