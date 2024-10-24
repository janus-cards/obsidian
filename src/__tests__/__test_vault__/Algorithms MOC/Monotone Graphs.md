---
type: note
created: Friday 29 Mar 2024
tags: 
---
> [!IDEA]
> [[Monotonic]] property means that we can order nodes in a graph (maybe by assigning each a value/score and then ordering on that) such that if v(A)<= v(B) then dist(Src->A) <= dist(Src->B)

> [!Important]
> Visiting each node in order of distance (via [[Dijkstra's Algorithm]]) will visit each value in order.


## Problems:
- [Find the Kth Smallest Sum of a Matrix With Sorted Rows](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/)