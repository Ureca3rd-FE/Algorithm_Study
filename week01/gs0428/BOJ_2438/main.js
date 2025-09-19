const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
const N = +input[0];
for (let i = 1; i <= N; i++) {
  ans.push("*".repeat(i));
}
console.log(ans.join("\n"));
