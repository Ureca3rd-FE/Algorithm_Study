// 4673 셀프 넘버
// 12904KB	252ms

const notSelfNum = [];

function makeNotSelfNum(num) {
  const digits = String(num).split("").map(Number);
  const newNum = num + digits.reduce((a, b) => a + b, 0);
  notSelfNum.push(newNum);
}

for (let i = 1; i <= 10000; i++) {
  makeNotSelfNum(i);
}

for (let i = 1; i <= 10000; i++) {
  if (!notSelfNum.includes(i)) {
    console.log(i);
  }
}