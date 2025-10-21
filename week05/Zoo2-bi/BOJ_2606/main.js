const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]); // 컴퓨터 개수
const m = Number(input[1]); 

// (인접 리스트)
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i < 2 + m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// 방문 저장
const visited = Array(n + 1).fill(false);
let count = 0;

// DFS씀
function dfs(x) {
  visited[x] = true;
  for (const next of graph[x]) {
    if (!visited[next]) {
      count++;
      dfs(next);
    }
  }
}

// 1번 컴터~ 탐색 시작
dfs(1);

console.log(count);
