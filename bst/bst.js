/* Binary Search Tree */

/*
Node: All data points in the tree are Node
RootNode: top of the tree is called root node
ParentNode: node with children
leafNode: at the end of the tree with no children
*/

/*
Binay Search Tree, will also have 2 branches for each node
Binay Search Tree are ordered,
- each left subtree is less than or equal to the parent node
- each right subtree is greater than or equal to the parent node
*/

class Node {
 constructor(data, left = null, right = null) {
   this.data = data;
   this.left = left;
   this.right = right;
 }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    var node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while(current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while(current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while(current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while(current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node.data === data) {
        // when no children return null
        if (node.left === null && node.right === null) {
          return null;
        }
        // return right node when left child is null
        if (node.left === null) {
          return node.right;
        }
        // node has no right child
        if (node.right === null) {
          return node.left;
        }
        // when node has two children
        var tempNode = node.right;
        while(tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return  node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return  node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }

  print() {
    var printer = '';
    const printNode = function(node) {
      printer += '\t\t';
      printer += node.data;
      if (node.left !== null && node.right !== null) {
        printer += '\n';
        printer += '\t/\t\\';
        printer += '\n';
        printNode(node.left);
      }
      if (node.left !== null) {
        printer += '\n';
        printer += '/';
        printer += '\n';
        printNode(node.left);
      }
      if (node.right !== null) {
        printer += '\n';
        printer += '\t\t\\';
        printer += '\n';
        printNode(node.right);
      }
      printer += node.data;
      return printer;
    };
    console.log(printNode(this.root));
  }
}

const bst = new BST();

// bst.add(50);
// bst.add(17);
// bst.add(72);
// bst.add(12);
// bst.add(23);
// bst.add(54);
// bst.add(76);
// bst.add(9);
// bst.add(14);
// bst.add(19);
// bst.add(67);

// bst.print();

// console.log(bst.findMin());
// console.log(bst.findMax());
// console.log(bst.find(72));
// console.log(bst.isPresent(17));
// console.log(bst.isPresent(7));
// bst.remove(17)
// console.log(bst.isPresent(17))



bst.add(9);
bst.add(17);
bst.add(4);
bst.add(22);
bst.add(20);
bst.add(6);
bst.add(3);
bst.add(5);
bst.add(7);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// bst.add(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());

console.log('inOrder: ' + bst.inOrder())
console.log('preOrder: ' + bst.preOrder())
console.log('postOrder: ' + bst.postOrder())
console.log('levelOrder: ' + bst.levelOrder())
