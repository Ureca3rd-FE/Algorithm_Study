### 2798 - 블랙잭

- 메모리: `10464KB`
- 시간: `152ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const cards = input[0].split(" ").map(Number);

// 3장 뽑으면 되므로 nCr에서 r은 3
const r = 3;

const numbers = [];
let ans = 0;

// 조합 사용
function comb(depth, start) {
  if (depth === r) {
    const sum = numbers.reduce((acc, cur) => acc + cur);
    // M보다 작거나 같을 때 최대 값을 ans로 설정
    if (sum <= M) {
      ans = Math.max(sum, ans);
    }
    return;
  }

  for (let i = start; i < N; i++) {
    numbers[depth] = cards[i];
    comb(depth + 1, i + 1);
  }
}

comb(0, 0);

// 정답 출력
console.log(ans);
```
