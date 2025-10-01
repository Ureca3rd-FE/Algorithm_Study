const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const numbers = input.map(Number);
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(sum - (numbers[i] + numbers[j]) === 100) {
                const result = numbers.filter((_, index) => index !== i && index !== j);
                return result.sort((a, b) => a - b);
            }
        }
    }
}

const answer = solution(input);
console.log(answer.join('\n'));