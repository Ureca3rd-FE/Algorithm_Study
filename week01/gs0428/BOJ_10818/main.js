const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
const nums = input[1].split(" ").map(Number);
console.log(`${Math.min(...nums)} ${Math.max(...nums)}`);
