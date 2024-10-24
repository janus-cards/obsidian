---
type: note
created: Tuesday 23 Jan 2024
tags:
  - leetcode
  - algorithms
  - greedy
links:
  - https://leetcode.com/problems/candy/
---
## Observations
- This is fundamentally about satisfying conditions between adjacent cells in an array.
	- [[Using Graphs to Model Conditions]]
	- [[Topological Sort]]
- However, [[Constraints afford faster algorithms]]
## Solution
O(n) time, O(n) space

- [[Finding Satisfying Solutions]]
	- To generate the candies to assign, start with everything as one
	- Go left to right adding 1 to previous if rating is higher, otherwise leaving as 1
		- This ensures condition is satisfied for left dependecies
	- Repeat from right to left, except setting to what current candy count is.
		- This gives you the right dependencies while preserving the left dependency
			- For all pairs of left and right, if right had more candy, then it still will have more candy (even more)
- Finally, need to show that this is the optimal solution, which comes from fact that children with no dependencies have 1 candy, and that the number of candies you have equates to max distance from a child of 1.