const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = +input[0];
const ans = [];
for (let i = 1; i <= 9; i++) {
  ans.push(`${num} * ${i} = ${num * i}`);
}
console.log(ans.join("\n"));
