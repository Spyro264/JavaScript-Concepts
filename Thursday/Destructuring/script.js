// For Objects
const user = {
  name: "nagaraj",
  address: "koppal",
  age: "24",
  designation: "Software Developer",
};

const { name, address, age, designation } = user;

console.log(name, address, age, designation);

// For Arrays
const details = ["nagaraj", "spyro", "blue"];

const [name1, name2, colour] = details;

console.log(name1, name2, colour);

let a = 1;
let b = 2;
console.log("before swapping" + " " + "a = " + "" + a + ",", "b = " + b);

[a, b] = [b, a];
console.log("after swapping" + " " + "a = " + a + "," + "", "b = " + "" + b);
