const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../exam.txt")
  .toString()
  .trim();
// 백준 1330 두 수 비교하기
/*
 입력예제
 1 2 
 */
const [A, B] = input.map(Number);
if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}
