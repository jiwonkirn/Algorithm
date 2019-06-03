// mine, sorting 때문에 좀 더 시간 복잡도가 올라간 것 같다.
var permute = function(nums) {
  nums.sort((x, y) => x - y);
  const result = [[...nums]];
  let cur = nums;
  let done = null;
  function helper(n, arr) {
    if (n === 0) {
      done = true;
      return;
    }
    if (cur[n] > cur[n - 1]) {
      arr.push(cur[n]);
      const index = arr.findIndex((i) => i > cur[n - 1]);
      [arr[index], cur[n - 1]] = [cur[n - 1], arr[index]];
      for (let i = n, j = 0; i < cur.length; i++, j++) {
        cur[i] = arr[j];
      }
      result.push([...cur]);
      return;
    } else {
      helper(n - 1, [...arr, cur[n]]);
    }
  }
  while (!done) {
    helper(nums.length - 1, []);
  }
  return result;
};

// other's 배열을 계속 돌아서 배열 안에 해당 요소가 없으면 채우는 알고리즘이다.
// 평균 런타임이 조금이나마 더 빨랐다.
var permute = function(nums) {
  if (nums.length < 2) return [nums];

  const len = nums.length;
  let answer = [[]];
  for (let i = 0; i < len; i++) {
    const temp = [...answer];
    answer = [];
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < temp.length; k++) {
        if (!temp[k].includes(nums[j])) {
          answer.push([nums[j], ...temp[k]]);
        }
      }
    }
  }
  return answer;
};
