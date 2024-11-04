---
type: note
created: Sunday 28 Jan 2024
tags:
  - algorithms
  - algorithm-design
---
> [!IDEA]
> For [[Range-Based Queries]], where there is a [[Optimal Substructure Property]], computing a query for a later range may be done by:
> - Moving the two pointers
> - Adjusting values accumulated


> [!IDEA]
> Noticing that windows size can only ever increase/decrease, allowing for incremental step sizes without growing the window too fast.
> - [[Incremental Improvement Algorithms]]
> - Once we have found 1 satisfying 'range', then the optimal one will be smaller so we never need to grow the current window
> 	

> [!IDEA]
> The choice of how to initialize and move your sliding window will play a key part in the logical and implementation (but not necessarily time) complexity of your program

> [!IDEA]
> For tests on right pointer moves, if you need to move the left pointer until a condition is satisfied, can do just testing the right pointer again work? If so, then you can just loop moving left forward if right is not satisfied.
> - E.g. [Longest substring without repetition](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

> [!IDEA]
> Think about **Window Invariants**

> [!IDEA]
> Multiple sliding windows of different offsets:
> 	[Substring of all permutation concatenation](https://leetcode.com/problems/substring-with-concatenation-of-all-words)