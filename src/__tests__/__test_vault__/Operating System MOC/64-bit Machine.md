---
type: note
created: Monday 16 Oct 2023
tags: 
---
When we say a machine is "64-bit", it typically refers to the width of the machine's general-purpose registers and the primary data bus. This influences several aspects of the system's performance and behavior:

1. **Memory Addressing**: A 64-bit system can natively address a vast amount of memory. Specifically, \(2^{64}\) addressable locations. In practical terms, this allows a 64-bit system to utilize more than 4 GB of RAM, which is a limitation for 32-bit systems (though there are workarounds for 32-bit systems like Physical Address Extension).

2. **Data Throughput**: 64-bit systems can process data in 64-bit chunks per clock cycle, potentially doubling the data throughput compared to a 32-bit system, especially in operations that can exploit the full 64-bit parallelism.

3. **Native 64-bit Operations**: Operations on 64-bit integers (addition, subtraction, multiplication, etc.) can be executed in a single step, whereas 32-bit systems might need multiple operations or more complex circuitry to achieve the same result.

4. **Instruction Set**: Modern 64-bit CPUs come with an updated instruction set that often includes optimizations and new features not present in their 32-bit predecessors.

How does this affect the size of `int` in C?

The C language standard (C99, C11) doesn't dictate the exact size of most data types, such as `int`. Instead, it provides minimum requirements. The size of `int` (and other types) is typically chosen by the compiler's authors based on what they believe is the most suitable for the target architecture.

On many 32-bit systems, the size of `int` is 32 bits (or 4 bytes). However, on many 64-bit systems (especially those following the LP64 data model like most Unix-like systems), the size of `int` remains 32 bits for compatibility and efficiency reasons. Instead, the `long` type often becomes 64 bits. On Windows, which follows the LLP64 data model, both `int` and `long` are 32 bits, but `long long` is 64 bits.

So, while a machine's "bitness" can influence data type sizes, the relationship isn't direct, and other factors come into play. Always consult your compiler's documentation or use the `sizeof` operator to determine the size of a type for a specific platform and compiler.