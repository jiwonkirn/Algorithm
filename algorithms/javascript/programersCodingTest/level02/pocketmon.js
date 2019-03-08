// using Set
// max (35.58ms, 45.9MB)
function solution(nums) {
  const num = nums.length / 2;
  const set = new Set(nums);
  if (set.size < num) return set.size;
  return num;
}

// using obj
// max (39.73ms, 46.1MB)
function solution(nums) {
  const num = nums.length / 2;
  const obj = {};
  for (const item of nums) {
    obj[item] = item;
  }
  const arr = Object.values(obj);
  if (arr.length > num) return num;
  return arr.length;
}
