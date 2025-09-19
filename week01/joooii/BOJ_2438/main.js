const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = Number(input);
let result = "";

for (let i = 1; i <= N; i++) {
  result += "*";
  console.log(result);
}
