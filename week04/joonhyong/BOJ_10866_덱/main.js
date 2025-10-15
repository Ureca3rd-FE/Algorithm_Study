// 백준 10866번 덱
// 분류 : 구현, 자료구조, 덱
/*입력예제
15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front
*/
/*유도코드
배열을 구현하고 메서드를 적절하게 사용하여 덱처럼 다루기
명령 종류 및 수행 동작
1. push_front x : 정수 x를 덱의 앞쪽에 삽입
2. push_back x : 정수 x를 덱의 뒤쪽에 삽입
3. pop_front : 덱의 가장 앞에 있는 수를 빼고, 출력. 덱이 비어있으면 -1 출력. 
4. pop_back : 덱의 가장 뒤에 있는 수를 빼고, 출력. 덱이 비어있으면 -1 출력. 
5. size : 덱에 들어있는 요소의 수를 출력.
6. empty : 덱이 비어있으면 1 출력. 비어있지않으면 0 출력.
7. front : 덱의 가장 앞에 있는 정수를 출력. 덱이 비어있으면 -1 출력.
8. back : 덱의 가장 뒤에 있는 정수를 출력. 덱이 비어있으면 -1 출력.

덱의 앞쪽은 배열의 0번째 인덱스
덱의 뒤쪽은 배열의 배열의 길이 - 1번째 인덱스
덱의 앞쪽에 추가/삭제 : arr.unshift()/arr.shift()
덱의 뒤쪽에 추가/삭제 : arr.push()/arr.pop()

입력예제의 명령 형태 : input[i].trim().slice(0, 9)
*/
/* 알게된 점
slice()작성 팁
잘라내려는 길이가 n이라면, 끝 인덱스를 n으로 작성하면됨.
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0]);
const deque = [];

for (let i = 1; i <= N; i++) {
  switch (input[i].trim().slice(0, 10)) {
    case "push_front":
      deque.unshift(input[i].trim().slice(11));
      break;
    case "push_back ":
      deque.push(input[i].trim().slice(10));
      break;
    case "pop_front":
      !!deque.length ? console.log(deque.shift()) : console.log(-1);
      break;
    case "pop_back":
      !!deque.length ? console.log(deque.pop()) : console.log(-1);
      break;
    case "size":
      console.log(deque.length);
      break;
    case "empty":
      !deque.length ? console.log(1) : console.log(0);
      break;
    case "front":
      !!deque.length ? console.log(deque[0]) : console.log(-1);
      break;
    case "back":
      !!deque.length ? console.log(deque[deque.length - 1]) : console.log(-1);
      break;
  }
}
