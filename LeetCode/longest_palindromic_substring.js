/** ==================
     mine (156ms)
===================== **/
var longestPalindrome = function(s) {
  let longestString = '';
  for (let i = 0; i < s.length; i++) {
    let odd = oddPalindromic(s, i);
    let even = evenPalindromic(s, i);
    if (longestString.length < odd.length) longestString = odd;
    if (longestString.length < even.length) longestString = even;
  }
  return longestString;
};

function oddPalindromic(s, index, num = 0) {
  if (
    s[index - num] === s[index + num] &&
    index - num >= 0 &&
    index + num < s.length
  ) {
    return oddPalindromic(s, index, num + 1);
  } else {
    if (num === 0) return s[index];
    return s.slice(index - num + 1, index + num);
  }
}

function evenPalindromic(s, index, num = 0) {
  if (
    s[index - num] === s[index + num + 1] &&
    index - num >= 0 &&
    index + num + 1 < s.length
  ) {
    return evenPalindromic(s, index, num + 1);
  } else {
    if (num === 0) return s[index];
    return s.slice(index - num + 1, index + num + 1);
  }
}

/* ==================
    other's (80ms) 
==================== */
const longestPalindrome = function(s) {
  let max = 0;
  let lpd = '';
  for (let i = 0; i < s.length; i++) {
    let j;
    for (j = 0; i - j >= 0 && i + j < s.length; j++) {
      if (s[i - j] !== s[i + j]) break;
    }
    const len = 2 * j - 1;
    if (len > max) lpd = s.substring(i - j + 1, i + j);
    max = Math.max(max, len);
  }
  for (let i = 0; i < s.length - 1; i++) {
    let j;
    for (j = 0; i - j >= 0 && i + j + 1 < s.length; j++) {
      if (s[i - j] !== s[i + j + 1]) break;
    }
    const len = 2 * j;
    if (len > max) lpd = s.substring(i - j + 1, i + j + 1);
    max = Math.max(max, len);
  }
  return lpd;
};

/* ====================
    other's (76ms)
====================== */
var longestPalindrome = function(s) {
  let top = { len: 0, word: '' };

  if (s.length <= 1) {
    return s;
  }

  //candidate가 되는 대상을 모두 읽어 드린다.
  let candidates = pickCandidates(s);

  if (candidates.length == 0) {
    return s.charAt(0);
  }

  let preCandidate = null;

  //candidate를 시드로 최대 팰린드롭까지 확장 후 top에 저장한다
  for (let i = 0; i < candidates.length; i++) {
    let candidate = candidates[i];

    var word = getFullWord(candidate, s);
    if (top.len < word.length) {
      //저장 되어있는 최대 길이보다 크다면 결과를 저장한다
      top = { len: word.length, word: word };
    }
  }

  return top.word;
};

//seed word를 바탕으로 한자리씩 늘려서 최대 word를 찾아낸다
function getFullWord(candidate, s) {
  let chars = s.split('');
  let left = candidate.startPosition - 1;
  let right = candidate.endPosition + 1;
  let resultWord = candidate.seedWord;

  while (left >= 0 && right < chars.length) {
    if (chars[left] == chars[right]) {
      resultWord = chars[left] + resultWord + chars[right];
      left--;
      right++;
    } else {
      break;
    }
  }

  // console.log('resultWord : ' + resultWord);

  return resultWord;
}

function pickCandidates(s) {
  let candidates = [];
  let chars = s.split('');
  let length = chars.length;
  let savedChars = null;

  let postCandidate = null;

  for (let i = 0; i < length; i++) {
    let currentChar = chars[i];

    if (savedChars == null) {
      savedChars = currentChar;
    } else if (savedChars.length == 1) {
      if (savedChars == currentChar) {
        //aa,bb와 같이 2자인 경우 처리
        if (postCandidate != null) {
          //연속 값이 발생하는 경우를 처리 하기 위해서
          postCandidate.endPosition++;
          postCandidate.seedWord += currentChar;
        } else {
          postCandidate = new Candidate(i - 1, i, savedChars + currentChar);
          candidates.push(postCandidate);
        }
        savedChars = currentChar;
      } else {
        //ab,ac와 같이 2char 가 아닌 경우 3char 경우 확인을 위해 붙여준다
        savedChars += currentChar;
        postCandidate = null;
      }
    } else if (savedChars.length == 2) {
      //3char의 팰린드롭인지 확인을 위한 처리를 한다
      if (savedChars[0] == currentChar) {
        // 3char일경우
        candidates.push(new Candidate(i - 2, i, savedChars + currentChar));
        savedChars = savedChars[1] + currentChar;
      } else if (savedChars[1] == currentChar) {
        // 2char candidate
        postCandidate = new Candidate(i - 1, i, savedChars[1] + currentChar);
        candidates.push(postCandidate);
        savedChars = currentChar;
      } else {
        //2 char 또는 3 char 팰린드롭이 아닌 경우 현재 char를 기준으로 다시 시작한다
        savedChars = savedChars[1] + currentChar;
        postCandidate = null;
      }
    } else {
      console.log('never comes here');
    }
  }

  // console.log(candidates);
  return candidates;
}

var Candidate = (function() {
  this.startPosition;
  this.endPosition;
  this.seedWord;

  function Candidate(sPosition, ePosition, seedWord) {
    this.startPosition = sPosition;
    this.endPosition = ePosition;
    this.seedWord = seedWord;
  }

  return Candidate;
})();
