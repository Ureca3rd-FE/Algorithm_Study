### 1181 - 단어 정렬

- 메모리: `23908KB`
- 시간: `954ms`

### 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input[0]);
let words = input.slice(1);

// 입력받은 words를 Set을 사용해서 중복된 단어를 제거해서 배열에 저장한다.
let uniqueWords = [...new Set(words)];

uniqueWords.sort((a, b) => {
  // 글자수가 같으면 localeCompare를 사용해서 알파벳 순서를 비교해서 return한다.
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  // 다르다면 우선적으로 글자수가 짧은 단어부터 나열한다.
  return a.length - b.length;
});

for (i = 0; i < uniqueWords.length; i++) {
  console.log(uniqueWords[i]);
}
```
