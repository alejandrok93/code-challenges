const axios = require('axios');

async function getPhotos() {
	let url = 'https://picsum.photos/v2/list';
	console.log('lets get these photos!');

	const photos = await axios.get(url);
	console.log('got them!');
	console.log(photos);
}

console.log(getPhotos());
