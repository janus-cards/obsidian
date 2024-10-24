---
type: note
title: Execution Context
created: Tuesday 10 Jan 2023
tags: review
sr-due: 2023-08-18
sr-interval: 187
sr-ease: 342
---
**A place where function objects are executed**. It usually has one or more [[Executors]].
> [!Quote]
> An **execution context** is a resource that represents the _place_ where execution will happen. This could be a concrete resource - like a specific thread pool object, or a GPU - or a more abstract one, like the current thread of execution. Execution contexts don’t need to have a representation in code; they are simply a term describing certain properties of execution of a function.

## Examples:
- [[Thread Pool]]

## In Boost ASIO
> Class [`execution_context`](https://www.boost.org/doc/libs/1_81_0/doc/html/boost_asio/reference/execution_context.html "execution_context") implements an extensible, type-safe, polymorphic set of services, indexed by service type.

The `io_context` is a specific (derived) execution context that provides most of the features for timer & socket based services:
>The [`io_context`](https://www.boost.org/doc/libs/1_81_0/doc/html/boost_asio/reference/io_context.html "io_context") class provides the core I/O functionality for users of the asynchronous I/O objects

We can use a single io_context across multiple threads and poll it. Each thread will dispatch and run some subset

A `thread_pool` is also a specific execution context