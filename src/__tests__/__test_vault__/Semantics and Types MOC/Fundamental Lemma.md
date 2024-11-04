> Title ❕: **Fundamental Lemma**
> Created 📅: **Wednesday 13 Oct 2021 17:04**
  Tags 📎: #semantics  #type-theory 

### Summary ⌛:
Well typed terms halt (as opposed to getting stuck) if values are substituted in and the values are consistently typed with the free variable types.
$$x_1:X_1,\ldots x_n:X_n\vdash e:T \quad \land \quad \text{for all i to n} \quad \cdot \vdash v_i:X_i \quad \land \quad v_i \in Halts_{X_i} \quad \implies \quad [V/X]e \in Halts_{T}$$

Proved by induction on Typing Relation

### Corollaries
Programs with finite types halt.