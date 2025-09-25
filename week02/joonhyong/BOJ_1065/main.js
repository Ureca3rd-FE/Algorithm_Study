// 백준 1065번 한수
/*입력예제
110
*/

/* 유도코드
1) 입력값을 문자열로 변환 후 자리수가 2개까지는 카운팅
2) 입력값을 문자열로 변환 후 자리수가 3개이상인 경우, 각 자리의 숫자들로 이뤄진 배열로 변환
3) 앞뒤의 차이가 동일한지 확인하는 내용을, 배열의 두번째 요소부터 맨마지막에서 두번째 요소까지 반복하는 내부for문 작성
4) 앞뒤의 차이가 동일하다면, 다음 자리숫자에서 수행 (continue), 앞뒤의 차이가 동일하지 않다면, 다음 숫자로 넘어감 (break)
5) 내부for문이 종료되면 카운팅
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
let cnt = 0;
outer: for (let i = 1; i <= N; i++) {
  // 항이 1~2개인 수열은 등차수열로 볼 수 있음
  if (i.toString().length <= 2) {
    cnt++;
    continue;
  }
  // 항이 3개 이상인 경우
  let arr = i.toString().split("").map(Number);
  // 배열의 전체인덱스 : 0 ~ length-1
  // 반복문을 돌릴 인덱스 범위 : 1 ~ length-2
  for (let j = 1; j < arr.length - 1; j++) {
    if (arr[j] - arr[j - 1] === arr[j + 1] - arr[j]) continue;
    else continue outer;
    // else break outer; -> break는 for탈출 + continue는 for문의 다음스텝 진행 + continue 또한 break와 함께 쓸 수 있음
  }
  cnt++;
}

console.log(cnt);
