---
type: note
title: Why use custom memory allocators
created: Monday 06 Mar 2023
tags: 
---
[[Memory Allocator]]

Benefits:
- Fewer calls to new and delete
- Reduce [[Thread Contention]]
- Reduce [[False Sharing of Cache]]
- Reduce [[Memory Diffusion]]