### 백준 1436번 영화감독 숌

#### - 유형 : 완전탐색

#### - 입력예제

```
187
```

#### - 유도코드

1. while 반복문으로 1부터 1씩 증가시키며 순회. (입력값이 1부터 가능하므로)
2. 수행내용
   - 각자리의 수들을 문자열로 변환.
   - 문자열 "666"이 포함되어 있으면 cnt++
   - 조건문으로 cnt === N일때 break;
3. cnt === N일때 break;
4. i자체가 정답출력 대상.

#### - 부족한 점

1. 문자열 내에 포함된 요소를 확인하는 메서드를 바로 못떠올림.
2. 반복문 탈출 후에 어떤 값을 출력대상으로 하는지에 대한 인지능력 상승요함.

### 코드 구현

#### - 언어 : JavaScript

#### - 메모리 : 23284 KB

#### - 시간 : 392 ms

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
let i = 0;
let cnt = 0;

while (1) {
  i++;
  // "666"이 포함되었는지 확인하기 위한 문자열 변환
  const str = String(i);
  // 666이 포함된 숫자가 몇번째인지 확인하기 위한 행
  if (str.includes("666")) cnt++;
  // N번째 숫자임을 확인하면 while문 탈출
  if (cnt === N) break;
}

// N번쨰 숫자를 정답으로 출력
console.log(i);
```
