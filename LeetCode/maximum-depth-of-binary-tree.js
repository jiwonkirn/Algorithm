// mine
// 기록된 depth보다 깊은 depth에 도달하면
// 최고 depth를 바꾼다.
// easy라 그런지 빨리 풀었다.
var maxDepth = function(root) {
  let res = 0;
  function helper(depth, node) {
    if (node) {
      const nextDepth = depth + 1;
      if (res < nextDepth) {
        res = nextDepth;
      }
      helper(nextDepth, node.left);
      helper(nextDepth, node.right);
    }
  }
  helper(res, root);
  return res;
};

// other's
var maxDepth = function(root) {
  return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
