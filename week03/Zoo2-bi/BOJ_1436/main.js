const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = input[0].split(" ").map(Number);

const current = 666;
const count = 0;

while (true) {}
