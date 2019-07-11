// 56 ms(98.61%), 34.9 MB(58.07%)
var longestCommonPrefix = function(strs) {
  let index = 0;
  let result = '';
  while (strs.length) {
    const str = strs[0][index];
    if (!str) return result;
    for (let i = 1; i < strs.length; i++) {
      if (str !== strs[i][index]) {
        return result;
      }
    }
    result += str;
    index++;
  }
  return '';
};

// 44 ms(100%), 33.9 MB(79.21%)
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  strs.sort();
  for (var i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      break;
    }
  }
  return strs[0].slice(0, i);
};
