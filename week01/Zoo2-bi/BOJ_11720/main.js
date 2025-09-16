const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const numbers = input[1];

const sum = numbers
  .split("")
  .map(Number)
  .reduce((a, b) => a + b);

console.log(sum);
