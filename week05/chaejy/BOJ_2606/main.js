const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

let p = 0;
const N = data[p++]; // 컴퓨터 수
const M = data[p++]; // 연결 수

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const a = data[p++];
  const b = data[p++];
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(N + 1).fill(false);
let infected = 0;

const queue = [1];
let head = 0;
visited[1] = true;

while (head < queue.length) {
  const cur = queue[head++];
  for (const next of graph[cur]) {
    if (!visited[next]) {
      visited[next] = true;
      infected++;
      queue.push(next);
    }
  }
}

console.log(infected.toString());