// 1065 한수
// 9756KB	100ms

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const N = Number(input);

function isHansu(num) {                             // 자리별로 숫자를 나눔
  const digits = String(num).split("").map(Number);

  if (digits.length <= 2) return true;              // 1자리, 2자리는 모두 한수에 포함

  const diff = digits[1] - digits[0];               // 자릿수별 차이 계산
  for (let i = 1; i < digits.length - 1; i++) {
    if (digits[i + 1] - digits[i] !== diff) {
      return false;
    }
  }
  return true;
}

let count = 0;
for (let i = 1; i <= N; i++) {
  if (isHansu(i)) count++;
}

console.log(count);