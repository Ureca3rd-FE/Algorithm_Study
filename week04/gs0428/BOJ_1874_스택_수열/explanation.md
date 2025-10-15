### 1874 - 스택 수열

- 메모리: `33740KB`
- 시간: `208ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

// 수열의 길이
const n = +input.shift();

// 결과 저장 배열
const ans = [];

// 스택 역할을 하는 배열
const stack = [];

// 1부터 n까지 차례로 스택에 넣을 때 사용할 현재 숫자 포인터
let curNum = 1;

for (let i = 0; i < n; i++) {
  // 현재 만들어야 할 수열의 목표 숫자
  const num = +input[i];

  // 현재 숫자가 목표 숫자보다 작거나 같을 때까지 push
  // 스택에 오름차순으로 쌓기
  while (curNum <= num) {
    stack.push(curNum++); // 스택에 넣고 다음 숫자로 이동
    ans.push("+"); // push 기록
  }

  // 가장 위의 숫자를 pop
  const pop = stack.pop();
  ans.push("-"); // pop 기록

  // pop한 값이 목표 숫자와 다르면 불가능한 수열
  if (pop !== num) {
    return console.log("NO");
  }
}

// 모든 연산이 가능하면 연산 기록을 출력
console.log(ans.join("\n"));
```
