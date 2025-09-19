const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const T = parseInt(input[0]);
const number = input[1].split(" ").map(Number);

const max = Math.max(...number);
const min = Math.min(...number);

console.log(min, max);
