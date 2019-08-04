// O(n^2)
// 모든 경우의 수 비교
var maxProfit = function(prices) {
  var max = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    var sub = Math.max(...prices.slice(i + 1)) - prices[i];
    if (max < sub) max = sub;
  }
  return max;
};

// O(n)
// 작은 수를 설정하고 그 이후에 나오는 숫자랑 뺀 값이
// 이제껏 나왔던 차이보다 크면 대체
var maxProfit = function(prices) {
  let minIdx = 0;
  let sub = 0;
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < prices[minIdx]) {
      minIdx = i;
    } else {
      const curSub = prices[i] - prices[minIdx];
      if (curSub > sub) {
        sub = prices[i] - prices[minIdx];
      }
    }
  }
  return sub;
};
