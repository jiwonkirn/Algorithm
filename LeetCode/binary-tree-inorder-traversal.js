// Mine
// left가 있으면 left로 뻗어나간 뒤 left의 val를 push 하고
// 그 다음 right를 찾은뒤 right의 left를 또 찾는다.
// 재귀를 사용함.
var inorderTraversal = function(root) {
  const arr = [];
  function helper(node) {
      if (node.left) {
          helper(node.left);
      }
      arr.push(node.val);
      if (node.right) {
          helper(node.right);
      }
  }
  if (root) {
      helper(root);    
  }
  return arr;
};

// Other's
// left가 없을때까지 left를 스택에 쌓은 뒤
// stack의 가장 최근 요소를 꺼내서
// 해당 값을 push하고, 
// right로 바꾸어 right의 left를 더 추적하도록 한다.
var inorderTraversal = function(root) {
  const arr = [];
  const stack = [];
  let cur = root;
  while (true) {
      while(cur != null) {
          stack.push(cur);
          cur = cur.left;
      }
      if (stack.length === 0) {
          break;
      }
      cur = stack.pop();
      arr.push(cur.val);
      cur = cur.right;
  }
  return arr;
};
