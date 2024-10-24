---
type: note
created: Sunday 14 Jan 2024
tags:
  - algorithms
---
> [!IDEA]
> For solving [[Majority Element Problem]] in O(1) space.
> Keep a current vote count and candidate. As you traverse list, if the element is the same as the candidate, increment, otherwise decrement the vote. If the vote is zero, then the next element becomes the new candidate
- By the end, we have the majority element as our candidate

## Observations:
- If a majority element exists, no other element can have more than n/2 occurrences (otherwise it would be the majority element)
- Every non major element can be paired up with a majority element
## Proof
- Everytime the count gets to 0, this means that all previous non major elements have been cancelled by some number of major or non major elements. Hence, if we have see 2xn elements, it must be the case that no more than n elements are the major elements
- Hence at this point, the relative difference between major and non-major elements is either the same or there are now more major elements. Hence the major element remains the major.
- Either we now have the candidate set to the major, or we are in the same problem but with a smaller array size so by strong induction we are done.