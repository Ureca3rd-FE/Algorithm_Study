const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift().split(" ").map(Number)[0];

const arr = Array.from({ length: N + 1 }, () => []);
input.forEach((i) => {
  const [a, b] = i.split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
});

const ans = [];
const visited = Array.from({ length: N + 1 }, () => false);
let cnt = 0;

function bfs(num) {
  visited[num] = true;
  ans.push(num);

  const queue = [...arr[num]];

  let head = 0;
  while (head < queue.length) {
    const item = queue[head++];
    if (visited[item]) continue;
    visited[item] = true;
    ans.push(item);
    queue.push(...arr[item]);
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    cnt++;
    bfs(i);
  }
}

console.log(cnt);
