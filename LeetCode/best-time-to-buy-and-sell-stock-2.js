// first
var maxProfit = function(prices) {
  let start = 0;
  let end = 1;
  let cur = prices[2];
  let sum = 0;
  while (end < prices.length) {
    const prev = prices[start];
    const next = prices[end];
    if (prev > next) {
      start++;
      end++;
      cur = prices[end + 1];
      continue;
    }
    if (cur > next) {
      end++;
      cur = prices[end + 1];
      continue;
    }
    sum += next - prev;
    start = end + 1;
    end += 2;
    cur = prices[end + 1];
  }
  return sum;
};

// other's
// 어차피 뒤의 숫자가 컷을 때 빼는 것이므로 한 구간씩 빼도 상관없음.
var maxProfit = function(prices) {
  if (prices.lenght < 2) return 0;
  let acc = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    const cur = prices[i + 1] - prices[i];
    if (cur > 0) acc += cur;
  }
  return acc;
};
