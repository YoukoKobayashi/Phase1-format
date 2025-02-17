const addBtn = document.getElementsByClassName("add-btn");

// addBtn(add-btn)は1つしかないが、classのためインデックス[0]を指定する
addBtn[0].addEventListener("click", () => {
  addListBtn();
  deleteListBtn();
});

const addListBtn = () => {
  const addText = document.getElementById("add-area");
  // const listText = document.createTextNode(addText.value);createTextNodeを使わなくても値の直接代入でできる

	// challenge_add
  if (addText.value === "") {
    alert("空欄です");
    return;
  }
  const addList = document.createElement("li");
	// addList.textContent = listText; できない[objecttext]と表示されてしまう=ノードだから
  // addList.innerHTML = listText;　（同上）
	// addList.appendChild(listText);	//変数listTextはノードで、（ここの値は文字列）。
	addList.textContent = addText.value;	// 変数.valueを直接代入でできる
	
  const finishBtn = document.createElement("button");
  finishBtn.classList.add("finishBtn");
	finishBtn.textContent = "完了";
  // finishBtn.innerHTML = "完了";

  addList.appendChild(finishBtn); // ここで削除機能を追加し、完了の際は子要素として一括削除したほうが簡単

  const lists = document.getElementById("todo");
  lists.appendChild(addList);	// addList=listText+finishBtn
  // challenge_add
  addText.value = "";
};

const deleteListBtn = () => {
  const finishBtn = document.getElementsByClassName("finishBtn");
  for (let n = 0; n < finishBtn.length; n++) {
    finishBtn[n].addEventListener("click", function () {
      // finishBtn[n].parentNode;以下すべてのリストが削除される
      // アロー関数で書くとthisの内容がundifinedになる
      // ここはアロー関数を無名関数に変更したらOK!
      const addList = this.parentNode;	// クリックした完了ボタンの親要素からすべてを変数addListに格納
      addList.remove();
    });
  }
};
