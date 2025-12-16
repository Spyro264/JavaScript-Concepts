# What is Throttling ?

- Throttling is a technique used to limit the rate at which fun is called.
- Throttling transforms a fun so that it can called only once in a specifc interval of time.

## Lets understand this with an example . lets take a function fun()

```
function fun(){
    cosole.log("hello");
}
```

- We want to `modifify` this above `fun` so that it can be called only once in `5seconds`
- For that we need to write a fun called `Throttling()` which should take `fun()` as an input.
- `Throttling()` will return a modified function called `throttled()` which can be called only once in `5 seconds`
- When u call `throlled()` multiple times within `5 seconds`. `fun()` will only execute once in that time period.

# how to implement Throttling in javascript

1. Call the `fun()` immediately on the first call
2. after the first call if they try to call the fun again we need to check the timer
3. if they called the `fun` within that` 5seconds` we should not allow them to invooke that `fun()`
4. Once the time period has passed the `fun() `can be called again
5. To do all this we will create a `helper fun `whihc returns us `throttled` function

```
function throttling(func, delayTime) {
  return () => {};
}
```

- as i said our first step is to alow the fun to be called at the first time.
- Once the fun is called we wnat to block the function from being called again
- After the time has passed we want to unblock the function
- We can achieve this by using `setTimeout`

```
function throttling(func, delayTime) {
  return () => {
    setTimeout(() => {}, delayTime);
  };
}
```

- now we will define a varibale timeout that will be initialized only once in the outer function
- at first we will initialize `timeout` with `null`
- then inside the fun we will assign `setTimeout` to this `timeout` variable like this

```
function throttling(func, delayTime) {
  let timeout = null;

  return () => {
    func()
    timeout = setTimeout(() => {}, delayTime);
  };
}
```

- y i assigned setTimeout ot `timeout` variable is . as we all kno setTimeout will return unique id
- based on this id we can block and unblock the function.
- if `timeout`(uniqueID) exist dont allow to call the fun
- if `timeout`(uniqueID) is null allow to invoke the fun

```
function throttling(func, delayTime) {
  let timeout = null;

  return () => {
    if (!timeout) {
      func(); // calling fun if timeout is null
      timeout = setTimeout(() => {}, delayTime);
    }
  };
}
```

- we are almost implemnted the throttling fun but still thers one job to do
- inside setTimeout we are doing nothing
- at first the fun will get called but when u call second time even after 5 seconds it wont execte why ?
- Why coz when u called the fun at first time unique id is stored in `timeout` variable and never got removed
- y its not removed after that seconds bcoz of the concept called `closures`
- A closure is a concept in JavaScript where an inner function remembers and can access variables from its outer function’s lexical scope, even after the outer function has finished executing.
- observe the last sentence. it says even after the outer fun finished it can still hold or remeber those values
- coz of this timeout varibale will always have uniqueId
- according to our condition we are allowing to call the fun only when the `timeoit` is null but here unique id is not being removed from the timeout varibal . how to remove
- just add timeout = null inside setTiemout
- now the throttling fun is ready to use

```
function throttling(func, delayTime) {
  let timeout = null;

  return () => {
    if (!timeout) {
      func(); // calling fun if timeout is null
      timeout = setTimeout(() => {
        timeout = null;
      }, delayTime);
    }
  };
}

function fun() {
  console.log("heloo");
}

const throtlled = throttling(fun, 5000);
throtlled(); // fun called
throtlled(); // ignored
setTimeout(() => {
  throtlled();
}, 3000); // ignored again coz its comes under 5 sec
setTimeout(() => {
  throtlled();
}, 7000); // fun called

```

# Output

```
hello
hello after 7 sec
```
