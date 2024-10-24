
> [!IDEA]
> Under the [[As-if Rule]], the compiler is able to inject pathologically something like `reg = x; x = reg` into the program. **In the single threaded case, this behaves the same, but in the multithreaded case it can introduce race conditions etc**

### Example:
A typical example is this, where the number of positive elements in a list is counted.
```cpp
for (p = q; p = p -> next; ++p) {
    if (p -> data > 0) ++count;
}

cout << count;
```

->
```cpp
register int r1 = count;
for (p = q; p = p -> next; ++p) {
    if (p -> data > 0) ++r1;
}
count = r1;

cout << count;
```

In the case where the list has no positive elements, the count will not be incremented. However, in the second case, changes to count in other threads may be erased when count gets set back to `r1`.
### Insights
Notice that there was another write operation in the transformed code. Even though the value in the ST remains consistent, **writes have observable side effects in MT environments** (in the form of cache and RAM reconciling etc) that means the two programs have different observable effects.
> [!IDEA]
> Does the [[As-if Rule]] need to extend to multi-threaded programs as well? But it cannot because making use of a [[Relaxed Memory Models]] is advantageous. **Instead of focusing on equivalence of program side effects, we should be focusing on preserving the [[Consistency Model]]**