const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let cards = input[1].split(" ").map(Number);

let sum = 0;
let result = 0;

for (i = 0; i < n - 2; i++) {
  for (j = i + 1; j < n - 1; j++) {
    for (k = j + 1; k < n; k++) {
      sum = cards[i] + cards[j] + cards[k];
      if (sum === m) {
        result = sum;
        break;
      }
      if (sum < m && sum > result) {
        result = sum;
      }
    }
  }
}

console.log(result);
