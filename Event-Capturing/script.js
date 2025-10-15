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
