const slotStartButton = document.getElementById("startTimer");
const displaySlotMachine = document.getElementsByClassName("slot-wrap")[0];
const displayAreaUpper = document.querySelectorAll(".upper-slot>p");
const displayAreaMiddle = document.querySelectorAll(".middle-slot>p");
const displayAreaDowner = document.querySelectorAll(".downer-slot>p");
let displaySlots;

const initGame = () => {
  displaySlots = [
    {
      upper: { displayArea: displayAreaUpper[0], displayValue: 0 },
      middle: { displayArea: displayAreaMiddle[0], displayValue: 0 },
      downer: { displayArea: displayAreaDowner[0], displayValue: 0 },
    },
    {
      upper: { displayArea: displayAreaUpper[1], displayValue: 0 },
      middle: { displayArea: displayAreaMiddle[1], displayValue: 0 },
      downer: { displayArea: displayAreaDowner[1], displayValue: 0 },
    },
    {
      upper: { displayArea: displayAreaUpper[2], displayValue: 0 },
      middle: { displayArea: displayAreaMiddle[2], displayValue: 0 },
      downer: { displayArea: displayAreaDowner[2], displayValue: 0 },
    },
  ];

  const stopButtons = [
    document.getElementById("setTime1"),
    document.getElementById("setTime2"),
    document.getElementById("setTime3"),
  ];

  const init = () => {
    stopButtons.forEach((stopButton) => {
      stopButton.disabled = true;
    });
    slotStartButton.disabled = false;
  };
  init();

  slotStartButton.addEventListener("click", () => {
    stopButtons.forEach((stopButton) => {
      stopButton.disabled = false;
    });
    slotStartButton.disabled = true;
    createCountUpNumber(0);
    createCountUpNumber(1);
    createCountUpNumber(2);
  });

  let countUpValue = 0;
  const createCountUpNumber = (index) => {
    let timer;
    clearInterval(timer);
    timer = setInterval(() => {
      if (countUpValue === 9) {
        displaySlots[index].upper.displayValue = 8;
        displaySlots[index].middle.displayValue = 9;
        displaySlots[index].downer.displayValue = 0;
        countUpValue = 0;
      } else if (countUpValue === 0) {
        displaySlots[index].upper.displayValue = 9;
        displaySlots[index].middle.displayValue = 0;
        displaySlots[index].downer.displayValue = 1;
        countUpValue++;
      } else {
        displaySlots[index].upper.displayValue = countUpValue - 1;
        displaySlots[index].middle.displayValue = countUpValue;
        displaySlots[index].downer.displayValue = countUpValue + 1;
        countUpValue++;
      }
      // slotの数値を表示する
      displaySlots[index].upper.displayArea.textContent =
        displaySlots[index].upper.displayValue;
      displaySlots[index].middle.displayArea.textContent =
        displaySlots[index].middle.displayValue;
      displaySlots[index].downer.displayArea.textContent =
        displaySlots[index].downer.displayValue;
    }, 100);

    // // addeventlistener(=fn())は何回も登録される =>removeEventListenerで消去する必要がある =>無名関数では解除できない
    // // このままだとダメ（中の関数も無名関数ではない書き方にするのか？？？）
    // stopButtons[index].addEventListener("click", function stopJudge() {
    //   stopButtons[index].disabled = true;
    //   clearInterval(timer);
    //   judge();
    // });

    // // addeventlistener(=fn())は何回も登録される =>removeEventListenerで消去する必要がある =>無名関数では解除できない
    // // このままだとダメ（中の関数も無名関数ではない書き方にするのか？？？）
    // stopButtons[index].removeEventListener("click", function stopJudge() {
    //   stopButtons[index].disabled = true;
    //   clearInterval(timer);
    //   judge();
    // });

    // onclickというプロパティにfn()を入れる=>上書きされる //addEventListenerではなくこちらを使えば1回の記述でok
    stopButtons[index].onclick = () => {
      stopButtons[index].disabled = true;
      clearInterval(timer);
      judge();
    };
  };

  const judge = () => {
    // let isMatchDisabled = stopButtons.forEach((ele) => {
    //   // ele.disabled;
    //   // ele.disabled === true;
    //   ele.getAttribute("disabled");
    // });

    const isMatchDisabled =
      stopButtons[0].disabled &&
      stopButtons[1].disabled &&
      stopButtons[2].disabled;

    // 2度目の判定だと2回アラート、3回目は3回アラートが表示される！！！！！！
    if (!isMatchDisabled) {
      // console.log("まだ");
      return;
    } else {
      // console.log("ok");
      // console.log(displaySlots[0].middle.displayValue);
      // console.log(displaySlots[1].middle.displayValue);
      // console.log(displaySlots[2].middle.displayValue);
      // if (
      displaySlots[0].middle.displayValue ===
        displaySlots[1].middle.displayValue &&
      displaySlots[0].middle.displayValue ===
        displaySlots[2].middle.displayValue
        ? // ) {
          //   alert("成功です！");
          // } else {
          //   alert("再挑戦してね！");
          // }
          alert("成功です！")
        : alert("再挑戦してね！");
      init();
    }
  };
};
initGame();
