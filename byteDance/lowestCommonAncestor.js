/**二叉树的最近公共祖先【二叉树】 */
let visited, parent;
function lowestCommonAncestor(root, p, q) {
  (visited = new Set()), (parent = new Map());

  dfs(root);

  while (p !== null) {
    visited.add(p.val);
    p = parent.get(p.val);
  }

  while (q !== null) {
    if (visited.has(q.val)) return q;
    q = parent.get(q.val);
  }
  return null;
}

function dfs(root) {
  if (root.left !== null) {
    parent.set(root.left.val, root);
    dfs(root.left);
  }
  if (root.right !== null) {
    parent.set(root.right.val, root);
    dfs(root.right);
  }
}
