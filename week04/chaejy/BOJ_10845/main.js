const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const queue = [];
const result = [];

for (let i = 1; i <= N; i++) {
    const command = input[i].split(' ');
    
    switch (command[0]) {
        case 'push':
            queue.push(parseInt(command[1]));
            break;
        case 'pop':
            result.push(queue.length === 0 ? -1 : queue.shift());
            break;
        case 'size':
            result.push(queue.length);
            break;
        case 'empty':
            result.push(queue.length === 0 ? 1 : 0);
            break;
        case 'front':
            result.push(queue.length === 0 ? -1 : queue[0]);
            break;
        case 'back':
            result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
            break;
    }
}

console.log(result.join('\n'));