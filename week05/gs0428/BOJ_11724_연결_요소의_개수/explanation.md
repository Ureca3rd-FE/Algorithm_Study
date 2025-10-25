### [11724 - 연결 요소의 개수](https://www.acmicpc.net/problem/11724)

- 메모리: `135928KB`
- 시간: `764ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// 정점의 개수
const N = input.shift().split(" ").map(Number)[0];

// 정점의 개수 + 1만큼 배열 생성
const arr = Array.from({ length: N + 1 }, () => []);
// input을 순회하며 정점 간 간선을 연결
input.forEach((i) => {
  const [a, b] = i.split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
});

// 정답 배열과 방문 배열 생성
const ans = [];
const visited = Array.from({ length: N + 1 }, () => false);
// 연결 요소의 개수
let cnt = 0;

function bfs(num) {
  visited[num] = true;
  ans.push(num);

  const queue = [...arr[num]];

  let head = 0;
  while (head < queue.length) {
    const item = queue[head++];
    if (visited[item]) continue;
    visited[item] = true;
    ans.push(item);
    queue.push(...arr[item]);
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    // i를 방문하지 않았다면 bfs 실행
    // 연결 요소의 개수 증가
    cnt++;
    bfs(i);
  }
}

console.log(cnt);
```
