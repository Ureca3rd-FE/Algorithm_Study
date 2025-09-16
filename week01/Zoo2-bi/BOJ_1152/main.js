const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const str = input[0].trim();

if (str === "") {
  console.log(0);
} else {
  const word = str.trim().split(/\s+/);
  console.log(word.length);
}
