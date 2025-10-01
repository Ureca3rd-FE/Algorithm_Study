const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

let n = input[0];
let num = input.slice(1);

num.sort((a, b) => a - b);

for (i = 0; i < n; i++) {
  console.log(num[i]);
}
