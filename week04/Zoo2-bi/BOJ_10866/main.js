const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = parseInt(input[0]);
const deque = [];
let result = [];

for (let i = 1; i <= n; i++) {
  const a = input[i].split(' ');
  const order = a[0];
  const value = parseInt(a[1]);

  switch (order) {
    case 'push_front':
      deque.unshift(value);
      break; //덱의 앞에 숫자 추가
    case 'push_back':
      deque.push(value);
      break; //덱의 뒤에 숫자
    case 'pop_front':
      result.push(deque.length ? deque.shift() : -1);
      break; //덱의 엎에 숫자 뺌 ->출력
    case 'pop_back':
      result.push(deque.length ? deque.pop() : -1);
      break;//덱의 뒤에 값 뺌 -> 출력
    case 'size':
      result.push(deque.length);
      break; //개수
    case 'empty':
      result.push(deque.length ? 0 : 1);
      break; //빔 확인
    case 'front':
      result.push(deque.length ? deque[0] : -1);
      break; //맨 앞 값 확인
    case 'back':
      result.push(deque.length ? deque[deque.length - 1] : -1);
      break;//맨뒤값확인
  }
}

console.log(result.join('\n'));

