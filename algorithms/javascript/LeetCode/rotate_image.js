var rotate = function(matrix) {
  const copy = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
      for (let j = matrix.length - 1, k = 0; j >= 0; j--, k++) {
          matrix[i][k] = copy[j][i];
      }
  }
  return matrix;
};