const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const alphabets = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
const sum = input[0].split("").reduce((acc, cur) => {
  const index = alphabets.findIndex((alphabet) => alphabet.indexOf(cur) !== -1);
  return acc + index + 3;
}, 0);
console.log(sum);
