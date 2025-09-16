const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const rev = (s) => Number(s.split("").reverse().join(""));
const A = rev(input[0]);
const B = rev(input[1]);

console.log(Math.max(A, B));
