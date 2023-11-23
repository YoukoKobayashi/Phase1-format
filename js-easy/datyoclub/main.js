// チャレンジ含む
// 俺がやる
let cntPerson = 0;
const cntUp = () => {
  cntPerson += 1;
};

// 俺はやらない
const cntDown = () => {
  cntPerson -= 1;
  if (cntPerson < 0) {
    alert("もう誰もいない");
    cntPerson = 0;
  }
};

// どうぞどうぞ＊n / 誰もいない
const reply = () => {
  const message1 = "どうぞどうぞ";
  const message2 = "誰もいない．．．";
  let message;
  cntPerson > 0 ? (message = message1.repeat(cntPerson)) : (message = message2);
  alert(message);
  // cntPerson > 0 ? alert(message1.repeat(cntPerson)): alert(message2);
  cntPerson = 0;
};

// ES6の書き方
// let cntPerson = 0
// const reply = function () {
//     const action = Array(1 * cntPerson + 1).join('どうぞどうぞ');
//     alert(action);
//     cntPerson = 0;
// }
