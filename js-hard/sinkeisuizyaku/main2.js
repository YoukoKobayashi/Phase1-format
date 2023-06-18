const panel = document.getElementById("panel");
// challenge ---
const nextPlayer = document.getElementById("nextPlayer");
const player1Point = document.getElementById("player1Point");
const player2Point = document.getElementById("player2Point");
const message1 = "次はplayer1の番です";
const message2 = "次はplayer2の番です";
let turn1 = 0;
let turn2 = 0;
nextPlayer.textContent = message1;
player1Point.textContent = `player1: ${turn1}`;
player2Point.textContent = `player2: ${turn2}`;
// ---challenge

// ◆要素数8の配列を作る方法
// ◆other ver.1 オブジェクトを作る[{id:1},{id:2},.....{id:8}]
// const numArr = [...Array(8)].map((_, i) => ({id: i + 1}));
// ◆other ver.2 [...Array(length)].map(fn) で作ると [0,1,2,....,7]
// const numArr = [...Array(8)].map((_, i) => i);

// ◆1つめ　配列のみ用意する
// const numArr = [];
// let i = numArr.length;
// while (i < 8) {
//   let cardNum = Math.floor(Math.random() * 13) + 1;
//   if (numArr.includes(cardNum) === false) {
//     numArr.push(cardNum);
//     numArr.push(cardNum);
//   }
//   i = numArr.length;
// }

// ◆2つめ　要素数8を指定して配列を用意する
// const numArr = new Array(8); // new はなくても可
// const numArr = Array.from({length: 8});
// const numArr = [...Array(8)]; // 値はundefinedで展開
// const numArr = Array().fill(0); // 0で埋める
const numArr = [...Array(8)].map(() => 0); // 実質初期値0で埋める
let i = 0; // 配列のインデックスを指定する
while (i < 8) {
  let cardNum = Math.floor(Math.random() * 13) + 1;
  if (numArr.includes(cardNum) === false) {
    numArr[i] = cardNum;
    numArr[i + 1] = cardNum;
    i += 2;
  }
}

// ダステンフェルドの手法によるシャッフル
// 配列の最大インデックスから1まで順に要素を取り出して、生成した数値のインデックスの要素と置き換える（8番目から2番目までと、changeNum+1番目 = インデックス[7]から[1]までと[changeNum]）
for (let cnt = numArr.length - 1; cnt > 0; cnt--) {
  let changeNum = Math.floor(Math.random() * cnt);
  [numArr[cnt], numArr[changeNum]] = [numArr[changeNum], numArr[cnt]];
}

// divでカードを作る
const judgeArr = [];
for (let i = 0; i < numArr.length; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "card back");
  // div.textContent = numArr[i]; // 背景色の指定がbgなので、ここで入れると文字が見えてしまう
  div.addEventListener("click", () => {
    div.className = "card";
    div.textContent = numArr[i];
    judgeArr.push(div);
    // console.log(judgeArr);
    judgeCards();
  });
  panel.appendChild(div);
}

// カードを2枚クリックした際の判定
const judgeCards = () => {
  let timer = 0;
  setInterval(() => {
    clearInterval(timer);
    if (judgeArr.length === 2) {
      if (judgeArr[0].textContent === judgeArr[1].textContent) {
        // divの両方に指定しないといけないので、配列の2要素に指定する形をとる。
        // div.setAttribute("class", "card finish");
        judgeArr[0].setAttribute("class", "card finish");
        judgeArr[1].setAttribute("class", "card finish");
        judgeArr.splice(0, 2);
        // console.log(judgeArr);
        // challenge ---
        if (nextPlayer.textContent === message1) {
          turn1 += 1;
        } else {
          turn2 += 1;
        } // ---challenge
      } else {
        // div.setAttribute("class", "card back");
        // div.textContent = "";
        judgeArr[0].setAttribute("class", "card back");
        judgeArr[1].setAttribute("class", "card back");
        judgeArr[0].textContent = "";
        judgeArr[1].textContent = "";
        judgeArr.splice(0, 2);
        // console.log(judgeArr);
        // challenge ----
        if (nextPlayer.textContent === message1) {
          nextPlayer.textContent = message2;
        } else {
          nextPlayer.textContent = message1;
        }
      }
      player1Point.textContent = `player1: ${turn1}`;
      player2Point.textContent = `player2: ${turn2}`;
      if (turn1 + turn2 === 4) {
        alert("終了です");
      } // ---challenge
    }
  }, 4000);
};
