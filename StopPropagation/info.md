# WHAT IS event.stopPropagation() 🚀 ?

- stopPropagation is a method from event object.
- event.stopPropagtion is a method which is used to prevent the propagation of events from root to targeted elements or targeted elements to root.

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

grandParent.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("grandParent capturing");
});

parent.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("parent capturing");
});

child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("child capturing");
});
```

# OUTPUT 🚀

```
child capturing
script.js:11 parent capturing
script.js:7 grandParent capturing
```

# OUTPUT WITHOUT event.stopproPagation 🚀

```
child capturing
```
