---
type: note
title: Polymorphic Memory Allocator
created: Monday 06 Mar 2023
tags: 
---
It is a [[Memory Allocator]]
A **runtime** [[Polymorphism]] memory allocator that delegates its allocations to [[C++ Memory Resource]]

> [!Idea]
> It is polymorphic because it uses the memory resource [[Class Hierarchy]] in order to defer how it allocates to runtime. Any objects (like vector or string) that uses a polymorphic allocator has the same type as another from its class regardless of the particular instantiation of `polymorphic_allocator`. 
