# WHAT IS EVENT DELEGATION 🚀

- Event delegation is a technique in javasript where we use single eventListener on a common parent element instead of adding multiple eventListener for all the child elements.
- instead of adding eventListener to all the child elements we attach one eventListener to thier common parent element.
- in event bubbling concept we need to add multiple eventListener to stop event which is propogating to its top level.
- here in event delegation we use only one eventListener on a common parent element which saves us memory and improves performance.

# WHY WE NEED TO USE EVENT DELEGATION 🚀

- imagine you have 100 buttons in a span if you add a event listner to each button.
- Memory Usage Increases (100 event listeners = high memory consumption).
- Performance Decreases (More listeners mean more processing).
- Doesn’t work dynamicaly added elemnets.

# SOLUTION 🚀

- Attach one event listner to the common parent and use event.target.tagName to identify which button was clicked
- in event.target.tagName target is the property of event Objcet and tagName is the property of HTML element.
- if you have 10 buttons inside a span and that span is inside a div . so now span will be the common parent for all those buttons . now instead of adding event listners (click function) to all 10 buttons add only one event listner to the common parent span .
- in my script.js common parent for buttons is span so add event listner to the span and to stop propagation events add
  stopPropogation() method
- use event.target.textContent or event.target.id to identify which button has been clicked
- now you have only one event listner handling all the buttons and event propogation which saves the memory and increase the performance
- in my script.js i have commented a part of a code . and one part is uncommented you can clearly see the difference between those two codes . with event delegation concept you need to write fewer lines of code but without that concept you need to write so many lines of code .

# CODE SNIPPET WITHOUT USING EVENT DELEGATION.

```javascript
const body = document.getElementById("body");
const div = document.getElementById("div");
const span = document.getElementById("span");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");

body.addEventListener("click", () => {
  console.log("you clicked body");
});

div.addEventListener("click", (event) => {
  console.log("you clicked div");
  event.stopPropagation();
});

span.addEventListener("click", (event) => {
  console.log("you clicked span");
  event.stopPropagation();
});

btn1.addEventListener("click", (event) => {
  console.log("you clicked btn1");
  event.stopPropagation();
});

btn2.addEventListener("click", (event) => {
  console.log("you clicked btn2");
  event.stopPropagation();
});

btn3.addEventListener("click", (event) => {
  console.log("you clicked btn3");
});

btn4.addEventListener("click", (event) => {
  console.log("you clicked btn4");
  event.stopPropagation();
});

btn5.addEventListener("click", (event) => {
  console.log("you clicked btn5");
  event.stopPropagation();
});

btn6.addEventListener("click", (event) => {
  console.log("you clicked btn6");
  event.stopPropagation();
});

btn7.addEventListener("click", (event) => {
  console.log("you clicked btn7");
  event.stopPropagation();
});

btn8.addEventListener("click", (event) => {
  console.log("you clicked btn8");
  event.stopPropagation();
});

btn9.addEventListener("click", (event) => {
  console.log("you clicked btn9");
  event.stopPropagation();
});

btn10.addEventListener("click", (event) => {
  console.log("you clicked btn10");
  event.stopPropagation();
});
```

# CODE WITH EVENT DELEGATION CONCEPT

```javascript
const body = document.getElementById("body");
const div = document.getElementById("div");
const span = document.getElementById("span");

body.addEventListener("click", () => {
  console.log("you clicked body");
});

div.addEventListener("click", () => {
  console.log("you clicked span");
});

span.addEventListener("click", (event) => {
  console.log(event.target.textContent);
  event.stopPropagation();
});
```

# HTML CODE

```markdown
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script defer src="script.js"></script>
    <link rel="stylesheet" href="style.css" />
    <title>Event-Delegation</title>
  </head>
  <body id="body">
    <div id="div" style="display: flex; flex-direction: column">
      <span
        id="span"
        style="
          display: flex;
          flex-direction: column;
          margin-top: 5px;
          margin-bottom: 5px;
          padding: 15px;
        "
      >
        <button id="btn1">Button 1</button>
        <button id="btn2" style="margin-top: 2px">Button 2</button>
        <button id="btn3" style="margin-top: 2px">Button 3</button>
        <button id="btn4" style="margin-top: 2px">Button 4</button>
        <button id="btn5" style="margin-top: 2px">Button 5</button>
        <button id="btn6" style="margin-top: 2px">Button 6</button>
        <button id="btn7" style="margin-top: 2px">Button 7</button>
        <button id="btn8" style="margin-top: 2px">Button 8</button>
        <button id="btn9" style="margin-top: 2px">Button 9</button>
        <button id="btn10" style="margin-top: 2px">Button 10</button>
      </span>
    </div>
  </body>
</html>
```

# BENEFITS 🚀

- Only one event listener (better performance).
- Works for dynamically added buttons.
- Less memory usage.
