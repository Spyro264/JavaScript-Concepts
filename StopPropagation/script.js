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
