---
type: note
title: Serializability
created: Friday 21 Apr 2023
tags: review
sr-due: 2023-06-01
sr-interval: 13
sr-ease: 320
---

## Serializability

Serializability is a property of a [[Concurrent Schedule]] that ensures the same results as a **serial** schedule (**where transactions are executed one at a time**).

### Types of Serializability

1. **Conflict Serializability**: A schedule is conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting operations. [[Conflicting Operations (Concurrency)]]
2. **View Serializability**: A schedule is view serializable if it is equivalent to a serial schedule in terms of the final state of the database.

## Conflict Serializability

### Precedence Graph

A precedence graph is a directed graph used to check if a schedule is conflict serializable. The graph has the following properties:

- Each transaction is represented by a node.
- An edge from node `Ti` to node `Tj` is added if there is a conflicting operation between `Ti` and `Tj`.

If the precedence graph is acyclic, the schedule is conflict serializable.

## View Serializability

View serializability is a more general form of serializability. A schedule is view serializable if it satisfies the following conditions:

1. Initial reads: For each data item `x`, if a transaction `Ti` reads the initial value of `x` in schedule `S`, then `Ti` must also read the initial value of `x` in a serial schedule `S'`.
2. Updated values: For each data item `x`, if a transaction `Ti` reads the value of `x` written by transaction `Tj` in schedule `S`, then `Ti` must also read the value of `x` written by `Tj` in serial schedule `S'`.
3. Final writes: For each data item `x`, if a transaction `Ti` writes the final value of `x` in schedule `S`, then `Ti` must also write the final value of `x` in a serial schedule `S'`.

