### 백준 10828번 스택

#### - 유형 : 구현, 자료구조, 스택

#### - 입력예제

```
14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top
```

#### - 유도코드

- 배열을 구현하고 메서드를 적절하게 사용하여 스택처럼 다루기
- 이때 입력예제와 비교하는 형태 : input[i].trim().slice(0,5)

  - 입력값이 "push n"의 경우 뒤(n)부분이 입력되는 값들 마다 다르므로 slice()로 작성함.
  - trim()은 window환경에서 생기는 캐리지리턴을 삭제하기 위함.

- 명령종류 및 수행동작
  1. push n : n을 stack에 push()
  2. pop : stack의 가장 마지막(위) 요소를 빼고 출력. 스택이 비어있으면 -1 출력.
  3. size : 스택에 들어있는 정수의 개수 출력.
  4. empty : 스택이 비어있으면 1출력. 비어있지않으면 0출력.
  5. top : 스택의 가장 위에 있는 정수를 출력. 스택이 비어있으면 -1을 출력.

#### - 알게된 점

1. slice()/substring() 메서드 사용 방법을 알게됨. (substr() 사용은 지양하는 추세)
2. push n 입력예제를 처리하는 부분에서 n부분을 인덱스로 처리할 경우 2자리수 이상의 값은 온전하게 stack에 추가하지 못함.
   - input[i][5]가 아닌 input[i].slice(5)로 작성하면 해결됨!
3. 스택의 역할을 수행하는 클래스를 구현하는 방법으로도 접근이 가능하다는 걸 알게됨.

### 코드 구현

#### - 언어 : JavaScript

#### - 메모리 : 14328 KB

#### - 시간 : 492 ms

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0], 10);
const stack = [];

for (let i = 1; i <= N; i++) {
  switch (input[i].trim().slice(0, 5)) {
    case "push ":
      stack.push(input[i].slice(5));
      break;
    case "pop":
      !!stack.length ? console.log(stack[stack.length - 1]) : console.log(-1);
      stack.pop();
      break;
    case "size":
      console.log(stack.length);
      break;
    case "empty":
      !stack.length ? console.log(1) : console.log(0);
      break;
    case "top":
      !!stack.length ? console.log(stack[stack.length - 1]) : console.log(-1);
      break;
  }
}
```
