> Title ❕: **Termination and Halting**
> Created 📅: **Wednesday 13 Oct 2021 16:52**
  Tags 📎: #type-theory  #semantics 

### Summary ⌛:
Very hard to prove as most languages do not necessarily have terminating programs. Hence, cannot use induction directly.
Instead, strategy is to show **all programs of finite type terminate** and this can be done with induction on **types**.

### Definitions:
A term halts iff $e \rightarrow^* v$

### "Halt" Strategy
Define a type-indexed family of terms (sets of terms parameterized by a type).
- $Halt_0 = \emptyset$
- $e \in Halt_1 \iff \text{e halts}$ 
- $e \in Halt_{T_1\rightarrow T_2} \iff \text{e halts} \land \forall{x:T_1}.\text{e x} \in Halt_{T_2}$ 

Then prove the [[Closure Lemma]] and the [[Fundamental Lemma]].

#### Consistency
Termination and [[Logical Consistency]] are very close.