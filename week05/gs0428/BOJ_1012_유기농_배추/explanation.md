### [1012 - 유기농 배추](https://www.acmicpc.net/problem/1012)

- 메모리: `13744KB`
- 시간: `184ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 현재 Test Case를 나타내는 i
let i = 1;
const ans = [];

while (i < input.length) {
  // M은 가로 길이, N은 세로 길이, K는 위치의 개수
  const [M, N, K] = input[i].split(" ").map(Number);

  // 방문 상태를 나타내는 배열
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );
  // 배추가 심어져있는지 상태를 나타내는 배열
  const cabbages = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );

  // 필요한 지렁이의 수
  let cnt = 0;

  for (let j = 1; j <= K; j++) {
    const [X, Y] = input[j + i].split(" ").map(Number);
    cabbages[Y][X] = 1;
  }

  function bfs(location) {
    const queue = [location];
    // 0번 index는 x, 1번 index는 y를 뜻함
    visited[location[1]][location[0]] = true;

    let head = 0;

    while (head < queue.length) {
      // 현재 x, y를 꺼냄
      const [x, y] = queue[head++];

      // x가 0보다 크고 (x-1, y) 위치를 방문하지 않았으며 배추가 심어져있는 경우 실행
      if (x > 0 && !visited[y][x - 1] && cabbages[y][x - 1] === 1) {
        visited[y][x - 1] = true;
        queue.push([x - 1, y]);
      }
      // y가 0보다 크고 (x, y-1) 위치를 방문하지 않았으며 배추가 심어져있는 경우 실행
      if (y > 0 && !visited[y - 1][x] && cabbages[y - 1][x] === 1) {
        visited[y - 1][x] = true;
        queue.push([x, y - 1]);
      }
      // x가 M-1 크고 (x+1, y) 위치를 방문하지 않았으며 배추가 심어져있는 경우 실행
      if (x < M - 1 && !visited[y][x + 1] && cabbages[y][x + 1] === 1) {
        visited[y][x + 1] = true;
        queue.push([x + 1, y]);
      }
      // y가 N-1 크고 (x, y+1) 위치를 방문하지 않았으며 배추가 심어져있는 경우 실행
      if (y < N - 1 && !visited[y + 1][x] && cabbages[y + 1][x] === 1) {
        visited[y + 1][x] = true;
        queue.push([x, y + 1]);
      }
    }
  }

  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (!visited[j][k] && cabbages[j][k] === 1) {
        // 방문하지 않았고 배추가 심어져있는 땅이라면 bfs 실행
        cnt++;
        // x, y 형식으로 전달
        bfs([k, j]);
      }
    }
  }
  // 지렁이의 수 정답 배열에 넣기
  ans.push(cnt);

  // K만큼 순회했으므로 i에 더하기
  // [M, N, K]에 index를 하나 소모했기 때문에 1을 추가로 더함
  i += K + 1;
}

console.log(ans.join("\n"));
```
