---
type: note
created: Sunday 13 Oct 2024
tags: 
---
- Prototypes based Programming
	- Basic Features:
		- Inheritance is a relation between **objects** 
		- **The parent object is called the prototype**. 
		- It is connected to its parent by a link. Because this is hierarchical, you have multiple links which form a [[Prototype Chain]]
	- Comparison to Classes:
		- Inheritance is a relation between **types** / classes
	- **Property Access Mechanism**
		- If a name is undefined in an object, you check if it exists in the parent object / prototype, and so on. This is performed by the language.
		- **Implication**: The search stops as soon as a definition is found, so derived objects will [[Shadow (Programming)]] prototype definitions.
	- **Inheritance**:
		- Say we have created a Dog function constructor that we have linked to Animal by setting the Dog's prototype to the Animal's. *How would be invoke the animal's constructor*?
		- We simply call the function constructor in the dog's constructor and pass in `this`: `Animal.call(this,args...)`
			- Note that if Animal sets a property with an arg (like `name`), this *gets set in the Dog's object, not the Animals prototype!*. This is because the animal prototype is shared across all instances of Dog, so we would share state if we had set the Animal's properties. 
		- In languages like C++, construction involves creating parent objects first and initializing them. In JS or other prototype languages, construction means initializing the created and **current object** with a *chain of constructors*
	- **Implications**
		- Usually link to existing prototype objects instead of copies during object creation. **Changing prototype behaviour will change all those objects.**