const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input);

let result = 0;

for (i = 1; i < n; i++) {
  let sum = i;
  let temp = i;

  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  if (sum === n) {
    result = i;
    break;
  }
}
console.log(result);
