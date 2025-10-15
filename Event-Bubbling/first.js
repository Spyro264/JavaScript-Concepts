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
