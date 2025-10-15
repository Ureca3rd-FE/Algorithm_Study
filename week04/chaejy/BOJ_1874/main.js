const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const A = [];

for (let i = 1; i <= N; i++) {
    A.push(parseInt(input[i]));
}

const stack = [];
let num = 1;
let result = true;
let answer = "";

for (let i = 0; i < N; i++) {
    const su = A[i];
    if (su >= num) {
        while (su >= num) {
            stack.push(num);
            num++;
            answer += "+\n";
        }
        stack.pop();
        answer += "-\n";
    } else {
        const n = stack.pop();
        if (n > su) {
            console.log("NO");
            result = false;
            break;
        } else {
            answer += "-\n";
        }
    }
}

if (result) {
    console.log(answer);
}