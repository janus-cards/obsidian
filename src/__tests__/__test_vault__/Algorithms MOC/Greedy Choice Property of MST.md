---
type: note
created: Thursday 18 Apr 2024
tags: 
---
> [!IDEA]
> [[Greedy Choice Property]]: Consider a [[Cut (Mathematical)]] of a graph, take the least weight [[Crossing Edge]] $e$ of this cut. Can be shown that this is in a [[Minimum Spanning Tree]]

Proof with a [[Cut and Paste Argument]]:
- Take a MST that does not contain $e$
- ![[Tree (Mathematical)#^df6ba1]]
- $e$ connects $u$ and $v$ in the two subgraphs. There must have been exactly 1 other [[Crossing Edge]] $e'$ that helped connect these two (indirectly)
	- The at least 1 comes from the **spanning property** that requires [[Connected Graph]] property
	- The no more than one comes from the [[Tree (Mathematical)]] property
- Hence, $e'$ and $e$ connect together the same component, so the tree that is without $e'$ and with $e$ is also a **Spanning Tree**
- Because we said $e$ was the least weight [[Crossing Edge]], it must be less than or equal to $e'$. Also must be greater than or equal to the weight of $e'$ as what we had before was an MST so this new tree cannot be smaller than it
