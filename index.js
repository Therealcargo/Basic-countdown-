let countdown = document.getElementById('countdown');
let count = 10;

function updateCountdown() {
  countdown.innerHTML = count;
  if (count === 0) {
    clearInterval(interval);
  } else {
    count--;
  }
}

let interval = setInterval(updateCountdown, 1000);
