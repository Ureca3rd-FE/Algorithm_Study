### 1436 - 영화감독 숌

- 메모리: `23252KB`
- 시간: `384ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = +input[0];

/**
 * 반복문 처음에 i++을 해주고
 * 666부터 숫자 세면 되기 때문에
 * 초기 값은 665
 */
let i = 665;

// N이 0보다 클 때 반복
while (N > 0) {
  i++;
  // 문자에 666이 포함되어 있으면 N 감소
  if (i.toString().includes("666")) {
    N--;
  }
}

// 정답 출력
console.log(i);
```
