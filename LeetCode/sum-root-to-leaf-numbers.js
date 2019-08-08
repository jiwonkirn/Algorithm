// mine
// dfs
var sumNumbers = function(root) {
  let sum = 0;
  function helper(node, str) {
    str += node.val.toString();
    if (!node.left && !node.right) {
      sum += parseInt(str);
      return;
    }
    if (node.left) helper(node.left, str);
    if (node.right) helper(node.right, str);
  }
  if (root) {
    helper(root, '');
  }
  return sum;
};
