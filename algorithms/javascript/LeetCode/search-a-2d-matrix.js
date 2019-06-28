// first
var searchMatrix = function(matrix, target) {
  let point = Math.floor(matrix.length / 2);
  let turn = point + 1;
  while (point >= 0 && point < matrix.length) {
    if (turn === 0) {
      return false;
    }
    if (target < matrix[point][0]) {
      point -= 1;
      turn--;
    } else if (target > matrix[point][matrix[0].length - 1]) {
      point += 1;
      turn--;
    } else {
      return matrix[point].indexOf(target) !== -1 ? true : false;
    }
  }
  return false;
};

// second
var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  const len = matrix[0].length - 1;
  let start = 0;
  let end = matrix.length - 1;
  while (start <= end) {
    if (matrix[start][len] >= target) {
      return matrix[start].indexOf(target) !== -1 ? true : false;
    }
    if (matrix[end][0] <= target) {
      return matrix[end].indexOf(target) !== -1 ? true : false;
    }
    start++;
    end--;
  }
  return false;
};
