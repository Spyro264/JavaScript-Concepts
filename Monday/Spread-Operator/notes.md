# WHAT IS SPREAD-OPERATOR 🚀 ?

- Spread operator is used to EXPAND ELEMENTS of an array or properties of an object into individual elements .
- EXPAND ELEMENTS means taking out individual elements from an array or properties of an object and spreading them where ever we need.
- spread operator is denoted by three consecutive dots (...).
- Spread operator helps the developers by simplifying the work with arrays and objects
- it simplifies working with arrays and objects by making operations like copying , merging and modifying data easier and more readable.
- spread operator is used in function calls.

# PROBLEMS SOLVED BY THE SPREAD OPERATOR 🚀 ?

- Avoid manual loops to copying data.
- modyfying objects / arrays without mutating the original arrays or object.
- merging arrays and objects without extra logic.

# MERGING ARRAYS WITHOUT SPREAD OPERATOR 🚀

```javascript

- before spread operator we needed to manually loop through all elements to copy array to another array which is shown below.

// without spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//using foreach to merge 2 arrays
arr1.forEach((item) => arr2.push(item));
console.log(arr2);

// using for loop to merge 2 arrays
for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}
console.log(arr1);

// using concat method to merge 2 arrays
const mergedArray = arr1.concat(arr2);
console.log(mergedArray);

```

# HOW SPREAD OPERATOR(...) MAKES THE ABOVE CODE MORE EASILY

```javascript

- instead of using loops to merge we used spread operator

// with spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);


```

# MERGING OBJECTS 🚀

```javascript
const user = { nane: "nagaraj", age: 24 };
const details = { address: "koppal", area: "bengaluru" };

const mergedObjects = { ...user, ...details };
console.log(mergedObjects);
```

# FUNCTION ARGUMENT (spreading an array as arguments) 🚀

```javascript
// previoulsy we are passing argumnets like this

const numbers = [1, 2, 3];
function add(a, b, c) {
  return a + b + c;
}

console.log(add(numbers[0], numbers[1], numbers[2]));

// using spread operator

const numbers = [1, 2, 3];
function add(a, b, c) {
  return a + b + c;
}

console.log(add(...numbers));
```
