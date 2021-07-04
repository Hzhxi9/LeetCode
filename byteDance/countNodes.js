/**完全二叉树的节点个数【二叉树】 */

function countNodes(root) {
  if (root === null) return 0;
  let l = root,
    r = root;

  let lh = 0,
    rh = 0;

  while (l !== null) {
    l = l.left;
    lh++;
  }

  while (r !== null) {
    r = r.right;
    rh++;
  }

  if (lh === rh) return Math.pow(2, lh) - 1;

  return 1 + countNodes(root.left) + countNodes(root.right);
}
