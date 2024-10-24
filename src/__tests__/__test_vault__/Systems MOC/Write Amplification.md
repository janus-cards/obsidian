---
type: note
created: Monday 15 Apr 2024
tags: 
---
> [!IDEA]
> A single write (insertion/creation) of an element into a data structure may result in more writes to storage across the data structures life time. The number is the amplification.


## Examples
- [[LSM-Tree]] have high write amplification as key-values get propagated from [[MemTable]] to [[SSTable]] many times over.