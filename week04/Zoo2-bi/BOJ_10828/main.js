const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = parseInt(input[0]);
const stack = []; //스택을 넣을 곳
const result = []; //결과를 넣을 곳

for(let i=0; i<=n; i++) {
    const a = input[i].split(' ');
    switch(a[0]) {  //조건에 따라 다른 동작을 위해
        case'push':
        stack.push(parseInt(a[1]));
        break;

        case 'pop':
        result.push(stack.length ? stack.pop() : -1);
        break;

        case 'size':
        result.push(stack.length);
        break;

        case 'empty':
        result.push(stack.length ? 0 : 1);
        break;

        case 'top':
        result.push(stack.length ? stack[stack.length - 1] : -1);
        break;
    }
}

console.log(result.join('\n'));
