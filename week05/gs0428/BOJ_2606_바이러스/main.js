const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
input.shift();

const arr = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);

let cnt = 0;

input.forEach((i) => {
  const [A, B] = i.split(" ").map(Number);
  arr[A].push(B);
  arr[B].push(A);
});

function dfs(depth) {
  visited[depth] = true;
  cnt++;

  for (const item of arr[depth]) {
    if (!visited[item]) {
      dfs(item);
    }
  }
}

dfs(1);

console.log(cnt - 1);
