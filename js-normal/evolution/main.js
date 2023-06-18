const setBtn = document.getElementById("setBtn");
const resetBtn = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");

setBtn.addEventListener("click", () => {
  showType();
});

// normal-code  (ver.2)
// const showType = () => {
//   showImg.innerHTML = "";
//   const rndmNum = Math.floor(Math.random() * 10);

//   const imgType1 = document.createElement("div");
//   imgType1.innerHTML =
//     "<img src='./img/evolution1.png' alt='原人' /><p>原人</p>";
//   showImg.appendChild(imgType1);

//   if (rndmNum >= 4) {
//     const imgType2 = document.createElement("div");
//     imgType2.innerHTML =
//       "<img src='./img/evolution2.png' alt='旧人'  /><p>旧人</p>";
//     showImg.appendChild(imgType2);
//   }
//   if (rndmNum >= 7) {
//     const imgType3 = document.createElement("div");
//     imgType3.innerHTML =
//       "<img src='./img/evolution3.png' alt='新人'  /><p>新人</p>";
//     showImg.appendChild(imgType3);
//   }
//   if (rndmNum >= 9) {
//     const imgType4 = document.createElement("div");
//     imgType4.innerHTML =
//       "<img src='./img/evolution4.png' alt='現代人'  /><p>現代人</p>";
//     showImg.appendChild(imgType4);
//   }
// };
// resetBtn.addEventListener("click", () => {
//   showImg.innerHTML = "";
// });

// 上記処理のリファクタリング (ver.3)
const showType = () => {
  resetInner();
  // 関数にとる引数のための値の組み合わせ（オブジェクト）を変数に用意する
  const humanRace = {
    genjin: { src: "./img/evolution1.png", alt: "原人" },
    kyuujin: { src: "./img/evolution2.png", alt: "旧人" },
    shinjin: { src: "./img/evolution3.png", alt: "新人" },
    gendaijin: { src: "./img/evolution4.png", alt: "現代人" },
  };
  // console.log(humanRace.genjin);
  viewImg(humanRace.genjin);

  const randomNum = Math.floor(Math.random() * 10);
  // console.log(randomNum);
  if (randomNum >= 4) {
    viewImg(humanRace.kyuujin);
  }
  if (randomNum >= 7) {
    viewImg(humanRace.shinjin);
  }
  if (randomNum >= 9) {
    viewImg(humanRace.gendaijin);
  }
};

// 同じ処理を関数にまとめる
// 変数や関数名は、何をするのかわかるように命名する
// 引数には、関数が呼ばれた都度使用される値を入れる.共通部分の中の異なる部分
const viewImg = ({ src, alt }) => {
  const imgwrap = document.createElement("img");
  imgwrap.src = src;
  imgwrap.alt = alt;
  showImg.appendChild(imgwrap);
  const caption = document.createElement("p");
  caption.textContent = alt;
  showImg.appendChild(caption);
};
// imgをクリアする処理
const resetInner = () => {
  showImg.innerHTML = "";
};
resetBtn.addEventListener("click", () => {
  resetInner();
});

// mohankaitou  (ver.1)
// const showType = () => {
//     showImg.innerHTML = "";
//     const rndmNum = Math.floor(
//         Math.random() * 10
//     );

//     const imgType1 = document.createElement("div");
//     const textType1 = document.createElement("p");
//     imgType1.innerHTML =
//         "<img src='./img/evolution1.png' alt='原人' />";
//     textType1.innerHTML = "<p>原人</p>";
//     showImg.appendChild(imgType1);
//     showImg.appendChild(textType1);

//     if (rndmNum >= 4) {
//     const imgType2 =
//         document.createElement("div");
//     const textType2 = document.createElement("p");
//         imgType2.innerHTML =
//             "<img src='./img/evolution2.png' alt=''  />";
//     textType1.innerHTML = "<p>旧人</p>";
//     showImg.appendChild(imgType2);
//     showImg.appendChild(textType2);
//     }
//     if (rndmNum >= 7) {
//     const imgType3 =
//         document.createElement("div");
//     const textType3 = document.createElement("p");
//     imgType3.innerHTML =
//         "<img src='./img/evolution3.png' alt=''  />";
//     textType3.innerHTML = "<p>旧人</p>";
//     showImg.appendChild(imgType3);
//     showImg.appendChild(textType3);
//     if (rndmNum >= 9) {
//     const imgType4 =
//         document.createElement("div");
//     const textType4 = document.createElement("p");
//     imgType4.innerHTML =
//         "<img src='./img/evolution4.png' alt='現代人'  />";
//     textType4.innerHTML = "<p>現代人</p>";
//     showImg.appendChild(imgType4);
//     showImg.appendChild(textType4);
//     }
// };
// resetBtn.addEventListener("click", () => {
//   // showImg.innerHTML = "";
// });
