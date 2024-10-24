---
type: note
created: Friday 11 Oct 2024
tags: 
---
- The process of converting source code from one language version to another language or version at the same level of abstraction.
- Examples:
	- [[Typescript]] to [[Javascript]]
	- New to old version of JS
- Why:
	- Allows for code that is to be executed in a specific environment (i.e. requires the code to be expressed in a specific language and version) to be effectively written in either *later versions of that language* or *other similar languages*
	- Some high level optimizations may be performed that effectively change the source code.
- Downsides:
	- Code is less efficient as needs to construct first-class features using other features
	- Code is bigger, effecting load times.