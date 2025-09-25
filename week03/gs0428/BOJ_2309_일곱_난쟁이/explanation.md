### 2309 - 일곱 난쟁이

- 메모리: `9296KB`
- 시간: `84ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// 난쟁이 배열
const dwarfs = input.map(Number);

const N = dwarfs.length;
const r = 7;

const numbers = [];

// 조합
function comb(depth, start) {
  if (depth === r) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    // 키의 합이 100일때
    if (sum === 100) {
      // 숫자 오름차순 정렬 후 출력
      console.log(numbers.sort((a, b) => a - b).join("\n"));
      process.exit(0);
    }
    return;
  }

  for (let i = start; i < N; i++) {
    numbers[depth] = dwarfs[i];
    comb(depth + 1, i + 1);
  }
}

comb(0, 0);
```
