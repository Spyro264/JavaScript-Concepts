# What is This ?

- `This` is a keyword that referes to the context where a peice of code is supposed to run.
- Most of the time we use `this` on object methods , where `this` referes to the object that calls the method.
- The value of `this` depends on how the function is invoked not where  the function is defined.
- When a regular `function` is invoked as a method on an object `this` refers to that obj.
- When a regular `function` is called standalone this refers to global object in non-strict mode . and undefined in strict mode.
- Arrow function doesnt have their own `this` . instead they inherit `this` from their parent scope at the time they are defined.
- this is decided at call time (runtime), not at definition time”

```
function greet(name) {
    console.log(this.name);
}

const obj1 = {name:"nagaraj" , greet:greet};
const obj2 = {name:"rakesh" , greet:greet};

obj1.greet(); 
obj2.greet(); 

```

## Example 

- In the above example we are calling greet method on 2 objects
- Here obj1.greet() `this` will points to obj1
- Here obj2.greet() `this` will points to obj2
- As i told at the first line of this file . this refers to that context where the peice of code is supposed to run , so in our example a peice of code is greet fun which is executing inside the obj1 and obj2 
- So `this` refers to obj1 when greet method is attached to it and invoked. aagin this refers to obj2 when the greet method is atached to `obj2`.


