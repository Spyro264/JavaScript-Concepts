# What is SetInterval ?

- setInerval is a web api that schedules a callback function to run repeatedly after a minimum delay.
- setInterval does not execute the code . it just register the callback in the host environments time system
- Execution happens only when the call stack is empty.

# Syntax

```
const intervalId = setInterval(callback, delay, arg1, arg2);

```

- setInterval takes callback , delay and arguments
- setINterval returns an Id whic we can use to stop it ex: clearInterval(intervalId);
- in setInterval minimum delay is fixed but exact delay is not guaranteed.
- Always clear the intervals or else memory leak can happen

## Exact Delay Is Not Guaranteed Why ?

```
setInterval(() => {
  console.log("interval");
}, 1000);

const start = Date.now();
while (Date.now() - start < 3000) {
  // block JS thread for 3 seconds
}

```

# THE BIGGEST PROBLEM WITH setInterval

- it does not care if previous execution finished

## Example

```
function greet() {
  const start = Date.now();
  while (Date.now() - start < 3000) {}
}

setInterval(() => {
  console.log("start");
  greet();
  console.log("end");
}, 1000);

```

# When SHOULD you use setInterval?

- UI timers
- Stopwatch
- Simple Counters
