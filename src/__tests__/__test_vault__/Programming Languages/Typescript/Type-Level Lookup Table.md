---
type: note
created: Wednesday 23 Oct 2024
tags: 
---
```ts
type I = "A" | "B";
type O = "X" | "Y";
type G = { A: "X"; B: "Y" }; //The Lookup Type

function test<T extends I>(i: T, o: G[T]) {
	console.log(i, o);
}

test("A", "X");
test("B", "Y");
test("A", "Y"); // FAILS type checking

```

Note that  `function test(i: I, o: G[I])` would not have worked as `G[I]=O`, whereas in using generics, T gets infered to be only a single literal from I, and hence being more narrow will also narrow the range of `G[T]`

