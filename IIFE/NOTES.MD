# What is IIFE ?

- IIFE stands for Immediately Invoked Function Execution.
- Its a fun that u define and run immediately.
- The whole fun wrapped inside `()` that makes it an expression instead of declaration.

## Syntax

```
(function(){
    console.log("hello Nagaraj")
})();
```

- Notice the `()` at the end will call the function after defining it .

## Why use IIFE ?

- Variables inside an IIFE don’t leak outside, which is super helpful in large projects.
- IIFEs are mostly used for scoping and isolation.
- Sometimes you want some setup code to execute once and not be reused elsewhere.

## When to use IIFE ?

- When you want one-time setup code.
- When you want private variables that other parts of your code can’t touch.

# Ways to create IIFE ..

1. Classic IIFE (Function Expression)

```
(function() {
    console.log("Classic IIFE");
})();

```

2. Using ! (Unary Operator)

```
!function() {
    console.log("IIFE with !");
}();

You could also use +, -, ~ instead of !.

```

3. Using Arrow Function (ES6+)

```
(() => {
    console.log("Arrow function IIFE");
})();

```

4. Assigning IIFE to a variable

```
const result = (function() {
    return 42;
})();
console.log(result); // 42

```

5. Named IIFE (rare but possible)

```
(function myIIFE() {
    console.log("Named IIFE");
})();

```
