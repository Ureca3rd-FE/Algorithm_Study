const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);
const gap = input.slice(1);

for (let i = 0; i < gap.length; i++) {
  const [A, B] = gap[i].split(" ").map(Number);
  console.log(A + B);
}
