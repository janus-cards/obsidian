> Title ❕: **Existential Types**
> Created 📅: **Wednesday 20 Oct 2021 17:23**
  Tags 📎: #type-theory 

### Summary ⌛:
An existential type is a essentially a [[Module]]. Take an ML [[Signature]] which really is an interface equipped with an abstract data type underlying that interface, we want to realize this interface by providing a concrete type to replace the abstract type, and also a concrete implementation.

A term is an element of the existential type $\exists \alpha . B$ if it is essentially a pair of < concrete type for alpha, implementation for B of the concrete type>. Alpha is the abstract type and B is the signature/interface that relies on alpha.

Existential types are important really for [[Abstraction]] and [[Data Abstraction]]. 
> Code to an interface, not an implementation.

### Packaging and Unpacking
![[📒 Library/Resources/Attachments/Pasted image 20211020173152.png]]
Unpacking corresponds to importing a package.

### Church Encodings for Existential Types in System F
![[📒 Library/Resources/Attachments/Pasted image 20211020173524.png]]


