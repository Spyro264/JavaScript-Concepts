# What Is Event Loop ?

- The Event Loop is a mechanism that continously monitors the call stack task queues and pushes 
the asynchronous callbacks in to the call stack when it becomes empty.
- Javascript is a single-threaded synchronous language which can execute only one task at a time 
using a single call stack.
- If the long running tasks block the stack . whole ui will get freeze.
- But still js handles all the operations like api calls , timers , file operations .
- This is possible because of `Event Loop`.
- The javascript runtime environment consists of several components , the `call stacks` , `web apis` , `microtask queue` , `macrotask queue` and the `event loop` , These components work together to handle synchronous and asynchronous code execution.
- The call stack is where js executes functions . when a function is invoked it will be pushed inside a call stack
- when it completes it will be popped out of the call stack.
- Javascript executes code line by line if the call stack is busy no other can code can excute.
- Web apis are not handled by js they are handled by host environmet. When an async fun like setTimeout is called 
it wil be delicated to the web api , once completed its callback will be placed in a taskqueue.
- The Event loop is a mechanism that continously monitors whether the call stack is empty or not.
- If the stack is empty it takes the task from the taskqueue and pushes in to callstack for execution.
- If the stack is not empty it waits . it acts as a bridge between call stack and task queue.
- The macrotask queue also called as callback queue contains tasks such as `setTimeout` , `setItenrval` etc
even if the timer is set to 0 , its callback is placed in macro task queue and waits until callstack becomes empty.
- The Microtask Queue contains higher-priority tasks such as Promise.then, Promise.catch, Promise.finally, queueMicrotask, and MutationObserver. Microtasks always execute before macrotasks once the Call Stack becomes empty.
- The most important rule of the Event Loop is: after every execution cycle, once the Call Stack is empty, all Microtasks are executed completely before taking a single Macrotask. Only after the Microtask Queue is empty does the Event Loop move to the next Macrotask..
- If a microtask schedules another microtask (for example, a Promise inside a Promise), the Event Loop continues executing microtasks until the Microtask Queue becomes completely empty before moving to macrotasks.
- The execution order always follows this pattern: execute synchronous code in the Call Stack → when stack becomes empty, execute all Microtasks → execute one Macrotask → again execute all Microtasks → then next Macrotask → and rep
- Microtasks are given higher priority because Promises are designed to react immediately after the current synchronous execution completes, ensuring predictable asynchronous behavior without unnecessary delay like setTimeout.
- If microtasks keep adding new microtasks indefinitely (for example, recursive Promises), they can block macrotasks entirely, causing task starvation and freezing the event loop because microtasks must always finish before macrotasks begin.



```
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");

output :
start
end
promise
timeout

```

Link : [Call stacl visual representation](https://media.licdn.com/dms/image/v2/D5612AQHIuZDc3cqPtg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1721189705579?e=2147483647&v=beta&t=7z1ivEBMlIOpeq4P2UUbbrj1T64ysIpkPv27efVvq60)

Link : ![\[p\](!\[alt text\](https://miro.medium.com/1*Y8ihwo4cltDGmBz-kJoVwQ.jpeg))](https://miro.medium.com/1*Y8ihwo4cltDGmBz-kJoVwQ.jpeg)