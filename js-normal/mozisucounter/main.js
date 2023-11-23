// keyup_test
// const input = document.querySelector("input");
// input.addEventListener("keyup", (event) => {
//     console.log("クリックされたよ");
// });

// flow: 最大文字数を決める　=> 入力文字数を取得(=keyup) => 差を求める => 表示 => reset
let strLength = 400;//max
const writingArea = document.getElementById("sampleForm");// 文字入力
const showRemainTextCount = document.getElementById("textCounter");// 残り文字数を表示
const resetBtn = document.getElementById("resetBtn");// textareaの文字をクリア&残り文字数を400
// challenge-------先頭/末尾から文字削除
const headDelete = document.getElementById("iniDel");
const endDelete = document.getElementById("endDel");
let characters; //  str格納用変数（配列）

// writingArea.addEventListener("keyup", () => {
//     strLength -= 1;
//     showRemainTextCount.textContent = `あと${strLength}文字`;
// });

writingArea.addEventListener("keyup", () => {
  showRemainTextCount.textContent = `あと${
    strLength - writingArea.value.length
  }文字`;
  characters = writingArea.value;
});

resetBtn.addEventListener("click", () => {
  //writingArea.textContent = "";
  characters = "";
  showRemainTextCount.textContent = "あと400文字";
  strLength = 400;
});

// head:slice(1)
headDelete.addEventListener("click", () => {
  characters = characters.slice(1);
  writingArea.value = characters;
  showRemainTextCount.textContent = `あと${
    strLength - writingArea.value.length
  }文字`;
});

// end:slice(0,-1) =>表示の開始位置は0、末尾から1文字を削除
endDelete.addEventListener("click", () => {
  characters = characters.slice(0, -1); 
  writingArea.value = characters;
  showRemainTextCount.textContent = `あと${
    strLength - writingArea.value.length
  }文字`;
});
