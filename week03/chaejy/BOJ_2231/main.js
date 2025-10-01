const fs = require('fs');
const M = Number(fs.readFileSync('/dev/stdin').toString());

let result = 0; 

for (let N = 1; N < M; N++) {
  let sum = N;
  let currentNum = N;

  while (currentNum > 0) {
    sum += currentNum % 10;
    currentNum = Math.floor(currentNum / 10);
  }

  if (sum === M) {
    result = N; 
    break;
  }
}

console.log(result);