---
type: note
created: Thursday 03 Aug 2023
tags: 
---
[[Counting problems]] often involve traversing a search space and checking for conditions. You may also combine this approach with an [[Accumulation Algorithm]]. When considering the order in which to count ensure:
- **Your traversal does not break the invariants of the problem**
	- For example, if you are counting unique sequences, going through a dimension in one direction may be okay but not in the other (because in one direction the numbers must be at least as big as before, so may be equal, while in the other the numbers must be less than so definitely not equal
- **Avoid double counting**



## Examples
- Project Euler 201