const fs = require('fs');
const tokens = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

let p = 0;
const N = tokens[p++];
const M = tokens[p++];
const Start = tokens[p++];

const A = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const s = tokens[p++];
  const e = tokens[p++];
  A[s].push(e);
  A[e].push(s);
}

for (let i = 1; i <= N; i++) {
  A[i].sort((a, b) => a - b);
}

const dfsVisited = Array(N + 1).fill(false);
const dfsOrder = [];

function DFS(v) {
  dfsVisited[v] = true;
  dfsOrder.push(v);
  for (const next of A[v]) {
    if (!dfsVisited[next]) {
      DFS(next);
    }
  }
}

const bfsVisited = Array(N + 1).fill(false);
const bfsOrder = [];

function BFS(v) {
  const queue = [v];
  let head = 0;
  bfsVisited[v] = true;

  while (head < queue.length) {
    const cur = queue[head++];
    bfsOrder.push(cur);
    for (const next of A[cur]) {
      if (!bfsVisited[next]) {
        bfsVisited[next] = true;
        queue.push(next);
      }
    }
  }
}

DFS(Start);
BFS(Start);

console.log(dfsOrder.join(' '));
console.log(bfsOrder.join(' '));