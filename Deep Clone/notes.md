# Deep Clone In JavaScript 

- Deep Clone meams creating a completely new copy of an object , including all nested objects , so that nonreerence is shared with the original
- That means changing original obj doesnt affect the clone . in the same way modifying clone wont change the original obj.

# Shallow Copy Vs Deep Copy

- Shallow copy copies only first level

```
const obj1 = {
  name: "Nagaraj",
  address: {
    city: "Bangalore"
  }
}

const obj2 = { ...obj1 }

obj2.address.city = "Mysore"

console.log(obj1.address.city) // Mysore 
```
- Bcoz nested obj still shared the reference.


# Deep Copy 

- Deep copy copies everything recursively.
- In deep copy there will be no shared referecne with original obj.

# Ways To Implement Deep Clone.

 ## 1. Structured Clone 

 ```
const obj2 = StructuredClone(obj1);

 ```

 - Handles nested obj
 - Handles arrays
 - Handles Dates.
 - Most recommended way

 ## 2. JSON Trick (old way)

 ```
 const obj2 = JSON.parse(JSON.stringify(obj1));
 ```
 - Doesnt copy function
 - Doesnt copy undefined
 - Doesnt copy Dates and Fails for circular reference.


 ## 3. Loadash CloneDeep

 ```
import cloneDeep from "lodash/cloneDeep"

const obj2 = cloneDeep(obj1)
 ```


# How Deep Clone Works Internally (Concept)

- Creates a new obj
- Loop through keys
- If value is primitve -> copy directly
- If value is object -> recursevly deep clone

```

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj
  }

  const copy = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    copy[key] = deepClone(obj[key])
  }

  return copy
}
```