---
type: note
created: Monday 15 Apr 2024
tags: 
---
> [!IDEA]
> Use an easily updatable in memory [[SSTable]] (say using a [[Red Black Tree]]) to accomodate writes - we call this the [[MemTable]]. Then periodically save this SSTable to disk. To read, scan all the indices of written SSTables + the MemTable. Periodically compress all the SSTables on disk.

![[Pasted image 20240415211814.png]]

Use [[Tombstone]]s to indicate deletes.

Can be improved using a [[Bloom Filter]]

![[Pasted image 20240415212028.png]]
Compaction and merge rules play a big part and is where most of the variation in LSM-Tree based DBs come from.
## Used in:
- [[LevelsDB]]
- [[RocksDB]]
- [[BigTable]]