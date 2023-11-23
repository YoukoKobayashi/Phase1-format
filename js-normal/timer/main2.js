// チャレンジ
// 秒単位なので、秒<分<時間の順に計算処理する。
// 60秒以下の処理も記述する？→不要
const inputTimeArea = document.getElementById("inputTime");

const setButton = document.getElementById("setTime");
const startButton = document.getElementById("startTimer");
const stopButton = document.getElementById("stopTimer");
const nowTime = document.getElementById("nowTime");
// let displayTime = document.getElementById("inputTime");
let displayTime;
let displayHour;
let displayMinute;
let displaySecond;
let timer;

setButton.addEventListener("click", () => {
  displayTime = inputTimeArea.value; //inputの属性でtype="number"指定済み
  // 時、分、秒の算出方法その1
  displayHour = Math.floor(displayTime / 3600);
  displayMinute = Math.floor((displayTime - displayHour * 3600) / 60);
  displaySecond = displayTime - displayHour * 3600 - displayMinute * 60;

  // 時、分、秒の算出方法その2
  // displaySecond = displayTime % 60;
  // displayMinute = Math.floor((displayTime % 3600) / 60);
  // displayHour = Math.floor(displayTime / 3600);

  nowTime.textContent = `残り${displayHour}時間${displayMinute}分${displaySecond}秒：セット完了です`;
});

startButton.addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(() => {
    countDown();
  }, 1000);
});

const countDown = () => {
  displayTime -= 1;
  displaySecond = displayTime % 60;
  displayMinute = Math.floor((displayTime % 3600) / 60);
  displayHour = Math.floor(displayTime / 3600);

  nowTime.textContent = `残り${displayHour}時間${displayMinute}分${displaySecond}秒`;
  if (displayTime === 0) {
    alert("終了");
    clearInterval(timer);
  }
};

stopButton.addEventListener("click", () => {
  clearInterval(timer);
  // 1分未満の処理を入れる
  if (displayTime < 60) {
    displayHour = 0;
    displayMinute = 0;
    displaySecond = displayTime;
  } else {
    displaySecond = displayTime % 60;
    displayMinute = Math.floor((displayTime % 3600) / 60);
    displayHour = Math.floor(displayTime / 3600);
  }
  nowTime.textContent = `残り${displayHour}時間${displayMinute}分${displaySecond}秒でストップしました`;
});
