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

// ohter's
// 모르겠다.... 뭐지
var singleNumber = function(nums) {
  var a = 0;
  var b = 0;
  for (i = 0; i < nums.length; i++) {
    a = (a ^ nums[i]) & ~b;
    b = (b ^ nums[i]) & ~a;
  }
  return a;
};
