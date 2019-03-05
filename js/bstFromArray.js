// Given an array that is sorted in ascending order containing unique integer elements, write a function that receives the sorted array as input and creates a valid binary search tree with minimal height.
class BinaryTreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function bstFromAray(arr) {
	//get root node in the middle of array

	if (arr.length === 0) {
		return null;
	}
	let mid = Math.floor(arr.length / 2);
	rootNode = new BinaryTreeNode(arr[mid]);

	rootNode.left = bstFromAray(arr.slice(0, mid - 1));
	rootNode.right = bstFromAray(arr.slice(mid + 1));
	//loop to the left and position elements to its left side

	return rootNode;
	//loop to the right and position elements to its right side
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(bstFromAray(arr));
