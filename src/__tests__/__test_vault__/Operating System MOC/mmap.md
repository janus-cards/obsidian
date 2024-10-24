---
type: note
created: Monday 09 Oct 2023
tags:
  - os
  - unix
---
> [!IDEA]
> [[Unix]] [[System Call]] to [[Memory Mapped File]]. 

## File-Back vs Anonymous
- Determines if the region will persist after the execution of the [[Process (OS)]]
## Visibility
- If the mapping is `MAP_SHARED`, then when the page table is copied, we do not do a [[Copy-on-write]] for that page. [[Sharing in a Page Table]]