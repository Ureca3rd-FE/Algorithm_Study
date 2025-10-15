### 10866 - 덱

- 메모리: `12872KB`
- 시간: `176ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

// 덱 역할을 하는 배열
const dequeue = [];
const ans = [];

// 반복 횟수
const N = +input.shift();

for (let i = 0; i < N; i++) {
  if (input[i].includes("push")) {
    const [_, num] = input[i].split(" ");
    // 뒤에 삽입
    if (input[i].includes("back")) {
      dequeue.push(num);
      continue;
    }
    // 앞에 삽입
    dequeue.unshift(num);
    continue;
  }

  // 비어있는지 여부
  const isEmpty = dequeue.length === 0;

  if (input[i] === "pop_front") {
    // 앞에서 제거
    ans.push(isEmpty ? -1 : dequeue.shift());
    continue;
  }

  if (input[i] === "pop_back") {
    // 뒤에서 제거
    ans.push(isEmpty ? -1 : dequeue.pop());
    continue;
  }

  if (input[i] === "size") {
    // 배열 길이가 곧 덱의 크기
    ans.push(dequeue.length);
    continue;
  }

  if (input[i] === "front") {
    // 첫 번째 요소 반환
    ans.push(isEmpty ? -1 : dequeue[0]);
    continue;
  }

  if (input[i] === "back") {
    // 마지막 요소 반환
    ans.push(isEmpty ? -1 : dequeue.at(-1));
    continue;
  }

  // empty의 경우
  ans.push(isEmpty ? 1 : 0);
}

console.log(ans.join("\n"));
```
