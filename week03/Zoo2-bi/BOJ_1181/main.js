const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const T = Number(input[0]);
const lines = input.slice(1);

const unique = [...new Set(lines)]; //아휴 중복

const sorted = unique.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(sorted.join("\n"));
