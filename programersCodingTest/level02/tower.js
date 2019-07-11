function solution(heights) {
  const arr = heights.slice();
  return heights.map((item, index) => {
    for (let i = index; i >= 0; i--) {
      if (arr[i - 1] > item) {
        return i;
      }
    }
    return 0;
  });
}
