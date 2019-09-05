// mine
// O(N)
// 'BZY' => 2 * (26 ** 2) + 26 * (26 ** 1) + 25 * (26 ** 0)
var titleToNumber = function(s) {
  let res = 0;
  const last = s.length - 1;
  for (var i = 0; i <= last; i++) {
    const cur = s.charCodeAt(i) - 64;
    res += cur * 26 ** (last - i);
  }
  return res;
};
