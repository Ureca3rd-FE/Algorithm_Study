const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

let n = input[0];
let su = input.slice(1);
let stack = [];
let result = [];
let count = 1;
let isPossible = true;

for (i = 0; i < n; i++) {
  let target = su[i];

  while (count <= target) {
    stack.push(count);
    result.push("+");
    count++;
  }

  if (stack[stack.length - 1] === target) {
    stack.pop();
    result.push("-");
  } else {
    isPossible = false;
    break;
  }
}

if (isPossible) {
  console.log(result.join("\n"));
} else {
  console.log("NO");
}
