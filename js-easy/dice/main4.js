// 追加チャレンジ問題
// 1人分の処理 *2 ------------------
// inputボタンを取得＆クリックしたら
// 0.1秒間隔で3秒間ランダムな値1-6を生成し、
// body要素の子要素imgを変更する
// inputボタンをdisabledにする ------
// p要素に勝敗を表示＆disabledをfalseにする

// global --------
const startBtn1 = document.getElementById("player1Btn");
const startBtn2 = document.getElementById("player2Btn");
const diceImg1 = document.getElementById("setPlayer1dice");
const diceImg2 = document.getElementById("setPlayer2dice");
const result = document.getElementById("result");
// fnで使用
let index;
// let count = 0;
// let diceNumber1 = [];
// let diceNumber2 = [];
// const diceNumbers = [diceNumber1, diceNumber2];
let diceNumbers = [[], []];
const startBtns = [startBtn1, startBtn2];
const diceImages = [diceImg1, diceImg2];
// --------global

// imgサイズと、最初に表示するdiceImgを属性でセット&表示する
diceImages.forEach((ele) => {
  ele.style.width = "100px";
  ele.style.height = "100px";
  // ele.style.src = "./img/saikoro1.png";
  ele.setAttribute("src", "./img/saikoro1.png");
});

// 各プレイヤーボタンのイベント
startBtn1.addEventListener("click", () => {
  startBtn1.disabled = true;
  index = 0;
  // count += 1;
  processDiceGame(index);
});
startBtn2.addEventListener("click", () => {
  startBtn2.disabled = true;
  index = 1;
  // count += 1;
  processDiceGame(index);
});

// イベントの順序: 乱数発生&ストップ→勝敗判定→リセット
const processDiceGame = async () => {
  await rollDice();
  await victoryJudge();
  reset();
  // setTimeout(() => {
  //   location.reload();
  // }, 2000);
};

// fn.乱数発生＆img表示(path)切り替えの処理
const setDiceImg = () => {
  let randomNum = Math.floor(Math.random() * 6 + 1);
  diceImages[index].setAttribute("src", `./img/saikoro${randomNum}.png`);
  diceNumbers[index].push(randomNum);
};

// fn:1 0.1秒ごとに乱数発生、3秒後に停止しimg確定
const rollDice = () => {
  return new Promise((resolve, reject) => {
    let timer = setInterval(() => {
      setDiceImg();
    }, 100);
    setTimeout(() => {
      resolve();
      clearInterval(timer);
    }, 3000);
  });
};

// fn:2 勝敗判定  ここには時間を制御する処理が含まれないため非同期Promiseは不要?
const victoryJudge = () => {
  return new Promise((resolve) => {
    if (diceNumbers[0].length !== 30 || diceNumbers[1].length !== 30) {
      return;
    }
    if (diceNumbers[0].slice(-1) > diceNumbers[1].slice(-1)) {
      result.textContent = "player1の勝ち";
    } else if (diceNumbers[0].slice(-1) < diceNumbers[1].slice(-1)) {
      result.textContent = "player2の勝ち";
    } else {
      result.textContent = "引き分け";
    }
    resolve();
  });
};

// fn:3 判定後に表示をリセットする
const reset = () => {
  setTimeout(() => {
    startBtns.forEach((ele) => {
      ele.disabled = false;
    });
    // diceImages.forEach((elem) => { // これだとダメ
    //   elem.setAttribute("src", diceImgPath);
    // });
    diceImg1.setAttribute("src", "./img/saikoro1.png");
    diceImg2.setAttribute("src", "./img/saikoro1.png");
    result.textContent = "???";
    // count = 0;
    diceNumbers = [[], []];
  }, 2000);
};
