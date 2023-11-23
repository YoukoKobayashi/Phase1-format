// normal
// const confirmButton = document.getElementById("confirmTime");
// const startButton = document.getElementById("startTimer");
// const displayTime = document.getElementById("now_time");

// let seconds = 0;
// let timer;

// startButton.addEventListener('click',()=>{
//   clearInterval(timer);
//   timer=setInterval(() => {
//     countUpTime();
//   }, 1000);
// });

// confirmButton.addEventListener('click',()=>{
//   if(seconds===20){
//     alert('ジャスト20秒です！お見事！')
//   }else if(seconds<20){
//     alert(`まだ${seconds}秒です。最初からやり直してね！`)
//   }else{
//     alert(`すでに${seconds}秒経過！最初からやり直してね！`)
//   }
//   clearInterval(timer);
//   seconds=0;
// });

// const countUpTime = () => {
//   seconds += 1;
//   if(seconds===40){
//     clearInterval(timer);
//     alert('タイムオーバー！最初からやり直してね');
//     seconds =0;
//   }
// }

// チャレンジ -----------
const confirmButton = document.getElementById("confirmTime2");
const startButton = document.getElementById("startTimer2");
const displayTime = document.getElementById("now_time");

let timer;
let startTime;
let nowTime;
let diffTime;

startButton.addEventListener("click", () => {
  startTime = new Date();
  clearInterval(timer);
  timer = setInterval(() => {
    countUpTimeFromNow();
  }, 1000);
});

confirmButton.addEventListener("click", () => {
  // nowTime = new Date();
  if (startTime === undefined) {
    return;
  }
  if (diffTime === 20) {
    alert("ジャスト20秒です！お見事！");
  } else if (diffTime < 20) {
    alert(`まだ${diffTime}秒です。最初からやり直してね！`);
  } else {
    alert(`すでに${diffTime}秒経過！最初からやり直してね！`);
  }
  clearInterval(timer);
});

const countUpTimeFromNow = () => {
  nowTime = new Date();
  diffTime = Math.floor((nowTime.getTime() - startTime.getTime()) / 1000);

  if (diffTime === 40) {
    alert("タイムオーバー40秒経過！最初からやり直してね");
  }
};
