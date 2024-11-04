---
type: note
created: Saturday 19 Oct 2024
tags: 
---
- Unfolding [[DL Computational Graphs]]
	- What are these graphs?
		- [[Graph (Mathematical)]]
		- They represent the series of computations performed on input variables, and subsequent outputs.
		- Nodes are the variables, **edges are the operations**
	- Example
		- Classical Form of a [[Discrete Dynamic System]] as a [[Recurrence Relation]]
			- $s(t) = f(s(t−1); θ),$
			- [[Autonomous Dynamic System]]
				- Does not depend on a time variable
			- [[Markov Property]]
				- State evolves based on only the previous state
				- Memoryless
	- By repeatadly applying the function (t times), using the output of one iteration as the input to the next, *graphically an edge can be drawn from the node to itself*
		- Hence our graph is cyclical
	- To unfold the computation means to treat the variables as as seperate nodes, *thereby expressing the computation not in terms of the recurrence relation*
	- Benefits of:
		- Recurrent graph:
			- Succinct
		- Unrolled graph:
			- Shows the passage of time