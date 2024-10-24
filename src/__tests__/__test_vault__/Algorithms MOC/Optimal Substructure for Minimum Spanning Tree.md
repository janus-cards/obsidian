---
type: note
created: Monday 15 Jan 2024
tags: 
---
- Consider a minimum spanning tree (one must exist) and **consider any edge in it.**
- By [[Edge Contraction]] (merge endpoints into one), we get a new graph.
	- Common neighbours now have multiple edges from the new node, so we consider the minimum such edge.
- **Claim: The MST of the graph which is contracted can be used to synthesis a MST in the original graph**, i.e the decontracting the same node with the edge will give an MST of the larger problem. Hence, there is [[Optimal Substructure Property]]

### Proof:
- **We propose the spanning tree**
- ![[Pasted image 20240115232840.png]]
- Taking an MST in the contracted graph called T', by minimality, it must have a smaller weight than the assumed larger spanning tree after contracting the edge (ineq 1)
- Now we decontract the edge in T'. **It is a spanning tree**
	- Its weight is given by the first equality in ineq 2
	- Then we add w(e) to ineq 1
	- Then we notice that the weights are the same as T*
	- By minimality of T*, T must be minimal also.

> [!IDEA]
> We consider the relation between two existing but not necessarily known MSTs, one in the original graph, and one in the contracted graph. We then relate these two using properties of **contraction and decontraction** (preserves spanning property) as well as **minimality** to prove the lemma.