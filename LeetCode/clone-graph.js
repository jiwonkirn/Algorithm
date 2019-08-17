// mine
var cloneGraph = function(node) {
  const obj = {};
  function helper(node) {
    const cur = new Node(node.val, []);
    obj[cur.val] = cur;
    for (var i = 0; i < node.neighbors.length; i++) {
      const neigh = node.neighbors[i];
      if (!obj[neigh.val]) {
        cur.neighbors.push(helper(neigh));
      } else {
        cur.neighbors.push(obj[neigh.val]);
      }
    }
    return cur;
  }
  return helper(node);
};
