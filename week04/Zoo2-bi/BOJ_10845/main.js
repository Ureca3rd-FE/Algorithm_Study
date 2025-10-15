const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = parseInt(input[0]);
const queue = [];
let result = [];

let head = 0; //큐의 맨 앞 위치를 추적

for (let i = 1; i <= n; i++) {
  const a = input[i].split(' ');

  switch (a[0]) {
    case 'push':
      queue.push(parseInt(a[1]));
      break; //큐는 뒤에 추가
    case 'pop':
      if (queue.length - head === 0) result.push(-1);
      else result.push(queue[head++]);
      break; //맨앞에꺼를 빼서 출력
    case 'size':
      result.push(queue.length - head);
      break;  //전체길이 - 빠진개수
    case 'empty':
      result.push(queue.length - head === 0 ? 1 : 0);
      break; //비면 1 아니면 0 출력!
    case 'front':
      result.push(queue.length - head === 0 ? -1 : queue[head]);
      break; //맨 앞 수
    case 'back':
      result.push(queue.length - head === 0 ? -1 : queue[queue.length - 1]);
      break; //맨 뒤 수 
  }
}

console.log(result.join('\n'));
