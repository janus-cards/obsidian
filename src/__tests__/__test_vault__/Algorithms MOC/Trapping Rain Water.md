---
type: note
created: Monday 22 Jan 2024
tags:
  - leetcode
  - algorithms
links:
  - https://leetcode.com/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-interview-150
---
## Observations
- If water is trapped, then there must be a left and right wall that traps it
- The smaller of the two walls dictates the height of the water
- **There cannot be a higher wall behind the bottlenecking wall, otherwise we could increase the water level**
	- This suggests that taking the min of the max element to the left and right will yield the same answer (even if a max element considered will not form one of the walls)

## Solution
- The water above a position is given by the min of the left and right highest points
- The highest points to the left and right of an index can be computed via [[Prefix Sum]] algorithm (using max as binary operator)
	- This is O(n) space and time
- Next, we just do a single pass to calculate water level above, so everything is O(n) time.

## Optimisations:
[[Two Pointer Algorithm]] to make O(1) space (a strategy that gravitates to putting pointers on the highest walls)
Can avoid using any space by moving left and right pointers in appropriately
- For any point in between these two pointers, the min of left and the right are not taller than the walls used (otherwise they would occlude the walls etc)
- We constantly move left and right closer to one another at each iteration, guaranteeing termination
	- Distance always decreases by 1
- We can maintain the highest on the left and right of the left and right pointers as single variables that we maintain.

- We maintain L and R pointers as well as left_max and right_max which we maintain have the property of the max value from L to the far left and from R to the far right respectively.
- Consider `h[l]<=h[r]`. This means that `h[l]<= the largest to Right of l` as `h[r]` is an underestimate. It can be proven that `min(h[r],left_max) == left_max` which means we are done.
	- [[Proof by Induction]] on the property `h[l]<=h[r]=>LM[l]<=RM[r]` and reciprocal along the sequence of l&r where we select the smaller height each time.
		- Base case is trivially true as the heights are the maxs
		- The inductive case requires us to do [[Case Anaylsis]] on the (wlog) previous pair l-1 ,r and to ask if `h[l]` increases LM or not (if it does not , we use inductive assumption, if it does, then we use fact that `LM[l]==h[l]<=h[r]<=RM[r]` to prove