// const tgtValue =
//     document.getElementById("dateSet");
// //const tgtValue =
// //    document.getElementsByTagName("input")[0];
// // let tgtSec = moment(tgt, "x");
// // let output = document.getElementById("diffTime");
// // output.textContent = `${tgt}まであと`;

// // const countDown = () => {
// //     let now = moment(new Date());
// //     cnt = tgtSec.clone().diff(now);
// //     cnt = Math.floor(cnt / 1000); // ミリ秒=>秒
// //     cntSec = cnt % 60;
// //     cntDay = Math.floor(cnt / 60 / 60 / 24);
// //     cntHour =
// //         Math.floor(cnt / 60 / 60) - 24 * cntDay;
// //     cntMin = Math.floor(
// //         (cnt -
// //             cntSec -
// //             cntDay * 24 * 60 * 60 -
// //             cntHour * 60 * 60) /
// //             60
// //     );
// // };

// // //let timer;
// // const howmanyTime = () => {
// //     //clearInterval(timer);
// //     //timer = setInterval(() => {
// //     setInterval(() => {
// //         countDown();
// //     }, 1000);
// //     output.textContent = `${tgt}まであと${cntDay}日${cntHour}時間${cntMin}分${cntSec}秒`;
// // };

// const dateSearch =
//     document.getElementById("dateSearch");
// dateSearch.addEventListener("click", () => {
//     let tgt = tgtValue.value;
//     console.dir(tgt); //表示内容  value:"2022-11-14",valueAsDate:Mon Nov 14 2022 09:00:00 GMT+0900
//     // howmanyTime();
// });

const dateSearch =
    document.getElementById("dateSearch");
dateSearch.addEventListener("click", () => {
    const tgtValue =
        document.getElementById("dateSet");
    const tgt = tgtValue.value;
    const tgt_ja = tgt.format("YYYY-MM-DD"); // 日時の表示形式を変換
    setInterval(() => {
        const diff = tgt.diff(moment(new Date()));
        const duration = moment.duration(diff);
        const cntDays = Math.floor(
            duration.asDays()
        );
        const cntHours = duration.hours();
        const cntMins = duration.minutes();
        const cntSecs = duration.seconds();
        const diffTime =
            document.getElementById("diffTime");
        diffTime.textContent = `${tgt_ja}まであと${cntDays}日${cntHours}時間${cntMins}分${cntSecs}秒`;
    }, 1000);
});
