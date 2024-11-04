---
type: note
title: Networking TS
created: Wednesday 11 Jan 2023
tags: 
---
Takes it origin from [[Boost ASIO]], and makes use of the [[Executors]] Model ([[Unified Executor Proposal for C++]])

> [!Quote]
> Executors provide a uniform interface for work creation by abstracting underlying resources where work physically executes. The previous code example’s underlying resource was a thread pool. Other examples include SIMD units, GPU runtimes, or simply the current thread. In general, we call such resources **execution contexts**. As lightweight handles, executors impose uniform access to execution contexts. Uniformity enables control over where work executes, even when it is executed indirectly behind library interfaces.

