---
type: note
created: Thursday 18 Apr 2024
tags: 
---
> [!IDEA]
> Order the nodes of a directed [[Graph (Mathematical)]] such that all edges point in the same direction (i.e. forwards)


## Algorithms
- Use [[Depth First Search]] on each unvisited nodes, **prepending** nodes after visiting their descendants (i.e. visit(child); prepend(current))
- [[Kahn's Algorithm]]