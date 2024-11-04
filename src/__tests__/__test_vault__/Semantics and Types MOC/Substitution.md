> Title ❕: **Substitution**
> Created 📅: **Friday 08 Oct 2021 16:49**
  Tags 📎: #semantics 

### Summary ⌛:
A **substitution** maps a certain literal / token to another (possibly even an arbitrary expression). Denoted usually by $\sigma$
Two things to think about:
- If substitute for the same variable as a function's [[Formal Parameter]], formal parameter binds more tightly, so we don't apply sigma inside.
- Must be [[Capture Avoiding]]
	- This means that we must avoid substituting a **free variable** if it will become **bound**.
	- Can work to **alpha-equivalence**