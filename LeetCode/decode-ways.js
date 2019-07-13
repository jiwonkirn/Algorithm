// mine
// 조건이 너무 많다ㅠ
var numDecodings = function(s) {
  if (s[0] === '0') return 0;
  let count = 1;
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    const one = Number(s[i]);
    const two = Number(s[i - 1] + s[i]);
    if ((one === 0 && two >= 27) || two === 0) return 0;
    if (one === 0) {
      count *= fac(cur - 1);
      cur = 0;
    } else if (one <= 2) {
      cur += 1;
    } else if (two <= 26) {
      count *= fac(cur + 1);
      cur = 0;
    } else {
      count *= fac(cur);
      cur = 0;
    }
  }
  if (cur) {
    count *= fac(cur);
  }
  return count;
};

function fac(n) {
  const arr = [0, 1];
  for (let i = 0; i < n; i++) {
    [arr[0], arr[1]] = [arr[1], arr[0] + arr[1]];
  }
  return arr[1];
}

// Other's
function numDecodings(s) {
  const dp = Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;

  for (let i = 2; i <= s.length; i++) {
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }
    if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6')) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
}
