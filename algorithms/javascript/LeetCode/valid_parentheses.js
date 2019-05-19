// mine, 52ms (96%) ~ 60ms, 33.8 MB ~ 34MB
var isValid = function(s) {
  const stack = [];
  const bracket = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    const last = stack[stack.length - 1];
    if (bracket[last] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
};

// other's,  48ms (99.49%), 33.9MB (59.49%)
// 애초에 불가능한 문자는 걸러서 특정 케이스의 런타임을 줄인다.
var isValid = function(s) {
  s = s.replace(/\s/g, '');

  if (0 === s.length) {
    return true;
  }

  if (0 !== s.length % 2) {
    return false;
  }

  const open = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const close = {
    ')': true,
    ']': true,
    '}': true
  };

  //FIFO
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (close[s[i]]) {
      if (stack[stack.length - 1] !== s[i]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(open[s[i]]);
    }
  }

  return 0 === stack.length;
};
