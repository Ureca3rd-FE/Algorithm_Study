const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const words = Array.from(new Set(input.splice(1)));
console.log(
  words
    .sort((a, b) => {
      if (a.length === b.length) {
        return a.localeCompare(b);
      }
      return a.length - b.length;
    })
    .join("\n")
);
