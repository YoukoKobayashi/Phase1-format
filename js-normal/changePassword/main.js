// const Form = document.getElementsByTagName("form");
// const nowPassword = document.getElementById("nowPassword");

// const setPassword = document.getElementById("setPassword");
// let passwordValue = "aaaaa";
// nowPassword.textContent = `現在のパスワードは${passwordValue}です`;

// setPassword.addEventListener("click", () => {
//   const confirmPassword = document.getElementById("confirmPassword").value;
//   const newPassword = document.getElementById("newPassword").value;

//   if (passwordValue === confirmPassword) {
//     if (passwordValue !== newPassword) {
//       //if (8 <= newPassword.length) {
//       // let result = newPassword.match(
//       //     /^\d{3} -?\d{4}$/g
//       // );
//       //if (!result) {
//       // const check = /(.)\1/;
//       // let result = check.test(newPassword);
//       //if (!result) {
//       const research = /abc/g;
//       let result = newPassword.search(research);
//       if (result) {
//         passwordValue = newPassword;
//         passwordValue.textContent = passwordValue;
//         nowPassword.textContent = `現在のパスワードは${passwordValue}です`;
//         alert(`新しいパスワードは${newPassword}です`);
//       } else {
//         alert(
//           //"パスワードは8文字以上にしてください"
//           // "xxx-yyyy形式にしてください"
//           //'同じ文字を連続しないでください'
//           "abcを連続で並べて使用しないでください"
//         );
//       }
//     } else {
//       alert("同じパスワードは使えません");
//     }
//   } else {
//     alert("古いパスワードが間違っています");
//   }
// });

// htmlの各要素（の値）を変数に格納する
let passwordValue = 'aaaaa';
const nowPassword = document.getElementById('nowPassword');
const setPassword = document.getElementById('setPassword');

// フローを考える = 条件分岐する
// 予め現在のパスワードを表示する
nowPassword.textContent = `現在のパスワードは${passwordValue}です`
// 変更ボタンをクリックした時
setPasswordBtn.addEventListener('click',() =>{
	const confirmPassword = document.getElementById('confirmPassword').value;
	const newPassword = document.getElementById('newPassword').value;
	// 1 現在のパスワードが正しく入力されていたら
  if(confirmPassword === passwordValue){
      // 2 新しいパスワードが現在のパスワードと異なるものであれば
      if(confirmPassword !== newPassword){
        // // +3 8文字以上あれば----------
        // if(newPassword.length >= 8){
        //   passwordValue = newPassword
        //   nowPassword.textContent = `現在のパスワードは${passwordValue}です` 
        //   alert(`新しいパスワードは${passwordValue}です`) 
        // } else {
        //   alert('パスワードは8文字以上にしてください')
        // } //---ここまで+3

        // // +4 ###-####の形式であること-----------
        // let result = newPassword.match(/^\d{3}-?\d{4}$/g);
        // if(!result){
        //   alert('xxx-yyyyの形式で入力してください');
        // } else {
        //   passwordValue = newPassword;
        //   nowPassword.textContent = `現在のパスワードは${passwordValue}です`
        //   alert(`現在のパスワードは${passwordValue}です`);          
        // } //---ここまで+4

        // // +5 同じ文字を連続しないこと-------------
        // const checkSerial = /(.)\1/;
        // let result2 = checkSerial.test(newPassword);
        // if(!result2){
        //   passwordValue = newPassword;
        //   nowPassword.textContent = `現在のパスワードは${passwordValue}です`
        //   alert(`現在のパスワードは${passwordValue}です`);          
        // } else {
        //   alert('同じ文字を連続で使用することはできません');
        // } //---ここまで+5

        // // +6 abc連続で並んでいるものは不可-----------ß
        // const research = /abc/g;
        // let result3 = newPassword.search(research);
        // if(result3 < 0){
        //   passwordValue = newPassword;
        //   nowPassword.textContent = `現在のパスワードは${passwordValue}です`
        //   alert(`現在のパスワードは${passwordValue}です`);          
        // } else {
        //   alert('「abc」を含むものは使えません');
        // } //---ここまで+6

        // 2 - normal ver
        passwordValue = newPassword
        nowPassword.textContent = `現在のパスワードは${passwordValue}です` 
        alert(`新しいパスワードは${passwordValue}です`) 

    } else {
      // 2 - normal ver
      // 2 新しいパスワードが現在のパスワードと同じものだったら、変更できない→アラートを出す
      alert('同じパスワードは使えません');
    }
  // 1 現在のパスワードが正しく入力されていなかったら、変更できない
  } else {
    alert('古いパスワードが間違っています')
  }
});






