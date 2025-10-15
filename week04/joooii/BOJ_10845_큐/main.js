const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input[0]);
let words = input.slice(1);
let queue = [];
let result = [];

for (i = 0; i < n; i++) {
  let command = words[i].split(" ");

  // push
  if (command[0] === "push") {
    queue.push(command[1]);
  }
  if (command[0] === "pop") {
    result.push(queue.length ? queue.shift() : -1); // 맨 앞 요소 빼기 위해서는 pop 말고 shift
  }
  if (command[0] === "size") {
    result.push(queue.length);
  }
  if (command[0] === "empty") {
    result.push(queue.length === 0 ? 1 : 0);
  }
  if (command[0] === "front") {
    result.push(queue.length ? queue[0] : -1);
  }
  if (command[0] === "back") {
    result.push(queue.length ? queue[queue.length - 1] : -1);
  }
}

console.log(result.join("\n"));
