### 2750 - 수 정렬하기

- 메모리: `9404KB`
- 시간: `100ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(
  // 내장 sort 사용 후 출력
  input
    .splice(1)
    .sort((a, b) => +a - +b)
    .join("\n")
);
```
