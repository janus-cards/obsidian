---
type: note
created: Wednesday 18 Oct 2023
tags:
  - cmake
---
## Example 1: Avoiding multiple configurations for different compile time settings (Kind of an unnecessary optimization)
Say we wanted to switch between debug and release modes. If this had to be set in configuration phase, then we would have to reconfigure fresh when we switched.

With generator expressions, we can defer decisions like this until generation.
```cmake
target_link_libraries(myapp
    $<$<CONFIG:Debug>:debug_library>
    $<$<CONFIG:Release>:optimized_library>
)
```

## Example 2: Good for one liners
We could either do an if and in the body target some defintions etc, or we could use a generator expression that can conditionally ad