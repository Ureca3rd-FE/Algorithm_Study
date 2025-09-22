const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 백준 2438 별찍기 1
/*
입력예제
5 
*/
let n = Number(input);
let line = "";
for (let i = 0; i < n; i++) {
  line += "*";
  console.log(line);
}
