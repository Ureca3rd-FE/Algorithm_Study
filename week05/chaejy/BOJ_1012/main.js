const fs = require('fs');
const tokens = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

let p = 0;
const T = tokens[p++];
const out = [];

for (let t = 0; t < T; t++) {
  const M = tokens[p++]; // 배추밭 가로
  const N = tokens[p++]; // 배추밭 세로
  const K = tokens[p++]; // 배추 개수

  const field = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const x = tokens[p++];
    const y = tokens[p++];
    field[y][x] = 1;
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let worms = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] !== 1) continue; // 배추 아니면 skip

      worms++;                  // 새 덩어리 발견 → 지렁이 +1
      const q = [[y, x]];       // BFS 큐
      let head = 0;
      field[y][x] = 0;          // 방문 표시 0으로 업데이트

      while (head < q.length) {
        const [cy, cx] = q[head++];   
        for (const [dx, dy] of dirs) {
          const nx = cx + dx, ny = cy + dy;
          if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue; // 경계 체크
          if (field[ny][nx] !== 1) continue;                     // 배추 아니면 pass
          field[ny][nx] = 0;      // 방문 처리
          q.push([ny, nx]);       // 이웃 확장
        }
      }
    }
  }
  out.push(String(worms));
}

console.log(out.join('\n'));