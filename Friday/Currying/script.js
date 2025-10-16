function add(a) {
  return function (b) {
    return a + b;
  };
}
const res = add(1);
console.log(res(2));
console.log(res(3));
console.log(add(3)(5));
