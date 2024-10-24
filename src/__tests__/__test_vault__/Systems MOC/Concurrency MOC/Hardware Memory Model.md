---
type: note
title: Hardware Memory Model
created: Friday 14 Apr 2023
tags: 
---
> [!IDEA]
> At the hardware level, a memory model describes the behavior of memory operations executed by a processor or a group of processors in a shared-memory system. It defines how memory operations are ordered, buffered, and propagated between different processor cores or caches, ensuring that the system behaves consistently from the programmer's perspective.

Hardware memory models can range from very **strong models, which impose strict ordering constraints on memory operations, to more relaxed models that allow for greater flexibility and performance optimizations**. Some common types of hardware memory models include:

- [[Sequential Consistency]]: This is the strongest and most intuitive memory model, where all memory operations appear to execute in a single, total order that is consistent across all threads. However, it can be restrictive for performance optimizations.
- [[Total Store Order]] This is a weaker memory model used by x86 processors, where loads can be reordered with respect to preceding stores but not with respect to subsequent stores. This allows for some performance optimizations while still providing a relatively strong consistency model.
- [[Relaxed Memory Models]]: Some architectures, such as ARM and PowerPC, implement even more relaxed memory models that allow for greater reordering of memory operations. These models often require explicit memory barriers or synchronization instructions to enforce ordering constraints when necessary.