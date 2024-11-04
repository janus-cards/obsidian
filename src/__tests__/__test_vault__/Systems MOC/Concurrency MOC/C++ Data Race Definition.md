> [!IDEA]
> You cannot evaluate two [[Conflicting Operations (Concurrency)]] without a meaningful ordering.

When **two expresses** try to access the same memory location (one writing and the other doing any access), these expressions are said to **conflict**. Two conflicting  **evaluations** cause a [[Data Race]] / [[Race Conditions]], **unless**:
- Evaluation is on the same thread
- Both are [[Atomic Operations]] - `std::atomic`
- There is ordering on the access - `std::memory_order`