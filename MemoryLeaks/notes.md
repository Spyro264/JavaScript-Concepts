# Memory Leaks in JS 

- A Memory leaks happen when a memory that is no longer needed is not removed.
- Due to this app may become slow , more memory usage , browser tab may crash.
- In js garbage collection what it does is it marks all the reachable variables.
- Anything which is not reachable removed from the memory.

# Common Causes Of Memory Leaks 

  ##  1. Global Variables
 
   - if you accedentaly create a global variable they stay in memory forever.

   ```
   function createUser() {
   user = { name: "Nagaraj" } //  no let/var/const
   }
```
- Now user becomes global varibale never cleaned up.
- So Always use let or const

 
 ## Forgotton Timers

 ```
 setInterval(() => {
  console.log("Running...");
}, 1000);
```
- If we dont cleart it by clearInterval(id);
- the callback keep running and holds referecne in memory.


## Event Listeners Not Removed

```
button.addEventListener("click", () => {
  console.log("Clicked");
});
```
- If the button is removed from DOM but listener still exists,
memory stays allocated.
- Proper cleanup : button.removeEventListener("click", handler);

# Real Life Example 

- memory leak means the memory which is no longer in use is not removed . smae as your X . 
- Just like your X stays in your memory forever the unwanted memory like global varibales wont get removed until u take action.
- It may be in life or js removing unwanted memory is necessary or it will cause the app and u to become slow and crash one day