const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let arr = input.slice(1).map((line) => line.split(" ").map(Number));

const graph = [];
for (i = 0; i <= n; i++) {
  graph[i] = [];
}

for (let [a, b] of arr) {
  graph[a].push(b);
  graph[b].push(a);
}

const visited = [];
for (i = 0; i <= n; i++) {
  visited[i] = false;
}

function dfs(node) {
  visited[node] = true;
  for (let nextNode of graph[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode);
    }
  }
}
let count = 0;
for (i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}
console.log(count);
