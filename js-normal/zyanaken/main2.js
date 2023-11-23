const setHand = document.getElementById("setHand");
const player1Hand = document.getElementById("player1Hand");
const player2Hand = document.getElementById("player2Hand");
const player = document.getElementById("player");
const playerHand = document.getElementById("playerHand");
const gameStart = document.getElementById("gameStart");
const log = document.getElementById("log");

let count = 0; // const が使えない時にletを用いる。極力constで宣言。
let judgeValues1;
let judgeValues2;

setHand.addEventListener("click", () => {
  count++;
  // playerHandのvalueを取得する
  if (count === 1) {
    // playerのtextContentを表示
    judgeValues1 = playerHand.value;
    player1Hand.textContent = "セット完了";
  } else {
    judgeValues2 = playerHand.value;
    player2Hand.textContent = "セット完了";
  }
});

//----------------------------------------------------------------------
// まとめて書こうとせず、パーツ対処理の１対１くらいの短さで、わかる部分をどんどんコードにしてみる。→組み立てて動かしてみる。→動かなかったら実行箇所の確認等エラーの起きている場所を特定する。
//1
judgeValues1 = playerHand.value;
player1Hand.textContent = "セット完了";
// judgeValues[0]=(playerHand.value)  // 配列のindex指定で=代入が可能
// judgeValues.push(playerHand.value);// 普通はpushでOK
//2
judgeValues2 = playerHand.value;
player2Hand.textContent = "セット完了";

//judge
gameStart.addEventListener("click", () => {
  if (
    (judgeValues1 === "0" && judgeValues2 === "1") ||
    (judgeValues1 === "1" && judgeValues2 === "2")
  ) {
    log.textContent = "Player1の勝ち";
  } else if (
    (judgeValues1 === "1" && judgeValues2 === "0") ||
    (judgeValues1 === "2" && judgeValues2 === "1")
  ) {
    log.textContent = "Player2の勝ち";
  } else {
    log.textContent = "引き分け";
  }
});
