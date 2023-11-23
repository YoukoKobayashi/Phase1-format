const addBtn = document.getElementsByClassName("add-btn");

// addBtn(add-btn)は1つしかないが、classのためインデックス[0]を指定する
// 追加ボタンをクリックした際に、生成したBtnの数をArrayLikeに把握できるので、
// 削除ボタンの特定のためにdeleteList()も実行する。
addBtn[0].addEventListener("click", () => {
  addListAndFinishBtn();
  // deleteListTextAndFinishBtn(); //ver.2
});

const addListAndFinishBtn = () => {
  const addText = document.getElementById("add-area");

  // challenge_add
  if (addText.value === "") {
    alert("空欄です");
    return;
  }
  const addList = document.createElement("li");
  // addList.textContent = listText; ListTextはノードだから[objecttext]と表示されてしまう
  addList.textContent = addText.value;

  const finishBtn = document.createElement("button"); // ここで削除機能を追加
  finishBtn.classList.add("finishBtn");
  finishBtn.textContent = "完了";
  // 削除のイベント処理も用意。親要素から子要素を一括削除
  finishBtn.addEventListener("click", () => {
    finishBtn.parentNode.remove();
  });
  addList.appendChild(finishBtn); 

  const todoLists = document.getElementById("todo");
  todoLists.appendChild(addList); // addList=text+finishBtn
  addText.value = "";
};

// わざわざ再度、要素の取得＆削除処理を記載する必要はない。
// const deleteListTextAndFinishBtn = (n) => {
//   const finishBtns = document.getElementsByClassName("finishBtn");
//   for (let n = 0; n < finishBtns.length; n++) {
//     // アロー関数で書くとthisの内容がundifinedになるので無名関数にする
//     // アロー関数(const)では、ガベージコレクションの対象とならずconstがデータを保持する（コード実行前に最小単位に分解するレキシカルスコープの性質）???
//     //ver.3
//     // finishBtns[n].addEventListener("click", function () { 
//     //   this.parentNode.remove();
//     // });
//     //ver.2 
//     finishBtns[n].addEventListener("click", () => {
//       finishBtns[n].parentNode.style.display = "none";
//     });
//   }
// };

