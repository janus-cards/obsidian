---
type: note
created: Tuesday 26 Mar 2024
tags: 
---
> [!IDEA]
> For [[Depth First Search]] with caching (i.e. [[🌸 Dynamic Programming]]), to prevent loops, you can set the value of the current position to infinity.

This means that from the current position, you are unable to return back to your current state if these exists at least one better route for you to take.

You can alternatively set to a sentinel value (like `check_in_progress`)