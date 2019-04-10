function wrap(execute) {
	// Return modified function
	let error;

	return () => {
		if (error === true) {
			console.log('previous exec returned error');
			return null;
		}

		try {
			result = execute();
		} catch (error) {
			error = true;
			return null;
		}
		return result;
	};
}

var errorExec = wrap(function() {
	throw new Error('Error');
});
var resultExec = wrap(function() {
	return 'Result';
});
console.log(errorExec && errorExec()); // Should output null
console.log(errorExec && resultExec()); // Should output "Result"
