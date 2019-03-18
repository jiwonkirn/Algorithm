function solution(input) {
  return parseInt(
    [...input.toString()].reduce((acc, item) => parseInt(acc) + parseInt(item))
  );
}
