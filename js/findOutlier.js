function isOddNum(num) {
	return num % 2;
}

//Need to figure out if set of integers are odd or even

function findOutlier(integers) {
	let outlier = null;
	let isOdd = false;

	if (isOddNum(integers[0]) === 1 && isOddNum(integers[1] === 1)) {
		isOdd = true;
	}

	if (isOdd === true) {
		console.log('contains odd numbers');
	} else console.log('contains even numbers');
}

findOutlier([0, 1, 2]); // even numbers, should return 1
findOutlier([1, 2, 3]); // odd numbers, should return 2
findOutlier([2, 6, 8, 10, 3]); // even numbers, should return 3
findOutlier([0, 0, 3, 0, 0]); // even numbers, should return 3
findOutlier([1, 1, 0, 1, 1]); // odd numbers, should return 0

console.log(isOddNum(3));
