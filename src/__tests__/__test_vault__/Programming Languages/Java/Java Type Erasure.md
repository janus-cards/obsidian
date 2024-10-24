---
type: note
title: Java Type Erasure
created: Tuesday 13 Dec 2022
tags: compiler java
---
In Java, genericity is achieved by **dropping type annotations** at compile time and treating all occurrences as being of the same common **root base class** - **object**

Hence, if we have `f<T>` applied to two types, only one code will be emitted. **At the call site, the compiler "remembers" what the types were so that everything type checks**. For example, if we had a list of T and had a find function, type erasure would involve having a single find function for all types, but that types check at call site as it returns a T.

This is contrasted to #c++ and [[Templates]] where instantiating the function template twice causes two separate blocks of code to be generated.


See also [[Type Erasure Idiom]] and [[Type Witnesses]]