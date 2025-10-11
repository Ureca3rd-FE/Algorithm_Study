### 10845 - 큐

- 메모리: `12276KB`
- 시간: `168ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

// 큐의 앞과 뒤를 나타낼 변수들
let head = -1;
let rear = -1;

// 큐 역할을 하는 arr
const arr = [];
const ans = [];

// 반복 횟수
const N = +input.shift();

for (let i = 0; i < N; i++) {
  // push인 경우에만 split하여 숫자 삽입
  if (input[i].includes("push")) {
    const [_, num] = input[i].split(" ");
    // rear 선 증가 후 해당 위치에 숫자 할당
    arr[++rear] = num;
    continue;
  }

  // front와 rear가 같다면 비어있는 상태

  if (input[i] === "pop") {
    // head 선 증가 후 해당 요소 삽입
    ans.push(head === rear ? -1 : arr[++head]);
    continue;
  }

  if (input[i] === "size") {
    // rear와 head의 차이가 size
    ans.push(rear - head);
    continue;
  }

  if (input[i] === "front") {
    // pop을 하지 않으니 head를 직접 증가시키지 않음
    ans.push(head === rear ? -1 : arr[head + 1]);
    continue;
  }

  if (input[i] === "back") {
    // rear 위치의 요소 반환
    ans.push(head === rear ? -1 : arr[rear]);
    continue;
  }

  // empty의 경우
  ans.push(head === rear ? 1 : 0);
}

console.log(ans.join("\n"));
```
