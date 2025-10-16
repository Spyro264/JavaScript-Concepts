# What is Currying ?

- Currying is a process transforming a function which takes multiple arguments into a sequence of function . each taking one arg at a time .

## Normal Function

```
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5
```

## Curried Version

```
function add(a) {
    return function(b) {
        return a + b;
    };
}

console.log(add(2)(3)); // 5
```

# Advantages of using currying

- Allows you to pre-fill some arguments of a function without calling it fully.
- Helps with partial application of arguments.
- Avoids repetition in code by pre-filling some parameters.
- Makes functions reusable and modular.
- Encourages functional programming patterns.
