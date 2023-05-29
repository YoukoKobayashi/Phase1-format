let timer;
let i = 10;
let iHour;
let iMinute;
let iSec;

const startTimer =
    document.getElementById("startTimer");
const stopTimer =
    document.getElementById("stopTimer");
//const inputTime =
//  document.getElementById("inputTime");
const setTime =
    document.getElementById("setTime");
const nowTime =
    document.getElementById("nowTime");

setTime.addEventListener("click", () => {
    i =
        document.getElementById(
            "inputTime"
        ).value;
    iHour = Math.floor(i / 3600);
    iMinute = Math.floor((i - iHour * 3600) / 60);
    iSec = i - iHour * 3600 - iMinute * 60;
    nowTime.innerHTML = `残り${iHour}時間${iMinute}分${iSec}秒：セット完了です`;
    //nowTime.innerHTML = `${i}：セット完了です`;
});

startTimer.addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval(() => {
        countDown();
    }, 1000);
});

const countDown = () => {
    i -= 1;
    iSec = i % 60;
    iMinute = Math.floor((i % 3600) / 60);
    iHour = Math.floor(i / 3600);
    nowTime.textContent = `残り${iHour}時間${iMinute}分${iSec}秒`;
    //nowTime.textContent = i;
    if (i === 0) {
        alert("終了");
        clearInterval(timer);
    }
};

stopTimer.addEventListener("click", () => {
    clearInterval(timer);
    iSec = i % 60;
    iMinute = Math.floor((i % 3600) / 60);
    iHour = Math.floor(i / 3600);
    nowTime.textContent = `残り${iHour}時間${iMinute}分${iSec}秒でストップしました`;
    //nowTime.textContent = `${i}：ストップしました`;
});
