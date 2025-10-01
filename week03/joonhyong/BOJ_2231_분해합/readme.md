### 백준 2231번 분해합

#### - 유형 : 완전탐색

#### - 입력예제

```
216
```

#### - 유도코드

1. 생성자를 받아서 분해합을 반환하는 함수 create() 생성
2. 반복문으로 create(i) === N일때 마다 정답후보를 모아놓은 배열(answeList)에 push()
3. 배열의 길이가 0이면 0 출력 (생성자가 없는 경우)
4. 배열의 길이가 0보다 긴 경우 Math.min(...배열)로 최소값 출력

#### - 부족한 점

1. 예외상황 처리 - 생성자가 없는 상황을 구현. -> 이 부분때문에 틀렸음.
2. 전개구문 사용 방법. -> Math함수 이용시 인자로 배열을 삽입시 NaN 반환.
   - e.g. Math.min(...answerList)

### 코드 구현

#### - 언어 : JavaScript

#### - 메모리 : 45984 KB

#### - 시간 : 648 ms

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

// 분해합 수행 함수 create()
function create(n) {
  const arr = n.toString().split("").map(Number);
  let answer = n;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}

let i = 1;
let answerList = [];

for (let i = 1; i <= N; i++) {
  const sum = create(i);
  // 분해합 값이 N인 경우마다 생성자를 정답후보 배열에 추가
  if (sum === N) {
    answerList.push(i);
  }
}

// 예외상황 처리하여 정답 출력
if (answerList.length === 0) {
  console.log(0);
} else {
  // 정답후보 배열에서 최솟값 출력
  console.log(Math.min(...answerList));
}
```
