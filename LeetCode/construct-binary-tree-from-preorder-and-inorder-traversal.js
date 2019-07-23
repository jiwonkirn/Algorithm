// mine
// 엄청 많은 메모리와 시간을 사용함...
// 배열을 복사해서 조건을 줌.
var buildTree = function(preorder, inorder) {
  if (!preorder[0]) return null;
  const root = new TreeNode(null);
  function helper(node, prearr, inarr) {
    if (!prearr.length) return;
    node.val = prearr[0];
    if (prearr.length === 1) return;
    const index = inarr.indexOf(node.val);
    if (index === 0 && inarr.length > 1) {
      node.right = new TreeNode(null);
      helper(node.right, prearr.slice(1), inarr.slice(index + 1));
    } else if (index === inarr.length - 1) {
      node.left = new TreeNode(null);
      helper(node.left, prearr.slice(1), inarr.slice(0, index));
    } else {
      node.left = new TreeNode(null);
      node.right = new TreeNode(null);
      helper(node.left, prearr.slice(1, index + 1), inarr.slice(0, index));
      helper(node.right, prearr.slice(index + 1), inarr.slice(index + 1));
    }
  }
  helper(root, preorder, inorder);
  return root;
};

// other's
// 줄 수 있는 left까지 내려간 뒤 내려가면서 p++
// 그 left가 inorder의 처음과 일치하면 i을 더한다.
// 땡겨진 함수는 i를 추가시키고, 오른쪽을 확인한다.
// 사실 아직도 대충 이해했다ㅠ
// 하루종일 잡고 있을 수가 없어서 기술부채로..
var buildTree = function(preorder, inorder) {
  let p = 0;
  let i = 0;
  function helper(left) {
    if (left != inorder[i]) {
      const root = new TreeNode(preorder[p++]);
      root.left = helper(root.val);
      i++;
      root.right = helper(left);
      return root;
    }
    return null;
  }
  return helper(null);
};
