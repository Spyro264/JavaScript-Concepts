# What is SetTimeOut

- setTimeOut is an timer function . which schedules the function to run once after a specified delay.
- setTimeout registers a callback to be executed after at least X milliseconds , only when the callstack is empty , via the event loop.
- One important thing is setTimeOut registers the callback does not execute.
- setTimeout registers the callback in the host environment's timer system ( web Api / node js ) not inside the js engine.
- setTineout returns a timer id.
- SetTimeout does not execute the code . it just schedules the task to be executed later.

# Why Js Needs SetTimeOut ?

- As we all know js is a single threaded and synchronous by default.
- if there are any requirement like wait and execute js cant do that coz if it does the browser may freeze.
- to overcome this we have setTimeout.

# What problems does SetTimeOut Solve ?

- Avoids blocking the main thread.
- Enables asynchronous scheduling.
- Keeps UI responsive etc..

# Syntax

```
setTimeout(callback, delay, arg1, arg2, ...)

```

- setTimeOut takes callback , delay , and 0 or more arguments.
- setTimeout takes arguments along with callback and delay

# Whats The use Of Arguments In SetTiemOut ?

- As i explained above settimeout accpets arguments as well and these arguments will automatically passed to the callback function when it executes.

## EXample 1

```
setTimeout(add, 1000, 2, 3);

```

## Example 2

```
setTimeout(() => add(10, 20), 2000);

```

# Difference between example 1 and Example 2

# Ex 1 scene

- setTimeout(add, 1000, 2, 3);
- add function referecne is given to host
- 2 and 3 are stored immediately
- no new function
- no closure
-

# Ex 2 scene

- setTimeout(() => add(10, 20), 2000);
- A new arrow function is created.
- closure formation
- slightly more memory.
- You may ask where will closure form here .
- One key point you should remember here is if a function access anything which is not inside its own scope , a closure formed.
- Now see the ex 2 we created arrow function an then passing add inside arrow function.
- arrow function doesnt have add defined in its scope it needs to use add fro outer scope.
- This is where closure formed.

# SetTimeOut Is Not Guranteed Timing !

```
for (let i = 0; i < 100000000; i++) {
  console.log();
}

setTimeout(() => {
  console.log("1");
}, 2000);

setTimeout(() => {
  console.log("2");
}, 1000);


```

- This means run the callback after 1000ms
- If the main thread is busy the delay increases.
- setTimeout gurantees minimum delay not exact delay

# Why SetTimeOut Has Lower Priority Comapred T

- Promises have higher priority beacuse promises are about correctness , not timing.
- Promises represet 1. async results , chaining ,error propogtaion , state transitions.
- Once a Promises has been resolved its .thn() must run before anythig else intruupts the logic.
- if setTimeOut could jump ahead of promise.
- .then() chain could be delayed.
- async logic would be unpredictable.
- error handling would break expectations.

# Why SetTimeOut Is Not An MicroTask ?

- Because settimeout is about , time , ui delays , background scheduling , non-urgent-works.
- if timers were microtasks
- UI would freeze
- rendring would starve.
