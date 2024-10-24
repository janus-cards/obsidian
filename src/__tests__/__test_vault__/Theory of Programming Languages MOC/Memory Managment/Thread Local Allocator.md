---
type: note
title: Thread Local Allocator
created: Monday 06 Mar 2023
tags: 
---
A type of [[Memory Allocator]]

 [!Important]
> Does not mean the memory is thread local but rather the allocated memory will have better locality as the allocator for the thread reserves its own block.


Also see [[Why use custom memory allocators]]