// 가장 긴 팰린드롬
/* 
  앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
  문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.
  예를들면, 문자열 s가 abcdcba이면 7을 return하고 abacde이면 3을 return합니다.
*/

// first (효율성 최대 75.48ms, 37.7MB)
function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const currentCount = compareOdd(s, i);
    const currentEven = compareEven(s, i);
    if (count < currentCount) count = currentCount;
    if (count < currentEven) count = currentEven;
  }
  return count;
}

function compareOdd(str, index, count = 1) {
  if (
    str[index - count] &&
    str[index + count] &&
    str[index - count] === str[index + count]
  ) {
    return compareOdd(str, index, count + 1);
  } else {
    return count * 2 - 1;
  }
}

function compareEven(str, index, count = 0) {
  if (
    str[index - count] &&
    str[index + count + 1] &&
    str[index - count] === str[index + count + 1]
  ) {
    return compareEven(str, index, count + 1);
  } else {
    return count === 0 ? 1 : count * 2;
  }
}
