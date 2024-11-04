---
type: note
created: Sunday 14 Jan 2024
tags:
  - algorithm-design
---
> [!IDEA]
> - One can either store a [[Prefix Sum]] array or if traversal is (basically) only done once, you can generate the cumulative sums as you go in a variable
> 	- This means that if you need both prefix and suffix, you can use the output array to store the prefix sum and then traverse backwards holding suffix sums in a variable to get away with just O(1) space (as output space is not considered)
## Examples
- [Product of Arrays except Self](https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150)