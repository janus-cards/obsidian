1. Let $M$ be a set of memory operations (read, write) on shared memory locations.
2. Let $P$ be a set of processors, where each processor $p \in P$ has a sequence of memory operations, denoted by $\textit{ops}(p)$.
3. Let $<_p$ denote the per-processor order relation, where $m_1 <_p m_2$ means operation $m_1$ on processor $p$ occurs before $m_2$ on the same processor.
4. Let $<_m$ denote the global memory order relation, where $m_1 <_m m_2$ means operation $m_1$ occurs before $m_2$ in the global order of memory operations.