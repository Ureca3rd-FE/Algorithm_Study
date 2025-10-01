const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const dwarfs = input.map(Number);

const N = dwarfs.length;

// 7명 뽑으면 되므로 nCr에서 r은 7
const r = 7;

const numbers = [];

function comb(depth, start) {
  if (depth === r) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    if (sum === 100) {
      console.log(numbers.sort((a, b) => a - b).join("\n"));
      process.exit(0);
    }
    return;
  }

  for (let i = start; i < N; i++) {
    numbers[depth] = dwarfs[i];
    comb(depth + 1, i + 1);
  }
}

comb(0, 0);
