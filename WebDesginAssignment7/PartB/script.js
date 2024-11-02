let startTime = 0;
let elapsedTime = 0;
let timerInterval;


const formatTime = (time) => {
  const hours = String(Math.floor(time / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const setDatePicker = async () => {
  const currentDate = new Date().toISOString().split("T")[0];
  await new Promise((resolve) => setTimeout(resolve, 100)); 
  document.getElementById("datePicker").value = currentDate;
};

setDatePicker();


const startStopwatch = async () => {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timeDisplay").textContent = formatTime(elapsedTime);
  }, 1000);

  document.getElementById("startBtn").disabled = true;
  document.getElementById("stopBtn").disabled = false;
  document.getElementById("resetBtn").disabled = false;
};


const stopStopwatch = async () => {
  clearInterval(timerInterval);
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
};


const resetStopwatch = async () => {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById("timeDisplay").textContent = "00:00:00";

  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
  document.getElementById("resetBtn").disabled = true;
};


document.getElementById("startBtn").addEventListener("click", async () => {
  await startStopwatch();
});

document.getElementById("stopBtn").addEventListener("click", async () => {
  await stopStopwatch();
});

document.getElementById("resetBtn").addEventListener("click", async () => {
  await resetStopwatch();
});
