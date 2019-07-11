// first mine
var uniquePaths = function(m, n) {
  const arr = new Array(n).fill(1).map((i) => new Array(m).fill(1));
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[n - 1][m - 1];
};

// other's
// 최단거리 경우의 수는 다음과 같다
// 예를 들어 2 * 3이 있으면,
// a, a, b, b, b
// 이것을 나열하는 경우의 수를 구하는 것과 유사한데,
// 이것을 순열(순서가 있는 나열..?)이라고 한다!
// 공식으로 하면 5! / 2! * 3!
// 그동안 경우의 수를 그림에 적어서 하다보니 맨 위에 같은 알고리즘을 도출 할 수 있었는데,
// 미대 수포자의 현실..
var uniquePaths = function(m, n) {
  const number = m - 1;
  const all = m + n - 2;
  function mul(start, end) {
    let answer = 1;
    for (var i = start; i <= end; i++) {
      answer *= i;
    }
    return answer;
  }
  return mul(number + 1, all) / mul(1, all - number);
};

// second mine
var uniquePaths = function(m, n) {
  const factorial = fac();
  const row = factorial(m - 1);
  const col = factorial(n - 1);
  const sum = factorial(m + n - 2);
  return sum / (col * row);
};

function fac() {
  const arr = [1, 2];
  function helper(n) {
    if (n < 1) return 1;
    if (!arr[n - 1]) {
      arr[n - 1] = n * helper(n - 1);
    }
    return arr[n - 1];
  }
  return helper;
}
