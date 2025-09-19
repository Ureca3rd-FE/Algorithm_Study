const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = input.map(Number);
const maxNum = Math.max(...num);
console.log(maxNum + "\n" + (num.indexOf(maxNum) + 1));
