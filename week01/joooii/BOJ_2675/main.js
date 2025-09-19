const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let [r, str] = input[i].split(" ");
  r = Number(r);

  let ans = "";
  for (let j = 0; j < str.length; j++) {
    ans += str[j].repeat(r);
  }
  console.log(ans);
}
