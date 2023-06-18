// refactoring: normal
const nowTime = document.getElementById("nowTime");
const nowTime2 = document.getElementById("nowTime2");
const nowTime3 = document.getElementById("nowTime3");

const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");
const startTimer = document.getElementById("startTimer");

const nowTimes = [nowTime, nowTime2, nowTime3];
const setTimes = [setTime1, setTime2, setTime3];

let timer1;
let timer2;
let timer3;
const timers = [timer1, timer2, timer3];
let cnt = 0;

const init = () => {
  startTimer.disabled = false;
  setTime1.disabled = true;
  setTime2.disabled = true;
  setTime3.disabled = true;
};
init();

startTimer.addEventListener("click", () => {
  startTimer.disabled = true;
  setTime1.disabled = false;
  setTime2.disabled = false;
  setTime3.disabled = false;
  clear(0);
  clear(1);
  clear(2);
});

const clear = (num) => {
  clearInterval(timers[num]);
  timers[num] = setInterval(() => {
    countUp(num);
  }, 100);
};
const countUp = (num) => {
  if (cnt === 9) {
    cnt = 0;
  } else {
    cnt += 1;
  }
  nowTimes[num].textContent = `${cnt}`;
};

const setTimer = (num) =>{
  setTimes[num].addEventListener('click',()=>{
    clearInterval(timers[num]);
    setTimes[num].disabled = true;
    judge();
  })
}

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

setTimer(0);
setTimer(1);
setTimer(2);
