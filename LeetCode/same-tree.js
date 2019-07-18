// mine
// 재귀를 사용하지 않고 풀어보았다.
// easy라 그런지 쉽게 풀었다.
var isSameTree = function(p, q) {
  const pstack = [];
  const qstack = [];
  while (1) {
    while (p && q) {
      pstack.push(p);
      p = p.left;
      qstack.push(q);
      q = q.left;
    }
    if (q || p) {
      return false;
    }
    if (!qstack.length && !pstack.length) {
      return true;
    }
    p = pstack.pop();
    q = qstack.pop();
    if (p.val === q.val) {
      p = p.right;
      q = q.right;
    } else {
      return false;
    }
  }
};

// Other's
// 모든 조건이 true여야 true가 반환되는 재귀
var isSameTree = function(p, q) {
  if (p === null && q === null) return true;

  if (p === null && q !== null) return false;

  if (p !== null && q === null) return false;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// mine2
// 위 문제를 보고 조건식 하나를 줄일 수 있겠다고 생각해서 바꿔봄
var isSameTree = function(p, q) {
  if (p == null && q == null) {
    return true;
  }
  if (p == null || q == null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
