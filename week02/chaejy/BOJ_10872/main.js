// 10872 팩토리얼
// 9588KB	92ms

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const n = Number(input);

function factorial(x) {
  if (x === 0) return 1;
  if (x === 1) return 1;
  return x*factorial(x-1);
}

console.log(factorial(n));