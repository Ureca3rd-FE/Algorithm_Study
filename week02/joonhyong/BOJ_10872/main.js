const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 백준 10872번 팩토리얼
/*
입력예제
5
*/
const n = Number(input);
function fac(d) {
  // d===1로 할 경우 런타임 에러 (StackSizeExceeded) 발생 <- 입력값 N이 0초과가 아닌 0이상이었음.
  if (d <= 1) {
    return 1;
  }
  return d * fac(d - 1);
}
console.log(fac(n));
