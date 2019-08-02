// mine
// 연산하고 앞에 1 추가
var getRow = function(rowIndex) {
  const arr = [1];
  for (let i = 0; i < rowIndex; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
          arr[j] = arr[j] + arr[j + 1];
      }
      arr.unshift(1);
  }
  return arr;
};