### 백준 2798번 블랙잭

#### - 유형 : 완전탐색

#### - 입력예제

```
5 21
5 6 7 8 9
```

#### - 유도코드

1. 재귀함수
   - N장의 카드배열에서 3개의 조합을 배열로 뽑음. -> 재귀함수 이용
   - 배열 완성시 배열의 합을 구함.
   - 배열의 합이 M보다 작고 answer보다 크면 answer = sum
   - 만약 sum===M이면 answer = sum, 재귀탈출
2. 중첩 for문
   - N장의 카드배열에서 3개의 조합을 배열로 뽑음. -> 중첩for문 이용
   - 배열 완성시 배열의 합을 구함.
   - 배열의 합이 M보다 작고 answer보다 크면 answer = sum
   - 만약 sum===M이면 answer = sum, 재귀탈출

#### - 부족한 점

1. 조합을 **재귀함수** / **중첩for문** 으로 구현하는 방법. <- 시간초과시 문제조건에 유리한 방법으로 구현방법 정하기.
2.

### 코드 구현

#### - 언어 : JavaScript

#### - 메모리 : 9616 KB

#### - 시간 : 152 ms

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const cards = input.shift().split(" ").map(Number);

let sum = 0;
let answer = 0;

// 조합 뽑기
top: for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = cards[i] + cards[j] + cards[k];
      // 조건 확인 1 : 카드합이 M이면 전체 for문 탈출
      if (sum === M) {
        answer = sum;
        break top;
      }
      // 조건 확인 2: 카드합이 "M보다 작음" and "최댓값보다 큼" 을 충족하면 최댓값 갱신
      if (sum < M && sum > answer) {
        answer = sum;
      }
    }
  }
}

// 정답 출력
console.log(answer);
```

### 오답코드

#### 원인 : 시간초과

- 재귀함수의 구조를 개선해야 했음. (재귀함수의 인자에 카드의합을 추가하여 불필요한 작업 축소)
- 아직 "조합-재귀함수로 구현" 하는 구조를 암기를 바탕으로 작성하는 실력이기에 개선할 수 있는 능력이 부족함을 느낌.

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const cards = input.shift().split(" ").map(Number);
const selected = [];

let sum = 0;
let answer = 0;

function rec(depth, start) {
  if (depth === 3) {
    sum = 0;
    for (let i = 0; i < 3; i++) {
      sum += selected[i];
    }
    if (sum <= M && sum > answer) {
      answer = sum;
      return;
    }
    if (sum === M) {
      answer = sum;
      return;
    }
  }
  for (let i = start; i < N; i++) {
    selected[depth] = cards[i];
    rec(depth + 1, i + 1);
  }
}

rec(0, 0);
console.log(answer);
```
