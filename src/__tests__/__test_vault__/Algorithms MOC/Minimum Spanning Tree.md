---
type: note
created: Monday 15 Jan 2024
tags: 
---
> [!IDEA]
> A subset of a [[Graph (Mathematical)]] that is a [[Tree (Mathematical)]] that spans all verticies of the graph and whose sum of edge weights is smallest
## Intractable Solutions
- Create and test all spanning tree to see which is smallest
	- There are an **exponential** number of such trees
	- Proof: Consider a bipartite graph with 1 node on left, 1 on right and n in middle. Connect the top node to left and right. Then there are $2^{n-1}$ possible trees formed by making a left-right choice for each of the remaining n-1 middle nodes. 

## Prototype of a Solution
- Derived from [[Optimal Substructure for Minimum Spanning Tree]]
1) Guess an edge that will be in MST:
	- Trial and error (bad and inefficient)
	- [[Greedy Algorithms]] - Efficient
		- [[Greedy Choice Property of MST]]
1) Contract edge
2) Find MST on graph
3) Decontract edge and add e

# Algorithms:
- [[Prim's Algorithm]]
- [[Kruskal's Algorithm]]

