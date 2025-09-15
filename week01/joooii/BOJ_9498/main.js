const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const s = input;
if (s <= 100 || s >= 90) {
  console.log("A");
} else if (s < 90 || s >= 80) {
  console.log("B");
} else if (s < 80 || s >= 70) {
  console.log("C");
} else if (s < 70 || s >= 60) {
  console.log("D");
} else {
  console.log("F");
}
