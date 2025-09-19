const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ");

let [a, b] = input;

const reverse = (num) => Number(num.split("").reverse().join(""));

let revA = reverse(a);
let revB = reverse(b);

console.log(Math.max(revA, revB));
