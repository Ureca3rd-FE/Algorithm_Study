### 9012 - 괄호

- 메모리: `9476KB`
- 시간: `96ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input[0]);
let brace = input.slice(1);
let result = [];

for (i = 0; i < n; i++) {
  let stack = [];
  let line = brace[i].split("");
  let isValid = true;

  for (let ch of line) {
    if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.length === 0) {
        isValid = false;
        break;
      } else {
        stack.pop();
      }
    }
  }

  if (isValid && stack.length === 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}
console.log(result.join("\n"));
```

### 시행착오

1. 짝이 맞는지 판별하는 isValid 변수가 떠오르지 않아서 첫번째 예시의 첫 번째 값이 YES가 나옴
   -> (())())을 입력을 했을 때, 마지막 ')'가 오기 전에 스택이 비어있었기 때문에 이미 오류 상황이었으나 (stack.length === 0 이기 때문에 YES가 됨), isValid로 짝이 맞는지 체크하지 않아 YES가 출력된 것
2. isValid로 괄호 짝을 판별하는 코드를 추가해서 해결함

### 풀이과정

1. 괄호를 입력받는다
2. 한 줄의 괄호들을 하나씩 순회한다
3. 순회하면서 ch가 '('이 나오면 스택에 담는다
4. ')'이 나오면 스택에서 '('을 pop한다
5. 만약 한 줄의 끝까지 갔을 때

   - 짝이 맞거나 stack.length === 0 이면 YES를 출력

   - stack.length !== 0 이면 NO를 출력
