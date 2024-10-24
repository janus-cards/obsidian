---
type: note
created: Monday 14 Oct 2024
tags: 
---
- Process of eliminating unused code from final code bundle.
	- Shaking the dead leaves (unused code) from tree ([[Abstraction Syntax Tree]])
- How?
	- Builds dependency tree
	- Eliminate unused exports 
	- Eliminate code paths that cannot be reached
- When can we do this?
	- When we can statically anyalse the code
		- So [[ES Module]] but much harder for [[CommonJS Module]]
	- Easier to remove pure code
-  Benefits:
	- Smaller bundles = faster load time (fetching and parsing) so reduced latency
