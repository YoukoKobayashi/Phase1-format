// refactoring challenge
// 2. 5列分の配列を作る
const numArr = [];
for (let col = 1; col <= 5; col++) {
  // 1. 各列に表示する数値の配列を作る
  const randomNumArr = [];
  let i = 1;
  while (i <= 5) {
    let num =
      Math.floor(Math.random() * (15 * col - 15 * (col - 1))) +
      15 * (col - 1) +
      1;
    if (randomNumArr.includes(num) === false) {
      randomNumArr.push(num);
      i++;
    }
    // console.log(randomNumArr);
  }
  numArr.push(randomNumArr);
}
numArr[2][2] = "free";

const titleArr = ["B", "I", "N", "G", "O"];
const view = document.getElementById("view"); //table
// console.log(numArr);
// タイトル行を作る
for (let col = 0; col < titleArr.length; col++) {
  const th = document.createElement("th");
  th.textContent = titleArr[col];
  view.appendChild(th);
}
// 5x5の数値を、二次元配列numArrから1行ずつ作る
for (col = 0; col < titleArr.length; col++) {
  const tr = document.createElement("tr"); // 2. tr作ってtableに追加
  view.appendChild(tr);
  for (let row = 0; row < titleArr.length; row++) {
    const td = document.createElement("td"); // 1. 数値をtd5つ分に入れてtrに追加
    td.textContent = numArr[row][col];
    tr.appendChild(td);
    // 中央のfreeの背景色を変更するcssのclass名を付与する
    if (td.textContent === "free") {
      td.setAttribute("class", "hit-num");
    }
  }
}

const hitNum = document.getElementById("hitNum"); //button
// 重複数値判定用の配列を用意する
const selectNumArr = [];
hitNum.addEventListener("click", () => {
  const td = document.getElementsByTagName("td");
  let selectNum = Math.floor(Math.random() * 75) + 1;
  // 重複確認用配列を用意し、生成した数値を格納する際、includesで重複判定の処理を行う
  if (selectNumArr.includes(selectNum) === true) {
    Math.floor(Math.random() * 75) + 1;
  } else {
    selectNumArr.push(selectNum);
    alert(`${selectNum}です`);
    // 数値が合致した場合に背景色を変更するcssのclass名を付与する
    for (let i = 0; i < td.length; i++) {
      if (td[i].textContent === String(selectNum)) {
        td[i].setAttribute("class", "hit-num");
      }
    }
  }
});
