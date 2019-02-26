function countVotes(arr) {
	//declare empty object votes
	let votes = {};
	let winner = arr[0];
	//loop through arr
	arr.forEach(name => {
		//check if name exists object
		if (votes[name]) {
			//if the name exists, add new votes
			votes[name]++;
		} else {
			// if does not, add to object
			votes[name] = 1;
		}

		if (votes[name] === votes[winner]) {
			if (name > winner) {
				winner = name;
			}
		}
		if (votes[name] > votes[winner]) {
			winner = name;
		}
	});

	//console.log(votes);
	return winner;
}

const votes = [
	'veronica',
	'mary',
	'alex',
	'james',
	'mary',
	'michael',
	'alex',
	'michael'
];

console.log(countVotes(votes)); // should return 'michael'

console.log(
	countVotes([
		'john',
		'johnny',
		'jackie',
		'johnny',
		'john',
		'jackie',
		'jamie',
		'jamie',
		'john',
		'johnny',
		'jamie',
		'johnny',
		'john'
	])
);
