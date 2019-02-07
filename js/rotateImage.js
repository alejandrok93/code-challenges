// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 to 9, write a function rotateImage that rotates the image by 90 degrees in the counter-clockwise direction.

function rotateImage(matrix) {
	//rotate image
	matrix.forEach(row => {
		row.reverse();
	});

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
		}
	}

	return matrix;
}

console.log(rotateImage([[1, 2], [3, 4]]));
