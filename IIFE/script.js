const counter = (function () {
  let count = 0;
  return function () {
    return count++;
  };
})();

console.log(counter());
console.log(counter());
console.log(counter());
