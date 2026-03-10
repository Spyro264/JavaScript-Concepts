# What are Closures ?

- Closure is the ability of the function where it can access the varibales and function of the outer scope.
- In other words closure gives a function access to its outer scope.
- Closure is created every time a function is created . meaning closure gets create at function cration time

- When ever the function is created js attaches a mechannism called [[Environment]] that points to surrounding lexical environment . and it has 2 components.
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


# What Problems We Face Wihtout Closures

- A function would forget the varibales once that function finishes execution .
- Means outer function finishes -> all its varibales dissapear.
- So if there is inner function which depends on outer funtions varibles will loose those varibles.
- Closure prevent this by keeping those variables alive.

## Problem 1 — Losing State Between Function Calls

```

function counter() {
  let count = 0;
  count++;
  console.log(count);
}

counter();
counter();
counter();

```

```
ouput : 1 
        1
        1
```      
## Explaination 

- Every time `counter` function count will starts again from `0`.
- But the actual out we wanted in the above fun is `1 2 3`.
- This is where closures help us by remembereing the previous state.


```
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment();
increment();
increment();

output: 1 2 3

```

## Problem 2 — Avoiding Global Variables

- Without closures, developers would store state in global variables.

```
let count = 0;

function increment() {
  count++;
}
```
- Problem with globas is any code can modifiy it.
- Hard to maintain and debug.

## Problem 3 — Data Privacy (Encapsulation)

- JavaScript originally didn't have private variables in functions.
- Creating private variables is one of the most important uses of closures.
- A private varible is a variable that cannot be accessed directly from outside.
- Can only be accessed through specific functions (methods)

# Creating Private Variables Using Closures

- We create a variable inside a function and do not return it, but we return functions that can access it.

```
function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
```

- Here y count is private bcoz . it exists only on createCounter.
- And we cannot access count like this counter.count.
- We can access count only through the returned methods from counter function.

# Is this variable really private or just inaccessible?
- It is not truly private in memory, but inaccessible due to scope.


# JavaScript Notes: `var` vs `let` in Loops and Closures

## 1. Basic Idea of `var` and `let`

### `var`

* `var` is **function scoped**
* It ignores `{ }` blocks
* Only **one variable is created for the whole function**

Example:

```javascript
function test() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }

  console.log("outside loop:", i);
}

test();
```

Output:

```
0
1
2
outside loop: 3
```

Reason:

* `i` belongs to the **function scope**, not the loop block.

---

### `let`

* `let` is **block scoped**
* `{ }` creates a **new scope**
* Variables cannot be accessed outside the block

Example:

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // Error
```

Reason:

* `i` exists **only inside the loop block**.

---

# 2. Closures Important Rule

Closures **capture variables, not values**.

Meaning:

```
Closure stores reference to variable
NOT the value at creation time
```

Example:

```javascript
let x = 10;

function print() {
  console.log(x);
}

x = 20;

print();
```

Output:

```
20
```

Reason:

* `print` captured **variable `x`**, not value `10`.

---

# 3. `setTimeout` With `var`

Example:

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output:

```
3
3
3
```

### Step-by-step

1. Only **one variable `i` exists**
2. Loop runs fast:

   ```
   i = 0
   i = 1
   i = 2
   i = 3
   ```
3. `setTimeout` callbacks run **after loop finishes**
4. All callbacks read **same variable `i`**

Final value:

```
i = 3
```

So output:

```
3
3
3
```

---

# 4. `setTimeout` With `let`

Example:

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output:

```
0
1
2
```

### Why this works

`let` creates **new variable per iteration**

Conceptually the engine does this:

```
Iteration 1
i = 0

Iteration 2
i = 1

Iteration 3
i = 2
```

Each callback closes over **different variable**.

---

# 5. Visual Comparison

## With `var`

```
Global Environment
------------------
i = 3

closure1 → i
closure2 → i
closure3 → i
```

All closures point to **same variable**.

Output:

```
3
3
3
```

---

## With `let`

```
Env1: i = 0  ← closure1
Env2: i = 1  ← closure2
Env3: i = 2  ← closure3
```

Each closure points to **different variable**.

Output:

```
0
1
2
```

---

# 6. Important JavaScript Rule

Closures capture:

```
variable binding
```

NOT

```
value at creation
```

---

# 7. Lexical Environment

A **Lexical Environment** is a structure that stores:

1. Variables
2. Functions
3. Reference to parent scope

It has two parts:

```
Environment Record
→ stores variables and functions

Outer Environment Reference
→ link to parent scope
```

---

# 8. Execution Context and Function Calls

Every time a function runs:

```
Function Call
   ↓
Execution Context created
   ↓
Lexical Environment created
```

Example:

```javascript
function test() {
  let x = 10;
}

test();
test();
```

Two **separate environments** are created.

---

# 9. Why `let` Works in Loops

When `let` is used inside loops, JavaScript internally performs:

```
CreatePerIterationEnvironment
```

Meaning:

```
new environment per iteration
```

This is why closures behave correctly.

---

# 10. Simple Mental Model

### `var`

```
3 people pointing to SAME box
```

### `let`

```
3 people pointing to DIFFERENT boxes
```

---

# 11. Key Interview Sentence

Best explanation:

> `var` is function-scoped so the loop shares a single variable, while `let` creates a new binding for each iteration, allowing closures to capture different values.

---

# 12. Quick Summary

| Feature       | var                 | let                         |
| ------------- | ------------------- | --------------------------- |
| Scope         | Function            | Block                       |
| Loop variable | Single variable     | New variable each iteration |
| Closures      | Share same variable | Capture separate variables  |
| Common issue  | setTimeout loop bug | Works correctly             |

---

# Final Key Concept

```
Closures remember variables
NOT values
```

This is the most important rule to understand JavaScript closures.
