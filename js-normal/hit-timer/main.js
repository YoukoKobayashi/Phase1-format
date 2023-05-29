// const startTimer =
//     document.getElementById("startTimer");
// const confirmTime = document.getElementById(
//     "confirmTime"
// );

// let timer;
// let i = 0;

// confirmTime.addEventListener("click", () => {
//     if (i === 20000) {
//         alert("ジャスト20秒！！お見事です！");
//     } else if (i < 20000) {
//         alert(
//             `まだ${
//                 i / 1000
//             }秒しか経ってない！！最初からやり直してね`
//         );
//     } else {
//         alert(
//             `もう${
//                 i / 1000
//             }秒経過！！最初からやり直してね`
//         );
//     }
//     clearInterval(timer);
//     i = 0;
// });

// startTimer.addEventListener("click", () => {
//     clearInterval(timer);
//     timer = setInterval(() => {
//         countUp();
//     }, 1000);
// });

// const countUp = () => {
//     i += 1000;
//     if (i === 40000) {
//         clearInterval(timer);
//         alert(
//             "タイムオーバー！最初からやり直してね"
//         );
//         i = 0;
//     }
// };

// 模範解答----------------------
// let timer;
// let sec = 0;

// confirmTime.addEventListener("click", () => {
//     if (sec === 20) {
//         alert("ジャスト20秒！！お見事です！");
//     } else if (sec < 20) {
//         alert(
//             `まだ${sec}秒しか経ってない！！最初からやり直してね`
//         );
//     } else {
//         alert(
//             `もう${sec}秒経過！！最初からやり直してね`
//         );
//     }
//     clearInterval(timer);
//     sec = 0;
// });

// startTimer.addEventListener("click", () => {
//     clearInterval(timer);
//     timer = setInterval(() => {
//         countUp();
//     }, 1000);
// });

// const countUp = () => {
//     sec += 1;
//     if (sec === 40) {
//         clearInterval(timer);
//         alert(
//             "タイムオーバー！最初からやり直してね"
//         );
//         sec = 0;
//     }
// };
// 模範解答（ここまで）-------------------------------

// challenge
let timer;

const confirmTime2 = document.getElementById(
    "confirmTime2"
);
const startTimer2 = document.getElementById(
    "startTimer2"
);
//let sec = 0;
let startTime;
let nowTime;
let diffTime;

confirmTime2.addEventListener("click", () => {
    const now_time =
        document.getElementById("now_time");
    nowTime = new Date();
    //sec = (time2 - time1) / 1000;
    if (startTime === undefined) {
        return;
    }
    //if (sec === 20) {
    if (diffTime === 20) {
        //now_time.textContent = `${sec}秒経過です`;
        alert("ジャスト20秒！！お見事です！");
        //} else if (sec < 20) {
    } else if (diffTime < 20) {
        //now_time.textContent = `${sec}秒経過です`;
        alert(
            `まだ${diffTime}秒しか経ってない！！最初からやり直してね`
        );
    } else {
        //now_time.textContent = `${sec}秒経過です`;
        alert(
            `もう${diffTime}秒経過！！最初からやり直してね`
        );
    }
    clearInterval(timer);
    //sec = 0;
});

startTimer2.addEventListener("click", () => {
    startTime = new Date();
    //clearInterval(timer);
    timer = setInterval(() => {
        countUp2();
    }, 1000);
});

const countUp2 = () => {
    //sec += 1;
    let checkTime = new Date();
    diffTime = Math.floor(
        (checkTime.getTime() -
            startTime.getTime()) /
            1000
    );
    if (diffTime === 40) {
        //if (sec === 40) {
        //    clearInterval(timer);
        alert(
            "タイムオーバー！最初からやり直してね"
        );
        //sec = 0;
    }
};
