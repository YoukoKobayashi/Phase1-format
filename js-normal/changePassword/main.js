const Form =
    document.getElementsByTagName("form");
const nowPassword = document.getElementById(
    "nowPassword"
);

const setPassword = document.getElementById(
    "setPassword"
);
let passwordValue = "aaaaa";
nowPassword.textContent = `現在のパスワードは${passwordValue}です`;

setPassword.addEventListener("click", () => {
    const confirmPassword =
        document.getElementById(
            "confirmPassword"
        ).value;
    const newPassword = document.getElementById(
        "newPassword"
    ).value;

    if (passwordValue === confirmPassword) {
        if (passwordValue !== newPassword) {
            //if (8 <= newPassword.length) {
            // let result = newPassword.match(
            //     /^\d{3} -?\d{4}$/g
            // );
            //if (!result) {
            // const check = /(.)\1/;
            // let result = check.test(newPassword);
            //if (!result) {
            const research = /abc/g;
            let result =
                newPassword.search(research);
            if (result) {
                passwordValue = newPassword;
                passwordValue.textContent =
                    passwordValue;
                nowPassword.textContent = `現在のパスワードは${passwordValue}です`;
                alert(
                    `新しいパスワードは${newPassword}です`
                );
            } else {
                alert(
                    //"パスワードは8文字以上にしてください"
                    // "xxx-yyyy形式にしてください"
                    //'同じ文字を連続しないでください'
                    "abcを連続で並べて使用しないでください"
                );
            }
        } else {
            alert("同じパスワードは使えません");
        }
    } else {
        alert("古いパスワードが間違っています");
    }
});
