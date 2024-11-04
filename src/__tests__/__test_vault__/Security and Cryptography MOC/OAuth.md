---
type: note
created: Sunday 06 Oct 2024
tags: 
---
### What was the problem that OAuth was trying to solve
- The traditional model for client-server authentication **did not extend well to third parties**, requiring the owner of the resource to share their (typically password) credentials. This is bad:
	- For auditing: All access looks like it comes from the same entity
	- For security: Violates [[Principle of Least Privilege]] because 3rd parties have more access than they need
	- For management: Difficult to revoke credentials

> [!IDEA]
> Solution: Separate the role and credentials of resource owner with resource borrowers (3rd party)

This idea is recycled by the [[AWS IAM Roles]] system