// 暇だったので書き換えてみました。
// ここまでやらなくてもいいですが、参考にしてください。
// randomsには数字だという情報がなくなってしまうのでrandomNumsの方がいいと思います。
// Message Nishikawa

const panel = document.getElementById("panel");
const nextPlayerGuide = document.getElementById("nextPlayer");

let players;
let nowPlayerIndex;
let cardTypeNum;
const initGame = () => {
  players = [
    {
      point: 0,
      name: "player1",
      selectedCards: [],
      pointElement: document.getElementById("player1Point"),
    },
    {
      point: 0,
      name: "player2",
      selectedCards: [],
      pointElement: document.getElementById("player2Point"),
    },
  ];
  players.forEach((user) => {
    user.pointElement.textContent = `${user.name}:${user.point}`;
  });
  nowPlayerIndex = 0;
  nextPlayerGuide.textContent = `次は${players[0].name}さんです`;
  cardTypeNum = 4;
  const cards = createCards();
  showCards(cards);
};
const createCards = () => {
  const randomNums = createRandomNumbers(cardTypeNum);
  const cards = randomNums.map((number) => {
    const card = {
      element: document.createElement("div"),
      number,
      open: () => {
        // card.element.className = "card none_event"; // none_event は何のためについているクラス？
        card.element.className = "card"; // none_event は何のためについているクラス？
        card.element.textContent = number;
      },
      back: () => {
        card.element.className = "card back";
        card.element.textContent = "";
      },
      finish: () => {
        // card.element.className = "card finish none_event"; // none_event は何のためについているクラス？
        card.element.className = "card finish"; // none_event は何のためについているクラス？
      },
    };
    card.element.addEventListener("click", () => cardElementClick(card));

    return card;
  });

  return cards;
};
const createRandomNumbers = (cardTypeNum) => {
  const randomNums = [];
  let i = randomNums.length;
  while (i < cardTypeNum * 2) {
    // let n = Math.floor(Math.random() * cardTypeNum) + 1; // cardTypeNumではなく13？
    let n = Math.floor(Math.random() * 13) + 1; // cardTypeNumではなく13？
    if (randomNums.includes(n) === false) {
      randomNums.push(n);
      randomNums.push(n);
    }
    i = randomNums.length;
  }
  for (let l = randomNums.length; l > 1; l--) {
    let k = Math.floor(Math.random() * l);
    [randomNums[k], randomNums[l - 1]] = [randomNums[l - 1], randomNums[k]];
  }
  return randomNums;
};
const cardElementClick = (card) => {
  const player = getPlayer();
  player.selectedCards.push(card);
  card.open();
  // panel.className = "none_event"; // none_event は何のためについているクラス？
  setTimeout(() => {
    if (player.selectedCards.length === 2) {
      const isMatchNumber =
        player.selectedCards[0].number === player.selectedCards[1].number;
      if (isMatchNumber) {
        player.selectedCards.forEach((selectedCard) => {
          selectedCard.finish();
        });
        player.point++;
        player.pointElement.textContent = `${player.name}:${player.point}`;
        victoryJudgement();
      } else {
        player.selectedCards.forEach((selectedCard) => {
          selectedCard.back();
        });
        changePlayer();
      }
      player.selectedCards = [];
    }
    // panel.className = ""; // panel のクラスを none_event から"" にするのはなぜ？
  }, 500);
};
const getPlayer = () => {
  return players[nowPlayerIndex];
};
const victoryJudgement = () => {
  if (
    Array.from(panel.children).every((ele) => {
      return Array.from(ele.classList).includes("finish");
    })
  ) {
    setTimeout(() => {
      // alert(
      //   `${players[0].name}:${players[0].point},${players[1].name}:${players[1].point}`
      // );
      alert("終了です"); // カリキュラムどおり
    }, 1);
  }
};
const changePlayer = () => {
  nowPlayerIndex = (nowPlayerIndex + 1) % 2;
  nextPlayerGuide.textContent = `次は${players[nowPlayerIndex].name}さんです`;
};
const showCards = (cards) => {
  cards.forEach((card) => {
    card.back();
    panel.appendChild(card.element);
  });
};

initGame();
