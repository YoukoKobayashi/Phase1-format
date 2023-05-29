const setBtn = document.getElementById("setBtn");
const resetBtn =
    document.getElementById("resetBtn");
let showImg = document.getElementById("showImg");

setBtn.addEventListener("click", () => {
    showType();
});

const showType = () => {
    showImg.innerHTML = "";
    const rndmNum = Math.floor(
        Math.random() * 10
    );

    const imgType1 = document.createElement(
        "div",
        "p"
    );
    imgType1.innerHTML =
        "<img src='./img/evolution1.png' alt='原人' /><p>原人</p>";
    showImg.appendChild(imgType1);

    if (rndmNum >= 4) {
        const imgType2 = document.createElement(
            "div",
            "p"
        );
        imgType2.innerHTML =
            "<img src='./img/evolution2.png' alt='旧人'  /><p>旧人</p>";
        showImg.appendChild(imgType2);
    }
    if (rndmNum >= 7) {
        const imgType3 = document.createElement(
            "div",
            "p"
        );
        imgType3.innerHTML =
            "<img src='./img/evolution3.png' alt='新人'  /><p>新人</p>";
        showImg.appendChild(imgType3);
    }
    if (rndmNum >= 9) {
        const imgType4 = document.createElement(
            "div",
            "p"
        );
        imgType4.innerHTML =
            "<img src='./img/evolution4.png' alt='現代人'  /><p>現代人</p>";
        showImg.appendChild(imgType4);
    }
};

// mohankaitou
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

resetBtn.addEventListener("click", () => {
    showImg.innerHTML = "";
});
