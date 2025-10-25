// 백준 11724번 연결 요소의 개수
// 분류 : 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
/*입력예제
6 5
1 2
2 5
5 1
3 4
4 6
*/
/*유도코드
길이가 N+1인 인접 배열인 graph 배열을 생성
길이가 N+1인 visited 배열을 생성
엣지 정보(입력 예제)를 통해 인접 그래프 생성
1부터 N까지 순회하면서 아래의 로직 수행
1. visited가 true인 것을 찾으면 pass
2. visited가 false인 것을 찾았을때 cnt를 증가시키고 dfs/bfs 수행
3. N까지 순회하고 나서 cnt의 증가량을 출력 
 */
/* 알게된 점
DFS/BFS 중 더 유리한 문제가 존재함
DFS는 모든 경로를 시도해야하는 경우,
BFS는 모든 간선의 가중치가 동일하거나 먼저나오는게 해답인 경우
이번 문제는 두가지 방법 모두 비슷한 상황임 -> 이런 상황에서는 구현방법이 더 간단한 DFS를 사용
 */
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = Array.from(Array(N + 1), () => []);
const visited = Array(N + 1).fill(false);

// 에지 저장
input.forEach((line) => {
  const [a, b] = line.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

function dfs(s) {
  visited[s] = true;
  for (let n of graph[s]) {
    if (!visited[n]) {
      dfs(n);
    }
  }
}

let cnt = 0;
for (let i = 1; i <= N; i++) {
  // 1번부터 N번까지 정점 검사
  if (!visited[i]) {
    dfs(i);
    cnt++;
  }
}

console.log(cnt);
