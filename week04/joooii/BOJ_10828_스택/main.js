const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input[0]);
let words = input.slice(1);
let stack = [];
let result = [];

for (i = 0; i < n; i++) {
  let command = words[i].split(" ");

  // push
  if (command[0] === "push") {
    stack.push(Number(command[1]));
  }

  // pop
  if (command[0] === "pop") {
    result.push(stack.length ? stack.pop() : -1);
  }

  // size
  if (command[0] === "size") {
    result.push(stack.length);
  }

  // empty
  if (command[0] === "empty") {
    result.push(stack.length === 0 ? 1 : 0);
  }

  // top
  if (command[0] === "top") {
    result.push(stack.length ? stack[stack.length - 1] : -1);
  }
}

console.log(result.join("\n"));
