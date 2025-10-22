const fs = require('fs');
const tokens = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

let p = 0;
const n = tokens[p++];
const m = tokens[p++];

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const u = tokens[p++];
  const v = tokens[p++];
  graph[u].push(v);
  graph[v].push(u);
}

const visited = Array(n + 1).fill(false);
let count = 0;

for (let i = 1; i <= n; i++) {
  if (visited[i]) continue;
  count++;
  const stack = [i];
  visited[i] = true;
  while (stack.length) {
    const cur = stack.pop();
    for (const next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        stack.push(next);
      }
    }
  }
}

console.log(count.toString());