// refactoring_0622
// htmlの要素を取得：上中下列の表示とストップボタン
const upLeft = document.getElementById("nowTime4");
const upCenter = document.getElementById("nowTime5");
const upRight = document.getElementById("nowTime6");
const middleLeft = document.getElementById("nowTime");
const middleCenter = document.getElementById("nowTime2");
const middleRight = document.getElementById("nowTime3");
const bottomLeft = document.getElementById("nowTime7");
const bottomCenter = document.getElementById("nowTime8");
const bottomRight = document.getElementById("nowTime9");
const stopButtonLeft = document.getElementById("setTime1");
const stopButtonCenter = document.getElementById("setTime2");
const stopButtonRight = document.getElementById("setTime3");
const slotStartButton = document.getElementById("startTimer");
// 上記を配列に格納する
const ups = [upLeft, upCenter, upRight];
const middles = [middleLeft, middleCenter, middleRight];
const bottoms = [bottomLeft, bottomCenter, bottomRight];
const stopButtons = [stopButtonLeft, stopButtonCenter, stopButtonRight];

// fn. ボタン表示の初期化
const init = () => {
  slotStartButton.disabled = false;
  stopButtonLeft.disabled = true;
  stopButtonCenter.disabled = true;
  stopButtonRight.disabled = true;
};
init();

// event スタートボタンをクリックした際
slotStartButton.addEventListener("click", () => {
  slotStartButton.disabled = true;
  stopButtonLeft.disabled = false;
  stopButtonCenter.disabled = false;
  stopButtonRight.disabled = false;
  clearCountUpNumber(0);
  clearCountUpNumber(1);
  clearCountUpNumber(2);
});

// fn. 0.1秒ごとの処理= 表示する数字を制御する関数を実行
// let stopLeftId;  // ①変数に直接返り値IDが入るわけではないので、下記constで宣言してOK
// let stopCenterId;
// let stopRightId;
// const stopLeftId = 0; // ②ここに返り値IDが入るわけではないので、constで適当な数値を入れても動く
// const stopCenterId = 0;  // ②の理屈から、空配列を用意しておけばOKで、constも不要
// const stopRightId = 0;
const controlStopButtons = []; // setIntervalの返り値IDが格納される
const clearCountUpNumber = (index) => {
  clearInterval(controlStopButtons[index]); // setIntervalの返り値IDが配列の要素に入る
  controlStopButtons[index] = setInterval(() => {
    displayCountUpNumbers(index);
  }, 100);
};

// fn. 表示する数字を制御する
let displayUp = -1;
let displayMiddle = 0;
let displayBottom = 1;
const displayCountUpNumbers = (index) => {
  if (displayMiddle === 9) {
    displayMiddle = 0;
    displayUp = 9;
    displayBottom = 1;
  } else if (displayMiddle === 8) {
    displayMiddle = 9;
    displayUp = 8;
    displayBottom = 0;
  } else if (displayMiddle === 0) {
    displayMiddle = 1;
    displayUp = 0;
    displayBottom += 1;
  } else {
    displayMiddle += 1;
    displayUp += 1;
    displayBottom += 1;
  }
  middles[index].textContent = `${displayMiddle}`;
  ups[index].textContent = `${displayUp}`;
  bottoms[index].textContent = `${displayBottom}`;
};

// fn. ストップボタンの処理
const clickStopButton = (index) => {
  stopButtons[index].addEventListener("click", () => {
    clearInterval(controlStopButtons[index]);
    stopButtons[index].disabled = true;
    judge();
  });
};

// fn. 停止時の3桁の判定
const judge = () => {
  if (
    stopButtonLeft.disabled === true &&
    stopButtonCenter.disabled === true &&
    stopButtonRight.disabled === true
  ) {
    middleLeft.textContent === middleCenter.textContent &&
    middleLeft.textContent === middleRight.textContent
      ? alert("成功です！")
      : alert("再挑戦してね！");

    init();
  }
};

// 実行
clickStopButton(0);
clickStopButton(1);
clickStopButton(2);
