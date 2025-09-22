// 백준 2675번 문자열 반복
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
/* 입력예제
2
3 ABC
5 /HTP
*/

const T = input[0];

for (let i = 1; i <= T; i++) {
  let answer = "";
  // 테스트케이스 반복문
  let [repeat, target] = input[i].split(" "); // 테스트케이스 내의 반복횟수, 반복대상 문자열 할당
  repeat = Number(repeat); // 반복횟수의 타입을 문자열형=>숫자형으로 변환
  for (let j = 0; j < target.length; j++) {
    // 문자열의 요소(문자)들에 접근
    for (let k = 0; k < repeat; k++) {
      // 반복횟수만큼
      answer += target[j]; // 문자열의 요소를 answer에 적재
    }
  }
  console.log(answer);
}

/* 입력예제
2
3 ABC
5 /HTP
*/
