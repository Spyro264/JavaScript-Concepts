# What are Closures ?

A closure is a function that remembers the variables from the place where it was created , even after the outer function finished execution.
In Technicall words . A closure is a combination of a function and the lexical environment within which that function has been created.
What is lexical Environment : The lexical environment is an internal JS structure that contains

1. Environment Record → actual variables (let, const, function params)
2. Outer Lexical Environment reference → link to parent scope
   you can think of it lie this
   LexicalEnvironment = {
   EnvironmentRecord: { a: 10, b: 20 },
   outer: <parent scope reference>
   }

## Example

# First real closure example

```
function counter() {
let count = 0;
function inner() {
count++;
return count;
}
return inner;
}
const fn = outer();
fn(); // ?
fn(); // ?
```

- here we have a counter function which is returning another function .
- When you did this const fn = outer();
- The outer function executes initializes the count varibale and assigns the value 0 .
- Then it returns the function named inner.
- The returned function is saved inside the keyword fn.
- Now the fn holds the inner function and we can it.
- When you call the fn() the execution starts . but most of the people thinks the execution will starts from the first line of the counter().
- But That is wrong when you call fn() the executions starts from the inner function only . so it wont create count variable every time you call the fn().
- Now the inner function holds the referecne for the variables of outer fun .
- At first count = 0 inner function has reference to count it will do count++ and returns the count .
- When you called the fn() for the second time again it starts execution from the inner function. still the inner fun has the reference to the count
- Now count is 1 we are doing count++ 1 becomes 2 and we return the count.
- One thing we have to remember when ever we use functions a lexical environment will be created for thos e functions
- In our example also when js encouners inner function a lexical env is created and it has environment record and link to outer fun variables . this is how our inner fun remembers the outer fun count even though the outer fun has finished execution.
- One important thing a function is created when js encounters its definition , not when its called .
- When the inner function is created, JavaScript assigns it a reference to the lexical environment of the surrounding scope.(When JavaScript creates the inner
- function, it also gives that function a link to the variables that exist around it.).
- The inner function stores a hidden internal reference called [[Environment]] that points to the outer lexical environment.
-

# Important

- When a function is created, JavaScript assigns it a hidden internal reference called [[Environment]], which points to the lexical environment where the function
- was defined. When a function is executed, JavaScript creates a new lexical environment for that function to store its local variables. In our code, counter is
  d- efined in the global scope, so counter.[[Environment]] points to the global lexical environment. The inner function is defined inside counter, so inner.
  [[Environment]] points to counter’s lexical environment. Even after counter finishes execution, its lexical environment remains in memory because inner.
  [[Environment]] still references it. This is how the inner function reme
