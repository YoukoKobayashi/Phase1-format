// // fizzbuzz
// for (let i = 1; i <= 20; i++) {
// if (i % 15 === 0) {
//     if (i % 3 === 0 && i % 5 ===0) {
//         console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//         console.log("fizz");
//     } else if (i % 5 === 0) {
//         console.log("buzz");
//     } else {
//         console.log(i);
//     }
// }

// // チャレンジ問題;
// // rewriteNum.innerHTML = nextNum; =>.textContent
// const rewriteNum = document.getElementById("rewriteNum");
// let nextNum = 0;
// rewriteNum.textContent = nextNum;

// const rewriteCntUp = () => {
//   nextNum += 1;
//   if (nextNum % 3 === 0 && nextNum % 5 === 0) {
//     rewriteNum.textContent = "fizzbuzz";
//   } else if (nextNum % 3 === 0) {
//     rewriteNum.textContent = "fizz";
//   } else if (nextNum % 5 === 0) {
//     rewriteNum.textContent = "buzz";
//   } else {
//     rewriteNum.textContent = nextNum;
//   }
// };

// 追加チャレンジ問題;
const showNum = document.getElementById("showNum");
let nextNum = 0;
showNum.textContent = nextNum;

const fizzBtn = () => {
  nextNum += 1;
  if (nextNum % 3 === 0 && nextNum % 15 !== 0) {
    showNum.textContent = "fizz";
  } else {
    alert("まちがっちゃったね？");
    location.reload();
  }
};

const buzzBtn = () => {
  nextNum += 1;
  if (nextNum % 5 === 0 && nextNum % 15 !== 0) {
    showNum.textContent = "buzz";
  } else {
    alert("まちがっちゃったね？");
    location.reload();
  }
};

const fizzbuzzBtn = () => {
  nextNum += 1;
  if (nextNum % 3 === 0 && nextNum % 5 === 0) {
    showNum.textContent = "fizzbuzz";
  } else {
    alert("まちがっちゃったね？");
    location.reload();
  }
};

const numBtn = () => {
  nextNum += 1;
  if (nextNum % 3 === 0 || nextNum % 5 === 0) {
    alert("まちがっちゃったね？");
    location.reload();
  } else {
    showNum.textContent = nextNum;
  }
};
