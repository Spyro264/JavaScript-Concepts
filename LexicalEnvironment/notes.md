# What Is Lexical Environment ?

- Lexical environment is a memory structure . that java script engine uses to store variables , functions and scope information
for a specific block of code.
- In simpler words lexical environment is a space created by js to rememeber who declared what and where to look next.
- lexcial environment is created at the tym of execution (runtime).
- Function Lexical Environment : created every time when a function is called 

# Lexical Environment Has 2 Parts 

1. EnvironmentRecord
2. OuterReference

```
LexicalEnvironment = {
  EnvironmentRecord,   // actual variable storage
  OuterReference       // link to parent lexical environment
}
```


```
function test(a) {
  let b = 20;
}
test(10);
```

```
Function Lexical Environment
  EnvironmentRecord = {
    a: 10,
    b: 20,
    arguments: {...}
  }
Outer → Global Lexical Environment
```

- Environment Record is a place where JS stores variables / functions , scope info , arguments etc.
- Outer Reference is the reference to the parent lexical environment.
