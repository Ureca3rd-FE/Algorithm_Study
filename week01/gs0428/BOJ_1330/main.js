const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
if (a > b) return console.log(">");
if (a < b) return console.log("<");
console.log("==");
