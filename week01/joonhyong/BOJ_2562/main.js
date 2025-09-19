const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 백준 2562번 최댓값
/*
입력예제
3
29
38
12
57
74
40
85
61
*/
const max = Math.max(...input);
let cnt = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] == max) {
    cnt++;
    break;
  } else {
    cnt++;
    continue;
  }
}

console.log(max);
console.log(cnt);
