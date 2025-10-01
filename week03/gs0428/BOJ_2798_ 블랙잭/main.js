const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const cards = input[0].split(" ").map(Number);

const r = 3;

const numbers = [];
let ans = 0;

function comb(depth, start) {
  if (depth === r) {
    const sum = numbers.reduce((acc, cur) => acc + cur);
    if (sum <= M) {
      ans = Math.max(sum, ans);
    }
    return;
  }

  for (let i = start; i < N; i++) {
    numbers[depth] = cards[i];
    comb(depth + 1, i + 1);
  }
}

comb(0, 0);

console.log(ans);
