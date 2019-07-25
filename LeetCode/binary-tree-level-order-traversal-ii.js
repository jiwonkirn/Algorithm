// mine
// 아래 노드까지 탐색한 뒤
// 아래 노드부터 push
var levelOrderBottom = function(root) {
  const res = [];
  function helper(arr) {
    if (!arr.length) return;
    const nextArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].left) {
        nextArr.push(arr[i].left);
      }
      if (arr[i].right) {
        nextArr.push(arr[i].right);
      }
    }
    helper(nextArr);
    res.push(arr.map((i) => i.val));
  }
  if (root) {
    helper([root]);
  }
  return res;
};

// mine2
// 위 노드부터 쌓은 뒤 배열 뒤집기
var levelOrderBottom = function(root) {
  const res = [];
  function helper(node, n) {
    if (!node) return;
    if (!res[n]) res[n] = [];
    res[n].push(node.val);
    if (node.left) {
      helper(node.left, n + 1);
    }
    if (node.right) {
      helper(node.right, n + 1);
    }
  }
  helper(root, 0);
  return res.reverse();
};
