---
type: note
created: Sunday 14 Jan 2024
tags:
  - algorithm-design
  - data-structures
---
Given a random number generator for floats between 0-1, we can:
- Get a uniform random variable through a translation and a scale
- A random int by then taking the floor
- A random choice by treating these ints as indices to an array

> [!IDEA]
> If you can create a relationship between a datastructure and say an array, you can randomly access those elements of the data structure by choosing randomly from the array.