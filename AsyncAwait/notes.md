# What is Async Await ?

- Async Await is a cleaner way to work with promise .
- It makes asynchronous code looks like synchronous .

# Why Async Await Introduced ?

- Before Async Await we had callbacks which looks messy and hard to debug.
- Developers called it as callback hell due to the difficulty to debug.

```
getUser((id)=>{
   getPosts((id)=>{
    getOrder((id)=>{
       getPayment((id)=>{
        console.log("hellllll)
       })
    })
   })
})
```

- To over come this callback hell we had promises.
- Promises are good to work with asynchronous but still its a chaining.

```
getUser()
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0]))
  .then(comments => console.log(comments))
  .catch(err => console.log(err));
```

- To solve both of these issues enters `Async/Await`.
- Async/Await is just a syntactical sugar over promises.


```
async function fetchData() {
    console.log("Data Fetched);
}

output : Data fetched //
```

- Even if you return a normal value while using async. it will automatically becomes a promise.
- What we see `return "Data Fetched".`
- What Js does `return Promise.resolve("Data Fetched")`.

# What Does Await Do ?

- Await will pause the async function execution until the promise gets resolved.
- Await can only be used inside async function.

```
function delay() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done"), 2000);
  });
}

async function test() {
  console.log("Start");

  const result = await delay();

  console.log(result);
  console.log("End");
}

test();

output : Start 
         Done
         End
```

# Explanation of the above code 

- Javasctipt starts execution there will be 2 phases `creation phase` and `execution phase`.
- on the creation phase `async test()` and `delay()` will be assigned memory.
- Next the execution starts `test()` called . js enters the test function logs `start`.
- Js executes `delay()` the delay is returning the promise . js sees the `setTiemout` and it will be places into macrotask.
- delay() returns the promise state `pending` .await sees the pending state it immedialtely pops out the execution context of test().
- The code after await becomes the body of hidden micotask callback (.then()).
- This callback is scheduled inside the microtask queue. and the code after await will get executed after delay resolves the promise.
- Once delay() has been resolved console.log result will be logged that is Done at last End will be logged .


# But then how does the code after await ever run?

```

// What the engine roughly does behind the scenes
function test() {
  console.log("Start");

  const promise = delay();

  promise.then(value => {
    // ──────────────── everything after await is put here ────────────────
    const result = value;
    console.log(result);
    console.log("End");
    // ────────────────────────────────────────────────────────────────────
  });

  // ← engine returns here immediately (so test() finishes)
}
```

## More Accurately

- The engine splits your async function at each await.
- Everything after an await becomes the body of a hidden microtask callback (.then() handler).
- That callback is scheduled into the microtask queue when the awaited promise eventually resolves.
- So when people say "the code after await gets wrapped into a callback" — they mean exactly this:
the remaining part of the function is turned into something that will be executed later, like a .then() callback.

# Key Points To Remember 
- await = suspend current function + pop it from call stack.
- Later: put it back on call stack (as a microtask) when the promise settles