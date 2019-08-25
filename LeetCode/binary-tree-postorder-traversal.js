// mine
// hard 난이도였는데 무난한 후위 순회 알고리즘이어서 쉽게 풀음
var postorderTraversal = function(root) {
  const arr = [];
  function helper(node) {
      if (!node) return arr;
      helper(node.left);
      helper(node.right);
      arr.push(node.val);
      return arr;
  }
  return helper(root);
};