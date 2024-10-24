---
type: note
created: Monday 15 Apr 2024
tags: 
links:
  - https://www.igvita.com/2012/02/06/sstable-and-log-structured-storage-leveldb/
---
> [!IDEA]
> Fundamentally, its just a file of sorted keys (**sorted string**) with their values


![[Pasted image 20240415182432.png]]

By adding something like a [[Hash Map]] as a [[Database Index]], you effectively get a database that supports [[Range-Based Queries]]. Furthermore, you may choose to only store some of the keys in the index and do some extra work in the search by iterating over the range specified by the closest keys before and after ([[Sparse Index]]
)

- One can split partition the database into segments that each take up a file and have only the index in memory.
## Operations:
- **Merging segments** - if we have multiple [[Log Segment]]s, they can be merged into one using something akin to [[Merge Sort]] (in O(kN))
- **Updating** - Even if you partition the table into sub tables, editing a [[Log Segment]] is expensive. [[Writes are hard unless data structure is in memory]]. [[LSM-Tree]] solves this.
