const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ");

let word = input[0].split(" ");

if (input[0] === "") {
  console.log(0);
} else {
  console.log(input.length);
}
