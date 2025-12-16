# WHAT IS EVENT CAPTURING 🚀 ?

- Event capturing is a phase in event propagation. where an event travels through the DOM tree from root(document) to traget element .
- javascript has default behaviour of bubbling . to listen event capturing you neee to pass 3rd argument to the eventListener as true
- if we dont pass 3rd argument as true it wil behave as event bubbling .

# HTML CODE 🚀

```javascript
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>
```

# JAVASCRIPT CODE 🚀

```javascript
const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

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

```
grandParent capturing
parent capturing
child capturing
```
