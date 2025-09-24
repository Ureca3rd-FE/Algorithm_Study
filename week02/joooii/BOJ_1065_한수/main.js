const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
let n = Number(input);
let count = 0;
// 1~99까지는 무조건 한수이기 때문에 바로 n 출력
// 100~999까지는 백/십/일 자리를 추출해서 (일-십) === (십-백)이 같으면 한수 처리 (count++)
// 1000까지의 한수는 144이기 때문에 조건 처리
if (n <= 99) {
  console.log(n);
} else if (n <= 999) {
  count = 99;
  for (let i = 100; i <= n; i++) {
    let ones = i % 10;
    let tens = Math.floor((i / 10) % 10);
    let hundreds = Math.floor(i / 100);

    if (ones - tens === tens - hundreds) {
      count++;
    }
  }
  console.log(count);
} else if (n === 1000) {
  console.log(144);
}
