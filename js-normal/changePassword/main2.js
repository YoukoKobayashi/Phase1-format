const Form = document.getElementsByTagName("form");
const nowPassword = document.getElementById("nowPassword"); //表示中
let passwordValue = "aaaaa";
const setPasswordBtn = document.getElementById("setPasswordBtn");
const confirmPassword = document.getElementById("confirmPassword"); //現在
const setPassword = document.getElementById("newPassword"); //新しい
// 予め現在のパスワードを表示する
nowPassword.textContent = `現在のパスワードは${passwordValue}です`;
let message;

const showMessage = () => {
  passwordValue = setPassword.value;
  nowPassword.textContent = `現在のパスワードは${passwordValue}です`;
  message = `新しいパスワードは${passwordValue}です`;
  alert(message);
};

const reset = () => {
  confirmPassword.value = "";
  setPassword.value = "";
  console.log("test");
};

// 変更ボタンをクリックした時のフローを考える = 条件分岐する
setPasswordBtn.addEventListener("click", () => {
  // 1 現在のパスワードが正しく入力されていたら
  if (confirmPassword.value === passwordValue) {
    // 2 新しいパスワードが現在のパスワードと異なるものであれば
    if (confirmPassword.value !== setPassword.value) {
      // +3 8文字以上あれば----------
      if (setPassword.value.length >= 8) {
        showMessage();
      } else {
        message = "パスワードは8文字以上にしてください";
        alert(message);
      } //---ここまで+3

      // // // +4 ###-####の形式であること-----------
      // let result = setPassword.match(/^\d{3}-?\d{4}$/g);
      // if (!result) {
      //   message = "xxx-yyyyの形式で入力してください";
      //   alert(message);
      // } else {
      //   showMessage();
      // } //---ここまで+4

      // // // +5 同じ文字を連続しないこと-------------
      // const checkSerial = /(.)\1/;
      // let result2 = checkSerial.test(setPassword);
      // if (!result2) {
      //   showMessage();
      // } else {
      //   message = "同じ文字を連続で使用することはできません";
      //   alert(message);
      // } //---ここまで+5

      // // // +6 abc連続で並んでいるものは不可-----------ß
      // const research = /abc/g;
      // let result3 = setPassword.search(research);
      // if (result3 < 0) {
      //   showMessage();
      // } else {
      //   message = "「abc」を含むものは使えません";
      //   alert(message);
      // } //---ここまで+6

      // 2 - normal ver
      // passwordValue = setPassword;
      // nowPassword.textContent = `現在のパスワードは${passwordValue}です`;
      // message = `新しいパスワードは${passwordValue}です`;
      // alert(message);
    } else {
      // 2 - normal ver 新しいパスワードが現在のパスワードと同じものだったら、変更できない
      message = "同じパスワードは使えません";
      alert(message);
    }
    // 1 現在のパスワードが正しく入力されていなかったら、変更できない
  } else {
    message = "古いパスワードが間違っています";
    alert(message);
  }
  reset();
});
