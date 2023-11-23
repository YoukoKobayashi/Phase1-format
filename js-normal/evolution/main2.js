const setBtn = document.getElementById("setBtn");
const resetBtn = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");

setBtn.addEventListener("click", () => {
  showType();
});
resetBtn.addEventListener("click", () => {
  reset();
});

const showType = () => {
  reset();
  // 関数にとる引数のための値の組み合わせ（オブジェクト）を変数に用意する
  const humanRace = {
    genjin: { src: "./img/evolution1.png", alt: "原人" },
    kyuujin: { src: "./img/evolution2.png", alt: "旧人" },
    shinjin: { src: "./img/evolution3.png", alt: "新人" },
    gendaijin: { src: "./img/evolution4.png", alt: "現代人" },
  };
  viewImg(humanRace.genjin); // genjinは必ず表示される:0-3
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
const reset = () => {
  showImg.innerHTML = "";
};
