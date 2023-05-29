// const arrB = [];
// let b = 0;
// while (b < 5) {
//     let n1 = Math.floor(Math.random() * 15) + 1;
//     if (arrB.includes(n1) === false) {
//         arrB.push(n1);
//         b += 1;
//     }
// }
// console.log(arrB);

// const arrI = [];
// let i = 0;
// while (i < 5) {
//     let n2 =
//         Math.floor(
//             Math.random() * (30 - 16 + 1)
//         ) + 16;
//     if (arrI.includes(n2) === false) {
//         arrI.push(n2);
//         i += 1;
//     }
// }
// const arrN = [];
// let n = 0;
// while (n < 5) {
//     let n3 =
//         Math.floor(
//             Math.random() * (45 - 31 + 1)
//         ) + 31;
//     if (arrN.includes(n3) === false) {
//         arrN.push(n3);
//         n += 1;
//     }
// }
// arrN[2] = "free";
// const arrG = [];
// let g = 0;
// while (g < 5) {
//     let n4 =
//         Math.floor(
//             Math.random() * (60 - 46 + 1)
//         ) + 46;
//     if (arrG.includes(n4) === false) {
//         arrG.push(n4);
//         g += 1;
//     }
// }
// const arrO = [];
// let o = 0;
// while (o < 5) {
//     let n5 =
//         Math.floor(
//             Math.random() * (75 - 61 + 1)
//         ) + 61;
//     if (arrO.includes(n5) === false) {
//         arrO.push(n5);
//         o += 1;
//     }
// }

const arrTtl = ["B", "I", "N", "G", "O"];

const arrNum = [];
for (let a = 1; a <= 5; a++) {
  const arr = [];
  let i = 0;
  while (i < 5) {
    let n =
      Math.floor(Math.random() * (15 * a - 15 * (a - 1))) + 15 * (a - 1) + 1;
    if (arr.includes(n) === false) {
      arr.push(n);
      i += 1;
    }
  }
  arrNum.push(arr);
}
arrNum[2][2] = "free";
console.log(arrNum);

const view = document.getElementById("view");
const tr = document.createElement("tr");
let tdsValues = [];
view.appendChild(tr);
for (let t = 0; t < arrTtl.length; t++) {
  const th = document.createElement("th");
  th.textContent = arrTtl[t];
  view.appendChild(th);
}
for (let r = 0; r < 5; r++) {
  const tr = document.createElement("tr");
  view.appendChild(tr);
  for (let c = 0; c < 5; c++) {
    const td = document.createElement("td");
    td.textContent = arrNum[c][r];
    view.appendChild(td);
    tdsValues.push(arrNum[c][r]);
    // freeを反転
    if (td.textContent === "free") {
      td.setAttribute("class", "hit-num");
    }
  }
}

console.log(tdsValues);

const hitNum = document.getElementById("hitNum");
const duppli = [];
hitNum.addEventListener("click", () => {
  let selectNum = Math.floor(Math.random() * 75) + 1;
  // ランダムな数値の重複確認
  //   duppli.push(selectNum);
  //   if (duppli.includes(selectNum) === false) {
  //     duppli.push(selectNum);
  //   } else {
  //     selectNum = Math.floor(Math.random() * 75) + 1;
  //     if (duppli.includes(selectNum) === false) {
  //       duppli.push(selectNum);
  //     } else {
  //       selectNum = Math.floor(Math.random() * 75) + 1;
  //       if (duppli.includes(selectNum) === false) {
  //         duppli.push(selectNum);
  //       }
  //     }
  //   }
  //   alert(`${selectNum}です`);
  while (duppli.includes(selectNum) === true) {
    selectNum = Math.floor(Math.random() * 75) + 1;
  }
  if (duppli.includes(selectNum) === false) {
    duppli.push(selectNum);
    alert(`${selectNum}です`);
  }
  console.log(duppli);
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
