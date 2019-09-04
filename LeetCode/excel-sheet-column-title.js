var convertToTitle = function(n) {
  // 65 - 90 // String.fromCharCode
  let res = '';
  while (n > 0) {
    const cur = n % 26 || 26;
    n -= cur;
    n /= 26;
    res = String.fromCharCode(cur + 64) + res;
  }
  return res;
};
