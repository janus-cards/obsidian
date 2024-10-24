---
type: note
title: Relation between implementation and C++ abstract machine
created: Monday 09 Jan 2023
tags: 
---
**The implementation must emulate the [[Observable Behaviour]] of the [[C++ Abstract Machine]]**

- If there is a side effect in one, there must be an equal side effect in the other.
- Because the abstract machine has [[Non Determinism]], we only require the implementation to match a single execution path.
- [[As-if Rule]]

![[Pasted image 20230109105844.png]]

## Remarks:
- Non-observable side effects may be ignored.