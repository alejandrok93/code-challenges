function countVotes(arr) {}

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
