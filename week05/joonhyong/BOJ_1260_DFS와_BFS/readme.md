### 백준 1260번 DFS와 BFS

#### - 유형 : 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색

#### - 입력예제

```
4 5 1
1 2
1 3
1 4
2 4
3 4
```

#### - 유도코드

#### - 알게된 점

- 구조 분해 할당
  - 배열을 배열 수에 맞게 []내에 변수를 작성해주면
  - 그 값들을 변수로 풀어서 대입해줌
- arr.forEach((요소[, 인덱스, 원본배열]) => {수행 동작} )
- forEach([a, b] => {수행 동작})메서드를 이용하여 수행 동작에 아래의 로직을 작성

  - graph[a].push(b)
  - gragh[b].push(a)

- dfs(s) 로직. s는 시작 정점

  1. visited[s]이 ture이면 함수 종료
  2. visited[s]이 false이면 true 할당
  3. s를 answerDfs에 추가
  4. 인접그래프[s]의 요소(배열)의 요소를 n이라 할때, visited[n]이 false이면 dfs(n)을 호출

- bfs() 로직
  1. 시작 정점을 첫번째 요소로 갖는 queue 배열을 생성한다.
  2. visited[s]을 true로 하고 queue가 비어 있을 때 까지 while문을 시작한다.
  3. queue에서 pop한 값을 answerBfs에 추가
  4. 인접그래프의 s번째 요소(배열)의 요소(->n)들에 대해 아래의 작업 수행
  5. visited[n]이 false이면 queue에 n을 추가하고 visited[n]에 true 할당

### 코드 구현

#### - 언어 : JavaScript

#### - 메모리 : 16808 KB

#### - 시간 : 188 ms

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const arrEdge = input.map((line) => line.split(" ").map(Number));
const graph = Array.from(Array(N + 1), () => []);

arrEdge.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

graph.forEach((line) => line.sort((a, b) => a - b));

const visited = Array(N + 1).fill(false);
const answerDfs = [];
function dfs(s) {
  if (visited[s]) return;
  visited[s] = true;
  answerDfs.push(s);
  for (let n of graph[s]) {
    if (!visited[n]) dfs(n);
  }
}

visited.fill(false);
const answerBfs = [];
function bfs(s) {
  const queue = [s];
  visited[s] = true;
  while (queue.length) {
    let v = queue.shift();
    answerBfs.push(v);
    for (let n of graph[v]) {
      if (!visited[n]) {
        queue.push(n);
        visited[n] = true;
      }
    }
  }
}

dfs(V);
visited.fill(false);
bfs(V);
console.log(answerDfs.join(" "));
console.log(answerBfs.join(" "));
```
