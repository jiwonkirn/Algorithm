// FIRST
var kthSmallest = function(root, k) {
  const stack = [];
  let res = 0;
  if (root) stack.push(root);
  while (stack.length) {
    let data = stack[stack.length - 1].left;
    while (data) {
      stack.push(data);
      data = data.left;
    }

    data = stack.pop();

    if (++res === k) return data.val;
    if (data.right) stack.push(data.right);
    else {
      while (stack.length && !data.right) {
        data = stack.pop();
        if (++res === k) return data.val;
      }
      if (data.right) stack.push(data.right);
    }
  }
};

// SECOND
var kthSmallest = function(root, k) {
  const stack = [];
  let res = 0;
  let cur = root;
  while (stack.length || res != null) {
    while (cur != null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (++res === k) return cur.val;
    cur = cur.right;
  }
  return -1;
};
