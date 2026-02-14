# What Are Generators ?

- Generator is a specia type of function that can pausse execution .
- and resume later from where it us stopped.
- And can produce values one by one instead of all.
- A Generator is a special type of function defined using function* syntax that returns a Generator Object.


## Example 

```

function* numbers() {
  yield 10;
  yield 20;
  yield 30;
}

const gen = numbers();

console.log(gen.next()); 
// { value: 10, done: false }

console.log(gen.next()); 
// { value: 20, done: false }

console.log(gen.next()); 
// { value: 30, done: false }

console.log(gen.next()); 
// { value: undefined, done: true }
```

# What is happening internally?

- yield 10 → pause and return 10
- yield 20 → pause and return 20
- yield 30 → pause and return 30
- End → done becomes true