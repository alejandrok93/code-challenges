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
	let rootItem = Math.floor(arr.length / 2);
	let left = arr.slice(0, rootItem - 1);
	let right = arr.slice(rootItem + 1, arr.length);
	//loop to the left and position elements to its left side
	//loop to the right and position elements to its right side
}
