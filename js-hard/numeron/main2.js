const remainTurn = document.getElementById("remainTurn");
const answerNum = document.getElementById("answerNum");
const numCheck = document.getElementById("numCheck");

remainTurn.textContent = "あと残り10回です";
let cnt = 10;

// personの入力値を取得する
let myNum;
let my1;
let my2;
let my3;
const createMyNum = () => {
  // myNum = JSON.stringify(answerNum.value);
  myNum = answerNum.value;
  my1 = myNum.slice(0, 1);
  my2 = myNum.slice(1, 2);
  my3 = myNum.slice(2, 3);
  judgeMyNum();
};
const judgeMyNum = () => {
  if (my1 === my2 || my1 === my3 || my2 === my3) {
    alert("3桁の数字はすべて異なる数字で指定してください");
    answerNum.textContent = "";
    my1 = "";
    my2 = "";
    my3 = "";
  }
};

numCheck.addEventListener("click", () => {
  // computer側の数値を生成
  let compNum;
  let comp1;
  let comp2;
  let comp3;
  const createComputerNum = () => {
    // randomで3桁の乱数を生成。100の位がない場合に備え、comp1で0も生成させる。
    compNum = Math.floor(Math.random() * 1000);
    // myNumがvalueなので、JSON.stringifyで文字列にする
    comp1 = JSON.stringify(Math.floor(compNum / 100));
    comp2 = JSON.stringify(Math.floor((compNum - comp1 * 100) / 10));
    comp3 = JSON.stringify(compNum - comp1 * 100 - comp2 * 10);
    judgeCompNum();
  };
  const judgeCompNum = () => {
    if (comp1 === comp2 || comp1 === comp3 || comp2 === comp3) {
      createComputerNum();
    }
  };
  // 実行
  createComputerNum();
  let compNumArr = [comp1, comp2, comp3];
  // 実行
  createMyNum();
  let myNumArr = [my1, my2, my3];
  let compareArr = [compNumArr, myNumArr];
  // let compareArr = [[comp1, comp2, comp3][my1, my2, my3]]

  // 判定
  let eat = 0;
  let bite = 0;
  for (let i = 0; i < compNumArr.length; i++) {
    if (compareArr[0][i] === compareArr[1][i]) {
      eat += 1;
    }
    if (compareArr[0][i] === compareArr[1][(i + 1) % 3]) {
      bite += 1;
    }
    if (compareArr[0][i] === compareArr[1][(i + 2) % 3]) {
      bite += 1;
    }
  }
  alert(`${eat}EAT,${bite}BITE`);
  cnt -= 1;
  remainTurn.textContent = `あと残り${cnt}回です`;
  answerNum.textContent = "";
  answerNum.value = "";
  if (cnt === 0) {
    numCheck.disabled = true;
  }
});
