> Title ❕: **Curry Howard Lambek Correspondence**
> Created 📅: **Monday 11 Oct 2021 14:55**
  Tags 📎:  #type-theory 

### Summary ⌛:
There is an almost 1-1 relation between logic and types. 

| Logic                                        | Programming Language                                  |
| -------------------------------------------- | ----------------------------------------------------- |
| Propositions                                 | Types                                                 |
| Proofs of P                                  | Programs of a type P                                  |
| Conjunction                                  | Pairs / Product Types                                 |
| Disjunction                                  | Variants / Sum Types                                  |
| Implication                                  | Function Types                                        |
| $\land I$                                    | "Make a Pair" term                                    |
| $\land E$                                    | "Projection" term                                     |
| $\lor I$                                     | "Make a Sum" term / Tag                               |
| $\lor E$                                     | "Case" term                                           |
| $\implies I$                                 | "Make a Function" term                                |
| $\implies E$ / [[Modus Ponens]]              | Function Application                                  |
| Assuming Proposition P                       | Assuming a variable X has a type T                    |
| Truthhood                                    | Unit Type                                             |
| Falsehood                                    | Empty Type (if encounter abort program)               |
| Introduction Rules   [[Natural Deduction]]   | Constructors                                          |
| Elimination Rules      [[Natural Deduction]] | Deconstructors                                        |
| Normalized Proofs                            | Typing Derivation of Value                            |
| Normalization of a Proof                     | Evaluation of Program                                 |
| Normalization Order                          | Evaluation Order (Determined by Congruence Relations) | 
| Logical Consistency                          | Proof that no term has the empty type                 |

When our program reduces/ executes, we get a normalized proof. This is because our terms get smaller, yet still have the same type, so the typing derivation and proof is much smaller.

#### Translating some Type Theoretical ideas into statements about proofs
[[Type Progress Theorem]] says that we can normalize our proof if it is not already normalized.

[[Substitution Lemma]] says that if a proposition requires an extra typing judgement to prove, but we can prove that typing judgement a different way, then we can generate a new proof / program by substituting in the other proof. Also says that proof remains true after substitution.

Because of [[Type Preservation Theorem]], evaluating program simply makes proof better, as each evaluation step leaves a term that corresponds to a more concise proof of the same proposition, as the type is the same.

[[Exchange Lemma]] simply states that we can rotate branches of a proof tree and still get a proof. Also states that order of typing judgements does not matter.

[[Weakening Lemma]]states that if we run the program on more memory, the program runs the same, and likewise the proof remains the same, as we can consider the extra assumptions as independent and unaffecting.

## Types of operational semantic rules
We have:
- **Congruence relations**
	- Inferences rule with assumption
	- Fixes the order of evaluation
- **Reduction Relations** 
	- Axiom
	- Actually performs a computation




