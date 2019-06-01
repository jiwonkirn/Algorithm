var combinationSum = function(candidates, target) {
  const result = [];
  function inner(arr, acc, index) {
    if (arr[0] + acc > target) return;
    if (arr[0] + acc === target) {
      result.push(arr);
    }
    if (arr[0] + acc < target) {
      for (let start = index; start < candidates.length; start++) {
        inner([candidates[start], ...arr], acc + arr[0], start);
      }
    }
  }
  for (let i = 0; i < candidates.length; i++) {
    inner([candidates[i]], 0, i);
  }
  return result;
};

var combinationSum = function(candidates, target) {
  const result = [];
  function inner(arr, acc, index) {
    if (index >= candidates.length || acc > target) return;
    const nextArr = [...arr, candidates[index]];
    const nextAcc = acc + candidates[index];
    if (nextAcc === target) {
      result.push(nextArr);
    }
    inner(nextArr, nextAcc, index);
    inner(arr, acc, index + 1);
  }
  inner([], 0, 0);
  return result;
};
