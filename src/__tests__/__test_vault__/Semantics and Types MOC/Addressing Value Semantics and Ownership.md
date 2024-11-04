---
type: note
title: Addressing Value Semantics and Ownership
created: Wednesday 14 Dec 2022
tags: 
---
[[Value Semantics]] and [[Resource Ownership]] compete with one another because of issues of **uniqueness** and **indirection**.


Ways of addressing:
1. Do not use value semantics and prohibit copying. (Only allow move assignment)
2. Provide custom copy constructors, etc, that copy the resource
3. Share ownership of the resource.
4. Make copying transfer resource (as in [[Move Semantics]])