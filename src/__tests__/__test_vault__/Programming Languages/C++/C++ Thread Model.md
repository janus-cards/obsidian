---
type: note
title: C++ Thread Model
created: Monday 09 Jan 2023
sr-due: 2023-05-19
sr-interval: 4
sr-ease: 324
tags: review
---
- Everything is run within a [[Thread]] including initial invocation of main.
- All threads potentially have access to all objects and functions in program
- Able to run threads concurrently, so data may be accessed concurrently.
- [[C++ Data Race Definition]]
	- Data race is [[Undefined Behaviour]]


See [[Process Synchronization]]