const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input[0]);
let nums = input[1];

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += Number(nums[i]);
}
console.log(sum);
