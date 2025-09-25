const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];

let i = 1;

while (i <= N) {
  const sum =
    i
      .toString()
      .split("")
      .reduce((acc, cur) => acc + +cur, 0) + i;

  if (sum === N) {
    console.log(i);
    process.exit(0);
  }
  i++;
}

console.log(0);
