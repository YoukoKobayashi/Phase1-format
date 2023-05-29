// const startBtn =
//     document.getElementById("diceBtn");
// const body = document.querySelector("body");
// const dice = document.createElement("img");
// dice.style.width = "100px";
// dice.style.height = "100px";

// let diceNum = "./img/saikoro1.png";
// dice.setAttribute("src", diceNum);
// body.appendChild(dice);

// startBtn.addEventListener("click", (event) => {
//     // 0.1秒間隔で乱数発生実行
//     let timer = setInterval("rndmNum()", 100);
//     // 3秒後に関数timerを時間切れで中止させる
//     // setTimeout(function () {
//     //     clearInterval(timer), 3000;
//     // });
//     setTimeout(() => {
//         clearInterval(timer);
//     }, 3000);
// });

// const rndmNum = function () {
//     // 2つの値(6-1)間の整数を取る
//     let rndm = Math.floor(Math.random() * 6 + 1);
//     diceNum = `./img/saikoro${rndm}.png`;
//     dice.setAttribute("src", diceNum);
// };

const player1Btn =
    document.getElementById("player1Btn");
const player2Btn =
    document.getElementById("player2Btn");
const body = document.querySelector("body");
const dice1 = document.getElementById(
    "setPlayer1dice"
);
dice1.style.width = "100px";
dice1.style.height = "100px";
const dice2 = document.getElementById(
    "setPlayer2dice"
);
dice2.style.width = "100px";
dice2.style.height = "100px";

dice1.setAttribute("src", "./img/saikoro1.png");
dice2.setAttribute("src", "./img/saikoro1.png");

let result = document.getElementById("result");
result.innerHTML = "???";

player1Btn.addEventListener("click", (event) => {
    // 0.1秒間隔で乱数発生実行
    let timer = setInterval("rndmNum1()", 100);
    // 3秒後に関数timerを時間切れで中止させる
    setTimeout(() => {
        clearInterval(timer);
    }, 3000);
});

player2Btn.addEventListener("click", (event) => {
    // 0.1秒間隔で乱数発生実行
    let timer = setInterval("rndmNum2()", 100);
    // 3秒後に関数timerを時間切れで中止させる
    setTimeout(() => {
        clearInterval(timer);
    }, 3000);
    const repaire = function () {
        // player1,2の比較
        let num1 = dice1.getAttributeNames();
        console.log(num1);
        let num2 = dice2.getAttributeNames();
        console.log(num2);
        if (num1 > num2) {
            result.innerHTML = "player1の勝利";
        } else if (num1 < num2) {
            result.innerHTML = "player2の勝利";
        } else {
            result.innerHTML = "引き分け";
        }
    };
});

function rndmNum1() {
    // 2つの値(6-1)間の整数を取る
    let rndm1 = Math.floor(Math.random() * 6 + 1);
    diceNum1 = `./img/saikoro${rndm1}.png`;
    dice1.setAttribute("src", diceNum1);
}
function rndmNum2() {
    // 2つの値(6-1)間の整数を取る
    let rndm2 = Math.floor(Math.random() * 6 + 1);
    diceNum2 = `./img/saikoro${rndm2}.png`;
    dice2.setAttribute("src", diceNum2);
}
