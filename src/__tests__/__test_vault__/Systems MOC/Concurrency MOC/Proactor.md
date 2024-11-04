---
type: note
title: Proactor
created: Sunday 08 Jan 2023
tags: 
---
> [!Idea]
> The Proactor is another event driven pattern in which asynchronous operations are invoked by the user who also passed a callback to be run on completion of the operation. When operations have been completed, they are enqueued and eventually the corresponding callbacks are dispatched when the client asks the Proactor to poll.
> 


> [!Important]
> As opposed to the reactor, the work has already been completed upon running the completion handler, so you typically also have a result that you may use.


## Participants:
- **Initiator** - the client when they want an action to be run
- [[Asynchronous Operations]] - these are in the OS kernel.
- **Asynchronous Operation Processor** - a processor (kind of like a manager) of the asynchronous operations that may execute them and then be in charge of dealing with them once the work is done.
- [[Handle (OS)]]
- [[Event Handler]] - called the **Completion Handler**
- **Proactor**
- [[Demultiplexer]]
- Event [[Queue]]

![[Pasted image 20230109152041.png]]

The [[Asynchronous Completion Token]] pattern can be used orthogonally and along side this pattern.

---
- [[Proactor Dynamics]]
- [[Proactor Tradeoffs]]
- [[Transform Reactor to Proactor]]
- [[Using IO Completion Ports to implement Proactor]]
- Used by [[Boost ASIO]]