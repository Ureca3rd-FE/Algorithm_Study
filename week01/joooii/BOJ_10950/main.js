const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ").map((i) => +i);
  console.log(num[0] + num[1]);
}
