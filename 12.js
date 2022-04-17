// Create and print an array containing all of the words that end in "GHTLY"

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (word.includes('GHTLY')) {
				result.push(word);
			}
		});
	console.log(result);
});
