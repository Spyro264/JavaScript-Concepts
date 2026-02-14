# All About Garbage Collection !

- Garbage Collection means js automatically removes memory that is no longer in use.
- You dont need to manually free memory like c / c++ Js does this automatically.

```
let user = { name: "Nagaraj" };
user = null;
```

- First memory was allocated for { name: "Nagaraj" };
- The we removed the reference.
- Now obj has no reference.
- Js remove it from the memory.this process is called garbage collection.

# Why Garbage Collection is needed ?

- Js runs in browser , node js  and mobile apps
- if unused memory is not removed it may slow our apps , memory increases , browser crashes etc.
- So js automatically removes the memory.

# How JavaScript Actually Does Garbage Collection?

- Js engines like v8 , spidermonkey etc uses a method called `mark and sweep algo`.
- This algo works in 2 phases mark phase and sweep phase.
- In mark phase engine starts from root and and marks everything that is reachable .
- In sweep phase it removes everythig that was not marked.
- Simple idea if its not reachable delete it .
- Reachable means An object is reachable if it can be accessed from global variables , local varibales , function params , closures etc.
- If there is no way to access it is garbage.

# Memory Life Cycle in JS
 
 1. Allocate memory.
 2. Use memory.
 3. Release memory.

# What Causes Memory Leaks in JS?

- Even though JS has GC, leaks can still happen.
  1. Global variables 
  2. Forgotten Timers
  ```
  setTimeout(()=>{
    console.log("hi");
  },1000)
  ```


# Stack and Heap Memory Types

## Stack
  
  1. Primitive values.
  2. Function calls.
  3. Fast.
  4. Automatically cleaned

## Heap

 1. Objects
 2. Arrays
 3. Functions
 4. Managed By Garbage Collector

 

