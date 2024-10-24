---
type: note
title: Weak Pointer
created: Friday 06 Jan 2023
tags: memory-management
---
A [[Smart Pointer]] which holds a reference to an object without having any ownership. It is effectively a demoted [[Shared Pointer]] which does not reference count.

The only way to access the data being referred is by **promoting** (lock) the weak pointer to a shared pointer. If the thing it points to no longer exists, then after locking and checking, we would know that it has been deleted.

Has all the benefits of [[Weak Reference]]


## Creating:
Because a weak pointer participates in a shared ownership of a resource (that is once it has been promoted), **the only way to create a weak pointer is from a reference to a shared pointer.**

## Implementation:
- A pointer to the control block of the [[Shared Pointer]] it was constructed from (so that it may be used)
- The **stored pointer** of the shared pointer it was created from (incase it was an aliasing shared pointer)