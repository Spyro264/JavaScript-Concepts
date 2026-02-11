# What is new Keyword ?

- new keyword is an operator which is used to created instances (objetcs) from constructor function or class.


## Example 

```
function Person(name) {
  this.name = name;
}

const p1 = new Person("Nagaraj");

console.log(p1.name); // Nagaraj
```

- When ever we use new keyword . js internally performs 4 things .
- 1. create a new obj  // const obj = {};
- 2. Link the object to constructors prototype. // obj.[[Prototype]]  = Person.prototype;
- 3. Bind `this` to that new obj // Person.call(obj, "Nagaraj");
- 4. Return the object (if constructor doesn’t return something else)


## Note

- Every obj in js has [[Prototyope]].
- Only function have .prototype.
- If constructor does NOT return anything → JS returns that new object.
- If constructor explicitly returns an object → that object replaces the new one.

```
function Person(name) {
  this.name = name;
}

const p1 = new Person("Nagaraj");
console.log(p1);

```

- In the above ex constructior is not returning anything so the new obj is returned .

```

function Person(name) {
  this.name = name;
  return { age: 25 };
}

const p1 = new Person("Nagaraj");
console.log(p1);
```

- In the above ex the constructor explicitly returns the obj . so this obj replaces the new obj


## primitive return is ignored 

```
function Test() {
  this.x = 10;
  return 5;
}

const t = new Test();
console.log(t);
```

- Here even though constructor returns 5 it will log 10 coz primitive returns are ignored.