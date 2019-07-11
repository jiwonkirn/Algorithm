/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// Mine
var divide = function(dividend, divisor) {
  const isMinus =
    (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? '-' : '+';
  dividend = Math.abs(dividend).toString(2);
  divisor = Math.abs(divisor);
  length = dividend.length;
  let result = '';
  let cur = 0;
  for (let i = 0; i < length; i++) {
    const currentNum = Math.abs(cur << 1) + Number(dividend[i]);
    if (currentNum >= divisor) {
      result += '1';
      cur = currentNum - divisor;
    } else {
      result += '0';
      cur = currentNum;
    }
  }
  let answer = parseInt(isMinus + result, 2);
  if (answer > 2 ** 31 - 1 || answer < Math.pow(-2, 31)) {
    return 2 ** 31 - 1;
  }
  return answer;
};

// Other's
var divide = function(dividend, divisor) {
  if (
    divisor === 0 ||
    (divisor === -1 && dividend < -2147483647) ||
    dividend > 2147483647 ||
    dividend < -2147483648
  ) {
    return 2147483647;
  }

  const isNegative =
    (dividend <= 0 && divisor > 0) || (dividend >= 0 && divisor < 0);
  const pDividend = Math.abs(dividend);
  const pDivisor = Math.abs(divisor);

  if (dividend === 0 || pDividend < pDivisor) {
    return 0;
  }

  let doubling = pDivisor;
  let count = 1;
  while (doubling < pDividend && !(doubling & (1 << 30))) {
    doubling <<= 1;
    count <<= 1;
  }
  if (doubling > pDividend) {
    doubling >>>= 1;
    count >>>= 1;
  }

  const result = count + divide(pDividend - doubling, pDivisor);
  return isNegative ? -result : result;
};

var divide = function(dividend, divisor) {
  const isNegative = (dividend < 0) ^ (divisor < 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  function div(tdividend, tdivisor) {
    if (tdivisor === tdividend) {
      return 1;
    }
    if (tdividend < tdivisor) {
      return 0;
    }

    let quotient = 1;
    while (tdivisor <= tdividend >> 1) {
      tdivisor <<= 1;
      quotient <<= 1;
    }

    quotient += div(tdividend - tdivisor, divisor);

    return quotient;
  }

  let q = div(dividend, divisor);
  if (isNegative) q = -q;

  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  return Math.max(Math.min(q, MAX), MIN);
};
