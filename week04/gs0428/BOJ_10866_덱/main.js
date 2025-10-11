const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const dequeue = [];
const ans = [];
const N = +input.shift();

for (let i = 0; i < N; i++) {
  if (input[i].includes("push")) {
    const [_, num] = input[i].split(" ");
    if (input[i].includes("back")) {
      dequeue.push(num);
      continue;
    }
    dequeue.unshift(num);
    continue;
  }

  const isEmpty = dequeue.length === 0;

  if (input[i] === "pop_front") {
    ans.push(isEmpty ? -1 : dequeue.shift());
    continue;
  }

  if (input[i] === "pop_back") {
    ans.push(isEmpty ? -1 : dequeue.pop());
    continue;
  }

  if (input[i] === "size") {
    ans.push(dequeue.length);
    continue;
  }

  if (input[i] === "front") {
    ans.push(isEmpty ? -1 : dequeue[0]);
    continue;
  }

  if (input[i] === "back") {
    ans.push(isEmpty ? -1 : dequeue.at(-1));
    continue;
  }

  ans.push(isEmpty ? 1 : 0);
}

console.log(ans.join("\n"));
