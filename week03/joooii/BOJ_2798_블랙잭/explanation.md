### 2798 - 블랙잭

- 메모리: `9632KB`
- 시간: `152ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let cards = input[1].split(" ").map(Number);

let sum = 0;
let result = 0;

for (i = 0; i < n - 2; i++) {
  for (j = i + 1; j < n - 1; j++) {
    for (k = j + 1; k < n; k++) {
      // 3중 for문을 사용해서 3개의 카드의 합을 구한다.
      sum = cards[i] + cards[j] + cards[k];

      // 만약 sum (카드의 합) = m이면 최댓값이므로 멈춘다.
      if (sum === m) {
        result = sum;
        break;
      }
      // sum이 m보다 작고, sum이 result보다 크면 아직 최댓값이 아니므로 계속 진행한다.
      if (sum < m && sum > result) {
        result = sum;
      }
    }
  }
}

console.log(result);
```
