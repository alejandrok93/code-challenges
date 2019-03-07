// write a function that checks to see if a given binary tree is perfectly balanced, meaning all leaf nodes are located at the same depth. Your function should return true if the tree is perfectly balanced and false otherwise.
function balancedBinaryTree(node) {
	let leftLevels = 0;
	let rightLevels = 0;
	let current_node = tree;
	while (current_node.left) {
		current_node = tree.left;
		leftLevels++;
	}

	let current_right_node = tree;
	while (current_right_node.right) {
		current_right_node = tree.right;
		rightLevels++;
	}
	// console.log("left levels: " + leftLevels);
	// console.log("right levels: " + rightLevels);

	return Math.abs(leftLevels - rightLevels) === 0;

	// //Depth First Traversal
	// let visited = new Set();
	// let stack = [];
	// let traversal = [];

	// stack.push([tree]);
	// let i = 0;

	// while(stack.length > 0 || i < 5) {
	//   let tmp = stack.pop();
	//   let node = tmp[tmp.length-1];
	//   console.log(tmp)
	//   console.log(node);
	//   traversal.push(node.value);

	//   if (!visited.has(node.value)) {
	//   for (child in node) {

	//     if (child) {
	//     let tmp_path = tmp.slice();
	//     tmp_path.push(child.value);
	//     stack.push(tmp_path);
	//     visited.add(child.value);
	//     }
	//   }
	//   }
	// i++;
	// }
}

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

let tree = new BinaryTreeNode(10);
tree.insertLeft(7);
tree.insertRight(14);
console.log(tree);
