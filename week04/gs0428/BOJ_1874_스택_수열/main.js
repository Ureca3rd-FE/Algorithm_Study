const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const n = +input.shift();

const ans = [];
const stack = [];

let curNum = 1;

for (let i = 0; i < n; i++) {
  const num = +input[i];

  while (curNum <= num) {
    stack.push(curNum++);
    ans.push("+");
  }

  const pop = stack.pop();
  ans.push("-");

  if (pop !== num) {
    return console.log("NO");
  }
}

console.log(ans.join("\n"));
