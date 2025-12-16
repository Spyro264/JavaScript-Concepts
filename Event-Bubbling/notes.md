# EVENT BUBBLING 🚀

- Event bubbling is a concept in a DOM ( DOCUMENT OBJECT MODEL ). Where an event originates at the target and propogates upto its ancestors (root).
- so if you click the button event will originates in the button and propogates to span from span to div , and div to body , body to document at last document to window .
- to catch the event i added addEventListeners for all the elements . so if you click button it will log you where ever the event propogates .
- event bubbling is a default behaviour of javascript . when ever a event occurs it bubbles upto its ancestors until it reach window.

- Ex : in index.html you can see there is a inside SPAN . and SPAN is inside DIV . and DIV is inside BODY . so if you click button it means you are clicking span , div and body also . if you click div means you are clicking body also . why because SPAN is a parent of button and div is parent of span and body is a parent of DIV . also body has a parent called html (root element) and from html event propagates to DOCUMENT OBJECT and from DOCUMENT OBJECT event propagates to WINDOW OBJECT. this is the reason i mentioned above that if you click button means then you are clicking its parent elements .

# BUTTON ---> SPAN ---> DIV ---> BODY --> DOCUMENT ---> HTML ---> WINDOW

# UNDERSTAND THE PROBLEM FIRST 🚀

- think you have given one task . The task is about to create a button and that button should be inside span tag and that span should be inside a div and div obviously will be inside body . and for those div ,span ,body and button you need to add onClick functionality . so when the user clicks on button . it should console " You Clicked Button" if user clicks div "You Clicked Div" if user clicks span "you Clicked Span".
- after this you would start designing the requirements as i did in index.html . after completing the task you click on button . according to the task it should console log "You Clicked Button" but it console logged as
- "You Clicked Button",
- "You Clicked Span",
- "You Clicked Div",
- "You Clicked Body",
- "You Clicked Html",
- "You Clicked Document",
- "You Clicked Window",

--> after seeing this you click on div according to the task it should console log "You Clicked Div" but its console logging

- "You Clicked Div"
- "You Clicked Body"
  -"You Clicked Html"
- "You Clicked Document"
- "You Clicked Window"

- Now you will get a question y? . you have written the code correctly but still its logging other messages along with the target element message .
- This is because the deafult behviour of javascript . in javascript event propogates to its top level from where it originates . meaning event will travel from where it borns upto its top level parent.
- so here when you click on button means you are clicking on the span, div, body. if you click on div means you are clicking on body also
- this is the reason when you click on button its logging all ts parents messages in the console.

# HOW TO SOLVE THE PROBLEM 🚀

- The problem is the event is propogating to its top level causing all the console log to print even though you just cliked on one button .
- To solve this problem we need to use event.stopPropogation()
- stopPropogation is one of the method of event Object which stops the bubbling(propogation) of events.
- now in your first.js add event.stopPropogation() and click on button. You will see only one console log message that is "You Clicked Button" .
- previously you are getting all the console log coz event is propogating to top level now it has stopped because of event.stopPropogation().
- you need to add event.stopPropogation() for all event listeners to stop all event propogation. if you have 5 nested elements you need to add 5 stopPropogation methods . if you have 10 nested elements you have to use 10 stopPropogation methods
- i know using stopPropogation() for all addEventListerners is not a good practice we also have a solution for this in the next docs.

# CODE SNIPPET

```javascript
const body = document.getElementById("body");
const div = document.getElementById("div");
const span = document.getElementById("span");
const button = document.getElementById("button");

body.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("body was clicked");
});

div.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("div was clicked");
});

span.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("span was clicked");
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button was clicked");
});

document.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("document is clicked");
});

document.documentElement.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("HTML is clicked");
});

window.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("window was clicked");
});
```

```markdown
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script defer src="first.js"></script>
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body id="body">
    <div id="div">
      <span id="span">
        <button id="button">Click Me</button>
      </span>
    </div>
  </body>
</html>
```
