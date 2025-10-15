const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1];
console.log(arr3);

const [first, ...rest] = arr1;
console.log(first);
console.log(rest);
