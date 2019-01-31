function solution(progresses, speeds) {
  const result = [];
  let a = 0;
  progresses.forEach((item, index) => {
    const rest = Math.ceil((100 - item) / speeds[index]);
    if (a < rest) {
      result.push(1);
      a = rest;
    } else {
      result[result.length - 1] += 1;
    }
  });
  return result;
}
