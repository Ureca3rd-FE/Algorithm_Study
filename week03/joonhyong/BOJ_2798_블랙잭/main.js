// 백준 2798번 블랙잭
// 유형 : 브루트포스
/* 입력예제
5 21
5 6 7 8 9
*/
/* 유도코드
(1) 재귀함수
3개의 조합을 배열로 뽑고, 배열의 합을 구함
배열의 합이 M보다 작고 answer보다 크면 answer = sum
만약 sum===M이면 answer = sum, 재귀탈출
(2) 중첩 for문 
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const cards = input.shift().split(" ").map(Number);

let sum = 0;
let answer = 0;

top: for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = cards[i] + cards[j] + cards[k];
      if (sum === M) {
        answer = sum;
        break top;
      }
      if (sum < M && sum > answer) {
        answer = sum;
      }
    }
  }
}

console.log(answer);
// const selected = [];

// let sum = 0;
// let answer = 0;

// function rec(depth, start) {
//   if (depth === 3) {

//     // sum = 0;
//     // for (let i = 0; i < 3; i++) {
//     //   sum += selected[i];
//     // }
//     // if (sum <= M && sum > answer) {
//     //   answer = sum;
//     //   return;
//     // }
//     // if (sum === M) {
//     //   answer = sum;
//     //   return;
//     // }
//   }
//   for (let i = start; i < N; i++) {
//     selected[depth] = cards[i];
//     rec(depth + 1, i + 1);
//   }
// }

// rec(0, 0);
// console.log(answer);
