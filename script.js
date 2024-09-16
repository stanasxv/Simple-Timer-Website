let countdown;

function startTimer() {
  clearInterval(countdown);

  const minutesInput = document.getElementById('minutes').value;
  const display = document.getElementById('timerDisplay');
  let timeLeft = minutesInput * 60;

  countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdown);
      display.textContent = "Time is Up!";
    }
  }, 1000);
}
