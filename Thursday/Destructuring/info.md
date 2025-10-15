# WHAT IS DESTRUCTURING 🚀 ?

- Destructuring is a feature in javascriptthat allows us to extract values from an array or properties from object in a concise way.

# WHY DO WE NEED DESTRUCTURING 🚀 ?

- Destructuring simplifies code and make it more readable .
- when we are working with objects and arrays we used to access elements by using Dot notation for objects and bracket notation for arrays
- but in Destructuring we can directly access the values and properties of arrays and properties.

# Without Destructuring 🚀 ?

```javascript
// For Objects
const user = {
  name: "nagaraj",
  address: "koppal",
  age: "24",
  designation: "Software Developer",
};

const userName = user.name;
const userAddress = user.address;
console.log(userName, userAddress);

// For Arrays
const details = ["nagaraj", "spyro", "blue"];

const name = details[0];
const name2 = details[1];
console.log(name, name2);
```

# WITH DESTRUCTURING 🚀 ?

```javascript
const user = {
  name: "nagaraj",
  address: "koppal",
  age: "24",
  designation: "Software Developer",
};

// destructuring properties from object
const { name, address, age, designation } = user;
console.log(name, address, age, designation);

const details = ["nagaraj", "spyro", "blue"];
// destructuring values from arrays
const [first, second, third] = details;
console.log(first, second, third);
```

# SWAPPING VARIBALES BECOMES MORE EASY BY USING DESTRUCTURING 🚀 ?

```javascript

let a = 1;
let b = 2;
console.log("before swapping" + " " + "a = " + "" + a + ",", "b = " + b);

//output
before swapping a = 1, b = 2

[a, b] = [b, a];
console.log("after swapping" + " " + "a = " + a + "," + "", "b = " + "" + b);

//output
after swapping a = 2, b = 1
```
