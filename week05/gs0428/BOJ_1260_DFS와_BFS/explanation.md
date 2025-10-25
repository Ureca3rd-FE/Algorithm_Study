### [1260 - DFS와 BFS](https://www.acmicpc.net/problem/1260)

- 메모리: `16668KB`
- 시간: `196ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M, V] = input.shift().split(" ").map(Number);

// 정점(N)이 최대 1000까지 이므로 1001개의 배열 생성 (배열은 0부터 시작이므로 1개 더 생성)
const arr = Array.from({ length: 1001 }, () => []);
// input을 순회하며 정점 간 간선을 연결
input.forEach((i) => {
  const [a, b] = i.split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
});

// BFS용 배열과 방문 배열 생성
const bfsAns = [];
const bfsVisited = Array.from({ length: 1001 }, () => false);

// DFS용 배열과 방문 배열 생성
const dfsAns = [];
const dfsVisited = [...bfsVisited];

// 재귀를 돌며 탐색
function dfs(num) {
  // 방문 했다면 실행 X
  if (dfsVisited[num]) return;
  dfsVisited[num] = true;
  dfsAns.push(num);

  // 정점이 여러 개인 경우 정점 번호가 작은 것부터 먼저 방문 -> sort() 실행
  const shouldVisit = arr[num].sort((a, b) => a - b);
  for (const visit of shouldVisit) {
    dfs(visit);
  }
}

dfs(V);

function bfs(num) {
  bfsVisited[num] = true;
  bfsAns.push(num);

  // 정점이 여러 개인 경우 정점 번호가 작은 것부터 먼저 방문 -> sort() 실행
  const queue = arr[num].sort((a, b) => a - b);
  let head = 0;
  while (head < queue.length) {
    // 현재 head가 가르키고 있는 요소를 뺀 후 head 값 증가
    const item = queue[head++];

    // 방문 했다면 실행 X
    if (bfsVisited[item]) continue;
    bfsVisited[item] = true;
    bfsAns.push(item);

    // 정점이 여러 개인 경우 정점 번호가 작은 것부터 먼저 방문 -> sort() 실행
    const newArr = arr[item].sort((a, b) => a - b);
    queue.push(...newArr);
  }
}

bfs(V);

console.log(`${dfsAns.join(" ")}\n${bfsAns.join(" ")}`);
```
