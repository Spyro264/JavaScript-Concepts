# What is Shadowing ?

- Shadowing happens when a varibale inside a certain scope have the same name as a varibale which is declared in ouetr scope .
- The inner variable shadows the outer .
- Inside the inner scope , the outer variable becomes inaccessiable .
- The JavaScript engine resolves the identifier to the nearest scope first.


```
let a = 10;

function test() {
  let a = 20;
  console.log(a);
}

test();

/// output : 10
```

- There are two variables here 

```
GlobalScope : a
test() scope : a 
```
- Thay just have same name but saved in diff memory location.
- What happens when console.log runs is .
- Js looks inside the current fucntion.
- Does a exist here  ? ues ->a:20;
- logs 20
- It never even looks at global scope . this stopping is the key.
- You can ask wheree is shadowing here .
- Shadowing simply means . he inner varibale hides out the outer vairbale .
- Insie test() the global a becomes inaccessiable. This hiding is called Shadowing.


# Shadowing with var vs let/const

- hadowing behaves differently depending on declaration type.

## Legal Shadowing

```

let a = 10;

{
  let a = 20;
  console.log(a); // 20
}
```

## Illegal Shadowing

```
let a = 10;

{
  var a = 20; // ❌ SyntaxError
}

```

- Why we face Syntax erorr because.
- let is block scoped.
- var is function scoped.
- var a tries to redeclare a in the same function/global scope.
- That causes a conflict.

## But This Allowed

```
var a = 10;

{
  let a = 20;
  console.log(a); // 20
}
```
- Var a lives in global scope .
- Let is in block scope.
- NO scope collision

# Illegal Shadowing 

- Illegal shadowing occurs when a variable declared in an inner scope attempts to shadow a variable from an outer scope using a declaration that conflicts with JavaScript’s scoping rules, resulting in a SyntaxError.