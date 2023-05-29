// // // // // // // // HTMLの特定の`<h1>`タグの中身のテキストを変える
// // // // // // // const title = document.getElementById("title");
// // // // // // // console.log(
// // // // // // //     `<h1>タグの中身のテキストは${title.textContent}です。`
// // // // // // // );

// // // // // // // const list = document.querySelector(".list");
// // // // // // // console.log(
// // // // // // //     `<ul>タグの2つ目の子要素のテキストは${list.children[1].textContent}です。`
// // // // // // // );

// // // // // // // // HTMLの特定の`<ul`タグの中に`<li>`タグを追加する
// // // // // // // const newItem = document.createElement("li");
// // // // // // // newItem.textContent = "もも";
// // // // // // // list.appendChild(newItem);

// // // // // // // // HTMLの特定の`<button>`タグがクリックされたときに確認アラートを表示する
// // // // // // // const button = document.getElementById("button");
// // // // // // // button.addEventListener("click", (event) => {
// // // // // // //     confirm("削除してよろしいですか？"); // 実際は削除しない
// // // // // // // });

// // // // // // // アラート表示
// // // // // // window.alert(
// // // // // //     "これはwindow.alert()で表示したアラートです"
// // // // // // );

// // // // // // // window. に限り、省略することができる
// // // // // // alert("これはalert()で表示したアラートです");

// // // // // // // documentプロパティにアクセスする例
// // // // // // console.log(document.doctype); //=> <!doctype html>
// // // // // // console.log(document.title); //=> DOM API

// // // // // // <p id="intro">...</p>要素を取得
// // // // // const intro = document.getElementById("intro");
// // // // // console.log(intro.textContent);

// // // // // // <ul class="list">...</ul>要素を取得
// // // // // const list = document.querySelector(".list");
// // // // // console.log(list.children.length);

// // // // // // <ul class="list">...</ul>の中にある<li>要素を取得
// // // // // const items =
// // // // //     document.querySelectorAll(".list li");
// // // // // // itemsは配列（のようなもの）なので、for eachで繰り返しができる
// // // // // items.forEach((item) => {
// // // // //     console.log(item.textContent); // アイテム1，アイテム2、アイテム3が順番に表示される
// // // // // });

// // // // const elem = document.querySelector(".list");

// // // // console.log(elem.textContent); // =>アイテム1、・・・
// // // // console.log(elem.innerHTML); // =><li>アイテム1</li>・・・
// // // // for (let i = 0; i < elem.children.length; i++) {
// // // //     console.log(elem.children[i]); // <li>アイテム1</li>・・・が順番に表示される
// // // // }
// // // // console.log(elem.firstElementChild);
// // // // console.log(elem.lastElementChild);
// // // // console.log(elem.parentElement); //  <body>...</body>

// // // // const elem2 = document.querySelector("img");
// // // // console.log(elem2.getAttribute("src")); // https://placehold.it/200x200
// // // // elem2.setAttribute(
// // // //     "src",
// // // //     "https://placehold.it/400x200"
// // // // ); // 画像が変わる

// // // const list = document.querySelector(".list");
// // // const newItem = document.createElement("li");
// // // newItem.textContent = "新しいアイテム";

// // // list.appendChild(newItem);
// // // list.removeChild(list.firstElementChild);

// // const addButton = document.getElementById("add");
// // const removeButton =
// //     document.getElementById("remove");
// // const list = document.querySelector(".list");

// // addButton.addEventListener("click", (event) => {
// //     const newItem = document.createElement("li");
// //     newItem.textContent = "新しいアイテム";
// //     list.appendChild(newItem);
// // });
// // removeButton.addEventListener(
// //     "click",
// //     (event) => {
// //         list.removeChild(list.lastElementChild);
// //     }
// // );

// // fizzbuzz
// for (let i = 1; i <= 20; i++) {
//     if (i >= 15 && i % 15 === 0) {
//         console.log("fizzbuzz");
//     } else if (i >= 3 && i % 3 === 0) {
//         console.log("fizz");
//     } else if (i >= 5 && i % 5 === 0) {
//         console.log("buzz");
//     } else {
//         console.log(i);
//     }
// }

// challenge;
// const renewNum =
//     document.getElementById("renewNum");
// let nxtNum = 0;
// renewNum.innerHTML = nxtNum;

// const renewCountUp = function () {
//     nxtNum += 1;
//     if (nxtNum % 3 === 0 && nxtNum % 5 === 0) {
//         renewNum.innerHTML = "fizzbuzz";
//     } else if (nxtNum >= 3 && nxtNum % 3 === 0) {
//         renewNum.innerHTML = "fizz";
//     } else if (nxtNum >= 5 && nxtNum % 5 === 0) {
//         renewNum.innerHTML = "buzz";
//     } else {
//         renewNum.innerHTML = nxtNum;
//     }
// };

// add__challenge
const renewNum =
    document.getElementById("renewNum");
let nxtNum = 0;
renewNum.innerHTML = nxtNum;

const renewCountUp = function () {
    nxtNum += 1;
    if (nxtNum % 3 === 0 || nxtNum % 5 === 0) {
        alert("まちがっちゃったね？");
        renewNum.innerHTML = 0;
        nxtNum = 0;
    } else {
        renewNum.innerHTML = nxtNum;
    }
};

const fiz = function () {
    if (
        (nxtNum + 1) % 3 === 0 &&
        (nxtNum + 1) % 15 !== 0
    ) {
        renewNum.innerHTML = "fizz";
        nxtNum = nxtNum + 1;
    } else {
        alert("まちがっちゃったね？");
        renewNum.innerHTML = 0;
        nxtNum = 0;
    }
};

const buz = function () {
    if (
        (nxtNum + 1) % 5 === 0 &&
        (nxtNum + 1) % 15 !== 0
    ) {
        renewNum.innerHTML = "buzz";
        nxtNum = nxtNum + 1;
    } else {
        alert("まちがっちゃったね？");
        renewNum.innerHTML = 0;
        nxtNum = 0;
    }
};

const fizbuz = function () {
    if (
        (nxtNum + 1) % 3 === 0 &&
        (nxtNum + 1) % 5 === 0
    ) {
        renewNum.innerHTML = "fizzbuzz";
        nxtNum = nxtNum + 1;
    } else {
        alert("まちがっちゃったね？");
        renewNum.innerHTML = 0;
        nxtNum = 0;
    }
};
