const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function hansu(x) {
  if (x < 100) return true; // 1~99는 전부 한수
  if (x === 1000) return false;
  const a = Math.floor(x / 100); //백의자리
  const b = Math.floor((x % 100) / 10); //십의자리
  const c = x % 10; //일의자리
  return a - b === b - c; //백자리-십자리 // 십자리-일의자리 같아야 등차수열
}

let cnt = 0;
for (let i = 1; i <= n; i++) if (hansu(i)) cnt++;
console.log(cnt);
