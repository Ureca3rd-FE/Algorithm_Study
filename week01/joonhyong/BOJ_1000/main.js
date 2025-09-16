const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../exam.txt")
  .toString()
  .trim();
// 공백으로 구분된 한줄의 데이터를 입력받기
const [A, B] = input.map(Number);

function add(a, b) {
  console.log(a + b);
}

add(A, B);
