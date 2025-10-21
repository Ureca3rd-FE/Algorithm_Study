### [2606 - 바이러스](https://www.acmicpc.net/problem/2606)

- 메모리: `9428KB`
- 시간: `96ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 총 컴퓨터의 수
const N = +input.shift();
input.shift();

// 연결을 담을 배열 생성
const arr = Array.from({ length: N + 1 }, () => []);
// 방문 여부를 담은 배열
const visited = Array.from({ length: N + 1 }, () => false);

// 감염된 컴퓨터 개수
let cnt = 0;

// 연결 생성
input.forEach((i) => {
  const [A, B] = i.split(" ").map(Number);
  arr[A].push(B);
  arr[B].push(A);
});

// 재귀를 돌며 감염된 컴퓨터 확인
function dfs(depth) {
  visited[depth] = true;
  cnt++;

  for (const item of arr[depth]) {
    if (!visited[item]) {
      dfs(item);
    }
  }
}

dfs(1);

// 자기 자신 빼고 개수 출력
console.log(cnt - 1);
```
