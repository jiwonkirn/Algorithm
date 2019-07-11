var generateMatrix = function(n) {
  let [minCol, maxCol, minRow, maxRow] = [0, n - 1, 0, n - 1];
  const result = new Array(n).fill(0).map((i) => new Array(n).fill(0));
  let el = 1;
  while (minCol <= maxCol && minRow <= maxRow) {
    for (let i = minCol; i <= maxCol; i++) {
      result[minRow][i] = el;
      el++;
    }
    minRow++;
    for (let i = minRow; i <= maxRow; i++) {
      result[i][maxCol] = el;
      el++;
    }
    maxCol--;
    for (let i = maxCol; i >= minCol; i--) {
      result[maxRow][i] = el;
      el++;
    }
    maxRow--;
    for (let i = maxRow; i >= minRow; i--) {
      result[i][minCol] = el;
      el++;
    }
    minCol++;
  }
  return result;
};
