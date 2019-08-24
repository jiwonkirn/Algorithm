// mine
// 난이도 medium인데 기본적인 전위 순회 내용이라 좀 쉬웠다.
var preorderTraversal = function(root) {
  const arr = [];
  function helper(node) {
    if (!node) return arr;
    arr.push(node.val);
    helper(node.left);
    helper(node.right);
    return arr;
  }
  return helper(root);
};
