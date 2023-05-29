const data = [
  { img: "./img/slide1.png", text: "春へ" },
  { img: "./img/slide2.png", text: "夏へ" },
  { img: "./img/slide3.png", text: "秋へ" },
  { img: "./img/slide4.png", text: "冬へ" },
];

const pushBtn =
  document.getElementById("pushBtn");
const viewImg =
  document.getElementById("viewImg");

let imgNum = 0;
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
const skipBtn =
  document.getElementById("skipBtn");
//const seasonNum =
//  document.getElementById("seasonNum");

skipBtn.addEventListener("click", () => {
  imgNum =
      document.getElementById(
          "seasonNum"
      ).value;
  imgNum = parseInt(imgNum);
  viewImg.setAttribute("src", data[imgNum].img);
  pushBtn.textContent = data[imgNum].text;
});

window.onload = () => {
  pushBtn.textContent = data[0].text;
  viewImg.setAttribute("src", data[0].img);
};
