const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m * 2; i += 2) {
  const [a, b] = [nums[i], nums[i + 1]];
  graph[a].push(b);
  graph[b].push(a);
}
graph.forEach(arr => arr.sort((a, b) => a - b));

let dfsRes = [], bfsRes = [];
let visited = Array(n + 1).fill(false);

const dfs = x => {
  visited[x] = true;
  dfsRes.push(x);
  for (const nx of graph[x]) if (!visited[nx]) dfs(nx);
};

const bfs = x => {
  const q = [x];
  visited[x] = true;
  while (q.length) {
    const cur = q.shift();
    bfsRes.push(cur);
    for (const nx of graph[cur]) if (!visited[nx]) {
      visited[nx] = true;
      q.push(nx);
    }
  }
};

dfs(v);
visited.fill(false);
bfs(v);

console.log(dfsRes.join(' '));
console.log(bfsRes.join(' '));
