---
type: note
title: Class Template Specialization as a customization point
created: Friday 17 Feb 2023
tags: 
---
> [!IDEA]
>  Say we want to allow customization of F = 'hash'. We can define a class `N::hash<T>` which a user can specialize to support behaviour for T.

[[How Class Template Specialization addresses the challenges of customization]]
## Examples in C++
- `std::hash<T>`
- `fmt::formatter<T>`