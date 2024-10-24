- JS Prototype System:
	- Features:
		- **Prototype Chain**
		- **Constructor Function**
			- JS functions are actually objects of type `Function`. 
			- **Calling new on a function will**:
				- Create a blank JS object
				- Sets the prototype of this object to the function's prototype
					- These two steps are achieved with the call to `Object.create(proto)` as this creates an empty object with the prototype set to whatever is provided.
					- This proto is not deep copied. The prototype of the new object is simply linked with a [[Reference (Programming)]] to the prototype. This means that **behaviour for a family of objects can change dynamically by changing the underlying prototype object**
				- Executes the constructor, binding `this` to the instance
			- *So the constructor part is only the code that gets called to initialize the current object (and where appropriate to trigger the prototypes to get initialized*
	- **Classes as syntactic sugar over the prototype system**
		- Was introduced in ES6

Discussing Examples:
```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}.`);
};

const alice = new Person('Alice');
// name is defined on the Person object, greet is defined on the prototype of Person (which happens to be the prototype of the Person Function Object)

```


```js
// Define a constructor function for Animal
function Animal(legCount) {
  this.legCount = legCount;
}

// Add a method to the Animal prototype
Animal.prototype.describeLegs = function() {
  console.log(`This animal has ${this.legCount} legs.`);
};

// Define a constructor function for Dog that inherits from Animal
function Dog(name, legCount) {
  // Call the Animal constructor, passing the current context (this) and legCount
  Animal.call(this, legCount);
  this.name = name;
}

// Set the prototype of Dog to an instance of Animal
Dog.prototype = Object.create(Animal.prototype);

// Ensure the constructor property is set correctly
Dog.prototype.constructor = Dog;

// Add a method specific to Dog
Dog.prototype.bark = function() {
  console.log(`${this.name} says Woof!`);
};

// Create an instance of Dog
const rover = new Dog('Rover', 4);

// Test the inherited method and the new method
rover.describeLegs(); // This animal has 4 legs.
rover.bark();         // Rover says Woof!
```