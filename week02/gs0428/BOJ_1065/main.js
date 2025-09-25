const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];

let cnt = 0;

for (let i = 1; i <= N; i++) {
  if (i < 100) {
    cnt++;
    continue;
  }

  const numbers = i.toString().split("").map(Number);
  let gap = numbers[0] - numbers[1];
  let isHansu = true;

  for (let j = 2; j < numbers.length; j++) {
    const newGap = numbers[j - 1] - numbers[j];
    if (newGap !== gap) {
      isHansu = false;
      break;
    }
  }
  if (isHansu) {
    cnt++;
  }
}

console.log(cnt);
