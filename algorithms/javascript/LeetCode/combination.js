// First
// 찍히는 출력은 비교적 적다고 생각했는데
// 복잡도가 다른 풀이들에 비해 높았다.
var combine = function(n, k) {
  const result = [];
  function helper(curNum, elem) {
    if (elem.length === k) {
      result.push(elem);
      return;
    }
    for (let i = curNum; i <= i + (n - curNum); i++) {
      elem.push(i);
      helper(++curNum, [...elem]);
      elem.pop();
    }
  }
  for (let i = 1; i <= n - k + 1; i++) {
    const elem = [i];
    helper(i + 1, elem);
  }
  return result;
};

// Other's
// 처음 결과물을 채워놓고,
// 마지막 수 + 1인 수를 기준으로 마지막부터 보아
// 마지막 - 마지막에서 두번째의 차가
// 2 이상 나면
// 해당 순서 요소를 1씩 더하고
// 그 다음 요소를 전 요소 +1 한다.
// 모든 요소가 순서대로면 return
function next_combination(comb, n) {
  comb = comb.slice();
  comb.push(n + 1);

  var n = comb.length,
    i = n - 2;

  for (; i >= 0; --i) {
    if (comb[i] + 1 < comb[i + 1]) break;
  }

  if (i === -1) return null;

  var num = ++comb[i];
  for (var j = i + 1; j < n - 1; ++j) {
    comb[j] = ++num;
  }
  comb.pop();

  return comb;
}

var combine = function(n, k) {
  var ans = [],
    comb = [];

  for (var i = 1; i <= k; ++i) comb.push(i);

  ans.push(comb);
  while ((comb = next_combination(comb, n))) {
    ans.push(comb);
  }

  return ans;
};
