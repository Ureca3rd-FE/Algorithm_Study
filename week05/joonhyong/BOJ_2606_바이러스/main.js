// 백준 2606번 바이러스
// 분류 : 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
/*입력예제
7
6
1 2
2 3
1 5
5 2
5 6
4 7
*/
/*유도코드
- 컴퓨터의 수(노드의 수)가 최대 100인 경우는 많은 경우가 아니므로, DFS방식으로 진행
1. 입력예제를 통해 인접 그래프 생성
2. 방문 배열 visited 및 cnt 변수 생성
3. dfs함수 구현 - 재귀방식
4. dfs(1) 실행 후 cnt 출력
*/
/* 알게된 점
- 간선 정보를 저장하는 2차원 배열을 통해 인접 그래프를 채운다.
edgeArr.forEach([a, b] => {
  graph[a].push(b);
  graph[b].push(a);
});

- dfs 함수를 재귀함수의 형태로 구현
1. dfs(s)의 s는 시작 노드임
2. dfs 함수의 인자로 들어온 수를 visited의 인덱스로 받아서 해당하는 요소를 true로 방문기록을 남김
3. 출력 배열에 dfs의 인자를 추가 (바이러스 문제에서는 첫번째 감염자를 세지 않으므로 생략)
4. for of문을 통해 graph의 s번째 인덱스의 요소(배열)를 탐색함
5. if문을 통해 요소(배열)의 요소를 기준으로 visited를 방문(true) 했다면 continue, 방문하지 않았다면 dfs()의 인자로 넣어줌
6. 이때부터는 감염되는 것으로 간주하므로 cnt++ 해줌
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

// n은 컴퓨터이자 노드, m은 네트워크 연결이자 간선
const n = parseInt(input.shift());
const m = parseInt(input.shift());

// 간선 연결 정보
const edgeArr = input.map((line) => line.split(" ").map(Number));

// 인접 그래프 생성
const graph = Array.from(Array(n + 1), () => []);
edgeArr.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

// visited 배열 및 cnt 변수 생성
const visited = Array(n + 1).fill(false);
let cnt = 0;

// dfs 함수 구현
function dfs(s) {
  visited[s] = true;
  for (const n of graph[s]) {
    if (!visited[n]) {
      cnt++;
      dfs(n);
    }
  }
}

dfs(1);
console.log(cnt);

// // 컴퓨터의 수
// let n = Number(input[0]);
// // 연결된 간선(쌍)의 수
// let m = Number(input[1]);
// // 주어진 연결 정보
// let pair = [];

// for (let i = 2; i <= m + 1; i++) {
//   pair.push(input[i].split(" ").map(Number));
// }

// // 인접 리스트 그래프 생성
// let graph = Array.from({ length: n + 1 }, () => []);
// for (let [a, b] of pair) {
//   graph[a].push(b);
//   graph[b].push(a);
// }

// // 방문 배열 초기화
// let visited = new Array(n + 1).fill(false);
// let result = 0;

// function dfs(node) {
//   visited[node] = true;
//   for (let next of graph[node]) {
//     if (!visited[next]) {
//       result++;
//       dfs(next);
//     }
//   }
// }

// // 1번 컴퓨터부터 탐색 시작
// dfs(1);
// console.log(result);
