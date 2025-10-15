# WHAT IS REST OPERSTOR 🚀 ?

- Rest operator (...) is used to collect multiple values into an array or an object .
- it is the opposite of the spread operator which expand values.
- Rest operator is used in function argumnets.

# WHY WE USE REST OPERATOR 🚀 ?

- We use rest operator when we dont know how many arguments a function will recieve.
- When we want to collect remaining elements from an array.
- When we want to extract some properties from an objectand keep the rest.

# REST OPERATOR IN FUNCTION ARGUMENTS 🚀

```JAVASCRIPT

function add(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(add(1, 2, 3, 4));

```

# REST OPERATOR IN ARRAYS (COLLECTS REMAINING ELEMENTS) 🚀

```javascript
// here it takes out the first and second element and puts rest of the elements in an array

//rest collects all remaining elements after two elements

const array = [1, 2, 3, 4, 5, 6];

const [first, second, ...rest] = array;
console.log(first);
console.log(second);
console.log(rest);
```

# OUTPUT 🚀

```javascript
1, 2, [3, 4, 5, 6];
```

# REST OPERATOR IN OBJETS (COLLECTS REMAINING PROPERTIES) 🚀

```javascript
const user = { name: "nagaraj", age: 20, address: "koppal" };

const { name, ...rest } = user;
console.log(name);
console.log(rest);
```

# OUTPUT 🚀

```JAVASCRIPT

// After extracting name rest collects all other properties

nagaraj
{age: 20, address: 'koppal'}

```
