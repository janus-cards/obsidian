---
type: note
created: Monday 25 Mar 2024
tags:
  - algorithms
---
> [!IDEA]
> Doing a search from start (maybe the empty) state to the end state might require $f(n)$ complexity. However, going from the start to the middle, and the middle to the end and joining these two together may take $2(f(n/2))$ which may be far cheaper (although it will require more space)


## Examples:
- [Partition Array Into Two Arrays to Minimize Sum Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/)