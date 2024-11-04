---
type: note
title: C++ Abstract Machine
created: Monday 09 Jan 2023
tags: review
sr-due: 2023-08-19
sr-interval: 188
sr-ease: 340
---
The [[Goals of C++]] specify that [[C++ Programming Language]] should be fast performing, and this is made possible by the primitives (like int and [[POD]]s) mapping directly onto hardware features. There is no natural intermediate language between C++ and [[Assembler]].

Treating C++ as running on an [[Abstract Machine]] helps us to reason better about our programs. Instead of thinking about how our program is compiled, we instead think about the behaviour as dictated by the specification.

> [!Idea]
> From an observeability perspective, the physical machine behaves [[As-if Rule| as if]]  the program was executed on the [[Abstract Machine]]

![[Pasted image 20230109102757.png]]

## Key Characteristics:
- **Parameterised** - These parameters are the [[Implementation Defined Behaviours]] 
- [[Non Determinism]] - This is the [[Unspecified Behaviour]] in which behaviour from the set of allowable behaviours can be chosen to be run by the abstract machine
- Operations are **undefined** - [[Undefined Behaviour]]

## Structure:
- There is **Memory** - [[C++ Memory Model]]
- **Objects** reside in memory. [[C++ Objects]]
- There are [[Thread]]s. [[C++ Thread Model]]