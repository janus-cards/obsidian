---
type: note
title: File Descriptor
created: Saturday 07 Jan 2023
tags: 
---
A [[Unix]] [[Handle (OS)]] for a file ([[All resources are files in Unix]])

![[Pasted image 20230107220639.png]]

The descriptor the handle given to a particular process. All the processes' handles are in a [[File Descriptor Table]] managed by the kernel. The kernel also manages a global record of all open files in the [[File Table]], which also records what type of operations are available for that resources (like read or write). Furthermore, the OS also manages the [[File System]] and so knows where all the files are in the [[Inode Table]]s.

> [!Important]
> All accesses (read, write + more specific commands like connect and accept for sockets) are requested to the OS through [[System Call]]s as opposed to being directly handled by the user program

