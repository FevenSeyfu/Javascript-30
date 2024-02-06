let countDown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("button");

// run timer
function timer(seconds, message, alertTime) {
  clearInterval(countDown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then, message);

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    //check stopper
    if (secondsLeft <= 0) {
      clearInterval(countDown);
      return;
    }

    // display time
    displayTimeLeft(secondsLeft);
    alertEndTimeClose(secondsLeft,alertTime)
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp, message) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  // display time
  endTime.textContent = `${message}${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function alertEndTimeClose(remainingSeconds, alertTime) {
  if (alertTime > remainingSeconds) {
    endTime.style.color = "red";
    timerDisplay.style.color = "red";
  }
}
function startTimer() {
  let message;
  let alertTime;
  switch (this.dataset.time) {
    case "1500": //focused work
      message = "Break Will Start At ";
      alertTime = 300;
      break;
    case "300": //quick break
      message = "Quick Break Ends At ";
      alertTime = 0;
      break;
    case "900": //long break
      message = "Long Break Ends At ";
      alertTime = 300;
      break;
    case "3600": //lunch break
      message = "Lunch Break Ends At ";
      alertTime = 600;
      break;
  }
  const seconds = parseInt(this.dataset.time);
  timer(seconds, message, alertTime);
}

buttons.forEach((button) => {
  button.addEventListener("click", startTimer);
});
