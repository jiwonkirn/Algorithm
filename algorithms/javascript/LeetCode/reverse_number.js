const reverse = function(x) {
  let rev = '',
    num;
  const str = x.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev[rev.length - 1] === '-') {
    num = Number('-' + rev.slice(0, rev.length - 1));
  } else {
    num = Number(rev);
  }
  return isInteger(num) ? num : 0;
};

function isInteger(n) {
  if (n < 2 ** 31 && n >= -1 * 2 ** 31) {
    return 1;
  }
  return 0;
}
