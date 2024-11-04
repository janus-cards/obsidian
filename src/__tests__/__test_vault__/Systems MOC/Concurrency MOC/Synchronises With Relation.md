---
sr-due: 2023-05-16
sr-interval: 1
sr-ease: 280
type: note
title: Synchronises With
created: Friday 14 Apr 2023
tags: review
---
> [!IDEA]
> Essentially whether two operations on shared data happens before the other when the operations are on different threads.


> [!Important]
> A way to establish a [[Partial Ordering]] between **operations** on **different** [[Thread]]s at **runtime**.
> [[Program Order Relation]] establishes the rest of the [[Happens Before Relation]] on the same thread.

This relationship is typically defined by the [[Memory Model]]

[[Ways of Achieving Synchronises With Relation]]

### Technical Definition:
- Firstly, synchronises with is a **relation between operations at runtime**. In otherwords, we can relate the execution of operations `a sw b`.

### Checking if two operations are synchronised:
1. Identify the synchronization actions or primitives used between the operations.
2. Verify if the ordering constraints imposed by the synchronization actions ensure that operation `a` is ordered before operation `b`.
3. Confirm that the synchronization actions provide the necessary visibility guarantees for the data shared between the operations.

### References
- 🔗: [Blog](https://preshing.com/20130823/the-synchronizes-with-relation/)