function climbStairs(n) {
	//set up base cases
	if (n === 0) {
		return 1;
	}
	if (n === 1) {
		return 1;
	}
	if (n === 2) {
		return 2;
	}
	if (n === 3) {
		return 4;
	}
	//recursive return statement
}

console.log(climbStairs(3)); // should print 4
