### 10828 - 스택

- 메모리: `12372KB`
- 시간: `168ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

// 현재 스택 위치를 나타내는 포인터
let head = -1;

// 스택 역할을 하는 arr
const arr = [];
const ans = [];

// 반복 횟수
const N = +input.shift();

for (let i = 0; i < N; i++) {
  // push인 경우에만 split하여 숫자 삽입
  if (input[i].includes("push")) {
    const [_, num] = input[i].split(" ");
    // 포인터 선 증가 후 해당 위치에 숫자 할당
    arr[++head] = num;
    continue;
  }

  if (input[i] === "top") {
    // 포인터가 -1이라면 아무것도 없기 때문에 -1을 삽입
    // 아니라면 맨 위에 있는 요소 삽입
    ans.push(head === -1 ? -1 : arr[head]);
    continue;
  }

  if (input[i] === "pop") {
    // top과 동일
    // 맨 위에 있는 요소 뺀 후 포인터 감소
    ans.push(head === -1 ? -1 : arr[head--]);
    continue;
  }

  if (input[i] === "size") {
    // head가 0일 때 요소가 1개이므로
    // head + 1을 한 결과가 size
    ans.push(head + 1);
    continue;
  }

  // empty의 경우
  // head가 -1이라면 비어있는 경우이기 때문에 1을 삽입
  // 아니라면 0을 삽입
  ans.push(head === -1 ? 1 : 0);
}

console.log(ans.join("\n"));
```
