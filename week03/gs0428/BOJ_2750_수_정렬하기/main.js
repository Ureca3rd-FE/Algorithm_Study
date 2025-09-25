const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(
  input
    .splice(1)
    .sort((a, b) => +a - +b)
    .join("\n")
);
