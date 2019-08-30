// mine
// 이 답은 오답이지만 푸는 시간이 오래걸려서 
// 고민의 흔적으로 기록..
var maxProduct = function(nums) {
  if (nums.length < 2) return nums[0];
  let res = 1;
  let start = 0;
  let max = -Infinity;
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          if (res < 0) {
              max = Math.max(max, helper(nums.slice(start, i)), 0);
          } else {
              max = Math.max(max, res, 0);
          }
          res = 1;
          start = i + 1;
      } else {
          res *= nums[i];
      }
  }
  if (res < 0) {
      max = Math.max(max, helper(nums.slice(start, i)));
  } else {
      max = Math.max(max, res);
  }
  return max;
};

function helper(arr) {
  if (arr.length < 2) return arr[0];
  const first = arr.findIndex((i) => i < 0);
  const last = lastIndex(arr, (i) => i < 0);
  let max = [arr[0], arr[first + 1] || arr[0]];
  if (first === last) {
      for (var i = 1; i < first; i++) {
          max[0] *= arr[i];
      }
      for (var i = first + 2; i < arr.length; i++) {
          max[1] *= arr[i];
      }
  } else {
      for (var i = 1; i < last; i++) {
          max[0] *= arr[i];
      }
      for (var i = first + 2; i < arr.length; i++) {
          max[1] *= arr[i];
      }
  }
  return Math.max(...max);
}

function lastIndex(arr, callback) {
  for (var i = arr.length - 1; i >= 0; i--) {
      if (callback(arr[i])) {
          return i;
      }
  }
  return -1;
}

// other's
// 이런 접근법을 이전 풀이에서 봤는데
// 오답 노트가 중요한듯...
var maxProduct = function(nums) {
  if (nums.length === 1) return nums[0];

  let result = -Number.MAX_VALUE,
      max = 1,
      min = 1;
  
  for (let i = 0; i < nums.length; i++) {
      const oldMax = max;
      max = Math.max(nums[i], min * nums[i], max * nums[i]);
      min = Math.min(nums[i], min * nums[i], oldMax * nums[i]);

      result = Math.max(result, max);
  }

  return result;
};