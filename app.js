const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

let timeLeft = WORK_TIME;
let isRunning = false;
let isWorkMode = true;
let timerId = null;

const timerEl = document.getElementById('timer');
const modeEl = document.getElementById('mode');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function updateUI(statusText) {
  timerEl.textContent = formatTime(timeLeft);

  if (statusText) {
    modeEl.textContent = statusText;
  } else if (isRunning) {
    modeEl.textContent = isWorkMode ? '工作中' : '休息中';
  } else {
    modeEl.textContent = '已暂停';
  }

  startPauseBtn.textContent = isRunning ? '暂停' : '开始';
}

function startTimer() {
  if (timerId) return;

  isRunning = true;
  updateUI();

  timerId = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      timerId = null;

      isWorkMode = !isWorkMode;
      timeLeft = isWorkMode ? WORK_TIME : BREAK_TIME;
      isRunning = false;

      updateUI(isWorkMode ? '休息结束，准备开始工作' : '工作结束，准备休息');
      return;
    }

    updateUI();
  }, 1000);
}

function pauseTimer() {
  isRunning = false;

  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  updateUI('已暂停');
}

function resetTimer() {
  pauseTimer();
  isWorkMode = true;
  timeLeft = WORK_TIME;
  updateUI('准备开始');
}

startPauseBtn.addEventListener('click', () => {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
});

resetBtn.addEventListener('click', resetTimer);

updateUI('准备开始');
