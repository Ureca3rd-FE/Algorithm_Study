const fs = require('fs');
const heights = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const totalSum = heights.reduce((acc, cur) => acc + cur, 0);
const diff = totalSum - 100;

let impostor1, impostor2;

for (let i = 0; i < heights.length - 1; i++) {
  for (let j = i + 1; j < heights.length; j++) {
    if (heights[i] + heights[j] === diff) {
      impostor1 = heights[i];
      impostor2 = heights[j];
      break;
    }
  }
  if (impostor1 !== undefined) {
    break;
  }
}

const realDwarfs = heights.filter(h => h !== impostor1 && h !== impostor2);

realDwarfs.sort((a, b) => a - b);
console.log(realDwarfs.join('\n'));