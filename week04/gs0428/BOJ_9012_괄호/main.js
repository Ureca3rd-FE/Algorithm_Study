const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const ans = [];

input.splice(1).forEach((str) => {
  const stack = [];
  let isValid = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
      continue;
    }

    if (stack.length === 0) {
      isValid = false;
      break;
    }
    stack.pop();
  }
  if (!isValid || stack.length > 0) {
    ans.push("NO");
  } else {
    ans.push("YES");
  }
});

console.log(ans.join("\n"));
