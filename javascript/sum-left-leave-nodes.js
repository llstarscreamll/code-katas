/**
 * Given a Binary Tree, find the sum of all left leaves in it. For example, sum
 * of all left leaves in below Binary Tree is 4 + 7 + 8 = 19.
 *           1
 *         /   \
 *       2       5
 *         \        \
 *           3        6
 *         /        /   \
 *       4        7       7
 *                      /
 *                    8
 */
function sumLeftLeaveNodes(node) {
  let result = 0;

  if (node.left != null) {
    if (node.left.left == null && node.left.right == null) {
      result += node.left.value;
    } else {
      result += sumLeftLeaveNodes(node.left);
    }
  }

  if (node.right != null) {
    result += sumLeftLeaveNodes(node.right);
  }

  return result;
}

module.exports = sumLeftLeaveNodes;
