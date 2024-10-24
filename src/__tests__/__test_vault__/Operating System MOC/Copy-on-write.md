---
type: note
created: Tuesday 10 Oct 2023
tags:
  - os
---
> [!IDEA]
> An optimization strategy that allows for a kind of **virtual duplication**: Two or more copies can refer to the same underlying content as long as none of them modify it. 

At the point of modification, the content is duplicated (in the case of [[Page (OS)]], a new [[Physical Frame]] is created, the content copied over and the [[Page Table]] adjusted to point to the new frame)

A further tweak is to maintain a **reference count** so that you don't make a duplicate of the frame when you are the last one pointing to it.