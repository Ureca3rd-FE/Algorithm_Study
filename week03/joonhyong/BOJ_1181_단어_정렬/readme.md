### 백준 1181번 단어 정렬

#### - 유형 : 정렬, 문자열

#### - 입력예제

```
13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours
```

#### - 유도코드

1. 예제입력의 첫번째 행을 제외한 행들을 요소로 갖는 배열 arr 생성.
2. arr 내 요소들을 순회.
   - 문자열의 길이를 기준으로 오름차순 정렬하되,
   - 문자열의 길이가 같은 경우에는 사전순으로 정렬
3. arr를 new Set(arr)로 반환하여 반복문으로 순차출력. -> 중복요소 제거후 순차 출력

#### - 부족한 점

1. Array.sort()에 추가적인 조건이 있을때 구현해내지 못함. (GPT 도움을 받음.)
2. Set은 정렬된 순서를 보장하지 않음 -> 중복제거 후에 정렬하는 순서 지키기.
3. Set 대신 추가로 filter나 Map을 활용해 중복을 제거하는 방법도 있음.

### 코드 구현

#### - 언어 : JavaScript

#### - 메모리 : 23528 KB

#### - 시간 : 1240 ms

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const arr = [];

while (!(input.length === 0)) {
  arr.push(input.shift().trim());
}

arr.sort((a, b) => {
  // 1. 문자열 길이 기준 오름차순 정렬
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  // 2. 길이가 같을 경우 사전순 정렬 (문자열 자체 비교)
  return a.localeCompare(b);
});

const answer = new Set(arr);

for (const value of answer) {
  console.log(value);
}
```
