# What is This ?

- This is the special keyword that referes to an object.
- The value of this is not fixed.
- It depends on how a function is called.


```
function greet() {
  console.log("Hello " + this.name);
}

const user1 = {
  name: "Nagaraj",
  greet: greet
};

const user2 = {
  name: "Ravi",
  greet: greet
};

user1.greet();
user2.greet();
```

## Real Life Example

- imagine a robot which says my name is ______
- if nagaraj presses it robot says my name is nagaraj.
- if rakesh presses it robit says my name is rakesh.
- The word “my” changes depending on who pressed.
- That “my” is exactly like this.

## Example

```
const car = {
  brand: "BMW",
  show: function () {
    console.log(car.brand);  // hardcoded
  }
};

const car2 = {
  brand: "Audi",
  show: car.show
};

car2.show();

output : BMW XXXXX
```

- here most of the people will guess output will be bmw but its not .
- Most of the people will think like this car2.show()  will go inside car2 obj and then see car.show then gies to obj car and prints bmw . this is wrong 
- value of this is defined based on where it is called not where it is defined .
- here we car calling show on car2 obj so internally it will look lke `this = show` so inside car2 `car.show` will be like this `this.show`
- The adavntage of `this` keyword is we can use same function on mulitple obj .
- This in gloal scope will points to window in browser and in node {}.


# Why Arrow Function Dont Have Their Own This ?

- As we all know arrow function wont have their own `this` -
- In the below obj u can see we are using arrow function .
- Where do you think the arrow function is created ?
- Arrow function is created on global scope .
- Yes arrow fun is created at global scope even though that is inside user obj.
- Why arrow function is crearted inside global scope coz , 
- Objects do NOT create a new scope in JavaScript. ***********
- This is how js see that arrow fun 

```
const user = {
  name: "Nagaraj",
  greet: (arrow function created HERE in global scope)
};

```

- The object literal {} is just data creation.
- it does NOT create a new execution context.
- So the arrow function is created while JS is executing global code.

# Compare With Function Scope

```
const obj = {
  name: "Nagaraj",
  normal: function () {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj.normal();

output : Nagaraj 

```

- Here the output is "Nagaraj" Why ?
- Here the arrow fucntion is created inside the function.
- And function creates new scopes in js.
- So arrow captures this from normal().

# The Simple Rule .

- Arrow function locks this from the nearest function scope.
- If no function scope exists → it takes from global.
- Object literal does NOT create new scope.