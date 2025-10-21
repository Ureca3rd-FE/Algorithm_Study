const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let i = 1;
const ans = [];
while (i < input.length) {
  // M은 가로 길이, N은 세로 길이, K는 위치의 개수
  const [M, N, K] = input[i].split(" ").map(Number);

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );
  const cabbages = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );

  let cnt = 0;

  for (let j = 1; j <= K; j++) {
    const [X, Y] = input[j + i].split(" ").map(Number);
    cabbages[Y][X] = 1;
  }

  function bfs(location) {
    const queue = [location];
    visited[location[1]][location[0]] = true;

    let head = 0;
    while (head < queue.length) {
      const [x, y] = queue[head++];
      if (x > 0 && !visited[y][x - 1] && cabbages[y][x - 1] === 1) {
        visited[y][x - 1] = true;
        queue.push([x - 1, y]);
      }
      if (y > 0 && !visited[y - 1][x] && cabbages[y - 1][x] === 1) {
        visited[y - 1][x] = true;
        queue.push([x, y - 1]);
      }
      if (x < M - 1 && !visited[y][x + 1] && cabbages[y][x + 1] === 1) {
        visited[y][x + 1] = true;
        queue.push([x + 1, y]);
      }
      if (y < N - 1 && !visited[y + 1][x] && cabbages[y + 1][x] === 1) {
        visited[y + 1][x] = true;
        queue.push([x, y + 1]);
      }
    }
  }

  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (!visited[j][k] && cabbages[j][k] === 1) {
        cnt++;
        // x, y 형식으로 전달
        bfs([k, j]);
      }
    }
  }
  ans.push(cnt);
  i += K + 1;
}

console.log(ans.join("\n"));
