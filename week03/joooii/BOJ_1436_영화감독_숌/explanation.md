### 2231 - 분해합

- 메모리: `23276KB`
- 시간: `376ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

let n = Number(input);
let result = 0;
let count = 0;
// while(true)는 무한반복임을 사용해서 숫자(result)를 1씩 증가시킨다.
while (true) {
  result += 1;
  // result를 문자열로 변환시켜 문자열 안에 666이 포함되면 count를 1씩 증가시킨다.
  if (result.toString().includes("666")) {
    count++;
    // 입력값인 n과 count가 같으면 루프를 멈추고 result를 출력한다.
    if (n === count) {
      console.log(result);
      break;
    }
  }
}

// while(true) 말고 다른 방법은 while(count > n)일 때 루프를 도는 방법도 있다.
// 아예 시작 숫자를 665부터 시작하는 것도 방법 -> 불필요한 연산을 줄이기 때문에 시간 단축됨
let n = Number(input);
let start = 665;
let count = 0;

while (count > n) {
  start += 1;
  if (result.toString().includes("666")) {
    count++;
    if (n === count) {
      console.log(result);
      break;
    }
  }
}
```
