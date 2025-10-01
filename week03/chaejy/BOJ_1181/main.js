const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// new Set()을 사용해 중복 제거
// 전개 연산자(...)를 사용해 다시 배열 생성
const words = [...new Set(input.slice(1))];

words.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }  // 길이 비교 - return이 음수면 a가 앞으로, 양수면 b가 앞으로 감
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0; 
  }  // 알파벳 비교
});

console.log(words.join('\n'));