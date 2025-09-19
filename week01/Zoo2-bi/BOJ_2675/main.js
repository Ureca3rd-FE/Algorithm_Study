const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const T = parseInt(input[0]);
const two = input.slice(1);

for (let i = 0; i < two.length; i++) {
  const [A, B] = two[i].trim().split(/\s+/);
  const s = Number(A);
  const r = B;

  let result = "";

  for (let j = 0; j < r.length; j++) {
    result += r[j].repeat(s);
  }
  console.log(result);
}
