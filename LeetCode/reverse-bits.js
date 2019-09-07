// EASY
// mine
var reverseBits = function(n) {
  const str = n.toString(2);
  let res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return parseInt(res + '0'.repeat(32 - res.length), 2);
};

// other's
var reverseBits = function(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    if (n & (1 === 1)) {
      result += 1;
    }
    n >>= 1;
  }
  return result >>> 0;
};
