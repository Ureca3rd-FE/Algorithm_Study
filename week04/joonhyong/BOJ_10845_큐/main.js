// 백준 10845번 큐
// 분류 : 자료구조, 큐
/*입력예제
15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front
*/
/*유도코드
배열을 구현하고 메서드를 적절하게 사용하여 큐처럼 다루기
명령 종류 및 수행동작
1. push x : 정수 x를 큐에 삽입
2. pop : 큐의 가장 앞부분이 존재하면 빼고, 출력. 존재하지 않으면 -1 출력.
3. size : 큐에 들어있는 요소 개수 출력.
4. empty : 큐가 비어있으면 1 출력. 아니면 0 출력.
5. front : 큐의 가장 앞부분을 존재하면 출력. 존재하지 않으면 -1 출력.
6. back : 큐의 가장 뒷부분을 존재하면 출력. 존재하지 않으면 -1 출력.
입력예제의 첫 행은 변수 N에 할당
입력예제의 두번째 행부터 for문을 통해 무슨 명령인지 확인하고, 위의 수행을 동작. 
이때, 입력예제는 인덱스로 접근한다.
입력예제의 명령은 문자열의 0번째 인덱스부터 4번째 인덱스까지 slice함.
slice() 사용하는 이유 : push 명령은 입력할 값마다 형태가 다름. -> 형태를 통일하기 위해 사용.
4번째 인덱스까지 slice하는 이유 : 가장 긴 명령이 5글자이므로.
입력예제의 명령 형태 : input[i].trim().slice(0, 5)
*/
/* 알게된 점
배열을 queue로 다룰 때는 아래와 같다.
이때, 앞쪽은 인덱스 0번째를, 뒤쪽은 인덱스 배열의 길이-1번째를 가리킴.
요소 추가 : arr.push()
요소 삭제 : arr.shift()
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0], 10);
const queue = [];

for (let i = 1; i <= N; i++) {
  const order = input[i].trim().slice(0, 5);
  if (order === "push ") {
    queue.push(input[i].trim().slice(5));
  } else if (order === "pop") {
    !!queue.length ? console.log(queue.shift()) : console.log(-1);
    // console.log(queue[0]);
    // queue.shift();
  } else if (order === "size") {
    console.log(queue.length);
  } else if (order === "empty") {
    !queue.length ? console.log(1) : console.log(0);
  } else if (order === "front") {
    !!queue.length ? console.log(queue[0]) : console.log(-1);
  } else if (order === "back") {
    !!queue.length ? console.log(queue[queue.length - 1]) : console.log(-1);
  }
}
