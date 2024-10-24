---
type: note
created: Monday 15 Apr 2024
tags: 
---
> [!IDEA]
> Same idea as a [[Bloom Filter]] except you maintain a count so that you can subtract by 1 to delete. If you reach overflow of count in a bucket, delete does not decrement.