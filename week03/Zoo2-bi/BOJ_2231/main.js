const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const start = Math.max(1, N - 9 * String(N).length);

function digitSum(x) {
  let s = 0;
  while (x > 0) {
    s += x % 10;
    x = (x / 10) | 0;
  }
  return s;
}

let ans = 0;
for (let x = start; x <= N; x++) {
  if (x + digitSum(x) === N) {
    ans = x;
    break;
  }
}
console.log(ans);
