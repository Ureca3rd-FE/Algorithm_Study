const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input[0]);
let brace = input.slice(1);
let result = [];

for (i = 0; i < n; i++) {
  let stack = [];
  let line = brace[i].split("");
  //   let isValid = true;

  for (let ch of line) {
    if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.length === 0) {
        // isValid = false;
        break;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}
console.log(result.join("\n"));
