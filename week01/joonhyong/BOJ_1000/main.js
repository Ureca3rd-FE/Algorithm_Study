const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../exam.txt")
  .toString()
  .trim();
// 백준 1000번 A+B
/*
입력예제
1 2
*/
const [A, B] = input.map(Number);

function add(a, b) {
  console.log(a + b);
}

add(A, B);
