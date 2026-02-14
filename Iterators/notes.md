# What is Iterator ?

- Iterator is something that allows us to go through items one by one 
- for ex: if you have a box of chocolates an interator is the person who distributes the chocolates one at a time .
- It does not give everything at once . it gives like next , next , next  until finished.
- So basically iterator is an object that has next() method and that next() returns an obj with 2properties value and done.


# real Life Example 

- Imagine a Tv remote when you want to switch the channel.
- You click on next button . the next mechanism is iterator.

## Example
```
const arr =[10,20,30,40,50];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

## Output

```
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: 40, done: false }
{ value: 50, done: false }
{ value: undefined, done: true }
{ value: undefined, done: true }
```

- Whats hapening in the above example is .
- When we do arr[Symbol.iterator]();.
- Js gives an iterator object and that object has method called next().
- Every time we call next() it will retruns something like this.
```
{
  value: <current value>,
  done: <true or false>
}
```
- An iterator always returns `value` and `done`.
- An Object is an iterator if it has next() method.
- next() retruns a method which contains value and done.

# Iterable vs Iterator

- iterable -> object that can create an iterator.
- iterator -> object that gives values one by one.

## Built in iterables 

 1. Array
 2. String
 3. Map
 4. Set

 # Why Iterators Exist?

 - bcoz js needs a standard way to loop over data.

 ```
for (let value of arr) {
  console.log(value);
}
 ```

 ## Behind the scenes.

 - for of loop internally do this. 
 - Calls [Symbol.iterator]().
 - Calls .next() repeatedly.
 - Stops when done is true.
 - when you write for of u indireclty.

 # Custom Iterator Example

 ```
const obj = {
  start: 1,
  end: 3,
  [Symbol.iterator]() {
    let current = this.start;
    let last = this.end;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

for (let num of obj) {
  console.log(num);
}

 ```
