# What is Call Stack ?

- Call stack is a data structure used by js engine to manage function execution.
- A call stack is a stack that stores function calls execution contexts . When ever a fucntion is called it is pushed inside the stack and once the function completes execution it will be poped out of the stack.


```
function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello Nagaraj");
}

one();
```

## Execution Flow 

1. Global Execution Context is created → pushed to stack
2. one() is called → pushed
3. Inside one() → two() is called
4. Inside two() → three() is called → pushed
5. three() logs message → completes → popped
6. two() completes → popped
7. one() completes → popped
8. Global context remains until program ends

# Why Call Stack Is Important ?

- Without call stack JS wouldn’t know which function is currently executing.
- It wouldn’t know where to return after function finishes.
- Nested functions would not work.

## Call Stack Maintains

- order of execution.
- control flow.
- function retrun address.


# The Call Stack Is NOT Part of JavaScript 

- Yes call stack is not a part of javascript
- The call stack is implemented by the javascript engine like :
  1. Google’s V8
  2. Mozilla’s SpiderMonkey
- So technically :
   1. The spec defines execution contexts
   2. The engine implements them using a real memory stack.
- This means stack size differs across environments.

# Stack Size Is Limited — But Not Fixed

- There is no official stack size in ECMAScript.
- it depends on Browser , engine , device memory.
- In v8 Typical max depth ≈ 10,000–20,000 recursive calls.

# Tail Call Optimization (Almost Nobody Knows This Properly)

- Es6 introduced Proper Tail Calls (PTC).
- if implemented fully instead of growing stack .
- Engine reuses the current stack frame.
- No stack overflow.
- Constant memory.