// first
// shift / unshift가 많아서 좋아보이지 않음.
var zigzagLevelOrder = function(root) {
  const res = [];
  let direction = false;
  const queue = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const len = queue.length;
    const cur = [];
    if (direction) {
      for (var i = 0; i < len; i++) {
        const node = queue.pop();
        if (node.right) {
          queue.unshift(node.right);
        }
        if (node.left) {
          queue.unshift(node.left);
        }
        cur.push(node.val);
      }
      direction = false;
    } else {
      for (var i = 0; i < len; i++) {
        const node = queue.shift();
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
        cur.push(node.val);
      }
      direction = true;
    }
    res.push(cur);
  }
  return res;
};
