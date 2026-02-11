# HOISTING - the complete background picture

- Hoisting is the process of registering identifiers before execution begins.
- Identifiers = variables , functions  , class names.
- Before any line of code executes Js must know which identifier is it , what type is it , wethere redeclaration allowed etc.
- This registration setp is called Hoisting.
- Hoisting occurs before exection.
- Hoisting is JavaScript’s mandatory step of registering identifiers and their rules before any code executes.


# Why Hoisting Is Required ?

- JavaScript cannot execute code without first knowing.
- Is X a variale or function.
- Is x block-scoped or function-scoped?
- Is re-declaration illegal

# What EXACTLY happens behind the scenes 

- Before execution, JS does Identifier Binding. it scans the entire scope and records 
Declaration	What gets registered
function f(){}	name + function body
var a	name only
let b	name only
const c	name only
class D	name only

- This step happens once per scope.


# Why different declarations behave differently

- Fucntion declarations fully initialized during registration . thats y we can call then earlier.
- This is intentional and part of the original language design.
- Var is registered but initialzed with undefined . This was a design mistake addmiteed by TC39 later.


# When hoisting actually occurs

- Hositing happens only once , b4 execution per scope.

# Why hoisting is critical for correctness

- hositing allows js to 
- detect duplicate declarations.
- enforce block scoping.
- Throw errors before execution
- Resolve name conflicts

```
let a;
let a; // error before execution
```