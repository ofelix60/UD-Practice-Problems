// What are all of the words that have no E or A and are at least 15 letters long?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (word.length >= 15 && !word.includes('E') && !word.includes('A')) {
				result.push(word);
			}
		});
	console.log(result);
});
