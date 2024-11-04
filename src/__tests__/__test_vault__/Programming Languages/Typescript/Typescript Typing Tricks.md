### Typing Tricks
- Remember that type rules mirror value rules, so what looks like syntax for values logically might look like syntax for types
- Indexing and spread operators work
- Can check something close to equality using `extends` notation to model [[OOP Inheritance]] / Is-A relationship
- **Union types distribute**: `T<A|B> = T<A>|T<B>`
- Ways to iterate a tuple of types:
	- Iterate tuple and test for length
		- To increase index *create an array one larger than the index*
			- `[...(any[])Index, 1]['length']`
			- Doing (any[])Index creates a tuple of that length., then we spread and add another element and get the length, so that we have effectively increased  - *tuple type cast*
	- Tail trick:
		- Value extends `[Value[0], ...infer rest]`
- [[Type-Level Lookup Table]]
[[TypeScript Illustrated Typing Examples]]