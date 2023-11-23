// ◆要素数8の配列を作る方法
// ◆other ver.1 オブジェクトを作る[{id:1},{id:2},.....{id:8}]
// const randomNums = [...Array(8)].map((_, i) => ({id: i + 1}));
// ◆other ver.2 [...Array(length)].map(fn) で作ると [0,1,2,....,7]
// const randomNums = [...Array(8)].map((_, i) => i);

// ◆1つめ　配列のみ用意する
// const randomNums = [];
// let i = randomNums.length;
// while (i < 8) {
//   let cardNum = Math.floor(Math.random() * 13) + 1;
//   if (randomNums.includes(cardNum) === false) {
//     randomNums.push(cardNum);
//     randomNums.push(cardNum);
//   }
//   i = randomNums.length;
// }

// ◆2つめ　要素数8を指定して配列を用意する
// const randomNums = new Array(8); // new はなくても可
// const randomNums = Array.from({length: 8});
// const randomNums = [...Array(8)]; // 値はundefinedで展開
// const randomNums = Array().fill(0); // 0で埋める
const randomNums = [...Array(8)].map(() => 0); // 実質初期値0で埋める
let i = 0; // 配列のインデックスを指定する
while (i < 8) {
  let cardNum = Math.floor(Math.random() * 13) + 1;
  if (randomNums.includes(cardNum) === false) {
    randomNums[i] = cardNum;
    randomNums[i + 1] = cardNum;
    i += 2;
  }
}

// ダステンフェルドの手法によるシャッフル
// 配列の最大インデックスから1まで順に要素を取り出して、生成した数値のインデックスの要素と置き換える（8番目から2番目までと、changeNum+1番目 = インデックス[7]から[1]までと[changeNum]）
for (let l = randomNums.length - 1; l > 0; l--) {
  let k = Math.floor(Math.random() * l);
  [randomNums[l], randomNums[k]] = [randomNums[k], randomNums[l]];
}

const panel = document.getElementById("panel");
// challenge ---
const nextPlayerGuide = document.getElementById("nextPlayer");
const player1Point = document.getElementById("player1Point");
const player2Point = document.getElementById("player2Point");
let selectedCards = [];
let selectedCardNumbers = []; //cardのうち数値のみ格納するための配列を用意
let player1NumberOfTimes = 0;
let player2NumberOfTimes = 0;
const players = ["Player1", "Player2"];
nextPlayerGuide.textContent = `次は${players[0]}の番です`;
player1Point.textContent = `${players[0]}:${player1NumberOfTimes}`;
player2Point.textContent = `${players[1]}:${player2NumberOfTimes}`;
// ---challenge

// divでカードを作る
for (let n = 0; n < randomNums.length; n++) {
  const card = document.createElement("div");
  card.setAttribute("class", "card back");
  // card.textContent = randomNums[i]; // 背景色の指定がbgなので、ここで入れると文字が見えてしまう
  card.addEventListener("click", () => {
    card.className = "card";
    card.textContent = randomNums[n];
    selectedCards.push(card);
    selectedCardNumbers.push(randomNums[n]);
    judgeCards();
  });
  panel.appendChild(card);
}

// fn.カードを2枚クリックした際の判定
const judgeCards = () => {
  let nowPlayer = nextPlayerGuide.textContent.slice(2, 9);
  setTimeout(() => {
    if (selectedCards.length === 2) {
      if (selectedCardNumbers[0] === selectedCardNumbers[1]) {
        selectedCards[0].className = "card finish";
        selectedCards[1].className = "card finish";
        //challenge
        nowPlayer === players[0]
          ? (nowPlayer = players[0])
          : (nowPlayer = players[1]);
        nowPlayer === players[0]
          ? (player1NumberOfTimes += 1)
          : (player2NumberOfTimes += 1);
      } else {
        //console.log("違う");  挙動の確認
        selectedCards[0].className = "card back"; // selectedCards
        selectedCards[1].className = "card back";
        selectedCards[0].textContent = "";
        selectedCards[1].textContent = "";
        //challenge
        nowPlayer === players[0]
          ? (nowPlayer = players[1])
          : (nowPlayer = players[0]);
      }
      selectedCards.splice(0, 2); // 配列をカラに
      selectedCardNumbers.splice(0, 2); // 配列をカラに
      nextPlayerGuide.textContent = `次は${nowPlayer}の番です`;
      player1Point.textContent = `Player1:${player1NumberOfTimes}`;
      player2Point.textContent = `Player2:${player2NumberOfTimes}`;
      if (player1NumberOfTimes + player2NumberOfTimes === 4) {
        alert("終了です");
      }
    }
  }, 500);
};

// const sum = function (x, y) {
//   let z = x + y;
//   return z;
// };
// //(x,y)は引数
// //引数は、関数を実行する際に任意に与えることのできる値
// sum(); //関数の実行
// sum(x, y);
// sum(1, 2); //=>3
// sum(100, 200); //=>300
// sum(0.5, 20); //=>20.5
