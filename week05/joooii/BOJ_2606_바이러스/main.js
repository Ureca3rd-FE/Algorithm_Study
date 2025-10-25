const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let computer = Number(input[0]);
let network = Number(input[1]);
let arr = input.slice(2).map((line) => line.split(" ").map(Number));

const graph = [];
for (let i = 0; i <= computer; i++) {
  graph[i] = [];
}

for (let [a, b] of arr) {
  graph[a].push(b);
  graph[b].push(a);
}

const visited = [];
for (let i = 0; i <= computer; i++) {
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
dfs(1);

let count = 0;
for (let i = 2; i <= computer; i++) {
  if (visited[i]) {
    count += 1;
  }
}

console.log(count);
