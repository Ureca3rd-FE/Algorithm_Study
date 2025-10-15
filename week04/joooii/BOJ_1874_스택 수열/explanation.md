### 1874 - 스택 수열

- 메모리: `34456KB`
- 시간: `212ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

let n = input[0];
let su = input.slice(1);
let stack = [];
let result = [];
let count = 1;
let isPossible = true;

for (i = 0; i < n; i++) {
  let target = su[i];

  while (count <= target) {
    stack.push(count);
    result.push("+");
    count++;
  }

  if (stack[stack.length - 1] === target) {
    stack.pop();
    result.push("-");
  } else {
    isPossible = false;
    break;
  }
}

if (isPossible) {
  console.log(result.join("\n"));
} else {
  console.log("NO");
}
```

### 시행착오

1. console을 for문 안에서 찍어서 출력초과가 났음

### 풀이과정

결론: 출력값이 만든 수열인 것 (or NO) -> 1~n까지의 수를 늘여놔서 push, pop을 해가지고 출력값의 수열을 만들어가는 것

1. 스택에 1부터 넣으면서 결과값(target)과 계속 비교한다. (count로 push를 몇번했는지 체크)
2. 만약 결과값(target)과 스택의 마지막 값(count)이

   - 다르다면 push
   - 같다면 pop을 한다

3. push,pop에 해당하는 +,-를 result 배열에 담는다.
4. 출력
   - 수열로 만드는 것이 가능한 경우 -> result.join("\n")
   - 수열로 만드는 것이 불가능한 경우 -> NO
