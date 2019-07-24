// mine
// 해당 node의 루트를 찾은 뒤 left 혹은 right로 나뉘어질 수 있는지 확인한다.
// postorder를 오른쪽(그리고 right)부터 채워서 트리를 만든다.
var buildTree = function(inorder, postorder) {
  if (!inorder.length) return null;
  let cur = inorder.length - 1;
  function helper(start, end) {
    if (start > end) return null;
    const value = postorder[cur--];
    const node = new TreeNode(value);
    const index = inorder.slice(start, end + 1).indexOf(value) + start;
    if (index === start) {
      node.right = helper(start + 1, end);
    } else if (index === end) {
      node.left = helper(start, end - 1);
    } else {
      node.right = helper(index + 1, end);
      node.left = helper(start, index - 1);
    }
    return node;
  }
  return helper(0, inorder.length - 1);
};

// other's
// Map 자료구조를 이용한듯 하다.
// 공간 복잡도가 낮다.
var buildTree = function(inorder, postorder) {
  return iterativeBuildTree(inorder, postorder);
};

var iterativeBuildTree = function(inorder, postorder) {
  let inMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inMap.set(inorder[i], i);
  }
  let parents = [];
  let root = null;
  for (let i = postorder.length - 1; i >= 0; i--) {
    let node = new TreeNode(postorder[i]);
    if (parents.length) {
      let parent = parents[parents.length - 1];
      while (
        parents.length &&
        inMap.get(node.val) < inMap.get(parents[parents.length - 1].val)
      ) {
        parent = parents.pop();
      }
      if (inMap.get(node.val) < inMap.get(parent.val)) {
        parent.left = node;
      } else {
        parent.right = node;
      }
    } else {
      root = node;
    }
    parents.push(node);
  }
  return root;
};

var recursiveBuildTree = function(inorder, postorder, a1, b1, a2, b2) {
  if (a1 > b1) return null;
  let root = new TreeNode(postorder[b2]);
  for (let i = a1; i <= b1; i++) {
    if (inorder[i] == root.val) {
      root.left = recursiveBuildTree(
        inorder,
        postorder,
        a1,
        i - 1,
        a2,
        a2 + i - a1 - 1
      );
      root.right = recursiveBuildTree(
        inorder,
        postorder,
        i + 1,
        b1,
        a2 + i - a1,
        b2 - 1
      );
      return root;
    }
  }
  return root;
};
