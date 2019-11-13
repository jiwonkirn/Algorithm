// FIRST
var rangeBitwiseAnd = function(m, n) {
  const pow = m.toString(2);
  const pow2 = n.toString(2);
  if (pow.length !== pow2.length) return 0;

  let res = "";
  for (var i = 0; i < pow.length; i++) {
    if (pow[i] === pow2[i]) res += pow[i];
    else break;
  }
  res += "0".repeat(pow.length - i);
  return parseInt(res, 2);
};

// SECOND WITH OTHER's
// SHIFT가 있었지........
var rangeBitwiseAnd = function(m, n) {
  let count = 0;
  while (m !== n) {
    m >>= 1;
    n >>= 1;
    count++;
  }
  return m << count;
};
