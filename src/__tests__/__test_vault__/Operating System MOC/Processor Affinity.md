---
type: note
title: Processor Affinity
created: Friday 13 Jan 2023
tags: os
---
Also called [[CPU Pinning]], is a method for ensuring certain processes get run on a set of processors, to the exclusion of not getting run on others. This specification is typically made with a [[Processor Affinity Mask]] which is just a [[Bitmask]] - one bit per processor - saying whether the process / [[Thread]] is allowed to run on it.

It will be up to the [[OS Scheduling Algorithm]] as to how it uses this information:
- In some implementations, processes which do not have a mask may get moved to other processors so that those that do have a mask can be allowed to run.

## Benefits / Reasons:
- Reuse [[Memory Cache]] so that there are not so many immediate [[Cache Misses]] upon resumption of process.
- Some [[Operating System]]s have rules that restrict where certain operations can get run. For example [[Domain Controllers]]  might be restricted to running only on the first CPU. Hence, specifying a mask that **avoids** using the first CPU can leave it free for the domain controllers to use, and reduce [[Processor Contention]]
