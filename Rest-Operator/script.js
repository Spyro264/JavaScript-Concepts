const user = { name: "nagaraj", age: 20, address: "koppal" };

const { name, ...rest } = user;
console.log(name);
console.log(rest);
