---
type: note
title: Sender and Receiver Pattern
created: Wednesday 11 Jan 2023
tags: 
---
## Definitions:
- [[Execution Context (C++ Executors)]] - abstractly defines [[Context]] of work
- [[Scheduler (Sender Receiver)]] - creates a sender on an execution context
- [[Sender (Sender Receiver)]] - [[Encapsulation|encapsulate]] **work** to be done (without a target for delivering that work)
- [[Receiver (Sender Receiver)]] - the destination for work
- **Connect** - Joins a sender to a receiver producing an operation state.
- **Operation State** - Unit of work that has a target destination.
- **Start** - Initiate the operation.
![[Pasted image 20230113101347.png]]
## Ideas:
- Principle of [[Futures and Promises]] in terms of flow of data (source and sink)
- Uses [[Continuation Passing Style]].
- An [[Asynchronous]] version of [[Stream Abstraction]]

> [!Idea]
> A sender represents work, a receiver represents the terminal destination for that work

## Origins
- [[Unified Executor Proposal for C++]] 
- [[P2300 std execution]]
---
[[The Sender Receiver Pattern for Synchronous Pipelines]]