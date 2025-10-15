const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = parseInt(input[0]); // 테스트 케이스 개수

for (let i = 1; i <= n; i++) { // 1부터 시작해야 함
  const line = input[i].trim();
  const stack = []; //스택만듬->스택으로 풀어야함
  let isValid = true; // 괄호 짝 유효 유무

  for (let gal of line) { // 문자열을 한글자씩 돌면서 검사
    if (gal === '(') {
      stack.push(gal); //( 이거 나오면 스택에 넣을거임 닫는 괄호 없음 기다림
    } else if (gal === ')') {
      if (stack.length === 0) { //스택 비어잇으면 안댄다는 뜻 밑에줄
        isValid = false;
        break;
      }
      stack.pop(); // 짝 맞으면 제거함!! ( ) 이렇게 짝 맞으묜 소거
    }
  }

  // 스택이 비어 있고 유효하면 YES임
  if (isValid && stack.length === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

