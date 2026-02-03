//your JS code here. If required.
const timer = document.getElementById("timer");

function updateTime() {
  const now = new Date();
  timer.textContent = now.toLocaleString();
}

// run immediately
updateTime();

// update every second
setInterval(updateTime, 1000);
