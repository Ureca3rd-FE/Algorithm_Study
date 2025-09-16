const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = Math.max(...input);
const idx = input.indexOf(max) + 1;

console.log(max);
console.log(idx);
