// 連想配列：オブジェクトと配列の組み合わせ
const data = [
  { img: "./img/slide1.png", text: "春へ" },
  { img: "./img/slide2.png", text: "夏へ" },
  { img: "./img/slide3.png", text: "秋へ" },
  { img: "./img/slide4.png", text: "冬へ" },
];

const pushBtn = document.getElementById("pushBtn");
const viewImg = document.getElementById("viewImg");

let imgNum = 0; // 表示する文字と画像の配列のインデックスを格納する変数
pushBtn.addEventListener("click", () => {
  if (imgNum === 3) {
    imgNum = 0;
  } else {
    imgNum += 1;
  }
  pushBtn.textContent = data[imgNum].text;
  viewImg.setAttribute("src", data[imgNum].img);
});

// challenge
const skipBtn = document.getElementById("skipBtn");
//const seasonNum = document.getElementById("seasonNum");

skipBtn.addEventListener("click", () => {
  imgNum = document.getElementById("seasonNum").value;
  imgNum = parseInt(imgNum);    // imgNumはoptionのvalue（文字列）なので、数値型に変換する
  viewImg.setAttribute("src", data[imgNum].img);
  pushBtn.textContent = data[imgNum].text;
  setViewImg(imgNum);
});

window.onload = () => {
  pushBtn.textContent = data[0].text;
  viewImg.setAttribute("src", data[0].img);
};

