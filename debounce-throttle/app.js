const inputElement = document.getElementById("searchTerm");
const paragraphElement = document.getElementById("typedText");
const boxElement = document.getElementById("mouseBox");
const textElement = document.getElementById("mouseText");
let numberOfFnCalls = 0;
let mouseMoveNum = 0;

function debounce(fn, delay = 100) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, delay = 200) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    fn(...args);
    shouldWait = true;

    timeout = setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

const updateTextDebounce = debounce((text) => {
  numberOfFnCalls++;
  console.log(numberOfFnCalls);
  paragraphElement.textContent = text;
});

const updateMouseTextThrottle = throttle((num) => {
  console.log(num);
  textElement.textContent = num;
});

inputElement.addEventListener("input", (e) => {
  updateTextDebounce(e.target.value);
  updateMouseTextThrottle(e.target.value);
});

// boxElement.addEventListener("mousemove", (e) => {
//   mouseMoveNum++;
//   updateMouseTextThrottle(mouseMoveNum);
// });

// const arr = [1, 2, 3, 2, 5, 3, 4, 4, 4, 1, 6, 7, 8, 8];
// const reduced = arr.reduce((acc, value) => {
//   if (acc[value]) {
//     acc[value] += 1;
//   } else {
//     acc[value] = 1;
//   }
//   return acc;
// }, {});
// console.log(reduced);
