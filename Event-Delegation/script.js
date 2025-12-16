// ----------------------------------- WITHOUT USING EVENT DELEGATION CONCEPT -----------------------------------//

// const body = document.getElementById("body");
// const div = document.getElementById("div");
// const span = document.getElementById("span");
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const btn4 = document.getElementById("btn4");
// const btn5 = document.getElementById("btn5");
// const btn6 = document.getElementById("btn6");
// const btn7 = document.getElementById("btn7");
// const btn8 = document.getElementById("btn8");
// const btn9 = document.getElementById("btn9");
// const btn10 = document.getElementById("btn10");

// body.addEventListener("click", () => {
//   console.log("you clicked body");
// });

// div.addEventListener("click", (event) => {
//   console.log("you clicked div");
//   event.stopPropagation();
// });

// span.addEventListener("click", (event) => {
//   console.log("you clicked span");
//   event.stopPropagation();
// });

// btn1.addEventListener("click", (event) => {
//   console.log("you clicked btn1");
//   event.stopPropagation();
// });

// btn2.addEventListener("click", (event) => {
//   console.log("you clicked btn2");
//   event.stopPropagation();
// });

// btn3.addEventListener("click", (event) => {
//   console.log("you clicked btn3");
// });

// btn4.addEventListener("click", (event) => {
//   console.log("you clicked btn4");
//   event.stopPropagation();
// });

// btn5.addEventListener("click", (event) => {
//   console.log("you clicked btn5");
//   event.stopPropagation();
// });

// btn6.addEventListener("click", (event) => {
//   console.log("you clicked btn6");
//   event.stopPropagation();
// });

// btn7.addEventListener("click", (event) => {
//   console.log("you clicked btn7");
//   event.stopPropagation();
// });

// btn8.addEventListener("click", (event) => {
//   console.log("you clicked btn8");
//   event.stopPropagation();
// });

// btn9.addEventListener("click", (event) => {
//   console.log("you clicked btn9");
//   event.stopPropagation();
// });

// btn10.addEventListener("click", (event) => {
//   console.log("you clicked btn10");
//   event.stopPropagation();
// });

// ---------------------------------------------- USING EVENT DELEGATION --------------------------------- //

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
