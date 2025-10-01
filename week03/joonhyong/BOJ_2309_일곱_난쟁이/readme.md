### 백준 2309번 일곱 난쟁이

#### - 유형 : 완전탐색, 정렬

#### - 입력예제

```
20
7
23
19
10
15
25
8
13
```

#### - 유도코드

1. 확인해볼 난쟁이 조합"을 "확인하기 전 난쟁이 배열"의 인덱스 순으로 뽑는다.
2. 9명 중 7명씩 조합을 추출해내서 합이 100인지 확인. -> 재귀함수 이용
3. 100인 경우 재귀함수를 return하여 종료. -> 이때, 일곱난쟁이를 못찾는 경우는 없으므로 if문내의 return 하나만 작성해도 괜찮음
4. after.sort((a,b)=> a-b)로 오름차순으로 정렬.
5. after 배열의 요소들을 순차출력.

#### - 부족한 점

1. 자바스크립트로 배열내 요소들을 오름차순(내림차순)으로 정렬하는 방법.
2. 조합을 재귀함수로 구현하는 방법.
3. 재귀함수 내에서 조건충족시 탈출하는 방법. -> found 플래그 사용

### 코드 구현

#### - 언어 : JavaScript

#### - 메모리 : 9352 KB

#### - 시간 : 92 ms

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const before = [];
const after = [];
const answer = [];

while (!(input.length === 0)) {
  let num = Number(input.shift());
  before.push(num);
}

function combi(d, s) {
  // 기저조건
  if (d === 7) {
    let sum = 0;
    for (let j = 0; j < 7; j++) {
      sum += after[j];
    }
    if (sum === 100) {
      for (let k = 0; k < 7; k++) {
        answer[k] = after[k];
      }
      return;
    }
  }
  // 재귀호출
  for (let i = s; i < 9; i++) {
    after[d] = before[i];
    combi(d + 1, i + 1);
  }
}

// 재귀함수 실행
combi(0, 0);

// 정답배열 오름차순 정렬
answer.sort((a, b) => a - b);

// 정답배열 순차출력
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}
```
