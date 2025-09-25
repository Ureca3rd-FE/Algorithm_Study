### 1181 - 단어 정렬

- 메모리: `19640KB`
- 시간: `220ms`

#### 코드

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// 단어 중복 제거
const words = Array.from(new Set(input.splice(1)));

console.log(
  words
    .sort((a, b) => {
      // 길이가 같다면 문자열 비교로 정렬
      if (a.length === b.length) {
        return a.localeCompare(b);
      }
      // 아니라면 길이로 정렬
      return a.length - b.length;
    })
    // sort한 결과물 join 후 출력
    .join("\n")
);
```
