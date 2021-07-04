/**二叉搜索树中的搜索【二叉树】 */
function searchBST(root, val) {
  if (root === null) return null;
  if (root.val === val) return root;
  if (root.val > val) return searchBST(root.left, val);
  else if (root.val < val) return searchBST(root.right, val);
}
