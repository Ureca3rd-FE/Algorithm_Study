const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const deque = [];
const result = [];

for (let i = 1; i <= N; i++) {
    const command = input[i].split(' ');
    
    switch (command[0]) {
        case 'push_front':
            deque.unshift(parseInt(command[1]));
            break;
        case 'push_back':
            deque.push(parseInt(command[1]));
            break;
        case 'pop_front':
            result.push(deque.length === 0 ? -1 : deque.shift());
            break;
        case 'pop_back':
            result.push(deque.length === 0 ? -1 : deque.pop());
            break;
        case 'size':
            result.push(deque.length);
            break;
        case 'empty':
            result.push(deque.length === 0 ? 1 : 0);
            break;
        case 'front':
            result.push(deque.length === 0 ? -1 : deque[0]);
            break;
        case 'back':
            result.push(deque.length === 0 ? -1 : deque[deque.length - 1]);
            break;
    }
}

console.log(result.join('\n'));