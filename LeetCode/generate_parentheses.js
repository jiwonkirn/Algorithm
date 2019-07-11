// 40 ms ~ 56 ms
var generateParenthesis = function(n) {
  const arr = [];
  function inner(str = '', start = 0, end = 0) {
    if (start === n) {
      arr.push(str + ')'.repeat(n - end));
      return;
    }
    if (start > end) {
      inner(str + ')', start, end + 1);
      inner(str + '(', start + 1, end);
    } else {
      inner(str + '(', start + 1, end);
    }
  }
  inner();
  return arr;
};
