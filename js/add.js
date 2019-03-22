function add(num) {
	return num2 => {
		return num + num2;
	};
}

console.log(add(5)(5));
