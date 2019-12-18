var binaryTreePaths = function (root) {
  const arr = [];

  function helper(node, s) {
    if (!s) s = `${node.val}`
    else s += `->${node.val}`
    if (!node.left && !node.right) return arr.push(s);
    if (node.left) helper(node.left, s);
    if (node.right) helper(node.right, s);
  }

  if (root) helper(root, '');
  return arr;
};