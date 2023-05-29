// // const setBtn = function () {
// //     const rndm = Math.floor(Math.random() * 10);

// //     if (rndm < 5) {
// //         alert("ぺっぺけぺー");
// //     } else {
// //         alert("斎藤さんだぞ？");
// //     }
// // };

// challenge__三項演算子
// const setBtn = function () {
//     const rndm = Math.floor(Math.random() * 10);
//     const ans1 = "斎藤さんだぞ？";
//     const ans2 = "ぺっぺけぺー";

//     const result = rndm < 5 ? ans2 : ans1;
//     alert(result);
// };

// add__challenge__confirmの真偽値で値の出し分け
const ans1 = "斎藤さんだぞ？";
const ans2 = "ぺっぺけぺー";

const setBtn = function () {
    const rndm = Math.floor(Math.random() * 10);

    if (rndm < 5) {
        const result = window.confirm(ans1);
        if (result) {
            alert(ans1);
        } else {
            alert(ans2);
        }
    } else {
        const result = window.confirm(ans2);
        if (result) {
            alert(ans2);
        } else {
            alert(ans1);
        }
    }
};
