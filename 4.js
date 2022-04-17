// What are all of the words that contain the word CAT and are exactly 5 letters long?
const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (word.includes('CAT') && word.length === 5) {
				result.push(word);
			}
		});
	console.log(result);
});
