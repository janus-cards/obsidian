---
type: note
created: Thursday 18 Apr 2024
tags: 
---
> [!IDEA]
> Using [[Greedy Choice Property of MST]], we accumulate a larger and larger [[Connected Component]] that serves as our set S for constructing a [[Cut (Mathematical)]], and then take the least weight [[Crossing Edge]], adding that to our graph.


## Optimisations:
- We use a [[Priority Queue]] of **neighbouring nodes** with key being **the smallest weight of edge that crosses to that node**
	- If a node is not a neighbour, it has infinite distance.
		- A non-neighbour will never get selected because if it is connected then the component $S$ always has 1 neighbour with bellow infinite distance


[[Proof by Induction]] that the tree we are maintaining of $S$ is a subset if at least one [[Minimum Spanning Tree]] $T*$. Then, when we look to add $e$, we will be taking the least weight [[Crossing Edge]] of $S$ and hence even if that was not $T*$, we can [[Cut and Paste Argument]] to get another MST that is modified with $e$, hence we have grown S while maintaining that fact that at least one MST is a superset (albeit possibly a different one)

![[Pasted image 20240418191432.png]]![[Pasted image 20240418191636.png]]

## Complexity
- V lots of T(Extract-Min)
- 2E lots of T(Decrease-Key) (by [[Handshaking Lemma]])