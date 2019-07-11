// first
function solution(arr) {
  const answer = [];
  arr.filter(x => {
    if (answer[answer.length - 1] !== x) answer.push(x);
  });
  return answer;
}

// second
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
