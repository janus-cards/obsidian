---
type: note
created: Saturday 23 Mar 2024
tags:
  - algorithm-design
---
For problems where you want to find an element that satisfies an optimal prefix, you may consider the following:

- Consider if there are suitable ranges that you should narrow down on
	- This may suggest a [[Sliding Window Algorithms]]
- Use a [[Trie]] 
	- May require [[Padding]]
- Use properties of the underlying data to infer an optimal solution ([[Construction Algorithms]])



# Examples
- [Maximum XOR With an Element From Array](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/)
- [Maximum Strong Pair XOR II](https://leetcode.com/problems/maximum-strong-pair-xor-ii/description/)
- [Maximum Genetic Difference Query](https://leetcode.com/problems/maximum-genetic-difference-query/)