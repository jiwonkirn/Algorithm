// EASY

// mine
// 25단위마다 0이 +1 더 커짐
// 125단위마다 0이 +2 더 커짐
// 수학적인 문제인 것 같은데 수학을 잘 몰라서
// 규칙을 찾아내는데 오래걸림.
var trailingZeroes = function(n) {
  let res = 0;
  let num = 2;
  while (1) {
    if (n < 5 ** num) break;
    res += Math.floor(n / 5 ** num++);
  }
  return Math.floor(n / 5) + res;
};

// other's
var trailingZeroes = function(n) {
  let count = 0;
  while (n >= 5) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return count;
};
