# What Is TDZ (Temporal Dead Zone) ?

- TDZ is a time between when a variable allocated memory and when it initializes with a value.
- During this time accessing it throwsReferecne error.
- It only applies for let , const and class not for var.
- Why it is called as Temporal coz it occurs only for specifc time.


# Var Let And Const all are hoisted but only Var is initialized with undefined but not let and const why ?

- All three keywords — `var`, `let`, and `const` — are hoisted, meaning memory is allocated for them during the creation phase of the execution context. The difference lies in how they are initialized. `var` was introduced in the early design of JavaScript (1995) and is both hoisted and immediately initialized with the value `undefined`. This makes it accessible before its actual declaration line, which often leads to silent bugs because accessing it does not throw an error. In contrast, `let` and `const`, introduced in **ECMAScript 2015**, are also hoisted but are left uninitialized during the creation phase. Internally, their bindings exist but remain in an uninitialized state until the execution reaches their declaration line. Accessing them before initialization results in a `ReferenceError`, a period known as the Temporal Dead Zone (TDZ). This design was intentional to prevent accidental early usage, enforce true block scoping, protect the immutability guarantees of `const`, and eliminate silent logical errors. The behavior of `var` was not changed for backward compatibility, so new keywords were introduced with stricter semantics instead.
