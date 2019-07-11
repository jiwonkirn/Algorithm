// mine, memoization, recursion
function helper() {
  const arr = [1, 2];
  function inner(n) {
    if (!arr[n - 1]) {
      arr[n - 1] = inner(n - 1) + inner(n - 2);
    }
    return arr[n - 1];
  }
  return inner;
}

var climbStairs = helper();

// other's
/*
  피보나치를 다음과 같은 공식으로 풀 수 있다고 한다...
*/
var climbStairs = function(n) {
  const a = (1 + Math.sqrt(5)) / 2;
  const b = -1 / a;
  const value = (Math.pow(a, n + 1) - Math.pow(b, n + 1)) / Math.sqrt(5);
  return value;
};
