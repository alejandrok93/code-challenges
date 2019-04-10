/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
	// code goes here
	let minNum = nums[0];
	let prevNum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		prevNum = nums[i - 1];
		let currNum = nums[i];

		if (currNum < prevNum) {
			minNum = currNum;
		}

		console.log(prevNum + ' is smaller than ' + currNum);
	}
	return minNum;
};

// const nums = [1,3,5];
const nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums));
