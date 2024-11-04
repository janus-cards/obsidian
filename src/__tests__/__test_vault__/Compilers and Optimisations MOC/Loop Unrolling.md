---
type: note
created: Sunday 29 Oct 2023
tags: 
---

**Original loop**:

`for (int i = 0; i < 4; i++) {     do_something(); }`

**Unrolled loop**:

`do_something(); do_something(); do_something(); do_something();`

While the above example completely eliminates the loop, loop unrolling often does not fully unroll a loop but instead reduces the number of iterations. Here's another example:

**Original loop**:

`for (int i = 0; i < 8; i++) {     do_something(i); }`

**Partially unrolled loop**:

`for (int i = 0; i < 8; i+=2) {     do_something(i);     do_something(i+1); }`

Benefits of loop unrolling:

1. **Reduced Loop Control Overhead**: Every loop has overhead for checking the loop condition, incrementing the loop counter, etc. Reducing the number of loop iterations decreases this overhead.
    
2. **Increased Instruction Level Parallelism**: By expanding the loop body, more operations are available to be executed in parallel on modern processors.
    
3. **Optimized Memory Access Patterns**: Depending on the nature of the loop, unrolling might result in more predictable memory access patterns, which can be beneficial for cache usage.
    

However, there are also potential downsides:

1. **Increased Code Size**: Unrolling the loop increases the size of the binary code, which might lead to cache misses in the instruction cache.
    
2. **Complexity**: If not done carefully, loop unrolling can make the code harder to read and maintain.
    
3. **Diminishing Returns**: Over-unrolling a loop might not provide additional performance benefits and might even degrade performance in some cases.