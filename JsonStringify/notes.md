# All About JSON.stringify ?

- JSON.stringify() is a built-in JavaScript method that converts the hs object into JSON formatted string .

# Why Do We Need It?

- JavaScript objects are not directly transferable over network.
- Network communication uses JSON format (string)..
- So we convert object ➜ string using JSON.stringify().

```
const user = {
  name: "Nagaraj",
  age: 25,
  isDeveloper: true
};

const jsonString = JSON.stringify(user);

console.log(jsonString);

output : '{"name":"Nagaraj","age":25,"isDeveloper":true}'
```

- Now this is a string not an object.


# Syntax

```
JSON.stringify(value, replacer, space)
```
- value : The object or value to convert.
- replacer : Used to filter or transform values.
- Used for formatting (pretty print).

# Important Things You MUST Know

 ## ❌ Functions are removed

 ```
JSON.stringify({
  name: "Naga",
  greet: function() {}
});

'{"name":"Naga"}' // output

```

## ❌ Undefined is removed 

```
JSON.stringify({
  name: "Naga",
  age: undefined
});

'{"name":"Naga"}' // output
```

## ❌ Symbols are ignored

```
JSON.stringify({
  id: Symbol("123")
});

'{}' // output
```

# Reverse Operation

- JSON.parse()


