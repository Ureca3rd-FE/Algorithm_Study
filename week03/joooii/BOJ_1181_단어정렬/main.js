const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(input[0]);
let words = input.slice(1);

let uniqueWords = [...new Set(words)];

uniqueWords.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

for (i = 0; i < uniqueWords.length; i++) {
  console.log(uniqueWords[i]);
}
