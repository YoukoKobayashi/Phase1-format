// global --------
const result = document.getElementById("result");
let count = 0;

let players;
const diceGame = () => {
  players = [
    {
      name: "player1",
      startBtn: document.getElementById("player1Btn"),
      diceImg: document.getElementById("setPlayer1dice"),
      diceNumber: 0,
    },
    {
      name: "player2",
      startBtn: document.getElementById("player2Btn"),
      diceImg: document.getElementById("setPlayer2dice"),
      diceNumber: 0,
    },
  ];
  // 初期化
  const init = () => {
    players.forEach((ele) => {
      ele.diceImg.width = "100px";
      ele.diceImg.height = "100px";
      ele.diceImg.src = "./img/saikoro1.png";
      ele.startBtn.disabled = false;
    });
    result.textContent = "???";
    count = 0;
  };
  init();

  // playerを取得する //.mapも第2引数indexを渡せる
  players.forEach((player, index) => {
    player.startBtn.addEventListener("click", () => {
      rollDice(index);
    });
  });

  // イベントの順序: 乱数発生&ストップ→勝敗判定→初期化
  // fn:1 0.1秒ごとに乱数発生、3秒後に停止しimg確定
  const rollDice = (index) => {
    players[index].startBtn.disabled = true;
    let randomNumbers = [];
    let timer = setInterval(() => {
      let randomNum = Math.floor(Math.random() * 6 + 1);
      randomNumbers.push(randomNum);
      players[index].diceImg.src = `./img/saikoro${randomNum}.png`;
      players[index].diceNumber = randomNumbers.slice(-1);
    }, 100);
    setTimeout(() => {
      clearInterval(timer);
      count += 1;
      if (count !== 2) {
        return;
      }
      victoryJudge();
    }, 3000);
  };

  // fn:2 勝敗判定&初期化
  const victoryJudge = () => {
    const judge1 = players[0].diceNumber;
    const judge2 = players[1].diceNumber;
    if (judge1 > judge2) {
      result.textContent = `${players[0].name}の勝ち`;
    } else if (judge1 < judge2) {
      result.textContent = `${players[1].name}の勝ち`;
    } else {
      result.textContent = "引き分け";
    }
    setTimeout(() => {
      init();
    }, 2000);
  };
};
diceGame();
