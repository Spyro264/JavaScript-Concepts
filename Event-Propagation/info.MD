# WHAT IS EVENT PROPAGATION ? 🚀

- event propagation is the process by which an event travles through the DOM tree when an event is triggered on an element
- it determines the order in which the event listeners execute.
- Event propagation occurs in 3 phases.

# PHASES OF EVENT PROPAGATION ? 🚀

- Capturing Phase (Trickling phase).
- Target Phase.
- Bubbling Phase.

# WHAT IS CAPTURING PHASE ? 🚀

- Capturing phase is also called as trickling phase
- in capturing phase event moves from root(document) to target element.
- by default it will be false , we can enable this by using true in addEventListener.

# HTML CODE 🚀

```javascript
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>
```

# JAVASCRIPT CODE 🚀

- in the below code i passed boolean true why because if we dont pass the third argument as true. it will become event bubbling means event propagates from targeted element to root(document).
- if you want listen(see) the event capturing you need pass third argument as true.

```javascript
  const grandParent = document,getElementById("grandparent");
  const parent = document,getElementById("parent");
  const child = document,getElementById("child");

  grandParent.addEventListener(
  "click",
  () => {
    console.log("grandParent capturing");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent capturing");
  },
  true
);

child.addEventListener(
  "click",
  () => {
    console.log("child capturing");
  },
  true
);


```

# OUTPUT 🚀

```javascript
 grandParent capturing
 parent capturing
 child capturing
```

# OUTPUT IF YOU DONT PASS THIRD ARGUMENT AS TRUE 🚀

```javascript
 child capturing
 parent capturing
 grandParent capturing

```

# WHAT IS BUBBLING PHASE 🚀

- In bubbling phase event propagates from targeted element to root(document).
- bubbling is a default behaviour in javascript.
- no need to add true like capturing phase.

# JAVASCRIPT CODE 🚀

```javascript
const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", () => {
  console.log("grandParent capturing");
});

parent.addEventListener("click", () => {
  console.log("parent capturing");
});

child.addEventListener("click", () => {
  console.log("child capturing");
});
```

# OUTPUT 🚀

```
 child capturing
 parent capturing
 grandParent capturing
```

# WHAT IS TARGET PHASE 🚀

- The target phase occurs when an event reaches the targeted element. no matter whether the event is comming from bubbling phase or capturing phase. the eventlistener will always execute when the event reaches the targeted element.
