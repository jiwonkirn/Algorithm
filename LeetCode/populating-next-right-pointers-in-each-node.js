// mine
// queue를 통해 한 계층씩 확인
// bfs
var connect = function(root) {
  const queue = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const len = queue.length;
    for (var i = 0; i < len; i++) {
      const cur = queue.shift();
      if (cur.left) {
        queue.push(cur.left);
        queue.push(cur.right);
      }
      if (i !== len - 1) cur.next = queue[0];
    }
  }
  return root;
};
