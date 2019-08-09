// first
var singleNumber = function(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (obj[n]) obj[n]++;
    else obj[n] = 1;
  }
  for (let i in obj) {
    if (obj[i] === 1) return i;
  }
};

// other's
var singleNumber = function(nums) {
  return nums.reduce((acc, num) => acc ^ num);
};
