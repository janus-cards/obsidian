> [!IDEA]
> The `lock` keyword may prefix instructions. This ensures that the entire instructions gets performed atomically, like `inc` which is really a `fetch_add`. 

## Mechanism
When executed, a *lock signal* is asserted onto the [[Memory Bus]] preventing other processors from using it. This can cause other processors to block

[[Ways to improve performance on memory bus lock assertions]]