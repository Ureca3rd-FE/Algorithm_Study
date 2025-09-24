// 10870 피보나치 수 5
// 9672KB	152ms

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const n = Number(input);

function fibo(x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  return fibo(x - 1) + fibo(x - 2);
}

console.log(fibo(n));