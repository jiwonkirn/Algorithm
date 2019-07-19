// mine
// 각 자리를 가장 끝에서부터 비교.
var isSymmetric = function(root) {
  const lstack = [];
  const rstack = [];
  if (!root) {
    return true;
  }
  let left = root.left;
  let right = root.right;
  while (true) {
    while (left) {
      lstack.push(left);
      left = left.right;
    }
    while (right) {
      rstack.push(right);
      right = right.left;
    }
    if (!lstack.length && !rstack.length) {
      return true;
    }
    if (lstack.length !== rstack.length) {
      return false;
    }
    left = lstack.pop();
    right = rstack.pop();
    if (left.val === right.val) {
      left = left.left;
      right = right.right;
    } else {
      return false;
    }
  }
};

// Other's
// 재귀를 이용하여 각 자리를 비교.
var isSymmetric = function(root) {
  if (!root) return true;
  function helper(left, right) {
    if (!left && !right) {
      return true;
    }
    if (!left || !right || left.val !== right.val) {
      return false;
    }
    return helper(left.right, right.left) && helper(left.left, right.right);
  }
  return helper(root.left, root.right);
};
