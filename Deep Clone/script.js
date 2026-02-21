const obj1={
    name:"nagaraj",
    age:24,
    address:{
        city:"koppal"
    }
}

const obj2 = {...obj1};



obj2.address.city = "bengaluru";
console.log(obj1);
console.log(obj2);

