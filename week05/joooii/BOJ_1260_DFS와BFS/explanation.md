### 1260 - DFS와 BFS

- 메모리: `16880KB`
- 시간: `180ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let [n, m, v] = input[0].split(" ").map(Number);

let arr = input.slice(1).map((line) => line.split(" ").map(Number));

// 그래프 구현
const graph = [];
for (i = 0; i <= n; i++) {
  graph[i] = []; // graph 초기화
}

// 양방향 그래프 이므로 a자리에 b를 push (반대도 진행)
for (let [a, b] of arr) {
  graph[a].push(b);
  graph[b].push(a);
}
// 번호 젤 작은거부터 start
for (i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

// 모든 정점을 방문 여부를 false로 초기화하기
const dfsVisited = [];
for (i = 0; i <= n; i++) {
  dfsVisited[i] = false;
}
// 방문 순서를 담는 배열
const dfsResult = [];

function dfs(node) {
  // 재귀함수
  dfsVisited[node] = true;
  dfsResult.push(node);

  for (let nextNode of graph[node]) {
    if (!dfsVisited[nextNode]) {
      dfs(nextNode);
    }
  }
}
dfs(v);
console.log(dfsResult.join(" "));

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
        bfsResult.push(nextNode);
      }
    }
  }
}
bfs(v);
console.log(bfsResult.join(" "));
```

### 풀이과정

graph에 각 정점의 숫자를 저장해서 graph를 생성한다. (N개 숫자만큼 넣어야 함)

dfs

1. 맨 처음 방문한 노드를 true -> result 배열에 해당 노드를 담는다.
2. graph 배열에서 다음 노드를 돌면서 다음 노드가 false면 방문하고 true로 바꾸면서 재귀를 한다.
3. 순회가 끝나면 반복을 종료한다.

bfs

1. 큐 배열을 만든다.
2. 큐에 start node를 저장한다.
3. while로 무한 반복돌면서 node를 큐에 삽입한다.
4. graph 배열의 다음 노드를 돌면서 다음 노드가 false면 방문하고 true로 바꾸면서 결과 배열에 다음 노드를 저장한다.
