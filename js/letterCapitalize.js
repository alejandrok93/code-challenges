//have the function letter capitalize(str) take the str parameter being passed and capitalize the first letter of each word, Words will be seperated by only one space.//

function LetterCapitalize(str) {
	result = '';
	arr = str.split(' ');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	return arr.join(' ');
}

console.log(LetterCapitalize('hello my friend'));
