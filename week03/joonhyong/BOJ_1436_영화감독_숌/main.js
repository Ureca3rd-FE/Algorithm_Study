// 백준 1436번 영화감독 숌
// 유형 : 브루트포스
/* 입력예제
500
*/
/* 유도코드
반복문으로 1부터 1씩 증가시키면서 순회하다가 
각자리의 수들을 확인하고 6이 3개면 cnt++
cnt === N일때 break
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
let i = 0;
let cnt = 0;

while (1) {
  i++;
  const str = String(i);
  if (str.includes("666")) cnt++;
  if (cnt === N) break;
}

console.log(i);
