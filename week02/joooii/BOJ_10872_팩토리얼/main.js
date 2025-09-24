const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input);
let sum = 1;

function factorial(n) {
  for (i = 1; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}
console.log(factorial(n));
