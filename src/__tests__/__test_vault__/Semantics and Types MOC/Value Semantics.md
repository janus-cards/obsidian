---
type: note
title: Value Semantics
created: Wednesday 14 Dec 2022
tags: 
---
**Only the value of the object matters and not its identity**. This is made possible by a semantics that creates copies upon assignment or passing a variable as an argument. 

[[Immutable]] objects trivially have value semantics as copies must be taken so that they do not mutate.

Value semantics is easy when state is plain, but whenever state involves resources that should be unique, or pointers, it becomes very tricky.

# Pros:
- By default in C++
- Fewer side effects
- Better for concurrency as each thread having its own copy avoid races.
- [[Referential Transparency]]

## Cons:
- More costly
- Problematic with pointers
- Competes with the idea of [[Resource Ownership]] as resources are typically not copyable.

## Compared to:
[[Reference Semantics]]
[[Move Semantics]] 