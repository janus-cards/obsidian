---
type: note
title: Reactor
created: Saturday 07 Jan 2023
tags: 
---

> [!IDEA]
>An event handling pattern (for a framework) in which user registered callbacks are invoked upon the indication of an event, polled upon the request of the user. It is very much a framework realisation of the [[Observer Pattern]]

We essentially ask the reactor to listen to sources of events and subscribe a handler to run upon the arrival of an event. These [[Initiation Events]] say that work can be performed should you choose to.

![[Pasted image 20230107234433.png]]

## Thoughts
- **Why is it considered synchronous**: It is considered synchronous as the operations performed, `read` for example, are invoked [[Synchronous Non-Blocking IO]]ly.
- **Why does the Reactor Pattern suffer from long operations times**: The pattern does not really have a notion of sequencing of operations or of state (as opposed to [[Proactor]]). This means that the logic of the routine can only really be dependent on a single indication event. In this way, even if an expensive IO operation (like read from socket) has been performed seemingly asynchronously, the callback may invoke an expensive [[Blocking IO]] operation (like read from disk) which is not passed to the reactor to do (it is passed to the proactor), but instead must be waited on. **This is the source of its disadvantages**
> [!Idea]
> By managing state (i.e. a received event represents another completed asynchronous operation in a sequences of steps to be performed), you can remove this synchronous disadvantage. However, reasoning become more state machine oriented even if the logic is very sequential. That is why I suggest using the [[Proactor]]

## Participants
- [[Handle (OS)]] and [[Handle Set]]
- [[Demultiplexer]]
- [[Event Handler]]
- The Reactor / Dispatcher

## Also:
- [[Reactor Dynamics]]
- [[Reactor.canvas|Reactor Mind Map]]
- 🔗: [Paper on Reactor](http://www.dre.vanderbilt.edu/~schmidt/PDF/reactor-siemens.pdf)