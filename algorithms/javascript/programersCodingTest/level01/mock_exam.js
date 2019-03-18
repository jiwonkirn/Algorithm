// first
function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  answers.forEach((item, index) => {
    if (item === first[index % first.length]) {
      score1++;
    }
  });

  answers.forEach((item, index) => {
    if (item === second[index % second.length]) {
      score2++;
    }
  });

  answers.forEach((item, index) => {
    if (item === third[index % third.length]) {
      score3++;
    }
  });

  if (score1 > score2 && score1 > score3) {
    return [1];
  } else if (score2 > score1 && score2 > score3) {
    return [2];
  } else if (score3 > score1 && score3 > score2) {
    return [3];
  } else if (score1 === score2 && score1 > score3) {
    return [1, 2];
  } else if (score1 === score3 && score1 > score2) {
    return [1, 3];
  } else if (score2 === score3 && score2 > score1) {
    return [2, 3];
  } else {
    return [1, 2, 3];
  }
}

//second
function solution(answers) {
  const answer = [];
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  const a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  const a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  const max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
