---
type: note
title: Enable Shared From This
created: Friday 06 Jan 2023
tags: 
---
Classes that inherit from `std::enabled_shared_from_this` have the following capability:
An object o of type T can create a new shared pointer that shares ownership of o with all other shared pointers to o.

In otherwords:
> [!idea]
> An object becomes in charge of managing its own shared ownernship.

- Prevents the erroneous `std::shared_ptr(this);`

## Use case
**Allowing for a resource to be kept alive when needed beyond the scope of all the user defined shared pointers to it**:
- Imagine object o of T runs an asynchronous task on a thread in which it passes itself. It cannot pass itself as a raw pointer as during the execution of the thread, o may be deleted because the last shared pointer to o was destroyed. This is BAD!


**Preventing an object being shared across two or more groups**:
- Consults the internal weak reference to see if already part of a sharing group.

## Implementation:
**Objects of type T hold a weak reference** ([[Weak Pointer]]) **to itself.** When constructed with a shared pointer, both the returned shared pointer and the owned object's weak pointer use the same control block.

>[!Note]
> Cannot be a shared pointer to self as this would reference count and possibly prevent the object from automatically being destroyed

> [!Important]
> If the object was not created originally through a shared pointer constructor, then the weak pointer will point to nothing
> ![[Pasted image 20230106160410.png]]


```c++
template<class T>
class enable_shared_from_this {
 mutable weak_ptr<T> weak_this;
 
public:
 shared_ptr<T> shared_from_this() {
  return shared_ptr<T>(weak_this); 
 }
 ```



Using traits etc, the [[Shared Pointer]] implementation knows when the thing it is constructing is `std::enabled_shared_from_this`. In that case, 


