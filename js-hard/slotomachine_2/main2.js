// const slotStartButton = document.getElementById("startTimer");
// const displaySlotMachine = document.getElementsByClassName("slot-wrap")[0];
// console.log(displaySlotMachine);
// let displaySlots;

// const initGame = () => {
//   // displaySlots = [
//   //   {
//   //     left: document.getElementById("nowTime4"),
//   //     middle: document.getElementById("nowTime5"),
//   //     right: document.getElementById("nowTime6"),
//   //   },
//   //   {
//   //     left: document.getElementById("nowTime"),
//   //     middle: document.getElementById("nowTime2"),
//   //     right: document.getElementById("nowTime3"),
//   //   },
//   //   {
//   //     left: document.getElementById("nowTime7"),
//   //     middle: document.getElementById("nowTime8"),
//   //     right: document.getElementById("nowTime9"),
//   //   },
//   // ];

//   displaySlots = [
//     {
//       upper: document.getElementById("nowTime4"),
//       middle: document.getElementById("nowTime"),
//       lower: document.getElementById("nowTime7"),
//     },
//     {
//       upper: document.getElementById("nowTime5"),
//       middle: document.getElementById("nowTime2"),
//       lower: document.getElementById("nowTime8"),
//     },
//     {
//       upper: document.getElementById("nowTime6"),
//       middle: document.getElementById("nowTime3"),
//       lower: document.getElementById("nowTime9"),
//     },
//   ];

//   const stopButtons = [
//     document.getElementById("setTime1"),
//     document.getElementById("setTime2"),
//     document.getElementById("setTime3"),
//   ];

//   const init = () => {
//     stopButtons.forEach((stopButton) => {
//       stopButton.disabled = true;
//     });
//     slotStartButton.disabled = false;
//   };
//   init();

//   slotStartButton.addEventListener("click", () => {
//     stopButtons.forEach((stopButton) => {
//       stopButton.disabled = false;
//     });
//     slotStartButton.disabled = true;
//     createCountUpNumber(0);
//     createCountUpNumber(1);
//     createCountUpNumber(2);
//   });

//   let slotStart;
//   const createCountUpNumber = (index) => {
//     clearInterval(slotStart);
//     slotStart = setInterval(() => {
//       displayCountUpNumbers(index);
//     }, 100);
//     stopButtons[index].addEventListener("click", () => {
//       clearInterval(slotStart);
//       // stopButton[index].disabled = true;
//       stopButtons[index].setAttribute("disabled", "true");
//       judge();
//     });
//   };

//   // console.log(stopButtons[0]);
//   // stopButtons.forEach((stopButton) => {
//   //   stopButton.addEventListener("click", () => {
//   //     clearInterval(slotStart);
//   //     // stopButton[index].disabled = true;
//   //     stopButton.setAttribute("disabled", "true");
//   //     judge();
//   //   });
//   // });

//   // この下がダメ！！！
//   // 122行目　appendChildはnodeをとる
//   let displayUp = -1;
//   let displayMiddle = 0;
//   let displayBottom = 1;
//   const displayCountUpNumbers = (index) => {
//     if (displayMiddle === 9) {
//       displayMiddle = 0;
//       displayUp = 9;
//       displayBottom = 1;
//     } else if (displayMiddle === 8) {
//       displayMiddle = 9;
//       displayUp = 8;
//       displayBottom = 0;
//     } else if (displayMiddle === 0) {
//       displayMiddle = 1;
//       displayUp = 0;
//       displayBottom += 1;
//     } else {
//       displayMiddle += 1;
//       displayUp += 1;
//       displayBottom += 1;
//     }
//     displaySlots.forEach(() => {
//       if (index % 3 === 0) {
//         displaySlots[index].upper.textContent = displayUp;
//       } else if (index % 3 === 1) {
//         displaySlots[index].middle.textContent = displayMiddle;
//       } else if (index % 3 === 2) {
//         displaySlots[index].lower.textContent = displayBottom;
//       }
//     });

//     console.log(displaySlots);

//     // displaySlotMachine.appendChild(displaySlots);
//   };

//   const judge = () => {
//     const isMatchDisabled = stopButtons.forEach((ele) => {
//       ele.disabled === true;
//     });

//     if (isMatchDisabled) {
//       displaySlots[0].middle.textContent ===
//         displaySlots[1].middle.textContent &&
//       displaySlots[0].middle.textContent === displaySlots[2].middle.textContent
//         ? alert("成功です！")
//         : alert("再挑戦してね！");
//       init();
//     }
//   };
// };
// initGame();
