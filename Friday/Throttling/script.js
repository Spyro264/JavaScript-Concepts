function print() {
  console.log("Throttled function called!");
}

function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const throttledPrint = throttle(print, 2000);

window.addEventListener("scroll", throttledPrint);
// Function will run at most once every 2 seconds while scrolling
