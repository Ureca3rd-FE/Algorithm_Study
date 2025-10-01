const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);

let maxSum = 0; 

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const currentSum = cards[i] + cards[j] + cards[k];

      // 현재 합이 M을 넘지 않으면서, 이전에 찾은 최댓값보다 크다면 갱신
      if (currentSum <= M && currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
}

console.log(maxSum);