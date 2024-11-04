---
type: note
created: Monday 09 Oct 2023
tags:
  - os
---
> [!IDEA]
> An optimization trick that prevents going back and forth from physical memory whenever we want to modify and read a [[Page (OS)]].


> [!IDEA]
> If set, we need to write back to backing storage when paging out. If unset, we do not need to do that.

This effectively means that we maintain two copies of a data frame:
- The possibly outdated original in [[Secondary Storage]]
- The possibly updated copy in [[Physical Memory]]