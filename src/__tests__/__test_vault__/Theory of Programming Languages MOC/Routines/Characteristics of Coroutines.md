---
sr-due: 2023-05-16
sr-interval: 1
sr-ease: 280
---

---
type: note
title: Characteristics of Coroutines
created: Wednesday 15 Feb 2023
tags: review 
---
- values of local data persist between successive calls (context switches)
- execution is suspended as control leaves coroutine and is resumed at certain time later
- [[Symmetric Coroutines]] vs [[Asymmetric Coroutines]]
- first-class object (can be passed as argument, returned by procedures, stored in a data structure to be used later or freely manipulated by the developer)
- [[Stackfull Coroutine]] vs [[Stackless Coroutine]]