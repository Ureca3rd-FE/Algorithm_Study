const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input);

function fibo(n) {
  // 0,1에 대한 종료 조건을 fibo 함수 안에서 주어야 함
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibo(n - 2) + fibo(n - 1);
}
console.log(fibo(n));
