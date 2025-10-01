### 2750 - 수 정렬하기

- 메모리: `11208KB`
- 시간: `156ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

let n = input[0];
let num = input.slice(1);

// 입력받은 배열을 오름차순 정렬
num.sort((a, b) => a - b);

// for문 돌려서 배열 내 값 출력
for (i = 0; i < n; i++) {
  console.log(num[i]);
}
```
