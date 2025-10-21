const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = Number(input.shift()); // 테스트 케이스 수
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input.shift().split(" ").map(Number);
  const field = Array.from({ length: M }, () => Array(N).fill(0));

  // 배추 위치 입력!!!!!!!!!!!!!!1
  for (let i = 0; i < K; i++) {
    const [x, y] = input.shift().split(" ").map(Number);
    field[x][y] = 1;
  }

  // BFS 함수
  const bfs = (x, y) => {
    const queue = [[x, y]];
    field[x][y] = 0; // 방문 처리

    while (queue.length) {
      const [cx, cy] = queue.shift();
      for (const [dx, dy] of dir) {
        const nx = cx + dx, ny = cy + dy;
        if (nx >= 0 && ny >= 0 && nx < M && ny < N && field[nx][ny]) {
          field[nx][ny] = 0;
          queue.push([nx, ny]);
        }
      }
    }
  };

  // 덩어리(벌레) 개수 세기
  let worm = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (field[i][j]) {
        bfs(i, j);
        worm++;
      }
    }
  }

  console.log(worm);
}
