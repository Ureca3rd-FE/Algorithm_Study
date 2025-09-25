function d(n) {
  let sum = 0;
  const strNum = String(n);
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  return n + sum;
}

function solution() {
  const LIMIT = 10000;
  const isGenerated = Array(LIMIT + 1).fill(false);

  for (let i = 1; i <= LIMIT; i++) {
    const gen = d(i);
    if (gen <= LIMIT) {
      isGenerated[gen] = true;
    }
  }

  for (let i = 1; i <= LIMIT; i++) {
    if (!isGenerated[i]) {
      console.log(i);
    }
  }
}

solution();
