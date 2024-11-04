---
type: note
created: Monday 15 Apr 2024
tags: 
---
> [!IDEA]
> An additional structure used for [[Indexing]] the [[Database Management System]] data

> [!Important]
> [[Trade-off]]: this will sped up reads but slow down writes.

- Some are better for [[Range-Based Queries]] than others
## Examples:
- [[Hash Map]]:
	- Maybe used to store offset into a [[Log File]]
- Sorted Search (like [[SSTable]])
	- Either Binary search or Index+Scan
- [[Tree Traversal]]:
	- [[B Tree]]