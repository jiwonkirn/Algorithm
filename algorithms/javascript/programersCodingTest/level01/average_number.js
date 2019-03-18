function solution(arr) {
  return arr.reduce((acc, item) => acc + item, 0) / arr.length;
}
