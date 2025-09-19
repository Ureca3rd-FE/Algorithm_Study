const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 백준 10818번 최소, 최대
/*
입력예제
5
20 10 35 30 7
 */
const N = input[0];
let arr = [];
// for (let i = 1; i <= N; i++) {
//   arr.push(input[i]);
// }

arr = input[1].split(" ").map(Number);
console.log(arr);

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min, max);
// for(let i=0; i<N; i++) {
//     min
// }
// for(let i=0; i<N; i++) {
// }
