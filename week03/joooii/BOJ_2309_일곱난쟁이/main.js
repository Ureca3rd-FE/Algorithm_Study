const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

const total = input.reduce((a, b) => a + b, 0);
let answer = [];

for (i = 0; i < 9; i++) {
  for (j = i + 1; j < 9; j++) {
    if (total - input[i] - input[j] === 100) {
      answer = input.filter((_, idx) => idx !== i && idx !== j);
      break;
    }
  }
  if (answer.length > 0) break;
}

answer.sort((a, b) => a - b);
console.log(answer.join("\n"));

// 푸는 순서
// 1. 9명 중 2명을 뺐을 때 total = 100이면 멈춤 -> 2중 for문 돌려서 2명 찾아서 해당 난쟁이 키 제거
