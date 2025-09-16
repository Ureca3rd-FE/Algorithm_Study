const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const nan = input.map(Number);
const Max_nan = 7;
const sum_nan = 100;
const all_nan = nan.length;

const temp_nan = [];

function comb(depth, start, sum) {
  if (depth === Max_nan || sum > 100) {
    if (sum === sum_nan) {
      console.log(temp_nan.sort((a, b) => a - b).join("\n"));
      process.exit();
    }
    return;
  }

  for (let i = start; i < all_nan; i++) {
    temp_nan[depth] = nan[i];
    comb(depth + 1, i + 1, sum + nan[i]);
  }
}
comb(0, 0, 0);
