---
type: note
title: Goals of the Operating System
created: Saturday 07 Jan 2023
tags: os
---
## 1) To abstract away all computer resources
All forms of resource - processor time, memory, concurrency primitives ([[Thread]] & [[Mutex]]), files, networking resources, IO, GPU - are all managed by the OS, with all the details abstracted away. Programs request these resources from the OS as opposed to manually managing them themselves.
