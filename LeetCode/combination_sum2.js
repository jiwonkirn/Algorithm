// mine
var combinationSum2 = function(candidates, target) {
  candidates.sort((x, y) => x - y);
  const set = new Set();
  const result = [];
  function inner(arr, acc, index) {
      const nextAcc = acc + candidates[index];
      if (index >= candidates.length || nextAcc > target) {
          return;
      }
      
      const nextArr = [...arr, candidates[index]];
      if (nextAcc === target) {
          const str = nextArr.join('');
          if (!set.has(str)) {
              set.add(str)
              result.push(nextArr);
          }
          return;
      }
      
      inner(arr, acc, index + 1);
      inner(nextArr, nextAcc, index + 1);      
  }
  inner([], 0, 0);
  return result;
};

// other's
var combinationSum2 = function(candidates, target) {
  let result = [];
  candidates.sort();
  recurse(result, candidates, [], target, 0);
  return result;
};

var recurse = function(result, candidates, current, sum, i) {
  if (sum == 0) {
      result.push([...current]);
      return;
  } else if (sum < 0) {
      return;
  }
  
  for (let j = i; j < candidates.length; j++) {
    if (j > i && candidates[j-1] == candidates[j]) continue;
      current.push(candidates[j]);
      recurse(result, candidates, current, sum - candidates[j], j+1);
      current.pop();
    }
  };