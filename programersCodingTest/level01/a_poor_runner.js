function solution(participant, completion) {
  const parArr = [...participant];
  const comArr = [...completion];
  // 만약 합격자 명단에 있는 사람이 참가자 명단에 있으면, 참가자 명단에서 제거해나간다.
  for (let item of comArr) {
    parArr.splice(parArr.indexOf(item), 1);
  }
  return parArr[0];
}
