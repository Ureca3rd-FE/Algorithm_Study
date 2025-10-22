const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let [n, m, v] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((line) => line.split(" ").map(Number));

const graph = [];
for (i = 0; i <= n; i++) {
  graph[i] = [];
}

for (let [a, b] of arr) {
  graph[a].push(b);
  graph[b].push(a);
}

for (i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

const dfsVisited = [];
for (i = 0; i <= n; i++) {
  dfsVisited[i] = false;
}
const dfsResult = [];

function dfs(node) {
  dfsVisited[node] = true;
  dfsResult.push(node);

  for (let nextNode of graph[node]) {
    if (!dfsVisited[nextNode]) {
      dfs(nextNode);
    }
  }
}
dfs(v);

const bfsVisited = [];
for (i = 0; i <= n; i++) {
  bfsVisited[i] = false;
}
const bfsResult = [];

function bfs(start) {
  const queue = [];
  queue.push(start);
  bfsVisited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    bfsResult.push(node);

    for (let nextNode of graph[node]) {
      if (!bfsVisited[nextNode]) {
        bfsVisited[nextNode] = true;
        queue.push(nextNode);
      }
    }
  }
}

bfs(v);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
