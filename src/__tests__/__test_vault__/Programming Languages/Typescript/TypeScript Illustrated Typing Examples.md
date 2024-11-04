---
type: note
created: Wednesday 23 Oct 2024
tags: 
---

##### Pick Implementation
```ts
type MyPick<T, K extends keyof T> = {[Property in K]:T[Property]};
```

- Need the extends to ensure that you can do `T[Property]`
- [[Typescript Mapped Types]]

##### Readonly Implementation
```ts
type MyReadonly<T> = {+readonly [Property in keyof T]: T[Property]}
```

- Same idea but using *mapping modifiers - [TypeScript: Documentation - Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers)*
#####  Tuple to Object
```ts
type TupleToObject<T extends readonly any[]> = {[V in T[number]]:V}
```

- [ ] How do you type an arbitrary tuple?
- [ ] Are tuples same as lists?
- [TypeScript: Documentation - Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as)
- [TypeScript: Documentation - Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html) - Index over the Value space (lists and objects are indexed types T: A->B so `T[A]` = B)

#####  First of Array
```ts
type First<T extends any[]> = T extends [] ? never: T[0]
```

- [TypeScript: Documentation - Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)


#####  Length of Tuple
```ts
type Length<T extends readonly any[]> = T['length']
```

- [ ] Significance of `as const`?
	- **Narrows an array or a tuple type to a specific tuple of literals.**
- What keys do tuple types have:
	- Indices but also whatever is on the prototype, including `length`. if these can be deduced at statically, then the type is narrowed to the literal.


##### Exclude Implementation
```ts
type MyExclude<T, U> = T extends U ? never : T;
```

- Union types distribute
- A|never simplifies to A
- `A extends A|B` (is more narrow than)


#####  Awaitable Implementaiton
```ts
type MyAwaited<T> = T extends Promise<infer A>? MyAwaited<A>:T;
```

- Inferring in conditional
	- [TypeScript: Documentation - Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)


#####  If
```ts
type If<C, T, F> = C extends true? T: F;
```

- Using literal type of true


#####  Concat
```ts
type TupleType = readonly unknown[] | unknown[]

type Concat<T extends TupleType, U extends TupleType > = [...T,...U]
```

- Spread operator
- Also need to support readonly type (like literals defined with `as const`)


#####  Includes
```ts
type Includes<T extends readonly any[], U> = {

[P in T[number]]: true

}[U] extends true ? true : false;
```

- Better than `U extends T[number]` because it checks if they are equal, not just is narrow


#####  Parameters Implementation
```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer A)=> any?A:never;
```





