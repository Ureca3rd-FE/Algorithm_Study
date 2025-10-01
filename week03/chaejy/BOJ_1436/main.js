const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString());

let count = 0;  
let num = 666;

while (count < N) {
  if (num.toString().includes('666')) {
    count++;
  }
  num++;
}

console.log(num - 1);
