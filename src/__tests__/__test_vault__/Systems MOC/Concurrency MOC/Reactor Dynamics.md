---
type: note
title: Reactor Dynamics
created: Saturday 07 Jan 2023
tags: 
---
_Notice where the client code sits and where the framework / reactor sits_:
1. The **client** registers an implementation of an event handler with the **reactor**.
	1. The [[Event Handler]] has a notion of what [[Handle (OS)]] it wants to listen to (it may even abstract the OS handle for a higher level perspective).
2. In the event loop (often defined and controlled in the framework), the **reactor** is asked to look at all its handles (its [[Handle Set]] which was aggregated by `getHandle` on all the registered handlers) and see if any [[Events (concurrency)]] have occurred. 
3. All events that occur are then demultiplexed and all the corresponding event handlers are dispatched.
![[Pasted image 20230107234547.png]]
![[Pasted image 20230107234627.png]]