### 2309 - 일곱난쟁이

- 메모리: `9332KB`
- 시간: `92ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

const total = input.reduce((a, b) => a + b, 0);
let answer = [];

for (i = 0; i < 9; i++) {
  for (j = i + 1; j < 9; j++) {
    if (total - input[i] - input[j] === 100) {
      answer = input.filter((_, idx) => idx !== i && idx !== j);
      break;
    }
  }
  if (answer.length > 0) break;
}

answer.sort((a, b) => a - b);
console.log(answer.join("\n"));
```
