// const gameStart =
//     document.getElementById("gameStart");
// const cpHand = document.getElementById("cpHand");
// const log = document.getElementById("log");

// gameStart.addEventListener("click", () => {
//     const myHand =
//         document.getElementById("myHand").value;
//     myHand = parseInt(myHand);
//     const rndmNum = Math.floor(Math.random() * 3);
//     console.log(rndmNum);

//     rndmNum = rndmNum;
//     switch (rndmNum) {
//         case 0:
//             cpHand.textContent = "相手の手：グー";
//             break;
//         case 1:
//             cpHand.textContent =
//                 "相手の手：チョキ";
//             break;
//         case 2:
//             cpHand.textContent = "相手の手：パー";
//             break;
//     }

//     if (myHand === 2) {
//         if (rndmNum === 0) {
//             log.textContent =
//                 "結果：あなたの勝ち";
//         } else if (rndmNum === 1) {
//             log.textContent =
//                 "結果：あなたの負け";
//         } else {
//             log.textContent = "結果：引き分け";
//         }
//     } else if (rndmNum - myHand === 1) {
//         log.textContent = "結果：あなたの勝ち";
//     } else if (rndmNum - myHand === 0) {
//         log.textContent = "結果：引き分け";
//     } else {
//         log.textContent = "結果：あなたの負け";
//     }
// });

// answer
// const cpHand = document.getElementById("cpHand");
// cpHand.textContent = "相手の手：";
// const log = document.getElementById("log");
// log.textContent = "結果：";

// const gameStart =
//     document.getElementById("gameStart");
// gameStart.addEventListener("click", () => {
//     const myNum =
//         document.getElementById("myHand").value;

//     const cpNum = Math.floor(Math.random() * 3);

//     if (cpNum === 0) {
//         cpHand.textContent = "相手の手：グー";
//     } else if (cpNum === 1) {
//         cpHand.textContent =
//             "相手の手：チョキ    ";
//     } else if (cpNum === 2) {
//         cpHand.textContent = "相手の手：パー";
//     }

//     switch (myNum) {
//         case "0": {
//             if (cpNum === 0) {
//                 log.textContent =
//                     "結果：引き分け";
//             } else if (cpNum === 1) {
//                 log.textContent = "結果：勝ち";
//             } else if (cpNum === 2) {
//                 log.textContent = "負け";
//             }
//             break;
//         }
//         case "1": {
//             if (cpNum === 0) {
//                 log.textContent = "結果：負け";
//             } else if (cpNum === 1) {
//                 log.textContent =
//                     "結果：引き分け";
//             } else if (cpNum === 2) {
//                 log.textContent = "勝ち";
//             }
//             break;
//         }
//         case "2": {
//             if (cpNum === 0) {
//                 log.textContent = "結果：勝ち";
//             } else if (cpNum === 1) {
//                 log.textContent = "結果：負け";
//             } else if (cpNum === 2) {
//                 log.textContent = "引き分け";
//             }
//             break;
//         }
//     }
// });

// challenge
const setHand = document.getElementById("setHand");
const player1Hand = document.getElementById("player1Hand");
const player2Hand = document.getElementById("player2Hand");
const player = document.getElementById("player");

let turn = 0;
let player1Value;
let player2Value;

setHand.addEventListener("click", () => {
  if (turn === 0) {
    player1Value = document.getElementById("playerHand").value;
    player1Hand.textContent = "player1:セット完了";
    player.textContent = "player2";
  } else {
    player2Value = document.getElementById("playerHand").value;
    player2Hand.textContent = "player2:セット完了";
    player.textContent = "両者セット完了";
  }
  turn += 1;
});

const gameStart = document.getElementById("gameStart");
const log = document.getElementById("log");
log.textContent = "結果：";

gameStart.addEventListener("click", () => {
  if (turn !== 2) {
    alert("2回以上押さないでください");
    return;
  }
  switch (player1Value) {
    case "0": {
      if (player2Value === "0") {
        log.textContent = "結果：引き分け";
      } else if (player2Value === "1") {
        log.textContent = "結果：player1の勝ち";
      } else if (player2Value === "2") {
        log.textContent = "結果：player1の負け";
      }
      break;
    }
    case "1": {
      if (player2Value === "0") {
        log.textContent = "結果：player1の負け";
      } else if (player2Value === "1") {
        log.textContent = "結果：引き分け";
      } else if (player2Value === "2") {
        log.textContent = "結果：player1の勝ち";
      }
      break;
    }
    case "2": {
      if (player2Value === "0") {
        log.textContent = "結果：player1の勝ち";
      } else if (player2Value === "1") {
        log.textContent = "結果：player1の負け";
      } else if (player2Value === "2") {
        log.textContent = "結果：引き分け";
      }
      break;
    }
  }
  turn = 0;
  player.textContent = "player1";
  player1Hand.textContent = "player1:";
  player2Hand.textContent = "player2:";
});
