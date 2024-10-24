---
type: note
title: Boost ASIO
created: Monday 09 Jan 2023
tags: 
---

## Relation with [[Proactor]]
- Proactor - **execution contexts** like io_context
- Asynchronous Operation Processors - **services**
- Event Handlers - [[Asynchronous Completion Token]]
- Result - usually written into a buffer
- Queue - stored and managed in the service
	- Dequeing envolves `use_service<Service>()` to get the service, and then get the queue from it.

- [[Execution Context (C++ Executors)]]
- [[Executors]]

## Strands:
> A strand is defined as a strictly sequential invocation of event handlers (i.e. no concurrent invocation).

> [!Invariants]
> 1) Completion handlers posted through the strand will never execute concurrently.
> 2) Handler A gets invoked before Handler B <=> A will get posted before handler B through the strand


There are implicit strands (a chain of asynchronous operations is run serially by [[Causality]]) or explicit with `strand`

> [!Thought]
> A strand is like a person playing a shuffled spotify playlist. When they press play, they hear each song to completion in no particular order. Someone else in the world may be listening to their paylists and there is no guarantee how this will be synchronised with our person listening to music; all we can say is that only the person's playlist will be listened to **serially**

> You should use `boost::asio::bind_executor` function to wrap a completion handler into a strand.

> You can also use `boost::asio::post` function with `io_context::strand` to execute your functors within a given strand

**It is a templated executor wrapper**