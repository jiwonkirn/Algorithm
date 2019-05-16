//  44 ms (99.58%), 34 MB (15.93%)
var letterCombinations = function(digits) {
  const arr = [];
  if (digits.length <= 0) return arr;
  const obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  function inner(button, str = '') {
    if (!digits[button]) {
      arr.push(str);
      return;
    }
    for (let i = 0; i < obj[digits[button]].length; i++) {
      inner(button + 1, str + obj[digits[button]][i]);
    }
  }
  inner(0);
  return arr;
};
