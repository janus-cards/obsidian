---
type: note
title: Chrono Motivation
created: Thursday 26 Jan 2023
tags: 
---
- Separate ints from time (make less ambiguous): `sleep(10)` -> `sleep(10ms)`
- Catch errors at compiler time. (Conversion between int and durations are not implicit)
	- *If allowed f(3) to compile then changing the signature from seconds to millisecond duration would not cause a compile time error, but the semantics have changed a lot.*
- Fast and efficient (compiles same as if were int.)
- **Use types to deal with units mixing.**