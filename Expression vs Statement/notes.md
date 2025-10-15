# What is Expression ?

- An expression is any valid unit of code that can be evaluated to a value.
- means it produces a value when it is executed.
- An expression can be as simple as literal line (2+2) or more complex

## Example

```
2 + 2               // Evaluates to 4
```

```
let x = 5;
x + 3                // Evaluates to 8

```

```
// function call expression
Math.max(1, 2)       // Evaluates to 2

```

# What is Statement ?

- A statement is a complete unit of execution that does Something .
- Unlike expressions, statements do not evaluate to a value; they are used to control the flow of the program.

## Example

```
// Variable declaration
let x = 5;           // Declaration statement

// Conditional statement
if (x > 10) {
  console.log("Greater than 10");
} else {
  console.log("Less or equal to 10");
}

// Loop statement
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Return statement
function add(a, b) {
  return a + b;      // Return statement
}

```

# Difference between expression and statement

| **Expression**                                                                       | **Statement**                                                                |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Produces a value when evaluated.                                                     | Performs an action but doesn't return a value.                               |
| Can be used wherever a value is expected (e.g., in assignments, function arguments). | Cannot be used in places where a value is expected (e.g., in an assignment). |
| Examples: `2 + 2`, `x + y`, `Math.max(1, 2)`, function calls.                        | Examples: `let x = 5`, `if` statement, `for` loop, `return`.                 |
| Expressions can be part of a statement.                                              | A statement is a complete unit of execution.                                 |
