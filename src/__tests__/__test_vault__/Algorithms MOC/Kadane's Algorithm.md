---
type: note
created: Sunday 16 Jul 2023
tags: 
---
### Summary ⌛:
A solution to the [[Maximum Sum Subarray]] problem - i.e. find contiguous subarray with largest sum

### Algorithm:
```python
def max_subarray(numbers):
    """Find the largest sum of any contiguous subarray."""
    best_sum = - infinity
    current_sum = 0
    for x in numbers:
        current_sum = max(x, current_sum + x)
        best_sum = max(best_sum, current_sum)
    return best_sum
```


### Complexity:
- Time O(n)
- Space O(1) additional

### Applications:
- [[Computer Vision]] (extended to 2D) to find brightest region.