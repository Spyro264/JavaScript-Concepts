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
