### 11724 - 연결 요소의 개수

- 메모리: `128020KB`
- 시간: `944ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let arr = input.slice(1).map((line) => line.split(" ").map(Number));

const graph = [];
for (i = 0; i <= n; i++) {
  graph[i] = [];
}

for (let [a, b] of arr) {
  graph[a].push(b);
  graph[b].push(a);
}

const visited = [];
for (i = 0; i <= n; i++) {
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
let count = 0;
for (i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}
console.log(count);
```

### 시행착오

// 연결요소를 어떻게 셀까 고민을 했는데
// 아직 방문하지 않은 노드를 방문하면 그 노드를 시작점으로 dfs를 돌리고, 한번의 dfs가 끝나면 count++을 해서 연결요소를 구하는 방식으로 구현
// dfs 내부에서 count++를 하게 되면, 하나의 연결요소 안에서 count를 하게 되는 것이기 때문에 dfs 바깥에서 count++를 구현

### 풀이과정

// graph를 다 연결했을 때, 나온 그래프의 갯수를 출력하는 것
// 입력에 따라 graph을 구성한다.
