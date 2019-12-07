/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let start = 0;
  let end = 0;
  const res = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[end] + 1 === nums[i]) end++;
    else {
      if (start === end) res.push(`${nums[start]}`);
      else res.push(`${nums[start]}->${nums[end]}`);
      start = end = i;
    }
  }
  if (nums.length)
    res.push(start === end ? `${nums[start]}` : `${nums[start]}->${nums[end]}`);
  return res;
};
