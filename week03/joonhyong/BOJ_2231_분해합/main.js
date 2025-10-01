// 백준 2231번 분해합
// 유형 : 브루트포스
/* 입력예제
216
*/
/* 유도코드
생성자를 받아서 분해합을 반환하는 함수 create() 생성
반복문으로 create(i) === N일때 마다 정답후보를 모아놓은 배열에 push()
배열의 길이가 0이면 0 출력 (생성자가 없는 경우)
배열의 길이가 0보다 긴 경우 Math.min(...배열)로 최소값 출력
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

function create(n) {
  const arr = n.toString().split("").map(Number);
  let answer = n;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}

let i = 1;
let answerList = [];
// while (1) {
//   let a = create(i);
//   if (a === N) {
//     answrList.push(i);
//     break;
//   }
//   i++;
// }

for (let i = 1; i <= N; i++) {
  const sum = create(i);
  if (sum === N) {
    answerList.push(i);
  }
}

if (answerList.length === 0) {
  console.log(0);
} else {
  console.log(Math.min(...answerList));
}
