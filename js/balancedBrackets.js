// Write a function balancedBrackets that receives a string of opening and closing brackets and determines whether or not the string's openers and closers are properly nested.

// The possible opening brackets are [, {, and (. The corresponding closers are ], }, and ).

function balancedBrackets(str) {
	square_bracket = [];
	curly_bracket = [];
	parentheses_bracket = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '[' || str[i] === '{' || str[i] === '(') {
			// opening
			if (str[i] === '[') {
				square_bracket.push(str[i]);
			} else if (str[i] === '{') {
				curly_bracket.push(str[i]);
			} else if (str[i] === '(') {
				parentheses_bracket.push(str[i]);
			}
			//check what type
		}
		if (str[i] === ']' || str[i] === '}' || str[i] === ')') {
			// closing
			//check what type
			if (str[i] === ']') {
				square_bracket.pop();
			} else if (str[i] === '}') {
				curly_bracket.pop();
			} else if (str[i] === ')') {
				parentheses_bracket.pop();
			}
		}
	}
	return square_bracket.length +
		curly_bracket.length +
		parentheses_bracket.length ===
		0
		? true
		: false;

	console.log(square_bracket);
	console.log(curly_bracket);
	console.log(parentheses_bracket);
}

/* Some console.log tests */
console.log(balancedBrackets('{}[]()')); // should print true
console.log(balancedBrackets('{(([]))}')); // should print true
console.log(balancedBrackets('{ [ ] ( ) }')); // should print true
console.log(balancedBrackets('{ [ ( ] ) }')); // should print false
console.log(balancedBrackets('(')); // should print false
console.log(balancedBrackets('{[}')); // should print false
