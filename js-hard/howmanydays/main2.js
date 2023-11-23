// challenge

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

// moment.jsについて--------------------------------------------------------
// moment() => 日付オブジェクトが作成される＝ブラウザのconsoleで詳細を見る =>'_d　〜'
// moment()を使って日付オブジェクトを作成している＝同様のオブジェクトなので、diff等が使える
// moment()の返り値は、タイムスタンプ（数字）＝ミリ秒
// diffメソッドで差分を取ると、タイムスタンプで値が返ってくる（＝ミリ秒）
// durationメソッドを使うと、durationオブジェクトが返される（＝作られる）
// -------------------------------------------------------------------------

// challenge_re
const dateSearch = document.getElementById("dateSearch");
// 検索ボタンクリック時に
dateSearch.addEventListener("click", () => {
  const tgtValue = document.getElementById("dateSet");
  const tgt = moment(tgtValue.value); // 選択指定した日時（値）を、momentを使って取得(=.value)
  // const tgt = tgtValue.value;
  const tgt_ja = tgt.format("YYYY-MM-DD"); // 日時の表示形式を変換(= 日時.format("ここに形式を指定"))
  setInterval(() => {
    // const diff = tgt.diff(moment(new Date())); //new Date()は使わない
    const diff = tgt.diff(moment()); //(moment()で現在時刻を取得)して、diffメソッドで差分をミリ秒で取得
    const duration = moment.duration(diff); // 上記diff(=ミリ秒)から、durationオブジェクトを生成する
    const cntDays = Math.floor(duration.asDays()); // ここ以下は、durationオブジェクトからメソッドを使って日、時間、分、秒を取得
    const cntHours = duration.hours();
    const cntMins = duration.minutes();
    const cntSecs = duration.seconds();
    const showDiffTime = document.getElementById("diffTime");
    showDiffTime.textContent = `${tgt_ja}まであと${cntDays}日${cntHours}時間${cntMins}分${cntSecs}秒`;
  }, 1000);
});

// 手動 = 面倒くさい！！！わかりにくい！！！----------------------------
const tgtTime = new Date("2112-09-30").getTime();
const nowTime = new Date().getTime();
const diffTime = tgtTime - nowTime;
const diffDays = Math.floor(diffTime / 1000 / 60 / 60 / 24);
const diffSec = Math.floor((diffTime / 1000 / 24 / 60) % 60);
const diffHours = Math.floor((diffTime / 1000) % 24);
const diffMin = Math.floor((diffTime / 1000 / 24) % 60);
console.log(tgtTime);
console.log(nowTime);
console.log(diffTime);
console.log(diffDays);
console.log(diffHours);
console.log(diffMin);
console.log(diffSec);
// ここまで-----------------------------------------------------
