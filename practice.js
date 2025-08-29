let sum = 0;
let interval;

function startIncrease() {
  interval = setInterval(() => {
    sum += 1;
    document.querySelector("h1").innerHTML = sum;
  }, 100); // Speed: every 100ms
}

function stopIncrease() {
  clearInterval(interval);
}
