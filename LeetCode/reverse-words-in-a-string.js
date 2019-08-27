// mine
// medium 인데도 불구하고 매우 쉬웠다 ㅎㅎ;
var reverseWords = function(s) {
  return s
    .trim()
    .split(/\s+/)
    .reverse()
    .join(' ');
};

// mine2
// 그래서 직접 구현해봄
var reverseWords = function(s) {
  const stack = [];
  let cur = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (cur !== '') {
        stack.push(cur);
        cur = '';
      }
    } else {
      cur += s[i];
    }
  }
  if (cur) {
    stack.push(cur);
    cur = '';
  }
  while (stack.length) {
    cur += stack.pop();
    if (stack.length) cur += ' ';
  }
  return cur;
};
