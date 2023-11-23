// const randomsB = [];
// let b = 0;
// while (b < 5) {
//     let n1 = Math.floor(Math.random() * 15) + 1;
//     if (randomsB.includes(n1) === false) {
//         randomsB.push(n1);
//         b += 1;
//     }
// }
// console.log(randomsB);

// const randomsI = [];
// let i = 0;
// while (i < 5) {
//     let n2 =
//         Math.floor(
//             Math.random() * (30 - 16 + 1)
//         ) + 16;
//     if (randomsI.includes(n2) === false) {
//         randomsI.push(n2);
//         i += 1;
//     }
// }
// const randomsN = [];
// let n = 0;
// while (n < 5) {
//     let n3 =
//         Math.floor(
//             Math.random() * (45 - 31 + 1)
//         ) + 31;
//     if (randomsN.includes(n3) === false) {
//         randomsN.push(n3);
//         n += 1;
//     }
// }
// randomsN[2] = "free";
// const randomsG = [];
// let g = 0;
// while (g < 5) {
//     let n4 =
//         Math.floor(
//             Math.random() * (60 - 46 + 1)
//         ) + 46;
//     if (randomsG.includes(n4) === false) {
//         randomsG.push(n4);
//         g += 1;
//     }
// }
// const randomsO = [];
// let o = 0;
// while (o < 5) {
//     let n5 =
//         Math.floor(
//             Math.random() * (75 - 61 + 1)
//         ) + 61;
//     if (randomsO.includes(n5) === false) {
//         randomsO.push(n5);
//         o += 1;
//     }
// }

const titleChars = ["B", "I", "N", "G", "O"];

const randoms25 = [];
for (let line = 1; line <= 5; line++) {
  const randomsOneLine = [];
  let i = 0;
  while (i < 5) {
    let n =
      Math.floor(Math.random() * (15 * line - 15 * (line - 1))) +
      15 * (line - 1) +
      1;
    if (randomsOneLine.includes(n) === false) {
      randomsOneLine.push(n);
      i += 1;
    }
  }
  randoms25.push(randomsOneLine);
}
randoms25[2][2] = "free";
// console.log(randoms25);

const view = document.getElementById("view");
const row = document.createElement("tr");
let tableValues = [];
view.appendChild(row);
for (let t = 0; t < titleChars.length; t++) {
  const tableHeader = document.createElement("th");
  tableHeader.textContent = titleChars[t];
  view.appendChild(tableHeader);
}
for (let r = 0; r < 5; r++) {
  const row = document.createElement("tr");
  view.appendChild(row);
  for (let c = 0; c < 5; c++) {
    const tableData = document.createElement("td");
    tableData.textContent = randoms25[c][r];
    view.appendChild(tableData);
    tableValues.push(randoms25[c][r]);
    // freeを反転
    if (tableData.textContent === "free") {
      tableData.setAttribute("class", "hit-num");
    }
  }
}

console.log(tableValues);

const hitNum = document.getElementById("hitNum");
const checkDuplication = [];
hitNum.addEventListener("click", () => {
  let selectNum = Math.floor(Math.random() * 75) + 1;
  // ランダムな数値の重複確認
  //   checkDuplication.push(selectNum);
  //   if (checkDuplication.includes(selectNum) === false) {
  //     checkDuplication.push(selectNum);
  //   } else {
  //     selectNum = Math.floor(Math.random() * 75) + 1;
  //     if (checkDuplication.includes(selectNum) === false) {
  //       checkDuplication.push(selectNum);
  //     } else {
  //       selectNum = Math.floor(Math.random() * 75) + 1;
  //       if (checkDuplication.includes(selectNum) === false) {
  //         checkDuplication.push(selectNum);
  //       }
  //     }
  //   }
  //   alert(`${selectNum}です`);
  while (checkDuplication.includes(selectNum) === true) {
    selectNum = Math.floor(Math.random() * 75) + 1;
  }
  if (checkDuplication.includes(selectNum) === false) {
    checkDuplication.push(selectNum);
    alert(`${selectNum}です`);
  }
  console.log(checkDuplication);
  const tds = document.getElementsByTagName("td");
  for (c = 0; c < tds.length; c++) {
    //selectNumとtds[c].textContentの数値を比較,型を一致させる
    if (String(selectNum) === tds[c].textContent) {
      tds[c].setAttribute("class", "hit-num");
    }
  }
});

// //bingo-
// const tdb = document.getElementsByTagName("td");
// let cName = "hit-num";
// let cnt = 0;
// while (cnt < 4) {
//   for (r = 0; r < 5; r++) {
//     for (c = 0; c < 5; c++) {
//       if (tdb[r + c * 5].getAttribute("class") === cName) {
//         cnt++;
//       }
//     }
//   }
//   //   if (cnt === 5) {
//   //     alert("ビンゴ！");
//   //   }

//   //bingo|
//   cnt = 0;
//   for (r = 0; r <= 20; r + 5) {
//     for (c = 0; c < 5; c++) {
//       if (tdb[r + c].getAttribute("class") === cName) {
//         cnt++;
//       }
//     }
//   }
//   //   if (cnt === 5) {
//   //     alert("ビンゴ！");
//   //   }

//   //bingo\
//   cnt = 0;
//   for (c = 0; c < 5; c++) {
//     if (tdb[c + c * 5].getAttribute("class") === cName) {
//       cnt++;
//     }
//   }
//   //   if (cnt === 5) {
//   //     alert("ビンゴ！");
//   //   }

//   //bingo/
//   cnt = 0;
//   for (c = 1; c <= 5; c * 4) {
//     if (tdb[c].getAttribute("class") === cName) {
//       cnt++;
//     }
//   }
// }
// if (cnt === 5) {
//   alert("ビンゴ！");
// }
