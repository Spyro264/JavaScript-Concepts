# ALL ABOUT SCOPE CHAINING 

- First what is scope ? -> Where variables are accessible code.
- Scope chain is created when function is defined not when it is called.

# Javascript has

1. Global scope
2. Block scope
3. Function scope
4. Module scope

```
let a = 10; // Global scope

function test() {
  let b = 20; // Function scope
  console.log(a); // accessible
}

test();
```

# What Is Scope Chain ?

- Scope chain is the mechanism by which js resolves variables references by searching in the curent scope and then moving out throught the parent lexical environment until it reaches the global scope 

## In Simple words

- When js cannot find a variable in the current scope . it moves out word setp-by-step to parent scope.

## Lexcial scope 

- Lexical scope is the rule in JavaScript that determines variable accessibility based on where functions and variables are physically written in the source code, not where they are executed.
- Lexical scope means that the functions scope is determined at the time of definition , and it has access to varibales from its own scope and alll outer scope in which it is defined.


# Dynamic scope 

- Dynamic scope is the rule in js where variable lookups depends on the function call not where the function is  defined.
- Lexical scope : based on where the function is defined.
- Dynamic scoep : based on where the function is called.

```
let x = 10;

function a() {
  console.log(x);
}

function b() {
  let x = 20;
  a();
}

b();
```

- Output in lexical scope : `10`;
- Ouptut in dynamic scope : `20`


# Why JavaScript Is NOT Dynamic

- Js is lexically scope meaning . scope is fixed at function creation time .
- It does not change based on the caller. 