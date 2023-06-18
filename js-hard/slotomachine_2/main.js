// refactoring
// htmlの要素を配列にする：上中下列の表示とストップボタン
const nowTime4 = document.getElementById("nowTime4");
const nowTime5 = document.getElementById("nowTime5");
const nowTime6 = document.getElementById("nowTime6");

const nowTime = document.getElementById("nowTime");
const nowTime2 = document.getElementById("nowTime2");
const nowTime3 = document.getElementById("nowTime3");

const nowTime7 = document.getElementById("nowTime7");
const nowTime8 = document.getElementById("nowTime8");
const nowTime9 = document.getElementById("nowTime9");

const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");
const startTimer = document.getElementById("startTimer");

const nowTimesUp = [nowTime4, nowTime5, nowTime6];
const nowTimesMiddle = [nowTime, nowTime2, nowTime3];
const nowTimesBottom = [nowTime7, nowTime8, nowTime9];
const setTimes = [setTime1, setTime2, setTime3];

// ボタン表示の初期化
const init = () => {
  startTimer.disabled = false;
  setTime1.disabled = true;
  setTime2.disabled = true;
  setTime3.disabled = true;
};
init();

// スタートボタンをクリックした際の実行
startTimer.addEventListener("click", () => {
  startTimer.disabled = true;
  setTime1.disabled = false;
  setTime2.disabled = false;
  setTime3.disabled = false;
  clear(0);
  clear(1);
  clear(2);
});

// 0.1秒ごとの処理の関数
let timer1;
let timer2;
let timer3;
const timers = [timer1, timer2, timer3];
const clear = (num) => {
  clearInterval(timers[num]);
  timers[num] = setInterval(() => {
    countUp(num);
  }, 100);
};

// 表示する数字を制御する関数
let cnt = 0;
let cnt2 = -1;
let cnt3 = 1;
const countUp = (num) => {
  if (cnt === 9) {
    cnt = 0;
    cnt2 = 9;
    cnt3 = 1;
  } else if (cnt === 8) {
    cnt = 9;
    cnt2 = 8;
    cnt3 = 0;
  } else if (cnt === 0) {
    cnt = 1;
    cnt2 = 0;
    cnt3 += 1;
  } else {
    cnt += 1;
    cnt2 += 1;
    cnt3 += 1;
  }
  nowTimesMiddle[num].textContent = `${cnt}`;
  nowTimesUp[num].textContent = `${cnt2}`;
  nowTimesBottom[num].textContent = `${cnt3}`;
};

// ストップボタンの処理関数
const setTimer = (num) => {
  setTimes[num].addEventListener("click", () => {
    clearInterval(timers[num]);
    setTimes[num].disabled = true;
    judge();
  });
};

const judge = () => {
  if (
    setTime1.disabled === true &&
    setTime2.disabled === true &&
    setTime3.disabled === true
  ) {
    if (
      nowTime.textContent === nowTime2.textContent &&
      nowTime.textContent === nowTime3.textContent
    ) {
      alert("成功です！");
    } else {
      alert("再挑戦してね！");
    }
    init();
  }
};

// 実行
setTimer(0);
setTimer(1);
setTimer(2);
