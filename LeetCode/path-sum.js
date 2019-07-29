// mine 1
// 나아갈 수 있는 공간의 값과의 합이 sum과 같으면 res를 true로 바꿔준다.
var hasPathSum = function(root, sum) {
  let res = false;
  function helper(node, acc) {
    if (!node.left && !node.right) {
      if (acc === sum) res = true;
      return;
    }
    if (node.left) helper(node.left, acc + node.left.val);
    if (node.right) helper(node.right, acc + node.right.val);
  }
  if (root) {
    helper(root, root.val);
  }
  return res;
};

// mine 2
// 나아갈 수 있는 공간의 값과의 합이 sum과 같으면 true를 반환하고
// || 연산자는 하나라도 true이면 true이다.
var hasPathSum = function(root, sum) {
  function helper(node, acc) {
    if (!node.left && !node.right) {
      if (acc === sum) return true;
      return false;
    }
    let left,
      right = false;
    if (node.left) left = helper(node.left, acc + node.left.val);
    if (node.right) right = helper(node.right, acc + node.right.val);
    return left || right;
  }
  if (root) {
    return helper(root, root.val);
  }
  return false;
};

// other's
const hasPathSum = (root, sum) => {
  if (root) {
    if (sum - root.val === 0 && isLeaf(root)) {
      return true;
    } else if (sum !== 0 || !isLeaf(root)) {
      return (
        hasPathSum(root.left, sum - root.val) ||
        hasPathSum(root.right, sum - root.val)
      );
    }
    return false;
  }
  return false;
};

const isLeaf = (root) => {
  return !root.left && !root.right;
};
