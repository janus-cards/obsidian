---
type: note
title: Proactor Tradeoffs
created: Sunday 08 Jan 2023
tags: 
---

## Pros:
- Benefits of [[Software Frameworks]], namely **portability**
- **Performance**: Programs can be very efficient with only a single thread as we get all the benefits of [[Asynchronous IO]] => Can get the benefit of concurrency without complexity of threading.
- Also, avoid cost of [[Threading]] , i.e. context switching.
- May be able to add threads to improve responsiveness even more. (Done with [[Strands]])
- The [[Asynchronous Operations]] setup lends its nicely to implementations using [[Coroutines]] or [[Fibers]]

## Cons:
- Harder to debug because of the confusing flow of control
- Requires [[Operating System]] to support asynchronous IO (Unix is more about polling, but can [[Transform Reactor to Proactor]])
- No guarantees on relative order (lack of [[Synchronisation]])