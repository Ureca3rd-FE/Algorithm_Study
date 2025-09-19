const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];

if (N < 2) return console.log(N);

function fibo(n) {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(N));
