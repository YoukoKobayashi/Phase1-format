// refactoring challenge
// 2. 5列分の配列を作る
const numArr = Array();
for (let column = 0; column < 5; column++) {
  const randomNums = Array();
  let i = 0; // 配列のインデックスを指定する
  while (i < 5) {
    let sheetNum = Math.floor(Math.random() * 15) + (1 + 15 * column);
    // 繰り返す処理をいくつか書いてみて、共通化できる部分をまとめるようにする。
    // let sheetNum1 = Math.random() * (15 * column + 1) + (1 + 15 * column);
    // let sheetNum2 = Math.random() * (15 * column + 1) + (1 + 15 * column);
    if (randomNums.includes(sheetNum) === false) {
      randomNums.push(sheetNum);
      i++;
    }
  }
  numArr.push(randomNums);
}
numArr[2][2] = "free";
console.log(numArr);

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
// numArr.forEachでまわしたほうがよいのではないか？
for (col = 0; col < numArr[0].length; col++) {
  const tr = document.createElement("tr"); // 2. tr作ってtableに追加
  view.appendChild(tr);
  for (let row = 0; row < numArr[col].length; row++) {
    const td = document.createElement("td"); // 1. 数値をtd5つ分に入れてtrに追加
    td.textContent = numArr[row][col];
    tr.appendChild(td);
    // 中央のfreeの背景色を変更するcssのclass名を付与する
    if (td.textContent === "free") {
      td.setAttribute("class", "hit-num");
    }
  }
}

// 実際の動きや変数名を参考にして作成する ------challenge!!
// 数字1−75の元配列を用意する
let allNumsArr = Array(75).fill((_, i) => {
  i + 1;
});

const hitNum = document.getElementById("hitNum"); //button
hitNum.addEventListener("click", () => {
  // ランダムな数字を生成して、上記の配列から順に削除していく
  let randomNum = Math.floor(Math.random() * 75 + 1);
  if (allNumsArr.includes(randomNum) === false) {
    randomNum = Math.floor(Math.random() * 75 + 1);
    allNumsArr = allNumsArr.splice(randomNum, 1);
  } else {
    allNumsArr = allNumsArr.splice(randomNum, 1);
  }

  const td = document.getElementsByTagName("td");
  alert(`${randomNum}です`);
  // 数値が合致した場合に背景色を変更するcssのclass名を付与する
  for (let i = 0; i < td.length; i++) {
    if (td[i].textContent === String(randomNum)) {
      td[i].setAttribute("class", "hit-num");
    }
  }
});
