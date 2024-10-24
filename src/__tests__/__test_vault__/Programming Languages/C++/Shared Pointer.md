---
type: note
title: Shared Pointer
created: Friday 06 Jan 2023
tags: memory-management
---
A C++ [[Smart Pointer]] which represents shared ownership of a resource. 

![[Pasted image 20230106150258.png]]

It is effectively a raw pointer + pointer to a control block. 

The raw pointer may differ in type to the one in the control block. 

## Control block
- Raw pointer to the actual object.
- [[Reference Count]] for the number of shared pointers that use that control block.
- A **Weak Count** of the additional number of weak pointers that use that block.
- Allocator and Deleter are stored (as opposed to being template parameters):
	- Type erased allocators and deleters make it possible to abstract away the memory management model and work with incomplete types.

Weak count does not play a role in the destruction of the resource, but does play a role in the destruction of the control block.


[[Enable Shared From This]]
## References
- 🔗: [Detailed explanation](https://www.nextptr.com/tutorial/ta1358374985/shared_ptr-basics-and-internals-with-examples)