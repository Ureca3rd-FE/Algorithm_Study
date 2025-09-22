const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 백준 10950번 A+B - 3
/*
입력예제
5
1 1
2 3
3 4
9 8
5 2
*/

// input은 "\n"을 구분자로 하여 총 6개의 요소로 이뤄진 리스트
// const T = input[0];
// for (let i = 1; i <= T; i++) {
//   let [A, B] = input[i].split(" ");
//   console.log(A, B);
// }

const T = input[0];
function add(A, B) {
  let sum = A + B;
  return sum;
}
for (let i = 1; i <= T; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  let answer = add(A, B);
  console.log(answer);
}
