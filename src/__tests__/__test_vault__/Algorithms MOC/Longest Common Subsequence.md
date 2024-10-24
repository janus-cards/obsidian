> Title ❕: **Longest Common Subsequence**
> Created 📅: **Tuesday 12 Oct 2021 16:14**
  Tags 📎: #algorithms 

### Summary ⌛:
Use [[🌸 Dynamic Programming]] on the recurrence relation:
- $LCS_{a,b}(x,y)= LCS_{a,b}(x-1,y-1)$ if `a[x] = b[y]`
- $LCS_{a,b}(x,y) = max (LCS_{a,b}(x,y-1), LCS_{a,b}(x-1,y))$ if `a[x] != b[y]`
- 0 if x or y = 0 (1 indexing)
   