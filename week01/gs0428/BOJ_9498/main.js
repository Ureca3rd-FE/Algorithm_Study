const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = +input[0];
if (num >= 90) return console.log("A");
if (num >= 80) return console.log("B");
if (num >= 70) return console.log("C");
if (num >= 60) return console.log("D");
console.log("F");
