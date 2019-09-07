// EASY
// mine
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k, k));
};
