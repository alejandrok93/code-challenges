function climbStairs(n, cache = {}) {
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
	//dynamic programming hash table(?)
	if (cache[n]) {
		return cache[n];
	}
	//recursive return statement
	cache[n] =
		climbStairs(n - 1, cache) +
		climbStairs(n - 2, cache) +
		climbStairs(n - 3, cache);

	return cache[n];
}

console.log(climbStairs(3)); // should print 4
