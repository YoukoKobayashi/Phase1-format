// let tgt = moment("2300-01-01 00:00:00");

// let output = document.createElement("p");
// output.textContent = "ドラえもん誕生まであと";
// document.body.appendChild(output);
// const countDown = () => {
//     let now = moment(new Date());
//     cnt = tgt.clone().diff(now);
//     cnt = Math.floor(cnt / 1000); // ミリ秒=>秒
//     cntSec = cnt % 60;
//     cntDay = Math.floor(cnt / 60 / 60 / 24); //day=60sec*60min*24h
//     cntHour =
//         Math.floor(cnt / 60 / 60) - 24 * cntDay; // 1hour=60sec*60minで割る,24hour*n_daysを引く
//     cntMin = Math.floor(
//         // 端数のsec,60sec*60min*n_hour,60sec*60min*24hour*n_daysを引く
//         (cnt -
//             cntSec -
//             cntDay * 24 * 60 * 60 -
//             cntHour * 60 * 60) /
//             60 // n_min=60secで割る
//     );
//     output.textContent = `ドラえもん誕生まであと${cntDay}日${cntHour}時間${cntMin}分${cntSec}秒`;
// };
// const howmanyTime = () => {
//     setInterval(() => {
//         countDown();
//     }, 1000);
// };
// howmanyTime();

// // normal_re
// let output = document.createElement("p");
// output.textContent = "ドラえもん誕生まであと";
// document.body.appendChild(output);

// const howmanytime = () => {
//     const tgt = moment("2300-01-01 00:00:00");
//     setInterval(() => {
//         const diff = tgt.diff(moment(new Date()));
//         const duration = moment.duration(diff);
//         const cntDays = Math.floor(
//             duration.asDays()
//         );
//         const cntHours = duration.hours();
//         const cntMins = duration.minutes();
//         const cntSecs = duration.seconds();
//         output.textContent = `ドラえもん誕生まであと${cntDays}日${cntHours}時間${cntMins}分${cntSecs}秒`;
//     }, 1000);
// };
// howmanytime();

// challenge
const dateSearch =
    document.getElementById("dateSearch");
dateSearch.addEventListener("click", () => {
    // 検索ボタンクリック時に
    const tgtValue =
        document.getElementById("dateSet");
    const tgt = moment(tgtValue.value); // 選択日時を取得(=.value)
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
