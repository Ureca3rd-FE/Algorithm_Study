### 백준 1874번 스택 순열

#### - 유형 : 자료구조, 스택

#### - 입력예제

```
8
4
3
6
8
7
5
2
1
```

#### - 유도코드

1. 배열 내에서 조건을 확인하는 방법
   스택에 삽입할때 오름차순으로 넣으므로, 입력예제의 수열은 내림차순을 유지해야함. -> 오름차순의 스택을 출력하면 내림차순으로 나오므로.
   NO가 출력되는 조건 : 입력예제가 오름차순인 경우 && 오름차순인 요소들의 차이가 1인 경우
   전제 : 입력예제의 두번째행을 배열의 첫번째로 요소로 하는 수열로 나열

2. 배열과 스택에서 조건을 확인하는 방법
   - stack=[], pointer=1, answer=[], find=true 선언
   - 두번째행부터 for문 시작 (i=1; i<=n)
   - for문 내부 수행 로직
     1. input배열에서 인덱스로 요소 확인 : const number = input[i]
     2. 1부터 number까지 stack에 오름차순으로 삽입 + stack에 추가할 때 마다 pointer++ 후에 answer.push("+")
     3. stack의 top을 확인, top === number면 pop 후에 answer.push("-")
     4. top !== number이면 "NO"출력, find = false, break 순으로 수행
     5. find = true이면 answer.join("\n")으로 정답출력

#### - 알게된 점

- 로직의 시행착오
  1. 입력예제 배열의 앞뒤를 비교하여 판단
  2. 입력예제와 stack을 비교하여 판단
  - 1번으로 할 시 마지막 요소를 비교할 조건판단 확인 방법이 모호
  - NO가 나오는 경우는 마지막에 나오도록 -> 앞에서 확인할 시 반복할때 마다 확인 하게됨
- find 불린형 변수의 필요성
  1. NO를 출력 시 find = false
  2. NO를 출력하지 않을 시 find = true

### 코드 구현

#### - 언어 : JavaScript

#### - 메모리 : 33116 KB

#### - 시간 : 220 ms

```js
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input.shift());
const stack = [];
let answer = [];
let pointer = 1;
let find = true;

for (let i = 0; i < n; i++) {
  const number = parseInt(input[i]);

  if (number >= pointer) {
    for (let j = pointer; j <= number; j++) {
      stack.push(j);
      answer.push("+");
      pointer++;
    }
  }

  if (number === stack[stack.length - 1]) {
    stack.pop();
    answer.push("-");
  } else {
    console.log("NO");
    find = false;
    break;
  }
}
if (find) {
  console.log(answer.join("\n"));
}
```
