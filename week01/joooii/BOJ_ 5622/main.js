const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ");

let word = input[0].split("");
let score = 0;

for (let i = 0; i < word.length; i++) {
  switch (
    word[i] // 모든 문자를 돌아야하니 i로 인덱스를 돌리면서 switch 작성
  ) {
    case "A":
    case "B":
    case "C":
      score += 3;
      break;

    case "D":
    case "E":
    case "F":
      score += 4;
      break;
    case "G":
    case "H":
    case "I":
      score += 5;
      break;

    case "J":
    case "K":
    case "L":
      score += 6;
      break;

    case "M":
    case "N":
    case "O":
      score += 7;
      break;

    case "P":
    case "Q":
    case "R":
    case "S":
      score += 8;
      break;

    case "T":
    case "U":
    case "V":
      score += 9;
      break;

    case "W":
    case "X":
    case "Y":
    case "Z":
      score += 10;
      break;
  }
}
console.log(score);
