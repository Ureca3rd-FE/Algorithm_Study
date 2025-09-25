const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = +input[0];

let i = 665;
while (N > 0) {
  i++;
  if (i.toString().includes("666")) {
    N--;
  }
}

console.log(i);
