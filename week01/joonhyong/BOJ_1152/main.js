const fs = require("fs");
const { isArray } = require("util");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
// 백준 1152번 단어의 개수
/*
입력예제
The Curious Case of Benjamin Button
*/

const input = fs.readFileSync(file).toString().trim().split("\n");
console.log(input); // ["The Curious Case of Benjamin Button"]

let str = input.toString().trim();
console.log(str); // The Curious Case of Benjamin Button

let arr = str.split(" ");
console.log(arr); // [ 'The', 'Curious', 'Case', 'of', 'Benjamin', 'Button' ]

let answer = 0;

if (str === "") {
  // 공백으로 이뤄진 문자열은 빈문자열인 ""로 반환
  answer = 0;
  console.log(0);
} else {
  arr = str.split(" ");
  answer = arr.length;
  console.log(answer);
}
