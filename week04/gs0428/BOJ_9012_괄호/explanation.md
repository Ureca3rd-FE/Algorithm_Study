### 9012 - 괄호

- 메모리: `9384KB`
- 시간: `96ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const ans = [];

input.splice(1).forEach((str) => {
  // 스택으로 관리
  const stack = [];

  // 괄호의 상태가 정상인지 여부
  let isValid = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      // 여는 괄호라면 무조건 push
      stack.push("(");
      continue;
    }

    // 스택에 아무것도 없는데 빼려고 하면 잘못된 경우
    if (stack.length === 0) {
      isValid = false;
      break;
    }
    // 스택에서 괄호 1개 제거
    stack.pop();
  }

  // 반복문이 끝났을 때 괄호 상태가 비정상이거나
  // 스택에 남은 괄호가 있는 경우 올바르지 않은 문자열
  if (!isValid || stack.length > 0) {
    ans.push("NO");
  } else {
    ans.push("YES");
  }
});

console.log(ans.join("\n"));
```
