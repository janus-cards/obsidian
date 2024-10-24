---
type: note
title: Proactor Dynamics
created: Monday 09 Jan 2023
tags: 
---

![[Pasted image 20230109152056.png]]

## To initiate work to be done:
1) The client (**initiator**) asks for an [[Asynchronous Operations]] to be run. It does this be communicating with an **asynchronous operation processor** (which may be hidden by the framework behind a single free function call). It also passes a suitable [[Event Handler]] to be run on completion.
2) The processor will ask the kernel to initiate the operation and make a necessary note for later (such as the passed in event handler. It will return back to the initiator immediately. ( `spawn` for coroutines in [[Boost ASIO]])

## To do additional work on completion:
1) The client, in their event loop, will poll the [[Proactor]] asking if any events have completed. These can be found in the **completion event queue**
- Beforehand, the AO processor would have already received the **result** of the operation when the event came. This result would have been queued.
2) The Proactor fetches an event off the queue, then passes it to the demultiplexer / dispatcher to run the handler with the result. 