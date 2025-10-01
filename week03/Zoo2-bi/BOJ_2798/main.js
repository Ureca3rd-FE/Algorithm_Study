
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const N = data[0], M = data[1];
const cards = data.slice(2, 2 + N);
let best = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const s = cards[i] + cards[j] + cards[k];
      if (s <= M && s > best) best = s;
      if (best === M) break; // 최적값 도달 시 탈출 여지
    }
  }
}
console.log(best);
