---
type: note
created: Sunday 11 Feb 2024
tags: 
---
> [!IDEA]
> Continues the idea of [[Chain of Thought Prompting]].


- [[Zero Shot]] [[Chain of Thought Prompting]] sometimes gives wrong answers
- Manual [[Few Shot]] CoT produces much better results but:
	- Is manual
	- Efficacy is dependent on diverse examples


# Solution:
- Generate some diverse questions to solve
- Group 
- Then zero shot each of the groups and record the reasoning
- Use these as your few shot context
![[auto-cot.webp]]