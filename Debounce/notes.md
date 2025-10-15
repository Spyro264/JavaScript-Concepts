# WHAT IS DEBOUNCING 🚀 ?

- Debouncing is a technique or strategy which is used to control the frequency of function execution
- especially for events that fire repeatedly.
- Debouncing accpets a function and transforms it into an updated debounced function that delays execution for specific time .

## Example 🚀

- lets take a function and we will execute this function after the delay of 500ms
- in this example we will see how to implement debouncing in javascript.
- how to delay a function execution for certain period.
  -reset the timer if the function is called again.

```javascript
function hello() {
  console.log("hey there How are you...");
}
```

# IMPLEMENTING DEBOUNCING IN JAVASCRIPT 🚀

- as explained in the above paragraph . first we need a debounce function which will accpets another function and transforms it into an updated debounced function that delays execution for some specific time.
- below is the function which will accepts a function and returns a updated debounced function.
- To delay a function here i used setTimeout function.

```javascript
function debounce(func, delay) {
  return () => {
    setTimeout(() => {
      func();
    }, delay);
  };
}

function hello() {
  console.log("hi there..");
}

debounce(hello, 500);
```

# OUTPUT 🚀

```javascript

hi there... (you will get this output after 500ms delay)

```

- now i will create a variable called "timeout" and assign it to the return value of setTimeout
- the setTimeout methods always returns a unique id to timeout variable

```javascript
function debounce(func, delay) {
  let timeout = null;
  return () => {
    timeout = setTimeout(() => {
      func();
    }, delay);
  };
}
```

- here i used timeout variable to reset thesetTimeout
- each time you call the function a different ID will generate and stored in timeout variable
- we will use that to reset the timer.

```javascript
function debounce(func, delay) {
  let timeout = null;
  return () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, delay);
  };
}
```
