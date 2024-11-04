---
type: note
title: C++ Templates Tradeoffs
created: Tuesday 13 Dec 2022
tags: 
---

## Summary
**fast program or fast compilation**?

## Pros
- The instantiated code is fast:
	- No indirections using function pointers
	- Because the whole implementation is specified, larger compiler optimisations can be run.
- Allows for [[Compile-time Initialization]]

## Cons
- Longer compilation times because of all the template instantiation
- Larger files
- Templates must be fully defined in the header:
	- Mixes implementation and interface
	- Causes compilation dependencies which also take time.
- Instantiation error messages are cryptic