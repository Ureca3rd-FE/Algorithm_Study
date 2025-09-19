const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../exam.txt")
  .toString()
  .trim();
// 백준 2557번 Hello World
console.log("Hello World!");
