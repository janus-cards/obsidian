---
type: note
created: Tuesday 10 Oct 2023
tags:
  - os
---
> [!IDEA]
> A per-[[Process (OS)]] [[Data Structure]] that maintains a mapping of [[Virtual Address]]es to [[Physical Address]]es.

- When a process is [[Fork (OS)]], the table is effectively copied. The content is not though. Typically, a [[Copy-on-write]] scheme is used to avoid duplicating content until its necessary.