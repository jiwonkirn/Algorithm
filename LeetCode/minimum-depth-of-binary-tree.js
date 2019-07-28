// mine
// 갈 수 있는 길중에 제일 짧은 길
var minDepth = function(root) {
  let min = Number.MAX_VALUE;
  function helper(node, num) {
    if (!node.right && !node.left) {
      if (min > num) min = num;
      return;
    }
    if (node.left) helper(node.left, num + 1);
    if (node.right) helper(node.right, num + 1);
  }
  if (!root) return 0;
  helper(root, 1);
  return min;
};
