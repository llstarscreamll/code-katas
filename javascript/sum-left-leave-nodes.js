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
