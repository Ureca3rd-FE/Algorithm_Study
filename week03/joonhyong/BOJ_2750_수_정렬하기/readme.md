### 백준 2750번 수 정렬하기

#### - 유형 : 구현, 정렬

#### - 입력예제

```
5
5
2
3
4
1
```

#### - 유도코드

1. input배열 내 요소들을 적절하게 할당.
2. 문제에서 입력요소는 중복되지 않는다고 명시했으므로 중복제거 작업은 필요없음.
3. Array.sort((a,b)=> a-b)로 오름차순 정렬.
4. 배열 내 요소 순차 출력.

#### - 부족한 점

1. Array.sort((a,b)=> a-b)의 오름차순 과정 정확히 이해하기. -> 암기로 코드작성하면 나중에 한계가 찾아오므로.
2. 집합(Set) 출력 방법. -> 중복제거가 필요한 줄알고 배열을 집합으로 변환했는데 출력방법이 다른 것을 알게되었음.
   - for (let value of set변수) console.log(value);

### 코드 구현

#### - 언어 : JavaScript

#### - 메모리 :

#### - 시간 :

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = input.shift();
const arr = [];
// input배열에서 첫번째 행을 제외한 행들을 arr배열에 요소로 추가
while (!(input.length === 0)) {
  arr.push(Number(input.shift()));
}

// 배열 내 요소 오름차순 정렬
arr.sort((a, b) => a - b);

// 배열 순차 출력
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
