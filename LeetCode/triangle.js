// mine
// 아래에서 위로 올라가면서
// 두 노드중 작은것을 더해나간다.
var minimumTotal = function(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i + 1].length - 1; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};

// other's
// 방식은 나와 같으나
// 배열 하나를 만들어서 거기에 계속 더해나간다.
var minimumTotal = function(triangle) {
  const A = new Array(triangle.length + 1).fill(0);
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      A[j] = Math.min(A[j], A[j + 1]) + triangle[i][j];
    }
  }

  return A[0];
};
