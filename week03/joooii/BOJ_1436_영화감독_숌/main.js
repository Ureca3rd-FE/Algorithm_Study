const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

let n = Number(input);
let result = 0;
let count = 0;
while (true) {
  result += 1;
  if (result.toString().includes("666")) {
    count++;
    if (n === count) {
      console.log(result);
      break;
    }
  }
}

// 시작넘버 = 665부터 시작
// let n = Number(input);
// let start = 665;
// let count = 0;

// while (count > n) {
//   start += 1;
//   if (result.toString().includes("666")) {
//     count++;
//     if (n === count) {
//       console.log(result);
//       break;
//     }
//   }
// }
