// What are all of the words that have all 5 vowels, in any order?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (
				word.includes('A') &&
				word.includes('E') &&
				word.includes('I') &&
				word.includes('O') &&
				word.includes('U')
			) {
				result.push(word);
			}
		});
	console.log(result);
});
