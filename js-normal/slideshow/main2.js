// challenge's refactoring
// 連想配列：オブジェクトと配列の組み合わせ
const data = [
  { img: "./img/slide1.png", text: "春へ" },
  { img: "./img/slide2.png", text: "夏へ" },
  { img: "./img/slide3.png", text: "秋へ" },
  { img: "./img/slide4.png", text: "冬へ" },
];

skipBtn.addEventListener("click", () => {
  imgNum = document.getElementById("seasonNum").value;
  imgNum = parseInt(imgNum);  // imgNumはoptionのvalue（文字列）なので、数値型に変換する
  setViewImg(imgNum);
});

const setViewImg = (num) => {
  const pushBtn = document.getElementById("pushBtn");
  const viewImg = document.getElementById("viewImg");
  viewImg.setAttribute("src", data[num].img);
  pushBtn.textContent = data[num].text;
} 

window.onload = () => {
  setViewImg(0);
}