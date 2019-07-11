// FIRST
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  const arr = new Array(matrix.length)
    .fill(0)
    .map((_, index) => new Array(matrix[0].length).fill(true));
  let [rowMin, rowMax, colMin, colMax] = [
    0,
    matrix.length - 1,
    0,
    matrix[0].length - 1
  ];
  const result = [];
  while (rowMin <= rowMax && colMin <= colMax) {
    for (let i = colMin; i <= colMax; i++) {
      if (arr[rowMin][i]) {
        result.push(matrix[rowMin][i]);
        arr[rowMin][i] = false;
      }
    }
    rowMin++;
    for (let i = rowMin; i <= rowMax; i++) {
      if (arr[i][colMax]) {
        result.push(matrix[i][colMax]);
        arr[i][colMax] = false;
      }
    }
    colMax--;
    for (let i = colMax; i >= colMin; i--) {
      if (arr[rowMax][i]) {
        result.push(matrix[rowMax][i]);
        arr[rowMax][i] = false;
      }
    }
    rowMax--;
    for (let i = rowMax; i >= rowMin; i--) {
      if (arr[i][colMin]) {
        result.push(matrix[i][colMin]);
        arr[i][colMin] = false;
      }
    }
    colMin++;
  }
  return result;
};

// SECOND
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  let [rowMin, rowMax, colMin, colMax] = [
    0,
    matrix.length - 1,
    0,
    matrix[0].length - 1
  ];
  const result = [];
  while (rowMin <= rowMax && colMin <= colMax) {
    for (let i = colMin; i <= colMax; i++) {
      result.push(matrix[rowMin][i]);
    }
    rowMin++;
    for (let i = rowMin; i <= rowMax; i++) {
      result.push(matrix[i][colMax]);
    }
    colMax--;
    if (rowMin <= rowMax) {
      for (let i = colMax; i >= colMin; i--) {
        result.push(matrix[rowMax][i]);
      }
    }
    rowMax--;
    if (colMin <= colMax) {
      for (let i = rowMax; i >= rowMin; i--) {
        result.push(matrix[i][colMin]);
      }
    }
    colMin++;
  }
  return result;
};
