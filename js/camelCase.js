function toCamelCase(str) {
	if (str.includes('-')) {
		arr = str.split('-');
	} else if (str.includes('_')) {
		arr = str.split('_');
	}

	return arr.map(word => word[0].toUpperCase() + word.slice(1)).join('');
}

console.log(toCamelCase('cat-the-dog'));
console.log(toCamelCase('this_is_a_new_title'));
