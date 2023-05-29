// keyup_test
// const input = document.querySelector("input");
// input.addEventListener("keyup", (event) => {
//     console.log("クリックされたよ");
// });

let i = 400;

const sampleForm =
    document.getElementById("sampleForm");
const textCounter = document.getElementById(
    "textCounter"
);
const resetBtn =
    document.getElementById("resetBtn");

// challenge
const iniDel = document.getElementById("iniDel");
const endDel = document.getElementById("endDel");
let textarea; //  str格納用変数 != array指定

// sampleForm.addEventListener("keyup", () => {
//     i -= 1;
//     textCounter.textContent = `あと${i}文字`;
// });

sampleForm.addEventListener("keyup", () => {
    textCounter.textContent = `あと${
        i - sampleForm.value.length
    }文字`;
    textarea = sampleForm.value;
});

resetBtn.addEventListener("click", () => {
    //sampleForm.textContent = "";
    textarea = "";
    textCounter.textContent = "あと400文字";
    i = 400;
});

// first:slice(1)
iniDel.addEventListener("click", () => {
    textarea = textarea.slice(1);
    sampleForm.value = textarea;
    textCounter.textContent = `あと${
        i - sampleForm.value.length
    }文字`;
});

// end:slice(0,-1)
endDel.addEventListener("click", () => {
    textarea = textarea.slice(0, -1);
    sampleForm.value = textarea;
    textCounter.textContent = `あと${
        i - sampleForm.value.length
    }文字`;
});
