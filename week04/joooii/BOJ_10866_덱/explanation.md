### 10866 - 덱

- 메모리: `12684KB`
- 시간: `164ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input[0]);
let words = input.slice(1);
let deque = [];
let result = [];

for (i = 0; i < n; i++) {
  let command = words[i].split(" ");
  if (command[0] === "push_front") {
    deque.unshift(command[1]);
  }
  if (command[0] === "push_back") {
    deque.push(command[1]);
  }
  if (command[0] === "pop_front") {
    result.push(deque.length ? deque.shift() : -1);
  }
  if (command[0] === "pop_back") {
    result.push(deque.length ? deque.pop() : -1);
  }
  if (command[0] === "size") {
    result.push(deque.length);
  }
  if (command[0] === "empty") {
    result.push(deque.length === 0 ? 1 : 0);
  }
  if (command[0] === "front") {
    result.push(deque.length ? deque[0] : -1);
  }
  if (command[0] === "back") {
    result.push(deque.length ? deque[deque.length - 1] : -1);
  }
}

console.log(result.join("\n"));
```

### 시행착오

- push/pop, unshift/shift의 배열 앞, 뒤 위치가 헷갈렸다.
