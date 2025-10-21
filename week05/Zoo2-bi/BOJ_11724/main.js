const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number); // 정점, 간선 수

// 그래프 
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// 방문 표시 남기기!
const visited = Array(n + 1).fill(false);
let count = 0;

// DFS 함수
function dfs(x) {
  visited[x] = true;
  for (const next of graph[x]) {
    if (!visited[next]) dfs(next);
  }
}

// 모든거 탐색
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);     // 연결된 노드들 다 방문
    count++;    
  }
}

console.log(count);
