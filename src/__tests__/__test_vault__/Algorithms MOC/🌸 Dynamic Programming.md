---
type: note
created: Tuesday 26 Mar 2024
tags: 
---

> [!IDEA]
> [[Caching (Optimisation)]] of solutions to subproblems. May generate [[Lazy Evaluation]] (Top Down) or exhaustively (bottom up)

## Required Properties
- [[Optimal Substructure Property]]
- [[Overlapping Subproblem Property]]

## Tricks
- [[Layers in DP State Space]]
- Always DP in fixed sized state space
- Selecting slice of state space to DP on:
	- [Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/) - just need to do current and previous row's bit masks to give 2^16