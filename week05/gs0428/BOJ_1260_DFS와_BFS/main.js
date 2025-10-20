const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M, V] = input.shift().split(" ").map(Number);
const arr = Array.from({ length: 1001 }, () => []);
input.forEach((i) => {
  const [a, b] = i.split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
});

const bfsAns = [];
const bfsVisited = Array.from({ length: 1001 }, () => false);
const dfsAns = [];
const dfsVisited = [...bfsVisited];

function dfs(num) {
  if (dfsVisited[num]) return;
  dfsVisited[num] = true;
  dfsAns.push(num);
  const shouldVisit = arr[num].sort((a, b) => a - b);
  for (const visit of shouldVisit) {
    dfs(visit);
  }
}

dfs(V);

function bfs(num) {
  if (bfsVisited[num]) return;
  bfsVisited[num] = true;
  bfsAns.push(num);
  const queue = arr[num].sort((a, b) => a - b);
  let head = 0;
  while (head < queue.length) {
    const item = queue[head++];
    if (bfsVisited[item]) continue;
    bfsVisited[item] = true;
    bfsAns.push(item);
    const newArr = arr[item].sort((a, b) => a - b);
    queue.push(...newArr);
  }
}

bfs(V);

console.log(`${dfsAns.join(" ")}\n${bfsAns.join(" ")}`);
