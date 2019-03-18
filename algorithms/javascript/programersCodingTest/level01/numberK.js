// first
function solution(array, com) {
  const result = [];
  for (let item of com) {
    const arr = [...array];
    const sliceArr = arr.splice(item[0] - 1, item[1] - item[0] + 1);
    sliceArr.sort((x, y) => x - y);
    result.push(sliceArr[item[2] - 1]);
  }
  return result;
}

// second
function solution(array, commands) {
  return commands.map(v => {
    return array
      .slice(v[0] - 1, v[1])
      .sort((a, b) => a - b)
      .slice(v[2] - 1, v[2])[0];
  });
}
