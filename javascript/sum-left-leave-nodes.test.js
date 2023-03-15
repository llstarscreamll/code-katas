const sumLeftLeaveNodes = require("./sum-left-leave-nodes");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

describe.each([
  [
    () => {
      let root = new Node(1);
      root.left = new Node(2);
      root.right = new Node(3);

      return root;
    },
    2,
  ],
  [
    () => {
      let root = new Node(1);
      root.left = new Node(2);
      root.left.left = new Node(3);
      root.right = new Node(4);

      return root;
    },
    3,
  ],
  [
    () => {
      let root = new Node(1);
      root.left = new Node(2);
      root.left.right = new Node(3);
      root.left.right.left = new Node(4);
      
      root.right = new Node(5);

      return root;
    },
    4,
  ],
  [
    () => {
      let root = new Node(1);
      root.left = new Node(2);
      root.left.right = new Node(3);
      root.left.right.left = new Node(4);
      
      root.right = new Node(5);
      root.right.right = new Node(6);
      root.right.right.right = new Node(7);
      root.right.right.right.left = new Node(8);

      return root;
    },
    12,
  ],
  [
    () => {
      let root = new Node(1);
      root.left = new Node(2);
      root.left.right = new Node(3);
      root.left.right.left = new Node(4);
      
      root.right = new Node(5);
      root.right.right = new Node(6);
      root.right.right.right = new Node(7);
      root.right.right.left = new Node(7);
      root.right.right.right.left = new Node(8);

      return root;
    },
    19,
  ],
  [
    () => {
      let root = new Node(9);
      root.left = new Node(8);
      root.left.left = new Node(5);
      root.left.right = new Node(2);
      
      root.right = new Node(6);
      root.right.left = new Node(1);

      return root;
    },
    6,
  ],
])('sumLeftLeaveNodes("%s")', (input, expected) =>
  test(`returns ${expected}`, () =>
    expect(sumLeftLeaveNodes(input())).toBe(expected))
);
