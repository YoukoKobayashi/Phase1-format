// チャレンジ : other_ver.-----------
// 模範解答から改変
const confirmButton = document.getElementById("confirmTime2");
const startButton = document.getElementById("startTimer2");
const displayTime = document.getElementById("now_time");

// let timer;
let startTime;
let nowTime;
let diffTime;
let isConfirmBtnClicked; // 追加

startButton.addEventListener("click", () => {
  startTime = new Date();
  isConfirmBtnClicked = 0;
  console.log(isConfirmBtnClicked); // consoleで確認
  // clearInterval(timer);        //4行不要
  // timer = setInterval(() => {
  //   countUpTimeFromNow();
  // }, 1000);
});

confirmButton.addEventListener("click", () => {
  if (startTime === undefined) {
    return;
  }
  isConfirmBtnClicked += 1;

  if (isConfirmBtnClicked === 1) {
    console.log(isConfirmBtnClicked); // consoleで確認
    nowTime = new Date();
    countUpTimeFromNow();
    judgedTiming(); // <=下記8行分のアラート表示を、関数にまとめた
    // if (diffTime === 20) {
    //   alert("ジャスト20秒です！お見事！");
    // } else if (diffTime < 20) {
    //   alert(`まだ${diffTime}秒です。最初からやり直してね！`);
    // } else {
    //   alert(`すでに${diffTime}秒経過！最初からやり直してね！`);
    // }
    // clearInterval(timer);  //不要
  } else {
    console.log(isConfirmBtnClicked); // consoleで確認。ボタンクリック数は2以上のはず
    judgedTiming();
  }
});

const countUpTimeFromNow = () => {
  diffTime = Math.floor((nowTime.getTime() - startTime.getTime()) / 1000);

  if (diffTime >= 40) {
    alert("タイムオーバー40秒経過！最初からやり直してね");
  }
};

const judgedTiming = () => {
  if (diffTime === 20) {
    alert("ジャスト20秒です！お見事！");
  } else if (diffTime < 20) {
    alert(`まだ${diffTime}秒です。最初からやり直してね！`);
  } else {
    alert(`すでに${diffTime}秒経過！最初からやり直してね！`);
  }
};
