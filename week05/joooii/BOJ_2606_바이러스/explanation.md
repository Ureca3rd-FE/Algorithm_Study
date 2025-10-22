### 11724 - 연결 요소의 개수

- 메모리: `9452KB`
- 시간: `92ms`

### 코드

```js
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
```

### 풀이과정

1번 노드와 연결되어있는 연결요소들의 노드 개수를 출력하면 된다.

1. 초기화한 graph 배열에 저장한다
2. 1과 연결되어있는 노드를 사실상 전부 출력하면 되는 것

킥: 1번 컴퓨터 제외이기 때문에 2부터 시작
