---
type: note
created: Monday 09 Oct 2023
tags:
  - os
---
> [!IDEA]
> The entries of the [[Page Table]] that stores the physical **frame** for the required virtual address. It may also store some auxillary fields like:
> - **Present Bit** - is the page load in physical memory?
> - [[Dirty Bit (Paging)]] - Has the data been modified such that a write will eventually be necessary
> - **Protection Bit** - [[Access Modifiers]]
> - [[Read Only Bit]] - Used to implement [[Copy-on-write]] mechanism
> - **Disk Block Number** - Needed to locate data in storage that will be [[Memory Mapped File]]