const randomNums = [];
let i = randomNums.length;
while (i < 8) {
  let n = Math.floor(Math.random() * 13) + 1;
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
// console.log(randomNums); // 視覚化して確認

const panel = document.getElementById("panel");
const nextPlayerGuide = document.getElementById("nextPlayer");
const player1Point = document.getElementById("player1Point");
const player2Point = document.getElementById("player2Point");
let selectedCards = [];
let selectedCardNumbers = []; //cardのうち数値のみ格納するための配列を用意
let player1NumberOfTimes = 0;
let player2NumberOfTimes = 0;
const players = ["Player1", "Player2"];
nextPlayerGuide.textContent = `次は${players[0]}の番です`;
player1Point.textContent = `${players[0]}:${player1NumberOfTimes}`;
player2Point.textContent = `${players[1]}:${player2NumberOfTimes}`;

for (let n = 0; n < randomNums.length; n++) {
  const card = document.createElement("div");
  card.setAttribute("class", "card back");
  card.addEventListener("click", () => {
    // removeAttributeではすべてのclassがremoveされるので、className=''であらためて指定する
    card.className = "card";
    card.textContent = randomNums[n]; //-s:複数であることが推測される=変数に簡潔に意味を持たせることが肝心
    selectedCards.push(card);
    selectedCardNumbers.push(randomNums[n]); //cardのうち数値のみ格納

    let nowPlayer = nextPlayerGuide.textContent.slice(2, 9);

    setTimeout(() => {
      if (selectedCards.length === 2) {
        if (selectedCardNumbers[0] === selectedCardNumbers[1]) {
          selectedCards[0].className = "card finish";
          selectedCards[1].className = "card finish";
          //challenge
          nowPlayer === players[0]
            ? (nowPlayer = players[0])
            : (nowPlayer = players[1]);
          nowPlayer === players[0]
            ? (player1NumberOfTimes += 1)
            : (player2NumberOfTimes += 1);
        } else {
          //console.log("違う");  挙動の確認
          selectedCards[0].className = "card back"; // selectedCards
          selectedCards[1].className = "card back";
          selectedCards[0].textContent = "";
          selectedCards[1].textContent = "";
          //challenge
          nowPlayer === players[0]
            ? (nowPlayer = players[1])
            : (nowPlayer = players[0]);
        }
        selectedCards = [];
        selectedCardNumbers = [];
        nextPlayerGuide.textContent = `次は${nowPlayer}の番です`;
        player1Point.textContent = `Player1:${player1NumberOfTimes}`;
        player2Point.textContent = `Player2:${player2NumberOfTimes}`;
        if (player1NumberOfTimes + player2NumberOfTimes === 4) {
          alert("終了です");
        }
      }
    }, 500);
  });
  panel.appendChild(card);
}
