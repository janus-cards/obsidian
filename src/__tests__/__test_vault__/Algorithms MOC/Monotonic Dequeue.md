---
type: note
created: Tuesday 26 Mar 2024
tags: 
---
> [!IDEA]
> Sorted [[Deque]]

## Examples:
[Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
- Observation that:
	- When we see a high number, we can ignore lower numbers to left
	- When we see a low number we might need to keep it for when a high number disappears
- Hence monotonically decreasing deque that keeps track of next highest number to go out of the scope of the [[Sliding Window Algorithms]]