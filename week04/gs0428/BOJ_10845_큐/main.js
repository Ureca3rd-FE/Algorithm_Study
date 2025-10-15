const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

let head = -1;
let rear = -1;
const arr = [];
const ans = [];
const N = +input.shift();

for (let i = 0; i < N; i++) {
  if (input[i].includes("push")) {
    const [_, num] = input[i].split(" ");
    arr[++rear] = num;
    continue;
  }

  if (input[i] === "pop") {
    ans.push(head === rear ? -1 : arr[++head]);
    continue;
  }

  if (input[i] === "size") {
    ans.push(rear - head);
    continue;
  }

  if (input[i] === "front") {
    ans.push(head === rear ? -1 : arr[head + 1]);
    continue;
  }

  if (input[i] === "back") {
    ans.push(head === rear ? -1 : arr[rear]);
    continue;
  }

  ans.push(head === rear ? 1 : 0);
}

console.log(ans.join("\n"));
