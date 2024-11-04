---
type: note
title: False Sharing of Cache
created: Monday 06 Mar 2023
tags: 
---
> [!IDEA]
> One can share [[Cache Line]] without sharing any data

We have two threads that own some objects within the same [[Cache Line]]. They will constantly invalidate each others cache when they access and modify their own data even though they are not sharing any of the objects.