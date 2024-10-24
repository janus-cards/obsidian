> Title ❕: **Regularity of Typing**
> Created 📅: **Saturday 16 Oct 2021 11:53**
  Tags 📎: #type-theory 

### Summary ⌛:
Simply put, if the type checker finds a type for a term, then that term must be well formed.
$$\Theta \vdash \Gamma ctx \quad \land \quad \Theta ; \Gamma \vdash e:T \quad \implies \quad \Theta \vdash \text{T type}$$