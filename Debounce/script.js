const input = document.querySelector(".textinput");

const debounce = (func, time) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      func(...args);
    }, time);
  };
};

const handleChange = (e) => {
  console.log(e.target.value);
};

const debouncedVal = debounce(handleChange, 1000);

input.addEventListener("input", debouncedVal);
