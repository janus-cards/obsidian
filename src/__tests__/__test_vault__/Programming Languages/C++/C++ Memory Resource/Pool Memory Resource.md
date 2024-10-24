---
type: note
title: Pool Memory Resource
created: Monday 06 Mar 2023
tags: 
---
Has the following properties:
- Releasing the resource deallocates everything (just like [[Monotonic Buffer Resource]])
- Is a set of [[Pool]]s that store a collection of chunks of **uniform size**. For example, ~8 byte pool or 32 byte pool.
- Allocating an object involves placing it in the **smallest pool whose chunks are just large enough to accommodate the object**
- Exceeding pools will cause the pool to grow by using the [[Upstream Memory Resource]]
- 
> [!Important]
> Comes in [[Synchronisation|synchronised]] and **unsyncrhonised** versions

Can be parameterised with `pool_options`