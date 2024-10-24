---
type: note
created: Tuesday 02 Apr 2024
tags:
  - algorithms
---
> [!IDEA]
> [[Two Pointer Algorithm]]. Two observations:
> - The median is the same if we prepend -Inf and append Inf to both vectors
> - Given an index in one vector, we know where in the second vector to trial

- Binary search one vector forces second index in other.
- **There is only one property we need to satisfy, namely that the value above the two indices cannot be smaller than the value in the other vector**. This is because when we finally get the median, it would violate the invariants of the median.
```cpp
double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) { 
       int n = nums1.size();
       int m = nums2.size();
       int obj = (n+m+1)/2;
       // Imagine that both arrays start with -Inf and end with +Inf
       const int  mInf = -99999999;
       const int  Inf =   99999999;
        
        int l=0,r = n+2;
        while(l<r)
        {
            int mida = (l+r)/2;
            int midb = obj-mida;
            int al = mida<=0?mInf:mida>n?Inf:nums1[mida-1];
            int ar = mida>=n?Inf: mida<0?mInf:nums1[mida];
            int bl = midb<=0?mInf:midb>m?Inf:nums2[midb-1];
            int br = midb>=m?Inf: midb<0?mInf:nums2[midb];

            if(al>br)
            {
                r=mida;
                continue;
            }
            if(bl>ar)
            {
                l=mida+1;
                continue;
            }
            std::vector<int> opt{};
            opt.push_back(al);
            opt.push_back(ar);
            opt.push_back(bl);
            opt.push_back(br);
            std::sort(opt.begin(),opt.end());
            if((n+m)%2)
            {
                return opt[1];
            }
            else
            {
                return static_cast<double>(opt[1]+opt[2])/2;
            }


        }
        return 0.0;
```