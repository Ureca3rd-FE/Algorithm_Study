const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
//백준 2908번 상수
/*
734 893
*/
let str = input.toString().trim();
// console.log(str);
// str = str.split("");
// console.log(str);
// str = str.reverse();
// console.log(str);
// str = str.join("");
// console.log(str);
str = str.split("").reverse().join(""); // 문자열 뒤집기

let arr = str.split(" ");
// console.log(arr);
let answer = Math.max(...arr);
console.log(answer);
// answer = Math.max(arr);
// console.log(answer); => arr를 그대로 받아들여 숫자로 인식을 못함
