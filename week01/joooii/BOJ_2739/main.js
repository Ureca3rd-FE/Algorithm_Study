const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const num = Number(input);
for (let i = 1; i < 10; i++) {
  console.log(num + " * " + i + " = " + num * i);
}
