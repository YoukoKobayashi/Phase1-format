const addBtn =
    document.getElementsByClassName("add-btn");

addBtn[0].addEventListener("click", function () {
    addListBtn();
    delListBtn();
});

const addListBtn = function () {
    const addText =
        document.getElementById("add-area");
    const listText = document.createTextNode(
        addText.value
    );
    // challenge_add
    if (addText.value === "") {
        alert("空欄です");
        return;
    }
    const addLi = document.createElement("li");
    addLi.appendChild(listText);

    const finishBtn =
        document.createElement("button");
    finishBtn.classList.add("finishBtn");
    finishBtn.innerHTML = "完了";

    addLi.appendChild(finishBtn);
    // ここで削除機能を追加するという方法のほうが簡単

    const lists = document.getElementById("todo");
    lists.appendChild(addLi);
    // challenge_add
    addText.value = "";
};

const delListBtn = function () {
    const finishBtn =
        document.getElementsByClassName(
            "finishBtn"
        );
    for (let n = 0; n < finishBtn.length; n++) {
        finishBtn[n].addEventListener(
            "click",
            function () {
                // finishBtn[n].parentNode;以下すべてのリストが削除される
                // アロー関数で書くとthisの内容がundifinedになる
                // すべてのアロー関数を無名関数に変更したらOK!
                const addLi = this.parentNode;
                addLi.remove();
            }
        );
    }
};
