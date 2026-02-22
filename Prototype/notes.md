# What is Prototype in Js ?

- Protoype is a mechanism in js that allows objetcs to inherits methods and properties from other objects.
- Js uses protptype-based-inheritance , not classical inheritance like c++ or java.
- Every object has an internal hidden property called [[prototype]]

# Why Prototype Exists ? 

- Without prototype every ojects will have its own copy of methods.
With protoype methods are shared in memory.

```
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log("Hi " + this.name);
};

const user1 = new User("Nagaraj");
const user2 = new User("Rakesh");

user1.sayHi(); // Hi Nagaraj
user2.sayHi(); // Hi Rakesh
```

# What is Happening Internally ?

- `User` is a constructor function.
- Every fun in js automatically has a `prototype` property.
- When we create obj using new User(). js link that obj to User.prototype.
- If method is not found in the obj . js looks inside its prototype.
- This lookup process is called prototype chaining
- When we do `user1.sayHi()` . js checks does user1 have sayHi ? NO
- checks inside user1._proto__ -> which is User.prototype
- Found it execute it .

# Example

```
const calculator = {
  add(a, b) {
    return a + b;
  }
};

const myCalc = Object.create(calculator); -> internnally myCalc.__proto__ = calculator 
// so that myCalc now can acces the add method from calculator

-- Proof --

console.log(myCalc === calculator); 
// false ✅

console.log(myCalc.__proto__ === calculator); 
// true ✅

```

- Why we used this line coz `const myCalc = Object.create(calculator)`.
- myCalc does have its won add method 
- By doing this `const myCalc = Object.create(calculator)` . now myCalc inhertis the add emthod from calculator obj


 
# Real Purpose of Object.create()

- it is used for prototype inheritance without constructor functions 
- Sharing methods between objects etc....


# Differecne between .__proto__ and Prototype

 ## Prototype 
  1. prototype belongs to functions.
  2. property of a function.
  3. used when creatin objetcs with new
  4. Exists only on functions

## __proto__
 1. property of an object.
 2. used to access an objects internal property
 3. Exists only on object
 4. .__proto__ points to Object from which it inherits from
 5. Every obj has a prototype .__proto__ is a way to access it.

 # Note : Arrow functions does not have prototype