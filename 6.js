// What are all of the words that have a B and an X and are less than 5 letters long?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (word.length < 5 && word.includes('B') && word.includes('X')) {
				result.push(word);
			}
		});
	console.log(result);
});
