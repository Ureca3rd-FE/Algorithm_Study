const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [A, B] = input[0].split(" ").map((i) => i.split("").reverse().join(""));
const maxNum = Math.max(+A, +B);
console.log(maxNum);
