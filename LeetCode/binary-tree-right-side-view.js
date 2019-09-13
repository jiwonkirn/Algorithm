// MEDIUM

// mine
// BFS
var rightSideView = function(root) {
  const queue = [];
  const res = [];
  if (root) queue.push(root);
  while (queue.length > 0) {
    const len = queue.length;
    res.push(queue[len - 1].val);
    for (let i = 0; i < len; i++) {
      const first = queue.shift();
      if (first.left) queue.push(first.left);
      if (first.right) queue.push(first.right);
    }
  }
  return res;
};

// other's
// DFS
var rightSideView = function(root) {
  let output = [];

  function dfs(node, level) {
    if (!node) return;
    if (output.length === level) output.push(node.val);
    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  }

  dfs(root, 0);
  return output;
};
