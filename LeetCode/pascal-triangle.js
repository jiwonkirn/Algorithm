// mine
// 양쪽은 항상 1이고
// 중간은 이전 순서 배열의 0+1, 1+2, 2+3 ... (숫자는 인덱스)
var generate = function(numRows) {
  if (numRows === 0) return [];
  const res = [[1]];
  for (let i = 1; i < numRows; i++) {
    const arr = [];
    arr[0] = 1;
    arr[i] = 1;
    for (let j = 1; j < i; j++) {
      const sum = res[i - 1][j - 1] + res[i - 1][j];
      arr[j] = sum;
    }
    res.push(arr);
  }
  return res;
};
