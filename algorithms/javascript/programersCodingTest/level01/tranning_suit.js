// first
function solution(n, lost = 0, reserve = 0) {
  const lostCopy = [...lost];
  const reserveCopy = [...reserve];

  for (let item of reserve) {
    if (lostCopy.includes(item)) {
      reserveCopy.splice(reserveCopy.indexOf(item), 1);
      lostCopy.splice(lostCopy.indexOf(item), 1);
    }
  }

  for (let item of reserveCopy) {
    let idx1 = lostCopy.indexOf(item - 1);
    let idx2 = lostCopy.indexOf(item + 1);
    if (idx1 !== -1) {
      lostCopy.splice(idx1, 1);
      continue;
    } else if (idx2 !== -1) {
      lostCopy.splice(idx2, 1);
    }
  }
  return n - lostCopy.length;
}

// second
function solution(n, lost, reserve) {
  // 잃어버린 것에서 필터를 돌려서
  return (
    n -
    lost.filter(a => {
      // 변수 b에 여벌이 있는 사람번호 - 잃어버린 사람 번호가 -1, 0 ,1인 번호를 잃어버인사람의 배열을 탐색해서 찾는다.
      const b = reserve.find(r => Math.abs(r - a) <= 1);
      // 만약 찾을 수 없으면 lost의 filter 순회를 다음으로 넘기고
      if (!b) return true;
      // 그렇지 않다면 여벌이 있는 사람에서 사람에서 그 요소를 뺀다.
      reserve = reserve.filter(r => r !== b);
    }).length
  );
}
