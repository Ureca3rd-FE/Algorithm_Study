const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

let max = Math.max(...input.map(Number));
let idx = input.indexOf(max);

console.log(max);
console.log(idx + 1);
