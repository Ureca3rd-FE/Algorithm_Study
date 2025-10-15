### 10828 - 스택

- 메모리: `12776KB`
- 시간: `168ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input[0]);
let words = input.slice(1);
let stack = [];
let result = [];

for (i = 0; i < n; i++) {
  let command = words[i].split(" ");

  // push
  if (command[0] === "push") {
    stack.push(Number(command[1]));
  }

  // pop
  if (command[0] === "pop") {
    result.push(stack.length ? stack.pop() : -1);
  }

  // size
  if (command[0] === "size") {
    result.push(stack.length);
  }

  // empty
  if (command[0] === "empty") {
    result.push(stack.length === 0 ? 1 : 0);
  }

  // top
  if (command[0] === "top") {
    result.push(stack.length ? stack[stack.length - 1] : -1);
  }
}

console.log(result.join("\n"));
```

### 시행착오

1. 처음엔 words.includes로 접근했음 -> 이건 배열 전체에 push 라는 문자열이 하나라도 포함되어 있으면 항상 true

   -> 그렇기에 각 줄의 명령어를 처리하는 것은 words[i]로 접근했어야 했음

2. 바로 console.log로 찍으려 했음

   -> 시간초과의 위험이 있기 때문에 result 배열에 담은 후 join으로 한번에 출력하는 방식 권장
