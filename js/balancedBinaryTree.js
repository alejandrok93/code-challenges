// write a function that checks to see if a given binary tree is perfectly balanced, meaning all leaf nodes are located at the same depth. Your function should return true if the tree is perfectly balanced and false otherwise.

class BinaryTreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insertLeft(value) {
		this.left = new BinaryTreeNode(value);
		return this.left;
	}

	insertRight(value) {
		this.right = new BinaryTreeNode(value);
		return this.right;
	}
}

function balanceBinaryTree(node) {
	// do something
	console.log(node);
}

let tree = new BinaryTreeNode(10);
tree.insertLeft(7);
tree.insertRight(14);
console.log(tree);
