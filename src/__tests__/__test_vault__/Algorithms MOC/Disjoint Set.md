---
type: note
created: Thursday 18 Apr 2024
tags: 
---
Also called a [[Union-Find]] [[Data Structure]]

> [!IDEA]
> Used to keep track of disjoint sets, typically used in maintaining set of disjoint components in a [[Graph (Mathematical)]]. Supports `make-set`, `find-set` (returning a representative of the set where two nodes are in the same set iff they have the same representative) and `union` which joins two sets.

Implemented with a forest of trees where each elements is in a tree and by following the parents of each node you get to the representative (`find-set`). By saving the find step ([[Path Compression]]), you save work for the future ([[Amortization (Computer Science)]])

To merge, you just combine representative trees, either vertically and horizontally. **Suggestion is to add smaller tree to larger to maintain height and therefore distance to root** (*Union by rank optimization*)

## Time Complexity
- If we do m operations, it will have an amortized cost of O(m $\alpha(n)$ ) which is the [[Inverse Ackermann Function]] and we can therefore treat the average cost as amortized to constant


## Applications
- [[Connected Component]] in [[Graph (Mathematical)]] used in [[Kruskal's Algorithm]]
- 