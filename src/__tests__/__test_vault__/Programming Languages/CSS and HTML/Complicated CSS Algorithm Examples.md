---
type: note
created: Friday 04 Oct 2024
tags: 
---
### Don't forget about Browser Properties with High Specificity

```html
<ul>
  <li>Default <a href="#">link</a> color</li>
  <li class="my-class-1">Inherit the <a href="#">link</a> color</li>
  <li class="my-class-2">Reset the <a href="#">link</a> color</li>
  <li class="my-class-3">Unset the <a href="#">link</a> color</li>
</ul>
```

```css
body {
  color: green;
}


.my-class-1 a {
  color: inherit;
}

.my-class-2 a {
  color: initial;
}

.my-class-3 a {a
  color: unset;
}
```

- Obviously the text in all the `<li>` is green because that is inherited
- However, browsers provide their own style sheets (which are lower priority than the users) but use the link pseudo class, therefore taking higher priority than inheritance. Hence, you get the **browser link property for the first anchor tag**
	- This is in the [[User Agent CSS]] style sheet: `ua.css`
