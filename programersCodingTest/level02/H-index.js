// best practice
/*
숫자를 내림차순 정렬합니다. 
큰 수 부터 읽어나가서, 세어질 숫자보다 정렬된 숫자가 크면 숫자를 셉니다.
만약 세어질 숫자보다 정렬된 숫자가 낮은 시점이 오면
통과한 정렬된 숫자들은 모두 세어진 수보다 많은 것이고,
통과하지 못한, 남은 정렬된 숫자들은 모두 세어진 수보다 적으므로 
세어진 수를 return 합니다.
*/
function solution(citations) {
  const sortedCitations = citations.slice().sort((x, y) => y - x);
  let count = 0;
  while (count + 1 <= sortedCitations[count]) {
    count++;
  }
  return count;
}

// first try
function solution(citations) {
  const length = citations.length;
  for (let i = length; i >= 1; i--) {
    let more = 0;
    let fewer = 0;
    citations.forEach((c, index) => {
      if (c >= i) more++;
      if (c <= i) fewer++;
    });
    if (more >= i && fewer <= i) return i;
  }
}
