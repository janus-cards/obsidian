---
type: note
title: Monotonic Buffer Resource
created: Monday 06 Mar 2023
tags: 
---
A [[C++ Memory Resource]] that only releases the allocated memory when the resource is destroyed. **It is very fast in the situation where you need to allocate some objects and then don't care about releasing all in one go**

> [!IDEA]
> It is [[Monotonic]] because the number of elements allocated only grows. There is no resource of the existing resources. It will use an `upstream_resource` to allocate new buffers


> [!Important]
> Is a [[Linked List]] of buffers whose size increases with a [[Geometric Progression]]