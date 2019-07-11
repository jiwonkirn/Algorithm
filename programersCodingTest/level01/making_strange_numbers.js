function solution(s) {
  const a = s.split("");
  let count = true;
  let order = 0;
  return a
    .map(item => {
      if (item === " ") {
        count = false;
        order = 0;
      } else {
        count = true;
      }
      if (count && order % 2 === 0) {
        order++;
        return item.toUpperCase();
      } else if (count && order % 2 !== 0) {
        order++;
        return item.toLowerCase();
      }
      return item;
    })
    .join("");
}

function toWeirdCase(s) {
  // 문자 2개의 연속된 것을 대문자 + 소문자로 바꾼다.
  // 다만 단어가 홀수개의 글자일 경우 마지막 글자를 해당 정규표현식으로 인식하지 못하므로
  // 모두 대문자로 바꾼뒤 replace한다.
  return s
    .toUpperCase()
    .replace(/(\w)(\w)/g, a => a[0].toUpperCase() + a[1].toLowerCase());
}
