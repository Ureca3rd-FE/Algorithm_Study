const isSelfNumberArr = Array(10001).fill(true);
isSelfNumberArr[0] = false;
const ans = [];

for (let i = 1; i < 10001; i++) {
  if (!isSelfNumberArr[i]) continue;
  let number = i;

  while (number <= 10000) {
    const newNumber =
      number
        .toString()
        .split("")
        .reduce((acc, cur) => acc + Number(cur), 0) + number;

    if (newNumber <= 10000) isSelfNumberArr[newNumber] = false;

    number = newNumber;
  }
}
isSelfNumberArr.forEach((isSelfNumber, idx) => {
  if (isSelfNumber) ans.push(idx);
});

console.log(ans.join("\n"));
