---
type: note
title: memory_order_relaxed
created: Friday 21 Apr 2023
tags: 
---

> [!Important]
> Operations on a an atomic variable with a relaxed ordering only need to preserve atomicity and [[Modification Order]] consistency. 

[[C++ Concurrency in Action]] gives the analogy of people in cubicles with a notepad. The notepad contains an ordered list of numbers (the modification order). People (threads) call in to perform operations, and the people in the cubicle can reply and execute in a consistent way:
- Reads for the first time can select any state from the order to return to the caller.
- Writes will put a number at the bottom of the pad.
- Reads must return states below or the same on the pad than the previous read or write sent.