# WHAT IS THE DIFFERENCE BETWEEN event.stopPropagation and stopImmediatePropagation 🚀 ?

- event.stopPropagation is used to prevent the event from further propagation .
- but what if we add 2 eventListener to the same element . will stoppropgation prevents both eventListener or not ? lets see

# HTML CODE 🚀

```javascript
<html lang="en">
  <head>
    <title>stopPropagation vs stopImmediatePropagation</title>
  </head>
  <body>
    <div id="parent">
      <button id="child">click</button>
    </div>
  </body>
</html>
```

# JAVASCRIPT CODE 🚀

- Here we added stopPropagation method . it will prevent the event from propagating to its parent

```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("i'm Parent");
});

child.addEventListener("click", (event) => {
  console.log("child  clicked");
  event.stopPropagation();
});
```

# OUTPUT 🚀

```
child clicked
```

# JAVASCRIPT CODE 🚀

- Here we will add 2 eventListeners to the same element and we will see whether the stopPropagation method prevents both listeners or only one listener
- after executing this program you will get 2 things in output as shown below.
- which says that if we add 2 eventListeners to the same element. event.stopPropagation wont stop the other elements eventListener
- if we want to stop both eventListener whithout using stopPropogation twice . we can use stopImmediatePropagation.

```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("i'm Parent");
});

child.addEventListener("click", (event) => {
  console.log("child  clicked");
  event.stopPropagation();
});

child.addEventListener("click", () => {
  console.log("im also child");
});
```

# OUTPUT 🚀

```javascript
child clicked
im also child
```

# JAVASCRIPT CODE WITH stopImmediatePropagation 🚀

- here instead of using stopPropagation I used event.stopImmediatePropagation(). which will prevent multiple eventListeners of the same element .

```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("i'm Parent");
});

child.addEventListener("click", (event) => {
  console.log("child  clicked");
  event.stopImmediatePropagation();
});

child.addEventListener("click", () => {
  console.log("im also child");
});
```

# OUTPUT 🚀

```javascript

child clicked

```
