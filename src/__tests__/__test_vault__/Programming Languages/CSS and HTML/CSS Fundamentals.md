---
type: note
created: Friday 04 Oct 2024
tags: 
---
## Strucuture:
- **Declaration**: **Property** (of a styled component) and its **Value**
- Group up declarations into **Declaration Blocks**
- Can **Conditionally Apply Declarations** using **Selectors**
- **Selector** + **Declaration (Block)** = **Rule or Ruleset**
---
## Algorithms
[[Complicated CSS Algorithm Examples]]

**The Cascade Algorithm**: Determines which style properties to apply to an element. Basic idea of algorithm is to sort all available styling rules, applying all of them in turn, with the last applied rules taking effect (hence the web page takes shape by successively applying or cascading each of the styles).

We sort in the following order:
- **Sort by Origin and Importance:**
    - User agent styles
    - User styles
    - Author styles
    - Inline styles
    - Within each origin, `!important` declarations take precedence over normal declarations in reverse order (so important user agent styles are of highest order)
- **Sort by Specificity:**
    - More specific selectors override less specific ones.
- **Sort by Source Order:**
    - If rules have equal specificity and importance, the one that appears later in the CSS overrides the earlier one.

--- 
## Types of Selectors
In order from highest *specificity* to lowest
1.  ID of Element (`#id:`). 
2.  Class: Classname (`.class:`). Attribute (`a[href=...]`). Selects if an HTML element has a matching attribute
3. Type: The type of html element. Or Pseudo elements or classes.