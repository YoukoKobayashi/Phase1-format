// let i = 0;
// const cntUp = function () {
//     i += 1;
//     return i;
// };

// let j = 0;
// const cntDown = function () {
//     j -= 1;
//     return j;
// };

// const reply = function () {
//     const cnt = cntUp(i) + cntDown(j);
//     const m1 = "どうぞどうぞ";
//     const m2 = "誰もいない．．．";
//     cnt > 0 ? (msg = m1.repeat(cnt)) : (msg = m2);
//     alert(msg);
//     i = 0;
//     j = 0;
// };

// ES5の書き方
// let cntPerson = 0
// const reply = function () {
//     const action = Array(1 * cntPerson + 1).join('どうぞどうぞ');
//     alert(action);
//     cntPerson = 0;
// }

// 解答?
let cntPerson = 0;
const cntUp = function () {
    cntPerson += 1;
    return cntPerson;
};
const cntDown = function () {
    cntPerson -= 1;
    if (cntPerson < 0) {
        alert("もう誰もいない、、、");
        cntPerson = 0;
    }
};

const reply = function () {
    const msg1 = "どうぞどうぞ";
    const msg2 = "もう誰もいない、、、";

    cntPerson > 0
        ? alert(msg1.repeat(cntPerson))
        : alert(msg2);
    cntPerson = 0;
};
