// // normal
// const setBtn = () => {
//   const randomNums = Math.floor(Math.random() * 10);

//   if (randomNums < 5) {
//     alert("ぺっぺけぺー");
//   } else {
//     alert("斎藤さんだぞ？");
//   }
// };

// // チャレンジ: 三項演算子
// const setBtn = () => {
//   const randomNums = Math.floor(Math.random() * 10);
//   const anser1 = "斎藤さんだぞ？";
//   const anser2 = "ぺっぺけぺー";

// //   console.log(randomNums);
//   const result = randomNums < 5 ? anser2 : anser1;
//   alert(result);
// };

// 追加チャレンジ: confirmの真偽値で値の出し分け
// OK=>同じ言葉　cancel=>反対の言葉をアラート表示する
const anser1 = "斎藤さんだぞ？";
const anser2 = "ぺっぺけぺー";

const setBtn = () => {
  const randomNums = Math.floor(Math.random() * 10);

  if (randomNums < 5) {
    const result = window.confirm(anser1);
    if (result) {
      alert(anser1);
    } else {
      alert(anser2);
    }
  } else {
    const result = window.confirm(anser2);
    if (result) {
      alert(anser2);
    } else {
      alert(anser1);
    }
  }
};
