const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
//백준 11720번 숫자의 합
/*
5
54321
*/
const N = Number(input[0]);
let numbers = input[1].trim().toString().split("").map(Number);
// console.log(N);
// console.log(typeof N);
// console.log(str);
// console.log(typeof str);
// console.log(Array.isArray(numbers));
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
