// mine
// 3이 될 키는 지운다.
var singleNumber = function(nums) {
  const obj = {};
  for (var i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (!obj[cur]) {
      obj[cur] = 1;
    } else if (obj[cur] > 1) {
      delete obj[cur];
    } else {
      obj[cur]++;
    }
  }
  for (var i in obj) return Number(i);
};
