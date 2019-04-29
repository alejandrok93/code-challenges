function isOddNum(num) {
	let result = num % 2;
	return result;
}

//Need to figure out if set of integers are odd or even

function findOutlier(integers) {
	let outlier = null;
	let isOdd = false;

	let odds = integers.filter(integer => {
		if (isOddNum(integer) === 1) {
			return integer;
		}
	});

	let evens = integers.filter(integer => {
		if (integer === 0) {
			return integer;
		}

		if (isOddNum(integer) === 0) {
			return integer;
		}
	});

	if (odds.length === 1) {
		isOdd = false;
	} else if (evens.length === 1) {
		isOdd = true;
	}

	if (isOdd === true) {
		outlier = evens[0];
	} else if (isOdd === false) {
		outlier = odds[0];
	}

	console.log(outlier);
	return outlier;
}

findOutlier([9, 3, 7, 6, 11, 13, 17]); // odd numbers, should return 6
findOutlier([0, 1, 2]); // even numbers, should return 1
findOutlier([1, 2, 3]); // odd numbers, should return 2
findOutlier([2, 6, 8, 10, 3]); // even numbers, should return 3
findOutlier([0, 0, 3, 0, 0]); // even numbers, should return 3
findOutlier([1, 1, 0, 1, 1]); // odd numbers, should return 0
