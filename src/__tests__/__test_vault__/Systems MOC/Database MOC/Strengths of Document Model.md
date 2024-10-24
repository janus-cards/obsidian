---
type: note
created: Monday 15 Apr 2024
tags: 
---
- [[Object-Relational Mismatch]] is far greater in a [[Relational Model]] where the data is distributed across multiple tables. Hence, database could be far simpler if its just one to one with application
	- Otherwise, you need to perform [[Shredding (Database)]] to split fields of a record across tables.
- Better [[Data Locality]] as all fields of an object are stored in the same place, allowing for faster reads and writes of a single entry.
- More natural for [[One to Many Relations]]
- [[Schema-on-read]] is more flexible.
	- Arguably easier to migrate from one version to another as the imposition that the database all has to be in one version is relaxed.