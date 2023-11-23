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
// 再代入可能な変数をletで宣言し、表示するimgのパスを格納
let diceImgPath1 = "./img/saikoro1.png";
let diceImgPath2 = "./img/saikoro1.png";
// fnで使用
let index;
let count = 0;
const startBtns = [startBtn1, startBtn2];
const diceImages = [diceImg1, diceImg2];
// --------global

// imgサイズと、最初に表示するdiceImgを属性でセット&表示する
diceImages.forEach((ele) => {
  ele.style.width = "100px";
  ele.style.height = "100px";
  // ele.style.src = "./img/saikoro1.png";
});
diceImg1.setAttribute("src", diceImgPath1);
diceImg2.setAttribute("src", diceImgPath2);

// 各プレイヤーボタンのイベント
// startBtns.forEach((ele) => {
//   ele.addEventListener("click", async () => {
//     ele.disabled = true;
//     index = 0;
//     count += 1;
//     // addEventFunc();
//     await rollDice();
//     victoryJudge();
//     reset();
//   });
// });
startBtn1.addEventListener("click", () => {
  startBtn1.disabled = true;
  index = 0;
  count += 1;
  addEventFunc(index);
});
startBtn2.addEventListener("click", () => {
  startBtn2.disabled = true;
  index = 1;
  count += 1;
  addEventFunc(index);
});

// イベントの順序: 乱数発生&ストップ→勝敗判定→リセット  // 非同期処理のお勉強
const addEventFunc = async () => {
  await rollDice();
  // rollDice().then(() => {
  // await rollDice();
  // // resolveが返ってきたらthenの処理
  // console.log("OK");
  // victoryJudge().then(() => {
  await victoryJudge();
  reset();
  // });
  // })
  // .catch((res) => {
  //   // rejectが返ってきたらcatchの処理
  //   console.log(res);
  // })
  // );
  // await victoryJudge();
  // reset();
};

// fn.乱数発生＆img表示(path)切り替えの処理
const setDiceImg = () => {
  let randomNum = Math.floor(Math.random() * 6 + 1);
  diceImages[index].setAttribute("src", `./img/saikoro${randomNum}.png`);
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

// fn:2 勝敗判定  ここには時間を制御する処理が含まれないため非同期Promiseは不要
const victoryJudge = () => {
  return new Promise((resolve) => {
    if (count !== 2) {
      return;
    }
    let judge1 = diceImg1.getAttribute("src");
    let judge2 = diceImg2.getAttribute("src");
    if (judge1 > judge2) {
      result.textContent = "player1の勝ち";
    } else if (judge1 < judge2) {
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
    // startBtn1.disabled = false;
    // startBtn2.disabled = false;
    result.textContent = "???";
    count = 0;
  }, 2000);
};

// // 即時関数：関数を作ってすぐに実行する際に使用する関数の種類
// (async () => {
//   console.log(
//     rollDice().then(() => {
//       // resolveが返ってきたらthenの処理
//       console.log("OK");
//     })
//     // .catch((res) => {
//     //   // rejectが返ってきたらcatchの処理
//     //   console.log(res);
//     // })
//   );
//   // await victoryJudge();
//   // reset();
// })();　<=最後に実行()
