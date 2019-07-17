// mine
// 중위순회를 하여 전 값보다 작은 것이 들어오면 false 반환
var isValidBST = function(root) {
  let res = true;
  let cur = -Infinity;
  function helper(node) {
    if (!node) {
      return;
    }
    helper(node.left);
    if (cur >= node.val || !res) {
      res = false;
      return;
    } else {
      cur = node.val;
    }
    helper(node.right);
  }
  helper(root);
  return res;
};

// Other's
// 원리는 같은데 좀 간결해보인다. 매개변수가 너무 많기는 하다.
var isValidBST = function(root) {
  return helper(root, -Infinity, Infinity);
};

var helper = function(node, min, max) {
  if (node === null) return true;

  if (node.val > max || node.val < min) return false;

  return (
    helper(node.left, min, node.val - 1) &&
    helper(node.right, node.val + 1, max)
  );
};
