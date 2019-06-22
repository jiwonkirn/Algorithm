// first
var addBinary = function(a, b) {
  let result = '';
  let len = Math.max(a.length, b.length) - 1;
  a = a.padStart(len + 1);
  b = b.padStart(len + 1);
  let cur = 0;
  while (len >= 0) {
    const sum = Number(a[len] || 0) + Number(b[len] || 0) + cur;
    if (sum === 3) {
      cur = 1;
      result = '1' + result;
    } else if (sum === 2) {
      cur = 1;
      result = '0' + result;
    } else {
      cur = 0;
      result = sum + result;
    }
    len--;
  }
  return cur ? cur + result : result;
};

// second
var addBinary = function(a, b) {
  let [aIndex, bIndex] = [a.length - 1, b.length - 1];
  let next = 0;
  let result = '';
  while (aIndex >= 0 || bIndex >= 0) {
    const x = a[aIndex] ? Number(a[aIndex]) : 0;
    const y = b[bIndex] ? Number(b[bIndex]) : 0;
    const sum = next + x + y;
    result = (sum % 2) + result;
    next = Math.floor(sum / 2);
    aIndex--;
    bIndex--;
  }
  return next ? next + result : result;
};
