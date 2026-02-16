# What is Symbol ?

- A Symbol is a special primitive data type in JavaScript that creates a unique value.
- Even if two symbols look the same, they are always different..
- It is mostly used to create unique object property keys so that no one can accidentally overwrite them.

# Why Symbol Was Introduced?

- If two developers use the same property name in an object, it can overwrite accidentally. (before ES6).
```
const user = {
  id: 101
};
```
- Now imagine some library also adds id property — boom 💥 conflict.

# Using Symbol as Object Key 

```
const id = Symbol("id");

const user = {
  name: "Nagaraj",
  [id]: 101
};

console.log(user[id]); // 101
```

- You must use [id]
- It does NOT clash with normal keys.

# Important Property of Symbol

- Symbol properties Are NOT enumerable in for...in.
- Symbol properties Are NOT returned in Object.keys().
- Hidden from normal iteration. 

```
const id = Symbol("id");

const user = {
  name: "Nagaraj",
  [id]: 101
};

console.log(Object.keys(user)); // ["name"]
```
- Symbol property is hidden.
- Object.getOwnPropertySymbols(user);

