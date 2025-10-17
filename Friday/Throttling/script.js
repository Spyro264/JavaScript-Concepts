function throttling(func, delayTime) {
  let timeout = null;

  return (...args) => {
    if (!timeout) {
      func(...args); // calling fun if timeout is null
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
throtlled();
throtlled();
setTimeout(() => {
  throtlled();
}, 3000);
setTimeout(() => {
  throtlled();
}, 7000);
