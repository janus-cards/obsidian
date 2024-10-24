---
type: note
title: Priority Tag
created: Friday 17 Feb 2023
tags: 
---
> [!IDEA]
> Create a hierarchy of tags. A simple one would be a linear ordering, but one could also create a [[Lattice]] ordering.


> [!IDEA]
> The hierarchy of tags explicitly specifies the [[Overload Precedence]]

Then, in [[Tagged Dispatch]], one can specify a level at which to dispatch on. Then, it will go down the levels until it finds the highest one below that satisfies any constraints.

## In C++
```cpp
template<int N> struct priority_tag : priority_tag<N-1> {};  
template<> struct priority_tag<0> {};

/*
A priority_tag<N+M> can always be converted or fallback to a priority_tag<N> because there is a default copy constructor in the base class which takes in references of that type, for which the derived class is a candidate for. This creates an implicit conversion. 
*/
```

Made possible by [[C++ Overload Resolution]] [rule on ordering of class hierarchy conversion](https://timsong-cpp.github.io/cppwp/n4868/over.match.best#over.ics.rank-4.4.4)