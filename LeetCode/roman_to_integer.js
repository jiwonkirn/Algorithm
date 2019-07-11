// 124 ms, 99.96% / 39.5 MB, 94.46%
var romanToInt = function(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let num = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (roman[s[i + 1]] > roman[s[i]]) {
      num -= roman[s[i]];
    } else {
      num += roman[s[i]];
    }
  }
  return num + roman[s[s.length - 1]];
};

// 148 ms, 99.26% / 39.5 MB, 94.46%
var romanToInt = function(s) {
  let num = 0;
  let prev = '';
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'M':
        if (prev === 'C') num += 800;
        else num += 1000;
        prev = 'M';
        break;
      case 'D':
        if (prev === 'C') num += 300;
        else num += 500;
        prev = 'D';
        break;
      case 'C':
        if (prev === 'X') num += 80;
        else num += 100;
        prev = 'C';
        break;
      case 'L':
        if (prev === 'X') num += 30;
        else num += 50;
        prev = 'L';
        break;
      case 'X':
        if (prev === 'I') num += 8;
        else num += 10;
        prev = 'X';
        break;
      case 'V':
        if (prev === 'I') num += 3;
        else num += 5;
        prev = 'V';
        break;
      case 'I':
        num += 1;
        prev = 'I';
        break;
      default:
        break;
    }
  }
  return num;
};
