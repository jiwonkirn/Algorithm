// MIN: 80 ms (99.76%), 36.5 MB (84.97%)
// MAX: 88 ms, 36.7 MB
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums.sort((x, y) => x - y);
  const arr = [];
  for (let f = 0; f < nums.length - 3; f++) {
    if (f > 0 && nums[f] === nums[f - 1]) {
      continue;
    }
    for (let s = f + 1; s < nums.length - 2; s++) {
      let t = s + 1;
      let e = nums.length - 1;
      if (s > f + 1 && nums[s] === nums[s - 1]) {
        continue;
      }
      if (nums[f] + nums[s] + nums[e - 1] + nums[e] < target) {
        continue;
      }
      while (t < e) {
        const sum = nums[f] + nums[s] + nums[t] + nums[e];
        if (sum === target) {
          arr.push([nums[f], nums[s], nums[t], nums[e]]);
          t++;
          e++;
          while (t < e && nums[t] === nums[t - 1]) {
            t++;
          }
          while (t < e && nums[e] === nums[e + 1]) {
            e--;
          }
        } else if (sum < target) {
          t++;
        } else {
          e--;
        }
      }
    }
  }
  return arr;
};
