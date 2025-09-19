const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 백준 5622번 다이얼
/* 입력예제
WA
 */
let words = input.toString().trim().split("");
console.log(words);

let time = 0;

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word === "A" || word === "B" || word === "C") {
    time += 3;
  } else if (word === "D" || word === "E" || word === "F") {
    time += 4;
  } else if (word === "G" || word === "H" || word === "I") {
    time += 5;
  } else if (word === "J" || word === "K" || word === "L") {
    time += 6;
  } else if (word === "M" || word === "N" || word === "O") {
    time += 7;
  } else if (word === "P" || word === "Q" || word === "R" || word === "S") {
    time += 8;
  } else if (word === "T" || word === "U" || word === "V") {
    time += 9;
  } else if (word === "W" || word === "X" || word === "Y" || word === "Z") {
    time += 10;
  }
}

console.log(time);
