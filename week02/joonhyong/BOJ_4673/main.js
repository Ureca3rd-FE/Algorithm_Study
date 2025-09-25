// 백준 4673번 셀프넘버

/* 유도코드 - 사용자 함수
1~10000의 숫자가 담겨져있는 배열을 생성한다. -> 1부터 10000까지의 숫자가 들어있는 배열 구현
1부터 순차적으로 생성자함수에 넣어서 생성되는 숫자를 배열에서 제거한다. -> 생성자 함수 d() 구현
생성자 함수란 해당 숫자로 만들어지는 다음 숫자를 반환하는 함수
생성된 숫자가 이전에 이미 제거한 숫자인 경우(중복될 경우) 건너뛴다. -> for문을 통해 배열의 생성자존재 숫자들을 제거
for이 끝난 후의 배열의 요소들을 순차적으로 출력한다.
 */
// const N = 10000;
// let arr = [];
// for (let i = 0; i < N; i++) {
//   arr[i] = i + 1;
// }

// function d(n) {
//   let str = String(n);
//   for (let i = 0; i < str.length; i++) {
//     n += Number(str[i]);
//   }
//   return n;
// }

// for (let i = 1; i <= N; i++) {
//   let target = d(i);
//   if (arr.includes(target)) {
//     let idx = arr.indexOf(target);
//     arr.splice(idx, 1);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

/* 유도코드 - 재귀
1~10000의 숫자가 담겨져있는 배열을 생성한다. -> 1부터 10000까지의 숫자가 들어있는 배열 구현
해당 숫자를 생성자로 하여 생성되는 숫자를 반환하는 생성자 함수 d() 구현
깊이가 1부터 N까지 재귀호출을 반복하는 재귀함수 rec() 구현
배열에서 생성자존재 숫자 제거과정은 동일
재귀함수가 끝난 후의 반환된 배열의 요소들을 순차적으로 출력한다.
 */
// 출력 범위
const N = 8000;
// 배열 생성
let arr = [];
for (let i = 0; i < N; i++) {
  arr[i] = i + 1;
}

// 생성자 함수
function d(n) {
  let str = String(n);
  let answer = n;
  for (let i = 0; i < str.length; i++) {
    answer += Number(str[i]);
  }
  return answer;
}

// 재귀 함수
// 주어지는 숫자가 10000이라면, 10000을 만드는 생성자를 찾아야함(어려움)
// 주어지는 숫자가 1이라면, 1로 생성되는 숫자를 반환(쉬움) - Bottom->Up 방식
function rec(depth) {
  // 기저조건
  if (depth > N) {
    return;
  }
  let target = d(depth);
  if (arr.includes(target)) {
    let idx = arr.indexOf(target);
    arr.splice(idx, 1);
  }
  // 유도파트
  return rec(depth + 1);
}

// 재귀함수 실행
rec(1);

// arr 순차대로 출력
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
