// Mine
// '/'을 구분자로 '/' 이전에 오는 글자들은 prev라는 변수에 담고
// prev의 내용을 validate 하는 방식으로 문제를 풀음.
var simplifyPath = function(path) {
  path += '/';
  const stack = [];
  var prev = '';
  for (var i = 1; i < path.length; i++) {
    if (path[i] === '/') {
      if (prev === '..') {
        stack.pop();
      } else if (prev !== '.' && prev) {
        stack.push(prev);
      }
      prev = '';
    } else {
      prev += path[i];
    }
  }
  return '/' + stack.join('/');
};

// Other's
// '/' 을 구분자로 배열을 만든 뒤
// 만들어진 단어들을 검사한다.
// split 메소드를 사용하여 좀 더 간편하고 보기좋은 코드이나
// 복잡도는 비슷한듯하다.
var simplifyPath = function(path) {
  let stack = [];
  let segments = path.split('/');

  for (let segment of segments) {
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '' && segment !== '.') {
      stack.push(segment);
    }
  }

  return '/' + stack.join('/');
};
