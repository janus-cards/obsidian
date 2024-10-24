- [[CPU Caching]] relaxations
- [[Compiler Optimizations]]

Modern computer architectures often employ caching and instruction reordering to optimize performance. While these optimizations are generally transparent in single-threaded programs, they can lead to unexpected behavior in multithreaded programs if memory visibility is not properly managed. For example, writes to memory might be cached and not immediately visible to other threads, or the order of memory operations might be rearranged, causing other threads to see them in a different order than they were executed.