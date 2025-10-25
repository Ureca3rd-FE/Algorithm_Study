// 백준 1012번 유기농 배추
// 분류 : 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색, 격자 그래프, 플러드 필
/*입력예제
2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5
*/
/*유도코드
- 2차원 배열인 field의 요소를 0으로 초기화하여 생성
- k번 반복문을 돌며 해당 좌표에 배추를 심는 것을 1로 표시
- field를 순회하면서 1을 발견하면 dfs함수 호출
- dfs(x, y) 로직
1. 해당 좌표의 요소에 0 할당
2. 델타 배열을 생성. 상하좌우이므로 4회 반복할 예정
3. 반복문 내부에서 nx, ny변수를 생성하고, 원래 좌표값에 델타배열의 값을 더한 값을 할당 
4. 해당 좌표가 0이면 pass
5. 해당 좌표(nx, ny)가 1이면 dfs(nx, ny) 실행
 */
/* 알게된 점
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

// 테스트 케이스 수를 변수에 할당
const tc = parseInt(input.shift());

// 테스트 케이스 만큼 반복
for (let t = 0; t < tc; t++) {
  // 필요한 지렁이의 수를 저장할 변수
  let cnt = 0;

  // 밭의 가로, 세로와 배추의 수를 변수에 할당
  const [m, n, k] = input.shift().split(" ").map(Number);
  // 밭을 feild라는 이름의 2차원 배열로 구현
  const field = Array.from({ length: n }, () => Array(m).fill(0));

  // 배추 심기
  for (let i = 0; i < k; i++) {
    const [a, b] = input.shift().split(" ").map(Number);
    field[b][a] = 1;
  }

  // // field 출력 - 잘 심어졌는지 확인용
  // for (let i = 0; i < n; i++) {
  //   const answer = [];
  //   for (let j = 0; j < m; j++) {
  //     answer.push(field[i][j]);
  //   }
  //   console.log(answer.join(" "));
  // }

  // 델타배열 생성 - 상 하 좌 우
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  // dfs함수 구현
  function dfs(x, y) {
    field[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && field[ny][nx] === 1) {
        dfs(nx, ny);
      }
    }
  }

  // field 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (field[i][j] === 1) {
        dfs(j, i);
        cnt++;
      }
    }
  }

  console.log(cnt);
}
