const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const n = +lines[0];
const arr = lines
  .slice(1, 1 + n)
  .map(Number)
  .sort((a, b) => a - b);
console.log(arr.join("\n"));
