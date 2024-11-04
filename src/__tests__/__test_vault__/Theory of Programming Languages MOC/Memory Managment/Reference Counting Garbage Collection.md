---
type: note
title: Reference Counting Garbage Collection
created: Friday 06 Jan 2023
tags: memory-management garbage-collection
---
Every allocated object, managed under the garbage collector, has an associated [[Reference Counting|Reference Count]] which is the number of references that other objects have to it. 

Upon destruction of an object with a reference, the counter to the refereed object decreases, and upon construction it is increased.

When this count goes to 0, the object is deleted. This may then cause other objects to be deleted in turn because the newly delete object no longer holds the reference.

## Variations:
- Sometimes, a single decrement may trigger many objects to be deleted, which can cause a serious pause in the program. [[Incremental Garbage Collecting]] suggests that upon reaching 0, the object is moved to a list of unreferenced objects, whose elements are incrementally destroyed over time