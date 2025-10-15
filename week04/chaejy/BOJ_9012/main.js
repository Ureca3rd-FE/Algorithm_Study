const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const str = input[i];
    const stack = [];
    let valid = true;
    
    for (let char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                valid = false;
                break;
            }
            stack.pop();
        }
    }
    
    if (valid && stack.length === 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}