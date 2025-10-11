const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

let head = -1;
const arr = [];
const ans = [];
const N = +input.shift();

for (let i = 0; i < N; i++) {
  if (input[i].includes("push")) {
    const [_, num] = input[i].split(" ");
    arr[++head] = num;
    continue;
  }

  if (input[i] === "top") {
    ans.push(head === -1 ? -1 : arr[head]);
    continue;
  }

  if (input[i] === "pop") {
    ans.push(head === -1 ? -1 : arr[head--]);
    continue;
  }

  if (input[i] === "size") {
    ans.push(head + 1);
    continue;
  }

  ans.push(head === -1 ? 1 : 0);
}

console.log(ans.join("\n"));
