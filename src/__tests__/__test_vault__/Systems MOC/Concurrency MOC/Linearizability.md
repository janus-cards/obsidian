---
type: note
title: Linearizability
created: Friday 21 Apr 2023
tags: review concurrent-systems consistency-models
sr-due: 2023-06-07
sr-interval: 19
sr-ease: 340
---

## Definition of Linearizability

Linearizability, also known as **atomic consistency**, is defined as a property of a concurrent system where the following conditions hold:

> [!Important]
> 1. Each operation appears to be executed instantaneously at some point between its invocation (start) and its response (end).
> 2. The order of operations must respect their real-time order, meaning if operation A finishes before operation B starts, then A must appear before B in the order.

If a concurrent system satisfies these conditions, it is said to be linearizable.

## Comparison with Serializability

While both linearizability and serializability aim to ensure consistent behavior in concurrent systems, they differ in their requirements and guarantees:

- **Serializability**: Focuses on transaction-based systems and ensures that concurrent transactions have the same outcome as if they were executed in a serial order. It does not consider the real-time order of transactions.
- **Linearizability**: Applies to individual operations rather than transactions, and guarantees that each operation appears to be executed instantaneously in an order that respects their real-time order.

## Benefits of Linearizability

Linearizability offers several advantages in concurrent systems:

1. **Strong consistency**: Linearizability provides a strong consistency model, ensuring that all operations are observed in a single, global order that respects their real-time order.
2. **Simplicity**: Linearizability offers a simple and intuitive mental model for reasoning about the behavior of concurrent systems.
3. **Composability**: Linearizable operations can be composed to build higher-level abstractions with predictable behavior.

## Drawbacks of Linearizability

Despite its benefits, linearizability comes with certain drawbacks:

1. **Performance overhead**: Ensuring linearizability can introduce performance overhead due to synchronization and coordination among concurrent operations.
2. **Not always necessary**: In some scenarios, weaker consistency models may be sufficient and provide better performance.

## Conclusion

Linearizability is a valuable concept in the design and analysis of concurrent systems, providing a strong consistency model that ensures operations are executed in a clear, intuitive order. However, it may introduce performance overhead, and other consistency models might be more suitable depending on the specific requirements of the system.

