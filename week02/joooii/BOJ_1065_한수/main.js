const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
let n = Number(input);
let count = 0;
// 1~99까지는 무조건 한수이기 때문에 바로 n 출력
// 100~999까지는 백/십/일 자리를 추출해서 (일-십) === (십-백)이 같으면 한수 처리 (count++)
// n <= 999이라고 조건문을 했기 때문에 1000에 대한 처리도 해줌
if (n <= 99) {
  console.log(n);
} else if (n <= 999) {
  count = 99;
  for (let i = 100; i <= n; i++) {
    let ones = i % 10;
    let tens = Math.floor((i / 10) % 10);
    let hundreds = Math.floor(i / 100);

    if (ones - tens === tens - hundreds) {
      count++;
    }
  }
  console.log(count);
} else if (n === 1000) {
  console.log(144);
}

/* 더 깔끔하게 처리하는 방법 -> i <= Math.min(n, 999)을 통해 1000이 들어와도 999까지만 돌도록 제한 */

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim();
// let n = Number(input);
// let count = 0;

// if (n <= 99) {
//   console.log(n);
// } else {
//   count = 99;
//   for (let i = 100; i <= Math.min(n, 999); i++) {
//     let ones = i % 10;
//     let tens = Math.floor((i / 10) % 10);
//     let hundreds = Math.floor(i / 100);

//     if (ones - tens === tens - hundreds) {
//       count++;
//     }
//   }
//   console.log(count);
// }
