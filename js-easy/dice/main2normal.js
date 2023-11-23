
// normal
// inputボタンを取得＆クリックしたら
// 0.1秒間隔で3秒間ランダムな値1-6を生成し、
// body要素の子要素imgを変更する

// global --------
const startBtn = document.getElementById("diceBtn");
const body = document.querySelector("body");
const diceImg = document.createElement("img");
// 再代入可能な変数をletで宣言し、表示するimgのパスを格納
let diceImgPath = `./img/saikoro1.png`;
// --------global

// imgサイズと、最初に表示するdiceImgを属性でセット&表示する
diceImg.style.width = "100px";
diceImg.style.height = "100px";
diceImg.setAttribute("src", diceImgPath);
body.appendChild(diceImg);

startBtn.addEventListener("click", () => {
  // 100msごとに関数"setDiceImg()"を実行するtimer
  // let timer = setInterval("setDiceImg()", 100);
  let timer = setInterval(() => {
    setDiceImg();
  }, 100);
  // 3秒後にtimer処理を中止しimg確定
  setTimeout(() => {
    clearInterval(timer);
  }, 3000);
});

// 乱数発生＆img表示切り替えの関数
const setDiceImg = () => {
  let randomNums = Math.floor(Math.random() * 6 + 1);
  diceImgPath = `./img/saikoro${randomNums}.png`;
  diceImg.setAttribute("src", diceImgPath);
};
