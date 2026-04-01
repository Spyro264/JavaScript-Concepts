function greet(name) {
    console.log(this.name);
}

const obj1 = {name:"nagaraj" , greet:greet};
const obj2 = {name:"rakesh" , greet:greet};

obj1.greet(); 
obj2.greet(); 