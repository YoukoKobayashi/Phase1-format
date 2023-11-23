const startTime = performance.now();

let tenMillion = [];
for (let i = 0; i < 10000000; i++) {
  tenMillion.push(i);
  tenMillion.splice(0, 1);
}

const endTime = performance.now();

console.log(`実行時間：${endTime - startTime}ミリ秒`);
