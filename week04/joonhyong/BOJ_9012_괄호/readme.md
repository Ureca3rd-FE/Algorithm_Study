### 백준 9012번 괄호

#### - 유형 : 자료구조, 문자열, 스택

#### - 입력예제

```
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(
```

#### - 유도코드

- stack1, stack2를 생성
- stack1에는 두번째 행 이후의 입력예제를 요소로 갖는 배열(스택)
- 스택의 가장 윗부분의 요소를 꺼내 아래의 동작을 수행

  1. "(" -> stack2의 가장 윗부분을 확인 하여 아래의 동작을 수행
     stack2가 비어있는 경우 -> NO 출력
     stack2의 요소가 있는 경우 -> stack1과 stack2를 pop!

  2. ")" -> stack2에 추가

- 해당 로직이 끝난 후 stack1과 stack2를 확인하여 아래의 동작을 수행

  1. stack1/stack2 모두 빈 경우 -> YES 출력
  2. 하나도 비어있지 않은 경우 -> NO 출력

#### - 알게된 점

### 코드 구현

#### - 언어 : JavaScript

#### - 메모리 : 9560 KB

#### - 시간 : 104 ms

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  const stack1 = input[i].trim().split("");
  const stack2 = [];

  while (stack1.length) {
    if (stack1[stack1.length - 1] === "(") {
      if (stack2.length) {
        stack1.pop();
        stack2.pop();
      } else break;
    } else if (stack1[stack1.length - 1] === ")") {
      stack2.push(stack1.pop());
    }
  }

  if (!stack1.length && !stack2.length) console.log("YES");
  else console.log("NO");
}
```
