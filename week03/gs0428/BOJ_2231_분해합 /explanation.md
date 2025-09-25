### 2231 - 분해합

- 메모리: `27988KB`
- 시간: `396ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];

let i = 1;

while (i <= N) {
  // 분해합 진행
  const sum =
    i
      .toString()
      .split("")
      .reduce((acc, cur) => acc + +cur, 0) + i;

  // 분해합이 N과 같다면 해당 숫자 출력
  if (sum === N) {
    console.log(i);
    process.exit(0);
  }
  i++;
}

// 반복문이 끝났다면 아무것도 아니기 때문에 0 출력
console.log(0);
```
