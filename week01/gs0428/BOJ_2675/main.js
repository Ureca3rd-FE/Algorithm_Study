const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
input.splice(1).forEach((test) => {
  const [num, str] = test.split(" ");
  const newStr = str.split("").reduce((acc, cur) => acc + cur.repeat(num), "");
  ans.push(newStr);
});
console.log(ans.join("\n"));
